import express from "express";
import { UserManager } from "./manager/user.manager.js";
const userManager = new UserManager("./users.json");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/users", async (req, res) => {
  try {
    const users = await userManager.getUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json(error.message);
  }
});

app.post("/users", async (req, res) => {
  try {
    // console.log(req.body);
    // const { firstname, lastname, username, password } = req.body;
    const user = { ...req.body };
    // console.log(user);
    const userCreated = await userManager.createUser(user);
    const { id, firstname, lastname, username } = userCreated;
    const userResponse = {
      id,
      firstname,
      lastname,
      username,
    };
    res.status(200).json(userResponse);
  } catch (error) {
    res.status(500).json(error.message);
  }
});


app.get('/users/:id', async(req, res)=>{
    try {
        const { id } = req.params;
        const user = await userManager.getUserById(Number(id));
        if(!user) res.status(404).json({ message: 'User not found' });
        else res.status(200).json(user);
    } catch (error) {
        res.status(500).json(error.message);
    }
});

app.put('/users/:id', async(req, res)=>{
    try {
        const user = { ...req.body };
        // console.log('user', user);
        const { id } = req.params;
        const idNumber = Number(id);
        const userOk = await userManager.getUserById(idNumber);
        if(!userOk) res.status(404).json({ message: 'User not found' });
        else 
            await userManager.updateUser(user, idNumber);
            res.status(200).json({ message: `User id: ${id} updated` })
    } catch (error) {
        res.status(500).json(error.message);
    }
});

app.delete('/users/:id', async(req, res)=>{
    try {
        const { id } = req.params;
        const idNumber = Number(id);
        await userManager.deleteUser(idNumber)
        res.json({ message: `User id: ${idNumber} deleted` })
    } catch (error) {
        res.status(500).json(error.message);
    }
})

const PORT = 8080;

app.listen(PORT, () => console.log(`Server ok on port ${PORT}`));
