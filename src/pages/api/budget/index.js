import {
  getAllBudget,
  addBudget,
} from "../../../../lib/controllers/budgetController";

export default async function handler(req, res) {
  switch (req.method) {
    case "GET":
      await getAllBudget(req, res);
      break;
    case "POST":
      await addBudget(req, res);
      break;
    default:
      res.json({ error: "Please request the correct method" });
      break;
  }
}
