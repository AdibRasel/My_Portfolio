import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import {FaFacebookF, FaTwitter,FaGithub, FaLinkedinIn, FaReact, FaStackOverflow } from "react-icons/fa";
import {SiMongodb, SiNodedotjs, SiExpress} from "react-icons/si";
import { SiTailwindcss, SiFigma, SiNextdotjs } from "react-icons/si";

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["Professional Programer.",
    "MERN Stack Developer.",
    "REST/RESTful APIs Developer.",
    "Android App Developer.",
    "Apple App Developer.",
    "Full Stack Developer."],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 10,
      delaySpeed: 2000,
    });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor Top_Title_Color capitalize">Rasel Hossain (Adib)</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
        I'm Rasel Hossain (Adib), a Professional Programmer and Full Stack Developer specializing in MERN Stack. I excel in HTML, CSS, Bootstrap, JavaScript, React.js, Node.js, Express.js, MongoDB, WordPress, and more. I'm also experienced in Android and Apple app development, as well as RESTful API design. Feel free to reach out for assistance. Let's collaborate!
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
              <a href="https://www.facebook.com/RaselHossainAdib" target="_blank">
                <span className="bannerIcon">
                    <FaFacebookF />
                </span>
              </a>
              <a href="https://github.com/AdibRasel" target="_blank">
                <span className="bannerIcon">
                    <FaGithub />
                </span>
              </a>
              <a href="https://stackoverflow.com/users/18261117/rasel-hossain-adib" target="_blank">
                <span className="bannerIcon">
                  <FaStackOverflow />
                </span>
              </a>

              <a href="https://www.linkedin.com/in/raselhossainadib/" target="_blank">
                <span className="bannerIcon">
                  <FaLinkedinIn />
                </span>
              </a>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <SiMongodb />
            </span>
            <span className="bannerIcon">
              <SiExpress />
            </span>
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <SiNodedotjs  />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftBanner