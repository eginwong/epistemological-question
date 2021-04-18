import React from "react";
import PropTypes from "prop-types";

const textIndentStyle = {
  textIndent: "-1.25rem",
};

const annotationFormatter = (citation) => {
  switch (citation.sourceType) {
    case "web":
      return (
        <span>
          {`${citation.author}. "${citation.source}" At ${citation.siteName}, ${citation.publish}, at ${citation.webUrl}.`}
        </span>
      );
    case "blog":
      return (
        <span>
          {`${citation.author}. "${citation.source}" `}
          <span style={{ fontStyle: "italic" }}>{citation.siteName}</span>
          {` (blog). ${citation.publish}. At ${citation.webUrl}.`}
        </span>
      );
    case "book":
      return (
        <span>
          {citation.author}.{` "${citation.chapter}" In `}
          <span style={{ fontStyle: "italic" }}>{citation.source}</span>
          {`, ${citation.edition ? `${citation.edition}., ` : ""}${
            citation.pages
          }. ${citation.publisher}, ${citation.publishDate}.`}
        </span>
      );
    case "web-encyclopedia":
      return (
        <span>
          {citation.author}.{` "${citation.pageTitle}" In `}
          <span style={{ fontStyle: "italic" }}>{citation.source}</span>
          {`, ed. ${citation.editor}. At ${citation.webUrl}.`}
        </span>
      );
  }
};

const ReferenceCard = ({ annotation }) => (
  <section>
    <div className="my-4 w-full max-w-full overflow-hidden rounded border bg-white shadow-xl">
      <div className="p-5">
        <div className="px-3">
          <h3
            className="mr-10 text-sm truncate-2nd pl-5"
            style={textIndentStyle}
          >
            <p className="hover:text-blue-500">
              {annotationFormatter(annotation)}
            </p>
          </h3>
        </div>
        <div className="p-3">
          <p className="text-sm text-gray-500 leading-6 pl-5">
            {annotation.description}
          </p>
        </div>
      </div>
    </div>
  </section>
);

ReferenceCard.propTypes = {
  annotation: PropTypes.object.isRequired,
};

export default ReferenceCard;
