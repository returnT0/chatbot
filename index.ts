// index.ts

import { Chatbot } from './chatbot';
import { IQuestionPattern } from './interfaces';

const patterns: IQuestionPattern[] = [
    { pattern: /hello/i, response: 'Hello {name}! How can I help you?' },
    { pattern: /how are you/i, response: "I'm just a program, so I don't have feelings, but I'm operating correctly! How can I assist you?" },
    { pattern: /your name/i, response: 'I am Chat.' },
    { pattern: /thanks/i, response: 'You\'re welcome, {name}!' },
    { pattern: /tell me about ([a-z]+)/i, response: (matches) => `You asked about ${matches[1]}, but I might not know much about it.` },
    { pattern: /what's the weather/i, response: "I can't provide weather information right now." },
    { pattern: /joke/i, response: 'Why did the programmer quit his job? He didn\'t get arrays.' },
    { pattern: /music/i, response: 'I don\'t have preferences, but I can recognize that many humans love music.' },
    { pattern: /what can you do/i, response: 'I can respond based on predefined patterns, answer questions within my knowledge, and chat in a limited capacity. How can I help?' },
    { pattern: /goodbye/i, response: 'Goodbye {name}, have a great day!' }
];


const bot = new Chatbot(patterns);

console.log(bot.ask("My name is John"));
console.log(bot.ask("Hello"));
console.log(bot.ask("How are you?"));
console.log(bot.ask("What's the weather?"));
console.log(bot.ask("Can you tell a joke?"));
console.log(bot.ask("Do you like music?"));
console.log(bot.ask("What can you do?"));
console.log(bot.ask("Goodbye"));

