import type { Metadata } from "next";
import PortfolioPage from "../components/PortfolioPage";

export const metadata: Metadata = {
  title: "Junseok Kim | AI-Native Product Owner",
  description: "AI-native Product Owner connecting problem definition, hands-on building, and measurable product outcomes.",
  alternates: { canonical: "/en", languages: { ko: "/", en: "/en" } },
};

export default function EnglishHome() {
  return <PortfolioPage locale="en" />;
}
