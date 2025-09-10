import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { 
  BookOpen, 
  Headphones, 
  PenTool, 
  Users, 
  Clock, 
  Star,
  ArrowRight
} from "lucide-react";

const modules = [
  {
    level: "Iniciante",
    title: "Fundamentos do Coreano",
    description: "Aprenda o alfabeto Hangeul, pronúncia básica e primeiras palavras",
    lessons: 25,
    duration: "3-4 semanas",
    rating: 4.9,
    students: 2850,
    topics: ["Hangeul (한글)", "Números"],
    color: "from-green-400 to-green-600",
    icon: BookOpen,
    progress: 0
  }
];

const ModulesSection = () => {
  const navigate = useNavigate();
  
  return (
    <section id="modules" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Módulos de <span className="text-gradient">Aprendizado</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Exercícios básicos de coreano 
          </p>
        </div>

        {/* Modules Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
          {modules.map((module, index) => {
            const IconComponent = module.icon;
            
            return (
              <div key={index} className="card-learning p-8 relative overflow-hidden group">
                {/* Background Gradient */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${module.color} opacity-10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500`} />
                
                {/* Level Badge */}
                <div className="flex justify-between items-start mb-6">
                  <Badge variant="secondary" className="font-medium">
                    {module.level}
                  </Badge>
                  <IconComponent className="h-8 w-8 text-primary" />
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-bold mb-3">{module.title}</h3>
                <p className="text-muted-foreground mb-6">{module.description}</p>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <BookOpen className="h-4 w-4 mr-2" />
                    {module.lessons} lições
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 mr-2" />
                    {module.duration}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Star className="h-4 w-4 mr-2 text-yellow-500" />
                    {module.rating}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Users className="h-4 w-4 mr-2" />
                    {module.students.toLocaleString()}
                  </div>
                </div>

                {/* Topics */}
                <div className="mb-6">
                  <p className="text-sm font-medium mb-2">Tópicos principais:</p>
                  <div className="flex flex-wrap gap-2">
                    {module.topics.map((topic, topicIndex) => (
                      <Badge key={topicIndex} variant="outline" className="text-xs">
                        {topic}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Action Button */}
                <Button 
                  className="w-full btn-primary group-hover:shadow-lg transition-shadow" 
                  variant="hero"
                  onClick={() => navigate('/quiz')}
                >
                  Começar Módulo
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ModulesSection;