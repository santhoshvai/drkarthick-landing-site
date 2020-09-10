import React from "react";

import Layout from "../../components/Layout";
import SpecialitiesRoll from "../../components/SpecialitiesRoll";

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url('/img/knee_inspection.jpg')`,
            backgroundPosition: "center",
            backgroundAttachment: `fixed`,
          }}
        >
          <h1
            className="has-text-weight-bold is-size-1"
            style={{
              boxShadow: "0.5rem 0 0 #366273, -0.5rem 0 0 #366273",
              backgroundColor: "#366273",
              color: "white",
              padding: "1rem",
            }}
          >
            Skills
          </h1>
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <SpecialitiesRoll />
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
