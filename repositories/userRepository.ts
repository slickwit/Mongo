import { User, UserModel } from "../models/userModel";
import { FilterQuery, UpdateQuery } from "mongoose";

// Purpose: This file is responsible for handling all the database operations related to the user model.
export class UserRepository {
  async getUser(id: string): Promise<UserModel | null> {
    return User.findById(id);
  }

  async getUsers(): Promise<UserModel[]> {
    return User.find();
  }

  async createUser(userData: Partial<UserModel>): Promise<UserModel> {
    return User.create(userData);
  }

  async updateUser(id: string, userData: Partial<UserModel>): Promise<UserModel | null> {
    return User.findByIdAndUpdate(id, userData, { new: true });
  }

  async deleteUser(id: string): Promise<UserModel | null> {
    return User.findByIdAndDelete(id);
  }

  async searchAndUpdate(
    query: FilterQuery<UserModel>,
    update?: UpdateQuery<UserModel>,
    options?: { multi?: boolean }
  ): Promise<UserModel | null | { modifiedCount: number }> {
    if (update) {
      if (options?.multi) {
        const result = await User.updateMany(query, update);
        return { modifiedCount: result.modifiedCount };
      } else {
        return await User.findOneAndUpdate(query, update, { new: true });
      }
    } else {
      return await User.findOne(query);
    }
  }
}
