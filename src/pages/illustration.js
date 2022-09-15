import React, { useState } from "react"
import { Link } from "gatsby"

import Seo from "../components/seo"
import i1 from "../images/i-1.png"
import i2 from "../images/i-2.png"
import i3 from "../images/i-3.png"

const IllustrationPage = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const [modalImage, setModalImage] = useState(null)

  const toggleModal = (image = null) => {
    if (modalOpen) {
      setModalOpen(false)
      return
    }
    setModalImage(image)
    setModalOpen(true)
  }

  const blurStyles = {
    webkitFilter: "blur(1px)",
    mozFilter: "blur(1px)",
    oFilter: "blur(1px)",
    msFilter: "blur(1px)",
    filter: "blur(1px)",
  }

  return (
    <>
      {modalOpen && (
        <div className="container-fluid position-fixed vh-100 preview-modal">
          <div className="d-flex flex-column container-xxl justify-content-center align-items-center w-100 h-100">
            <img src={modalImage} className="preview appear-1" />
            <button className="btn btn-dark w-25" onClick={toggleModal}>
              Back
            </button>
          </div>
        </div>
      )}
      <main className="appear" style={modalOpen ? blurStyles : {}}>
        <nav className="navbar navbar-expand-md navbar-light display-6">
          <div className="container-xxl d-flex align-items-baseline p-4">
            <Link href="/" className="nav-link nav-item fw-bold">
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
              className="collapse navbar-collapse justify-content-end align-center"
              id="main-nav"
            >
              <ul className="navbar-nav">
                <li className="nav-item border-end">
                  <a
                    className="nav-link fw-bold text-decoration-underline"
                    href="illustration"
                  >
                    Illustration
                  </a>
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
        <div className="container-xxl p-4 ">
          <div className="row justify-content-between">
            <div className="col-sm-4 col-xxl-6">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Title</h4>
                  <p className="lead card-subtitle">Subtitle</p>
                </div>
                <img
                  className="card-img-bottom thumbnail"
                  src={i1}
                  onClick={() => toggleModal(i1)}
                />
              </div>
            </div>
            <div className="col-sm-4 col-lg-3">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Title</h4>
                  <p className="lead card-subtitle">Subtitle</p>
                </div>
                <img
                  className="card-img-bottom thumbnail"
                  src={i2}
                  onClick={() => toggleModal(i2)}
                />
              </div>
            </div>
            <div className="col-sm-4 col-lg-3">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Title</h4>
                  <p className="lead card-subtitle">Subtitle</p>
                </div>
                <img
                  className="card-img-bottom thumbnail"
                  src={i3}
                  onClick={() => toggleModal(i3)}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export const Head = () => (
  <Seo title="Illustration">
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;600;700&display=swap"
      rel="stylesheet"
    />
  </Seo>
)

export default IllustrationPage
