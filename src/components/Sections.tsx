import { useRef } from "react";
import ScrollReveal from "./ScrollReveal";
import { Megaphone, Palette, Target, Gem, Globe, User, Camera, Monitor, Users, ChevronLeft, ChevronRight } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import logoWhite from "@/assets/logo-white.jpg";
import logoBlack from "@/assets/logo-black.jpg";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Careers", href: "#careers" },
  { label: "Contact", href: "#contact" },
];

const services = [
  { icon: Megaphone, num: "01", title: "Social Media Marketing", desc: "Complete Instagram and Facebook management including strategy, content planning, posting, engagement handling, and performance reporting." },
  { icon: Palette, num: "02", title: "Creative Content Creation", desc: "Reels, posters, carousels, storytelling content, and branded visuals designed to attract, engage, and convert." },
  { icon: Target, num: "03", title: "Meta Ads Campaigns", desc: "High-performance ad campaigns focused on lead generation and sales growth with proper targeting, budget management, and optimization." },
  { icon: Gem, num: "04", title: "Branding & Identity Design", desc: "Logo creation, brand colors, typography, brochures, and complete visual identity systems for a strong brand presence." },
  { icon: Globe, num: "05", title: "Website Design & Development", desc: "Modern, mobile-responsive, fast-loading websites built for credibility and conversions." },
  { icon: User, num: "06", title: "Personal Brand Management", desc: "Professional Instagram management for individuals, consultants, doctors, entrepreneurs, and public figures." },
];

const additionalServices = [
  { title: "Professional Photo & Video Shoots", icon: Camera, desc: "High-quality photography and videography for your brand, products, and marketing campaigns." },
  { title: "LED Display Advertising", icon: Monitor, desc: "Eye-catching LED billboard and display campaigns for maximum local visibility and impact." },
  { title: "Influencer Marketing Collaborations", icon: Users, desc: "Strategic influencer partnerships to amplify your brand reach and build authentic connections." },
];

