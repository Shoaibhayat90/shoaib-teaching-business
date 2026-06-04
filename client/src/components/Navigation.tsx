import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";

interface NavigationProps {
  showFullNav?: boolean;
  breadcrumb?: string;
}

export function Navigation({ showFullNav = true, breadcrumb }: NavigationProps) {
  const [, navigate] = useLocation();

  return (
    <nav className="fixed top-0 w-full bg-background backdrop-blur-md z-50 border-b border-border shadow-sm">
      <div className="container flex items-center justify-between h-16">
        <a href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <img src="/manus-storage/logo-option-2_8664fe11.png" alt="IT Insight Academy" className="w-12 h-12 object-contain" />
          <div className="flex flex-col gap-0.5 hidden sm:block">
            <span className="font-bold text-sm text-foreground">IT Insight Academy</span>
            {breadcrumb ? (
              <span className="text-xs text-primary font-medium">{breadcrumb}</span>
            ) : (
              <>
                <div className="h-px bg-border/30 w-12" />
                <span className="text-xs text-primary font-medium">Learn Technology from Scratch</span>
              </>
            )}
          </div>
        </a>

        <div className="flex items-center gap-8">
          {showFullNav && (
            <>
              <a href="/mission" className="text-sm font-medium hover:text-primary transition-colors hidden sm:inline">
                Our Mission
              </a>
              <a href="/courses" className="text-sm font-medium hover:text-primary transition-colors hidden sm:inline">
                Courses
              </a>
              <a href="/learning-methods" className="text-sm font-medium hover:text-primary transition-colors hidden sm:inline">
                Learning
              </a>
              <a href="/certifications" className="text-sm font-medium hover:text-primary transition-colors hidden sm:inline">
                Certifications
              </a>
            </>
          )}
          <Button 
            onClick={() => navigate('/contact')}
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
}
