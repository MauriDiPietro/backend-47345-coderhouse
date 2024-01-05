import { connect } from "mongoose";

class ConnectMongoDB {
  static #instance;

  constructor() {
    connect("mongodb://127.0.0.1:27017/coder47345");
  }

  static getInstance() {
    if(this.#instance){
        console.log('Ya está conectado a MongoDB');
        return this.#instance;
    } else {
        this.#instance = new ConnectMongoDB();
        console.log('Conectado a MongoDB!');
        return this.#instance;
    }
  }
}

ConnectMongoDB.getInstance()
ConnectMongoDB.getInstance()
ConnectMongoDB.getInstance()
ConnectMongoDB.getInstance()
ConnectMongoDB.getInstance()
ConnectMongoDB.getInstance()

