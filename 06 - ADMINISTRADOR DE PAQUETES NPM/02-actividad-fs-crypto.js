const fs = require('fs');
const crypto = require('crypto');

class UserManager {
    constructor(path){
        this.path = path;
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

    async createUser(obj){
        try {
            const user = { ...obj };
            const users = await this.getUsers();

            user.salt = crypto.randomBytes(128).toString();
            user.password = crypto.createHmac('sha256', user.salt).update(user.password).digest('hex')

            users.push(user);
            await fs.promises.writeFile(this.path, JSON.stringify(users));
        } catch (error) {
            console.log(error);
        }
    };

    async validateUser(username, password){
        try {
            const users = await this.getUsers();
            const user = users.find((usr) => usr.username === username);
            if(!user) {
                console.log('Error: user o password not found');
                return
            }
            const passLoginCrypto = crypto.createHmac('sha256', user.salt).update(password).digest('hex');
            if(user.password === passLoginCrypto) console.log('Login OK!');
            else console.log('Error: user/pass incorrect!');
        } catch (error) {
            console.log(error);
        }
    }
};

const userManager = new UserManager('./users.json');

const user1 = {
    firstname: 'Juan',
    lastname: 'Perez',
    username: 'jperez',
    password: '1234',
}

const user2 = {
    firstname: 'Pedro',
    lastname: 'Gomez',
    username: 'pgomez',
    password: '123456'
}

const test = async()=>{
    await userManager.createUser(user1);
    console.log(await userManager.getUsers());
    await userManager.createUser(user2);
    await userManager.validateUser('jperez', '1234');
    await userManager.validateUser('pgomez', '123456');
}

test();