import persistence from '../persistence/persistence.js'
const { prodDao } = persistence

export async function saveProduct(product) {
  const prod = await prodDao.save(product)        
  return prod;                                
}                                        

export async function getAllProducts() {
  const products = await prodDao.getAll();
  return products;
}

