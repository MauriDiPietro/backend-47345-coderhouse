import fs from "fs";
import { uuid } from "uuidv4";

export default class DaoFile {
  constructor(path) {
    this.path = path;
  }

  async getAllNews() {
    try {
      if (fs.existsSync(this.path)) {
        const news = await fs.promises.readFile(this.path, 'utf-8');
        return JSON.parse(news)
      } else {
        return []
      }
    } catch (error) {
      console.log(error);
    }
  }

  async getNew(id) {
    try {
      const news = await this.getAllNews();
      const getNew = news.find((news) => news.id === id);
      return getNew;
    } catch (error) {
      console.log(error);
    }
  }

  async createNew(obj) {
    try {
      obj.id = uuid();
      obj.createdAt = Date.now();
      const news = await this.getAllNews();
      news.push(obj);
      fs.promises.writeFile(this.path, JSON.stringify(news));
      return obj;
    } catch (error) {
      console.log(error);
    }
  }
}
