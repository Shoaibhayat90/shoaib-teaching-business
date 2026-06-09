import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Mission from "./pages/Mission";
import Courses from "./pages/Courses";
import LearningMethods from "./pages/LearningMethods";
import Certifications from "./pages/Certifications";
import OneOnOne from "./pages/OneOnOne";
import HomeTutoring from "./pages/HomeTutoring";
import OnlineClasses from "./pages/OnlineClasses";
import InstructorLed from "./pages/InstructorLed";
import CourseDetail from "./pages/CourseDetail";
import Contact from "./pages/Contact";

function Router() {
  // make sure to consider if you need authentication for certain routes
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/mission"} component={Mission} />
      <Route path={"/courses"} component={Courses} />
      <Route path={"/learning-methods"} component={LearningMethods} />
      <Route path={"/certifications"} component={Certifications} />
      <Route path={"/one-on-one"} component={OneOnOne} />
      <Route path={"/home-tutoring"} component={HomeTutoring} />
      <Route path={"/online-classes"} component={OnlineClasses} />
      <Route path={"/instructor-led"} component={InstructorLed} />
      <Route path={"/course/:slug"} component={CourseDetail} />
      <Route path={"/contact"} component={Contact} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
