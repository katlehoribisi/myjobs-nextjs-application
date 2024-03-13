// using next you can use HTTP request 
import { connectDB } from "@/app/config/dbConfig";
import type { NextApiRequest, NextApiResponse } from 'next'

connectDB();

 
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    console.log("test")
  } else {
    // Handle any other HTTP method
  }
}
 

