
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Software Engineer, Bangalore",
      content: "The DNA-based risk profiling was a revelation! It showed I was more risk-tolerant than traditional questionnaires suggested. My portfolio is now perfectly aligned with my actual comfort level.",
      rating: 5,
      savings: "₹1,20,000 in tax savings"
    },
    {
      name: "Rajesh Kumar",
      role: "Uber Driver, Delhi",
      content: "मैं हिंदी में अपने सवाल पूछ सकता हूं और समझ सकता हूं। Free tier ने मुझे retirement planning में बहुत मदद की है। Thank you FinDNA!",
      rating: 5,
      savings: "₹25,000 emergency fund built"
    },
    {
      name: "Ankita Patel",
      role: "CA & SME Owner, Mumbai",
      content: "The GSTN integration for tax harvesting saved me hours of manual work. The AI predicted tax-saving opportunities I would have missed completely.",
      rating: 5,
      savings: "₹2,50,000 in automated tax optimization"
    },
    {
      name: "Dr. Suresh Reddy",
      role: "Doctor, Hyderabad",
      content: "Finally, one platform for everything! Portfolio, insurance, retirement - all optimized together. The ESG investing options align perfectly with my values.",
      rating: 5,
      savings: "15% portfolio improvement"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            What Our Users Say
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
            Real stories from Indians who transformed their financial future with our AI-powered platform
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-slate-50 to-blue-50">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-slate-700 mb-4 text-sm leading-relaxed">
                  "{testimonial.content}"
                </p>
                
                <div className="border-t border-slate-200 pt-4">
                  <div className="font-semibold text-slate-900 text-sm">
                    {testimonial.name}
                  </div>
                  <div className="text-slate-500 text-xs mb-2">
                    {testimonial.role}
                  </div>
                  <div className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-medium">
                    💰 {testimonial.savings}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-slate-900 mb-4">
              Join 10,000+ Indians Who've Transformed Their Finances
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-blue-600">₹50L+</div>
                <div className="text-sm text-slate-600">Total tax savings generated</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-600">92%</div>
                <div className="text-sm text-slate-600">Users achieve their financial goals</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-600">4.9/5</div>
                <div className="text-sm text-slate-600">Average user satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
