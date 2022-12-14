import { request } from "express";

export interface NO_PROPS {}
export interface DiaryCompProps {
  diary: IJournalInfo;
}
export interface JournalCompProps {
  tarotCard: Card;
  setJournal1Text: Function;
  Journal1Text: string;
  setJournal2Text: Function;
  Journal2Text: string;
}
export interface DailyDrawCompProps {}
export interface DiariesCompProps {}
export interface DescriptionBoxCompProps {
  tarotCard: Card;
  num: "one" | "two";
}
export interface DescriptionCompProps {
  tarotCard: Card;
  cardChosen: boolean;
  setJournal3Text: Function;
  Journal3Text: string;
}
export interface CardCompProps {
  tarotCard: Card;
}

export interface IUser {
  user_id?: number;
  username: string;
  password?: string;
}

// redefine the User object within Express as our own User with our defined types
declare global {
  namespace Express {
    interface User extends IUser {}
  }
}

export interface IFetchOptions {
  headers: IHeaderObject;
  body?: string;
}

export interface IHeaderObject {
  [key: string]: string;
}

export interface IJournalInfo {
  journal_id?: number;
  user_id: number;
  card_name_short: string;
  entry_one: string;
  entry_two: string;
  entry_three: string;
  created_at?: Date;
}

export interface IJournalQuery {
  user_id: number;
  journal_id: number;
}

// Tarot card Type
export interface Card {
  name_short: string;
  name: string;
  value: string;
  value_int: number;
  description: Description;
  url: string;
}
// Tarot card supprting Types
export interface Description {
  one: OneOrTwo;
  two: OneOrTwo;
}
export interface OneOrTwo {
  meaning: string;
  desc: string;
}
