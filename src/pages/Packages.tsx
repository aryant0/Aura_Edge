import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedShapes } from "@/components/animated-shapes";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { CheckCircle, XCircle } from "lucide-react"; // Added XCircle
import { motion } from "framer-motion";

// Social Media Packages
const packages = [
  {
    id: 1,
    title: "Launch Plan",
    target: "Perfect for businesses starting their social media journey",
    colorClass: "border-blue-500",
    buttonText: "Get Started",
    buttonLink: "/contact",
    features: [
      "2 Social Media Platforms",
      "18 Posts per Month",
      "Basic Content Strategy",
      "Hashtag Research",
      "Monthly Performance Report",
      "1 Revision Round"
    ]
  },
  {
    id: 2,
    title: "Grow Plan",
    target: "Ideal for businesses looking to expand their social presence",
    colorClass: "border-purple-500",
    buttonText: "Get Started",
    buttonLink: "/contact",
    features: [
      "3 Social Media Platforms",
      "22 Posts per Month",
      "Advanced Content Strategy",
      "Hashtag Research & Optimization",
      "Bi-weekly Performance Reports",
      "2 Revision Rounds",
      "Google My Business Management"
    ]
  },
  {
    id: 3,
    title: "Scale Plan",
    target: "For businesses ready to dominate their market",
    colorClass: "border-pink-500",
    buttonText: "Get Started",
    buttonLink: "/contact",
    features: [
      "3 Social Media Platforms",
      "30 Posts per Month",
      "Premium Content Strategy",
      "Advanced Hashtag Strategy",
      "Weekly Performance Reports",
      "Unlimited Revisions (30 days)",
      "Google My Business Management",
      "Meta Ads Management"
    ]
  }
];

// Web Development Packages
const webPackages = [
  {
    id: 1,
    title: "Basic Website",
    target: "Perfect for small businesses and startups",
    colorClass: "border-blue-500",
    buttonText: "Get Started",
    buttonLink: "/contact",
    features: [
      "Custom Website Design",
      "Mobile Responsive",
      "Basic SEO Setup",
      "Contact Form",
      "WhatsApp Integration",
      "6 Months Support"
    ]
  },
  {
    id: 2,
    title: "Professional Website",
    target: "Ideal for growing businesses",
    colorClass: "border-purple-500",
    buttonText: "Get Started",
    buttonLink: "/contact",
    features: [
      "Advanced Website Design",
      "Mobile Responsive",
      "Advanced SEO Setup",
      "Contact Form",
      "WhatsApp Integration",
      "Google Maps Integration",
      "Admin Panel",
      "6 Months Support"
    ]
  },
  {
    id: 3,
    title: "Enterprise Solution",
    target: "For businesses requiring full digital presence",
    colorClass: "border-pink-500",
    buttonText: "Get Started",
    buttonLink: "/contact",
    features: [
      "Premium Website Design",
      "Mobile Responsive",
      "Advanced SEO Setup",
      "Contact Form",
      "WhatsApp Integration",
      "Google Maps Integration",
      "Admin Panel",
      "Payment Gateway Integration",
      "Android App Development",
      "Play Store Publishing",
      "6 Months Support"
    ]
  }
];

