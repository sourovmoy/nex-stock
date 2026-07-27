import Container from "@/Components/Container/Container";
import BenefitsSection from "@/Components/Solutions/Benefitssection";
import IndustriesSection from "@/Components/Solutions/Industriessection";
import ProblemSolutionSection from "@/Components/Solutions/ProblemSolutionSection";
import SolutionsCta from "@/Components/Solutions/Solutionscta";
import SolutionsHero from "@/Components/Solutions/SolutionsHero";
import TestimonialsSection from "@/Components/Solutions/Testimonialssection";
import { BENEFITS, INDUSTRIES, PROBLEMS, TESTIMONIALS } from "@/lib/data";
import React from "react";

const Solutions = () => {
  return (
    <Container>
      <main className="bg-white text-gray-900">
        {/* Hero + industry jump links */}
        <SolutionsHero />

        {/* 8-industry grid */}
        <IndustriesSection industries={INDUSTRIES} />

        <hr className="max-w-4xl mx-auto border-gray-100 mb-20" />

        {/* Before/after problem → solution rows */}
        <ProblemSolutionSection problems={PROBLEMS} />

        <hr className="max-w-4xl mx-auto border-gray-100 mb-20" />

        {/* 6-benefit grid */}
        <BenefitsSection benefits={BENEFITS} />

        <hr className="max-w-4xl mx-auto border-gray-100 mb-20" />

        {/* 3 testimonial cards */}
        <TestimonialsSection testimonials={TESTIMONIALS} />

        {/* Indigo CTA with decorative blobs */}
        <SolutionsCta />
      </main>
    </Container>
  );
};

export default Solutions;
