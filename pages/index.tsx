import React from "react";
import styled, { createGlobalStyle } from "styled-components";

import {
  NavbarDefault1,
  NavbarDefault2,
  NavbarDefault3,
  NavbarDefault4,
} from "../components/navbar";

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0px;
    margin: 0px;
    box-sizing: border-box;
    font-family: "Oxygen", sans-serif;
  }
`;

const App = () => {
  const [name, setName] = React.useState(() => <NavbarDefault1 />);

  const navbarLayoutHandler = async (e: any) => {
    const local = localStorage.getItem("navbar")
      ? JSON.parse(localStorage.getItem("navbar"))
      : null;

    const newItem = await JSON.parse(e.target.value);

    const objs = await { ...local, ...newItem };

    setName(
      objs.navbarLayout === "default1"
        ? () => <NavbarDefault1 />
        : objs.navbarLayout === "default2"
        ? () => <NavbarDefault2 />
        : objs.navbarLayout === "default3"
        ? () => <NavbarDefault3 />
        : objs.navbarLayout === "default4"
        ? () => <NavbarDefault4 />
        : () => <NavbarDefault1 />
    );

    const objstr = `{${Object.keys(objs).map(
      (obj) => `"${obj}": "${objs[obj]}"`
    )}}`;

    localStorage.setItem("navbar", `${objstr}`);
  };

  return (
    <Layout>
      <GlobalStyle />

      <Editor>
        <label htmlFor="navbarStyle">Navbar Style</label>

        <select
          name="navbarStyle"
          id="navbarStyle"
          onChange={(e) => navbarLayoutHandler(e)}
        >
          <option value="" selected disabled hidden>
            Choose Style
          </option>
          <option value='{ "navbarLayout": "default1" }'>default 1</option>
          <option value='{ "navbarLayout": "default2" }'>default 2</option>
          <option value='{ "navbarLayout": "default3" }'>default 3</option>
          <option value='{ "navbarLayout": "default4" }'>default 4</option>
        </select>
      </Editor>

      <Main>{name}</Main>
    </Layout>
  );
};

export default App;

const Layout = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: row;
`;

const Main = styled.div`
  width: 80%;
`;

const Editor = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px;
  width: 20%;
  border-right: 1px solid rgb(187, 187, 187);
  box-shadow: 0px 8px 8px 0px rgb(187, 187, 187);
`;
