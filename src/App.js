import React from "react";
import './App.css';
import {Route, Routes} from "react-router-dom";

import Layout from "./layout/Layout";
import HelpPage from "./pages/HelpPage";
import DonePage from "./pages/DonePage";
import TodoList from "./features/todos/TodoList";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<TodoList />}/>
                <Route path="help" element={<HelpPage />}/>
                <Route path="done" element={<DonePage />}/>
                <Route path="*" element={<NotFoundPage />}/>
            </Route>
        </Routes>
    </div>
  );
}

export default App;
