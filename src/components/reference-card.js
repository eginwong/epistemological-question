import React from "react";
import PropTypes from "prop-types";

function ReferenceCard({annotation, description}) {
  return (
    <section>
      <div className="my-4 w-full max-w-full overflow-hidden rounded border bg-white shadow-xl">
        <div className="p-5">
          <h3 className="mr-10 text-sm truncate-2nd">
            <p className="hover:text-blue-500">
              {annotation}
            </p>
          </h3>
          <div className="p-3 flex items-start justify-between">
            <p className="text-sm text-gray-500 leading-6 pl-5">
              {description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

ReferenceCard.propTypes = {
  annotation: PropTypes.element.isRequired,
  description: PropTypes.string.isRequired
}

export default ReferenceCard;
