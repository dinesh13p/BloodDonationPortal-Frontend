import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const FAQ = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <section className="container py-16">
        <h1 className="text-4xl font-bold mb-6">Frequently Asked Questions</h1>
        <Accordion type="single" collapsible className="max-w-3xl">
          <AccordionItem value="item-1">
            <AccordionTrigger>Who can donate?</AccordionTrigger>
            <AccordionContent>
              Healthy adults meeting standard eligibility criteria with no recent illness.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>How often can I donate?</AccordionTrigger>
            <AccordionContent>
              Whole blood donations are typically every 3 months; follow local guidelines.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Is it safe?</AccordionTrigger>
            <AccordionContent>
              Yes. Single-use sterile equipment is used for every donation.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Do you charge any fees?</AccordionTrigger>
            <AccordionContent>
              No. Our platform is free for donors and recipients.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </div>
  );
};

export default FAQ;

