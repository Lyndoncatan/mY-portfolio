
import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent virtual studio area:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-secondary/50">
      <div className="text-center max-w-md glass animate-fade-in p-8 rounded-xl">
        <div className="mb-8">
          <div className="text-8xl font-bold text-primary/20">404</div>
          <h1 className="text-3xl font-bold mt-4 mb-2">Studio Space Not Found</h1>
          <p className="text-muted-foreground">
            The creative space you're looking for doesn't exist or has been moved to another location.
          </p>
        </div>
        
        <Button asChild size="lg" className="group">
          <Link to="/">
            <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Return to Studio
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
