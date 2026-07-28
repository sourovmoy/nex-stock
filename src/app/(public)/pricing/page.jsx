import Container from "@/Components/Container/Container";
import BillingToggle from "@/Components/Pricing/BillingToggle";
import ComparisonTable from "@/Components/Pricing/ComparisonTable";
import FaqList from "@/Components/Pricing/FaqList";
import PlanCards from "@/Components/Pricing/PlanCards";
import PricingCta from "@/Components/Pricing/PricingCta";
import PricingHero from "@/Components/Pricing/PricingHero";
import { COMPARE_ROWS, FAQS, PLANS } from "@/lib/data";
import React from "react";

const Pricing = () => {
  return (
    <Container>
      <main className="text-gray-900">
        <PricingHero />

        {/* Client island: toggle owns state, PlanCards listens via custom event */}
        <BillingToggle />
        <PlanCards plans={PLANS} />

        <hr className="max-w-4xl mx-auto border-gray-100 mb-20" />

        {/* Server: static comparison table */}
        <ComparisonTable rows={COMPARE_ROWS} />

        <hr className="max-w-4xl mx-auto border-gray-100 mb-20" />

        {/* Server wrapper, Client leaf accordions */}
        <FaqList faqs={FAQS} />

        {/* Server: static CTA */}
        <PricingCta />
      </main>
    </Container>
  );
};

export default Pricing;
