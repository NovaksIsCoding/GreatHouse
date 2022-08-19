//client
const { Client, GatewayIntentBits, Partials, Collection } = require("discord.js");

//LOADER
const { loadEvents } = require("./Loader/eventLoader");

//guilds loader

//Gild repositories
const { Guilds, GuildMembers, GuildMessages } = GatewayIntentBits;
const { User, Message, GuildMember, ThreadMember } = Partials;

const client = new Client({
    intents: [Guilds, GuildMembers, GuildMessages],
    partials: [User, Message, GuildMember, ThreadMember],
  });



//Collection
client.commands = new Collection();

//actions
client.config = require("./config.json");


client
  .login(client.config.token)
  .then(() => {
    loadEvents(client);
  })
  .catch((err) => console.log(err));