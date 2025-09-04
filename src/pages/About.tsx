import { Users, Award, Coffee, Heart, Linkedin, Twitter, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const About = () => {
  const stats = [
    { icon: Users, label: "Happy Clients", value: "150+" },
    { icon: Award, label: "Projects Completed", value: "300+" },
    { icon: Coffee, label: "Cups of Coffee", value: "2000+" },
    { icon: Heart, label: "Years of Passion", value: "5+" }
  ];

  const team = [
    {
      name: "Alex Johnson",
      role: "Creative Director",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
      bio: "Passionate about creating digital experiences that inspire and engage.",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    },
    {
      name: "Sarah Chen",
      role: "Lead Developer",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=400&q=80",
      bio: "Full-stack developer with expertise in modern web technologies.",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    },
    {
      name: "Mike Rodriguez",
      role: "UX Designer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
      bio: "Designing user-centered experiences that solve real problems.",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    },
    {
      name: "Emma Thompson",
      role: "Digital Strategist",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80",
      bio: "Data-driven marketing strategist focused on growth and engagement.",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-poppins font-bold mb-6 animate-slide-up">
            About Anibuss
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 font-roboto opacity-90">
            We're a passionate team of digital creators, innovators, and problem solvers dedicated to bringing your vision to life.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-8">
              Our Mission
            </h2>
            <p className="text-xl text-muted-foreground font-roboto leading-relaxed mb-12">
              At Anibuss, we believe in the power of digital transformation to revolutionize businesses 
              and create meaningful connections. Our mission is to craft exceptional digital experiences 
              that not only look stunning but also drive real business results. We combine creativity, 
              technology, and strategic thinking to help our clients stand out in the digital landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center group animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-poppins font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground font-roboto">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-6">
              Meet Our Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The creative minds behind Anibuss, bringing diverse skills and shared passion for excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card
                key={index}
                className="group p-6 text-center hover:shadow-large transition-all duration-500 hover:-translate-y-2 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                </div>

                <h3 className="text-xl font-poppins font-bold mb-2">{member.name}</h3>
                <p className="text-primary font-montserrat font-medium mb-4">{member.role}</p>
                <p className="text-muted-foreground text-sm font-roboto leading-relaxed mb-6">
                  {member.bio}
                </p>

                {/* Social Links */}
                <div className="flex justify-center space-x-3">
                  <Button
                    size="icon"
                    variant="outline"
                    className="w-8 h-8 rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    <Linkedin className="w-4 h-4" />
                  </Button>
                  <Button
                    size="icon"
                    variant="outline"
                    className="w-8 h-8 rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    <Twitter className="w-4 h-4" />
                  </Button>
                  <Button
                    size="icon"
                    variant="outline"
                    className="w-8 h-8 rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    <Github className="w-4 h-4" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-6">
              Our Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do at Anibuss.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Innovation First",
                description: "We constantly push boundaries and embrace new technologies to deliver cutting-edge solutions."
              },
              {
                title: "Client Success",
                description: "Your success is our success. We're committed to delivering results that exceed expectations."
              },
              {
                title: "Creative Excellence",
                description: "Every project is an opportunity to create something beautiful, functional, and impactful."
              }
            ].map((value, index) => (
              <div
                key={index}
                className="text-center p-6 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="text-2xl font-poppins font-bold mb-4 text-primary">
                  {value.title}
                </h3>
                <p className="text-muted-foreground font-roboto leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;