//@ Current Route is /api/drawcard

import * as express from "express";
import * as Types from "../../../../Types";
// import the cards from the json file
// import ALLCARDS from "../../MergedCards.json";
const ALLCARDS = require(`../../MergedCards.json`);

const cardsRouter = express.Router();

cardsRouter.get("/:cardNum", (req, res, next) => {
  // grab the card number from the req params
  const cardNum = Number(req.params.cardNum);
  // select the card whose value matches that of the chosen card from all cards
  const cardToSend = ALLCARDS[cardNum];
  // respond with the card
  console.log({ cardToSend });
  res.status(200).json(cardToSend);
});

export default cardsRouter;