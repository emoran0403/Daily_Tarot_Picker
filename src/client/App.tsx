import * as React from "react";
import { useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import * as Types from "../../Types";
import DailyDraw from "./DailyDraw/DailyDrawView";
import Loginpage from "./Login_Register/Login";
import Diaries from "./Diary/Diaries";
import Navbar from "./Navbar";
import CardsView from "./CardsView/CardsView";
import CardsDetails from "./CardsView/CardsDetails";
import SingleDiary from "./Diary/SingleDiary";

const App = (props: Types.NO_PROPS) => {
  const loc = useLocation();
  // scroll to the top of the page when changing views
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [loc.pathname]);
  return (
    <main>
      <Navbar />
      <Routes>
        <Route path="/" element={<Loginpage />} />
        <Route path="/dailydraw" element={<DailyDraw />} />
        <Route path="/diary" element={<Diaries />} />
        <Route path="/cards" element={<CardsView />} />
        <Route path="/cards/:cardID" element={<CardsDetails />} />
        <Route path="/singlediary" element={<SingleDiary />} />
      </Routes>
    </main>
  );
};

export default App;

/**
 * app holds all components
 * '/' and '/register' deal with logging users in and registering new users
 * both send users to '/dailydraw'
 * '/dailydraw' is where users pick their card and create journal entries
 * after an entry is created, sends users to '/diary'
 * '/diary' allows users to see their previous entries
 * 'cards' and 'cards:cardID' are standalone components reached via navbar to view cards
 */
