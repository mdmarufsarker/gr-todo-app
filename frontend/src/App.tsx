import React from "react";
import "./App.css";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { TodoList } from "./components/TodoList/TodoList";

function App() {
  return (
    <div className="App">
      <Header />
      <TodoList
        todos={[
          { title: "Do Dishes", isCompleted: true },
          { title: "Capachino Coffee", isCompleted: false },
          {title: "Homework". description: "History Project", isCompleted: false}
        ]} />
      <Footer />
    </div>
  );
}

export default App;
