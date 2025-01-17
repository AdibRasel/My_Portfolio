import React from 'react'
// import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { contactImg } from "../../assets/index";
// import { RasalHossain } from "../../assets/index";
import RasalHossain from "../../assets/images/RasalHossain.png"
// import RasalHossain from "../../assets/images/bannerImg.png"

import {FaFacebookF, FaTwitter,FaGithub, FaLinkedinIn, FaReact, FaStackOverflow } from "react-icons/fa";
import {SiMongodb, SiNodedotjs, SiExpress} from "react-icons/si";
import { SiTailwindcss, SiFigma, SiNextdotjs } from "react-icons/si";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-100 object-cover rounded-lg mb-2"
        src={RasalHossain}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Rasel Hossain (Adib)</h3>
        <p className="text-lg font-normal text-gray-400">
        a Professional Programer.|
        </p>
        <p className="text-base text-gray-400 tracking-wide">
        I'm Rasel Hossain (Adib), a Professional Programmer and Full Stack Developer specializing in MERN Stack. I excel in HTML, CSS, Bootstrap, JavaScript, React.js, Node.js, Express.js, MongoDB, WordPress, and more. I'm also experienced in Android and Apple app development, as well as RESTful API design. Feel free to reach out for assistance. Let's collaborate!
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">01934544352</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">adibrasel.com@gmail.com, adibrasel.2022@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
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
    </div>
  );
}

export default ContactLeft