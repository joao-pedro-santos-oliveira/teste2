const EventEmitter = require('events')
const celebrity = new EventEmitter()

celebrity.on('race', (result) => {
    if(result === 'win'){
        console.log('congratulations! you are the best!')
    }
    
})

celebrity.on('race', (result) => {
    if(result === 'win'){
        console.log('boo i could have done better than that!')
    }
    
})

process.on('exit', (code) => {
    console.log('Process exit event with code', code)
})

celebrity.emit('race', 'win')
celebrity.emit('race', 'lost')

