import React from "react";
import Layout from "../../components/Layout";
import SpecialitiesRoll from "../../components/SpecialitiesRoll";
import { useStaticQuery, graphql } from "gatsby";
import HeaderImage from "../../components/HeaderImage";

// used https://jsfiddle.net/oskar/3479gj9e/ to extract colors from images
function SkillsIndex() {
  const data = useStaticQuery(graphql`
    query imageQuery {
      file(relativePath: { eq: "knee_inspection.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 3080, quality: 80) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);
  return (
    <Layout>
      <HeaderImage
        fliudImage={data.file.childImageSharp.fluid}
        heading="Skills"
        textBackgroundColor="rgb(41, 64, 77)"
      />
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

export default SkillsIndex;
