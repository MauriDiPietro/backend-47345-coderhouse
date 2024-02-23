import NewsRepository from "../persistence/repository/news.repository.js";

const newsRepository = new NewsRepository();

export const createNew = async(obj) => {
    const newCreated = await newsRepository.createNew(obj);
    return newCreated;
};

export const getAllNews = async() => {
    const listNews = await newsRepository.getAllNews();
    return listNews;
};

export const getNew = async(id) =>{
    const getNew = await newsRepository.getNew(id);
    return getNew;
};

export const updateNew = async(id, body) =>{
    const updateNew = await newsRepository.updateNew(id, body);
    return updateNew;
};

export const deleteNew = async(id) =>{
    const deleteNew = await newsRepository.deleteNew(id);
    return deleteNew;
};