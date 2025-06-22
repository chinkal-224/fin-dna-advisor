
import { Button } from "@/components/ui/button";
import { ArrowDown, Dna, Shield } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-green-50 pt-16 pb-20">
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          <div className="lg:col-span-6">
            <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
              <div className="lg:py-24">
                <div className="flex items-center space-x-2 mb-6">
                  <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                    🇮🇳 Made for India
                  </div>
                  <div className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                    AI-Powered
                  </div>
                </div>
                
                <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl lg:text-5xl xl:text-6xl">
                  Empower Your 
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-500">
                    Financial Future
                  </span>
                </h1>
                
                <p className="mt-6 text-lg text-slate-600 sm:text-xl">
                  India's First Autonomous Financial Advisor for Holistic Portfolio, Tax, Retirement, and Insurance Planning. 
                  Powered by DNA-based risk profiling and AI intelligence.
                </p>
                
                <div className="mt-8 sm:flex sm:justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                  <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600 text-white px-8 py-4 text-lg">
                    Explore Your Financial DNA
                  </Button>
                  <Button size="lg" variant="outline" className="w-full sm:w-auto border-slate-300 text-slate-700 hover:bg-slate-50 px-8 py-4 text-lg">
                    Watch Demo
                  </Button>
                </div>

                <div className="mt-8 flex items-center space-x-6 text-sm text-slate-500">
                  <div className="flex items-center space-x-2">
                    <Shield className="h-4 w-4 text-green-500" />
                    <span>Bank-Grade Security</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Dna className="h-4 w-4 text-blue-500" />
                    <span>DNA-Powered Insights</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 lg:mt-0 lg:col-span-6">
            <div className="relative mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
              <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
                <div className="bg-gradient-to-br from-blue-600 to-green-500 h-64 flex items-center justify-center">
                  <div className="text-center text-white">
                    <Dna className="h-16 w-16 mx-auto mb-4 animate-pulse" />
                    <h3 className="text-xl font-semibold mb-2">AI Financial Brain</h3>
                    <p className="text-blue-100">Analyzing your unique financial DNA...</p>
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-600">Portfolio Optimization</span>
                    <span className="text-green-600 font-medium">+12.5%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-600">Tax Savings Identified</span>
                    <span className="text-green-600 font-medium">₹87,500</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-600">Risk Score</span>
                    <span className="text-blue-600 font-medium">Moderate (7/10)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-slate-400" />
      </div>
    </section>
  );
};
