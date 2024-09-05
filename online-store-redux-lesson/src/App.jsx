import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";
import List from "./components/list";
import StoreNavBar from "./components/StoreNavBar";

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <StoreNavBar />
        <Routes>
          <Route path="/" element={<List />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;