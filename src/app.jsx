import React, { Component } from "react";
import Stickynav from "../components/Stickynav";

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="arc-media-kit">
        <Stickynav
          title={"Media Kit"}
          links={[{ title: "Frequently Requested Assets", url: "#assets" }]}
          rightLink="mailto:rspoon@arccorp.com"
          contactUs="Submit a Media Request"
        />
        <div className="arc-media-kit-jumbo">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="arc-media-kit-jumbo-inner">
                  <h1>Air Travel Insight for the Media</h1>
                  <p className="arc-media-kit-subtitle">
                    ARC is a premier source of air travel data and insight
                    through its comprehensive global dataset spanning 9.8
                    billion passenger trips, 50,000+ travel agencies and 450+
                    airlines. This data is sourced from ARC’s role facilitating
                    and settling air ticket transactions between travel agencies
                    and airlines. In addition to analysis on destination and
                    purchasing trends, our experts can speak to the issues and
                    opportunities within air travel distribution, payments and
                    financial solutions.
                  </p>
                  <a
                    href="https://www2.arccorp.com/about-us/newsroom"
                    className="ctaBtn"
                  >
                    Visit Our Newsroom
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2>Interested in Speaking to ARC for a Story?</h2>
              <p className="mb-0 py-2" style={{ fontSize: "18px" }}>
                If you need timely data or expert analysis on air travel, we're
                here to help.
              </p>
              <a href="mailto:rspoon@arccorp.com" className="ctaBtn">
                Email Us
              </a>
            </div>
          </div>
        </div>
        <div id="assets" className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2 style={{ paddingTop: "60px", paddingBottom: "30px" }}>
                Frequently Requested Assets
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <a
                href="https://www2.arccorp.com/globalassets/styleguide/arc-logo-suite.zip"
                className="arc-media-kit-link"
              >
                <div>Logos</div>{" "}
                <img
                  src="https://www2.arccorp.com/globalassets/about-us/newsroom/media-kit/file_download---material.png?1"
                  className="arc-media-kit-icon"
                />
              </a>
            </div>
            <div className="col-lg-6">
              <a
                href="https://www2.arccorp.com/articles-trends/the-latest/coronavirus"
                className="arc-media-kit-link"
              >
                <div>Weekly Segment Data</div>{" "}
                <img
                  src="https://www2.arccorp.com/globalassets/about-us/newsroom/media-kit/new-page.png?1"
                  className="arc-media-kit-icon"
                />
              </a>
            </div>
            <div className="col-lg-6">
              <a
                href="https://www2.arccorp.com/styleguide/visual-identity#typography"
                className="arc-media-kit-link"
              >
                <div>Typography and Colors</div>{" "}
                <img
                  src="https://www2.arccorp.com/globalassets/about-us/newsroom/media-kit/new-page.png?1"
                  className="arc-media-kit-icon"
                />
              </a>
            </div>
            <div className="col-lg-6">
              <a
                href="https://www2.arccorp.com/articles-trends/sales-statistics/?utm_source=Global_Navigation"
                className="arc-media-kit-link"
              >
                <div>Monthly Sales Data</div>{" "}
                <img
                  src="https://www2.arccorp.com/globalassets/about-us/newsroom/media-kit/new-page.png?1"
                  className="arc-media-kit-icon"
                />
              </a>
            </div>
            <div className="col-lg-6">
              <a
                href="https://www2.arccorp.com/about-us/leadership-governance"
                className="arc-media-kit-link"
              >
                <div>Leadership and Governance</div>{" "}
                <img
                  src="https://www2.arccorp.com/globalassets/about-us/newsroom/media-kit/new-page.png?1"
                  className="arc-media-kit-icon"
                />
              </a>
            </div>
            <div className="col-lg-6">
              <a
                href="https://www2.arccorp.com/globalassets/arcmarks/accreditation-logos.zip"
                className="arc-media-kit-link"
              >
                <div>Accreditation Logos</div>{" "}
                <img
                  src="https://www2.arccorp.com/globalassets/about-us/newsroom/media-kit/file_download---material.png?1"
                  className="arc-media-kit-icon"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
