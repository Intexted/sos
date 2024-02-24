import { NextResponse } from "next/server";
const nodemailer = require("nodemailer");

export async function POST(req) {
  const _req = await req.json();
  const { email, firstName, lastName, message, phone } = _req;

  // transporter
  let transporter = await nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  try {
    let mailOptions = {
      from: process.env.EMAIL,
      to: process.env.APPOINTMENT_EMAIL,
      subject: "Prendre Un Rendez-Vous",
      html: `
      <div style="max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9; border-radius: 10px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
      <h2 style="color: #333; margin-bottom: 20px; text-align: center; font-size: 24px;">Demande de Rendez-Vous</h2>
      <div style="background-color: #fff; padding: 20px; border-radius: 10px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
        <p style="color: #555; margin-bottom: 10px;"><strong style="color: #333;">Name:</strong> ${firstName} ${lastName}</p>
        <p style="color: #555; margin-bottom: 10px;"><strong style="color: #333;">Email:</strong> ${email}</p>
        <p style="color: #555; margin-bottom: 10px;"><strong style="color: #333;">Phone:</strong> ${phone}</p>
        <p style="color: #555; margin-bottom: 10px;"><strong style="color: #333;">Message:</strong> ${message}</p>
      </div>
    </div>
              `,
    };
    await transporter.sendMail(mailOptions);
    return NextResponse.json({
      success: "Message Sent Successfully!",
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        err: "Server error. Please try again.",
      },
      { status: 500 }
    );
  }
}
