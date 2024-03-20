'using client';

// using next you can use HTTP request 
import { connectDB } from "@/app/config/dbConfig";
import { NextRequest, NextResponse } from 'next/server'
import User from "@/models/userModel"
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

connectDB();

export async function POST(request: NextRequest) {
  try {

    const reqBody = await request.json();

    // Check if user exists
    const user = await User.findOne({ email: reqBody.email })
    if (!user) {
      throw new Error("User does not exist")
    }

    // Compare passwords. 
    const validPassword = await bcrypt.compare(
      reqBody.password, //This is the plain local password.
      user.password // This is the password that is inside the databse.
    )
    if (!validPassword) {
      throw new Error("Invalid Password")
    }

    // Create token
    const dataToBeSigned = {
      userID: user._id,
      email: user.email,
    }

    const token = jwt.sign(dataToBeSigned, process.env.jwt_secret!, {
      expiresIn: "1d",
    })

    const response = NextResponse.json({ message: "Login Successful" }, { status: 200 })

    // Set cookie
    response.cookies.set("Token: ", token, {
      httpOnly: true,
      maxAge: 60 * 60 * 24 * 1000, //1 day
    });

    return response;

  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 })
  }
}
