import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";

import Layout from "../components/Layout";
import Features from "../components/Features";
import BlogRoll from "../components/BlogRoll";
import SpecialitiesRoll from "../components/SpecialitiesRoll";
import AboutRoll from "../components/AboutRoll";
import HospitalsRoll from "../components/HospitalsRoll";
import HeaderImage from "../components/HeaderImage";

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}) => (
  <>
    <HeaderImage
      fliudImage={image.childImageSharp.fluid}
      heading={title}
      subheading={subheading}
      textBackgroundColor="rgb(54, 99, 124)"
    />
    {/* <div
      className="full-width-image margin-top-0"
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
        backgroundPosition: `center`,
        backgroundAttachment: `fixed`,
      }}
    >
      <div
        style={{
          display: "flex",
          height: "150px",
          lineHeight: "1",
          justifyContent: "space-around",
          alignItems: "center",
          flexDirection: "column",
          // backgroundColor: "rgb(255, 68, 0)",
        }}
      >
        <h1
          className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
          style={{
            boxShadow: `${brandColor} 0.5rem 0px 0px, #366273 -0.5rem 0px 0px`,
            backgroundColor: brandColor,
            color: "white",
            lineHeight: "1",
            padding: "0.25em",
          }}
        >
          {title}
        </h1>
        <h3
          className="has-text-weight-bold is-size-3-mobile is-size-5-tablet is-size-4-widescreen"
          style={{
            boxShadow: `${brandColor} 0.5rem 0px 0px, #366273 -0.5rem 0px 0px`,
            backgroundColor: brandColor,
            color: "white",
            lineHeight: "1",
            padding: "0.25em",
          }}
        >
          {subheading}
        </h3>
      </div>
    </div> */}
    <section className="section section--gradient">
      <div className="container">
        <div>
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                {/* <div className="content">
                  <div className="tile">
                    <h1 className="title">{mainpitch.title}</h1>
                  </div>
                  <div className="tile">
                    <h3 className="subtitle">{mainpitch.description}</h3>
                  </div>
                </div> */}
                {/* <div className="columns">
                  <div className="column is-12">
                    <h3 className="has-text-weight-semibold is-size-2">
                      {heading}
                    </h3>
                    <p>{description}</p>
                  </div>
                </div> */}
                {/* <div className="column is-12"> */}
                <HospitalsRoll />
                <AboutRoll />
                {/* </div> */}
                {/* <Features gridItems={intro.blurbs} /> */}
                {/* <div className="columns">
                  <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/products">
                      See all products
                    </Link>
                  </div>
                </div> */}
                <div className="column is-12">
                  <h3 className="has-text-weight-semibold is-size-2">Skills</h3>
                  <SpecialitiesRoll />
                  {/* <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/specialities">
                      Read more
                    </Link>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
);

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 3080, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`;
