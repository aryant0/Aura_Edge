import { Card, CardContent } from "@/components/ui/card";
import { Twitter, Linkedin, Mail, Github } from "lucide-react";
import { motion } from "framer-motion";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
  skills: string[];
  social: {
    twitter?: string;
    linkedin?: string;
    github?: string;
    email?: string;
  };
}

export function Team() {
  const team: TeamMember[] = [
    {
      name: "Dakshraj Makne",
      role: "Founder and CEO",
      image: "https://i.pinimg.com/736x/94/9d/d0/949dd0870f2b70d82ed6d3dd86282dab.jpg",
      bio: "Leading the vision and strategy of AuraEdge with a passion for innovation and excellence.",
      skills: ["Leadership", "Strategy", "Business Development", "Innovation"],
      social: {
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
        email: "mailto:dakshraj@auraedgestudios.com"
      }
    },
    {
      name: "Mayank Birla",
      role: "Co-founder and CMO",
      image: "https://w0.peakpx.com/wallpaper/362/897/HD-wallpaper-anime-boy-aesthetic-aesthetic-anime-aesthetic-anime-boy-anime-aesthetic-anime-boy-cute-cute-anime-boy-sad-anime-boy.jpg",
      bio: "Driving marketing excellence and brand growth through innovative strategies and creative solutions.",
      skills: ["Marketing Strategy", "Brand Development", "Digital Marketing", "Business Growth"],
      social: {
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
        email: "mailto:mayank@auraedgestudios.com"
      }
    },
    {
      name: "Nikhil Rai",
      role: "Marketing Lead",
      image: "https://i.pinimg.com/736x/da/71/42/da7142ea61a029e3c93ad7e46946bcf1.jpg",
      bio: "Expert in developing and executing comprehensive marketing strategies to drive business growth.",
      skills: ["Marketing Strategy", "Campaign Management", "Analytics", "Content Marketing"],
      social: {
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
        email: "mailto:nikhil@auraedgestudios.com"
      }
    },
    {
      name: "Riddhi Yadav",
      role: "Graphic Designer",
      image: "https://media.craiyon.com/2025-04-07/S9QyJvP7Rya9oBiXmGXnNw.webp",
      bio: "Creating visually stunning designs that communicate brand messages effectively and creatively.",
      skills: ["Visual Design", "Brand Identity", "UI/UX", "Digital Art"],
      social: {
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
        email: "mailto:riddhi@auraedgestudios.com"
      }
    },
    {
      name: "Aryan Narayan Thakur",
      role: "Web Developer",
      image: "https://cdn.hero.page/pfp/505ada34-1363-4863-a9ae-e6f14fb20568-darkened-anime-character-pfp-dark-anime-male-pfp-3.png",
      bio: "Building innovative and responsive web solutions with cutting-edge technologies.",
      skills: ["Web Development", "Frontend", "Backend", "Full Stack"],
      social: {
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
        github: "https://github.com",
        email: "mailto:aryan@auraedgestudios.com"
      }
    },
    {
      name: "Kaushal Bharadwaj",
      role: "Video Editor",
      image: "https://cdn.hero.page/pfp/79d0745b-e690-4e20-9a78-5d31e8d380a3-male-anime-character-in-battle-mode-premium-anime-pfp-male-1.png",
      bio: "Crafting compelling visual stories through expert video editing and post-production.",
      skills: ["Video Editing", "Motion Graphics", "Post-Production", "Visual Effects"],
      social: {
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
        email: "mailto:kaushal@auraedgestudios.com"
      }
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="team" className="section-padding relative">
      <div className="container px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-medium uppercase tracking-wider text-aura-orange mb-2">Our Team</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight">
            Meet the Talent Behind Our Work
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Our diverse team of creative professionals brings together unique perspectives and specialized skills to deliver exceptional digital experiences.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {team.map((member, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <Card className="overflow-hidden group hover:border-aura-orange/50 transition-all duration-300 h-full">
                <div className="relative overflow-hidden">
                  <div 
                    className="aspect-[3/4] bg-cover bg-center w-full transition-all duration-700 group-hover:scale-105" 
                    style={{ backgroundImage: `url(${member.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end p-4">
                    <div className="w-full">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {member.skills.map((skill, i) => (
                          <span key={i} className="text-xs bg-black/40 text-white px-2 py-1 rounded-full backdrop-blur-sm">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-4">
                  <h3 className="font-bold text-lg group-hover:text-aura-orange transition-colors">{member.name}</h3>
                  <p className="text-sm text-aura-orange mb-2">{member.role}</p>
                  <p className="text-sm text-muted-foreground mb-4">{member.bio}</p>
                  
                  <div className="flex space-x-3">
                    {member.social.twitter && (
                      <a
                        href={member.social.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full hover:bg-aura-orange/10 transition-colors"
                        aria-label={`${member.name}'s Twitter`}
                      >
                        <Twitter className="h-4 w-4 text-muted-foreground hover:text-aura-orange transition-colors" />
                      </a>
                    )}
                    {member.social.linkedin && (
                      <a
                        href={member.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full hover:bg-aura-orange/10 transition-colors"
                        aria-label={`${member.name}'s LinkedIn`}
                      >
                        <Linkedin className="h-4 w-4 text-muted-foreground hover:text-aura-orange transition-colors" />
                      </a>
                    )}
                    {member.social.github && (
                      <a
                        href={member.social.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full hover:bg-aura-orange/10 transition-colors"
                        aria-label={`${member.name}'s GitHub`}
                      >
                        <Github className="h-4 w-4 text-muted-foreground hover:text-aura-orange transition-colors" />
                      </a>
                    )}
                    {member.social.email && (
                      <a
                        href={member.social.email}
                        className="p-2 rounded-full hover:bg-aura-orange/10 transition-colors"
                        aria-label={`Email ${member.name}`}
                      >
                        <Mail className="h-4 w-4 text-muted-foreground hover:text-aura-orange transition-colors" />
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <p className="text-lg font-medium mb-4">
            Interested in joining our team?
          </p>
          <a 
            href="mailto:careers@auraedgestudios.com" 
            className="inline-block bg-aura-orange hover:bg-aura-orange/90 text-white px-6 py-3 rounded-md transition-all duration-300 hover:scale-105 hover:orange-glow"
          >
            View Open Positions
          </a>
        </motion.div>
      </div>
      
      {/* Background elements */}
      <div className="absolute -z-10 top-1/3 left-0 w-72 h-72 bg-aura-orange/5 rounded-full blur-3xl"></div>
      <div className="absolute -z-10 bottom-1/4 right-0 w-80 h-80 bg-aura-orange/5 rounded-full blur-3xl"></div>
    </section>
  );
}
