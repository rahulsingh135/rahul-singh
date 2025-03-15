import React from "react";

export default function Portfolio() {
  return (
    <section className="portfolio" id="portfolio">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-title">
              <h2>Portfolio</h2>
            </div>
          </div>
        </div>

        <div className="row portfolio-boxes">
          <div className="col-md-4 col-sm-6 col-xs-12 portfolio-box designing">
            <div className="single-portfolio">
              <img
                src="/portfolio/p1.png"
                className="img-fluid Portfolio Image"
                alt="Portfolio-1"
              />
              <div className="single-portfolio-overlay">
                <h2 className="h6">ShopCart</h2>
                <h3 className="h5">eCommerce Web APP</h3>
                <a
                  href="https://github.com/rahulsingh135/ShopCart"
                  target="_blank"
                  title="Click to open Link"
                  className="btn btn-link"
                  style={{outline: "none"}}
                >
                  GitHub Repo&nbsp;
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    fill="currentColor"
                    className="bi bi-box-arrow-up-right"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"
                    />
                    <path
                      fillRule="evenodd"
                      d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-sm-6 col-xs-12 portfolio-box designing">
            <div className="single-portfolio">
              <img
                src="/portfolio/p2.png"
                className="img-fluid Portfolio Image"
                alt="Portfolio-2"
              />
              <div className="single-portfolio-overlay">
                <h2 className="h6">Rahul Singh</h2>
                <h3 className="h5">Portfolio Web APP</h3>
                <a
                  href="https://github.com/rahulsingh135/ShopCart"
                  target="_blank"
                  title="Click to open Link"
                  className="btn btn-link"
	
                >
                  GitHub Repo&nbsp;
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    fill="currentColor"
                    className="bi bi-box-arrow-up-right"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"
                    />
                    <path
                      fillRule="evenodd"
                      d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-sm-6 col-xs-12 portfolio-box designing">
            <div className="single-portfolio">
              <img
                src="/portfolio/p3.png"
                className="img-fluid Portfolio Image"
                alt="Portfolio-3"
              />
              <div className="single-portfolio-overlay">
                <h2 className="h6">AKM Fitness</h2>
                <h3 className="h5">Fitness Web APP</h3>
                <a
                  href="https://github.com/rahulsingh135/ShopCart"
                  target="_blank"
                  title="Click to open Link"
                  className="btn btn-link"
					style={{outline: "none"}}
                >
                  GitHub Repo&nbsp;
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    fill="currentColor"
                    className="bi bi-box-arrow-up-right"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"
                    />
                    <path
                      fillRule="evenodd"
                      d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
