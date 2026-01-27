import { Badge } from "@/components/ui/badge";
import { Brain, Search, Layout, Rocket, ShieldCheck } from "lucide-react";

const steps = [
    {
        title: "Discovery & Consultation",
        description: "We dive deep into your business goals, technical hurdles, and AI readiness to identify the highest-impact opportunities.",
        icon: Search,
    },
    {
        title: "Planning & Strategy",
        description: "Detailed technical architecture and roadmap development. We define the AI models, tech stack, and success metrics.",
        icon: Brain,
    },
    {
        title: "Development & Implementation",
        description: "Iterative building phase where code meets intelligence. We handle everything from neural networks to the final pixel.",
        icon: Layout,
    },
    {
        title: "Testing & Launch",
        description: "Rigorous evaluation and production deployment. We ensure your system is performant, secure, and ready for real users.",
        icon: Rocket,
    },
    {
        title: "Support & Optimization",
        description: "The work doesn't end at launch. We provide ongoing monitoring, model updates, and performance tuning.",
        icon: ShieldCheck,
    },
];

export default function Process() {
    return (
        <div className="container mx-auto px-4 pt-32 pb-24">
            <div className="max-w-4xl mx-auto text-center mb-24">
                <Badge variant="outline" className="mb-6">Our Methodology</Badge>
                <h1 className="text-4xl md:text-6xl font-bold mb-8">A Systematic Approach to Innovation.</h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                    We combine the agility of a startup with the rigor of enterprise engineering to deliver
                    predictable excellence.
                </p>
            </div>

            <div className="max-w-3xl mx-auto relative">
                {/* Vertical Line */}
                <div className="absolute left-1/2 -translate-x-1/2 top-4 bottom-4 w-px bg-border hidden md:block" />

                <div className="space-y-16">
                    {steps.map((step, index) => (
                        <div key={step.title} className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                            {/* Point */}
                            <div className="absolute left-1/2 -translate-x-1/2 top-0 w-8 h-8 rounded-full bg-primary/20 border-border border flex items-center justify-center hidden md:flex z-10">
                                <div className="w-2 h-2 rounded-full bg-primary" />
                            </div>

                            <div className="flex-1">
                                <div className={`glass p-8 rounded-2xl border-primary/10 hover:border-primary/30 transition-all ${index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'}`}>
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="p-2 bg-primary/10 rounded-lg">
                                            <step.icon className="w-6 h-6 text-primary" />
                                        </div>
                                        <span className="text-primary font-bold">Step 0{index + 1}</span>
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                                    <p className="text-muted-foreground leading-relaxed italic">{step.description}</p>
                                </div>
                            </div>
                            <div className="hidden md:block flex-1" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
