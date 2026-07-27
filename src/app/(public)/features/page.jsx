import Container from "@/Components/Container/Container";
import CheckoutHighlight from "@/Components/Features/Checkouthighlight";
import FeatureCards from "@/Components/Features/FeatureCards";
import FeaturesHero from "@/Components/Features/Featureshero";
import IntegrationsSection from "@/Components/Features/Integrationssection";
import ReportsHighlight from "@/Components/Features/Reportshighlight";
import StatsBar from "@/Components/Features/StatsBar";
import {
  CHECKOUT_METHODS,
  FEATURES,
  INTEGRATIONS,
  MOCK_ITEMS,
  REPORT_BARS,
  REPORT_CHECKS,
  SALE_CHECKS,
  STATS,
} from "@/lib/data";
import React from "react";

const Features = () => {
  return (
    <Container>
      <main className="bg-white text-gray-900">
        {/* Static hero */}
        <FeaturesHero />

        {/* Static stats row */}
        <StatsBar stats={STATS} />

        {/* Static 9-card feature grid */}
        <FeatureCards features={FEATURES} />

        {/* Static checkout highlight + mock UI */}
        <CheckoutHighlight
          mockItems={MOCK_ITEMS}
          checkoutMethods={CHECKOUT_METHODS}
          saleChecks={SALE_CHECKS}
        />

        <hr className="border-gray-100 mb-20" />

        {/* Static reports highlight + mock bars */}
        <ReportsHighlight
          reportBars={REPORT_BARS}
          reportChecks={REPORT_CHECKS}
        />

        <hr className="max-w-4xl mx-auto border-gray-100 mb-20" />

        {/* Static integration chips */}
        <IntegrationsSection integrations={INTEGRATIONS} />
      </main>
    </Container>
  );
};

export default Features;
