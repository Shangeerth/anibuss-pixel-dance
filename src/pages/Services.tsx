import { useState } from "react";
import { Monitor, Smartphone, PaintBucket, Search, ShoppingCart, FileText, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

// Import preview images
import webDevPreview from "@/assets/web-development-preview.jpg";
import digitalMarketingPreview from "@/assets/digital-marketing-preview.jpg";
import uiuxDesignPreview from "@/assets/uiux-design-preview.jpg";
import seoOptimizationPreview from "@/assets/seo-optimization-preview.jpg";
import ecommercePreview from "@/assets/ecommerce-preview.jpg";
import contentManagementPreview from "@/assets/content-management-preview.jpg";

const Services = () => {
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  const heroRef = useScrollAnimation();
  const servicesRef = useScrollAnimation();
  const ctaRef = useScrollAnimation();

  const services = [
    {
      icon: Monitor,
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies",
      features: ["Responsive Design", "Fast Loading", "SEO Optimized", "Mobile First"],
      color: "from-blue-500 to-purple-600",
      image: webDevPreview,
      link: "https://example.com/web-development"
    },
    {
      icon: Smartphone,
      title: "Digital Marketing",
      description: "Comprehensive digital marketing strategies to grow your business",
      features: ["Social Media", "PPC Campaigns", "Content Marketing", "Analytics"],
      color: "from-purple-500 to-pink-600",
      image: digitalMarketingPreview,
      link: "https://example.com/digital-marketing"
    },
    {
      icon: PaintBucket,
      title: "UI/UX Design",
      description: "Beautiful and intuitive user interfaces that convert",
      features: ["User Research", "Wireframing", "Prototyping", "Testing"],
      color: "from-pink-500 to-red-600",
      image: uiuxDesignPreview,
      link: "https://example.com/uiux-design"
    },
    {
      icon: Search,
      title: "SEO Optimization",
      description: "Improve your search rankings and organic traffic",
      features: ["Keyword Research", "On-page SEO", "Link Building", "Analytics"],
      color: "from-green-500 to-teal-600",
      image: seoOptimizationPreview,
      link: "https://example.com/seo-optimization"
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Solutions",
      description: "Complete online stores with payment integration",
      features: ["Payment Gateway", "Inventory Management", "Order Tracking", "Analytics"],
      color: "from-orange-500 to-yellow-600",
      image: ecommercePreview,
      link: "https://example.com/ecommerce"
    },
    {
      icon: FileText,
      title: "Content Management",
      description: "Easy-to-use content management systems",
      features: ["User-friendly Admin", "Content Scheduling", "Multi-user Support", "SEO Tools"],
      color: "from-indigo-500 to-blue-600",
      image: contentManagementPreview,
      link: "https://example.com/content-management"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section ref={heroRef.ref} className={`pt-24 pb-16 px-6 transition-all duration-1000 ${heroRef.isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}>
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-poppins font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Our Services
          </h1>
          <p className="text-xl text-muted-foreground font-roboto max-w-3xl mx-auto">
            We provide comprehensive digital solutions to help your business thrive in the modern world
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section ref={servicesRef.ref} className={`py-16 px-6 transition-all duration-1000 delay-200 ${servicesRef.isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}>
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl overflow-hidden shadow-medium hover:shadow-large transition-all duration-500 group"
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
              >
                {/* Service Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center shadow-lg`}>
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-poppins font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground font-roboto mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature, featureIndex) => (
                        <span
                          key={featureIndex}
                          className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-montserrat font-medium"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <Button
                    onClick={() => window.open(service.link, '_blank')}
                    className="w-full bg-gradient-primary text-white hover:opacity-90 transition-all duration-300 btn-interactive hover:animate-glow font-montserrat font-semibold group"
                  >
                    <span className="flex items-center justify-center">
                      Learn More
                      <ExternalLink className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef.ref} className={`py-20 px-6 bg-gradient-primary transition-all duration-1000 delay-400 ${ctaRef.isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}>
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-6 text-white">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-white/90 font-roboto mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help transform your business with our expert services
          </p>
          <Button 
            className="bg-white text-primary hover:bg-white/90 font-montserrat font-semibold px-8 py-4 text-lg btn-interactive hover:animate-glow"
            onClick={() => window.scrollTo(0, 0)}
            asChild
          >
            <a href="/contact">Get Started Today</a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;