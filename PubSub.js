import { EventEmitter } from "events";
const myEmitter = new EventEmitter();

export class Publisher1 {
    constructor() {

    }

    publishReminder(eventName, message) {
        myEmitter.emit(eventName, message);
    }
}

export class Subscriber1 {
    constructor(reminder) {
        myEmitter.on(reminder, (message) => {
            console.log(message)
        })
    }
}