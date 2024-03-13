import React from "react";
import { Index } from "./components/Index";

const data = [
  {
    id: 1,
    heading: "What is React?",
    paragraph:
      "React is an open-source JavaScript library primarily used for building user interfaces (UIs) and single-page applications (SPAs). It was developed by Facebook and later maintained by Facebook and a community of individual developers and companies.",
  },
  {
    id: 2,
    heading: "What is React Hooks?",
    paragraph:
      "Introduced in React 16.8, Hooks are functions that allow developers to use state and other React features without writing class components. Hooks provide a simpler and more intuitive way to manage component state and side-effects.",
  },
  {
    id: 3,
    heading: "What is React Router?",
    paragraph:
      "React Router is a popular routing library for React applications. It enables developers to create dynamic, client-side routing within single-page applications, allowing for navigation between different views or pages without a full page reload.",
  },
];

const App = () => {
  return (
    <>
      <Index data={data} />
    </>
  );
};

export default App;
