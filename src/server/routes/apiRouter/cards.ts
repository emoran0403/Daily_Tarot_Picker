//@ Current Route is /api/drawcard

import * as express from "express";
import * as Types from "../../../../Types";
// import the cards from the json file
// import ALLCARDS from "../../MergedCards.json";
const ALLCARDS = require(`../../MergedCards.json`);

const cardsRouter = express.Router();

// get a single card
cardsRouter.get("/:cardname", (req, res, next) => {
  // grab the card name from the req params
  const cardName = req.params.cardname;
  // select the card whose name matches that of the chosen card from all cards
  const [cardToSend] = ALLCARDS.filter((card) => card.name_short === cardName);
  // respond with the card
  // console.log({ cardToSend });
  res.status(200).json(cardToSend);
});

// get a random card
cardsRouter.get("/random/:cardNum", (req, res, next) => {
  // grab the card number from the req params
  const cardNum = Number(req.params.cardNum);
  // select the card whose value matches that of the chosen card from all cards
  const cardToSend = ALLCARDS[cardNum];
  // respond with the card
  // console.log({ cardToSend });
  res.status(200).json(cardToSend);
});

// get all cards
cardsRouter.get("/", (req, res, next) => {
  // respond with all cards
  console.log("fetched all cards");
  res.status(200).json(ALLCARDS);
});

export default cardsRouter;
