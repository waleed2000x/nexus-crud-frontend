import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function LandingAccordion() {
  return (
    <div className="accordion">
      <Accordion type="single" collapsible className="w-full text-white">
        <AccordionItem value="item-1">
          <AccordionTrigger>About this app!</AccordionTrigger>
          <AccordionContent>
            This application was a practice project for Next.js.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>What does this application do?</AccordionTrigger>
          <AccordionContent>
            It just mutaltes the database by performing CRUD operations.
          </AccordionContent>
          <AccordionContent>
            This application is a side project, just getting familiar with
            Next.js
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>
            What technologies and tools does this application uses?
          </AccordionTrigger>
          <AccordionContent>
            <b>Framework:</b> Next.js
          </AccordionContent>
          <AccordionContent>
            <b>Libraries and Tools:</b>{" "}
            shadcn-ui/zod/tailwind/scss/styled-components
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
