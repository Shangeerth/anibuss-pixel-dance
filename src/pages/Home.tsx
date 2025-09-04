import { 
  ArrowRight, 
  Sparkles, 
  Rocket, 
  Zap, 
  Code, 
  Palette, 
  TrendingUp,
  Eye,
  Users,
  Star,
  Award,
  Target,
  CheckCircle
} from "lucide-react";
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

      {/* Services Preview Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-6">
              Our <span className="text-primary">Core Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive digital solutions to transform your business and drive growth.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: Code,
                title: "Web Development",
                description: "Custom websites and web applications built with cutting-edge technologies.",
                color: "bg-blue-500"
              },
              {
                icon: Palette,
                title: "Creative Design", 
                description: "Stunning visual designs that capture your brand essence and engage users.",
                color: "bg-purple-500"
              },
              {
                icon: TrendingUp,
                title: "Digital Marketing",
                description: "Strategic campaigns that drive traffic, generate leads, and grow revenue.",
                color: "bg-green-500"
              }
            ].map((service, index) => (
              <div
                key={index}
                className="group p-6 bg-card rounded-2xl shadow-soft hover:shadow-medium transition-all duration-500 hover:-translate-y-2 cursor-pointer"
              >
                <div className={`w-14 h-14 ${service.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-poppins font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground font-roboto text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <Link 
                  to="/services" 
                  className="text-primary hover:text-primary/80 font-montserrat font-medium text-sm transition-colors duration-300 inline-flex items-center group/link"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-1 transition-transform duration-300 group-hover/link:translate-x-1" />
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button
              size="lg"
              className="bg-gradient-primary text-white hover:opacity-90 font-montserrat font-semibold px-8 py-3 rounded-xl transition-all duration-300 hover:scale-105"
              asChild
            >
              <Link to="/services">
                View All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Portfolio Preview Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-6">
              Featured <span className="text-primary">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover some of our most successful digital transformations and creative solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: "E-Commerce Platform",
                category: "Web Development",
                image: "/placeholder.svg",
                description: "Modern online store with advanced features"
              },
              {
                title: "Brand Identity Design",
                category: "Creative Design",
                image: "/placeholder.svg", 
                description: "Complete rebranding for tech startup"
              },
              {
                title: "Mobile Banking App",
                category: "Mobile Development",
                image: "/placeholder.svg",
                description: "Secure and user-friendly banking solution"
              }
            ].map((project, index) => (
              <div
                key={index}
                className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-medium transition-all duration-500 hover:-translate-y-2"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex items-center justify-center">
                    <Eye className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <span className="text-primary font-montserrat font-medium text-sm">{project.category}</span>
                  <h3 className="text-xl font-poppins font-bold mt-2 mb-3">{project.title}</h3>
                  <p className="text-muted-foreground font-roboto text-sm">{project.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button
              size="lg"
              className="bg-gradient-primary text-white hover:opacity-90 font-montserrat font-semibold px-8 py-3 rounded-xl transition-all duration-300 hover:scale-105"
              asChild
            >
              <Link to="/portfolio">
                View Full Portfolio
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: "150+", label: "Projects Completed", icon: Award },
              { number: "98%", label: "Client Satisfaction", icon: Star },
              { number: "50+", label: "Happy Clients", icon: Users },
              { number: "5+", label: "Years Experience", icon: Target }
            ].map((stat, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-4xl font-poppins font-bold mb-2">{stat.number}</h3>
                <p className="text-white/90 font-roboto">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-6">
              What Our <span className="text-primary">Clients Say</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our satisfied clients have to say.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "CEO, TechStart Inc",
                quote: "Anibuss transformed our digital presence completely. Their team's creativity and technical expertise exceeded our expectations.",
                rating: 5
              },
              {
                name: "Michael Chen",
                role: "Founder, GreenLife",
                quote: "The mobile app they developed for us has increased our customer engagement by 300%. Outstanding work!",
                rating: 5
              },
              {
                name: "Emily Rodriguez",
                role: "Marketing Director, StyleCorp",
                quote: "Their digital marketing strategies helped us achieve a 250% increase in leads. Highly recommended!",
                rating: 5
              }
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground font-roboto italic mb-4 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div>
                  <h4 className="font-poppins font-bold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-6">
              Ready to Start Your <span className="text-primary">Digital Journey</span>?
            </h2>
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
              Let's collaborate to bring your vision to life. Whether you need a stunning website, 
              mobile app, or digital marketing strategy, we're here to make it happen.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button
                size="lg"
                className="bg-gradient-primary text-white hover:opacity-90 font-montserrat font-semibold px-8 py-4 text-lg rounded-xl shadow-large transition-all duration-300 hover:scale-105 group"
                asChild
              >
                <Link to="/contact">
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="font-montserrat font-semibold px-8 py-4 text-lg rounded-xl transition-all duration-300 hover:scale-105"
                asChild
              >
                <Link to="/about">
                  Learn More About Us
                </Link>
              </Button>
            </div>
            
            <div className="mt-8 flex items-center justify-center space-x-4 text-muted-foreground">
              <CheckCircle className="w-5 h-5 text-primary" />
              <span className="font-roboto">Free consultation</span>
              <CheckCircle className="w-5 h-5 text-primary" />
              <span className="font-roboto">No long-term contracts</span>
              <CheckCircle className="w-5 h-5 text-primary" />
              <span className="font-roboto">24/7 support</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;