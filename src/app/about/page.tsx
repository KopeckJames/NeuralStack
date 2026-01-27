import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Code, MapPin, Users } from "lucide-react";

export default function About() {
    return (
        <div className="container mx-auto px-4 pt-32 pb-24">
            <div className="max-w-4xl mx-auto">
                <Badge variant="outline" className="mb-6">Our Story</Badge>
                <h1 className="text-4xl md:text-6xl font-bold mb-8">Bridging the Gap Between AI Theory and Production Reality.</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
                    <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                        <p>
                            Neural Stack was founded on a simple realization: many agencies can build a website, and many
                            consultants can talk about AI, but very few can do both at a world-class level.
                        </p>
                        <p>
                            With a background in advanced Machine Learning and years of experience shipping high-scale
                            full-stack applications, we position ourselves as "specialized generalists." We understand
                            the neural networks under the hood as clearly as the CSS on the surface.
                        </p>
                    </div>
                    <div className="glass p-8 rounded-2xl border-primary/20 flex flex-col justify-center">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                                <MapPin className="text-primary w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-bold">Based in Austin, TX</h3>
                                <p className="text-sm text-muted-foreground">Serving global enterprise and local scale-ups.</p>
                            </div>
                        </div>
                        <p className="italic text-muted-foreground">
                            "We're here to help Austin businesses navigate the AI revolution without the fluff. Real engineering, real results."
                        </p>
                    </div>
                </div>

                <h2 className="text-3xl font-bold mb-12 text-center">Why Businesses Choose Neural Stack</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-24">
                    <Card className="glass">
                        <CardContent className="pt-6">
                            <Brain className="w-10 h-10 text-primary mb-4" />
                            <h3 className="text-xl font-bold mb-2">Deep AI Expertise</h3>
                            <p className="text-muted-foreground">Advanced academic background combined with practical implementation experience in LLMs and predictive modeling.</p>
                        </CardContent>
                    </Card>
                    <Card className="glass">
                        <CardContent className="pt-6">
                            <Code className="w-10 h-10 text-primary mb-4" />
                            <h3 className="text-xl font-bold mb-2">Full-Stack Precision</h3>
                            <p className="text-muted-foreground">We build pixel-perfect, high-performance web applications using the latest industry-standard tools like Next.js.</p>
                        </CardContent>
                    </Card>
                </div>

                <div className="text-center">
                    <Button size="lg" asChild>
                        <a href="/contact">Let's Build Something Great</a>
                    </Button>
                </div>
            </div>
        </div>
    );
}
