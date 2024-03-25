import LandingAccordion from "@/components/accordion/Accordion";
import CalendarComponent from "@/components/calendar/Calendar";
export default function Home() {
  return (
    <main className="home">
      <div className="accordion-parent">
        <LandingAccordion />
      </div>
      <div className="app-desc">
        <CalendarComponent />
      </div>
    </main>
  );
}
