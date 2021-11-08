export const answerData = [
    {
        state:'default',
        type:'answer',
        id:0,
        text:['Hello! Greetings from Devparno and Shreemayee',
        "We are excited to invite you and your family to our Wedding."],
        complete:false,
    },   
    {
        state:'bride who',
        type:'answer',
        id:1,
        text:["Shreemayee is the only daughter of Shri Ranjan Laik and Smt Mousumi Laik.","She is working as an operations associate"],
        complete:false,
    },
    {
        state:'groom who',
        type:'answer',
        id:2,
        text:["Devparno is the only son of Shri Basudev Batabyal and Smt Aparna Batabyal.","He is a Data Scientist"],
        complete:false,
    },
    {
        state:'when',
        type:'answer',
        id:3,
        text:["We are getting married on 13th December","And we know it's too early, but we want you to be part of the wedding from the beginning.","Hence the early wedding invitation."],
        complete:false,
    },
    {
        state:'location',
        type:'answer',
        id:4,
        text:["The venue is Golden Garden, Narendrapur, Kolkata","Giving out the directions for you just in case you need it.","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3687.9648018737794!2d88.40434601478933!3d22.430350585256246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02736632b179ad%3A0xe483026d0a01bf9c!2z4KaX4KeL4Kay4KeN4Kah4KeH4KaoIOCml-CmvuCmsOCnjeCmoeCnh-CmqA!5e0!3m2!1sen!2sin!4v1636189944429!5m2!1sen!2sin"],
        complete:false,
    },
    {
        state:"confirm presence",
        id:5,
        type:'answer',
        text:["Can you please confirm your presence?","Please enter your details.",],
        complete:false,
    }
]

export const questionData = [
    {
        state:"bride who",
        id:0,
        type:'question',
        text:["Who's the bride?"],
        complete:false,
    },
    {
        state:"groom who",
        id:1,
        type:'question',
        text:["Who's the groom?"],
        complete:false,
    },
    {
        state:"when",
        id:2,
        type:'question',
        text:["When is the Marriage?"],
        complete:false,
    },
    {
        state:"location",
        id:3,
        type:'question',
        text:["Where is the Marriage"],
        complete:false,
    },

]