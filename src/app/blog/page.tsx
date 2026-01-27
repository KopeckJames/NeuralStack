import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, ChevronRight, User } from "lucide-react";
import Link from "next/link";

const posts = [
    {
        title: "AI Implementation Best Practices for 2026",
        excerpt: "Moving from theory to production requires a rigorous approach to data, security, and model monitoring.",
        date: "Jan 25, 2026",
        author: "Neural Stack Team",
        category: "AI Strategy",
        slug: "ai-best-practices"
    },
    {
        title: "Why Next.js is the Standard for Modern Web Apps",
        excerpt: "Exploring the performance and developer experience benefits of the App Router and Server Components.",
        date: "Jan 20, 2026",
        author: "Neural Stack Team",
        category: "Web Dev",
        slug: "nextjs-standard"
    },
    {
        title: "The Austin Tech Landscape: A Hub for AI Innovation",
        excerpt: "How the local ecosystem is driving the next wave of specialized intelligence companies.",
        date: "Jan 15, 2026",
        author: "Neural Stack Team",
        category: "Industry",
        slug: "austin-tech-ai"
    }
];

export default function Blog() {
    return (
        <div className="container mx-auto px-4 pt-32 pb-24">
            <div className="max-w-4xl mx-auto text-center mb-24">
                <Badge variant="outline" className="mb-6">Our Blog</Badge>
                <h1 className="text-4xl md:text-6xl font-bold mb-8 italic">Neural Insights.</h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                    Thought leadership at the intersection of Artificial Intelligence and Web Engineering.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
                {posts.map((post) => (
                    <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                        <Card className="glass h-full border-primary/10 hover:border-primary/40 transition-all flex flex-col">
                            <CardHeader className="space-y-4">
                                <Badge variant="secondary" className="w-fit">{post.category}</Badge>
                                <CardTitle className="text-2xl font-bold group-hover:text-primary transition-colors">
                                    {post.title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="flex-grow flex flex-col justify-between">
                                <p className="text-muted-foreground mb-6 line-clamp-3">
                                    {post.excerpt}
                                </p>
                                <div className="flex items-center justify-between text-xs text-muted-foreground pt-4 border-t border-primary/10">
                                    <div className="flex items-center gap-2">
                                        <Calendar className="w-3 h-3" />
                                        {post.date}
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <User className="w-3 h-3" />
                                        {post.author}
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </Link>
                ))}
            </div>

            <div className="glass p-12 rounded-3xl text-center border-primary/20">
                <h2 className="text-2xl font-bold mb-6">Want more insights?</h2>
                <Button variant="outline" asChild>
                    <a href="#">Subscribe to our Newsletter</a>
                </Button>
            </div>
        </div>
    );
}
