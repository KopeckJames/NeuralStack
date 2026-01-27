import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, FileText, CheckSquare, BarChart, ChevronRight } from "lucide-react";
import Link from "next/link";

const resources = [
    {
        title: "Free AI Readiness Assessment",
        description: "A comprehensive checklist to evaluate if your business processes are ready for AI integration.",
        icon: BarChart,
        action: "Start Assessment",
        link: "#",
    },
    {
        title: "Web Development Checklist",
        description: "Ensure your next project is built for performance, SEO, and scalability with our 50-point guide.",
        icon: CheckSquare,
        action: "Download PDF",
        link: "#",
    },
    {
        title: "AI Implementation Guide",
        description: "Our in-house methodology for taking ML models from R&D to production-ready API services.",
        icon: FileText,
        action: "Read Guide",
        link: "#",
    },
];

export default function Resources() {
    return (
        <div className="container mx-auto px-4 pt-32 pb-24">
            <div className="max-w-4xl mx-auto text-center mb-24">
                <Badge variant="outline" className="mb-6">Resources</Badge>
                <h1 className="text-4xl md:text-6xl font-bold mb-8">Empowering Your Growth.</h1>
                <p className="text-xl text-muted-foreground">
                    Downloadable guides, assessments, and checklists to help you navigate the digital landscape.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
                {resources.map((resource) => (
                    <Card key={resource.title} className="glass border-primary/10 hover:ring-1 ring-primary/30 transition-all flex flex-col">
                        <CardContent className="p-8 flex flex-col items-center text-center flex-grow">
                            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                                <resource.icon className="w-8 h-8 text-primary" />
                            </div>
                            <h2 className="text-2xl font-bold mb-4">{resource.title}</h2>
                            <p className="text-muted-foreground mb-8 flex-grow">
                                {resource.description}
                            </p>
                            <Button className="w-full group" asChild>
                                <Link href={resource.link}>
                                    {resource.action}
                                    {resource.action.includes("Download") ? (
                                        <Download className="ml-2 w-4 h-4" />
                                    ) : (
                                        <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    )}
                                </Link>
                            </Button>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <div className="max-w-3xl mx-auto glass p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-8 border-primary/20">
                <div className="text-center md:text-left">
                    <h3 className="text-xl font-bold mb-2">Need a custom strategy?</h3>
                    <p className="text-muted-foreground">Schedule a free 15-minute consultation with our lead engineer.</p>
                </div>
                <Button variant="secondary" asChild>
                    <Link href="/contact">Book Time Now</Link>
                </Button>
            </div>
        </div>
    );
}
