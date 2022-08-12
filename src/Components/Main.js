// import * as ReactDOM from "react-dom";
import React from "react";
import { quotes, colorArray } from "./quote.js";

let RCNumber = Math.floor(Math.random() * colorArray.length);
let RQNumber = Math.floor(Math.random() * quotes.length);

class QuotePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: quotes[RQNumber].quote,
      author: quotes[RQNumber].author,
      Color: colorArray[RCNumber],
    };

    this.clickHanlde = this.clickHanlde.bind(this);
  }

  clickHanlde() {
    let RCNumber = Math.floor(Math.random() * colorArray.length);
    let RQNumber = Math.floor(Math.random() * quotes.length);
    this.setState({
      Color: colorArray[RCNumber],
      author: quotes[RQNumber].author,
      text: quotes[RQNumber].quote,
    });
  }

  render() {
    let twitterPath = encodeURI(
      `https://www.twitter.com/intent/tweet?text= ${this.state.text} - ${this.state.author}`
    );
    return (
      <div>
        <div
          className="main-box "
          style={{ backgroundColor: this.state.Color }}
        >
          <div id="quote-box" style={{ color: this.state.Color }}>
            <p id="text">"{this.state.text}"</p>
            <div id="author">- {this.state.author} </div>
            <div className="links">
              <a
                href={twitterPath}
                id="tweet-quote"
                target="_blank"
                rel="noreferrer"
                style={{ backgroundColor: this.state.Color, borderColor:this.state.Color}}>
                <i class="fa-brands fa-twitter icon" ></i>
              </a>
              <button
                id="new-quote"
                onClick={this.clickHanlde}
                style={{ backgroundColor: this.state.Color, color: "white" }}
              >
                New Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default QuotePage;
