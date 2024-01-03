import fs from 'fs'

const path = './src/persistence/filesystem/db.json'

export const getAll = async() => {
  try {
    if (fs.existsSync(path)) {
      const list = await fs.promises.readFile(path, 'utf-8')
      return JSON.parse(list)
    } else {
      return []
    }
  } catch (error) {
    console.log(error);
  }
}

export const save = async(obj) => {
    try {
      const products = await getAll()
      products.push(obj)
      await fs.promises.writeFile(path, JSON.stringify(products))
      return obj;
    } catch (error) {
      console.log(error);
    }
  }


