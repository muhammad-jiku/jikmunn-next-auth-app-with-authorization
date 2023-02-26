import mongoose from 'mongoose';

export const db_uri = `mongodb+srv://${process.env.DB_AUTHOR}:${process.env.DB_PASS}@cluster0.uo61uba.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

export const databaseConnect = async () => {
  mongoose.set('strictQuery', false);
  await mongoose
    .connect(db_uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log('DB connected!!');
    })
    .catch((err) => {
      console.error('Connection error', err);
      process.exit();
    });
};
