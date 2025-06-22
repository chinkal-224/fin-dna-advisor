
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { X, MessageCircle, Send } from "lucide-react";

export const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: "bot",
      content: "नमस्ते! Hi! I'm your AI financial advisor. I can help you in Hindi or English. How can I assist you today?",
      time: "Just now"
    }
  ]);
  const [inputValue, setInputValue] = useState("");

  const quickActions = [
    "Tax saving tips",
    "Portfolio review",
    "Retirement planning",
    "मेरे लिए बेस्ट investment क्या है?"
  ];

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const newMessage = {
      type: "user",
      content: inputValue,
      time: "Now"
    };

    setMessages(prev => [...prev, newMessage]);
    
    // Simulate bot response
    setTimeout(() => {
      const botResponse = {
        type: "bot",
        content: "Thanks for your question! I'm analyzing your profile and will provide personalized recommendations. This is a demo response - our actual AI would provide detailed financial guidance based on your specific situation.",
        time: "Now"
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);

    setInputValue("");
  };

  const handleQuickAction = (action: string) => {
    setInputValue(action);
  };

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600 shadow-lg z-50 p-0"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-6 right-6 w-96 h-[500px] shadow-2xl z-50 flex flex-col border-0">
          <CardHeader className="bg-gradient-to-r from-blue-600 to-green-500 text-white rounded-t-lg p-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-lg">FinDNA AI Assistant</h3>
                <p className="text-blue-100 text-sm">Hindi | English Support</p>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-white/20 p-1"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>

          <CardContent className="flex-1 flex flex-col p-0">
            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg text-sm ${
                      message.type === 'user'
                        ? 'bg-blue-600 text-white'
                        : 'bg-slate-100 text-slate-900'
                    }`}
                  >
                    <p>{message.content}</p>
                    <p className={`text-xs mt-1 ${
                      message.type === 'user' ? 'text-blue-100' : 'text-slate-500'
                    }`}>
                      {message.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="p-4 border-t border-slate-200">
              <p className="text-xs text-slate-600 mb-2">Quick actions:</p>
              <div className="grid grid-cols-2 gap-2">
                {quickActions.map((action, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    onClick={() => handleQuickAction(action)}
                    className="text-xs p-2 h-auto text-left justify-start"
                  >
                    {action}
                  </Button>
                ))}
              </div>
            </div>

            {/* Input */}
            <div className="p-4 border-t border-slate-200">
              <div className="flex space-x-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Ask me anything about finance..."
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  className="flex-1"
                />
                <Button
                  onClick={handleSendMessage}
                  size="sm"
                  className="bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  );
};
