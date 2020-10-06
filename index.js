//requiring nerdcord
const discord = require("nerdcord")
//defining client
const client = new discord.client()
//getting our config
const config = require('./config.json')
//define prefix
const prefix = config.prefix


//ready event
client.on('ready', () => {
    console.log('bot is online')
})

//ping command
client.on('message', async (message) => {
    if(message.content.toLowerCase() === `${prefix}ping`) {
        client.createMessage(`:ping_pong: Ping is ${client.ws.ping}ms.`, message.channel.id, config.token)
    }
})

//logging in
client.login(config.token)