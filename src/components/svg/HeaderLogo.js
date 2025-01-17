import React, { Component } from 'react'
import styled from 'styled-components'
import Icon from '-!svg-react-loader?name=GelLogo!../../img/gel-logo-word.svg'

const HeaderLogoContainer = styled.div`
  max-width: 150px;

  .gel-header-logo {
    width: 150px;
    transition: 300ms;
  }

  .gel-header-logo:hover {
    animation: gelHeaderLogo;
    animation-duration: 1s;
    animation-fill-mode: forwards;
    position: relative;
  }

  .gel-header-logo:hover #Grey_-fixed_-_heavy path,
  .gel-header-logo:hover #Grey_-fixed_-_heavy polygon {
    animation: gelHoverColors;
    animation-duration: 1s;
    animation-fill-mode: forwards;
  }

  @media(max-width: 460px) {
    .gel-header-logo {
      width: 100px;
    }
  }

  @media (max-width: 768px) {
    .gel-header-logo {
      animation: gelHeaderLogo;
      animation-duration: 1s;
      position: relative;
    }

    .gel-header-logo #Grey_-fixed_-_heavy path,
    .gel-header-logo #Grey_-fixed_-_heavy polygon {
      animation: gelHoverColors;
      animation-duration: 1s;
    }
  }
`
export default class HeaderLogo extends Component {
  render() {
    return (
      <HeaderLogoContainer className="gel-word-logo">
        <Icon className="gel-header-logo" />
      </HeaderLogoContainer>
    )
  }
}