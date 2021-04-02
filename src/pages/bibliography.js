import React from "react";
import { Link } from "gatsby";

import Layout from "../components/framework/layout";
import SEO from "../components/framework/seo";
import ReferenceCard from "../components/reference-card";
import biblio from "../data/bibliography.json";
import dogIllustration from "../images/dog-illustration.svg";

function BibliographyPage() {
  // sort alphabetically
  biblio.entries.sort((el1, el2) => el1.author.localeCompare(el2.author));
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Bibliography"
      />
      <h1 className="w-full max-w-full text-center text-4xl pb-4">
        Annotated Bibliography
      </h1>
      <section>
        {biblio.entries.map((e, id) => (
          <ReferenceCard key={id} annotation={e} />
        ))}
      </section>

      <div className="flex justify-center">
        <figure className="w-2/3 md:w-1/3">
          <img alt="A dog relaxing" src={dogIllustration} />
          <Link to="/presentation">
            <figcaption className="block mt-4 text-xs font-bold text-center uppercase">
              Doggo has a question
            </figcaption>
          </Link>
        </figure>
      </div>
    </Layout>
  );
}

export default BibliographyPage;
