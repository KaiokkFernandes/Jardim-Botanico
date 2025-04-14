import React, { useState } from "react";
import styled from "styled-components";
import Sidebar from "../Sidebar/index";
import { FiMenu } from "react-icons/fi";

const LayoutContainer = styled.div`
  display: flex;
  height: 100vh;
`;

const SidebarContainer = styled.div`
  width: 250px;
  background: #f4f4f4;
  border-right: 1px solid #ddd;
  overflow-y: auto;
  position: fixed;
  top: 0;
  left: ${(props) => (props.isVisible ? "0" : "-250px")};
  height: 100%;
  transition: left 0.3s ease-in-out;
  z-index: 1000;
`;

const ContentContainer = styled.div`
  flex: 1;
  padding: 1rem;
  margin-left: ${(props) => (props.sidebarVisible ? "250px" : "0")};
  transition: margin-left 0.3s ease-in-out;
`;

const MenuButton = styled.button`
  position: fixed;
  top: 1rem;
  left: 1rem;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 1100;

  &:hover {
    color: #007bff;
  }
`;

const Layout = ({ children }) => {
  const [isSidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  return (
    <>
      <MenuButton onClick={toggleSidebar}>
        <FiMenu />
      </MenuButton>
      <LayoutContainer>
        <SidebarContainer isVisible={isSidebarVisible}>
          <Sidebar />
        </SidebarContainer>
        <ContentContainer sidebarVisible={isSidebarVisible}>
          {children}
        </ContentContainer>
      </LayoutContainer>
    </>
  );
};

export default Layout;