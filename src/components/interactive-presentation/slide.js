import React from "react";
import PropTypes from "prop-types";
import Footnote from "./footnote";

function Slide({ content, footnotes }) {
  return (
    <section
      className="text-center
    p-5
    flex
    flex-col
    justify-between
    flex-1"
    >
      <div>{content}</div>
      {footnotes ? (
        footnotes.map((fn, id) => <Footnote key={id} citation={fn} />)
      ) : (
        <></>
      )}
    </section>
  );
}

Slide.propTypes = {
  content: PropTypes.element,
  footnotes: PropTypes.array,
};

export default Slide;
