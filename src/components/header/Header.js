import React, { useEffect } from "react";
import MainHeader from "./MainHeader";
import CollapseHeader from "./CollapseHeader";
import { Container } from "./styles/_headerStyle";

function Header() {
  function handleWindowScroll() {
    const mainHeader = document.getElementById("main-header");
    const collapseHeader = document.getElementById("collapse-header");
    let currentScrollPos = window.pageYOffset;
    if (currentScrollPos === 0) {
      setTimeout(() => {
        mainHeader.style.display = "block";
        collapseHeader.style.display = "none";
      }, 800);
    }
    if (currentScrollPos > 48) {
      setTimeout(() => {
        mainHeader.style.display = "none";
        collapseHeader.style.display = "block";
      }, 800);
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", handleWindowScroll);
    return () => {
      window.removeEventListener("scroll", handleWindowScroll);
    };
  }, []);
  return (
    <Container>
      <MainHeader />
      <CollapseHeader />
    </Container>
  );
}

export default Header;
