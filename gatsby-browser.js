const { createGlobalStyle } = require("styled-components")
const React = require("react")
const Style = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    html{
        font-size: 62.5%;
        font-family: Helvetica neue;
        font-weight: 400;
        @media screen and (max-width: 800px) {
          font-size: 50%;
        }
        @media screen and (min-width: 1350px){
          font-size: 70%;
        }
    }
    :root{
        --ColorPrimary: #ef230c;
        --ColorPrimaryFaded: #Fd655D;
        --ColorDarkLight: #3d4147;
        --ColorDark: #23262B;
        --ColorGray: #E0E0E0;
    }


`
/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
exports.wrapPageElement = ({ element }) => {
  return (
    <>
      <Style />
      {element}
    </>
  )
}
