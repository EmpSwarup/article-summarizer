import Hero from "./components/Hero";
import Demo from "./components/Demo";
import { Analytics } from "@vercel/analytics/react";

import "./App.css";

const App = () => {
  return (
    <main>
      <div className="main">
        <div className="gradient" />
      </div>
      <div className="app">
        <Analytics />
        <Hero />
        <Demo />
      </div>
    </main>
  );
};

export default App;
