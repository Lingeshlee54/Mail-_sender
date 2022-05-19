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
    text : 'Hii ,I am Lingesh ,I used the nodemailer package to make a mail,sent through node.js. This is the fifth task of Mean Stack Developer .Thank you',
};

sender.sendMail(composemail,(error,info)=>{
    if(error){
        return console.log(error);
    }
    else{
        console.log("Mail send successfully" + info.response);
    }
});
