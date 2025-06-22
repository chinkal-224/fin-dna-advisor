
import { Dna, FileText, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const CoreInnovations = () => {
  return (
    <section id="innovations" className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Revolutionary Innovations
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
            Three groundbreaking features that make us India's most advanced financial advisor
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl mb-6 group-hover:scale-110 transition-transform">
                  <Dna className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  DNA-Based Risk Profiling
                </h3>
                <div className="inline-block bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
                  First in India 🇮🇳
                </div>
                <p className="text-slate-600 mb-6">
                  Revolutionary genetic analysis links your risk tolerance to DNA markers, going beyond traditional questionnaires for unprecedented personalization.
                </p>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h4 className="font-semibold text-green-800 mb-2">🔒 Ethical & Secure Data Handling</h4>
                  <p className="text-sm text-green-700">
                    Military-grade AES-256 encryption with complete user control over genetic data sharing and deletion.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 text-white rounded-xl mb-6 group-hover:scale-110 transition-transform">
                  <FileText className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  GSTN-Linked Tax Harvesting
                </h3>
                <div className="inline-block bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
                  First in India 🇮🇳
                </div>
                <p className="text-slate-600 mb-6">
                  Automated tax optimization using GSTN data integration to offset capital gains, ensuring maximum savings and compliance.
                </p>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-800 mb-2">💰 Average Savings</h4>
                  <p className="text-sm text-blue-700">
                    Users save ₹50,000+ annually through intelligent tax harvesting and optimization strategies.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-green-600 text-white rounded-xl mb-6 group-hover:scale-110 transition-transform">
                  <Users className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  Vernacular AI Assistant
                </h3>
                <div className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
                  Inclusive Design
                </div>
                <p className="text-slate-600 mb-6">
                  Advanced NLP chatbot supporting Hindi and English, making sophisticated financial planning accessible to rural users and gig workers.
                </p>
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                  <h4 className="font-semibold text-purple-800 mb-2">🗣️ Natural Conversations</h4>
                  <p className="text-sm text-purple-700">
                    "Mujhe retirement ke liye kitna invest karna chahiye?" - Get personalized advice in your language.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
