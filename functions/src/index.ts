import * as functions from 'firebase-functions';
import * as nodemailer from 'nodemailer';
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
// Configure the email transport using the default SMTP transport and a GMail account.
// For Gmail, enable these:
// 1. https://www.google.com/settings/security/lesssecureapps
// 2. https://accounts.google.com/DisplayUnlockCaptcha
// For other types of transports such as Sendgrid see https://nodemailer.com/transports/
// TODO: Configure the `gmail.email` and `gmail.password` Google Cloud environment variables.
//firebase functions:config:set gmail.email="ericel123@gmail.com" gmail.password="123@juliusabc"
const gmailEmail = functions.config().gmail.email;
const gmailPassword = functions.config().gmail.password;
const mailTransport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: gmailEmail,
    pass: gmailPassword,
  },
});

// Your company name to include in the emails
// TODO: Change this to your app or company name to customize the email sent.
const APP_NAME = 'Miss Bronze and Gold Ireland Contact Form';

export const sendContactEmail = functions.firestore
.document('user-contacts/{id}')
.onCreate((snap, context) => {
    const email = 'missbronzeireland@yahoo.com';
    const mailOptions = {
        from: `${APP_NAME} <noreply@firebase.com>`,
        to: email,
      };
    
      // The user subscribed to the newsletter.
      mailOptions['subject'] = `${snap.data().subject}!`;
      mailOptions['html'] = `
      <!doctype html>
        <html>
        <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" type="text/css" href="https://otcollect.com/assets/style/emails.css">
        <style>
            .container{
                width: 70%;
                margin: 0 auto;
                background: rgba(236, 236, 240, 0.37);
                box-shadow: 0 0 1px 1px rgba(11, 39, 36, 0.1), 0 3px 1px 0 rgba(11, 39, 36, 0.1) !important;
                border-radius: 4px;
            }
            a {
                text-decoration: none;
               color: #dd2c00;
            }
            .innertube {
                padding: 10px;
            }
    
            .header{
                padding: 10px;
                background-color: #222F3F;
                box-shadow: 0 0 1px 1px rgba(11, 39, 36, 0.1), 0 3px 1px 0 rgba(11, 39, 36, 0.1) !important;
                color: #fff;
                border-top-left-radius: 4px;
                border-top-right-radius: 4px;
            }
            .text-right {
               float: right;
            }
            h1 {
                color: #0097a7;
            }
            .app-name {
                color: #dd2c00;
            }
            h2 {
                color: rgba(24, 24, 24, 0.8);
            }
            p {
                color: rgba(24, 24, 24, 0.8);
            }
            .copy-right {
                font-size: 0.8em;
                font-style: italic;
                color: #ccd;
                width: 100%;
                text-align: center;
                margin-top: 10px;
            }
            .terms {
                text-align: center;
            }
            .terms a {
                margin-right: 10px;
                text-decoration: none;
                font-size: 1.3em;
                color: #ffffff;
            }
           @media screen and (max-width: 768px){
            .container{
                width: 100%;
            }
            .text-right {
               display: none;
            }
    
           }
    
           @media screen and (min-width: 768px){
    
           }
           .footer{
            padding: 30px;
            background-color: #222F3F;
            box-shadow: 0 0 1px 1px rgba(11, 39, 36, 0.1), 0 3px 1px 0 rgba(11, 39, 36, 0.1) !important;
            color: #fff;
        }
        </style>
        </head>
        <body>
         <div class="container">
            <header class="header">
                <img src="https://missbronzeandgoldireland.com/assets/images/logo.jpg" alt="Miss Bronze and Gold Ireland">
                <span class="text-right">Africa On time collections!</span>
            </header>
           <div class="innertube">
                <h3> Sender Name: ${snap.data().name}</h3>
                <h3> Sender Email: ${snap.data().email}</h3>
                <h3> Subject: ${snap.data().subject || ''}!</h3>
                <p>${snap.data().message}</p>
           
           </div>
           <footer class="footer">
           <div class="terms">
               <a href="https://missbronzeandgoldireland.com/">🏠 Home</a>
           </div>
           </footer>
         </div>
          <div class="copy-right">All Rights Reserved &copy; 2018 Missbronzeandgoldireland</div>
        </body>
       </html>
      `;
      return mailTransport.sendMail(mailOptions).then(() =>  console.log('New welcome email sent to:', email));
});