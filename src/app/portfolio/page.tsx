import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Cpu, Globe, ArrowRight } from "lucide-react";
import Link from "next/link";

const projects = [
    {
        title: "Cooforrent",
        client: "B2B Professional Services",
        description: "Custom AI implementation that reduced manual processing time by 80% for professional service providers.",
        tags: ["Enterprise", "AI Integration", "Next.js"],
        icon: Cpu,
        color: "from-primary/20",
        slug: "cooforrent"
    },
    {
        title: "Velvet Water",
        client: "B2C Home Services",
        description: "High-performance web application designed to capture luxury leads and streamline booking for home services.",
        tags: ["E-commerce", "Conversion Plus", "UI/UX"],
        icon: Globe,
        color: "from-accent/20",
        slug: "velvet-water"
    }
];

export default function Portfolio() {
    return (
        <div className="container mx-auto px-4 pt-32 pb-24">
            <div className="max-w-4xl mx-auto text-center mb-24">
                <Badge variant="outline" className="mb-6">Our Portfolio</Badge>
                <h1 className="text-4xl md:text-6xl font-bold mb-8 italic">Engineering Impact.</h1>
                <p className="text-xl text-muted-foreground">
                    Explore how we've helped businesses leverage intelligent engineering to scale and succeed.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {projects.map((project) => (
                    <Link key={project.slug} href={`/portfolio/${project.slug}`} className="group">
                        <Card className="overflow-hidden border-none glass hover:ring-2 ring-primary/50 transition-all h-full flex flex-col">
                            <div className={`aspect-video bg-muted relative overflow-hidden bg-gradient-to-br ${project.color} to-transparent`}>
                                <div className="absolute inset-0 flex items-center justify-center p-12">
                                    <div className="text-center group-hover:scale-110 transition-transform duration-500">
                                        <project.icon className="w-20 h-20 text-foreground opacity-20 mx-auto mb-4" />
                                        <h3 className="text-3xl font-bold">{project.title}</h3>
                                    </div>
                                </div>
                            </div>
                            <CardContent className="p-8 flex-grow flex flex-col">
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.map(tag => (
                                        <Badge key={tag} variant="secondary">{tag}</Badge>
                                    ))}
                                </div>
                                <p className="text-sm text-primary font-semibold mb-2">{project.client}</p>
                                <p className="text-muted-foreground text-lg mb-8 line-clamp-3">
                                    {project.description}
                                </p>
                                <div className="mt-auto">
                                    <span className="inline-flex items-center text-primary font-bold">
                                        View Case Study <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </span>
                                </div>
                            </CardContent>
                        </Card>
                    </Link>
                ))}
            </div>

            <div className="mt-24 glass p-12 rounded-3xl text-center">
                <h2 className="text-3xl font-bold mb-6">Have a project in mind?</h2>
                <Button size="lg" asChild>
                    <Link href="/contact">Let's discuss your vision</Link>
                </Button>
            </div>
        </div>
    );
}
