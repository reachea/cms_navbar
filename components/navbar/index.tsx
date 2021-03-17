import React from "react";
import styled from "styled-components";

export const NavbarDefault1 = () => {
  return (
    <NavbarContainerRow>
      <div className="__navbar_container">
        <Logo>
          <h1>LOGO</h1>
        </Logo>

        <Nav>
          <NavLink>Home</NavLink>
          <NavLink>About</NavLink>
          <NavLink>Contact</NavLink>
        </Nav>
      </div>
    </NavbarContainerRow>
  );
};

export const NavbarDefault2 = () => {
  return (
    <NavbarContainerRow>
      <div className="__navbar_container">
        <Nav>
          <NavLink>Home</NavLink>
          <NavLink>About</NavLink>
          <NavLink>Contact</NavLink>
        </Nav>

        <Logo>
          <h1>LOGO</h1>
        </Logo>
      </div>
    </NavbarContainerRow>
  );
};

export const NavbarDefault3 = () => {
  return (
    <NavbarContainerColumn>
      <div className="__navbar_container">
        <Logo>
          <h1>LOGO</h1>
        </Logo>

        <Nav>
          <NavLink>Home</NavLink>
          <NavLink>About</NavLink>
          <NavLink>Contact</NavLink>
        </Nav>
      </div>
    </NavbarContainerColumn>
  );
};

export const NavbarDefault4 = () => {
  return (
    <NavbarContainerColumn>
      <div className="__navbar_container">
        <Nav>
          <NavLink>Home</NavLink>
          <NavLink>About</NavLink>
          <NavLink>Contact</NavLink>
        </Nav>

        <Logo>
          <h1>LOGO</h1>
        </Logo>
      </div>
    </NavbarContainerColumn>
  );
};

const NavbarContainerRow = styled.div`
  width: 100%;
  height: auto;

  border-bottom: 1px solid rgb(187, 187, 187);
  box-shadow: 0px 8px 8px 0px rgb(187, 187, 187);

  .__navbar_container {
    border: none !important;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    height: 80px;
    width: 100%;

    padding-right: 15px;
    padding-left: 15px;
    margin-left: auto;
    margin-right: auto;

    @media (min-width: 576px) {
      max-width: 540px;
    }
    @media (min-width: 768px) {
      max-width: 720px;
    }
    @media (min-width: 992px) {
      max-width: 960px;
    }
    @media (min-width: 1200px) {
      max-width: 1140px;
    }
  }
`;

const NavbarContainerColumn = styled(NavbarContainerRow)`
  .__navbar_container {
    flex-direction: column;
    justify-content: space-evenly;
  }
`;

const Logo = styled.div`
  margin-left: 15px;
  margin-right: 15px;
`;

const Nav = styled.ul`
  list-style-type: none;
`;

const NavLink = styled.li`
  display: inline;
  margin-left: 15px;
  margin-right: 15px;

  :hover {
    cursor: pointer;
  }
`;
