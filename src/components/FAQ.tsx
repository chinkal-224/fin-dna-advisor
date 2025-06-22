
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const FAQ = () => {
  const faqs = [
    {
      question: "How secure is my DNA data?",
      answer: "Your DNA data receives the highest level of security protection. We use AES-256 encryption, process data in secure cloud environments, and immediately destroy raw genetic data after analysis. Only anonymized risk scores are retained, and you can delete all data within 24 hours of account deletion."
    },
    {
      question: "What makes your AI chatbot different?",
      answer: "Our vernacular chatbot supports both Hindi and English with advanced NLP capabilities. It understands natural language financial queries like 'Mujhe retirement ke liye kitna invest karna chahiye?' and provides personalized advice based on your complete financial profile and goals."
    },
    {
      question: "How does GSTN integration work for tax optimization?",
      answer: "We securely connect to your GST data to identify business expenses and income patterns, enabling automated capital gains harvesting and tax-loss optimization. This ensures maximum compliance while identifying substantial tax-saving opportunities you might miss manually."
    },
    {
      question: "Is the free tier really free for gig workers?",
      answer: "Yes! We're committed to financial inclusion. Gig workers including Uber, Swiggy, Zomato drivers, and freelancers get access to basic portfolio planning, tax guidance, and insurance recommendations at no cost. Premium features are available for advanced optimization."
    },
    {
      question: "How do you ensure your AI recommendations are unbiased?",
      answer: "We follow strict ethical guidelines including non-discrimination policies, explainable AI decisions, and regular third-party audits. Our algorithms are designed to optimize for your financial goals, not generate commissions or favor specific products."
    },
    {
      question: "Can I control what data you access?",
      answer: "Absolutely! You have granular control over data sharing - toggle on/off access per bank account, choose which investments to include, opt-in/out of DNA analysis, and set specific privacy preferences. Your data, your rules."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Everything you need to know about our AI-powered financial advisor
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg border border-slate-200">
              <AccordionTrigger className="px-6 py-4 text-left font-semibold text-slate-900 hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-slate-600">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12 text-center">
          <div className="bg-white rounded-2xl p-8 border border-slate-200">
            <h3 className="text-xl font-semibold text-slate-900 mb-4">
              Still have questions?
            </h3>
            <p className="text-slate-600 mb-6">
              Our team is here to help you understand how our platform can transform your financial journey.
            </p>
            <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
              <a href="#contact" className="inline-block bg-gradient-to-r from-blue-600 to-green-500 text-white px-6 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-green-600 transition-colors">
                Contact Support
              </a>
              <a href="#" className="inline-block border border-slate-300 text-slate-700 px-6 py-3 rounded-lg font-medium hover:bg-slate-50 transition-colors">
                Schedule Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
