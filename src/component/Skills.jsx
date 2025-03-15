import React from "react";

export default function Skills() {
  return (
    <section className="services" id="services">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-title">
              <h2>My Skills</h2>
            </div>
          </div>
        </div>

        <div className="row">
          {/* <div className="col-4 col-sm-6 col-md-3 col-lg-2" data-aos="fade-up"> */}
          <div className="col-6 col-sm-6 col-md-3 col-lg-2" data-aos="fade-up">
            <div
              className="service-single wow fadeInUp shadow bg-light"
              data-wow-delay="0.3s"
              style={{
                  position : "relative",
                  left : "20%",
                  transform : "translateX(-20%)"
              }}
            >
              <div className="icon-box">
                <img
                  src="/skills/html.png"
                  className="img-fluid"
                  style={{
                    position : "relative",
                    left : "20%",
                    transform : "translateX(-20%)"
                  }}
                  alt="HTML"
                />
                <h3 className="text-center badge-light">HTML</h3>
              </div>
            </div>
          </div>

          <div className="col-6 col-sm-6 col-md-3 col-lg-2" data-aos="fade-up">
            <div
              className="service-single wow fadeInUp shadow bg-light"
              data-wow-delay="0.3s"
              style={{
                  position : "relative",
                  left : "20%",
                  transform : "translateX(-20%)"
              }}
            >
              <div className="icon-box">
                <img
                  src="/skills/css.png"
                  className="img-fluid"
                  style={{
                    position : "relative",
                    left : "20%",
                    transform : "translateX(-20%)"
                  }}
                  alt="CSS"
                />
                <h3 className="text-center badge-light">CSS</h3>
              </div>
            </div>
          </div>

          <div className="col-6 col-sm-6 col-md-3 col-lg-2" data-aos="fade-up">
            <div
              className="service-single wow fadeInUp shadow bg-light"
              data-wow-delay="0.3s"
              style={{
                  position : "relative",
                  left : "20%",
                  transform : "translateX(-20%)"
              }}
            >
              <div className="icon-box">
                <img
                  src="/skills/js.png"
                  className="img-fluid"
                  style={{
                    position : "relative",
                    left : "20%",
                    transform : "translateX(-20%)"
                  }}
                  alt="JavaScript"
                />
                <h3 className="text-center badge-light">JavaScript</h3>
              </div>
            </div>
          </div>

          <div className="col-6 col-sm-6 col-md-3 col-lg-2" data-aos="fade-up">
            <div
              className="service-single wow fadeInUp shadow bg-light"
              data-wow-delay="0.3s"
              style={{
                  position : "relative",
                  left : "20%",
                  transform : "translateX(-20%)"
              }}
            >
              <div className="icon-box">
                <img
                  src="/skills/java.png"
                  className="img-fluid"
                  style={{
                    position : "relative",
                    left : "20%",
                    transform : "translateX(-20%)"
                  }}
                  alt="JAVA"
                />
                <h3 className="text-center badge-light">JAVA</h3>
              </div>
            </div>
          </div>

          <div className="col-6 col-sm-6 col-md-3 col-lg-2" data-aos="fade-up">
            <div
              className="service-single wow fadeInUp shadow bg-light"
              data-wow-delay="0.3s"
              style={{
                  position : "relative",
                  left : "20%",
                  transform : "translateX(-20%)"
              }}
            >
              <div className="icon-box">
                <img
                  src="/skills/mysql.png"
                  className="img-fluid"
                  style={{
                    position : "relative",
                    left : "20%",
                    transform : "translateX(-20%)"
                  }}
                  alt="MySQL"
                />
                <h3 className="text-center badge-light">MySQL</h3>
              </div>
            </div>
          </div>

          <div className="col-6 col-sm-6 col-md-3 col-lg-2" data-aos="fade-up">
            <div
              className="service-single wow fadeInUp shadow bg-light"
              data-wow-delay="0.3s"
              style={{
                  position : "relative",
                  left : "20%",
                  transform : "translateX(-20%)"
              }}
            >
              <div className="icon-box">
                <img
                  src="/skills/reactjs.svg"
                  className="img-fluid"
                  style={{
                    position : "relative",
                    left : "20%",
                    transform : "translateX(-20%)"
                  }}
                  alt="React JS"
                />
                <h3 className="text-center badge-light">React JS</h3>
              </div>
            </div>
          </div>

          <div className="col-6 col-sm-6 col-md-3 col-lg-2" data-aos="fade-up">
            <div
              className="service-single wow fadeInUp shadow bg-light"
              data-wow-delay="0.3s"
              style={{
                  position : "relative",
                  left : "20%",
                  transform : "translateX(-20%)"
              }}
            >
              <div className="icon-box">
                <img
                  src="/skills/express-js.png"
                  className="img-fluid"
                  style={{
                    position : "relative",
                    left : "20%",
                    transform : "translateX(-20%)"
                  }}
                  alt="Express JS"
                />
                <h3 className="text-center badge-light">Express JS</h3>
              </div>
            </div>
          </div>

          <div className="col-6 col-sm-6 col-md-3 col-lg-2" data-aos="fade-up">
            <div
              className="service-single wow fadeInUp shadow bg-light"
              data-wow-delay="0.3s"
              style={{
                  position : "relative",
                  left : "20%",
                  transform : "translateX(-20%)"
              }}
            >
              <div className="icon-box">
                <img
                  src="/skills/nodejs.png"
                  className="img-fluid"
                  style={{
                    position : "relative",
                    left : "20%",
                    transform : "translateX(-20%)"
                  }}
                  alt="Node JS"
                />
                <h3 className="text-center badge-light">Node JS</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
