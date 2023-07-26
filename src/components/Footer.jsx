import React from "react";
import { FaInstagram } from "react-icons/fa";
import {
  AiFillGithub,
  AiFillSmile,
  AiFillLinkedin,
  AiOutlineArrowUp,
} from "react-icons/ai";

import ContentWrapper from "./contentWrapper/ContentWrapper";

import "./footer.scss";
import footerImg from "../assets/millenious-logo.png"
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div>
        <img
          src={footerImg}
          alt="Logo"
        />
        <p>
          Experience the magic of cinema like never before with our Millenious
          movie app! Bringing you the latest blockbusters, timeless classics,
          and hidden gems, all at your fingertips. Discover a world of cinematic
          wonders, browse showtimes, watch trailers
          seamlessly.Lights, camera, action - let the movie
          adventure begin! 🎬🍿 #mileniousEkMoviekath #CinematicMagic
        </p>
        <p>
          Lights, camera, action - let the movie
          adventure begin! 🎬🍿 #mileniousEkMoviekath #CinematicMagic
        </p>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
          <a
            href="https://www.linkedin.com/in/nayak-soumya-ranjan"
            target={"blank"}
          >
            <AiFillLinkedin />
          </a>
          <a
            href="https://www.instagram.com/soumya_nayak.raju"
            target={"blank"}
          >
            <FaInstagram />
          </a>
          <a href="https://github.com/SoumyaNayak2000" target={"blank"}>
            <AiFillGithub />
          </a>
          <a href="https://soumya-nayak-portfolio-react.netlify.app" target={"blank"}>
            <AiFillSmile />
          </a>
        </article>
      </aside>
      <Link to={"/"}>
        <AiOutlineArrowUp />
      </Link>
    </footer>
  );
};

export default Footer;
