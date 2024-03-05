import React from "react";
import { BsTwitter, BsInstagram } from "react-icons/bs";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a href="https://twitter.com/pranav_kjha" style={{ cursor: "pointer" }}>
        <BsTwitter />
        </a>
      </div>
      <div>
      <a href="https://www.linkedin.com/in/pkrjha" style={{ cursor: "pointer" }}>
        <FaLinkedin />
        </a>
      </div>
      <div>
        <a href="https://github.com/pranav-k-jha" style={{ cursor: "pointer" }}>
          <FaGithub />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
