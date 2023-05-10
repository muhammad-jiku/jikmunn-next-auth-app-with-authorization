import bcrypt from 'bcryptjs';
import NextAuth from 'next-auth';
import EmailProvider from 'next-auth/providers/email';
import GoogleProvider from 'next-auth/providers/google';
import GitHubProvider from 'next-auth/providers/github';
import CredentialsProvider from 'next-auth/providers/credentials';
import { MongoDBAdapter } from '@next-auth/mongodb-adapter';
import { User } from '@/db/model/User';

export const authOptions = {
  providers: [
    // EmailProvider({
    //   server: {
    //     host: process.env.EMAIL_SERVER_HOST,
    //     port: process.env.EMAIL_SERVER_PORT,
    //     auth: {
    //       user: process.env.EMAIL_SERVER_USER,
    //       pass: process.env.EMAIL_SERVER_PASSWORD,
    //     },
    //   },
    //   from: process.env.EMAIL_FROM,
    // }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    // CredentialsProvider({
    //   name: 'Credentials',
    //   // credentials: {
    //   //   email: { label: 'Email', type: 'email' },
    //   //   password: { label: 'Password', type: 'password' },
    //   // },
    //   async authorize(credentials, req) {
    //     console.log('req....', req);

    //     await databaseConnect();
    //     const { email, password } = await credentials;
    //     console.log('credentials....', credentials);

    //     const user = await User.findOne({ email });

    //     if (!user) {
    //       throw new Error('Invalid Email or Password!');
    //     }
    //     console.log('hola user ', user);
    //     const isPasswordMatched = await bcrypt.compare(
    //       password,
    //       user?.password
    //     );

    //     if (!isPasswordMatched) {
    //       throw new Error('Invalid Email or Password');
    //     }

    //     return user;
    //   },
    // }),
    CredentialsProvider({
      async authorize(credentials, req) {
        console.log('req....', req);
        await databaseConnect();

        const { email, password } = await credentials;

        const user = await User.findOne({ email }).select('+password');

        if (!user) {
          throw new Error('Invalid Email or Password');
        }

        const isPasswordMatched = await bcrypt.compare(password, user.password);

        if (!isPasswordMatched) {
          throw new Error('Invalid Email or Password');
        }

        return user;
      },
    }),
  ],
  // callbacks: {
  //   async jwt(token, user, account) {
  //     if (user) {
  //       token.email = user.email;
  //       token.role = user.role;
  //     }

  //     if (account?.provider === 'google') {
  //       token.googleId = account.id;
  //     }

  //     if (account?.provider === 'github') {
  //       token.githubId = account.id;
  //     }

  //     return token;
  //   },
  //   async session(session, token) {
  //     session.user.email = token.email;
  //     session.user.role = token.role;
  //     session.user.googleId = token.googleId;
  //     session.user.githubId = token.githubId;

  //     return session;
  //   },
  //   async redirect(url, baseUrl) {
  //     if (url.startsWith(baseUrl)) {
  //       return url;
  //     }

  //     return baseUrl;
  //   },
  //   async jwt(token, user) {
  //     if (user) {
  //       token.email = user.email;
  //       token.role = user.role;
  //     }

  //     return token;
  //   },
  //   async session(session, token) {
  //     session.user.email = token.email;
  //     session.user.role = token.role;

  //     return session;
  //   },
  //   async session(session, token) {
  //     session.user.email = token.email;
  //     session.user.role = token.role;

  //     return session;
  //   },
  // },
  callbacks: {
    jwt: async ({ token, user }) => {
      console.log('token callbacks', token);
      console.log('user callbacks', user);
      user && (token.user = user);

      return token;
    },
    session: async ({ session, token }) => {
      console.log('token sessions', token);
      console.log('session', session);
      session.user = token.user;

      // delete password from session
      delete session?.user?.password;

      return session;
    },
  },
  // adapter: MongoDBAdapter(clientPromise),
  session: {
    jwt: true,
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  // jwt: {
  //   secret: process.env.JWT_SECRET,
  //   encode: async ({ secret, token }) => {
  //     return await verifyToken(token, secret);
  //   },
  //   decode: async ({ secret, token }) => {
  //     return await verifyToken(token, secret);
  //   },
  // },
  pages: {
    signIn: '/signin',
  },
  secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth(authOptions);
