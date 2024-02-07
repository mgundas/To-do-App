import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/static/Navbar";
import { Todo } from "./pages/Todo";


function App() {
  return (
    <div className="flex flex-col h-screen w-screen">
      <Navbar />
      <div className="flex flex-col flex-1 overflow-auto overflow-x-hidden p-4">
        <Routes>
          <Route path="/" element={<Todo />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
