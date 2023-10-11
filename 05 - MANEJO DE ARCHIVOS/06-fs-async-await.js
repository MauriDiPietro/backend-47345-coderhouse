const fs = require('fs');

class UserManager {
    constructor(){
        this.path = './users.json'
    }

    async getUsers(){
        try {
            if(fs.existsSync(this.path)) {
               const usersJSON = await fs.promises.readFile(this.path, 'utf-8');
               return JSON.parse(usersJSON);
            } else return [];
        } catch (error) {
            console.log(error);
        }
    };

    async createUser(user){
        try {
            const users = await this.getUsers();
            users.push(user);
            await fs.promises.writeFile(this.path, JSON.stringify(users));
        } catch (error) {
            console.log(error);
        }
    };
};

const userManager = new UserManager();

const user1 = {
    firstname: 'Juan',
    lastname: 'Perez',
    age: 45,
    course: 'Desarrollo Backend'
}

const user2 = {
    firstname: 'Pedro',
    lastname: 'Gomez',
    age: 32,
    course: 'Desarrollo Frontend'
}

const test = async() =>{
    console.log('primer consulta', await userManager.getUsers());
    await userManager.createUser(user1);
    console.log('segunda consulta', await userManager.getUsers());
    await userManager.createUser(user2);
};

test();

// JSON.stringify --> para guardar la info --> formato JSON ("""")
// JSON.parse --> para manipular la info --> formato javascript