import supabaseAdmin from "@/utils/supabase/supabase-admin";
export async function POST(request: Request) {
    try {
        const { email,name } = await request.json();
        if (!email && !name) {
            return new Response(JSON.stringify({ success: false, message: 'Email and Name is required' }), { status: 400 });
        }
        await supabaseAdmin.from('WaitList').insert({ name:name,email: email });
        return new Response(JSON.stringify({ success: true, message: 'Email and Name added to waitlist' }), { status: 200 });
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ success: false, message: 'Internal Server Error' }), { status: 500 });
    }
}
