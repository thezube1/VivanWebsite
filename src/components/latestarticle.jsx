import React, { Component } from "react";
import { motion } from "framer-motion";

const LatestArticle = () => {
  return (
    <div
      id="latestArticle"
      style={{
        display: "grid",
        gridTemplateColumns: "1fr",
        gridTemplateRows: "1fr 140px 1fr",
        gridTemplateAreas: `"." "desc" "latestTopic"`,
      }}
    >
      <div
        style={{
          height: 20,
          width: 20,
          backgroundColor: "black",
          display: "flex",
          alignItems: "center",
          gridArea: "desc",
        }}
      >
        <div
          style={{
            fontSize: 30,
            fontFamily: "Unna",
            fontStyle: "italic",
            fontWeight: "bold",
            position: "relative",
            left: "150%",
          }}
        >
          latest
        </div>
      </div>
      <a
        href="https://www.livemint.com/news/india/hope-and-anxiety-among-liberalization-s-children-11577803916064.html"
        target="_blank"
        style={{
          textDecoration: "none",
          gridArea: "latestTopic",
          color: "black",
        }}
      >
        <motion.span
          style={{
            fontFamily: "Unna",
            fontWeight: "bold",
            fontSize: 18,
            position: "relative",
            bottom: 40,
          }}
          whileHover={{
            backgroundImage:
              "linear-gradient(to right, rgba(252, 186, 3, .65) 100%, white 0%)",
          }}
          transition={{ duration: 0.5 }}
        >
          The secret behind <br /> millennial support
          <br />
          for India's Modi
        </motion.span>
        <div
          style={{
            display: "grid",
            gridAutoColumns: "470px",
            gridColumn: "main1",
            fontFamily: "Roboto, sans-serif",
            fontWeight: 100,
            lineHeight: 1.36,
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
          explicabo quisquam architecto minima, necessitatibus dolores odit quod
          modi excepturi ducimus suscipit, ullam eaque sunt. Perspiciatis
          laborum explicabo officia vel laudantium reiciendis dolore, doloribus,
          dignissimos vero possimus saepe veniam facilis odit. Voluptatem, eius
          laborum ea amet dolore voluptatum fuga corrupti error.
        </div>
      </a>
    </div>
  );
};

export default LatestArticle;
