import React from "react";

export default function Achievements() {
  return (
    <section className="portfolio" id="achvm" style={{background: "azure"}}>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-title">
              <h2>Achievements</h2>
            </div>
          </div>
        </div>

        <div className="row portfolio-boxes">
          <div className="col-md-4 col-sm-6 col-xs-12 portfolio-box designing">
            <div className="single-portfolio">
              <img
                src="/certification/c1.png"
                className="img-fluid Portfolio Image"
                alt="WEB DESIGNING"
              />
              <div
                className="single-portfolio-overlay"
                style={{backgroundColor: "#FFFFFF", boxShadow: "none"}}
              >
                <h2 className="h5 text-center">Front-end Web Designing</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
