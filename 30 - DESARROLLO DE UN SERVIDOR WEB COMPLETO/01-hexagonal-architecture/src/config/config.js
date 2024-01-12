import 'dotenv/config';

export default {
    ENV: process.env.ENV,
    PORT: process.env.PORT, 
    MONGO_ATLAS_PROD: process.env.MONGO_ATLAS_PROD,
    MONGO_ATLAS_QA: process.env.MONGO_ATLAS_QA,
    MONGO_LOCAL_URL: process.env.MONGO_LOCAL_URL
}

