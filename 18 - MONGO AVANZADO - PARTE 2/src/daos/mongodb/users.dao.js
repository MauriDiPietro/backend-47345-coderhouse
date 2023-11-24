import { getRandomNumber } from "../../utils.js";
import { UserModel } from "./models/user.model.js";

export default class UserDaoMongoDB {
  async aggregation1(gender) {
    try {
      return await UserModel.aggregate([
        {
          $match: {
            gender: gender,
            age: { $gte: 18 },
          },
        },
        {
          $sort: {
            age: 1,
          },
        },
      ]);
    } catch (error) {
      console.log(error);
    }
  }

  async aggregation2() {
    try {
      return await UserModel.aggregate([
        {
          $match: {
            age: { $gte: 18 }
          }
        },
        {
          $group: {
            _id: '$gender',
            average_age: { $avg: '$age' },
            count: { $sum: 1 },
            youngest: { $min: '$age' }, //edad del mas joven
            oldest: { $max: '$age' }
          }
        },
        {
          $sort: {
            average_age: 1
          }
        }
      ]);
    } catch (error) {
      console.log(error);
    }
  }

  async updateManyAge() {
    try {
      const users = await this.getAllUsers();
      for (const user of users) {
        user.age = getRandomNumber();
        user.save();
      }
      return { mesg: "Update users OK" };
    } catch (error) {
      console.log(error);
    }
  }

  async getUserByName(name) {
    try {
      const response = await UserModel.find({ first_name: name }).explain();
      return response.executionStats;
    } catch (error) {
      console.log(error);
    }
  }

  async getUserByEmail(email) {
    try {
      const response = await UserModel.find({ email: email }).explain();
      return response.executionStats;
    } catch (error) {
      console.log(error);
    }
  }

  async getUserById(id) {
    try {
      const response = await UserModel.findById(id).populate("pets");
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  async getAllUsers(page = 1, limit = 10) {
    try {
      const response = await UserModel.paginate({}, { page, limit });
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  async createUser(obj) {
    try {
      const response = await UserModel.create(obj);
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  async updateUser(id, obj) {
    try {
      await UserModel.updateOne({ _id: id }, obj);
      return obj;
    } catch (error) {
      console.log(error);
    }
  }

  async deleteUser(id) {
    try {
      const response = await UserModel.findByIdAndDelete(id);
      return response;
    } catch (error) {
      console.log(error);
    }
  }
}
