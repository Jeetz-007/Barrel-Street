// import express from "express"
// import Menu from "../models/menu.js"

// const router = express.Router()

// router.get("/seed", async (req, res) => {
//   const item = await Menu.create({
//     name: "Absolut Vodka",
//     category: "vodka",
//     price: 350,
//     description: "Premium Swedish vodka",
//     imageUrl: "https://example.com/vodka.jpg",
//   },
//   {
//     name: "Smirnoff",
//     category: "vodka",
//     price: 250,
//     description: "Popular irish vodka",
//     imageUrl: "https://example.com/vodka.jpg",
//   }
// );

//   res.json(item);
// });
 
// export default router;

// import express from "express";
// import Menu from "../models/menu.js";

// const router = express.Router();

// // POST → add menu item
// router.post("/", async (req, res) => {
//   try {
//     const menuItem = await Menu.create(req.body);
//     res.status(201).json(menuItem);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// });

// export default router;

import express from "express";
import Menu from "../models/menu.js";

const router = express.Router();

/**
 * @route   POST /api/menu
 * @desc    Add a new menu item
 */
// router.post("/", async (req, res) => {
//   try {
//     const menuItem = await Menu.create(req.body);
//     res.status(201).json(menuItem);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// });

router.post("/", async (req, res) => {
  try {
    const data = req.body;

    const savedItems = Array.isArray(data)
      ? await Menu.insertMany(data)
      : await Menu.create(data);

    res.status(201).json(savedItems);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});


/**
 * @route   GET /api/menu
 * @desc    Get all menu items
 */
router.get("/", async (req, res) => {
  try {
    const menuItems = await Menu.find();
    res.json(menuItems);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

/**
 * @route   GET /api/menu/:category
 * @desc    Get menu items by category (vodka / whisky)
 */
router.get("/:category", async (req, res) => {
  try {
    const category = req.params.category;

    const items = await Menu.find({ category });

    res.json(items);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
