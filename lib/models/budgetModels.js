import { Schema, models, model } from "mongoose";

const budgetSchema = new Schema(
  {
    budgetType: String,
    budgetName: String,
    budgetAmount: Number,
  },
  { timestamps: true }
);

const Budget = models?.Budget || model("Budget", budgetSchema);

module.exports = Budget;
