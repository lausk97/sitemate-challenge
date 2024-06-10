import { Router, Request, Response } from "express";
import { IssueModel } from "../models/issue";

const router = Router();

router.get("/", async (_req: Request, res: Response) => {
  try {
    const issues = await IssueModel.find({}, null, { sort: { id: 1 } });
    res.status(200).json(issues);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/", async (req: Request, res: Response) => {
  try {
    const issue = await IssueModel.create(req.body);
    res.status(200).json(issue);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.patch("/:id", async (req: Request, res: Response) => {
  try {
    const issue = await IssueModel.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { returnDocument: "after" }
    );
    res.status(200).json(issue);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.delete("/:id", async (req: Request, res: Response) => {
  try {
    const deletedIssue = await IssueModel.findOneAndDelete({
      _id: req.params.id,
    });
    res.status(200).json(deletedIssue);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
