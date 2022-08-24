const loki = require('lokijs');
const db = new loki('db.json');
db.addCollection('questions').insert([
    {
        id: 1, 
        question:'It&#39;s time for your annual appraisal with your boss. You:' , 
        answers: [
        {id: 1, answer: 'Look forward to hearing what your boss thinks about you and expects from you', weight: 1}, 
        {id: 2, answer: 'Rehearse ad nauseam the arguments and ideas that you’ve prepared for the meeting', weight: 2}, 
        {id: 3, answer: 'Go along unprepared as you are confident and like improvising', weight: 3} 
        ]
    },
    {
        id: 2, 
        question:'You can&#39;t find your car keys. You:' , 
        answers: [
        {id: 1, answer: 'Don&#39;t want anyone to find out, so you take the bus instead', weight: 1}, 
        {id: 2, answer: 'Panic and search madly without asking anyone for help', weight: 2}, 
        {id: 3, answer: 'Grumble without telling your family why you’re in a bad mood', weight: 3} 
        ]
    },
    {
        id: 3, 
        question:'You can&#39;t find your car keys. You:' , 
        answers: [
        {id: 1, answer: 'Don&#39;t want anyone to find out, so you take the bus instead', weight: 1}, 
        {id: 2, answer: 'Panic and search madly without asking anyone for help', weight: 2}, 
        {id: 3, answer: 'Accuse those around you for misplacing them', weight: 3} 
        ]  
    },
    {
        id: 4, 
        question:'A friend arrives late for your meeting. You:' , 
        answers: [
        {id: 1, answer: 'Say, &#39;It&#39;s not a problem,’ even if that&#39;s not what you really think', weight: 1}, 
        {id: 2, answer: 'Give them a filthy look and sulk for the rest of the evening', weight: 2}, 
        {id: 3, answer: 'Make a scene in front of everyone', weight: 3} 
        ]  
    },
    {
        id: 5, 
        question:'A friend arrives late for your meeting. You:' , 
        answers: [
        {id: 1, answer: 'Say, &#39;It&#39;s not a problem,’ even if that&#39;s not what you really think', weight: 1}, 
        {id: 2, answer: 'Give them a filthy look and sulk for the rest of the evening', weight: 2}, 
        {id: 3, answer: 'Make a scene in front of everyone', weight: 3} 
        ]
    }
    

]);
db.addCollection('answered');
db.saveDatabase();

module.exports = db;
//https://www.youtube.com/watch?v=DVYKdp91FNU&list=PL67QbqrRRyyRVWj7gZeHM4Izz0wc12O0s&index=11