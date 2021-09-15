import {
  ShoppingBasket,
  ShoppingCartOutlined,
  MenuOutlined,
} from "@material-ui/icons";
import React from "react";
// import { Link } from "react-router-dom";
import styled from "styled-components";
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import "../index.css";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({ 
  menuItem: {
    background: "#A36833",
  
},

});

export default function NavBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Container>
      <Wrapper>
        <Left>
          <ShoppingCartOutlined />
        </Left>
        <Center>
          <Logo>CHAMISAL</Logo>
          <LogoSmall>VINEYARDS</LogoSmall>
        </Center>
        <Right>
          <MenuOutlined onClick={handleClick}/>
          <Menu 
            className="menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem className={(classes.menuItem)} onClick={handleClose}> <a href="/">home</a></MenuItem>
            <MenuItem className={(classes.menuItem)} onClick={handleClose}><a href="/shop">shop</a></MenuItem>
            <MenuItem className={(classes.menuItem)} onClick={handleClose}><a href="/login">login</a></MenuItem>
            <MenuItem className={(classes.menuItem)} onClick={handleClose}><a href="/registration">registration</a></MenuItem>
          </Menu>
        </Right>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  height: 70px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  align-items: center;
  cursor: pointer;
  border-radius: 50%;
  border: 2px solid black;
  padding: 10px;
  display: flex;
  align-content: center;
  justify-content: center;
`;

const Shop = styled.div``;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Logo = styled.h1`
  font-family: "source_sans_proregular", sans-serif;
  color: #404040;
  font-weight: bold;
  letter-spacing: 0.2em;
  cursor: pointer;
`;
const LogoSmall = styled.h3`
  color: #808080;
  font-size: small;
  letter-spacing: 0.3em;
`;
const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  max-width: 100%;
`;