// Feature comparison data
const featureComparison = {
  socialMedia: [
    {
      category: "Social Media Presence",
      features: [
        { name: "Platforms", launch: "2", grow: "Instagram & Facebook", scale: "3 (IG, FB, GMB)" },
        { name: "Posts/month", launch: "18", grow: "22", scale: "30" },
        { name: "Content Types", launch: "Reels, Carousels, Static", grow: "Reels, Carousels, Static", scale: "Reels, Carousels, Static, Stories" },
        { name: "Caption Strategy", launch: true, grow: true, scale: true },
        { name: "Hashtag Strategy", launch: true, grow: true, scale: true },
        { name: "Google My Business", launch: false, grow: true, scale: true },
      ]
    },
    {
      category: "Visual Content",
      features: [
        { name: "Custom Graphics", launch: "3", grow: "6", scale: "10" },
        { name: "Motion Graphics", launch: "1 Basic", grow: "3", scale: "4 Advanced" },
      ]
    },
    {
      category: "Ads & Analytics",
      features: [
        { name: "Ad Campaign Setup", launch: "1 Meta", grow: "Meta Ads", scale: "Meta Ads Management" },
        { name: "Ad Creative Design", launch: false, grow: false, scale: true },
        { name: "Performance Reports", launch: "Monthly", grow: "Bi-weekly", scale: "Weekly + Strategy" },
        { name: "Lead Capture Tools", launch: false, grow: true, scale: true },
      ]
    },
    {
      category: "Support",
      features: [
        { name: "Strategy Call", launch: true, grow: true, scale: true },
        { name: "Dedicated Support", launch: true, grow: true, scale: true },
        { name: "Revision Rounds", launch: "1", grow: "2", scale: "Unlimited (30 days)" },
      ]
    }
  ],
  webDevelopment: [
    {
      category: "Core Features",
      features: [
        { name: "Custom Website", launch: "Basic", grow: "Professional", scale: "Advanced" },
        { name: "Mobile Responsive", launch: true, grow: true, scale: true },
        { name: "SEO Setup", launch: "Basic", grow: "Optimized", scale: "Advanced" },
        { name: "Contact Form", launch: true, grow: true, scale: true },
      ]
    },
    {
      category: "Integration",
      features: [
        { name: "WhatsApp Integration", launch: true, grow: true, scale: true },
        { name: "Google Maps", launch: false, grow: true, scale: true },
        { name: "Admin Panel", launch: false, grow: true, scale: true },
        { name: "Payment Gateway", launch: false, grow: false, scale: true },
      ]
    },
    {
      category: "App Development",
      features: [
        { name: "Android App", launch: false, grow: false, scale: true },
        { name: "iOS App", launch: false, grow: false, scale: "Optional" },
        { name: "Play Store Publishing", launch: false, grow: false, scale: true },
      ]
    },
    {
      category: "Support",
      features: [
        { name: "Support Period", launch: "6 months", grow: "6 months", scale: "6 months" },
        { name: "Delivery Time", launch: "5 days", grow: "7-10 days", scale: "12-18 days" },
      ]
    }
  ]
};

