import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Intro from "../components/Intro"

const IndexPage = () => (
  <>
    {}
    <div className="vw-100 vh-100 d-flex justify-content-center align-items-center position-absolute appear-disappear">
      <h1>Hi, I'm Van!</h1>
    </div>
    <main className="appear-delay p-4">
      <nav className="navbar navbar-expand-md navbar-light display-6">
        <div className="container-xxl d-flex align-items-baseline">
          <Link to="/" className="nav-link nav-item fw-bold">
            Van
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#main-nav"
            aria-controls="main-nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="navbar-collapse justify-content-end align-center"
            id="main-nav"
          >
            <ul className="navbar-nav">
              <li className="nav-item border-end">
                <Link className="nav-link" href="/illustration">
                  Illustration
                </Link>
              </li>
              <li className="nav-item border-end">
                <a className="nav-link" href="animation">
                  Animation
                </a>
              </li>
              <li className="nav-item border-end">
                <a className="nav-link" href="life">
                  Life Drawing
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="about">
                  About
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </main>
  </>
)

export const Head = () => (
  <Seo title="Home">
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;600;700&display=swap"
      rel="stylesheet"
    />
  </Seo>
)

export default IndexPage
