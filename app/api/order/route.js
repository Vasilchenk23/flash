import { NextResponse } from "next/server";

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN; 
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID; 

export async function POST(req) {
  try {
    const { name, phone, product } = await req.json();

    if (!name || !phone || !product) {
      return NextResponse.json({ error: "Все поля обязательны!" }, { status: 400 });
    }

    const message = `🛒 *Новый заказ!*\n\n📦 *Товар:* ${product.name}\n💰 *Цена:* ${product.price}\n👤 *Имя:* ${name}\n📞 *Телефон:* ${phone}`;

    const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
    await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: TELEGRAM_CHAT_ID, text: message, parse_mode: "Markdown" }),
    });

    return NextResponse.json({ message: "Заказ отправлен в Telegram!" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Ошибка сервера" }, { status: 500 });
  }
}
