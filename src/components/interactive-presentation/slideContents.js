import React from "react";
import PropTypes from "prop-types";
import Footnote from "./footnote";
import { Card, NumberedCard } from "./card";

/**
 * need to save some css from getting stripped!
 * PurgeCSS:
 * bg-red-400
 * bg-green-400
 * bg-purple-400
 * bg-blue-400
 */

function SlideContents({ type, contents, styles }) {
  let customStyles = "";
  customStyles += styles.color ? ` bg-${styles.color}-400` : "";
  customStyles += styles.textColor ? ` text-${styles.textColor}-400` : "";

  switch (type) {
    case "caption":
      return (
        <section className="text-center items-center p-5 flex flex-col justify-end flex-1">
          <div className={`w-80 ${customStyles}`}>{contents.text}</div>
        </section>
      );
    case "emphasis":
      return (
        <section
          className="text-center
          justify-center
          p-5
          mb-10
          flex
          flex-col
          flex-1"
        >
          {!contents.text || (
            <h2
              className={`inline-block text-content p-3 text-2xl font-bold ${customStyles}`}
            >
              <div className="whitespace-pre-line">{contents.text}</div>
            </h2>
          )}
        </section>
      );
    case "v-list":
      return (
        <div className="flex flex-col items-center justify-center">
          {!contents.cards ||
            contents.cards.map((val, ind) => <Card key={ind} content={val} />)}
        </div>
      );
    case "h-list":
      return (
        <div className="flex flex-1 items-center">
          <div className="flex flex-1 items-stretch justify-center p-4 space-x-4">
            {!contents.cards ||
              contents.cards.map((val, ind) => (
                <NumberedCard
                  key={ind}
                  content={val}
                  number={ind}
                  highlight={contents.highlight === ind}
                />
              ))}
          </div>
        </div>
      );
    case "syllogism":
      return (
        <section
          className="text-center
        p-5
        flex
        flex-col
        justify-between
        flex-1"
        >
          {!contents.text || (
            <div className="flex flex-1 items-center justify-center">
              <h2
                className={`flex bg-gray-300 opacity-80 text-content p-3 mb-4 text-2xl font-bold ${customStyles}`}
              >
                <div className="whitespace-pre-line">{contents.text}</div>
              </h2>
            </div>
          )}
        </section>
      );
    case "bottom":
      return (
        <section
          className="text-center
        p-5
        flex
        flex-col
        justify-end
        flex-1"
        >
          {!contents.text || (
            <div>
              <h2
                className={`inline-block text-content p-3 mb-4 text-2xl font-bold ${customStyles}`}
              >
                <div className="whitespace-pre-line">{contents.text}</div>
              </h2>
            </div>
          )}
          {!contents.footnotes ||
            contents.footnotes.map((fn, id) => (
              <Footnote key={id} citation={fn} color={styles.color} />
            ))}
        </section>
      );
    default:
      return (
        <section
          className="text-center
        p-5
        flex
        flex-col
        justify-between
        flex-1"
        >
          {!contents.text || (
            <div>
              <h2
                className={`inline-block text-content p-3 mb-4 text-2xl font-bold ${customStyles}`}
              >
                <div className="whitespace-pre-line">{contents.text}</div>
              </h2>
            </div>
          )}
          {!contents.footnotes ||
            contents.footnotes.map((fn, id) => (
              <Footnote key={id} citation={fn} color={styles.color} />
            ))}
        </section>
      );
  }
}

SlideContents.propTypes = {
  contents: PropTypes.object.isRequired,
  type: PropTypes.string,
  styles: PropTypes.object,
};

export default SlideContents;
