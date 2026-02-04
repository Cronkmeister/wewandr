import type { Metadata } from "next";
import FoundersLetterContent from "./FoundersLetterContent";

export const metadata: Metadata = {
  title: "A Letter from Our Founder — WeWandr",
  description:
    "Read a personal message from WeWandr's founder about our mission to transform family travel through shared experiences and parent-to-parent wisdom.",
  alternates: {
    canonical: "https://wewandr.co/founders-letter",
  },
};

export default function FoundersLetterPage() {
  return <FoundersLetterContent />;
}
