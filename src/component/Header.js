import React from 'react'
import styled, { ThemeProvider} from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeader } from '@fortawesome/free-solid-svg-icons'
import { faBuilding } from '@fortawesome/free-regular-svg-icons'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'
import { faUtensils } from '@fortawesome/free-solid-svg-icons'

const menuItem = [{
    ico : faHeader, name : "Hotel"
}, {
    ico : faBuilding, name : "Facility"
}, {
    ico : faBriefcase, name : "Business"
}, {
    ico : faUtensils, name : "Restaurant"
}];
const logoImg = {
    logo1 : process.env.PUBLIC_URL + `/img/logo1.png`,
    logo2 : process.env.PUBLIC_URL + `/img/logo2.png`
};
const snsImg = [
    process.env.PUBLIC_URL + `/img/sns1.png`,
    process.env.PUBLIC_URL + `/img/sns2.png`,
    process.env.PUBLIC_URL + `/img/sns3.png`,
    process.env.PUBLIC_URL + `/img/sns4.png`,
    process.env.PUBLIC_URL + `/img/sns5.png`
];
const HeaderWrap = styled.header`
    position: fixed;
    width: 15%;
    height: 100%;
    background-color: white;
    top: 0;
    left: 0;
    transition: 0.5s;
`;
const Logo = styled.h1`
    width: 180px;
    height: 136px;
    background-image: url(${(props) => props.img.logo1});
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    position: absolute;
    top: 70px;
    left: 50%;
    margin-left: -90px;
    text-indent: -99999%;
`;
const Gnb = styled.ul`
    position: absolute;
    top: 300px;
    right: 57px;

    a{
        display: block;
        padding: 8px 30px;
        font: bold 17px/1.8 "";
        color: #555555;
        text-align: left;
        transition: 0.5s;
    }

    svg{
        margin-right: 13px;
    }

    &:hover{
        color: skyblue;
    }
`
const Sns = styled.ul`
    width: 90px;
    height: 47px;
    position: absolute;
    bottom: 50px;
    right: 50%;
    margin-right: -45px;

    a{
        float: left;
    }
`

function Header() {
  return (
    <HeaderWrap>
        <Logo img={logoImg}/>
        <Gnb>
            {menuItem.map((el) => 
                <li key={el.name}>
                    <a href='#'>
                        <FontAwesomeIcon icon={el.ico}/>
                        {el.name}
                    </a>
                </li>
            )}
        </Gnb>
        <Sns>
            {snsImg.map((el) => 
                <a href='#' key={el}>
                    <img src={el} alt={el} />
                </a>
            )}
        </Sns>
    </HeaderWrap>
  )
}

export default Header