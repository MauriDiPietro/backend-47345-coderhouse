export default class NewsDTO {
    constructor({ _id, title, body, author, image }) {
        this.id = _id
        this.title = title
        this.body = body
        this.author = author
        this.image = image
        this.date = new Date().toLocaleDateString()
    }
}

export function newsDTO(news) {
    if(Array.isArray(news))
        return news.map(n => new NewsDTO(n))
    else
        return new NewsDTO(news)
  }