import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Main from "./component/main/Main";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;