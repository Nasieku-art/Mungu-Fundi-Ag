import mongoose from "mongoose";

const programSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      trim: true,
    },
    description: {
      type: String,
      required: [true, "Description is required"],
      trim: true,
    },
    duration: {
      type: String,
      required: [true, "Duration is required"],
      trim: true,
    },
    location: {
      type: String,
      required: [true, "Location is required"],
      trim: true,
    },
    nextIntake: {
      type: String,
      required: [true, "Next intake is required"],
      trim: true,
    },
    price: {
      type: String,
      default: "",
    },
    features: [
      {
        type: String,
        trim: true,
      },
    ],
    visible: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

const Program = mongoose.models.Program || mongoose.model("Program", programSchema);

export default Program;