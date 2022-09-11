import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Intro from "../components/intro"

const IndexPage = () => (
  <>
    {}
    <div className="container-lg vh-100 d-flex justify-content-center align-items-center position-absolute appear-disappear">
      <h1>Hi, I'm Van!</h1>
    </div>
    <main className="appear">
      <nav class="navbar navbar-expand-md navbar-light display-6">
        <div class="container-xxl">
          <a href="#intro" class="nav-link nav-item">
            van
          </a>

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#main-nav"
            aria-controls="main-nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div
            class="collapse navbar-collapse justify-content-end align-center"
            id="main-nav"
          >
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Illustrations
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Animations
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
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
