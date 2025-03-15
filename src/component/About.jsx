import React from "react";

export default function About() {
  return (
    <section className="about-us" id="about">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-title">
              <h2>About Me</h2>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-4">
            <div className="about-image wow fadeInLeft" data-wow-delay="0.3s">
              <img src="/images/about.png" alt="ABOUT" />
            </div>
          </div>

          <div className="col-lg-8">
            <div className="about-content wow fadeInUp" data-wow-delay="0.8s">
              <h3 style={{color: "rgb(34, 33, 33)"}}>I'm Rahul Singh</h3>
              <h2>Software Developer</h2>
              <p>
                Hi I'm Rahul Singh, and I am a software developer dedicated to
                creating efficient, scalable, and user-focused solutions. With a
                strong passion for continuous learning, I strive to build
                innovative technologies that have a meaningful impact. My goal
                is to craft solutions that not only meet user needs but also
                drive progress in the ever-evolving tech landscape.
              </p>

              <ul>
                <li>
                  <i className="flaticon-calendar"></i>
                  <b>Date of birth:</b> 29 dec 2002
                </li>
                <li>
                  <i className="flaticon-flag"></i>
                  <b>Nationality:</b> Indian
                </li>
                <li>
                  <i className="flaticon-phone-call"></i>
                  <b>Phone:</b> +91 7880045441
                </li>
                <li>
                  <i className="flaticon-placeholder"></i>
                  <b>Address:</b> Bangalore, India
                </li>
                <li>
                  <i className="flaticon-email"></i>
                  <b>Email:</b> rahulsingh735424@gmail.com
                </li>
                <li>
                  <i className="flaticon-translation"></i>
                  <b>Spoken Langages:</b> English - Hindi
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
