import "./App.css";
import Banner from "./components/banner-section/Banner";
import Categories from "./components/category-section/Categories";
import Discount from "./components/discount-section/Discount";

import Header from "./components/header/Header";
import SubMenu from "./components/submenu/SubMenu";

function App() {
  return (
    <div>
      <Header />
      <SubMenu />
      <Banner />
      <Categories />
      <Discount />
    </div>
  );
}

export default App;
