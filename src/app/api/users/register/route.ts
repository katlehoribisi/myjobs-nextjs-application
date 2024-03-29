'using client';

// using next you can use HTTP request 
import { connectDB } from "@/app/config/dbConfig";
import { NextRequest, NextResponse } from 'next/server'
import User from "@/models/userModel"
import bcrypt from 'bcryptjs'
import mongoose from "mongoose";
connectDB();

export async function POST(request: NextRequest) {
  try {

    const reqBody = await request.json();
    // Check if user already exists
    const user = await User.findOne({ email: reqBody.email })
    if (user) {
      throw new Error("User already exists")
    }

    // Hash password 
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(reqBody.password, salt)
    reqBody.password = hashedPassword

    // Create user
    await User.create(reqBody)
    return NextResponse.json({ message: "User created successfully", success: true }, { status: 201 })

  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 })
  }
}
