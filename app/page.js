import LandingAccordion from "@/components/accordion/Accordion";
export default function Home() {
  return (
    <main className="home">
      <div className="accordion-parent">
        <LandingAccordion />
      </div>
      <div className="app-desc"></div>
    </main>
  );
}
