import React from "react";

import Layout from "../components/framework/layout";
import SEO from "../components/framework/seo";
import dogIllustration from "../images/dog-illustration.svg";

function AboutPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="About"
      />

      <section className="flex flex-col items-center md:flex-row">
        <div className="md:w-2/3 md:mr-8">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl pb-5">
            <span className="block xl:inline">PHS 611 </span>
            <span className="block text-indigo-600 xl:inline">Multimedia Project</span>
          </h1>
          <blockquote className="pl-4 font-serif leading-loose text-justify border-l-4 border-gray-900">
          Students will develop a short multimedia project based on some aspect of epistemology and post it for viewing during the final week of the course.
          <br/>
          <br/>
          The first part is to confirm a title with the professor (by the end of week 11) and post a short annotated bibliography concerning some aspect of epistemology that you want to pursue. The annotated bibliography should include 3-4 resources. Due end of week 12.
          <br/>
          <br/>
          The second part is to build a short (10-15 minute) multimedia presentation on the topic. The presentation should be uploaded to YouTube (or a similar site) and a link posted on the blog. Due the end of Week 15.
          </blockquote>

          <cite className="block mt-4 text-xs font-bold text-right uppercase">
            – PHS 611, Syllabus, Dr. Philippe Yates
          </cite>
        </div>

        <figure className="w-2/3 md:w-1/3">
          <img alt="A dog relaxing" src={dogIllustration} />
        </figure>
      </section>
    </Layout>
  );
}

export default AboutPage;
