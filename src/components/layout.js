import React from 'react'
import { Link } from 'gatsby'
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText
} from './layout.module.css'

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
  const paragraphStyles = {
    marginBottom: 48,
  }
  const codeStyles = {
    color: "#8A6534",
    padding: 4,
    backgroundColor: "#FFF4DB",
    fontSize: "1.25rem",
    borderRadius: 4,
  }
  const listStyles = {
    marginBottom: 96,
    paddingLeft: 0,
  }
  const listItemStyles = {
    fontWeight: 300,
    fontSize: 24,
    maxWidth: 560,
    marginBottom: 30,
  }
  
  const linkStyle = {
    color: "#8954A8",
    fontWeight: "bold",
    fontSize: 16,
    verticalAlign: "5%",
  }
  
  const docLinkStyle = {
    ...linkStyle,
    listStyleType: "none",
    marginBottom: 24,
  }
  
  const descriptionStyle = {
    color: "#232129",
    fontSize: 14,
    marginTop: 10,
    marginBottom: 0,
    lineHeight: 1.25,
  }
  
  const docLink = {
    text: "Documentation",
    url: "https://www.gatsbyjs.com/docs/",
    color: "#8954A8",
  }
  
  const badgeStyle = {
    color: "#fff",
    backgroundColor: "#088413",
    border: "1px solid #088413",
    fontSize: 11,
    fontWeight: "bold",
    letterSpacing: 1,
    borderRadius: 4,
    padding: "4px 6px",
    display: "inline-block",
    position: "relative",
    top: -2,
    marginLeft: 10,
    lineHeight: 1,
  }
const links = [
    {
      text: "Index",
      url: "/",
      description: "Just created about page",
      color: "#E95800",
    },
    {
      text: "About",
      url: "/about",
      description: "Just created about page",
      color: "#E95800",
    },
  ]

const Layout = ({ pageTitle, children }) => {
  return (
    <main className={container}>
      <title>{pageTitle}</title>
      <nav>
        <ul className={navLinks}>
            {links.map(link => (
                <li key={link.url} style={{ ...listItemStyles, color: link.color }}>
                    <Link to={link.url} style={linkStyle}>
                        {link.text}
                    </Link>
                </li>
            ))}
        </ul>
      </nav>
      <h1 className={heading}>{pageTitle}</h1>
      {children}
    </main>
  )
}

export default Layout