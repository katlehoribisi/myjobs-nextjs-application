'using client';

// using next you can use HTTP request 
import { connectDB } from "@/app/config/dbConfig";
import { NextRequest, NextResponse } from 'next/server'
connectDB();

export async function POST(request: NextRequest) {
  return NextResponse.json({
    // Process a POST request
    message: "users/register api accessed with post method."
  })
}
