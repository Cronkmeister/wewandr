import type { Metadata } from "next";
import JoinOurTeamContent from "./JoinOurTeamContent";

export const metadata: Metadata = {
  title: "Join Our Team — WeWandr",
  description:
    "Explore career opportunities at WeWandr. Join our team building the future of family travel through community-powered experiences.",
  alternates: {
    canonical: "https://wewandr.co/join-our-team",
  },
};

export default function JoinOurTeamPage() {
  return <JoinOurTeamContent />;
}
