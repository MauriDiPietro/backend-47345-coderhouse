import { getDao } from "../DAOS/news.factory.js";
import { newsDTO } from "../DTO/news.dto.js";

export default class NewsRepository {
    constructor() {
        this.dao = getDao();
    }

    async getAllNews() {
        const listNews = await this.dao.getAllNews();
        const listNewsDTO = newsDTO(listNews);
        return listNewsDTO;
    }

    async createNew(obj) {
        const newCreated = await this.dao.createNew(obj);
        return newCreated;
    }

    async getNew(id) {
        const getNew = await this.dao.getNew(id);
        return getNew;
    }

    async updateNew(id, body) {
        const updateNew = await this.dao.updateNew(id, body);
        return updateNew;
    }

    async deleteNew(id) {
        const deleteNew = await this.dao.deleteNew(id);
        return deleteNew;
    }
    
    async deleteAllNews() {
        const deleteNew = await this.dao.deleteAllNews();
        return deleteNew;
    }
}