import Router from "express";
import Card from "../routes/card.js";
import CardController from "../routes/CardController.js";
const router = Router();


router.post("/cards/",  CardController.create )
router.get("/cards/", CardController.getAll)
router.get("/cards/:id", CardController.getOne)
router.put("/cards/", CardController.update)
router.delete("/cards/:id", CardController.delete)

export default router