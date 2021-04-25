import React from "react";

import Layout from "../components/framework/layout";
import SEO from "../components/framework/seo";
import Presentation from "../components/interactive-presentation/presentation";

function PresentationPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Presentation"
      />
      <Presentation />
    </Layout>
  );
}

export default PresentationPage;
