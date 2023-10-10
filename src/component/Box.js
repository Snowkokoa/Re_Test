import React from 'react'
import styled, { css } from 'styled-components'

const BoxWrap = styled.article`
  float: left;
  background-color: ${(props) => props.bg || " gray"}; 

  width: 20%;
  height: 260px;
  transition: 0.5s;
  animation: scale 1s 1;

  @keyframes scale {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }

  > div {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    cursor: pointer;
    position: relative;

    h1 {
      font: 12vw/1 'Poiret one';
      color: #fff;
      position: absolute;
      bottom: -1.5vw;
      right: 0;
    }

    ${(props) => props.type === "bg" && css`
      background-image: url(${(props) => props.bg});
      background-size: cover;
      background-position: center;
      
      span{
        font-size: 60px;
        color: white;
        position: absolute;
        bottom: 0;
        left: 20px;
        transform: scale(10);
        opacity: 0;
        transition: 0.5s;
      }
    `}

    ${(props) => props.type == "txt" && css`
      color: #666666;
      background-color: ${(props) => props.bg || "white"};
      padding: 40px 30px;
      transition: 1s;

      svg {
        font-size: 300px;
        color: #b2effc;
        opacity: 0;
        position: absolute;
        bottom: -70px;
        right: -200px;
        transition: 0.7s;
        z-index: 0;
      }

      strong,
      p {
        font-size: 30px;
        font-weight: normal;
        font-family: 'poiret one';
        line-height: 1.6;
        color: #888;
        margin-bottom: 20px;
        transition: 1s;
        position: relative;
        z-index: 2;
      }

      em {
        font-size: 12px;
        color: #999;
      }
    `}
  }
  &:hover{
    >div{
      ${(props) => props.type === "bg" && css`
        span{
          opacity: 0;
          transform: scale(1);
        }
      `}

      ${(props) => props.type === "txt" && css`
        background-color: #6ce2fb;
        color: white;
        
        svg{
            right: 0;
            opacity: 0.8;
        }
    
        strong, em{
            color: white;
        }
      `}
    }
  }

  &:nth-of-type(1) {
		width: 60%;
		height: 520px;
		background: #ddd;
	}
	&:nth-of-type(2) {
		width: 40%;
		background: #ccc;
	}
	&:nth-of-type(3) {
		width: 20%;
		background: #bbb;

		svg {
			animation: ani linear 3s infinite;
		}

		@keyframes ani {
			0% {
				transform: rotate(0deg);
			}
			100% {
				transform: rotate(360deg);
			}
		}
	}
	&:nth-of-type(4) {
		width: 20%;
		background: #aaa;
	}
	&:nth-of-type(5) {
		width: 20%;
		background: #999;
	}
	&:nth-of-type(6) {
		width: 40%;
		background: #888;
	}
	&:nth-of-type(7) {
		width: 20%;
		background: #777;
	}
	&:nth-of-type(8) {
		width: 20%;
		background: #666;
	}
	&:nth-of-type(9) {
		width: 40%;
		background: #555;
	}
	&:nth-of-type(10) {
		width: 20%;
		background: #444;
	}
	&:nth-of-type(11) {
		width: 20%;
		background: #333;
	}
	&:nth-of-type(12) {
		width: 20%;
		background: #222;
	}
`;

function Box({childern, ...props}) {
  return <BoxWrap {...props}>{childern}</BoxWrap>
}

export default Box