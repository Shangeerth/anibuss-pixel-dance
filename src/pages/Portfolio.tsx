import { useState } from "react";
import { ExternalLink, Github, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  
  const categories = ["All", "Web Design", "E-commerce", "Mobile App", "Branding"];
  
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      category: "E-commerce",
      description: "A modern e-commerce solution with advanced features and seamless user experience.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 2,
      title: "Creative Agency Website",
      category: "Web Design",
      description: "A stunning portfolio website showcasing creative work with smooth animations.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=800&q=80",
      tags: ["Next.js", "Tailwind CSS", "Framer Motion", "Vercel"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 3,
      title: "Fitness Mobile App",
      category: "Mobile App",
      description: "A comprehensive fitness tracking app with workout plans and progress monitoring.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80",
      tags: ["React Native", "Firebase", "Redux", "Expo"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 4,
      title: "Restaurant Brand Identity",
      category: "Branding",
      description: "Complete brand identity design including logo, colors, and marketing materials.",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80",
      tags: ["Adobe Illustrator", "Brand Strategy", "Print Design", "Digital Assets"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 5,
      title: "SaaS Dashboard",
      category: "Web Design",
      description: "An intuitive dashboard interface for a SaaS product with advanced analytics.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      tags: ["Vue.js", "D3.js", "TypeScript", "AWS"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 6,
      title: "Online Marketplace",
      category: "E-commerce",
      description: "A multi-vendor marketplace platform with advanced search and filtering.",
      image: "https://images.unsplash.com/photo-1556742111-a301076d9d18?auto=format&fit=crop&w=800&q=80",
      tags: ["Laravel", "MySQL", "PayPal", "AWS S3"],
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-poppins font-bold mb-6 animate-slide-up">
            Our Portfolio
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 font-roboto opacity-90">
            Showcasing our finest work and the innovative solutions we've crafted for our clients.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Filter className="w-5 h-5 text-primary mt-2 mr-2" />
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeFilter === category ? "default" : "outline"}
                className={`font-montserrat font-medium transition-all duration-300 ${
                  activeFilter === category 
                    ? "bg-gradient-primary text-white shadow-soft" 
                    : "hover:bg-primary/5 hover:text-primary"
                }`}
                onClick={() => setActiveFilter(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="pb-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-large transition-all duration-500 hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex space-x-4">
                      <Button
                        size="icon"
                        variant="secondary"
                        className="rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300"
                        style={{ transitionDelay: "100ms" }}
                      >
                        <ExternalLink className="w-5 h-5" />
                      </Button>
                      <Button
                        size="icon"
                        variant="secondary"
                        className="rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300"
                        style={{ transitionDelay: "200ms" }}
                      >
                        <Github className="w-5 h-5" />
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge
                      variant="secondary"
                      className="text-xs font-montserrat font-medium"
                    >
                      {project.category}
                    </Badge>
                  </div>
                  
                  <h3 className="text-xl font-poppins font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground font-roboto text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-xs bg-neutral/50 text-neutral-foreground px-2 py-1 rounded-full font-montserrat"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-6">
            Let's Create Something Amazing
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Ready to bring your vision to life? We'd love to discuss your next project.
          </p>
          <Button
            size="lg"
            className="bg-gradient-primary text-white hover:opacity-90 font-montserrat font-semibold px-12 py-4 text-lg rounded-xl shadow-large transition-all duration-300 hover:scale-105"
          >
            Start Your Project
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;