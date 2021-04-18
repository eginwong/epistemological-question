import React from "react";
import GitHubIcon from "../../images/github.png";

const invertImageStyle = {
  WebkitFilter: "brightness(0) invert(1)" /* Safari 6.0 - 9.0 */,
  Filter: "brightness(0) invert(1)",
};

function Footer() {
  return (
    <footer className="bg-gray-700">
      <nav className="flex justify-between items-center	max-w-full p-4 mx-auto text-sm md:p-8">
        <p className="text-white">
          Created by{` `}
          <span className="font-bold no-underline">Eric Wong</span>
          <span>
            <a
              className="font-bold text-white no-underline"
              href="https://github.com/eginwong/epistemological-question"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={GitHubIcon}
                className="w-5 ml-2 inline"
                style={invertImageStyle}
                alt="GitHub Logo and Source Code"
              />
            </a>
          </span>
        </p>

        <p className="text-white font-bold no-underline">
          Icons by{" "}
          <a href="https://www.freepik.com" title="Freepik">
            Freepik
          </a>{" "}
          from{" "}
          <a href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com
          </a>
        </p>
      </nav>
    </footer>
  );
}

export default Footer;
