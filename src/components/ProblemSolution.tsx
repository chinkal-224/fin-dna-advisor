
import { AlertTriangle, CheckCircle } from "lucide-react";

export const ProblemSolution = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Transforming Financial Advisory in India
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
            We're solving the biggest challenges in personal finance management with cutting-edge AI technology
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <AlertTriangle className="h-6 w-6 text-red-500" />
                <h3 className="text-xl font-semibold text-slate-900">Current Challenges</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-slate-600">Fragmented financial apps with no unified view</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-slate-600">High costs of human financial advisors (₹10,000+ annually)</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-slate-600">Reactive tools that don't predict or prevent losses</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-slate-600">Limited accessibility for rural users and gig workers</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <CheckCircle className="h-6 w-6 text-green-500" />
                <h3 className="text-xl font-semibold text-slate-900">Our AI-Powered Solution</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-slate-600">Single platform for portfolio, tax, retirement & insurance</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-slate-600">Free tier for gig workers, affordable plans for everyone</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-slate-600">Proactive AI that predicts and prevents financial mistakes</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-slate-600">Hindi/English chatbot for complete accessibility</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
