import { PetModel } from "./models/pet.model.js";
import { UserModel } from "./models/user.model.js";

export default class PetDaoMongoDB {

  async addPetToUser(userId, petId){
    try {
      const user = await UserModel.findById(userId);
      user.pets.push(petId);
      user.save();
      return user;
    } catch (error) {
      console.log(error);
    }
  }

  async getPetById(id) {
    try {
      const response = await PetModel.findById(id);
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  async getAllPets() {
    try {
      const response = await PetModel.find({});
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  async createPet(obj) {
    try {
      const response = await PetModel.create(obj);
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  async updatePet(id, obj) {
    try {
      await PetModel.updateOne({ _id: id }, obj);
      return obj;
    } catch (error) {
      console.log(error);
    }
  }

  async deletePet(id) {
    try {
      const response = await PetModel.findByIdAndDelete(id);
      return response;
    } catch (error) {
      console.log(error);
    }
  }
}
