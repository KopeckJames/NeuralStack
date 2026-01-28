import Link from "next/link";
import { Brain, Github, Linkedin, Twitter } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-background border-t">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-2">
                        <Link href="/" className="flex items-center gap-2 mb-4 group">
                            <img
                                src="/logotrans.png"
                                alt="Neural Stack Logo"
                                className="h-[60px] w-auto rounded-sm group-hover:scale-105 transition-transform duration-300"
                            />
                        </Link>
                        <p className="text-muted-foreground max-w-sm mb-6">
                            Specialized generalists bridging the gap between advanced AI/ML implementation and
                            top-tier full-stack web development for businesses in Austin and beyond.
                        </p>
                        <div className="flex gap-4">
                            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                <Twitter className="w-5 h-5" />
                            </Link>
                            <Link href="https://www.linkedin.com/company/neurstack" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                                <Linkedin className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                <Github className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h4 className="font-semibold mb-4">Navigation</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="/about" className="hover:text-primary">About Us</Link></li>
                            <li><Link href="/services" className="hover:text-primary">Services</Link></li>
                            <li><Link href="/portfolio" className="hover:text-primary">Portfolio</Link></li>
                            <li><Link href="/process" className="hover:text-primary">Our Process</Link></li>
                            <li><Link href="/blog" className="hover:text-primary">Blog</Link></li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h4 className="font-semibold mb-4">Resources</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="/resources" className="hover:text-primary">Case Studies</Link></li>
                            <li><Link href="/resources" className="hover:text-primary">AI Assessment</Link></li>
                            <li><Link href="/privacy" className="hover:text-primary">Privacy Policy</Link></li>
                            <li><Link href="/terms" className="hover:text-primary">Terms of Service</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
                    <p>© {new Date().getFullYear()} Neural Stack. All rights reserved.</p>
                    <p>Based in Austin, TX</p>
                </div>
            </div>
        </footer>
    );
}
