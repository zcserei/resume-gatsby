import React, { Component } from 'react'
import { ThemeProvider } from 'emotion-theming'
import { injectGlobal } from 'react-emotion'

import theme from '../utils/theme'

import 'normalize.css'

injectGlobal`
  html {
    height: 100% !important;
    box-sizing: border-box !important;
    font-size: 16px !important;
    background-color: ${theme.colors.red_ribbon} !important;
  }

  *, *:before, *:after {
    box-sizing: inherit !important;
  }

  body {
    margin: 0 !important;
    padding: 0 !important;
    
  }

  @media (min-width: 737px) {
    body {
      border-left: .5rem solid ${theme.colors.red_ribbon};
      border-right: .5rem solid ${theme.colors.red_ribbon};
    }
  
    body:before, body:after {
      content: '';
      position: fixed;
      background: ${theme.colors.red_ribbon};
      left: 0;
      right: 0;
      height: .5rem;
    }
  
    body:before {
      top: 0;
    }
  
    body:after {
      bottom: 0;
    }
  }

  @media (min-width: 769px) {
    body {
      border-left-width: 1rem;
      border-right-width: 1rem;
    }

    body:before, body:after {
      height: 1rem;
    }
  }
`

class TemplateWrapper extends Component {
  render () {
    return (
      <ThemeProvider theme={theme}>
        {this.props.children()}
      </ThemeProvider>
    )
  }
}

export default TemplateWrapper
