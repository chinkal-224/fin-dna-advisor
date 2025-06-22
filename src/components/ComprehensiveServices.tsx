
import { Card, CardContent } from "@/components/ui/card";
import { ChartBar, CircleDollarSign, Shield, HandCoins } from "lucide-react";

export const ComprehensiveServices = () => {
  const services = [
    {
      icon: ChartBar,
      title: "Portfolio Management",
      description: "AI-powered automated allocation and rebalancing using Black-Litterman models adjusted for Indian markets",
      features: ["Automated rebalancing", "Risk-adjusted returns", "Tax-efficient allocation", "Real-time monitoring"]
    },
    {
      icon: CircleDollarSign,
      title: "Tax Optimization",
      description: "GST-compliant planning with automated capital gains harvesting and deduction maximization",
      features: ["GSTN data integration", "Capital gains offsetting", "ELSS recommendations", "Tax-loss harvesting"]
    },
    {
      icon: Shield,
      title: "Retirement Planning",
      description: "Comprehensive long-term goal planning with inflation-adjusted projections and milestone tracking",
      features: ["Goal-based planning", "Inflation modeling", "Pension optimization", "Withdrawal strategies"]
    },
    {
      icon: HandCoins,
      title: "Insurance Analysis",
      description: "Intelligent coverage evaluation and recommendations based on your life stage and financial goals",
      features: ["Coverage gap analysis", "Premium optimization", "Claim assistance", "Policy comparison"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            All Your Financial Needs, In One Place
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
            Comprehensive end-to-end wealth management with actionable insights delivered through an intuitive dashboard
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-slate-50 to-blue-50">
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-600 to-green-500 text-white rounded-lg mb-4 group-hover:scale-110 transition-transform">
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-sm text-slate-600 mb-4">
                      {service.description}
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                        <span className="text-xs text-slate-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-slate-900 mb-4">
              Dashboard with Actionable Steps
            </h3>
            <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
              Get personalized recommendations like "Shift ₹2 lakh to bonds to reduce risk" or "Invest in ELSS to save ₹46,800 in taxes this year"
            </p>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="bg-white rounded-lg p-4">
                <div className="font-semibold text-green-600 text-lg">₹87,500</div>
                <div className="text-slate-600">Tax savings identified</div>
              </div>
              <div className="bg-white rounded-lg p-4">
                <div className="font-semibold text-blue-600 text-lg">+12.5%</div>
                <div className="text-slate-600">Portfolio optimization</div>
              </div>
              <div className="bg-white rounded-lg p-4">
                <div className="font-semibold text-purple-600 text-lg">85%</div>
                <div className="text-slate-600">Goal achievement probability</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
