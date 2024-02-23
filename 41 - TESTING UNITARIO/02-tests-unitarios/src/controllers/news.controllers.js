import {
  getAllNews,
  getNew,
  createNew,
  updateNew,
  deleteNew,
} from "../services/news.services.js";

export async function getAllNewsCtr(req, res) {
  try {
    const allNews = await getAllNews();

    res.status(200).json(allNews);
  } catch (error) {
    res.status(501).send(error.message);
  }
}

export async function getNewCtr(req, res) {
  try {
    const { id } = req.params;
    const news = await getNew(id);
    if (!news) res.status(404).json({msg: `No se encontró el id ${id} en la base de datos.`}); 
    else res.status(200).json(news);
  } catch (error) {
    res.status(501).send(error.message);
  }
}

export async function createNewCtr(req, res) {
  try {
    const { body } = req;
    const newNews = await createNew(body);
    if (!newNews) res.status(404).json({msg: 'Validation schema error'}); 
    else res.status(200).json(newNews);
  } catch (error) {
    res.status(501).send(error.message);
  }
}

export async function updateNewCtr(req, res) {
  try {
    const { id } = req.params;
    const { title, body, author, image } = req.body;
    const newToModified = await getNew(id);
    if (!newToModified) {
      res.status(404).json({ message: "Invalid id" });
    } else {
      const newUpdated = await updateNew(
        { _id: id },
        {
          $set: {
            title,
            body,
            author,
            image,
          },
        }
      );
      res.status(200).json(newUpdated);
    }
  } catch (error) {
    res.status(501).send(error.message);
  }
}

export async function deleteNewCtr(req, res) {
  try {
    const { id } = req.params;
    const news = await deleteNew({ _id: id });
    if (!news) res.status(404).json({msg: `No se encontró el id ${id} en la base de datos.`}); 
    else res.status(200).json(news);
    
  } catch (error) {
    res.status(501).send(error.message);
  }
}
