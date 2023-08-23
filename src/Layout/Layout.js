import React from "react";
import { BrowserRouter } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

function Layout({
  Categories,
  children,
  setInputValue,
  CategoriesFilter,
  
}) {
  return (
    <BrowserRouter>
      <Header
       
        setInputValue={setInputValue}
        Categories={Categories}
        CategoriesFilter={CategoriesFilter}
    
      />
      {children}
      <Footer />
    </BrowserRouter>
  );
}

export default Layout;
