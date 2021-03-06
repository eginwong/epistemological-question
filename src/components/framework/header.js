import { graphql, useStaticQuery, Link } from "gatsby";
import React, { useState } from "react";
import ConfusedAvatar from "../../images/confused.png";

const greyScaleStyle = {
  WebkitFilter: "grayscale(100%)" /* Safari 6.0 - 9.0 */,
  Filter: "greyscale(100%)",
};

function Header() {
  const [isExpanded, toggleExpansion] = useState(false);
  const { site } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <header className="bg-gray-50">
      <div className="flex flex-wrap items-center justify-between max-w-4xl p-4 mx-auto md:p-8">
        <Link to="/">
          <h1 className="flex items-center text-black no-underline">
            <img
              src={ConfusedAvatar}
              className="w-8 h-8 mr-2 fill-current"
              style={greyScaleStyle}
              alt="Confused person icon"
            />
            <span className="text-xl font-bold tracking-tight">
              {site.siteMetadata.title}
            </span>
          </h1>
        </Link>

        <button
          className="items-center block px-3 py-2 text-black border border-white rounded md:hidden"
          onClick={() => toggleExpansion(!isExpanded)}
        >
          <svg
            className="w-3 h-3 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>

        <nav
          className={`${
            isExpanded ? `block` : `hidden`
          } md:block md:items-center w-full md:w-auto`}
        >
          {[
            {
              route: `/recording`,
              title: `Recording`,
            },
            {
              route: `/presentation`,
              title: `Presentation`,
            },
            {
              route: `/bibliography`,
              title: `Bibliography`,
            },
          ].map((link) => (
            <Link
              className="block mt-4 text-black no-underline md:inline-block md:mt-0 md:ml-6"
              key={link.title}
              to={link.route}
            >
              {link.title}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;