const HeroSection = () => (
  <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-20">
    <div className="absolute inset-0 hero-grid" />
    <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/15 blur-[100px] animate-orb" />
    <div className="absolute bottom-1/3 right-1/4 w-48 h-48 rounded-full bg-primary/10 blur-[80px] animate-orb" style={{ animationDelay: "3s" }} />

    <div className="container mx-auto px-4 md:px-8 relative z-10 py-12 md:py-0">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <ScrollReveal>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display leading-[0.95] mb-6">
              Next-Gen{" "}
              <span className="text-stroke-orange">Strategies</span>
              <br />
              For Growth
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-8 font-body">
              We help businesses grow with smart strategy, creative content, and measurable digital marketing results that turn attention into real revenue.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={300}>
            <div className="flex flex-wrap gap-4 mb-10">
              <a href="#contact" className="px-7 py-3.5 rounded-lg bg-primary text-primary-foreground font-body font-semibold hover:bg-primary-deep transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-1">
                Book Free Consultation
              </a>
              <a href="#services" className="px-7 py-3.5 rounded-lg border-2 border-primary text-primary font-body font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:-translate-y-1">
                View Our Services
              </a>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={450}>
            <div className="flex gap-8 md:gap-12">
              {[{ num: "5+", label: "Cities" }, { num: "6", label: "Core Services" }, { num: "8+", label: "Industries" }].map((s) => (
                <div key={s.label}>
                  <div className="text-3xl md:text-4xl font-display text-primary">{s.num}</div>
                  <div className="text-sm text-muted-foreground font-body">{s.label}</div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>

        <div className="hidden lg:grid grid-cols-2 gap-4">
          {services.slice(0, 4).map((s, i) => (
            <ScrollReveal key={s.num} delay={200 + i * 100}>
              <div className="group p-5 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10 cursor-default">
                <s.icon className="w-8 h-8 text-primary mb-3" />
                <h3 className="text-sm font-display mb-1">{s.title}</h3>
                <p className="text-xs text-muted-foreground font-body line-clamp-2">{s.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const AboutSection = () => {
  const { theme } = useTheme();
  return (
  <section id="about" className="py-20 md:py-32 relative">
    <div className="container mx-auto px-4 md:px-8">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
        <ScrollReveal>
          <div className="relative group">
            <div className="rounded-2xl overflow-hidden border-2 border-primary/30">
              <div className="relative overflow-hidden">
                <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800" alt="Team working together" className="w-full h-[400px] md:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                {/* Permanent dark tint */}
                <div className="absolute inset-0" style={{ backgroundColor: "rgba(0,0,0,0.35)" }} />
                {/* Hover overlay — always black, slides up */}
                <div className="absolute inset-0 flex items-end translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]" style={{ backgroundColor: "rgba(0,0,0,0.82)" }}>
                  <div className="p-8">
                    <div className="w-12 h-1 bg-primary mb-4" />
                    <p className="text-white text-xl font-display">"Your growth is our real growth."</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -top-3 -right-3 bg-primary text-white px-4 py-2 rounded-lg text-xs font-body font-semibold shadow-lg animate-float z-10">100% Strategy-First</div>
            <div className="absolute -bottom-3 -left-3 bg-card text-card-foreground px-4 py-2 rounded-lg text-xs font-body font-semibold shadow-lg border border-border animate-float z-10" style={{ animationDelay: "2.5s" }}>5+ Cities Covered</div>
          </div>
        </ScrollReveal>

        <div>
          <ScrollReveal>
            <span className="text-primary font-body font-semibold text-sm uppercase tracking-widest">Who We Are</span>
            <h2 className="text-4xl md:text-5xl font-display mt-2 mb-6">Built for Real Business Growth</h2>
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <p className="text-muted-foreground font-body mb-6 leading-relaxed">
              DigiNex Solutions is a strategy-driven digital marketing agency focused on meaningful and measurable growth. We work as your extended marketing team, understanding your goals, analyzing your industry, and executing strategies that attract the right audience.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={250}>
            <blockquote className="border-l-4 border-primary pl-4 italic text-foreground/80 font-body mb-8">
              "We don't treat clients as accounts — we treat them as partners."
            </blockquote>
          </ScrollReveal>
          <ScrollReveal delay={350}>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-card border border-border">
                <h4 className="font-display text-lg text-primary mb-1">Our Mission</h4>
                <p className="text-xs text-muted-foreground font-body">To serve every client with equal dedication, delivering strategies that create sustainable, long-term growth.</p>
              </div>
              <div className="p-4 rounded-xl bg-card border border-border">
                <h4 className="font-display text-lg text-primary mb-1">Our Vision</h4>
                <p className="text-xs text-muted-foreground font-body">To become a trusted digital growth partner known for quality over quantity and impactful results.</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Core Values - redesigned with logo watermark */}
      <div className="relative mb-20 py-16 rounded-3xl bg-card border border-border overflow-hidden">
        <img src={theme === "dark" ? logoWhite : logoBlack} alt="" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[450px] opacity-[0.04] pointer-events-none select-none" />
        <ScrollReveal>
          <h3 className="text-3xl font-display text-center mb-10">Our Core Values</h3>
        </ScrollReveal>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 px-6 md:px-12 relative z-10">
          {["Trust & Transparency", "Strategy with Creativity", "Client-First Thinking", "Long-Term Partnerships", "Team Support & Coordination", "Continuous Learning & Improvement"].map((v, i) => (
            <ScrollReveal key={v} delay={i * 80}>
              <div className="flex items-center gap-3 p-5 rounded-xl bg-background/60 backdrop-blur-sm border border-border hover:border-primary/40 hover:-translate-y-1 transition-all duration-300">
                <div className="w-3 h-3 rounded-full bg-primary flex-shrink-0 shadow-lg shadow-primary/30" />
                <span className="font-body text-sm font-medium">{v}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Industries We Serve - redesigned with logo watermark */}
      <div className="relative py-14 rounded-3xl bg-card border border-border overflow-hidden">
        <img src={theme === "dark" ? logoWhite : logoBlack} alt="" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] md:w-[400px] opacity-[0.04] pointer-events-none select-none" />
        <ScrollReveal>
          <h3 className="text-2xl font-display text-center mb-6">Industries We Serve</h3>
          <div className="overflow-hidden py-4">
            <div className="animate-marquee flex gap-4 w-max">
              {["Healthcare", "Real Estate", "Restaurants", "Education", "Fashion", "Personal Branding", "Business Consultancies", "Hotels", "Small Businesses", "Healthcare", "Real Estate", "Restaurants", "Education", "Fashion", "Personal Branding", "Business Consultancies", "Hotels", "Small Businesses"].map((ind, i) => (
                <span key={`${ind}-${i}`} className="px-5 py-2 rounded-full border border-border bg-background/60 backdrop-blur-sm text-sm font-body whitespace-nowrap hover:border-primary hover:text-primary transition-colors">{ind}</span>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  </section>
  );
};

const ServicesSection = () => (
  <section id="services" className="py-20 md:py-32 bg-secondary/50">
    <div className="container mx-auto px-4 md:px-8">
      <ScrollReveal>
        <div className="text-center mb-14">
          <span className="text-primary font-body font-semibold text-sm uppercase tracking-widest">What We Do</span>
          <h2 className="text-4xl md:text-5xl font-display mt-2">Our Core Services</h2>
        </div>
      </ScrollReveal>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {services.map((s, i) => (
          <ScrollReveal key={s.num} delay={i * 100}>
            <div className="group relative p-6 rounded-xl bg-card border border-border overflow-hidden hover:-translate-y-2 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 cursor-default">
              <div className="absolute top-0 left-0 right-0 h-1 bg-primary origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              <div className="flex items-start gap-4">
                <span className="text-4xl font-display text-muted-foreground/30">{s.num}</span>
                <s.icon className="w-8 h-8 text-primary mt-1 flex-shrink-0" />
              </div>
              <h3 className="font-display text-xl mt-4 mb-2 group-hover:text-primary transition-colors duration-300">{s.title}</h3>
              <p className="text-sm text-muted-foreground font-body">{s.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
      <ScrollReveal delay={200}>
        <div className="grid md:grid-cols-3 gap-6">
          {additionalServices.map((s, i) => (
            <div key={s.title} className="group relative p-6 rounded-xl bg-card border border-border overflow-hidden hover:-translate-y-2 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 cursor-default">
              <div className="absolute top-0 left-0 right-0 h-1 bg-primary origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              <s.icon className="w-10 h-10 text-primary mb-4" />
              <h3 className="font-display text-xl mb-2 group-hover:text-primary transition-colors duration-300">{s.title}</h3>
              <p className="text-sm text-muted-foreground font-body">{s.desc}</p>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </div>
  </section>
);

const differentiators = [
  { title: "Strategy-First Approach", img: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600", desc: "Every campaign starts with deep research and a clear goal — no guesswork, no wasted budget.", icon: Target },
  { title: "Real Results, Not Vanity Metrics", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600", desc: "We measure what matters — leads, conversions, and revenue impact, not just likes and impressions.", icon: Target },
  { title: "Dedicated & Supportive Team", img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600", desc: "Your projects receive focused attention from specialists who genuinely care about your success.", icon: User },
  { title: "Transparent Reporting", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600", desc: "Clear, honest performance updates every step of the way — you always know where things stand.", icon: Globe },
  { title: "Personalized Attention", img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600", desc: "No cookie-cutter solutions. Every strategy is tailored to your unique business needs and goals.", icon: Gem },
  { title: "Strong Creative Planning", img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600", desc: "Creative direction and content planning that stops the scroll and builds lasting brand identity.", icon: Palette },
];

const DifferentSection = () => (
  <section className="py-20 md:py-32">
    <div className="container mx-auto px-4 md:px-8">
      <ScrollReveal>
        <div className="text-center mb-14">
          <span className="text-primary font-body font-semibold text-sm uppercase tracking-widest">Why Us</span>
          <h2 className="text-4xl md:text-5xl font-display mt-2">What Makes Us Different</h2>
        </div>
      </ScrollReveal>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {differentiators.map((d, i) => (
          <ScrollReveal key={d.title} delay={i * 100}>
            <div className="group relative rounded-xl overflow-hidden h-[240px] cursor-default">
              <img src={d.img} alt={d.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.08]" loading="lazy" />
              {/* Permanent black opacity overlay */}
              <div className="absolute inset-0" style={{ backgroundColor: "rgba(0,0,0,0.60)" }} />
              {/* Default state: title at bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-4 z-10 transition-opacity duration-300 group-hover:opacity-0">
                <d.icon className="w-5 h-5 text-primary mb-1.5" />
                <h3 className="font-display text-base text-white">{d.title}</h3>
              </div>
              {/* Hover overlay panel slides up */}
              <div className="absolute inset-0 flex flex-col justify-end p-5 z-20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]" style={{ backgroundColor: "rgba(0,0,0,0.88)" }}>
                <div className="w-10 h-1 bg-primary mb-3" />
                <d.icon className="w-5 h-5 text-primary mb-1.5" />
                <h3 className="font-display text-base text-white mb-1.5">{d.title}</h3>
                <p className="text-xs font-body" style={{ color: "rgba(255,255,255,0.75)" }}>{d.desc}</p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

const roles = [
  { title: "Graphic Designer", img: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=600", badge: "Creative", desc: "Craft stunning visuals, brand assets, and marketing creatives." },
  { title: "Video Editor", img: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600", badge: "Creative", desc: "Edit reels, brand videos, and high-impact motion content." },
  { title: "Social Media Executive", img: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600", badge: "Marketing", desc: "Plan, post, and grow brand presence across Instagram & Facebook." },
  { title: "Ads Specialist", img: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600", badge: "Performance", desc: "Run and optimize high-converting Meta ad campaigns." },
  { title: "Content Writer", img: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600", badge: "Content", desc: "Write compelling copy for social media, websites, and ads." },
  { title: "Web Developer", img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600", badge: "Technical", desc: "Build modern, fast, mobile-responsive websites." },
];

const CareersSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollLeft = () => scrollRef.current?.scrollBy({ left: -320, behavior: "smooth" });
  const scrollRight = () => scrollRef.current?.scrollBy({ left: 320, behavior: "smooth" });

  return (
  <section id="careers" className="py-20 md:py-32 relative overflow-hidden">
    {/* Banner with black opacity */}
    <div className="absolute inset-0 z-0">
      <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600" alt="" className="w-full h-full object-cover" loading="lazy" />
      <div className="absolute inset-0 bg-foreground/85" />
    </div>
    <div className="container mx-auto px-4 md:px-8 relative z-10">
      <ScrollReveal>
        <div className="text-center mb-12">
          <span className="text-primary font-body font-semibold text-sm uppercase tracking-widest">Careers</span>
          <h2 className="text-4xl md:text-5xl font-display mt-2 text-primary-foreground">Join DigiNex Solutions</h2>
          <p className="text-primary-foreground/70 font-body mt-4 max-w-2xl mx-auto">We are always looking for creative and ambitious individuals who want to grow in the digital marketing industry.</p>
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            {["Supportive environment", "Real learning", "Multiple industries", "Creative projects"].map((p) => (
              <span key={p} className="flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 text-primary-foreground/80 text-sm font-body">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />{p}
              </span>
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* Scrollable roles */}
      <div className="relative">
        <button onClick={scrollLeft} className="absolute -left-2 md:left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg hover:bg-primary-deep transition-colors">
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button onClick={scrollRight} className="absolute -right-2 md:right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg hover:bg-primary-deep transition-colors">
          <ChevronRight className="w-5 h-5" />
        </button>
        <div ref={scrollRef} className="flex gap-5 overflow-x-auto pb-4 px-8 md:px-14 snap-x snap-mandatory scrollbar-hide" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
          {roles.map((r) => (
            <div key={r.title} className="group relative rounded-xl overflow-hidden min-w-[280px] md:min-w-[300px] h-[320px] cursor-default flex-shrink-0 snap-center">
              <img src={r.img} alt={r.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.08]" loading="lazy" />
              {/* Permanent black overlay */}
              <div className="absolute inset-0" style={{ backgroundColor: "rgba(0,0,0,0.60)" }} />
              {/* Default: title/badge at bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-5 z-10 transition-opacity duration-300 group-hover:opacity-0">
                <span className="text-xs font-body font-semibold px-2 py-0.5 rounded bg-primary text-white w-fit mb-2 inline-block">{r.badge}</span>
                <h3 className="font-display text-lg text-white">{r.title}</h3>
              </div>
              {/* Hover overlay slides up */}
              <div className="absolute inset-0 flex flex-col justify-end p-5 z-20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]" style={{ backgroundColor: "rgba(13,13,13,0.92)" }}>
                <div className="w-10 h-1 bg-primary mb-3" />
                <span className="text-xs font-body font-semibold px-2 py-0.5 rounded bg-primary text-white w-fit mb-2">{r.badge}</span>
                <h3 className="font-display text-lg text-white mb-1">{r.title}</h3>
                <p className="text-xs font-body" style={{ color: "rgba(255,255,255,0.75)" }}>{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ScrollReveal delay={200}>
        <p className="text-center text-sm text-primary-foreground/60 font-body mt-8">Send your resume to{" "}<a href="mailto:diginexsolutionsofficial11@gmail.com" className="text-primary hover:underline">diginexsolutionsofficial11@gmail.com</a></p>
      </ScrollReveal>
    </div>
  </section>
  );
};

const ContactSection = () => (
  <section id="contact" className="py-20 md:py-32">
    <div className="container mx-auto px-4 md:px-8">
      <ScrollReveal>
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-display">Let's Grow Your Business Together</h2>
        </div>
      </ScrollReveal>
      <div className="grid lg:grid-cols-2 gap-12">
        <ScrollReveal>
          <div className="space-y-6">
            <div>
              <h3 className="font-display text-2xl mb-4">Get In Touch</h3>
              <div className="space-y-3 font-body text-sm">
                <p><span className="text-muted-foreground">Phone:</span>{" "}<a href="tel:9888959659" className="hover:text-primary transition-colors">9888959659</a></p>
                <p><span className="text-muted-foreground">Email:</span>{" "}<a href="mailto:diginexsolutionsofficial11@gmail.com" className="hover:text-primary transition-colors">diginexsolutionsofficial11@gmail.com</a></p>
                <p><span className="text-muted-foreground">Website:</span>{" "}<a href="https://diginexsolutionsofficial.in" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">diginexsolutionsofficial.in</a></p>
              </div>
            </div>
            <div>
              <h4 className="font-display text-lg mb-3">Our Locations</h4>
              <div className="flex flex-wrap gap-2">
                {["Vijayawada", "Hyderabad", "Bangalore", "Vizag", "Nandigama"].map((loc) => (
                  <span key={loc} className="px-4 py-1.5 rounded-full bg-card border border-border text-sm font-body">{loc}</span>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={150}>
          <form className="space-y-4 p-6 md:p-8 rounded-2xl bg-card border border-border" onSubmit={(e) => e.preventDefault()}>
            <div className="grid sm:grid-cols-2 gap-4">
              <input type="text" placeholder="Your Name" className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-sm font-body focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" />
              <input type="tel" placeholder="Phone Number" className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-sm font-body focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" />
            </div>
            <input type="text" placeholder="Business Type" className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-sm font-body focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" />
            <select className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-sm font-body text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all">
              <option value="">Select Service Required</option>
              {services.map((s) => <option key={s.num} value={s.title}>{s.title}</option>)}
            </select>
            <textarea placeholder="Your Message" rows={4} className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-sm font-body focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none" />
            <button type="submit" className="w-full py-3.5 rounded-lg bg-primary text-primary-foreground font-body font-semibold hover:bg-primary-deep transition-all duration-300 hover:shadow-lg hover:shadow-primary/25">
              Send Message
            </button>
          </form>
        </ScrollReveal>
      </div>
    </div>
  </section>
);

const Footer = () => {
  const { theme } = useTheme();
  return (
    <footer className="py-10 border-t border-border">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <img src={theme === "dark" ? logoWhite : logoBlack} alt="DigiNex Solutions" className="h-10 md:h-12 w-auto object-contain" />
          <div className="flex gap-6 text-sm font-body text-muted-foreground">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-primary transition-colors">{l.label}</a>
            ))}
          </div>
          <p className="text-xs text-muted-foreground font-body">© {new Date().getFullYear()} DigiNex Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export { HeroSection, AboutSection, ServicesSection, DifferentSection, CareersSection, ContactSection, Footer };
