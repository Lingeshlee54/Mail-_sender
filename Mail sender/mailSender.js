const nodemail = require('nodemailer');

const sender =  nodemail.createTransport({
    service: 'gmail',
    auth: {
        user : 'your gmail address',
        pass : 'your gmail password'
    }
});

const composemail = {
    from:'your gmail address',
    to  :'To whom ',
    subject : 'Testing app',
    text : 'Hii , Are you aspiring to be a software developer? ok i got it :) . Dont waste your time .Just join the "JIVRUS Academy" and start your path.Thank you',
};

sender.sendMail(composemail,(error,info)=>{
    if(error){
        return console.log(error);
    }
    else{
        console.log("Mail send successfully" + info.response);
    }
});