import React, { Component } from "react";
import NavComplete from "../components/navcomplete";
import "../styles/book-page.css";

class BookPage extends Component {
  state = {};
  render() {
    return (
      <div>
        <NavComplete />
        <div id="book-wrapper">
          <div id="book-content">
            <div id="book-title-wrapper">
              <div className="text" id="book-title">
                <div id="book-title-content">
                  <div>WHAT</div> <div id="book-title-black">Millenials</div>{" "}
                  <div>WANT</div>
                </div>
              </div>
              <img id="book-image" alt="book cover" src="/book.png" />
            </div>
          </div>
        </div>
        <div className="book-section">
          <div id="book-synopsis-wrapper">
            <div className="text" id="book-synopsis">
              <div>
                India is one of the youngest countries in the world and the
                generation of millennials make up for over 400 million people.
                This is the largest generation of people in the world. That
                means that the choices and trajectory of this generation have
                pivotal consequences on local, regional, and global politics and
                economics. So the important question is: What do Indian
                millennials want? What are their economic aspirations and their
                social views? Most importantly, what makes them tick? It's 2021
                and more than 84% of them reported having an arranged marriage,
                and 65% listed a government job as their top priority. So are
                millennials really any different from previous generations?
              </div>
              <br />
              <div>
                In What Millennials Want, Vivan Marwaha documents the
                aspirations and anxieties of these young people scattered across
                more than 30,000 kilometers in 13 Indian states. Combining an
                expansive dataset along with personal anecdotes, he narrates an
                intimate biography of India's millennials, investigating their
                attitudes towards sex, marriage, employment, religion, and
                politics.
              </div>
              <br />
            </div>

            <div className="seperator"></div>

            <a
              href="https://www.amazon.in/dp/0670092851"
              rel="noopener noreferrer"
              target="_blank"
              className="book-button book-button-primary"
            >
              Buy on Amazon
            </a>
            <a
              href="https://penguin.co.in/book/what-millennials-want/"
              rel="noopener noreferrer"
              target="_blank"
              className="book-button book-button-secondary"
            >
              View on Penguin
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default BookPage;
