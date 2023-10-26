import { Router } from "express";
const router = Router();

router.post('/', async(req, res)=>{
    //crear el carrito
});

router.get('/:cid', (req, res)=>{
    const { cid } = req.params;
    //buscar carrito por id
})

router.post('/:idCart/product/:idProd', async(req, res)=>{
    const { idProd } = req.params;
    const { idCart } = req.params;  //id de cart existente
    //llamar metodo que busca cart por id
    //llamar metodo que busca prod por id
    //si el producto existe, llaman al metodo que guarda el prod en el cart (el cart previamente creado)
    // await cartManager.saveProductTocart(idCart, idProd)
});

export default router;