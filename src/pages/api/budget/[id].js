import {
  getSingleBudget,
  editBudget,
  deleteBudget,
} from "../../../../lib/controllers/budgetController";

export default async function handler(req, res) {
  switch (req.method) {
    case "GET":
      await getSingleBudget(req, res);
      break;
    case "PUT":
      await editBudget(req, res);
      break;
    case "DELETE":
      await deleteBudget(req, res);
      break;
    default:
      res.json({ error: "Please request the correct method" });
      break;
  }
}
