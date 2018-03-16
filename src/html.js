import React from 'react'

import faviconApple from './favicons/apple-touch-icon.png'
import favicon32 from './favicons/favicon-32x32.png'
import favicon16 from './favicons/favicon-16x16.png'
import safariPinned from './favicons/safari-pinned-tab.svg'
import faviconICO from './favicons/favicon.ico'

let stylesStr
if (process.env.NODE_ENV === `production`) {
  try {
    stylesStr = require(`!raw-loader!../public/styles.css`)
  } catch (e) {
    console.log(e)
  }
}

module.exports = class HTML extends React.Component {
  render () {
    let css
    if (process.env.NODE_ENV === `production`) {
      css = (
        <style
          id='gatsby-inlined-css'
          dangerouslySetInnerHTML={{ __html: stylesStr }}
        />
      )
    }
    return (
      <html {...this.props.htmlAttributes}>
        <head>
          <title>bvs-Tischhauser</title>
          <meta charSet='utf-8' />
          <meta httpEquiv='x-ua-compatible' content='ie=edge' />
          <meta
            name='viewport'
            content='width=device-width, initial-scale=1'
          />
          {this.props.headComponents}
          {css}
          <link rel='apple-touch-icon' sizes='180x180' href={faviconApple} />
          <link rel='icon' type='image/png' sizes='32x32' href={favicon32} />
          <link rel='icon' type='image/png' sizes='16x16' href={favicon16} />
          <link rel='mask-icon' href={safariPinned} color='#a89472' />
          <link rel='shortcut icon' href={faviconICO} />
          <meta name='theme-color' content='#df0d47' />
        </head>
        <body {...this.props.bodyAttributes}>
          {this.props.preBodyComponents}
          <div
            key={`body`}
            id='___gatsby'
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    )
  }
}
