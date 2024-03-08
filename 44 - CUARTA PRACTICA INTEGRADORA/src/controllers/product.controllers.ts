import { Request, Response, NextFunction } from "express"
import * as service from '../services/product.services';
import { HttpResponse } from "../utils/http.response";
const httpResponse = new HttpResponse();

export const create = async (req: Request, res: Response, next: NextFunction)=>{
    try {
       const prod = await service.create(req.body);
       if(!prod) return httpResponse.NotFound(res, 'Error creating product')
       else return httpResponse.Ok(res, prod); 
    } catch (error: unknown) {
        next((error as Error).message)
    }
}

export const getAll = async (_req: Request, res: Response, next: NextFunction)=>{
    try {
        const prods = await service.getAll();
        if(!prods) return httpResponse.NotFound(res, 'Prods not found')
        return httpResponse.Ok(res, prods)
    } catch (error: unknown) {
        next((error as Error).message)
    }
}

export const getById = async (req: Request, res: Response, next: NextFunction)=>{
    try {
        const { id } = req.params;
        const prod = await service.getById(id);
        if(!prod) return httpResponse.NotFound(res, 'Prod not found')
        return httpResponse.Ok(res, prod)
    } catch (error: unknown) {
        next((error as Error).message)
    }
}

export const update = async (req: Request, res: Response, next: NextFunction)=>{
    try {
        
    } catch (error: unknown) {
        next((error as Error).message)
    }
}

export const remove = async (req: Request, res: Response, next: NextFunction)=>{
    try {
        
    } catch (error: unknown) {
        next((error as Error).message)
    }
}

