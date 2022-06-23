import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Gaming from "./components/Gaming";
import Home from "./components/Home";
import Learning from "./components/Learning";
import Live from "./components/Live";
import Movies from "./components/Movies";
import Music from "./components/Music";
import News from "./components/News";
import Sports from "./components/Sports";
import Trending from "./components/Trending";

function App() {
  return (
    <>
      <div className="flex justify-center items-center w-screen h-screen">
        <div className="w-11/12 h-5/6 md:w-3/4">
          <BrowserRouter>
            <div>こんにちは</div>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/gaming" element={<Gaming />}></Route>
              <Route path="/learning" element={<Learning />}></Route>
              <Route path="/live" element={<Live />}></Route>
              <Route path="/movies" element={<Movies />}></Route>
              <Route path="/music" element={<Music />}></Route>
              <Route path="/news" element={<News />}></Route>
              <Route path="/sports" element={<Sports />}></Route>
              <Route path="/trending" element={<Trending />}></Route>
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </>
  );
}

export default App;
