import { Resend } from 'resend';
import * as React from 'react';
import EmailTemplate from '@/components/template/EmailTemplate';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

async function readRequestBody(request: any) {
    const chunks = [];
    for await (const chunk of request.body) {
        chunks.push(chunk);
    }
    const buffer = Buffer.concat(chunks);
    return buffer.toString();
}

export async function POST(request: NextRequest) {
    try {
        const payloadString = await readRequestBody(request);
        const payloadData = JSON.parse(payloadString);
        const {
            name,
            email,
            company,
            phone,
            interested
        } = payloadData;

        const { data, error } = await resend.emails.send({
            from: `enquiry@vellodycommunications.com`,
            to: [process?.env?.RESEND_TO_EMAIL ?? "", process?.env?.RESEND_DEFAULT_TO_EMAIL ?? ""],
            subject: `New Enquiry from ${name}`,
            react: EmailTemplate({ name, email, company, phone, interested }) as React.ReactElement,
        });

        console.log(data, error)

        if (error) {
            return NextResponse.json({ error });
        }

        return NextResponse.json({ data });
    } catch (error) {
        return NextResponse.json({ error });
    }
}
