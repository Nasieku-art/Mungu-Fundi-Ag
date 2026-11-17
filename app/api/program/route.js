import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongoose";
import Program from "@/models/Program";

export async function GET(req) {
  try {
    await dbConnect();
    const { searchParams } = new URL(req.url);
    const visible = searchParams.get("visible");

    const query = {};
    if (visible === "true") {
      query.visible = true;
    }

    const programs = await Program.find(query).sort({ createdAt: 1 });
    return NextResponse.json({ programs }, { status: 200 });
  } catch (error) {
    console.error("Program fetch error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}