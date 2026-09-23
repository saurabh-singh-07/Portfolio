import nodemailder from 'nodemailer'

interface sendEmailType {
     name : string,
    email : string,
    subject : string,
    message : string,
}
const transporter = nodemailder.createTransport({
    service : "gmail",
    auth :{
        user : process.env.EMAIL_USER,
        pass:process.env.EMAIL_PASS,
    },
});

const sendEmail = async ({name, email, subject, message} : sendEmailType) => {
    const mailOptions = {
        from : `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
        to : process.env.EMAIL_USER,

        replyTo : email,

        subject : `Protfolio Contact : ${subject}`,

        html : `
        <div style="font-family: Arial, sans-serif; line-height : 1.6;">
            <h2> New Portfolio Contact Message</h2>

            <p><strong>Name :</strong> ${name}</h2>

            <p><strong>Email :</strong> ${email}</p>

            <p><strong>Subject :</strong> ${subject}</h2>

            <hr/>

            <p>
                You can directly reply to this email to contact ${name}.
            </p>
        
        </div>`,
    };

    await transporter.sendMail(mailOptions);
}

export default sendEmail;
