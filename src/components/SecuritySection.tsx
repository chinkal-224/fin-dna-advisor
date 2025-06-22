
import { Shield, Lock, FileCheck, Eye } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const SecuritySection = () => {
  return (
    <section id="security" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Your Data. Your Rules. Uncompromised Security.
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
            Military-grade security with complete transparency and user control over all data
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
            <CardContent className="p-6 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-red-500 to-orange-600 text-white rounded-lg mb-4 group-hover:scale-110 transition-transform">
                <Shield className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-3">
                Military-Grade Security
              </h3>
              <ul className="text-sm text-slate-600 space-y-2">
                <li>• AES-256 encryption at rest</li>
                <li>• OAuth2 secure API access</li>
                <li>• End-to-end encryption</li>
                <li>• SOC 2 Type II certified</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
            <CardContent className="p-6 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg mb-4 group-hover:scale-110 transition-transform">
                <Eye className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-3">
                Complete Transparency
              </h3>
              <ul className="text-sm text-slate-600 space-y-2">
                <li>• Annual PwC audits</li>
                <li>• Open security reports</li>
                <li>• Real-time access logs</li>
                <li>• No data sold - ever</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
            <CardContent className="p-6 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 text-white rounded-lg mb-4 group-hover:scale-110 transition-transform">
                <Lock className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-3">
                Granular Control
              </h3>
              <ul className="text-sm text-slate-600 space-y-2">
                <li>• Toggle data sharing per bank</li>
                <li>• DNA data opt-in/out</li>
                <li>• Investment preferences</li>
                <li>• One-click data deletion</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
            <CardContent className="p-6 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-green-600 text-white rounded-lg mb-4 group-hover:scale-110 transition-transform">
                <FileCheck className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-3">
                Ethical Framework
              </h3>
              <ul className="text-sm text-slate-600 space-y-2">
                <li>• Non-discrimination policy</li>
                <li>• Explainable AI decisions</li>
                <li>• Genetic data de-identification</li>
                <li>• Regular ethics reviews</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12">
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 border border-green-200">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">
                🔒 DNA Data: Maximum Security
              </h3>
              <p className="text-slate-600 max-w-3xl mx-auto">
                Your genetic information is handled with extreme care, following global best practices for genomic data security
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-4 border border-green-100">
                <h4 className="font-semibold text-green-800 mb-2">🧬 Processing</h4>
                <p className="text-sm text-green-700">
                  Secure cloud analysis with immediate data destruction post-processing
                </p>
              </div>
              <div className="bg-white rounded-lg p-4 border border-blue-100">
                <h4 className="font-semibold text-blue-800 mb-2">🔐 Storage</h4>
                <p className="text-sm text-blue-700">
                  Only anonymized risk scores stored, never raw genetic data
                </p>
              </div>
              <div className="bg-white rounded-lg p-4 border border-purple-100">
                <h4 className="font-semibold text-purple-800 mb-2">⚡ Deletion</h4>
                <p className="text-sm text-purple-700">
                  Complete data erasure within 24 hours of account deletion
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
