const products = [];

export const save = async (obj) => {
    products.push(obj);
    return obj;
}

export const getAll = async () => {
    return products;
}


