import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X, Send, Loader2, User, Bot, ThumbsUp, ThumbsDown } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';
import Markdown from 'react-markdown';
import { CV_DATA } from '../App';

// Fallback for Vercel if process.env gets stripped completely
const apiKey = typeof process !== 'undefined' && process.env ? process.env.GEMINI_API_KEY : import.meta.env?.VITE_GEMINI_API_KEY;

const ai = new GoogleGenAI({ apiKey: apiKey || 'missing_key' });

const EXAMPLE_PROMPTS = [
  "What services do you offer?",
  "How can I contact you?",
  "What is your AWS experience?",
  "Tell me about your education."
];

interface Message {
  id: string;
  role: 'user' | 'model';
  text: string;
  feedback?: 'up' | 'down' | null;
}

interface ChatBotProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export function ChatBot({ isOpen, setIsOpen }: ChatBotProps) {
  const [messages, setMessages] = useState<Message[]>([
    { id: 'initial', role: 'model', text: "Hi! I'm Andrew's AI assistant. Ask me anything about his experience, skills, or how to contact him!" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatRef = useRef<any>(null);

  useEffect(() => {
    chatRef.current = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: `You are a helpful AI assistant representing Andrew Pham. 
        Use the following resume data to answer questions about his experience, education, skills, services, and contact info. 
        Do not make up information. If you don't know, say so. 
        Be concise, professional, and friendly.
        If asked about services, list them and offer to book a meeting via Calendly.
        
        Resume Data:
        ${JSON.stringify(CV_DATA, null, 2)}`,
      }
    });
  }, []);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  const handleSend = async (e?: React.FormEvent, promptText?: string) => {
    e?.preventDefault();
    const textToSend = promptText || input.trim();
    if (!textToSend || isLoading) return;

    setInput('');
    const userMsgId = Date.now().toString() + '-user';
    setMessages(prev => [...prev, { id: userMsgId, role: 'user', text: textToSend }]);
    setIsLoading(true);

    try {
      const response = await chatRef.current.sendMessage({ message: textToSend });
      const modelMsgId = Date.now().toString() + '-model';
      setMessages(prev => [...prev, { id: modelMsgId, role: 'model', text: response.text }]);
    } catch (error) {
      console.error("Chat error:", error);
      const errorMsgId = Date.now().toString() + '-error';
      setMessages(prev => [...prev, { id: errorMsgId, role: 'model', text: "Sorry, I encountered an error. Please try again later or contact Andrew directly at andrew.ph4m@gmail.com." }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleFeedback = (id: string, type: 'up' | 'down') => {
    setMessages(prev => prev.map(msg => 
      msg.id === id 
        ? { ...msg, feedback: msg.feedback === type ? null : type } 
        : msg
    ));
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 w-[calc(100vw-3rem)] sm:w-96 h-[500px] max-h-[80vh] bg-zinc-900 border border-zinc-800 rounded-2xl shadow-2xl flex flex-col z-50 overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 bg-zinc-950 border-b border-zinc-800 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-500/20 rounded-lg border border-blue-500/30">
                  <Bot className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <h3 className="font-bold text-zinc-100 text-sm">Andrew's Assistant</h3>
                  <p className="text-xs text-zinc-500">Ask about my experience</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-transparent">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                  <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${msg.role === 'user' ? 'bg-blue-600' : 'bg-zinc-800 border border-zinc-700'}`}>
                    {msg.role === 'user' ? <User className="w-4 h-4 text-white" /> : <Bot className="w-4 h-4 text-blue-400" />}
                  </div>
                  <div className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm ${msg.role === 'user' ? 'bg-blue-600 text-white rounded-tr-sm' : 'bg-zinc-800/50 border border-zinc-700/50 text-zinc-300 rounded-tl-sm'}`}>
                    {msg.role === 'user' ? (
                      msg.text
                    ) : (
                      <div className="flex flex-col gap-2">
                        <div className="text-sm [&>p]:mb-2 [&>p:last-child]:mb-0 [&>ul]:list-disc [&>ul]:pl-5 [&>ul]:mb-2 [&>ol]:list-decimal [&>ol]:pl-5 [&>ol]:mb-2 [&_strong]:font-semibold [&_strong]:text-zinc-100 [&_a]:text-blue-400 [&_a]:underline">
                          <Markdown>{msg.text}</Markdown>
                        </div>
                        <div className="flex items-center gap-2 mt-1 pt-2 border-t border-zinc-700/50">
                          <button 
                            onClick={() => handleFeedback(msg.id, 'up')}
                            className={`p-1 rounded hover:bg-zinc-700 transition-colors ${msg.feedback === 'up' ? 'text-green-400' : 'text-zinc-500 hover:text-zinc-300'}`}
                            title="Helpful"
                          >
                            <ThumbsUp className="w-3.5 h-3.5" />
                          </button>
                          <button 
                            onClick={() => handleFeedback(msg.id, 'down')}
                            className={`p-1 rounded hover:bg-zinc-700 transition-colors ${msg.feedback === 'down' ? 'text-red-400' : 'text-zinc-500 hover:text-zinc-300'}`}
                            title="Not helpful"
                          >
                            <ThumbsDown className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex gap-3">
                  <div className="shrink-0 w-8 h-8 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center">
                    <Bot className="w-4 h-4 text-blue-400" />
                  </div>
                  <div className="bg-zinc-800/50 border border-zinc-700/50 rounded-2xl rounded-tl-sm px-4 py-3 flex items-center gap-2">
                    <Loader2 className="w-4 h-4 text-blue-400 animate-spin" />
                    <span className="text-xs text-zinc-400">Thinking...</span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Example Prompts */}
            {messages.length === 1 && (
              <div className="px-4 pb-3 flex flex-wrap gap-2">
                {EXAMPLE_PROMPTS.map((prompt, i) => (
                  <button
                    key={i}
                    onClick={() => handleSend(undefined, prompt)}
                    className="text-xs px-3 py-1.5 bg-zinc-800/80 hover:bg-zinc-700 text-zinc-300 rounded-full border border-zinc-700 transition-colors text-left"
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <form onSubmit={(e) => handleSend(e)} className="p-4 bg-zinc-950 border-t border-zinc-800 flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about my skills..."
                className="flex-1 bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-2 text-sm text-zinc-100 focus:border-blue-500 outline-none transition-all"
              />
              <button 
                type="submit"
                disabled={!input.trim() || isLoading}
                className="p-3 bg-blue-600 text-white rounded-xl hover:bg-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center shrink-0"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FAB */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 p-4 bg-blue-600 text-white rounded-full shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:bg-blue-500 transition-colors z-50 flex items-center justify-center"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </motion.button>
    </>
  );
}
