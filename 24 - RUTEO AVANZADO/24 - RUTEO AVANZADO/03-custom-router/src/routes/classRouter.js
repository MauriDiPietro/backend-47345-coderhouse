
import { Router } from "express"

export default class Router {

    constructor() {
        this.router = Router();
        this.init();
    }

    init() {}

    get(path, ...callbacks) {
       this.router.get(path, this.applyCallback(callbacks));
    }

    applyCallback(callbacks) {
        return callbacks.map( callback => async (...params) => { // ...params = req, res, next
            // [req, res, next]
            try {
                await callback.apply(this.params);
            } catch (error) {
                console.log(error);
                params[1].status(500).send(error); // res.status(500).send(error)
            }
        }) 
    }
}

