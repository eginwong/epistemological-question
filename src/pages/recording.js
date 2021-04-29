import React from "react";

import Layout from "../components/framework/layout";
import SEO from "../components/framework/seo";

function RecordingPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Recording"
      />
      <iframe
        className="flex flex-1"
        src="https://www.youtube.com/embed/iQnOCegnA2U"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </Layout>
  );
}

export default RecordingPage;
