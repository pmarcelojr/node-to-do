const EventEmitter = require('events')

const myEmitter = new EventEmitter()

myEmitter.on('click', (msg)=>{
    console.log(msg)
})

myEmitter.emit('click', "the event was emitted")