import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongoose";
import Team from "@/models/Team";

export async function GET(req) {
  try {
    await dbConnect();
    const { searchParams } = new URL(req.url);
    const visible = searchParams.get("visible");

    const query = {};
    if (visible === "true") {
      query.visible = true;
    }

    const team = await Team.find(query).sort({ order: 1, createdAt: 1 });
    return NextResponse.json({ team }, { status: 200 });
  } catch (error) {
    console.error("Team fetch error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}