import mongoose from "mongoose";
const courseSchema = new mongoose.Schema({
    name: { type: String, required: true },
    id: String,
    number: String,
    startDate: String,
    endDate: String,
    department: Date,
    credits: Number,
    description: String,
    image: String,
  },
  { collection: "courses" });
export default courseSchema;