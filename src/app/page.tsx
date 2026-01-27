import Link from "next/link";
import { ArrowRight, Bot, Code, Cpu, Globe, Rocket, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <div className="flex flex-col gap-24 pb-24">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden min-h-[80vh] flex items-center">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-6 py-1 px-4 border-primary/50 text-white backdrop-blur-sm bg-primary/20">
              <Sparkles className="w-3.5 h-3.5 mr-2" />
              Intelligence Meets Implementation
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 text-white drop-shadow-2xl">
              Advanced AI Solutions + <br />
              <span className="text-secondary italic">Full-Stack Excellence</span>
            </h1>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed font-medium">
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
              <Button size="lg" variant="outline" className="h-12 px-8 text-base glass text-white border-white/20" asChild>
                <Link href="/portfolio">View Recent Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Brief */}
      <section className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col gap-12 text-center items-center">
            <div className="max-w-3xl space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold">Specialized Services</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                We don't just build websites; we build intelligent systems. Our dual expertise allows us
                to integrate AI directly into your business workflow.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full">
              <Card className="glass border-primary/10 overflow-hidden group/card">
                <CardContent className="pt-8 text-center flex flex-col items-center">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 overflow-hidden mb-6 border border-primary/20 group-hover/card:scale-110 transition-transform">
                    <img src="/nstack.png" alt="Scalable Infrastructure" className="w-full h-full object-cover" />
                  </div>
                  <h3 className="font-bold mb-3 text-lg">Scalable Infrastructure</h3>
                  <p className="text-sm text-muted-foreground">High-performance architecture designed for exponential growth.</p>
                </CardContent>
              </Card>
              <Card className="glass border-primary/10 overflow-hidden group/card">
                <CardContent className="pt-8 text-center flex flex-col items-center">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 overflow-hidden mb-6 border border-primary/20 group-hover/card:scale-110 transition-transform">
                    <img src="/aisol.png" alt="AI-Driven Solutions" className="w-full h-full object-cover" />
                  </div>
                  <h3 className="font-bold mb-3 text-lg">AI-Driven Solutions</h3>
                  <p className="text-sm text-muted-foreground">Advanced intelligence integrated into your core business logic.</p>
                </CardContent>
              </Card>
              <Card className="glass border-primary/10 overflow-hidden group/card">
                <CardContent className="pt-8 text-center flex flex-col items-center">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 overflow-hidden mb-6 border border-primary/20 group-hover/card:scale-110 transition-transform">
                    <img src="/sgrowth.png" alt="Secure Growth" className="w-full h-full object-cover" />
                  </div>
                  <h3 className="font-bold mb-3 text-lg">Secure Growth</h3>
                  <p className="text-sm text-muted-foreground">Fortified development ensuring safety and long-term reliability.</p>
                </CardContent>
              </Card>
            </div>
            <Button variant="outline" className="h-12 px-8 text-lg glass group" asChild>
              <Link href="/services">
                Explore All Services
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="py-24 border-y border-border/50">
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
                  <img
                    src="/cooforrent_screenshot.png"
                    alt="Cooforrent Workflow Automation"
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-primary/10 mix-blend-overlay pointer-events-none" />
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
                  <img
                    src="/velvet_screenshot.png"
                    alt="Velvet Water E-commerce"
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-accent/10 mix-blend-overlay pointer-events-none" />
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

      {/* Compliance & Security Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-primary/30 text-primary">Enterprise Standards</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Compliance & Security</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We build with a security-first mindset, ensuring your data remains protected and your
              operations stay compliant with global standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="glass border-primary/5 hover:border-primary/20 transition-all duration-300">
              <CardContent className="pt-8">
                <div className="w-20 h-20 rounded-2xl bg-white/5 p-3 mb-6 border border-white/10 mx-auto">
                  <img src="/hippa.png" alt="HIPAA Compliance" className="w-full h-full object-contain" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-center">HIPAA Compliance</h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    <span>Full BAA (Business Associate Agreement) management for health tech partners.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    <span>Strict administrative and physical safeguards for PHI (Protected Health Information).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    <span>Audit-ready logging and monitoring of all data access and model activity.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="glass border-primary/5 hover:border-primary/20 transition-all duration-300">
              <CardContent className="pt-8">
                <div className="w-20 h-20 rounded-2xl bg-white/5 p-3 mb-6 border border-white/10 mx-auto">
                  <img src="/DarkSecurity.png" alt="Advanced Data Security" className="w-full h-full object-contain" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-center">Advanced Data Security</h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                    <span><strong>AES-256 Encryption at Rest:</strong> Strongest military-grade standards for stored data.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                    <span><strong>TLS 1.3 in Transit:</strong> End-to-end encrypted communication for all API and data streams.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                    <span><strong>SOC 2 Readiness:</strong> Controls aligned with Trust Services Criteria for security and availability.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="glass border-primary/5 hover:border-primary/20 transition-all duration-300">
              <CardContent className="pt-8">
                <div className="w-20 h-20 rounded-2xl bg-white/5 p-3 mb-6 border border-white/10 mx-auto">
                  <img src="/patientprivacy.png" alt="Patient & Client Privacy" className="w-full h-full object-contain" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-center">Privacy & Control</h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    <span><strong>Data Minimization:</strong> We only process what is strictly necessary for your AI workflows.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    <span><strong>RBAC (Access Control):</strong> Granular permissions ensuring data is only visible to authorized eyes.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    <span><strong>De-identification:</strong> Advanced masking and tokenization for sensitive prompt data.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="container mx-auto px-4">
        <div className="bg-dark-flow p-12 md:p-24 rounded-3xl text-center relative overflow-hidden border border-white/10 shadow-3xl">
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">Ready to evolve your digital presence?</h2>
            <p className="text-xl text-blue-100 mb-12">
              Whether you need a specialized AI proof-of-concept or a full-scale web application,
              we're here to build it.
            </p>
            <Button size="lg" className="h-14 px-12 text-lg bg-secondary hover:bg-secondary/90 text-white" asChild>
              <Link href="/contact">Book a Discovery Call</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
