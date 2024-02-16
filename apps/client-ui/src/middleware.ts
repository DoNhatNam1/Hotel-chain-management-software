import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export default function middleware(req: NextRequest) {
    let cookie = req.cookies.get('access_token')?.value;
    let roles = ['Admin', 'PhucVu', 'LeTan', 'QLChiNhanh']; // Change to an array
    if (!cookie && roles.includes(req.nextUrl.pathname.split('/')[1])) { // Check if the pathname is in the roles array
        const absoluteURL = new URL("/warning", req.nextUrl.origin);
        return NextResponse.rewrite(absoluteURL.toString());
    }
}