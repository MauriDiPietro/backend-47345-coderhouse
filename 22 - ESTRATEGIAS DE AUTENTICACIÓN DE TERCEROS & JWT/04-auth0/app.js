import express from 'express';
import { auth } from 'express-openid-connect';
import routerAuth0 from './routes/index.js'

const app = express();

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: 'Qmw-vYnFr5R0j7mA72ceEV4OKn88auxwW92zQA5INZ3AeKOgBJtJvZxGtGFjoMBt',
  baseURL: 'http://localhost:3000',
  clientID: '0hXaoWCYU9RzJahTNVGFNsN82CXRPU4f',
  issuerBaseURL: 'https://dev-8b-wmt1y.us.auth0.com'
};

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(auth(config))

app.use('/', routerAuth0);

app.listen(3000, ()=>{
    console.log('Server ok en puerto 3000')
});