import React from 'react'
import styled from 'styled-components'

const PageNotice = ({ location }) => {
    return (
    <Wrapper>
      {
      location.map((el,idx) => {
          return (idx !== location.length-1) ? `${el} > ` : el;
      })
      
    }</Wrapper>
  )
}

const Wrapper = styled.div`
    display : flex;
    justify-content : end;
    text-align : end;
    width : 100%;
    color : var(--gray-color);
    font-size : 18px;
    margin-top : 50px;
    margin-bottom : 100px;
    letter-spacing: -0.02em;
    line-height: 26px;
    display: inline-block;
`

export default PageNotice