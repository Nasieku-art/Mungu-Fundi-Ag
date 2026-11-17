import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      lowercase: true,
      trim: true,
    },
    phone: {
      type: String,
      required: [true, "Phone is required"],
      trim: true,
    },
    age: {
      type: Number,
      required: [true, "Age is required"],
      min: [16, "Must be at least 16 years old"],
      max: [99, "Age must be under 99"],
    },
    experience: {
      type: String,
      enum: ["none", "beginner", "intermediate", "advanced"],
      required: [true, "Experience level is required"],
    },
    motivation: {
      type: String,
      required: [true, "Motivation is required"],
      trim: true,
    },
    status: {
      type: String,
      enum: ["pending", "reviewing", "accepted", "rejected"],
      default: "pending",
    },
  },
  {
    timestamps: true,
  }
);

const Application = mongoose.models.Application || mongoose.model("Application", applicationSchema);

export default Application;