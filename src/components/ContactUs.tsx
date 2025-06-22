
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";

export const ContactUs = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Get Started Today
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
            Ready to revolutionize your financial future? Contact us or start your free analysis now.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <Card className="border-0 bg-gradient-to-br from-blue-50 to-green-50">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-slate-900 mb-6">
                  Contact Our Team
                </h3>
                
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        First Name
                      </label>
                      <Input placeholder="Your first name" className="bg-white" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Last Name
                      </label>
                      <Input placeholder="Your last name" className="bg-white" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Email Address
                    </label>
                    <Input type="email" placeholder="your.email@example.com" className="bg-white" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Phone Number
                    </label>
                    <Input type="tel" placeholder="+91 98765 43210" className="bg-white" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Message
                    </label>
                    <Textarea 
                      placeholder="Tell us about your financial goals or questions..."
                      className="bg-white h-32"
                    />
                  </div>
                  
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-6">
                Quick Start Options
              </h3>
              
              <div className="space-y-6">
                <Card className="border border-blue-200 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold text-slate-900 mb-2">
                      🧬 DNA Risk Analysis
                    </h4>
                    <p className="text-slate-600 mb-4">
                      Get your personalized risk profile based on genetic markers - the first of its kind in India.
                    </p>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      Start DNA Analysis
                    </Button>
                  </CardContent>
                </Card>

                <Card className="border border-green-200 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold text-slate-900 mb-2">
                      💰 Free Tax Optimization
                    </h4>
                    <p className="text-slate-600 mb-4">
                      Discover potential tax savings with our GSTN-integrated analysis tool.
                    </p>
                    <Button className="w-full bg-green-600 hover:bg-green-700">
                      Find Tax Savings
                    </Button>
                  </CardContent>
                </Card>

                <Card className="border border-purple-200 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold text-slate-900 mb-2">
                      🤖 Chat with AI Advisor
                    </h4>
                    <p className="text-slate-600 mb-4">
                      Start a conversation in Hindi or English about your financial goals.
                    </p>
                    <Button className="w-full bg-purple-600 hover:bg-purple-700">
                      Start Chatting
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-2xl p-6 border border-slate-200">
              <h4 className="text-lg font-semibold text-slate-900 mb-4">
                📞 Direct Contact
              </h4>
              <div className="space-y-3 text-sm">
                <div>
                  <span className="font-medium text-slate-700">Email:</span>
                  <span className="text-slate-600 ml-2">support@findna.advisor</span>
                </div>
                <div>
                  <span className="font-medium text-slate-700">Phone:</span>
                  <span className="text-slate-600 ml-2">+91 1800-FINDNA (346362)</span>
                </div>
                <div>
                  <span className="font-medium text-slate-700">Office Hours:</span>
                  <span className="text-slate-600 ml-2">Mon-Fri 9 AM - 7 PM IST</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
