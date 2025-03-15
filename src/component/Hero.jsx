import React, { useState, useEffect } from "react";

const TypewriterText = ({ words, typingSpeed = 100, pauseTime = 1500 }) => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let timeout;

    if (isDeleting) {
      timeout = setTimeout(() => {
        setText((prev) => prev.slice(0, -1)); // Remove one letter
      }, typingSpeed / 2);
    } else {
      timeout = setTimeout(() => {
        setText((prev) => currentWord.slice(0, prev.length + 1)); // Add one letter
      }, typingSpeed);
    }

    if (!isDeleting && text === currentWord) {
      timeout = setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words, typingSpeed, pauseTime]);

  return <span className="typewriter">{text}</span>;
};

export default function Hero() {
  return (
    <div className="banner" id="home">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-6 order-sm-1 order-0 heroImg">
            <div className="banner-content">
              <img
                src="/images/header-bg.jpg"
                className="img-responsive"
                alt="Rahul"
              />
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-6 order-sm-0 order-1 heroContent">
            <div className="banner-content">
              <h2 className="cd-headline">
                <span className="before-heading">Hi there! I'm... </span>
                <TypewriterText
                  words={["Rahul Singh", "Web Developer", "Software Developer"]}
                  typingSpeed={100}
                  pauseTime={1500}
                />
              </h2>
              <p>
                Building scalable, efficient, and innovative software solutions
                using modern technologies with a user-centric approach.
              </p>

              <a
                href="./doc/Rahul_Singh.pdf"
                className="btn-download"
                download="./doc/Rahul_Singh.pdf"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
