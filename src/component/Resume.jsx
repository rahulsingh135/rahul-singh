import React from "react";

export default function Resume() {
  return (
    <section className="my-resume" id="resume">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-title">
              <h2>My Resume</h2>
            </div>
          </div>
        </div>

        <div className="row mb-5 pb-5">
          <iframe
            id="resumeFrame"
            src="/doc/Rahul_Singh.pdf"
            allowFullScreen
            title="Resume of Rahul Singh"
            width="100%"
            height="80vh"
          ></iframe>
          <p className="text-center mt-3 d-md-none">
            If the resume does not load,{" "}
            <a href="/doc/Rahul_Singh.pdf" target="_blank">
              click here
            </a>{" "}
            to view or download.
          </p>
        </div>
      </div>
    </section>
  );
}
