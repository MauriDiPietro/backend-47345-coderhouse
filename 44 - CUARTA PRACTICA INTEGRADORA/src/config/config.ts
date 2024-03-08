import 'dotenv/config';

export default {
    PORT: process.env.PORT,
    MONGO_URL: process.env.MONGO_URL || 'mongodb://127.0.0.1/coder47345'
}
