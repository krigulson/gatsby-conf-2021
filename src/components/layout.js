import React from 'react'
import { Link } from 'gatsby'
import Links from './links'
import SignInModal from './SignInModal'

const Layout = ({ pageTitle, children }) => {
  return (
    <main className={"page-wrapper"}>
      <title>{pageTitle}</title>
      <SignInModal />
      <header className={"header navbar navbar-expand-lg navbar-light navbar-floating navbar-sticky"}>
          <div className={"container px-0 px-xl-3"}>
            <a className={"navbar-brand flex-shrink-0 order-lg-1 mx-auto ms-lg-0 pe-lg-2 me-lg-4"}>
                AADU
            </a>

            <div className="offcanvas offcanvas-collapse oreder-lg-2">
                <div className="offcanvas-cap navbar-shadow"></div>
                <div className="offcanvas-body">
                    <ul className="navbar-nav">            
                        {Links.map(link => (
                            <li className="nav-item" key={link.url}>
                                <Link to={link.url} className="nav-link">
                                    {link.text}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
          </div>
      </header>
      <section className="position-relative bg-faded-primary pt-7 pb-5 pb-md-6 pb-lg-7 overflow-hidden">
        <div className="container pt-4 pt-md-5 pt-lg-0">
            <h1>{pageTitle}</h1>
            {children}
        </div>
      </section>
    </main>
  )
}

export default Layout
