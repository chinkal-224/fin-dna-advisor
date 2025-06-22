import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { X, MessageCircle, Send, TrendingUp, TrendingDown, Minus, ArrowUp } from "lucide-react";

interface Message {
  type: "bot" | "user";
  content: string;
  time: string;
  messageType?: "financial_prediction" | "financial_advice" | "general_advice" | "error";
  ticker?: string;
  prediction?: {
    prediction: string;
    confidence: Record<string, number>;
  };
}

export const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      type: "bot",
      content: "नमस्ते! Hi! I'm your AI financial advisor. I can help you with stock predictions, tax planning, and investment advice. Ask me about any stock like 'TCS prediction' or 'tax saving tips'!",
      time: "Just now",
      messageType: "general_advice"
    }
  ]);  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);
  const [showScrollToTop, setShowScrollToTop] = useState(false);  const quickActions = [
    "TCS stock prediction",
    "How to invest ₹50,000?", 
    "Best tax saving options",
    "RELIANCE stock analysis",
    "Emergency fund planning",
    "SIP vs lumpsum investment",
    "Home loan vs rent",
    "Crypto investment guide"
  ];
  // Auto-scroll to bottom when messages change
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTop = () => {
    messagesContainerRef.current?.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Handle scroll to show/hide scroll-to-top button
  const handleScroll = () => {
    if (messagesContainerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = messagesContainerRef.current;
      const isNearBottom = scrollHeight - scrollTop - clientHeight < 100;
      setShowScrollToTop(!isNearBottom && messages.length > 5);
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Auto-scroll when chatbot opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(scrollToBottom, 100);
    }
  }, [isOpen]);

  const getPredictionIcon = (prediction: string) => {
    if (prediction.includes("BUY")) return <TrendingUp className="h-4 w-4 text-green-600" />;
    if (prediction.includes("SELL")) return <TrendingDown className="h-4 w-4 text-red-600" />;
    return <Minus className="h-4 w-4 text-yellow-600" />;
  };

  const getPredictionColor = (prediction: string) => {
    if (prediction.includes("BUY")) return "bg-green-100 text-green-800 border-green-200";
    if (prediction.includes("SELL")) return "bg-red-100 text-red-800 border-red-200";
    return "bg-yellow-100 text-yellow-800 border-yellow-200";
  };

  const formatFinancialContent = (message: Message) => {
    const lines = message.content.split('\n');
    return (
      <div className="space-y-2">
        {lines.map((line, index) => {
          if (line.startsWith('📊 **') || line.startsWith('🎯 **') || line.startsWith('📈 **')) {
            return <div key={index} className="font-semibold text-blue-800">{line.replace(/\*\*/g, '')}</div>;
          }
          if (line.startsWith('•')) {
            return <div key={index} className="ml-4 text-sm">{line}</div>;
          }
          if (line.startsWith('⚠️')) {
            return <div key={index} className="text-xs text-gray-600 italic mt-2">{line}</div>;
          }
          if (line.trim() === '') return null;
          return <div key={index}>{line}</div>;
        })}
        
        {message.prediction && (
          <div className="mt-3 p-3 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg border">
            <div className="flex items-center gap-2 mb-2">
              {getPredictionIcon(message.prediction.prediction)}
              <Badge className={getPredictionColor(message.prediction.prediction)}>
                {message.prediction.prediction}
              </Badge>
              {message.ticker && (
                <Badge variant="outline" className="text-xs">
                  {message.ticker}
                </Badge>
              )}
            </div>
            <div className="grid grid-cols-3 gap-2 text-xs">
              {Object.entries(message.prediction.confidence).map(([action, confidence]) => (
                <div key={action} className="text-center">
                  <div className="font-medium">{action.split(' ')[0]}</div>
                  <div className="text-gray-600">{confidence}%</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage: Message = {
      type: "user",
      content: inputValue,
      time: "Now"
    };

    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/chatbot/save", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: inputValue })
      });

      const data = await res.json();

      if (res.ok) {
        const botResponse: Message = {
          type: "bot",
          content: data.data.answer,
          time: "Now",
          messageType: data.data.type,
          ticker: data.data.ticker,
          prediction: data.data.prediction
        };
        setMessages(prev => [...prev, botResponse]);
      } else {
        throw new Error("AI response failed");
      }
    } catch (error) {
      console.error("Chatbot error:", error);
      setMessages(prev => [
        ...prev,
        {
          type: "bot",
          content: "😢 Sorry, I'm having technical difficulties. Please try again or ask about general financial advice.",
          time: "Now",
          messageType: "error"
        }
      ]);
    }

    setInputValue("");
    setIsLoading(false);
  };

  const handleQuickAction = (action: string) => {
    setInputValue(action);
  };

  return (
    <>
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600 shadow-lg z-50 p-0"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      )}

      {isOpen && (        <Card className="fixed bottom-6 right-6 w-96 h-[600px] shadow-2xl z-50 flex flex-col border-0 max-h-[85vh] 
                      sm:w-80 sm:h-[550px] 
                      md:w-96 md:h-[600px] 
                      lg:w-[420px] lg:h-[650px]
                      max-w-[calc(100vw-3rem)]">
          <CardHeader className="bg-gradient-to-r from-blue-600 to-green-500 text-white rounded-t-lg p-4 flex-shrink-0">
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

          <CardContent className="flex-1 flex flex-col p-0 min-h-0 relative">
            <div 
              ref={messagesContainerRef}
              className="flex-1 overflow-y-auto p-4 space-y-4 scroll-smooth chat-scrollbar"
              onScroll={handleScroll}
            >
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] p-3 rounded-lg text-sm break-words ${
                      message.type === "user"
                        ? "bg-blue-600 text-white"
                        : "bg-slate-100 text-slate-900"
                    }`}
                  >
                    {message.type === "bot" && (message.messageType === "financial_prediction" || message.prediction) ? (
                      formatFinancialContent(message)
                    ) : (
                      <div>
                        {message.content.split('\n').map((line, lineIndex) => {
                          if (line.startsWith('**') && line.endsWith('**')) {
                            return <div key={lineIndex} className="font-semibold">{line.replace(/\*\*/g, '')}</div>;
                          }
                          if (line.startsWith('•')) {
                            return <div key={lineIndex} className="ml-2">{line}</div>;
                          }
                          if (line.trim() === '') return null;
                          return <div key={lineIndex}>{line}</div>;
                        })}
                      </div>
                    )}
                    <p
                      className={`text-xs mt-2 ${
                        message.type === "user" ? "text-blue-100" : "text-slate-500"
                      }`}
                    >
                      {message.time}
                      {message.messageType === "financial_prediction" && " • Stock Analysis"}
                      {message.messageType === "financial_advice" && " • Financial Advice"}
                    </p>                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-slate-100 text-slate-900 p-3 rounded-lg text-sm">
                    <div className="flex items-center space-x-2">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600"></div>
                      <span>Analyzing financial data...</span>
                    </div>
                  </div>
                </div>
              )}              {/* Invisible div for auto-scroll */}
              <div ref={messagesEndRef} />
            </div>

            {/* Scroll to top button */}
            {showScrollToTop && (
              <Button
                onClick={scrollToTop}
                className="absolute bottom-32 right-4 w-10 h-10 rounded-full bg-blue-600 hover:bg-blue-700 shadow-lg z-10"
                size="sm"
              >
                <ArrowUp className="h-4 w-4" />
              </Button>
            )}

            <div className="p-4 border-t border-slate-200 flex-shrink-0">
              <p className="text-xs text-slate-600 mb-2">Quick actions:</p>
              <div className="grid grid-cols-2 gap-2 mb-3">
                {quickActions.map((action, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    onClick={() => handleQuickAction(action)}
                    className="text-xs p-2 h-auto text-left justify-start break-words overflow-hidden"
                  >
                    <span className="truncate">{action}</span>
                  </Button>
                ))}
              </div>
            </div>

            <div className="p-4 border-t border-slate-200 flex-shrink-0">
              <div className="flex space-x-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Ask: 'How to invest ₹10,000 monthly?' or 'HDFC Bank stock analysis'..."
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                  className="flex-1 text-sm"
                  disabled={isLoading}
                />
                <Button
                  onClick={handleSendMessage}
                  size="sm"
                  disabled={isLoading || !inputValue.trim()}
                  className="bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600 disabled:opacity-50 flex-shrink-0"
                >
                  {isLoading ? (
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                  ) : (
                    <Send className="h-4 w-4" />
                  )}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  );
};
