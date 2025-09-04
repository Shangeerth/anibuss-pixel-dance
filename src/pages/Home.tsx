import { ArrowRight, Sparkles, Rocket, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/10 rounded-full animate-float" />
          <div className="absolute top-3/4 right-1/4 w-32 h-32 bg-secondary/20 rounded-full animate-float" style={{ animationDelay: "1s" }} />
          <div className="absolute bottom-1/4 left-1/3 w-48 h-48 bg-primary/10 rounded-full animate-float" style={{ animationDelay: "2s" }} />
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="animate-slide-up">
            <div className="flex items-center justify-center mb-6">
              <Sparkles className="w-8 h-8 text-white mr-3 animate-pulse" />
              <span className="text-white/90 font-montserrat font-medium tracking-wide">
                Digital Innovation Starts Here
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-poppins font-bold text-white mb-6 leading-tight">
              We Create
              <br />
              <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-2xl inline-block mt-2">
                Digital Magic
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-10 font-roboto leading-relaxed">
              Transform your business with cutting-edge web solutions, creative design, 
              and digital marketing that drives real results. Let's build something extraordinary together.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 font-montserrat font-semibold px-8 py-4 text-lg rounded-xl shadow-large transition-all duration-300 hover:scale-105 group"
                asChild
              >
                <Link to="/portfolio">
                  View Our Work
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 font-montserrat font-semibold px-8 py-4 text-lg rounded-xl backdrop-blur-sm transition-all duration-300 hover:scale-105 group"
                asChild
              >
                <Link to="/services">
                  Our Services
                  <Rocket className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-6">
              Why Choose <span className="text-primary">Anibuss</span>?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We combine creativity, technology, and strategy to deliver exceptional digital experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: "Lightning Fast",
                description: "Optimized performance and blazing-fast load times for every project we deliver."
              },
              {
                icon: Sparkles,
                title: "Creative Excellence",
                description: "Stunning designs that capture attention and convert visitors into customers."
              },
              {
                icon: Rocket,
                title: "Results Driven",
                description: "Data-driven strategies that deliver measurable growth for your business."
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="group p-8 bg-card rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-poppins font-bold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground font-roboto leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;