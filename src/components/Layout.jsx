import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function layout(props) {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  );
}

export default layout;
