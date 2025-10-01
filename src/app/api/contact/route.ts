// app/api/contact/route.ts
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const params = new URLSearchParams();
    for (const key of Object.keys(data || {})) {
      const val = (data as any)[key];
      if (val !== undefined && val !== null) {
        params.append(key, String(val));
      }
    }

    // Optional secret appended to payload for simple verification at the Google Script side
    if (process.env.GOOGLE_SCRIPT_SECRET) {
      params.append('__secret', process.env.GOOGLE_SCRIPT_SECRET);
    }

    const googleScriptUrl = process.env.GOOGLE_SCRIPT_URL;
    if (!googleScriptUrl) {
      return NextResponse.json({ success: false, error: 'Missing GOOGLE_SCRIPT_URL' }, { status: 500 });
    }

    const res = await fetch(googleScriptUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: params.toString(),
    });

    const text = await res.text();
    try {
      const json = JSON.parse(text);
      return NextResponse.json(json, { status: res.ok ? 200 : 500 });
    } catch {
      // If Google script returns plain text, return it inside an object
      return NextResponse.json({ success: res.ok, data: text }, { status: res.ok ? 200 : 500 });
    }
  } catch (err) {
    return NextResponse.json({ success: false, error: String(err) }, { status: 500 });
  }
}