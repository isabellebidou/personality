const loki = require('lokijs');
const db = new loki('db.json');
db.addCollection('questions').insert([
    {
        id: 1, 
        question:"It's time for your annual appraisal with your boss. You:" , 
        answers: [
        {id: "q1a1", answer: 'Look forward to hearing what your boss thinks about you and expects from you', weight: 1, checked : false}, 
        {id: "q1a2", answer: 'Rehearse ad nauseam the arguments and ideas that you’ve prepared for the meeting', weight: 2,checked : false}, 
        {id: "q1a3", answer: 'Go along unprepared as you are confident and like improvising', weight: 3,checked : false} 
        ]
    },
    {
        id: 2, 
        question: "You forgot your swimming suit to the beach party. You:" , 
        answers: [
        {id: "q2a1", answer: "you pretext you have a headache and won't be able to swim and have to stay in the shadow", weight: 1,checked : false}, 
        {id: "q2a2", answer: 'Bummer! Has any one brought a spare one by any chance?', weight: 2,checked : false}, 
        {id: "q2a3", answer: 'Never mind! you will swim in your underwear', weight: 3,checked : false} 
        ]
    },
    {
        id: 3, 
        question: "You can't find your car keys. You:" , 
        answers: [
        {id: "q3a1", answer: "Don't want anyone to find out, so you take the bus instead", weight: 1, checked : false}, 
        {id: "q3a2", answer: 'Panic and search madly without asking anyone for help', weight: 2, checked : false}, 
        {id: "q3a3", answer: 'Accuse those around you for misplacing them', weight: 3, checked : false} 
        ]  
    },
    {
        id: 4, 
        question:'A friend arrives late for your meeting. You:' , 
        answers: [
        {id: "q4a1", answer: "Say, 'It's not a problem,’ even if that's not what you really think", weight: 1}, 
        {id: "q4a2", answer: 'Give them a filthy look and sulk for the rest of the evening', weight: 2}, 
        {id: "q4a3", answer: 'Make a scene in front of everyone', weight: 3} 
        ]  
    },
    {
        id: 5, 
        question:'tonight you are going clubbing. You:' , 
        answers: [
        {id: "q5a1", answer: "You will dress a usual, you arrive 30 minutes before your friends. You want to make sure you are not late", weight: 1,checked : false}, 
        {id: "q5a2", answer: 'you start phoning your friends to make sure you are on the same page in terms of time an meeting spot', weight: 2, checked : false}, 
        {id: "q5a3", answer: 'This is your night! you want to look your best, you arrive late and loud', weight: 3,checked : false} 
        ]
    }
    

]);

db.addCollection('results').insert([
    {
        id: 1, 
        message:'You are an introvert! The hidden treasure! brace yourself the world needs to see a bit more of you!'  
        
    },
    {
        id: 2, 
        message:'Your profile is in between introvert and extrovert,  Balance is your middlename, enjoy the good company' 
        
    },
    {
        id: 3, 
        message:'You are an extrovert! Thank you for inspiring the world and showing your true colors. Remember to keep your friends in the loop and bring everyone in!'  
        
    }


]);
db.addCollection('answered');
db.saveDatabase();


module.exports = db;
//react + inMemory db
//https://www.youtube.com/watch?v=DVYKdp91FNU&list=PL67QbqrRRyyRVWj7gZeHM4Izz0wc12O0s&index=11