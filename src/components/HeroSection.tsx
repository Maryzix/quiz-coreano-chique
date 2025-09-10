import { Button } from "@/components/ui/button";
import { Play, BookOpen, Users, Award } from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/korean-hero.jpg";

const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Korean learning hero background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 gradient-sky opacity-80" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Aprenda{" "}
            <span className="text-gradient">
              Coreano
            </span>
            <br />
            de Forma Simples
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Descubra a beleza da língua coreana com exercícios práticos. Sua jornada no aprendizado do 한국어 começa aqui!
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="hero" 
              className="text-lg px-8 py-4"
              onClick={() => navigate('/quiz')}
            >
              <Play className="mr-2 h-5 w-5" />
              Começar
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 py-4"
              onClick={() => {
                const modulesSection = document.getElementById('modules');
                modulesSection?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <BookOpen className="mr-2 h-5 w-5" />
              Ver Módulos
            </Button>
          </div>
        </div>
      </div>

      {/* Korean Characters Floating Animation */}
      <div className="absolute inset-0 pointer-events-none z-5">
        <div className="absolute top-20 left-10 text-4xl text-primary/20 animate-bounce" style={{animationDelay: '0s'}}>
          한
        </div>
        <div className="absolute top-40 right-20 text-3xl text-primary/20 animate-bounce" style={{animationDelay: '1s'}}>
          국
        </div>
        <div className="absolute bottom-40 left-20 text-5xl text-primary/20 animate-bounce" style={{animationDelay: '2s'}}>
          어
        </div>
        <div className="absolute bottom-20 right-10 text-3xl text-primary/20 animate-bounce" style={{animationDelay: '0.5s'}}>
          사
        </div>
        <div className="absolute top-1/2 left-1/4 text-2xl text-primary/20 animate-bounce" style={{animationDelay: '1.5s'}}>
          랑
        </div>
      </div>
    </section>
  );
};

export default HeroSection;