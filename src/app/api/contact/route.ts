import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return Response.json({ error: "Champs manquants" }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return Response.json({ error: "Service d'email non configuré" }, { status: 503 });
    }

    const resend = new Resend(apiKey);
    await resend.emails.send({
      from: "Portfolio <contact@christinnegou.ca>",
      to: ["christiannegou@yahoo.com"],
      replyTo: email,
      subject: `Portfolio — nouveau message de ${name}`,
      text: `Nom : ${name}\nEmail : ${email}\n\n${message}`,
    });

    return Response.json({ success: true });
  } catch {
    return Response.json({ error: "Erreur d'envoi" }, { status: 500 });
  }
}
