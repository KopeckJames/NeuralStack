import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Code, MapPin, Users } from "lucide-react";

export default function About() {
    return (
        <div className="pt-32 pb-24">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <Badge variant="outline" className="mb-6">Our Story</Badge>
                    <h1 className="text-4xl md:text-6xl font-bold mb-8">Bridging the Gap Between AI Theory and Production Reality.</h1>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24 items-center">
                        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                            <p>
                                Neural Stack was founded on a simple realization: many agencies can build a website, and many
                                consultants can talk about AI, but very few can do both at a world-class level.
                            </p>
                            <p>
                                With a background in advanced Machine Learning and years of experience shipping high-scale
                                full-stack applications, we position ourselves as "specialized generalists."
                            </p>
                        </div>
                        <div className="relative aspect-video md:aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-primary/10">
                            <img src="/about.jpeg" alt="Neural Stack Brain Graphic" className="object-cover w-full h-full" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Methodology Section with Global Background */}
            <section className="py-24 my-24 border-y border-white/10">
                <div className="container mx-auto px-4 text-center">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-bold mb-12">The Neural Advantage</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                            <div className="flex flex-col items-center">
                                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-4 border-2 border-primary/20">
                                    <Brain className="w-10 h-10 text-primary" />
                                </div>
                                <h3 className="font-bold mb-2">Deep AI</h3>
                                <p className="text-sm text-muted-foreground">Advanced academic background combined with practical experience.</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-4 border-2 border-primary/20">
                                    <Code className="w-10 h-10 text-primary" />
                                </div>
                                <h3 className="font-bold mb-2">Full-Stack</h3>
                                <p className="text-sm text-muted-foreground">High-performance React/Next.js built for enterprise scale.</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-4 border-2 border-primary/20">
                                    <Users className="w-10 h-10 text-primary" />
                                </div>
                                <h3 className="font-bold mb-2">Partnership</h3>
                                <p className="text-sm text-muted-foreground">We aren't just vendors; we're your technical collaborators.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto flex flex-col items-center gap-8">
                    <div className="glass p-8 rounded-2xl border-primary/20 w-fit text-center">
                        <div className="flex flex-col items-center gap-6">
                            <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-primary/20 shadow-xl">
                                <img
                                    src="/me2.png"
                                    alt="Founder Portrait"
                                    className="object-cover w-full h-full"
                                />
                            </div>
                            <div>
                                <div className="flex items-center justify-center gap-4 mb-4">
                                    <MapPin className="text-primary w-6 h-6" />
                                    <h3 className="font-bold">Based in Austin, TX</h3>
                                </div>
                                <p className="italic text-muted-foreground max-w-md">
                                    "We're here to help Austin businesses navigate the AI revolution without the fluff. Real engineering, real results."
                                </p>
                            </div>
                        </div>
                    </div>
                    <Button size="lg" asChild>
                        <a href="/contact">Let's Build Something Great</a>
                    </Button>
                </div>
            </div>
        </div>
    );
}
