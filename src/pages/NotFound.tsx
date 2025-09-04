import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-hero">
      <div className="text-center text-white px-6">
        <div className="animate-slide-up">
          <h1 className="text-8xl md:text-9xl font-poppins font-bold mb-4 opacity-20">404</h1>
          <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-6">Page Not Found</h2>
          <p className="text-xl md:text-2xl mb-10 font-roboto opacity-90 max-w-2xl mx-auto">
            Oops! The page you're looking for seems to have vanished into the digital void. 
            Let's get you back on track.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90 font-montserrat font-semibold px-8 py-4 text-lg rounded-xl shadow-large transition-all duration-300 hover:scale-105"
              asChild
            >
              <Link to="/">
                <Home className="mr-2 h-5 w-5" />
                Go Home
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 font-montserrat font-semibold px-8 py-4 text-lg rounded-xl backdrop-blur-sm transition-all duration-300 hover:scale-105"
              onClick={() => window.history.back()}
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              Go Back
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
