import React from "react";
import Img, { FluidObject } from "gatsby-image";

type Props = {
  fliudImage: FluidObject | FluidObject[];
  heading: string;
  subheading?: string;
  textBackgroundColor?: string;
};

const BRAND_COLOR = "#366273";

function HeaderImage({
  fliudImage,
  heading,
  subheading,
  textBackgroundColor,
}: Props) {
  const _textBackgroundColor = textBackgroundColor || BRAND_COLOR;
  return (
    <>
      <Img
        fluid={fliudImage}
        style={{
          position: "absolute",
          width: "100vw",
          height: "400px",
          zIndex: -1,
        }}
      />
      <div
        style={{
          width: "100vw",
          height: "400px",
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h1
          className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-desktop"
          style={{
            boxShadow: `${_textBackgroundColor} 0.5rem 0px 0px, ${_textBackgroundColor} -0.5rem 0px 0px`,
            backgroundColor: _textBackgroundColor,
            color: "white",
            lineHeight: "1",
            padding: "0.25em",
          }}
        >
          {heading}
        </h1>
        {subheading && (
          <h3
            className="has-text-weight-bold is-size-4-touch is-size-3-desktop"
            style={{
              boxShadow: `${_textBackgroundColor} 0.5rem 0px 0px, ${_textBackgroundColor} -0.5rem 0px 0px`,
              backgroundColor: _textBackgroundColor,
              color: "white",
              lineHeight: "1",
              padding: "0.25em",
            }}
          >
            {subheading}
          </h3>
        )}
      </div>
    </>
  );
}

export default HeaderImage;
