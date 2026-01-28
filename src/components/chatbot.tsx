"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Bot, User, Sparkles, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { sendChatMessage } from "@/app/actions/chat";

export function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<{ role: "user" | "model"; content: string }[]>([
        { role: "model", content: "Hey! I'm the Neural Stack AI. Ready to build something world-class? Ask me anything!" }
    ]);
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages]);

    const handleSend = async () => {
        if (!input.trim() || isLoading) return;

        const userMessage = { role: "user" as const, content: input };
        setMessages(prev => [...prev, userMessage]);
        setInput("");
        setIsLoading(true);

        const result = await sendChatMessage([...messages, userMessage]);

        if (result.error) {
            setMessages(prev => [...prev, { role: "model", content: `Error: ${result.error}` }]);
        } else if (result.content) {
            setMessages(prev => [...prev, { role: "model", content: result.content! }]);
        }

        setIsLoading(false);
    };

    return (
        <div className="fixed bottom-6 right-6 z-[100]">
            <AnimatePresence>
                {isOpen ? (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="mb-4 w-[380px] sm:w-[420px]"
                    >
                        <Card className="glass overflow-hidden border-primary/20 shadow-2xl flex flex-col h-[600px]">
                            {/* Header */}
                            <div className="bg-primary/10 p-4 border-b border-primary/10 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30">
                                        <Sparkles className="w-5 h-5 text-primary animate-pulse" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-sm">Neural Assistant</h3>
                                        <div className="flex items-center gap-1.5">
                                            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                            <span className="text-[10px] text-muted-foreground uppercase tracking-wider">Online</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-1">
                                    <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="h-8 w-8 text-muted-foreground hover:text-white">
                                        <Minus className="w-4 h-4" />
                                    </Button>
                                    <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="h-8 w-8 text-muted-foreground hover:text-white">
                                        <X className="w-4 h-4" />
                                    </Button>
                                </div>
                            </div>

                            {/* Messages */}
                            <div
                                ref={scrollRef}
                                className="flex-grow p-4 overflow-y-auto space-y-4 custom-scrollbar"
                            >
                                {messages.map((msg, i) => (
                                    <div
                                        key={i}
                                        className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                                    >
                                        <div className={`max-w-[85%] flex gap-3 ${msg.role === "user" ? "flex-row-reverse" : ""}`}>
                                            <div className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center border ${msg.role === "user"
                                                    ? "bg-primary/20 border-primary/30 text-primary"
                                                    : "bg-[#0A0E45]/80 border-primary/10 text-primary"
                                                }`}>
                                                {msg.role === "user" ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                                            </div>
                                            <div className={`p-3 rounded-2xl text-sm leading-relaxed ${msg.role === "user"
                                                    ? "bg-primary text-white rounded-tr-none"
                                                    : "glass rounded-tl-none border-primary/10"
                                                }`}>
                                                {msg.content}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                {isLoading && (
                                    <div className="flex justify-start">
                                        <div className="flex gap-3 max-w-[85%] items-end">
                                            <div className="w-8 h-8 rounded-full bg-[#0A0E45]/80 border border-primary/10 flex items-center justify-center text-primary">
                                                <Bot className="w-4 h-4" />
                                            </div>
                                            <div className="glass p-3 rounded-2xl rounded-tl-none border-primary/10 flex gap-1.5 items-center">
                                                <motion.span animate={{ opacity: [0.4, 1, 0.4] }} transition={{ repeat: Infinity, duration: 1 }} className="w-1.5 h-1.5 bg-primary rounded-full" />
                                                <motion.span animate={{ opacity: [0.4, 1, 0.4] }} transition={{ repeat: Infinity, duration: 1, delay: 0.2 }} className="w-1.5 h-1.5 bg-primary rounded-full" />
                                                <motion.span animate={{ opacity: [0.4, 1, 0.4] }} transition={{ repeat: Infinity, duration: 1, delay: 0.4 }} className="w-1.5 h-1.5 bg-primary rounded-full" />
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Input */}
                            <div className="p-4 bg-background/50 border-t border-primary/10">
                                <form
                                    onSubmit={(e) => { e.preventDefault(); handleSend(); }}
                                    className="relative flex items-center gap-2"
                                >
                                    <input
                                        value={input}
                                        onChange={(e) => setInput(e.target.value)}
                                        placeholder="Ask about Neural Stack..."
                                        className="flex-grow bg-[#0A0E45]/40 border border-primary/20 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all placeholder:text-muted-foreground w-full pr-12"
                                        disabled={isLoading}
                                    />
                                    <Button
                                        type="submit"
                                        disabled={isLoading || !input.trim()}
                                        size="icon"
                                        className="absolute right-1 w-9 h-9 rounded-lg"
                                    >
                                        <Send className="w-4 h-4" />
                                    </Button>
                                </form>
                                <p className="text-[9px] text-muted-foreground mt-3 text-center uppercase tracking-widest opacity-50">
                                    Powered by Gemini 2.0 & NotebookLM
                                </p>
                            </div>
                        </Card>
                    </motion.div>
                ) : (
                    <motion.button
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setIsOpen(true)}
                        className="w-16 h-16 rounded-full bg-primary text-white shadow-2xl flex items-center justify-center group relative border-4 border-[#0A0E45]/50 overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        <MessageSquare className="w-7 h-7" />
                        <Sparkles className="absolute -top-1 -right-1 w-4 h-4 text-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity animate-bounce" />
                    </motion.button>
                )}
            </AnimatePresence>
        </div>
    );
}
