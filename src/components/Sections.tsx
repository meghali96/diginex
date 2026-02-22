import { useRef, useState } from "react";
import ScrollReveal from "./ScrollReveal";
import { Megaphone, Palette, Target, Gem, Globe, User, Camera, Monitor, Users, ChevronLeft, ChevronRight, X, Send, Briefcase, Upload } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import logoLight from "@/assets/logo-light.png";
import aboutTeam from "@/assets/about-team.jpg";
import heroBanner from "@/assets/hero-banner.jpg";

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

/* ─── Hero ─────────────────────────────────────────────────────────────── */

const HeroSection = () => (
  <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-16">
    {/* Hero banner background */}
    <img src={heroBanner} alt="" className="absolute inset-0 w-full h-full object-cover" />
    <div className="absolute inset-0 bg-background/80 dark:bg-background/70" />

    {/* Ambient orbs */}
    <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/10 blur-[120px] animate-orb" />
    <div className="absolute bottom-1/3 right-1/4 w-72 h-72 rounded-full bg-primary/8 blur-[100px] animate-orb" style={{ animationDelay: "3s" }} />

    <div className="container mx-auto px-4 md:px-8 relative z-10 py-12 md:py-0">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <ScrollReveal>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display leading-[0.95] mb-6 mt-12 md:mt-16 lg:mt-20">
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
              <a href="/DigiNex_Brochure.pdf" download className="px-7 py-3.5 rounded-lg bg-primary text-primary-foreground font-body font-semibold hover:bg-primary-deep transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-1">
                Download Brochure
              </a>
              <a href="#services" className="px-7 py-3.5 rounded-lg border-2 border-primary text-primary font-body font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:-translate-y-1">
                View Our Services
              </a>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={450}>
            <div className="flex gap-8 md:gap-12">
              {[{ num: "6+", label: "Core Services" }, { num: "8+", label: "Industries" }].map((s) => (
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

/* ─── About ────────────────────────────────────────────────────────────── */

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          <ScrollReveal>
            <div className="relative group">
              <div className="rounded-2xl overflow-hidden border-2 border-primary/30">
                <div className="relative overflow-hidden">
                  <img src={aboutTeam} alt="DigiNex Solutions team working together" className="w-full h-[400px] md:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                  <div className="absolute inset-0" style={{ backgroundColor: "rgba(0,0,0,0.25)" }} />
                  <div className="absolute inset-0 flex items-end translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]" style={{ backgroundColor: "rgba(0,0,0,0.82)" }}>
                    <div className="p-8">
                      <div className="w-12 h-1 bg-primary mb-4" />
                      <p className="text-white text-xl font-display">"Your growth is our real growth."</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Removed 100% Strategy-First and 5+ Cities Covered tags */}
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

        {/* Core Values — no logo background */}
        <div className="relative mb-20 py-16 rounded-3xl bg-card border border-border overflow-hidden">
          <ScrollReveal>
            <h3 className="text-3xl font-display text-center mb-10">Our Core Values</h3>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5 px-6 md:px-12 relative z-10">
            {["Trust & Transparency", "Strategy with Creativity", "Client-First Thinking", "Long-Term Partnerships", "Team Support & Coordination", "Continuous Learning & Improvement"].map((v, i) => (
              <ScrollReveal key={v} delay={i * 80}>
                <div className="flex items-center gap-3 p-5 rounded-xl bg-card border border-border hover:border-primary/40 hover:-translate-y-1 transition-all duration-300">
                  <div className="w-3 h-3 rounded-full bg-primary flex-shrink-0 shadow-lg shadow-primary/30" />
                  <span className="font-body text-sm font-medium">{v}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Industries We Serve — no logo background */}
        <div className="relative py-14 rounded-3xl bg-card border border-border overflow-hidden">
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

/* ─── Services with flip cards ─────────────────────────────────────────── */

const ServiceCard = ({ s, children }: { s: typeof services[0] | typeof additionalServices[0]; children?: React.ReactNode }) => {
  const icon = s.icon;
  const Icon = icon;
  const num = "num" in s ? (s as typeof services[0]).num : undefined;

  return (
    <div className="group [perspective:1000px] h-[260px] cursor-default">
      <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        {/* Front */}
        <div className="absolute inset-0 rounded-xl bg-card border border-border p-6 [backface-visibility:hidden] overflow-hidden">
          {/* Animated border glow on all 4 sides */}
          <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            style={{ boxShadow: "inset 0 0 0 2px hsl(27 76% 57%)" }} />
          <div className="flex items-start gap-4">
            {num && <span className="text-4xl font-display text-muted-foreground/30">{num}</span>}
            <Icon className="w-8 h-8 text-primary mt-1 flex-shrink-0" />
          </div>
          <h3 className="font-display text-xl mt-4 mb-2">{s.title}</h3>
          <p className="text-sm text-muted-foreground font-body line-clamp-3">{s.desc}</p>
        </div>

        {/* Back */}
        <div className="absolute inset-0 rounded-xl bg-primary p-6 [backface-visibility:hidden] [transform:rotateY(180deg)] flex flex-col justify-center items-center text-center overflow-hidden">
          {/* Animated border on all 4 sides */}
          <div className="absolute inset-0 rounded-xl" style={{ boxShadow: "inset 0 0 0 3px hsl(20 55% 41%)" }} />
          <Icon className="w-10 h-10 text-primary-foreground mb-4" />
          <h3 className="font-display text-xl text-primary-foreground mb-2">{s.title}</h3>
          <p className="text-sm text-primary-foreground/80 font-body">{s.desc}</p>
        </div>
      </div>
    </div>
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
            <ServiceCard s={s} />
          </ScrollReveal>
        ))}
      </div>
      <ScrollReveal delay={200}>
        <div className="grid md:grid-cols-3 gap-6">
          {additionalServices.map((s) => (
            <ScrollReveal key={s.title}>
              <ServiceCard s={s} />
            </ScrollReveal>
          ))}
        </div>
      </ScrollReveal>
    </div>
  </section>
);

/* ─── What Makes Us Different ──────────────────────────────────────────── */

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
              <div className="absolute inset-0" style={{ backgroundColor: "rgba(0,0,0,0.60)" }} />
              <div className="absolute bottom-0 left-0 right-0 p-4 z-10 transition-opacity duration-300 group-hover:opacity-0">
                <d.icon className="w-5 h-5 text-primary mb-1.5" />
                <h3 className="font-display text-base text-white">{d.title}</h3>
              </div>
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

/* ─── Careers ──────────────────────────────────────────────────────────── */

interface Role {
  title: string;
  img: string;
  badge: string;
  desc: string;
  responsibilities: string[];
  requirements: string[];
}

const roles: Role[] = [
  {
    title: "Graphic Designer",
    img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600",
    badge: "Creative",
    desc: "Craft stunning visuals, brand assets, and marketing creatives that stop the scroll and build brand identity.",
    responsibilities: [
      "Design social media posts, reels thumbnails & carousels",
      "Create brand identity assets — logos, colour palettes, typography",
      "Produce brochures, flyers, and offline marketing materials",
      "Collaborate with the content and strategy team on campaigns",
    ],
    requirements: [
      "Proficiency in Adobe Photoshop, Illustrator & Canva",
      "Strong portfolio showcasing creative and brand work",
      "Eye for detail, colour theory, and layout composition",
      "Ability to work on tight deadlines in a fast-paced environment",
    ],
  },
  {
    title: "Video Editor",
    img: "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=600",
    badge: "Creative",
    desc: "Edit reels, brand videos, and high-impact motion content that engage and convert audiences.",
    responsibilities: [
      "Edit short-form reels and long-form brand videos",
      "Add motion graphics, captions, and sound design",
      "Maintain brand consistency across all video outputs",
      "Coordinate with the creative team on visual direction",
    ],
    requirements: [
      "Experience with Premiere Pro, After Effects, or CapCut",
      "Strong sense of pacing, storytelling, and music sync",
      "Portfolio of edited reels or promotional videos",
      "Ability to deliver multiple edits per week",
    ],
  },
  {
    title: "Social Media Executive",
    img: "https://images.unsplash.com/photo-1563986768609-322da13575f2?w=600",
    badge: "Marketing",
    desc: "Plan, post, and grow brand presence across Instagram & Facebook for multiple clients.",
    responsibilities: [
      "Manage posting calendars for multiple client accounts",
      "Write captions, schedule posts, and handle community engagement",
      "Monitor analytics and prepare weekly performance reports",
      "Stay updated on social media trends and algorithm changes",
    ],
    requirements: [
      "Understanding of Instagram and Facebook algorithms",
      "Excellent written communication and copywriting skills",
      "Experience with scheduling tools (Buffer, Later, etc.)",
      "Analytical mindset with attention to performance metrics",
    ],
  },
  {
    title: "Ads Specialist",
    img: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=600",
    badge: "Performance",
    desc: "Run and optimize high-converting Meta ad campaigns focused on lead generation and sales.",
    responsibilities: [
      "Set up, manage, and optimize Meta (Facebook & Instagram) ad campaigns",
      "Conduct audience research and build targeted ad sets",
      "Prepare weekly ROI reports for client campaigns",
      "A/B test creatives, copies, and landing pages",
    ],
    requirements: [
      "Hands-on experience with Meta Ads Manager",
      "Understanding of pixel setup, retargeting, and lookalike audiences",
      "Analytical skills to interpret ad performance data",
      "Knowledge of lead generation and conversion funnels",
    ],
  },
  {
    title: "Content Writer",
    img: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=600",
    badge: "Content",
    desc: "Write compelling copy for social media, websites, and ads that converts readers into customers.",
    responsibilities: [
      "Write engaging captions, blog posts, and ad copy",
      "Develop website content and landing page copy",
      "Research industry trends to create relevant content",
      "Collaborate with designers on content-visual alignment",
    ],
    requirements: [
      "Excellent written English with strong storytelling ability",
      "Understanding of SEO best practices",
      "Experience writing for social media, blogs, or marketing",
      "Ability to adapt tone and voice for different brands",
    ],
  },
  {
    title: "Web Developer",
    img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600",
    badge: "Technical",
    desc: "Build modern, fast, mobile-responsive websites that drive credibility and conversions.",
    responsibilities: [
      "Design and develop responsive websites for clients",
      "Integrate forms, analytics, and third-party tools",
      "Optimize site speed and SEO technical foundations",
      "Maintain and update existing client websites",
    ],
    requirements: [
      "Proficiency in HTML, CSS, JavaScript, and React or WordPress",
      "Experience deploying and maintaining web projects",
      "Understanding of responsive design and cross-browser compatibility",
      "Portfolio of developed websites or web apps",
    ],
  },
];

const badgeColors: Record<string, string> = {
  Creative: "bg-purple-500",
  Marketing: "bg-blue-500",
  Performance: "bg-orange-500",
  Content: "bg-green-500",
  Technical: "bg-cyan-500",
};

interface ApplyModalProps {
  role: Role | null;
  onClose: () => void;
}

const ApplyModal = ({ role, onClose }: ApplyModalProps) => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", portfolio: "", message: "" });
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [submitted, setSubmitted] = useState(false);

  if (!role) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleResumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setResumeFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Job Application — ${role.title}`);
    const body = encodeURIComponent(
      `Role: ${role.title}\n\nName: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nPortfolio/LinkedIn: ${form.portfolio}\nResume: ${resumeFile ? resumeFile.name : "Not attached"}\n\nAbout Me:\n${form.message}`
    );
    window.open(`mailto:diginexsolutionsofficial11@gmail.com?subject=${subject}&body=${body}`, "_blank");
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-card border border-border shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 z-10 flex items-center justify-between p-6 border-b border-border bg-card rounded-t-2xl">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <Briefcase className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground font-body uppercase tracking-widest">Apply for</p>
              <h3 className="font-display text-xl">{role.title}</h3>
            </div>
          </div>
          <button onClick={onClose} className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center hover:bg-muted transition-colors">
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-6">
          {submitted ? (
            <div className="text-center py-10">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Send className="w-7 h-7 text-primary" />
              </div>
              <h4 className="font-display text-2xl mb-2">Application Sent!</h4>
              <p className="text-muted-foreground font-body text-sm">Your application for <strong>{role.title}</strong> has been prepared. We'll be in touch soon.</p>
              <button onClick={onClose} className="mt-6 px-6 py-2.5 rounded-lg bg-primary text-primary-foreground font-body font-semibold text-sm hover:bg-primary-deep transition-colors">
                Close
              </button>
            </div>
          ) : (
            <>
              <div className="mb-6 p-4 rounded-xl bg-secondary/60 border border-border">
                <p className="text-sm text-muted-foreground font-body mb-4">{role.desc}</p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs font-body font-semibold text-primary uppercase tracking-widest mb-2">Responsibilities</p>
                    <ul className="space-y-1">
                      {role.responsibilities.map((r) => (
                        <li key={r} className="flex items-start gap-2 text-xs font-body text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-body font-semibold text-primary uppercase tracking-widest mb-2">Requirements</p>
                    <ul className="space-y-1">
                      {role.requirements.map((r) => (
                        <li key={r} className="flex items-start gap-2 text-xs font-body text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-body font-semibold mb-1.5 text-foreground/80">Full Name *</label>
                    <input type="text" name="name" required maxLength={100} value={form.name} onChange={handleChange} placeholder="Your full name" className="w-full px-4 py-2.5 rounded-lg bg-secondary border border-border text-sm font-body focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" />
                  </div>
                  <div>
                    <label className="block text-xs font-body font-semibold mb-1.5 text-foreground/80">Email Address *</label>
                    <input type="email" name="email" required maxLength={255} value={form.email} onChange={handleChange} placeholder="your@email.com" className="w-full px-4 py-2.5 rounded-lg bg-secondary border border-border text-sm font-body focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-body font-semibold mb-1.5 text-foreground/80">Phone Number</label>
                    <input type="tel" name="phone" maxLength={15} value={form.phone} onChange={handleChange} placeholder="+91 9999999999" className="w-full px-4 py-2.5 rounded-lg bg-secondary border border-border text-sm font-body focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" />
                  </div>
                  <div>
                    <label className="block text-xs font-body font-semibold mb-1.5 text-foreground/80">Portfolio / LinkedIn URL</label>
                    <input type="url" name="portfolio" maxLength={500} value={form.portfolio} onChange={handleChange} placeholder="https://your-portfolio.com" className="w-full px-4 py-2.5 rounded-lg bg-secondary border border-border text-sm font-body focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" />
                  </div>
                </div>

                {/* Resume Upload */}
                <div>
                  <label className="block text-xs font-body font-semibold mb-1.5 text-foreground/80">Upload Resume</label>
                  <label className="flex items-center gap-3 w-full px-4 py-3 rounded-lg bg-secondary border-2 border-dashed border-border hover:border-primary/50 cursor-pointer transition-all">
                    <Upload className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm font-body text-muted-foreground truncate">
                      {resumeFile ? resumeFile.name : "Click to upload your resume (PDF, DOC)"}
                    </span>
                    <input type="file" accept=".pdf,.doc,.docx" onChange={handleResumeChange} className="hidden" />
                  </label>
                </div>

                <div>
                  <label className="block text-xs font-body font-semibold mb-1.5 text-foreground/80">Tell us about yourself *</label>
                  <textarea name="message" required maxLength={1000} rows={4} value={form.message} onChange={handleChange} placeholder="Why do you want to join DigiNex? Share your experience and what makes you a great fit..." className="w-full px-4 py-2.5 rounded-lg bg-secondary border border-border text-sm font-body focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none" />
                  <p className="text-xs text-muted-foreground font-body mt-1 text-right">{form.message.length}/1000</p>
                </div>
                <button type="submit" className="w-full py-3 rounded-lg bg-primary text-primary-foreground font-body font-semibold hover:bg-primary-deep transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 flex items-center justify-center gap-2">
                  <Send className="w-4 h-4" />
                  Submit Application
                </button>
                <p className="text-xs text-center text-muted-foreground font-body">
                  This will open your email client pre-filled with your application details.
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

const CareersSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [selectedRole, setSelectedRole] = useState<Role | null>(null);

  const scrollLeft = () => scrollRef.current?.scrollBy({ left: -320, behavior: "smooth" });
  const scrollRight = () => scrollRef.current?.scrollBy({ left: 320, behavior: "smooth" });

  return (
    <>
      <section id="careers" className="py-20 md:py-32 relative overflow-hidden">
        {/* Background — updated attractive image */}
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1600" alt="" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0" style={{ backgroundColor: "rgba(0,0,0,0.82)" }} />
        </div>

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="text-primary font-body font-semibold text-sm uppercase tracking-widest">Careers</span>
              <h2 className="text-4xl md:text-5xl font-display mt-2 text-white">Join DigiNex Solutions</h2>
              <p className="text-white/60 font-body mt-4 max-w-2xl mx-auto text-sm md:text-base">
                We are always looking for creative and ambitious individuals who want to grow in the digital marketing industry.
              </p>
              <div className="flex flex-wrap justify-center gap-3 mt-6">
                {["Supportive environment", "Real learning", "Multiple industries", "Creative projects"].map((p) => (
                  <span key={p} className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 text-white/70 text-xs font-body">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />{p}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <p className="text-center text-white/40 text-xs font-body mb-6 flex items-center justify-center gap-2">
              <span className="w-4 h-px bg-white/30" />
              Click on any role to apply
              <span className="w-4 h-px bg-white/30" />
            </p>
          </ScrollReveal>

          <div className="relative">
            <button onClick={scrollLeft} className="absolute -left-2 md:left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg hover:bg-primary-deep transition-colors">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button onClick={scrollRight} className="absolute -right-2 md:right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg hover:bg-primary-deep transition-colors">
              <ChevronRight className="w-5 h-5" />
            </button>

            <div
              ref={scrollRef}
              className="flex gap-5 overflow-x-auto pb-4 px-8 md:px-14 snap-x snap-mandatory"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {roles.map((r) => (
                <button
                  key={r.title}
                  onClick={() => setSelectedRole(r)}
                  className="group relative rounded-xl overflow-hidden min-w-[280px] md:min-w-[300px] h-[340px] flex-shrink-0 snap-center cursor-pointer text-left focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-black"
                >
                  <img src={r.img} alt={r.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.08]" loading="lazy" />
                  <div className="absolute inset-0" style={{ backgroundColor: "rgba(0,0,0,0.55)" }} />

                  <div className="absolute bottom-0 left-0 right-0 p-5 z-10 transition-all duration-300 group-hover:opacity-0">
                    <span className={`text-xs font-body font-semibold px-2.5 py-0.5 rounded ${badgeColors[r.badge] ?? "bg-primary"} text-white w-fit mb-2 inline-block`}>{r.badge}</span>
                    <h3 className="font-display text-lg text-white">{r.title}</h3>
                  </div>

                  <div className="absolute inset-0 flex flex-col justify-end p-5 z-20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]" style={{ backgroundColor: "rgba(13,13,13,0.95)" }}>
                    <div className="w-10 h-1 bg-primary mb-3" />
                    <span className={`text-xs font-body font-semibold px-2.5 py-0.5 rounded ${badgeColors[r.badge] ?? "bg-primary"} text-white w-fit mb-2`}>{r.badge}</span>
                    <h3 className="font-display text-lg text-white mb-1.5">{r.title}</h3>
                    <p className="text-xs font-body mb-4" style={{ color: "rgba(255,255,255,0.70)" }}>{r.desc}</p>
                    <div className="flex items-center gap-2 text-primary text-xs font-body font-semibold">
                      <Briefcase className="w-3.5 h-3.5" />
                      Click to Apply →
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <ScrollReveal delay={200}>
            <p className="text-center text-sm text-white/40 font-body mt-10">
              Or send your resume directly to{" "}
              <a href="mailto:diginexsolutionsofficial11@gmail.com" className="text-primary hover:underline">
                diginexsolutionsofficial11@gmail.com
              </a>
            </p>
          </ScrollReveal>
        </div>
      </section>

      {selectedRole && <ApplyModal role={selectedRole} onClose={() => setSelectedRole(null)} />}
    </>
  );
};

/* ─── Contact ──────────────────────────────────────────────────────────── */

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

/* ─── Footer ───────────────────────────────────────────────────────────── */

const Footer = () => {
  return (
    <footer className="py-10 border-t border-border">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <img src={logoLight} alt="DigiNex Solutions" className="h-10 md:h-12 w-auto object-contain" />
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
