import * as React from "react"

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}
const headingAccentStyles = {
  color: "#663399",
}

const AboutPage = () => {
  return (
    <main style={pageStyles}>
      <title>About page</title>
      <h1 style={headingStyles}>
        Congratzzzz
        <span style={headingAccentStyles}>— you just created a About page! </span>
        <span role="img" aria-label="Party popper emojis">🎉🎉🎉</span>
      </h1>
    </main>
  )
}

export default AboutPage
