import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { User } from '@/db/model/User';
import { databaseConnect } from '@/db/utils/dbConnect';

export default async function handler(req, res) {
  if (req.method !== 'POST')
    return res.status(500).json({
      message: 'Something went wrong',
    });

  try {
    await databaseConnect();

    const { username, email, password } = await req.body;

    const checkExistingUser = await User.findOne({ email });
    if (checkExistingUser)
      return res.status(422).json({
        message: 'User Already Exists...!',
        data: checkExistingUser,
      });

    const hashedPassword = await bcrypt.hash(password, 12);
    const newUser = await new User({
      username,
      email,
      password: hashedPassword,
    });

    const savedUser = await newUser.save();
    console.log('saved user ', savedUser);

    const token = jwt.sign(
      {
        _id: newUser?._id,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: `${process.env.JWT_EXPIRE}s`,
      }
    );

    res.status(200).json({
      message: 'User added successfully!!',
      accessToken: token,
      data: savedUser,
    });
  } catch (err) {
    // console.log(err)
    res.status(500).json({ message: 'Something went wrong' });
  }
}
