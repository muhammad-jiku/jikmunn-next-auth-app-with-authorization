import mongoose from 'mongoose';
import { User } from '../models/User';

export const MongooseAdaptar = () => {
  return {
    //  displaying user by id
    async getUser(id) {
      const user = await User.findById(id);
      return user;
    },
    //  displaying user by mail
    async getUserByEmail(email) {
      const user = await User.findOne({ email });
      return user;
    },
    //    updating user
    async updateUser(user) {
      const result = await User.findByIdAndUpdate(user._id, user);
      return result;
    },
    //    creating user
    async createUser(user) {
      const newUser = new User(user);
      await newUser.save();
      return newUser._id.toString();
    },
    // deleting user
    async deleteUser(userId) {
      const result = await User.findByIdAndDelete(userId);
      return result;
    },
    //    getting verifcation req
    async getVerificationRequest(identifier, token) {
      // const verificationRequest = await db
      //   .collection('verificationRequests')
      //   .findOne({ identifier, token })
      // return verificationRequest
    },
    //    saving verifcation request
    async saveVerificationRequest(identifier, token, expires, url) {
      // Save verification request to database
    },
    //    delting verification request
    async deleteVerificationRequest(identifier, token) {
      // Delete verification request from database
    },
  };
};
