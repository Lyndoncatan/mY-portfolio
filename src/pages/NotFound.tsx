
import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="text-center max-w-md animate-fade-in">
        <div className="mb-8">
          <div className="text-8xl font-bold text-primary/20">404</div>
          <h1 className="text-3xl font-bold mt-4 mb-2">Page not found</h1>
          <p className="text-muted-foreground">
            The page you are looking for doesn't exist or has been moved.
          </p>
        </div>
        
        <Button asChild size="lg" className="group">
          <Link to="/">
            <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Return Home
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
