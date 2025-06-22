
import { ArrowRight } from "lucide-react";

export const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "User Input & Goal Mapping",
      description: "Share your financial goals through our intelligent interface or chat with our vernacular AI assistant.",
      example: "\"I want to retire at 65 with ₹3 crore\"",
      color: "from-blue-500 to-purple-600"
    },
    {
      number: "02",
      title: "AI Engine Processing",
      description: "Our advanced AI analyzes your data using Black-Litterman models and DNA-based risk profiling.",
      example: "Predicting tax-saving opportunities & optimizing portfolio allocation",
      color: "from-purple-500 to-green-600"
    },
    {
      number: "03",
      title: "Actionable Recommendations",
      description: "Receive personalized, step-by-step guidance with specific actions you can take immediately.",
      example: "\"Shift ₹2 lakh to bonds to reduce risk by 15%\"",
      color: "from-green-500 to-blue-600"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            How Our AI Engine Works
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
            A simple 3-step process that transforms your financial goals into actionable strategies
          </p>
        </div>

        <div className="relative">
          {/* Desktop Flow */}
          <div className="hidden lg:flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={index} className="flex items-center">
                <div className="text-center max-w-sm">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${step.color} text-white rounded-full text-xl font-bold mb-4`}>
                    {step.number}
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 mb-4">
                    {step.description}
                  </p>
                  <div className="bg-slate-50 rounded-lg p-3 border border-slate-200">
                    <p className="text-sm text-slate-700 italic">
                      {step.example}
                    </p>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <ArrowRight className="h-8 w-8 text-slate-400 mx-8" />
                )}
              </div>
            ))}
          </div>

          {/* Mobile Flow */}
          <div className="lg:hidden space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${step.color} text-white rounded-full text-xl font-bold mb-4`}>
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-slate-600 mb-4">
                  {step.description}
                </p>
                <div className="bg-slate-50 rounded-lg p-3 border border-slate-200 max-w-sm mx-auto">
                  <p className="text-sm text-slate-700 italic">
                    {step.example}
                  </p>
                </div>
                {index < steps.length - 1 && (
                  <div className="flex justify-center mt-6">
                    <ArrowRight className="h-6 w-6 text-slate-400 rotate-90" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-slate-900 mb-4">
              Powered by Advanced Financial Models
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-sm">
              <div className="space-y-2">
                <div className="font-semibold text-blue-600">Black-Litterman Model</div>
                <div className="text-slate-600">Optimized for Indian markets with local factor adjustments</div>
              </div>
              <div className="space-y-2">
                <div className="font-semibold text-green-600">DNA-Based Profiling</div>
                <div className="text-slate-600">Genetic markers linked to risk tolerance and financial behavior</div>
              </div>
              <div className="space-y-2">
                <div className="font-semibold text-purple-600">Predictive Analytics</div>
                <div className="text-slate-600">Machine learning for tax optimization and market predictions</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
