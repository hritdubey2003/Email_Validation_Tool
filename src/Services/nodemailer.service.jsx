import nodemailer from 'nodemailer';

export const Transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: import.meta.env.VITE_EMAIL_USER,
        pass: import.meta.env.VITE_EMAIL_PASS
    }
})