import React from "react";
import PropTypes from "prop-types";

const footnoteFormatter = ({ citation }) => {
  switch (citation.sourceType) {
    case "book":
      return (
        <span>
          {citation.author}, {` "${citation.chapter}" in `}
          <span className="italic">{citation.source}</span>
          {`, ${citation.edition ? `${citation.edition}., ` : ""}(${
            citation.publisher
          }: ${citation.publishDate}), ${citation.pages}.`}
        </span>
      );
    case "web-encyclopedia":
      return (
        <span>
          {citation.author},{` "${citation.pageTitle}" in `}
          <span className="italic">{citation.source}</span>
          {`, ed. ${citation.editor}, at ${citation.webUrl}.`}
        </span>
      );
  }
};

function Footnote(citation) {
  return (
    <div className="mr-6 text-xs text-left whitespace-pre-line">
      <sup>*</sup>
      {footnoteFormatter(citation)}
    </div>
  );
}

Footnote.propTypes = {
  citation: PropTypes.object.isRequired,
};

export default Footnote;
