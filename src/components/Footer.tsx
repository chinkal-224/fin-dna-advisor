
import { Separator } from "@/components/ui/separator";

export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-green-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">FA</span>
              </div>
              <span className="ml-3 text-xl font-bold">FinDNA Advisor</span>
            </div>
            <p className="text-slate-400 text-sm">
              India's first AI-powered autonomous financial advisor with DNA-based risk profiling.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Products</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#" className="hover:text-white transition-colors">Portfolio Management</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Tax Optimization</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Retirement Planning</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Insurance Analysis</a></li>
              <li><a href="#" className="hover:text-white transition-colors">DNA Risk Profiling</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Legal & Security</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Data Handling</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Compliance</a></li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-slate-700" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-slate-400 mb-4 md:mb-0">
            © 2024 FinDNA Advisor. All rights reserved. | Made with ❤️ for India
          </div>
          <div className="flex items-center space-x-6 text-sm text-slate-400">
            <span>🔒 SOC 2 Certified</span>
            <span>🇮🇳 RBI Compliant</span>
            <span>🛡️ ISO 27001</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
