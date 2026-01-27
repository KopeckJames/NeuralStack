import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, ChevronRight, Laptop, LineChart, MessageSquare, Zap } from "lucide-react";
import Link from "next/link";

const services = [
    {
        title: "AI/ML Implementation",
        description: "Move beyond the hype with practical, ROI-driven AI solutions.",
        features: [
            "AI Strategy & Discovery",
            "Custom AI Proof of Concept",
            "Full LLM Integration",
            "Predictive Analytics Models",
            "Ongoing Optimization",
        ],
        icon: Zap,
        color: "text-primary",
    },
    {
        title: "Web Development",
        description: "Scalable, high-performance web applications built for the modern web.",
        features: [
            "Custom Next.js Applications",
            "Premium Landing Pages",
            "Interactive Dashboards",
            "API Development & Integration",
            "Performance Optimization",
        ],
        icon: Laptop,
        color: "text-accent",
    },
];

export default function Services() {
    return (
        <div className="container mx-auto px-4 pt-32 pb-24">
            <div className="max-w-4xl mx-auto text-center mb-24">
                <Badge variant="outline" className="mb-6">Our Expertise</Badge>
                <h1 className="text-4xl md:text-6xl font-bold mb-8">Full-Spectrum Digital Intelligence</h1>
                <p className="text-xl text-muted-foreground">
                    We provide the technical foundation your business needs to excel in an AI-first economy.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
                {services.map((service) => (
                    <Card key={service.title} className="glass border-primary/10 hover:border-primary/30 transition-all flex flex-col">
                        <CardHeader>
                            <div className="p-3 bg-primary/10 w-fit rounded-xl mb-6">
                                <service.icon className={`w-8 h-8 ${service.color}`} />
                            </div>
                            <CardTitle className="text-3xl font-bold mb-4">{service.title}</CardTitle>
                            <p className="text-muted-foreground text-lg">{service.description}</p>
                        </CardHeader>
                        <CardContent className="flex-grow">
                            <ul className="space-y-4">
                                {service.features.map((feature) => (
                                    <li key={feature} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* Process Teaser */}
            <div className="glass p-12 rounded-3xl text-center border-primary/20">
                <h2 className="text-3xl font-bold mb-6">Built with Rigor, Delivered with Care</h2>
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                    Our methodology ensures that every project — whether a simple landing page or a
                    complex ML model — is built on a foundation of engineering excellence.
                </p>
                <Link href="/process" className="text-primary font-bold inline-flex items-center group">
                    See Our Full Process <ChevronRight className="ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
            </div>
        </div>
    );
}
