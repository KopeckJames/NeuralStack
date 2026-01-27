import Link from "next/link";
import { ArrowRight, Bot, Code, Cpu, Globe, Rocket, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <div className="flex flex-col gap-24 pb-24">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-6 py-1 px-4 border-primary/50 text-primary backdrop-blur-sm">
              <Sparkles className="w-3.5 h-3.5 mr-2" />
              Intelligence Meets Implementation
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/70">
              Advanced AI Solutions + <br />
              <span className="text-primary italic">Full-Stack Excellence</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              We bridge the gap between cutting-edge Machine Learning and production-ready Web Development.
              Neural Stack helps Austin's most ambitious businesses build what's next.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="h-12 px-8 text-base group" asChild>
                <Link href="/contact">
                  Start Your Project
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="h-12 px-8 text-base glass" asChild>
                <Link href="/portfolio">View Recent Work</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Animated Background Element */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] opacity-20 pointer-events-none animate-pulse" />
      </section>

      {/* Services Brief */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl font-bold">Specialized Services</h2>
            <p className="text-muted-foreground text-lg">
              We don't just build websites; we build intelligent systems. Our dual expertise allows us
              to integrate AI directly into your business workflow.
            </p>
            <Button variant="link" className="w-fit p-0 h-auto text-primary" asChild>
              <Link href="/services" className="flex items-center">
                Explore all services <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Card className="glass border-primary/10">
              <CardContent className="pt-6">
                <Bot className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-bold mb-2">AI/ML Strategy</h3>
                <p className="text-sm text-muted-foreground">From discovery to implementation, we guide your AI journey.</p>
              </CardContent>
            </Card>
            <Card className="glass border-primary/10">
              <CardContent className="pt-6">
                <Code className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-bold mb-2">Full-Stack Dev</h3>
                <p className="text-sm text-muted-foreground">Premium React/Next.js applications built for scale.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="bg-secondary/30 py-24 border-y border-border/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
            <div>
              <h2 className="text-4xl font-bold mb-4">Featured Work</h2>
              <p className="text-muted-foreground max-w-xl">
                Real-world impact delivered through custom intelligence and seamless engineering.
              </p>
            </div>
            <Button variant="outline" asChild>
              <Link href="/portfolio">Full Portfolio</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Cooforrent */}
            <Link href="/portfolio/cooforrent" className="group">
              <Card className="overflow-hidden border-none glass hover:ring-1 ring-primary/50 transition-all">
                <div className="aspect-video bg-muted relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center p-12">
                    <div className="text-center group-hover:scale-105 transition-transform duration-500">
                      <Cpu className="w-16 h-16 text-primary mx-auto mb-4 opacity-50" />
                      <h3 className="text-2xl font-bold">Cooforrent</h3>
                      <p className="text-sm text-muted-foreground">B2B Professional Services Platform</p>
                    </div>
                  </div>
                </div>
                <CardContent className="p-8">
                  <div className="flex gap-2 mb-4">
                    <Badge variant="secondary">Enterprise</Badge>
                    <Badge variant="secondary">AI Integration</Badge>
                  </div>
                  <h4 className="text-xl font-bold mb-2">Workflow Automation Engine</h4>
                  <p className="text-muted-foreground line-clamp-2">
                    Custom AI implementation that reduced manual processing time by 80% for
                    professional service providers.
                  </p>
                </CardContent>
              </Card>
            </Link>

            {/* Velvet Water */}
            <Link href="/portfolio/velvet-water" className="group">
              <Card className="overflow-hidden border-none glass hover:ring-1 ring-primary/50 transition-all">
                <div className="aspect-video bg-muted relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center p-12">
                    <div className="text-center group-hover:scale-105 transition-transform duration-500">
                      <Globe className="w-16 h-16 text-accent mx-auto mb-4 opacity-50" />
                      <h3 className="text-2xl font-bold">Velvet Water</h3>
                      <p className="text-sm text-muted-foreground">B2C Home Services E-commerce</p>
                    </div>
                  </div>
                </div>
                <CardContent className="p-8">
                  <div className="flex gap-2 mb-4">
                    <Badge variant="secondary">E-commerce</Badge>
                    <Badge variant="secondary">Conversion Plus</Badge>
                  </div>
                  <h4 className="text-xl font-bold mb-2">Premium Digital Showroom</h4>
                  <p className="text-muted-foreground line-clamp-2">
                    High-performance web application designed to capture luxury leads and
                    streamline booking for home services.
                  </p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="container mx-auto px-4">
        <div className="glass p-12 md:p-24 rounded-3xl text-center relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to evolve your digital presence?</h2>
            <p className="text-xl text-muted-foreground mb-12">
              Whether you need a specialized AI proof-of-concept or a full-scale web application,
              we're here to build it.
            </p>
            <Button size="lg" className="h-14 px-12 text-lg" asChild>
              <Link href="/contact">Book a Discovery Call</Link>
            </Button>
          </div>
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-[80px]" />
        </div>
      </section>
    </div>
  );
}
