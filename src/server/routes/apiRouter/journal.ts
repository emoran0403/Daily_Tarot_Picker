//@ Current Route is /api/journal

import * as express from "express";
import * as Types from "../../../../Types";
import DB from "../../db";

const journalRouter = express.Router();

// get all journals
journalRouter.get("/", async (req, res, next) => {
  try {
    // grab the user_id from the req body and ensure it is treated as a number
    const user_id = req.user?.user_id;

    // if any data is missing, return and respond with an error message
    if (!user_id) {
      return res.status(401).json({ message: "could not get all journals, missing data" });
    }

    // query the db, given the user_id
    const journals = await DB.Journals.readAllJournals(user_id);

    // respond with the journals
    res.status(200).json(journals);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "unable to get all journals" });
  }
});

// get one journal
//@ implement this when adding diary sorting functionality
journalRouter.get("/:id", async (req, res, next) => {
  try {
    // grab the user_id from the req body and ensure it is treated as a number
    const user_id = req.user?.user_id;

    // if any data is missing, return and respond with an error message
    if (!user_id) {
      return res.status(401).json({ message: "could not get journal, missing data" });
    }

    // grab the journal_id from the req params and ensure it is treated as a number
    const journal_id = Number(req.params.id);

    // query the db, with the given the user_id and journal_id
    const [journal] = await DB.Journals.readOneJournal({ user_id, journal_id });

    //! what happens if there is no journal for the given user_id and journal_id?
    // journal should be an empty array, we can check for that on the front end

    // respond with the journal
    res.status(200).json({ message: "get one on journalRouter worked", journal });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "unable to get one journal" });
  }
});

// save a new journal
journalRouter.post("/", async (req, res, next) => {
  try {
    // grab the user_id from the req user, supplied from passport
    const user_id = req.user?.user_id;

    // grab the required information from the req body
    const { card_name_short, entry_one, entry_two, entry_three } = req.body;

    // if any data is missing, return and respond with an error message
    if (!user_id || !card_name_short || !entry_one || !entry_two || !entry_three) {
      return res.status(400).json({ message: "could not save journal, missing data" });
    }

    // query the db with the new journal info
    const DB_Res = await DB.Journals.createNewJournal({ user_id, card_name_short, entry_one, entry_two, entry_three });

    // define the newly created journal's id from the DB response
    const newJournalID = DB_Res.insertId;

    res
      .status(200)
      .json({ message: `new journal journalRouter worked, journal ${newJournalID} created`, newJournalID });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "unable to make new journal" });
  }
});

export default journalRouter;
