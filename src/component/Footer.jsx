import React from "react";

export default function Footer() {
  return (
    <footer className="main-footer">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="footer-logo">
              <h1>
                <span>Rahul </span> Singh
              </h1>
            </div>

            <div className="footer-social">
              <a
                href="https://www.linkedin.com/in/rahul-singh-a56a04204/"
                target="_blank"
              >
                <i className="fa fa-linkedin"></i>
              </a>
              <a href="https://github.com/rahulsingh135" target="_blank">
                <i className="fa fa-github"></i>
              </a>
            </div>

            <div className="footer-copyright">
              <p>2025 | Rahul Singh</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
