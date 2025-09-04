import { useState } from "react";
import { 
  Code, 
  Palette, 
  TrendingUp, 
  Smartphone, 
  Search, 
  ShoppingCart,
  ArrowRight,
  CheckCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ServiceModal from "@/components/ServiceModal";

const Services = () => {
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const [selectedService, setSelectedService] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLearnMore = (service: any) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies for optimal performance.",
      features: ["Responsive Design", "Fast Loading", "SEO Optimized", "Secure & Reliable"],
      color: "bg-blue-500"
    },
    {
      icon: Palette,
      title: "Creative Design",
      description: "Stunning visual designs that capture your brand essence and engage your audience effectively.",
      features: ["Brand Identity", "UI/UX Design", "Graphics & Assets", "Print Design"],
      color: "bg-purple-500"
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      description: "Strategic marketing campaigns that drive traffic, generate leads, and grow your business.",
      features: ["Social Media", "Content Strategy", "PPC Campaigns", "Analytics & Insights"],
      color: "bg-green-500"
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Native and cross-platform mobile apps that deliver exceptional user experiences.",
      features: ["iOS & Android", "Cross-Platform", "App Store Optimization", "Maintenance & Support"],
      color: "bg-orange-500"
    },
    {
      icon: Search,
      title: "SEO Optimization",
      description: "Comprehensive SEO strategies to improve your search rankings and organic visibility.",
      features: ["Keyword Research", "On-Page SEO", "Technical SEO", "Local SEO"],
      color: "bg-indigo-500"
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Solutions",
      description: "Complete e-commerce platforms that drive sales and provide seamless shopping experiences.",
      features: ["Online Stores", "Payment Integration", "Inventory Management", "Order Processing"],
      color: "bg-pink-500"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-poppins font-bold mb-6 animate-slide-up">
            Our Services
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 font-roboto opacity-90">
            Comprehensive digital solutions tailored to elevate your business and drive growth.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`group relative p-8 bg-card rounded-2xl shadow-soft hover:shadow-large transition-all duration-500 cursor-pointer flex flex-col h-full ${
                  hoveredService === index ? "scale-105" : ""
                }`}
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
              >
                {/* Icon */}
                <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-poppins font-bold mb-4 text-foreground">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground font-roboto mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <div className="space-y-2 mb-6 flex-grow">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm">
                      <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Learn More Button */}
                <Button
                  variant="outline"
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 mt-auto"
                  onClick={() => handleLearnMore(service)}
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>

                {/* Hover Effect Background */}
                <div className={`absolute inset-0 bg-gradient-primary rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Let's discuss your project and create a custom solution that drives results for your business.
          </p>
          <Button
            size="lg"
            className="bg-gradient-primary text-white hover:opacity-90 font-montserrat font-semibold px-12 py-4 text-lg rounded-xl shadow-large transition-all duration-300 hover:scale-105"
            asChild
          >
            <Link to="/contact">
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Service Modal */}
      <ServiceModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        service={selectedService}
      />
    </div>
  );
};

export default Services;