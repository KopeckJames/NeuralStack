"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Mail, Calendar, Linkedin, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { sendEmail } from "@/app/actions/contact";

export default function Contact() {
    const [pending, setPending] = useState(false);
    const [status, setStatus] = useState<{ success?: boolean; error?: string } | null>(null);

    async function handleSubmit(formData: FormData) {
        setPending(true);
        setStatus(null);

        const result = await sendEmail(formData);

        setPending(false);
        if (result.success) {
            setStatus({ success: true });
            // Optional: reset form if needed, but easier to just show success UI
        } else {
            setStatus({ error: result.error });
        }
    }

    return (
        <div className="container mx-auto px-4 pt-32 pb-24">
            <div className="max-w-5xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Header & Details */}
                    <div>
                        <Badge variant="outline" className="mb-6">Contact Us</Badge>
                        <h1 className="text-4xl md:text-6xl font-bold mb-8 italic">Let's Initiate a Connection.</h1>
                        <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
                            Have a project in mind or just want to explore how AI could transform your business?
                            Reach out and let's start a conversation.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                                    <Mail className="text-primary w-6 h-6" />
                                </div>
                                <div className="group">
                                    <p className="text-sm text-muted-foreground">Email</p>
                                    <a
                                        href="mailto:James@neurstack.com"
                                        className="font-semibold hover:text-primary transition-colors cursor-pointer"
                                    >
                                        James@neurstack.com
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                                    <Calendar className="text-primary w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground">Discovery Call</p>
                                    <a href="#" className="font-semibold text-primary hover:underline">Schedule on Google Calendar</a>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                                    <Linkedin className="text-primary w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground">LinkedIn</p>
                                    <a
                                        href="https://www.linkedin.com/company/neurstack"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="font-semibold hover:underline"
                                    >
                                        Neural Stack Austin
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="relative">
                        <Card className="glass relative z-10 border-primary/20 p-8">
                            {status?.success ? (
                                <div className="flex flex-col items-center justify-center py-12 text-center animate-in fade-in zoom-in duration-500">
                                    <div className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center mb-6 border-2 border-green-500/20">
                                        <CheckCircle2 className="w-10 h-10 text-green-500" />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                                    <p className="text-muted-foreground mb-8">
                                        Thank you for reaching out. We'll get back to you as soon as possible.
                                    </p>
                                    <Button variant="outline" onClick={() => setStatus(null)}>
                                        Send Another Message
                                    </Button>
                                </div>
                            ) : (
                                <form action={handleSubmit} className="space-y-6">
                                    {status?.error && (
                                        <div className="p-4 rounded-lg bg-destructive/10 border border-destructive/20 text-destructive text-sm flex items-center gap-3 mb-6">
                                            <AlertCircle className="w-5 h-5 flex-shrink-0" />
                                            {status.error}
                                        </div>
                                    )}
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium">First Name</label>
                                            <Input name="firstName" required placeholder="Jane" className="glass" disabled={pending} />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium">Last Name</label>
                                            <Input name="lastName" required placeholder="Doe" className="glass" disabled={pending} />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">Email Address</label>
                                        <Input name="email" type="email" required placeholder="jane@company.com" className="glass" disabled={pending} />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">How can we help?</label>
                                        <textarea
                                            name="message"
                                            required
                                            disabled={pending}
                                            className="flex min-h-[120px] w-full rounded-md border border-input bg-background/50 px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 glass"
                                            placeholder="Tell us about your project or inquiry..."
                                        ></textarea>
                                    </div>
                                    <Button type="submit" className="w-full h-12 group" disabled={pending}>
                                        {pending ? (
                                            "Sending..."
                                        ) : (
                                            <>
                                                Send Message
                                                <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                            </>
                                        )}
                                    </Button>
                                </form>
                            )}
                        </Card>
                        {/* Background blob */}
                        <div className="absolute -top-12 -right-12 w-64 h-64 bg-primary/20 rounded-full blur-[60px] opacity-30 pointer-events-none" />
                    </div>
                </div>
            </div>
        </div>
    );
}
