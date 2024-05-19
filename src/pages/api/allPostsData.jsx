import { getSortedPostsData } from "../../lib/posts";

export default function handler(req, res) {
  try {
    const allPostsData = getSortedPostsData();
    res.status(200).json(allPostsData);
  } catch (err) {
    res.status(500).json({ error: "Failed to load data" });
  }
}
