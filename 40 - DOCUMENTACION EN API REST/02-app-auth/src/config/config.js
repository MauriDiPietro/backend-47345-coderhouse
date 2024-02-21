import 'dotenv/config';

export default {
    PORT: process.env.PORT || 8080,
    ENV: process.env.ENV || 'dev',
    MONGO_ATLAS_URL: process.env.MONGO_ATLAS_URL,
    MONGO_LOCAL_URL: process.env.MONGO_LOCAL_URL,
    SECRET_KEY_JWT: process.env.SECRET_KEY_JWT, 
    PERSISTENCE: process.env.PERSISTENCE,
    EMAIL: process.env.EMAIL,
    PASSWORD: process.env.PASSWORD
};