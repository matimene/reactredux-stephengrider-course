import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import Header from "./components/Header";
import Route from "./components/Route";

const items = [
  { title: "What?What?What?What?", content: "WhatWhatWhatWhat" },
  { title: "Who?Who?Who?Who?Who?", content: "WhoWhoWhoWhoWho" },
  { title: "We?We?We?We?We?We?", content: "WeWeWeWeWeWeWe" },
];

const options = [
  {
    label: "The color Red",
    value: "red",
  },
  {
    label: "The color Blue",
    value: "blue",
  },
  {
    label: "The color Green",
    value: "green",
  },
];

export default () => {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div>
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          label="Select a color"
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
};
