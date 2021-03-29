import React from "react";

import Layout from "../components/framework/layout";
import SEO from "../components/framework/seo";
import ReferenceCard from "../components/reference-card";
import biblio from "../data/bibliography.json";

function BibliographyPage() {
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
        {biblio.entries.map((e) => (
          <ReferenceCard
            key={e.id}
            annotation={
              <span>
                {e.author}.{` "${e.source}. "`}
                <span style={{ fontStyle: "italic" }}>
                  {e.publish}
                </span>
                {e.contents ? `: ${e.contents}` : ""}
              </span>
            }
            description={e.description}
          />
        ))}
      </section>
    </Layout>
  );
}

export default BibliographyPage;
