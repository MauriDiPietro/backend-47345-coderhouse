export default class DaoMemory {
  constructor(){
      this.news = [];
  }

  async createNew(obj) {
      this.news.push(obj);
      return obj;
  }

  async getAllNews(){
      return this.news;
  }

  async getNew(id){
    return this.news.find((news) => news.id === id);
}
};
