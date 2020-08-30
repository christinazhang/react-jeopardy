import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import styled from "styled-components";
import "./App.css";
import Category from "./components/Category.js";

const Board = styled.div`
  display: flex;
  flex-direction: row;
`;

const Clue = styled.div`
  color: #fff;
  background-color: #333;
  border: 1px solid #fff;
  border-radius: 2px;
  padding: 8px;
  height: 100px;
  flex: 1 0 auto;
`;

const categories = [
  {
    title: "Test Category 1",
    clues: [1, 2, 3, 4, 5],
  },
  {
    title: "Test Category 2",
    clues: [1, 2, 3, 4, 5],
  },
  {
    title: "Test Category 3",
    clues: [1, 2, 3, 4, 5],
  },
  {
    title: "Test Category 4",
    clues: [1, 2, 3, 4, 5],
  },
  {
    title: "Test Category 5",
    clues: [1, 2, 3, 4, 5],
  },
];

function App() {
  return (
    <Router className="App">
      <Board>
        {categories.map((category, index) => (
          <Category
            key={index}
            title={category.title}
            clues={category.clues}
          ></Category>
        ))}
      </Board>
    </Router>
  );
}

export default App;
