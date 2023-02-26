const mongoose = require('mongoose');

export const db_uri = `mongodb+srv://${process.env.DB_AUTHOR}:${process.env.DB_PASS}@cluster0.uo61uba.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

const databaseConnect = () => {
  mongoose.set('strictQuery', false);
  mongoose
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

module.exports = databaseConnect;
