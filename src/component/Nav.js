import React from 'react'
import styled, { ThemeProvider} from "styled-components";

const utilImge = [
    process.env.PUBLIC_URL + `/img/util1.png`,
    process.env.PUBLIC_URL + `/img/util2.png`,
    process.env.PUBLIC_URL + `/img/util3.png`,
    process.env.PUBLIC_URL + `/img/util4.png`,
    process.env.PUBLIC_URL + `/img/util5.png`
];
const NavWrap = styled.nav`
    position: relative;
    width: 85%;
    height: 35px;
    background-color: #222222;
    margin-left: 15%;
    transition: 0.5s;

    a{
        position: absolute;
        top: 5px;

        &:nth-of-type(1){
            left: 10px;
        }

        &:nth-of-type(2){
            left: 150px;
        }

        &:nth-of-type(3){
            right: 90px;
        }

        &:nth-of-type(4){
            right: 10px;
        }
    }
`

function Nav() {
  return (
    <div>Nav</div>
  )
}

export default Nav