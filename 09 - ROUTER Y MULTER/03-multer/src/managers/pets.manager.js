import fs from "fs";

export class PetManager {
  constructor(path) {
    this.path = path;
  }

  async getPets() {
    try {
      if (fs.existsSync(this.path)) {
        const petsJSON = await fs.promises.readFile(this.path, "utf-8");
        return JSON.parse(petsJSON);
      } else return [];
    } catch (error) {
      console.log(error);
    }
  }

  async getPetsByLimit(limit){
    try {
        const pets = await this.getPets();
        if(!limit || limit >= pets.length) return pets;
        else return pets.slice(0, limit);
    } catch (error) {
        console.log(error);
    }
  }

  async #getMaxId() {
    let maxId = 0;
    const pets = await this.getPets();
    pets.map((user) => {
      if (user.id > maxId) maxId = user.id;
    });
    return maxId;
  }

  async createPet(obj) {
    try {
      const pet = {
        id: (await this.#getMaxId()) + 1,
        ...obj,
      };
      const pets = await this.getPets();
      pets.push(pet);
      await fs.promises.writeFile(this.path, JSON.stringify(pets));
      return pet;
    } catch (error) {
      console.log(error);
    }
  }

  async getPetById(id) {
    try {
        const pets = await this.getPets();
        const pet = pets.find(pet => pet.id === id);
        if(!pet) return false;
        return pet;
    } catch (error) {
        console.log(error);
    }
  }

  async updatePet(obj, id){
    try {
        const pets = await this.getPets();    // [{},{}]
        const index = pets.findIndex(pet => pet.id === id);  // posición ó -1
        if(index === -1) return false;
        else{
            const petUpdt = { ...obj, id };
            pets[index] = petUpdt;
        }
        await fs.promises.writeFile(this.path, JSON.stringify(pets));
    } catch (error) {
        console.log(error);
    }
  }

  async deletePet(id){
    try {
        const pets = await this.getPets();
        if(pets.length < 0) return false;
        const newArray = pets.filter(pet => pet.id !== id);
        await fs.promises.writeFile(this.path, JSON.stringify(newArray));
    } catch (error) {
        console.log(error);
    }
  }
}
