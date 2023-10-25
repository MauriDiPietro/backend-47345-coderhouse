import fs from "fs";
import crypto from "crypto";

export class UserManager {
  constructor(path) {
    this.path = path;
  }

  async getUsers() {
    try {
      if (fs.existsSync(this.path)) {
        const usersJSON = await fs.promises.readFile(this.path, "utf-8");
        return JSON.parse(usersJSON);
      } else return [];
    } catch (error) {
      console.log(error);
    }
  }

  async getUsersByLimit(limit){
    try {
        const users = await this.getUsers();
        if(!limit || limit >= users.length) return users;
        else return users.slice(0, limit);
    } catch (error) {
        console.log(error);
    }
  }

  async #getMaxId() {
    let maxId = 0;
    const users = await this.getUsers();
    users.map((user) => {
      if (user.id > maxId) maxId = user.id;
    });
    return maxId;
  }

  async createUser(obj) {
    try {
      const user = {
        id: (await this.#getMaxId()) + 1,
        ...obj,
      };
      const users = await this.getUsers();

      user.salt = crypto.randomBytes(128).toString();
      user.password = crypto
        .createHmac("sha256", user.salt)
        .update(user.password)
        .digest("hex");

      users.push(user);
      await fs.promises.writeFile(this.path, JSON.stringify(users));
      return user;
    } catch (error) {
      console.log(error);
    }
  }

  async validateUser(username, password) {
    try {
      const users = await this.getUsers();
      const user = users.find((usr) => usr.username === username);
      if (!user) {
        console.log("Error: user o password not found");
        return;
      }
      const passLoginCrypto = crypto
        .createHmac("sha256", user.salt)
        .update(password)
        .digest("hex");
      if (user.password === passLoginCrypto) console.log("Login OK!");
      else console.log("Error: user/pass incorrect!");
    } catch (error) {
      console.log(error);
    }
  }

  async getUserById(id) {
    try {
        const users = await this.getUsers();
        const user = users.find(user => user.id === id);
        if(!user) return false;
        return user;
    } catch (error) {
        console.log(error);
    }
  }

  async updateUser(obj, id){
    try {
        const users = await this.getUsers();    // [{},{}]
        const index = users.findIndex(user => user.id === id);  // posición ó -1
        if(index === -1) return false;
        else{
            const userUpdt = { ...obj, id };
            userUpdt.salt = crypto.randomBytes(128).toString();
            userUpdt.password = crypto
                .createHmac("sha256", userUpdt.salt)
                .update(userUpdt.password)
                .digest("hex");
            users[index] = userUpdt;
        }
        await fs.promises.writeFile(this.path, JSON.stringify(users));
    } catch (error) {
        console.log(error);
    }
  }

  async deleteUser(id){
    try {
        const users = await this.getUsers();
        if(users.length < 0) return false;
        const newArray = users.filter(user => user.id !== id);
        await fs.promises.writeFile(this.path, JSON.stringify(newArray));
    } catch (error) {
        console.log(error);
    }
  }
}
