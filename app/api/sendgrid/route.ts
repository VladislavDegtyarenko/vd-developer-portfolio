import { P2 } from "app/ui/Text";
import { type NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

export async function POST(request: NextRequest) {
  const { email, name, message, error } = await request.json();

  const transport = nodemailer.createTransport({
    service: "sendgrid",
    host: "smtp.sendgrid.net",
    port: 587,

    /* 
      setting service as 'gmail' is same as providing these setings:
      host: "smtp.gmail.com",
      port: 465,
      secure: true
      If you want to use a different email provider other than gmail, you need to provide these manually.
      Or you can go use these well known services and their settings at
      https://github.com/nodemailer/nodemailer/blob/master/lib/well-known/services.json
  */
    auth: {
      user: "apikey",
      pass: process.env.SENDGRID_KEY,
    },
  });

  const mailOptions: Mail.Options = {
    from: "contact@vddeveloper.online",
    sender: email,
    replyTo: email,
    to: process.env.NODEMAILER_EMAIL,
    subject: `${name} <${email}> | Portfolio Website Contact Form`,
    text: message,
  };

  const sendMailPromise = () =>
    new Promise<string>((resolve, reject) => {
      transport.sendMail(mailOptions, function (err) {
        if (!err) {
          resolve("Email sent");
        } else {
          reject(err.message);
        }
      });
    });

  try {
    await sendMailPromise();
    return NextResponse.json({ message: "Email sent", error });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
