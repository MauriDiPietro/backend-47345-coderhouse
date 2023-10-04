class TicketManager {
    #priceBaseGain = 0.15;
    constructor() {
        this.events = [];
    }

    addEvent(name, site, price, capacity = 50, date = new Date()) {
        const event = {
            id: this.#getMaxId() + 1,
            name,
            site,
            price: price + (price * this.#priceBaseGain),
            capacity,
            date,
            participants: []
        };
        this.events.push(event);
    }

    #getMaxId(){
        let maxId = 0;
        this.events.map((event)=>{
            if(event.id > maxId) maxId = event.id;
        })
        return maxId;
    };

    getEvents(){
        return this.events;
    }

    getEvent(idEvent){
        return this.events.find((event) => event.id === idEvent);
    }

    addUser(idEvent, idUser){
        const event = this.getEvent(idEvent);
        if(event) {
            if(!event.participants.includes(idUser)) event.participants.push(idUser);
        } else return 'this event not exists'
    }

    eventTour(idEvent, newSite, newDate){
        const event = this.getEvent(idEvent);
        if(event){
            const newEvent = {
                ...event,
                id: this.#getMaxId() + 1,
                site: newSite,
                date: newDate,
                participants: []
            };
            this.events.push(newEvent);
        } else return 'this event not exists'
    };
};  

const ticketManager = new TicketManager();

ticketManager.addEvent('Lolapalooza', 'Rio Negro', 500000);
ticketManager.addUser(1, 'Marcos')
ticketManager.addUser(1, 'Pedro')
ticketManager.eventTour(1, 'Cordoba', new Date("30/10/2023"))
console.log(ticketManager.getEvents());