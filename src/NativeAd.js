import React from "react";
import styled from "styled-components";

// static native add component
const NativeAd = () => {
  return (
    <NativeAdContainer>
      <a
        href="https://medium.com/@diaaanek/hooked-on-react-hooks-fb86dd23d3b3"
        target="_blank"
        rel="noopener noreferrer"
      >
        {" "}
        <Image
          width="250px"
          height="230px"
          src="https://cdn-images-1.medium.com/max/640/0*ZtK2xezgeujkOWCn.jpg"
          style={{
            borderTopLeftRadius: "5px",
            borderTopRightRadius: "5px"
          }}
        />
        <h3 style={{ margin: "0.5rem" }}>“Hooked” on Hooks</h3>
        <Description>
          <p style={{ margin: "0.5rem", fontSize: "12px" }}>
            *Sponsored Content* by Diane
          </p>
          <p
            style={{
              margin: "0.5rem",
              fontSize: "12px"
            }}
          >
            My Personal Migration from Class to Functional Components
          </p>
        </Description>
        <div
          id="ing-buttons"
          className="close"
          style={{
            position: "absolute",
            top: "0",
            right: "2%"
          }}
        >
          {" "}
          <button
            id="editbtn"
            style={{
              backgroundColor: "Transparent",
              border: "none",
              paddingRight: "5px"
            }}
            className="edit btn"
          >
            <img
              src="http://chittagongit.com/download/362255"
              alt="advertisement-btn"
              style={{
                height: "50px",
                width: "50px",
                paddingTop: ".25em"
              }}
            />
          </button>
        </div>
      </a>
    </NativeAdContainer>
  );
};

const NativeAdContainer = styled.div`
  background-color: white;
  width: 250px;
  height: 350px;
  cursor: pointer;
  float: left;
  margin: 0.75rem;
  position: relative;
  box-shadow: 0 1px 6px rgba(32, 33, 36, 0.28);
  border-radius: 5px;
  // overflow: hidden;
  display: inline-block;
  a { text-decoration: none;
  color: black }
  }
  :hover {
    transition: all 0.2s;
    -o-transition: all 0.2s;
    -moz-transition: all 0.2s;
    -webkit-transition: all 0.2s;
    margin-top: -2px;
  }
`;

export const Image = styled.img`
  height: ${p => p.height};
  width: ${p => p.width};
  object-fit: cover;
`;

export const Description = styled.div`
  position: relative;
  // overflow: auto;
  font-family: "Avenir";
  height: 80px;
  width: 254px;
`;

export default NativeAd;
