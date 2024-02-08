import React from "react";
import { useState, useEffect } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";

import { AppWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import "./Work.scss";

const Work = () => {
  return (
    <>
      <h2 className="head-text">
        My creative <span>Portfolio </span>Section
      </h2>
      <div className="app__work-filter"></div>
    </>
  );
};

export default Work;
