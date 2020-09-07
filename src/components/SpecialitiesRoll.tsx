import React from "react";
import { Link, graphql, StaticQuery } from "gatsby";
import PreviewCompatibleImage from "./PreviewCompatibleImage";

interface SpecialitiesRollProps {
  data: Data;
}
interface Data {
  allMarkdownRemark: AllMarkdownRemark;
}
interface AllMarkdownRemark {
  edges: EdgesEntity[];
}
interface EdgesEntity {
  node: Node;
}
interface Node {
  excerpt: string;
  id: string;
  fields: Fields;
  frontmatter: Frontmatter;
}
interface Fields {
  slug: string;
}
interface Frontmatter {
  title: string;
  order: number;
  description: string;
  conditions: string[];
  featuredimage: string | null;
}

function SpecialitiesRoll(props: SpecialitiesRollProps) {
  const { data } = props;
  const nodes = data.allMarkdownRemark.edges.map((e) => e.node);
  return (
    <div className="columns is-multiline">
      {nodes.map((post) => (
        <div className="is-parent column is-6" key={post.id}>
          <article className={`blog-list-item tile is-child box notification`}>
            <header>
              {post.frontmatter.featuredimage ? (
                <div className="featured-thumbnail">
                  <PreviewCompatibleImage
                    imageInfo={{
                      image: post.frontmatter.featuredimage,
                      alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                    }}
                  />
                </div>
              ) : null}
              <p>
                <Link
                  className="title has-text-primary is-size-4"
                  to={post.fields.slug}
                >
                  {post.frontmatter.title}
                </Link>
              </p>
            </header>
            <p>
              <span className="has-text-black">
                {post.frontmatter.description}
              </span>
              <br />
              <br />

              <div className="columns is-mobile is-multiline">
                {post.frontmatter.conditions.map((c, index) => (
                  <div key={c} className="column is-narrow">
                    <span className="has-text-info-dark nowrap">{`> ${c}`}</span>
                  </div>
                ))}
              </div>

              <Link className="button" to={post.fields.slug}>
                View Details →
              </Link>
            </p>
          </article>
        </div>
      ))}
    </div>
  );
}

export default () => (
  <StaticQuery
    query={graphql`
      query SpecialitiesRollQuery {
        allMarkdownRemark(
          sort: { order: ASC, fields: [frontmatter___order] }
          filter: { frontmatter: { templateKey: { eq: "speciality" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                description
                templateKey
                conditions
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 120, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data: Data) => <SpecialitiesRoll data={data} />}
  />
);
