import { Router } from "express"

/* 
Una expresión regular, también conocida como regex (abreviatura de "expresión regular"), 
es una secuencia de caracteres que forma un patrón de búsqueda. Estos patrones son utilizados por 
los motores de búsqueda, editores de texto y otras herramientas de procesamiento de texto para realizar búsquedas 
o manipulaciones de cadenas de texto de manera eficiente.

Las expresiones regulares son extremadamente poderosas y flexibles, permitiendo la especificación de patrones 
complejos. Pueden incluir caracteres literales (como letras y números) y caracteres especiales que representan 
clases de caracteres o cuantificadores.
*/


const router = Router();

router.get("/", (req, res) => {

    res.send("Api user");
    
})

router.post("/", (req, res) => {

    res.send("Api user");
    
})

router.put("/:id", (req, res) => {

    res.send("Api user");
    
})

router.delete("/:id", (req, res) => {

    res.send("Api user");
    
})

router.get("/name/:name([a-zA-Z]+)", (req, res) => {
    const { name } = req.params;

    res.send({
        msg: "Nombre válido",
        name
    });
    
})

router.get("/email/:email([A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$)", (req, res) => {
    const { email } = req.params;

    res.send({
        msg: "email válido",
        email
    });
    
})

router.get("/email2/:email", (req, res) => {
    const { email } = req.params;
    const emailRegex = /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

    // verificar la expresión regular
    if(email.match(emailRegex)) {
        return  res.send({
            msg: "email válido",
            email
        });
    }

    res.status(400).send({
        status: "Error",
        msg: "email inválido"
    })
   
})


router.get("*", (req, res) => {

    res.status(404).send("Ruta inexistente")
    
})

export default router;