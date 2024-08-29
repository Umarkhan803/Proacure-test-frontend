import { useEffect, useState } from "react";
import "./App.css";
import Search from "./Components/Search";
import SideBar from "./Components/SideBar";
import NewItem from "./Components/NewItem";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState("");

  // Product List
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch("http://localhost:3500/api/products");
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  // Search handler
  const handleSearch = async (e) => {
    const query = e.target.value;
    setQuery(query);
    if (query.length > 0) {
      const response = await fetch(
        `http://localhost:3500/api/search?q=${query}`
      );
      const data = await response.json();
      setProducts(data);
    } else {
      window.location.reload(true);
      setProducts(products);
    }
  };

  return (
    <>
      <BrowserRouter>
        <SideBar />
        <Routes>
          <Route
            path="/"
            element={
              <Search
                query={query}
                products={products}
                handleSearch={handleSearch}
              />
            }
          />
          <Route path="/newItem" element={<NewItem />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
