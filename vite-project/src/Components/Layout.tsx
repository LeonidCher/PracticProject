import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import { Routes, Route } from "react-router-dom";
import Music from "./Music";
import Shop from "./Shop";
import ProductCard from "./ProductCard";
import Tour from "./Tour";
import { useLocation } from "react-router-dom";

const Layout = () => {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <>
    <div className="backgroundI">
      <Routes>
        <Route path="/" element={<Main></Main>} />
        <Route path="/h/*" element={<Header></Header>}>
          <Route path="music" element={<Music />} />
          <Route path="shop" element={<Shop />} />
          <Route path="productcard" element={<ProductCard />} />
          <Route path="tour" element={<Tour />} />
        </Route>
      </Routes>
      <Footer></Footer>
    </div>
    </>
  );
};
export default Layout;
