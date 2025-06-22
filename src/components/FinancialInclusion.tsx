
import { Card, CardContent } from "@/components/ui/card";
import { Users, Lightbulb, BookOpen } from "lucide-react";

export const FinancialInclusion = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Empowering Every Indian's Financial Journey
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
            Democratizing wealth management through inclusive design and accessible financial education
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 text-white rounded-xl mb-6 group-hover:scale-110 transition-transform">
                  <Users className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  Free Tier for Gig Workers
                </h3>
                <p className="text-slate-600 mb-6">
                  Comprehensive financial planning at no cost for Swiggy, Uber, Zomato drivers and other gig economy workers.
                </p>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h4 className="font-semibold text-green-800 mb-2">🚗 Who Benefits?</h4>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>• Delivery partners</li>
                    <li>• Cab drivers</li>
                    <li>• Freelancers</li>
                    <li>• Daily wage workers</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-green-600 text-white rounded-xl mb-6 group-hover:scale-110 transition-transform">
                  <Lightbulb className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  Gamified Learning
                </h3>
                <p className="text-slate-600 mb-6">
                  Interactive tutorials and challenges that make financial literacy engaging and easy to understand.
                </p>
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                  <h4 className="font-semibold text-purple-800 mb-2">🎮 Examples</h4>
                  <ul className="text-sm text-purple-700 space-y-1">
                    <li>• "Save ₹50k with ELSS" challenge</li>
                    <li>• Tax optimization quiz</li>
                    <li>• Risk assessment game</li>
                    <li>• Investment simulation</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl mb-6 group-hover:scale-110 transition-transform">
                  <BookOpen className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  ESG & Sustainable Investing
                </h3>
                <p className="text-slate-600 mb-6">
                  Align your investments with India's 2070 net-zero goals through solar energy ETFs and sustainable portfolios.
                </p>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-800 mb-2">🌱 Impact Options</h4>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• Solar energy ETFs</li>
                    <li>• Green bond funds</li>
                    <li>• Sustainable equity funds</li>
                    <li>• Carbon-neutral portfolios</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-green-100 to-blue-100 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-slate-900 mb-4">
              Reaching 75M+ Retail Investors & 20M+ SMEs
            </h3>
            <p className="text-slate-600 max-w-3xl mx-auto">
              Our inclusive approach ensures that sophisticated financial planning is accessible to every Indian, 
              regardless of their economic background or technical expertise.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
