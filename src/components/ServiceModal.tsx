import { X, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: {
    icon: any;
    title: string;
    description: string;
    features: string[];
    color: string;
    fullDescription?: string;
    benefits?: string[];
    process?: string[];
  } | null;
}

const ServiceModal = ({ isOpen, onClose, service }: ServiceModalProps) => {
  if (!isOpen || !service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
      <div className="bg-card rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-large animate-scale-in">
        {/* Header */}
        <div className="relative p-8 bg-gradient-primary text-white rounded-t-2xl">
          <Button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 bg-white/20 hover:bg-white/30 rounded-full p-0 transition-all duration-300"
          >
            <X className="w-4 h-4" />
          </Button>
          
          <div className="flex items-center mb-4">
            <div className={`w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mr-4`}>
              <service.icon className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-poppins font-bold">{service.title}</h2>
          </div>
          
          <p className="text-white/90 font-roboto text-lg leading-relaxed">
            {service.description}
          </p>
        </div>

        {/* Content */}
        <div className="p-8 space-y-8">
          {/* Full Description */}
          <div>
            <h3 className="text-2xl font-poppins font-bold mb-4 text-foreground">Overview</h3>
            <p className="text-muted-foreground font-roboto leading-relaxed">
              {service.fullDescription || `Our ${service.title.toLowerCase()} service provides comprehensive solutions tailored to your specific needs. We leverage cutting-edge technology and proven methodologies to deliver exceptional results that drive your business forward.`}
            </p>
          </div>

          {/* Features */}
          <div>
            <h3 className="text-2xl font-poppins font-bold mb-4 text-foreground">What's Included</h3>
            <div className="grid md:grid-cols-2 gap-3">
              {service.features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                  <span className="text-muted-foreground font-roboto">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div>
            <h3 className="text-2xl font-poppins font-bold mb-4 text-foreground">Key Benefits</h3>
            <div className="space-y-3">
              {(service.benefits || [
                "Increased efficiency and productivity",
                "Enhanced user experience and engagement",
                "Scalable and future-ready solutions",
                "Dedicated support and maintenance"
              ]).map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span className="text-muted-foreground font-roboto">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Process */}
          <div>
            <h3 className="text-2xl font-poppins font-bold mb-4 text-foreground">Our Process</h3>
            <div className="space-y-4">
              {(service.process || [
                "Discovery & Planning - We analyze your requirements and create a detailed strategy",
                "Design & Development - Our team builds your solution using best practices",
                "Testing & Optimization - Rigorous testing ensures quality and performance",
                "Launch & Support - We deploy your solution and provide ongoing maintenance"
              ]).map((step, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-8 h-8 bg-primary/10 text-primary rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0 font-poppins font-bold text-sm">
                    {index + 1}
                  </div>
                  <span className="text-muted-foreground font-roboto">{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="border-t pt-6">
            <div className="text-center">
              <h4 className="text-xl font-poppins font-bold mb-3">Ready to Get Started?</h4>
              <p className="text-muted-foreground font-roboto mb-6">
                Let's discuss how we can help transform your business with our {service.title.toLowerCase()}.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-gradient-primary text-white hover:opacity-90 font-montserrat font-semibold px-8">
                  Get a Quote
                </Button>
                <Button variant="outline" className="font-montserrat font-semibold px-8">
                  Schedule a Call
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceModal;