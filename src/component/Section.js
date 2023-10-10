import React from 'react'
import Box from './Box';
import styled, { ThemeProvider} from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faRotate } from '@fortawesome/free-solid-svg-icons';

const path = process.env.PUBLIC_URL;
const bgs = [
  path + "/img/pic1.jpg",
  path + "/img/pic2.jpg",
  path + "/img/pic3.jpg",
  path + "/img/pic4.jpg",
  path + "/img/pic5.jpg",
  path + "/img/pic6.jpg",
  path + "/img/pic7.jpg"
]
const SectionWrap = styled.section`
  width: 85%;
  position: relative;
  margin-left: 15%;
`
function Section() {
  return (
    <SectionWrap>
      <Box type={"bg"} bg={bgs[0]}>
        <div>
          <h1>mododkw</h1>
        </div>
      </Box>
      <Box>
        <div>
          <FontAwesomeIcon icon={faArrowRight}/>
          <p>
            <strong>djdodowjdjwodjd</strong>
            <em>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores et soluta beatae veritatis necessitatibus minus suscipit iste repellendus libero, itaque quod quae recusandae optio corporis ipsum iure, voluptates sed quia!</em>
          </p>
        </div>
      </Box>
      <Box></Box>
      <Box></Box>
      <Box></Box>
      <Box></Box>
      <Box></Box>
      <Box></Box>
      <Box></Box>
      <Box></Box>
      <Box></Box>
      <Box></Box>
    </SectionWrap>
  )
}

export default Section