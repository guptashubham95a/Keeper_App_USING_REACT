import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";
//2. Created a App.jsx component.
function App() {
  return (
    <div>
      <Header />
      {notes.map(obj => {
        return <Note key={obj.key} title={obj.title} content={obj.content} />;
      })}
      <Footer />
    </div>
  );
}

export default App;
