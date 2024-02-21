import { NewsModel } from '../persistence/models/news.model.js';
import mongoose from 'mongoose';
import app from '../server.js';
import request from 'supertest';


describe('Tests server news', () => {
    beforeEach(async() => {
        await mongoose.connection.collections['news'].drop();
    });

    it('create new', async ()=>{
        const doc = {
            title: 'Llueve en Córdoba',
            body: 'Por fin llueve........',
            author: 'Juan Perez',
            image: '...',
        }
        const response = await request(app)
            .post('/news')
            .send(doc)
        expect(response.statusCode).toBe(200)
        expect(response.body.title).toBe(doc.title)
        expect(response.body.body).toBe(doc.body)
    });

    it('get all news', async()=> {
        const doc = {
            title: 'Llueve en Córdoba',
            body: 'Por fin llueve........',
            author: 'Juan Perez',
            image: '...',
        }
        await NewsModel.create(doc)
        const response = await request(app)
            .get('/news')
        expect(response.statusCode).toBe(200)
        expect(response.body).toHaveLength(1)
        expect(response.body[0].title).toBe(doc.title)
        expect(response.body).toBeInstanceOf(Array)
        expect(response.body[0].date).toEqual(expect.stringContaining('2023'))
    })

    it('update new', async()=>{
        const doc = {
          title: 'title test',
          body: 'body test',
          author: 'Gonzalo Bonadeo',
          image: '...'
        }
        const responseNew = await NewsModel.create(doc)
        const docUpdated = {
          title: 'title test updated',
          body: 'body test updated',
          author: 'Gonzalo Bonadeo Gomez',
          image: '...'
        }
        const response = await request(app).put(`/news/${responseNew._id}`).send(docUpdated)
        expect(response.statusCode).toBe(200)
        expect(response.body.modifiedCount).toBe(1)
      })
    
      it('delete new', async()=>{
        const doc = {
          title: 'title test',
          body: 'body test',
          author: 'Gonzalo Bonadeo',
          image: '...'
        }
        const responseCreate = await NewsModel.create(doc)
        const response = await request(app).delete(`/news/${responseCreate._id}`)
        expect(response.statusCode).toBe(200)
        expect(response.body.deletedCount).toBe(1)
      })
})