import type { Metadata } from "next";
import OurStoryContent from "./OurStoryContent";

export const metadata: Metadata = {
  title: "Our Story — WeWandr",
  description:
    "Discover how WeWandr was born from one parent's journey to make family travel easier. Learn about our mission to help parents share real travel experiences.",
  alternates: {
    canonical: "https://wewandr.co/our-story",
  },
};

export default function OurStoryPage() {
  return <OurStoryContent />;
}
