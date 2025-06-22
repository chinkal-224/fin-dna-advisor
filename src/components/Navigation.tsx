
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white/95 backdrop-blur-sm border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-green-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">FA</span>
              </div>
              <span className="ml-3 text-xl font-bold text-slate-900">FinDNA Advisor</span>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#innovations" className="text-slate-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
                Innovations
              </a>
              <a href="#services" className="text-slate-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
                Services
              </a>
              <a href="#security" className="text-slate-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
                Security
              </a>
              <a href="#contact" className="text-slate-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
                Contact
              </a>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
              Login
            </Button>
            <Button className="bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600">
              Get Started Free
            </Button>
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            <a href="#innovations" className="block px-3 py-2 text-slate-700 hover:text-blue-600">
              Innovations
            </a>
            <a href="#services" className="block px-3 py-2 text-slate-700 hover:text-blue-600">
              Services
            </a>
            <a href="#security" className="block px-3 py-2 text-slate-700 hover:text-blue-600">
              Security
            </a>
            <a href="#contact" className="block px-3 py-2 text-slate-700 hover:text-blue-600">
              Contact
            </a>
            <div className="px-3 py-2 space-y-2">
              <Button variant="outline" className="w-full">Login</Button>
              <Button className="w-full bg-gradient-to-r from-blue-600 to-green-500">Get Started Free</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
