import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ModulesSection from "@/components/ModulesSection";
import DemoSection from "@/components/DemoSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main>
        <HeroSection />
        <ModulesSection />
        <DemoSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;