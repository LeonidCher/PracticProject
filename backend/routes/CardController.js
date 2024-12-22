import Card from "../routes/card.js";

class CardController {
  async create(req, res) {
    try {
        const { name, size, price, image } = req.body;
        const card = awaitCard.create({ name, size, price, image });
        console.log(req.body, "POST запрос: данные в теле");
        res.json(card);
      } catch (e) {
        res.status(500).json(e);
      }
  }
  async getAll(req, res) {
    try {
      const cards = await Card.find();
      res.json(cards);
    } catch (e) {
      res.status(500).json(e);
      console.log(e)
    }
  }
  async getOne(req, res) {
    try {
      const card = await Card.findById(req.params.id);
      res.json(card);
    } catch (e) {
      res.status(400).json(e);
    }
  }
  async update(req, res) {
    try {
      const card = await Card.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      res.json(card);
    } catch (e) {
      res.status(500).json(e);
    }
  }
  async delete(req, res) {
    try {
      const card = await Card.findByIdAndDelete(req.params.id);
      res.json(card);
    } catch (e) {
      res.status(500).json(e);
    }
  }
}
export default new CardController();


