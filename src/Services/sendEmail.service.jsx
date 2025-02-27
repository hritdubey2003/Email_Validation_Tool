import { Transporter } from './nodemailer.service.js';

export const sendEmail = async ( to , subject , htmlContent ) => {
    try {
        const mailOptions = {
            from: ' Job Le Lo hritikdubey.direct@gmail.com',
            to: to,
            subject: subject,
            html: htmlContent
        };

        const info = await Transporter.sendMail(mailOptions);
        console.log('Email sent: ' + info.response);
    } catch ( err ) {
        console.error("Error sending email: " , err );
    }
}

