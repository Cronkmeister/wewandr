import type { Metadata } from "next";
import InvestorRelationsContent from "./InvestorRelationsContent";

export const metadata: Metadata = {
  title: "Investor Relations — WeWandr",
  description:
    "Learn about investment opportunities with WeWandr, a trust-led travel platform rethinking how families plan and share travel experiences.",
  alternates: {
    canonical: "https://wewandr.co/investor-relations",
  },
};

export default function InvestorRelationsPage() {
  return <InvestorRelationsContent />;
}
