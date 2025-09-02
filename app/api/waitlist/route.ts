import {Ratelimit} from "@upstash/ratelimit";
import { NextRequest, NextResponse } from 'next/server';
import {Redis} from "@upstash/redis";
import { createClient } from '@supabase/supabase-js';

const supabaseAdmin = createClient(
  process.env.SUPABASE_URL || '',
  process.env.SUPABASE_ANON_KEY || ''
);


const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN,
})


const ratelimit = new Ratelimit({
  redis: redis,
  limiter: Ratelimit.fixedWindow(5, "5 s"),
});
export async function POST(request: NextRequest) {
    try {
        const indentifier = 'api'
        const {success,reason} = await ratelimit.limit(indentifier)
        if(!success){
            return NextResponse.json({message: 'The request has been rate limited.', rateLimitState:reason, },{status:429})
        }
        const { email,name } = await request.json();
        if (!email || !name) {
            return NextResponse.json({ success: false, message: 'Email and Name is required' }, { status: 400 });
        }
        await supabaseAdmin.from('WaitList').insert({ name:name,email: email });
        return NextResponse.json({ success: true, message: 'Email and Name added to waitlist' }, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ success: false, message: 'Internal Server Error' }, { status: 500 });
    }
}