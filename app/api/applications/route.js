import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongoose";
import Application from "@/models/Application";
import { z } from "zod";

const applicationSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(1, "Phone is required"),
  age: z.number().min(16, "Must be at least 16").max(99, "Age must be under 99"),
  experience: z.enum(["none", "beginner", "intermediate", "advanced"]),
  motivation: z.string().min(1, "Motivation is required"),
});

export async function POST(req) {
  try {
    await dbConnect();

    const body = await req.json();
    const validatedData = applicationSchema.parse(body);

    const application = await Application.create(validatedData);

    return NextResponse.json(
      {
        success: true,
        message: "Application submitted successfully",
        id: application._id.toString(),
      },
      { status: 201 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: error.errors[0].message },
        { status: 400 }
      );
    }

    console.error("Application error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}