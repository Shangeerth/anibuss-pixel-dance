import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "94077194267"; // Updated WhatsApp business number
    const message = "Hi! I'm interested in your digital agency services.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <Button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 shadow-large animate-glow btn-interactive hover:animate-wiggle transition-all duration-300"
      size="icon"
    >
      <MessageCircle className="h-6 w-6 text-white animate-pulse" />
    </Button>
  );
};

export default WhatsAppButton;