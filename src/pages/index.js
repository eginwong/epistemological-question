import React from "react";

import Layout from "../components/framework/layout";
import SEO from "../components/framework/seo";
import Game from "../components/interactive-presentation/game";

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Home"
      />

      <Game />
    </Layout>
  );
}

export default IndexPage;
