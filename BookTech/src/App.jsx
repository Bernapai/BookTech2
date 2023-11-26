import { BrowserRouter, Routes, Route } from "react-router-dom";

import { NavBar } from "./components/navbar";
import { BookListContainer } from "./components/BookListContainer";
import { Error404 } from "./components/Error404";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<BookListContainer greeting="Welcome To BookTech" />} />
        <Route path="/category/:id" element={<BookListContainer />} greeting="Books" />
       {/* <Route path="/items/:id" element={<BookDetailContainer />} /> */}
       {/* <Route path="*" element={<Error404 />} />*/}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