export default function Packages() {
  const { ref: refSection1, isIntersecting: isSection1Visible } = useScrollReveal();
  const { ref: refSection2, isIntersecting: isSection2Visible } = useScrollReveal();
  const { ref: refSection3, isIntersecting: isSection3Visible } = useScrollReveal();
  const { ref: refSection4, isIntersecting: isSection4Visible } = useScrollReveal();

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-28 pb-16 md:pt-32 md:pb-20 relative overflow-hidden">
        <AnimatedShapes />
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6">
              Our <span className="text-gradient">Solutions</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Choose the perfect package for your business needs and take your digital presence to the next level.
            </p>
          </div>
        </div>
      </section>

      {/* Social Media Packages */}
      <section className="py-16 md:py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-title">Social Media Management</h2>
            <p className="section-subtitle">
              Comprehensive social media solutions to grow your online presence.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card key={index} className={`border-none shadow-md card-hover ${pkg.colorClass}`}>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-2 font-heading">{pkg.title}</h3>
                  <p className="text-muted-foreground mb-6">{pkg.target}</p>
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <div className="text-primary mt-1">✓</div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="w-full rounded-full">
                    <Link to={pkg.buttonLink}>{pkg.buttonText}</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media Feature Comparison */}
      <section
        ref={refSection3 as React.RefObject<HTMLDivElement>}
        className={`section-padding bg-gray-50 dark:bg-gray-800 ${isSection3Visible ? "reveal active" : "reveal"}`}
      >
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Social Media Plan Comparison</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="text-left p-4 border-b border-gray-200 dark:border-gray-700"></th>
                  <th className="text-center p-4 border-b border-gray-200 dark:border-gray-700">Launch Plan</th>
                  <th className="text-center p-4 border-b border-gray-200 dark:border-gray-700">Grow Plan</th>
                  <th className="text-center p-4 border-b border-gray-200 dark:border-gray-700">Scale Plan</th>
                </tr>
              </thead>
              <tbody>
                {featureComparison.socialMedia.map((category, catIndex) => (
                  <React.Fragment key={catIndex}>
                    <tr className="bg-gray-100 dark:bg-gray-900">
                      <th colSpan={4} className="text-left p-4 font-bold">{category.category}</th>
                    </tr>
                    {category.features.map((feature, featIndex) => (
                      <tr key={featIndex} className="border-b border-gray-200 dark:border-gray-700">
                        <td className="p-4 font-medium">{feature.name}</td>
                        <td className="text-center p-4">
                          {typeof feature.launch === 'boolean' ? (
                            feature.launch ? 
                              <CheckCircle className="h-5 w-5 text-green-500 mx-auto" /> : 
                              <XCircle className="h-5 w-5 text-red-500 mx-auto" />
                          ) : (
                            feature.launch
                          )}
                        </td>
                        <td className="text-center p-4">
                          {typeof feature.grow === 'boolean' ? (
                            feature.grow ? 
                              <CheckCircle className="h-5 w-5 text-green-500 mx-auto" /> : 
                              <XCircle className="h-5 w-5 text-red-500 mx-auto" />
                          ) : (
                            feature.grow
                          )}
                        </td>
                        <td className="text-center p-4">
                          {typeof feature.scale === 'boolean' ? (
                            feature.scale ? 
                              <CheckCircle className="h-5 w-5 text-green-500 mx-auto" /> : 
                              <XCircle className="h-5 w-5 text-red-500 mx-auto" />
                          ) : (
                            feature.scale
                          )}
                        </td>
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Web Development Packages */}
      <section className="py-16 md:py-20 bg-muted/50 backdrop-blur-xl">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-title">Web & App Development</h2>
            <p className="section-subtitle">
              Custom web and mobile solutions tailored to your business needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {webPackages.map((pkg, index) => (
              <Card key={index} className={`border-none shadow-md card-hover ${pkg.colorClass}`}>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-2 font-heading">{pkg.title}</h3>
                  <p className="text-muted-foreground mb-6">{pkg.target}</p>
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <div className="text-primary mt-1">✓</div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="w-full rounded-full">
                    <Link to={pkg.buttonLink}>{pkg.buttonText}</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Web Development Feature Comparison */}
      <section
        ref={refSection4 as React.RefObject<HTMLDivElement>}
        className={`section-padding bg-gray-50 dark:bg-gray-800 ${isSection4Visible ? "reveal active" : "reveal"}`}
      >
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Web Development Plan Comparison</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="text-left p-4 border-b border-gray-200 dark:border-gray-700"></th>
                  <th className="text-center p-4 border-b border-gray-200 dark:border-gray-700">Essential Web</th>
                  <th className="text-center p-4 border-b border-gray-200 dark:border-gray-700">Business Pro</th>
                  <th className="text-center p-4 border-b border-gray-200 dark:border-gray-700">Growth Suite</th>
                </tr>
              </thead>
              <tbody>
                {featureComparison.webDevelopment.map((category, catIndex) => (
                  <React.Fragment key={catIndex}>
                    <tr className="bg-gray-100 dark:bg-gray-900">
                      <th colSpan={4} className="text-left p-4 font-bold">{category.category}</th>
                    </tr>
                    {category.features.map((feature, featIndex) => (
                      <tr key={featIndex} className="border-b border-gray-200 dark:border-gray-700">
                        <td className="p-4 font-medium">{feature.name}</td>
                        <td className="text-center p-4">
                          {typeof feature.launch === 'boolean' ? (
                            feature.launch ? 
                              <CheckCircle className="h-5 w-5 text-green-500 mx-auto" /> : 
                              <XCircle className="h-5 w-5 text-red-500 mx-auto" />
                          ) : (
                            feature.launch
                          )}
                        </td>
                        <td className="text-center p-4">
                          {typeof feature.grow === 'boolean' ? (
                            feature.grow ? 
                              <CheckCircle className="h-5 w-5 text-green-500 mx-auto" /> : 
                              <XCircle className="h-5 w-5 text-red-500 mx-auto" />
                          ) : (
                            feature.grow
                          )}
                        </td>
                        <td className="text-center p-4">
                          {typeof feature.scale === 'boolean' ? (
                            feature.scale ? 
                              <CheckCircle className="h-5 w-5 text-green-500 mx-auto" /> : 
                              <XCircle className="h-5 w-5 text-red-500 mx-auto" />
                          ) : (
                            feature.scale
                          )}
                        </td>
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* All Plans Include Section */}
      <section className="section-padding bg-gray-50 dark:bg-gray-800">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">All Plans Include</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-4">
                <CheckCircle className="h-8 w-8 text-green-500 mx-auto mb-4" />
                <h3 className="font-bold mb-2">One-on-One Strategy Call</h3>
                <p className="text-muted-foreground">At onboarding to understand your business</p>
              </div>
              <div className="p-4">
                <CheckCircle className="h-8 w-8 text-green-500 mx-auto mb-4" />
                <h3 className="font-bold mb-2">Timely Content Delivery</h3>
                <p className="text-muted-foreground">Via Trello/Google Drive for your review</p>
              </div>
              <div className="p-4">
                <CheckCircle className="h-8 w-8 text-green-500 mx-auto mb-4" />
                <h3 className="font-bold mb-2">Dedicated Support</h3>
                <p className="text-muted-foreground">For content planning & queries</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container">
          <div className="bg-primary/10 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Grow Your Business?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contact us today for a personalized quote tailored to your specific needs
            </p>
            <Button asChild size="lg" className="rounded-full">
              <Link to="/contact">Get Your Custom Quote</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}