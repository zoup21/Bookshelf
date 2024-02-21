import "./App.css";

import { Routes, Route} from "react-router-dom";
import ListBooks from "./ListBooks";
import SearchBooks from "./SearchBooks";




function App() {
  







  return (
    <Routes>
      <Route exact path="/" element={<ListBooks />} />
      <Route exact path="/search" element={<SearchBooks />} />
    </Routes>
  );
}

export default App;



