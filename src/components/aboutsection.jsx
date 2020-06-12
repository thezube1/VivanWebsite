import React, { Component } from "react";
import { motion } from "framer-motion";

class AboutSection extends Component {
  state = {};
  render() {
    return (
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gridTemplateRows: "100px 80px 1fr",
          gridTemplateAreas: `"." "desc" "main1"`,
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
          <motion.div
            style={{
              fontSize: 30,
              fontFamily: "Unna",
              fontStyle: "italic",
              fontWeight: "bold",
              position: "relative",
              left: "150%",
            }}
          >
            About
          </motion.div>
        </div>
        <div
          style={{
            display: "grid",
            gridAutoColumns: "inherit",
            gridArea: "main1",
            fontFamily: "Roboto, sans-serif",
            fontWeight: 100,
            lineHeight: 1.36,
          }}
        >
          My name is Vivan Marwaha and I am an independent policy consultant
          based in New Delhi, India. <pre />I have spent the last two years
          interviewing more than 800 millennials, educators, business leaders,
          and policymakers for my book on the economic aspirations, social
          views, and political attitudes of Indian millennials. <pre />
          Through my extensive field research, which included traveling across
          more than 30,000 kilometers in 13 Indian states, I narrate an intimate
          and data-driven biography of India’s most dynamic generation. I have
          contributed op-eds to The Washington Post, The Times of India, Mint,
          Firstpost, and The Print. <pre />I truly believe that young people in
          India have been left out of the political and social discourse, and I
          hope to change and challenge that with my writing and research. My
          book will be published in May 2020 by Penguin Random House.
        </div>
      </div>
    );
  }
}

export default AboutSection;
