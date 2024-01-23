import TicketDaoMongoDB from "../daos/mongodb/ticket.dao.js";
const ticketDao = new TicketDaoMongoDB();

import { getById as getCartById } from "./cart.services.js";
import { getByIdUser } from "./user.services.js";
import { getById as getProdById } from "./product.services.js";

import { v4 as uuidv4 } from 'uuid';

export const generateTicket = async (userId, cartId) => {
  try {
    //buscar el usuario
    const user = await getByIdUser(userId);
    if(!user) return false;

    //buscar el carrito
    const cart = await getCartById(cartId);
    if(!cart) return false;

    let amountAcc = 0;
    for (const p of cart.products) {
      const idProd = p.product._id.toString();
      const prodFromDB = await getProdById(idProd);
      
      //verifico si la cantidad que tengo en el carrito supera al stock del producto en db
      if(p.quantity <= prodFromDB.stock){
        const amount = p.quantity * prodFromDB.price;
        amountAcc += amount;
      }
    }

    //crear el ticket
    const ticket = await ticketDao.create({
      code: uuidv4(),
      purchase_datetime: new Date().toLocaleString(),
      amount: amountAcc,
      purchaser: user.email
    });

    //vaciar el carrito
    cart.products = [];
    cart.save();

    //retornar el ticket
    return ticket;
  } catch (error) {
    throw new Error(error);
  }
};
