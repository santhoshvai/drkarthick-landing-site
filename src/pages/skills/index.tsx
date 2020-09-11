import React from "react";
import Layout from "../../components/Layout";
import SpecialitiesRoll from "../../components/SpecialitiesRoll";
import { useStaticQuery, graphql } from "gatsby";
import HeaderImage from "../../components/HeaderImage";

function SkillsIndex() {
  const data = useStaticQuery(graphql`
    query imageQuery {
      file(relativePath: { eq: "knee_inspection.jpg" }) {
        childImageSharp {
          fluid {
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
