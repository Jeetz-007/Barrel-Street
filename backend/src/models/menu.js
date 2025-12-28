import mongoose from "mongoose";

const menuSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    category: {
      type: String,
      required: true,
      enum: ["vodka", "whisky","beers"],
    },

    description : {
      type : String,
      required : true,
    },
    price: {
      ml30: {
        type: Number,
        required: true,
      },
      ml60: {
        type: Number,
        required: true,
      },
    },
  },
  { timestamps: true }
);

const Menu = mongoose.model("Menu", menuSchema);
export default Menu;
