import React from "react";

import Layout from "../components/framework/layout";
import SEO from "../components/framework/seo";

function NotFoundPage() {
  return (
    <Layout>
      <SEO title="404: Not found" />
      <div>
        <img
          alt="Dilbert cartoon"
          className="block mx-auto w-full"
          src={
            "https://assets.amuniversal.com/c9f673c06d5901301d7d001dd8b71c47"
          }
        />
        <h2 className="bg-yellow-400 text-xl font-bold text-center inline-block my-8 p-3">
          Looks like we still have questions ...
        </h2>
      </div>
    </Layout>
  );
}

export default NotFoundPage;
