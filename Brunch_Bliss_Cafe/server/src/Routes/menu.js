import express from "express";
import data from "../data.js";

const router = express.Router();
const API_KEY = "a05e7d6beb2f7a3517a89a11bbe7d381";

// Let's get all the menu items
router.get("/", (req, res) => {
  const { take } = req.query;

  if (!take) return res.json(data);
  if (isNaN(take)) return res.status(400).json("invalid input entered");

  const split_data = data.slice(0, Number(take));

  res.json(split_data);
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  res.status(200).json(data[Number(id) - 1]);
});

router.get("/:title", (req, res) => {
  const { title } = req.params;

  const menuItem = data.filter((item) => item.title === title);

  res.status(200).json(menuItem);
});

router.post("/create", (req, res) => {
  const userItem = req.body;

  const newItem = {
    id: data.length + 1,
    title: userItem.title,
    body: userItem.body,
  };

  data.push(newItem);

  res.status(201).json(newItem);
});

// Let's update a menu item
router.put("/update/:id", (req, res) => {
  const { id } = req.params;
  const update_body = req.body;

  if (!data[Number(id) - 1]) return res.status(404).json("item not found");

  data[Number(index) - 1] = update_body;

  res.status(200).json(update_body);
});

// Let's delete a post
router.delete("/delete/:id", (req, res) => {
  const { id: preId } = req.params;
  const id = Number(preId);

  const index = data.findIndex((post) => {
    if (post.id === id) return true;
    return false;
  });

  const deletedItem = data.splice(index, 1);

  res.status(200).json(deletedItem);
});

// Let's update the userId on a post -> needs an API key which is in the headers
router.patch("/update-title/:id", (req, res) => {
  const { id: preId } = req.params;

  const headers = req.headers;

  const apiKey = headers["x-api-key"];

  if (!apiKey) return res.status(401).json("missing credentials");
  if (apiKey !== API_KEY) return res.status(403).json("Not Authorized");

  const id = Number(preId) - 1;

  const body = req.body;

  data[id] = { ...data[id], title: body.title };

  res.status(200).json(body);
});

export default router;
