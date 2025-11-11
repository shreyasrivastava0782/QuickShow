import mongoose from "mongoose";

const movieSchema = new mongoose.Schema(
  {
    imdbId: {
      type: String,
      required: true,
      unique: true, // prevent duplicates
    },
    title: {
      type: String,
      required: true,
    },
    originalTitle: {
      type: String,
      default: "",
    },
    releaseYear: {
      type: Number,
      default: null,
    },
    image: {
      id: { type: String, default: "" },
      url: { type: String, default: "" },
      width: { type: Number, default: null },
      height: { type: Number, default: null },
    },
    genres: {
      type: [String],
      default: [],
    },
    rating: {
      type: Number,
      default: null,
    },
    plot: {
      type: String,
      default: "No description available",
    },
    cast: [
      {
        id: { type: String, default: "" },
        name: { type: String, default: "Unknown" },
        image: { type: String, default: "" },
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("Movie", movieSchema);
