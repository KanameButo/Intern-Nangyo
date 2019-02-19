import React from "react";
import PropTypes from "prop-types";

import { FaArrowDown } from "react-icons/fa/";

const Hero = props => {
  const { scrollToContent, backgrounds, theme } = props;

  return (
    <React.Fragment>
      <section className="hero">
        <h1>
          ”ナンギョ”から、はじまる
        </h1>
        <button onClick={scrollToContent} aria-label="scroll">
          <FaArrowDown />
        </button>
        <div className="click-area" onClick={scrollToContent}></div>
      </section>

      {/* --- STYLES --- */}
      <style jsx>{`
        .hero {
          align-items: center;
          background: ${theme.hero.background};
          background-image: url(${backgrounds.mobile});
          background-size: cover;
          background-position: 50%;
          color: #F26419;
          display: flex;
          flex-flow: column nowrap;
          justify-content: center;
          min-height: 100vh;
          height: 100px;
          padding: ${theme.space.inset.l};
          padding-top: ${theme.header.height.homepage};
        }

        h1 {
          text-align: center;
          font-size: calc(112.5% + 0.5vw);
          margin: ${theme.space.stack.l};
          color: #F26419;
          line-height: ${theme.hero.h1.lineHeight};
          text-remove-gap: both 0 "Open Sans";
          font-family: "游ゴシック体", YuGothic, "游ゴシック", "Yu Gothic", "メイリオ", sans-serif;
          position: absolute;
          top: 210px;
        
          :global(strong) {
            position: relative;

            &::after,
            &::before {
              content: "›";
              color: ${theme.text.color.attention};
              margin: 0 ${theme.space.xs} 0 0;
              text-shadow: 0 0 ${theme.space.s} ${theme.color.neutral.gray.k};
            }
            &::after {
              content: "‹";
              margin: 0 0 0 ${theme.space.xs};
            }
          }
        }

        button {
          background: #00000000;
          border: none;
          font-size: calc(112.5% + 0.5vw);
          padding-right: 450px;
          padding-left: 450px;
          padding-top: 100px;
          padding-bottom: 5px;
          position: absolute;
          top: 180px;
          cursor: pointer;
          

          &:focus {
            outline-style: none;
            background: ${theme.color.brand.primary.active};
          }

          :global(svg) {
            position: relative;
            top: 5px;
            fill: ${theme.color.neutral.white};
            stroke-width: 40;
            stroke: ${theme.color.neutral.white};
            animation-duration: ${theme.time.duration.long};
            animation-name: buttonIconMove;
            animation-iteration-count: infinite;
          }
        }

        .click-area {
          position: relative;
          top: 10px;
          bottom: 60px;
          width: 100%;
          height: 50%;
          cursor: pointer;
        }

        @keyframes buttonIconMove {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0);
          }
        }

        @from-width tablet {
          .hero {
            background-image: url(${backgrounds.tablet});
          }

          h1 {
            max-width: 90%;
            font-size: ${`calc(${theme.hero.h1.size} * 1.3)`};
          }

          button {
            font-size: ${theme.font.size.l};
          }
        }

        @from-width desktop {
          .hero {
            background-image: url(${backgrounds.desktop});
          }

          h1 {
            max-width: 80%;
            font-size: ${`calc(${theme.hero.h1.size} * 1.5)`};
          }

          button {
            font-size: ${theme.font.size.xl};
          }
        }
      `}</style>
    </React.Fragment>
  );
};

Hero.propTypes = {
  scrollToContent: PropTypes.func.isRequired,
  backgrounds: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default Hero;
