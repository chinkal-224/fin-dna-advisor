
import { HeroSection } from "@/components/HeroSection";
import { ProblemSolution } from "@/components/ProblemSolution";
import { CoreInnovations } from "@/components/CoreInnovations";
import { ComprehensiveServices } from "@/components/ComprehensiveServices";
import { FinancialInclusion } from "@/components/FinancialInclusion";
import { HowItWorks } from "@/components/HowItWorks";
import { SecuritySection } from "@/components/SecuritySection";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { ContactUs } from "@/components/ContactUs";
import { ChatBot } from "@/components/ChatBot";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />
      <HeroSection />
      <ProblemSolution />
      <CoreInnovations />
      <ComprehensiveServices />
      <FinancialInclusion />
      <HowItWorks />
      <SecuritySection />
      <Testimonials />
      <FAQ />
      <ContactUs />
      <Footer />
      <ChatBot />
    </div>
  );
};

export default Index;
