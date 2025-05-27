import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedShapes } from "@/components/animated-shapes";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const packages = [
  {
    id: 1,
    title: "Starter Package",
    target: "New/small businesses",
    features: [
      "Logo design",
      "1-page responsive website",
      "Basic SEO setup",
      "1 round of revisions",
    ],
    buttonText: "Get Started",
    buttonLink: "/contact?package=starter",
  },
  {
    id: 2,
    title: "Growth Package",
    target: "Growing businesses",
    features: [
      "Multi-page website",
      "SEO optimization",
      "Social media setup",
      "Brand kit (logo + colors + fonts)",
      "2 rounds of revisions",
    ],
    buttonText: "Know More",
    buttonLink: "/contact?package=growth",
  },
  {
    id: 3,
    title: "Pro Package",
    target: "Established brands & enterprises",
    features: [
      "Custom CMS website",
      "Full SEO & analytics integration",
      "Social media management (1 month)",
      "Advanced brand kit",
      "Monthly report & consultation",
      "Unlimited revisions (for 30 days)",
    ],
    buttonText: "Book Consultation",
    buttonLink: "/contact?package=pro",
  },
];

export default function Packages() {
  const { ref: refSection1, isIntersecting: isSection1Visible } = useScrollReveal();

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-28 pb-16 md:pt-32 md:pb-20 relative overflow-hidden">
        <AnimatedShapes />
        <div className="container relative z-10 text-center">
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-4 text-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Our Packages
          </motion.h1>
          <motion.p
            className="text-lg text-muted-foreground mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Choose the plan that fits your growth.
          </motion.p>
        </div>
      </section>

      {/* Packages Grid */}
      <section
        ref={refSection1 as React.RefObject<HTMLDivElement>}
        className={`section-padding ${isSection1Visible ? "reveal active" : "reveal"}`}
      >
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 50 }}
                animate={isSection1Visible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: pkg.id * 0.1 }}
              >
                <Card className="h-full flex flex-col border border-border bg-card hover:shadow-lg transition-all duration-300">
                  <CardContent className="flex-grow p-6">
                    <h3 className="text-2xl font-bold font-heading mb-3 text-foreground">{pkg.title}</h3>
                    <p className="text-primary mb-4 font-medium">{pkg.target}</p>
                    
                    <ul className="space-y-3 text-muted-foreground">
                      {pkg.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500 shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <div className="p-6 pt-0">
                    <Button asChild className="w-full rounded-full">
                      <Link to={pkg.buttonLink}>{pkg.buttonText}</Link>
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Optional: Add FAQs Section Here */}

    </div>
  );
} 