const Budget = require("../models/budgetModels");
import "../database";

export const getAllBudget = async (req, res) => {
  const budgets = await Budget.find();
  res.json({ budgets });
};

export const addBudget = async (req, res) => {
  const { budgetType, budgetName, budgetAmount } = req.body;
  try {
    const budget = await Budget.create({
      budgetType,
      budgetName,
      budgetAmount,
    });
    return res.status(201).json({ budget });
  } catch (error) {
    return res.json({ error });
  }
};

export const getSingleBudget = async (req, res) => {
  const { id } = req.query;
  try {
    const budget = await Budget.findById(id);
    return res.json({ budget });
  } catch (error) {
    console.log(error);
  }
};

export const editBudget = async (req, res) => {
  try {
    const { id } = req.query;
    const { budgetType, budgetName, budgetAmount } = req.body;
    const budget = await Budget.findByIdAndUpdate(id, {
      budgetType,
      budgetName,
      budgetAmount,
    });
    return res.json({ budget });
  } catch (error) {
    return res.json({ error });
  }
};

export const deleteBudget = async (req, res) => {
  try {
    const { id } = req.query;
    await Budget.findByIdAndDelete(id);
    return res.json({ msg: "Success Delete" });
  } catch (error) {
    return res.json({ error });
  }
};
