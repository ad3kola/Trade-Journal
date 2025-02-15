import { db } from "@/config/firebase";
import { currentUser, getAuth } from "@clerk/nextjs/server";
import { doc, addDoc, collection } from "firebase/firestore";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {}

export async function POST(request: NextRequest) {
  try {
    const user = await currentUser();
    if (user) {
      const tradeData = await request.json();
      const userEmail = user.emailAddresses[0].emailAddress;
      const tradesCollectionRef = collection(db, "users", userEmail, "trades");
      const docRef = await addDoc(tradesCollectionRef, tradeData);
      return NextResponse.json({
        message: "Trade added successfully, ",
        tradeId: docRef.id,
      });
    }
  } catch (err) {
    return NextResponse.json({
      message: "Error uploading trade log",
      err,
    });
  }
}
