import {Link, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import BookList from "./pages/BookList";
import Book from "./pages/Book";
import NewBook from "./pages/NewBook";
import NotFound from "./pages/NotFound";


function App() {
  return (
    <>
      <nav>
        <ul>
          <li> <Link to="/"> Home </Link></li>
          <li> <Link to="/about"> About </Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} /> 
        <Route path="/books">
          <Route index element={<BookList />} />
          <Route path=":id" element={<Book />} />
          <Route path="new" element={<NewBook />} />          
        </Route>      

        {/* <Route path="/books" element={<BookList />} />
        <Route path="/books/:id" element={<Book />} />
        <Route path="/books/new" element={<NewBook/>} /> */}
        
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )   
}

export default App;
