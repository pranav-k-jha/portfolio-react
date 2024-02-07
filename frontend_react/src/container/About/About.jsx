import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { images } from "../../constants";

import "./About.scss";

const About = () => {
  const abouts = [
    {
      title: "Fullstack Development",
      description: "Proficient in Fullstack web development.",
      imgUrl: images.about01,
    },
    {
      title: "Frontend Development",
      description: "Passionate about crafting engaging frontend experiences.",
      imgUrl: images.about02,
    },
    {
      title: "Backend Development",
      description:
        "Enjoys tackling intricate challenges in backend development.",
      imgUrl: images.about03,
    },
    {
      title: "MERN Stack",
      description:
        "Experienced in building applications using the MERN (MongoDB, Express.js, React, Node.js) stack.",
      imgUrl: images.about04,
    },
  ];
  return (
    <>
      <h2 className="head-text">
        I know that <span>Good Development</span><br />
        means <span>Good Business</span>
      </h2>
      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profiles-item"
            key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default About;
