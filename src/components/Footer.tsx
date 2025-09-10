import { BookOpen, Mail, MessageCircle, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8">
          {/* Logo and Description */}
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <BookOpen className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold text-gradient">한국어 배우기</span>
            </div>
            <p className="text-muted-foreground mb-4">
              Plataforma criada por estudante de coreano.
            </p>
            <div className="flex justify-center space-x-4">
              <button className="p-2 rounded-lg hover:bg-muted transition-colors">
                <Mail className="h-5 w-5 text-muted-foreground hover:text-primary" />
              </button>
              <button className="p-2 rounded-lg hover:bg-muted transition-colors">
                <MessageCircle className="h-5 w-5 text-muted-foreground hover:text-primary" />
              </button>
              <button className="p-2 rounded-lg hover:bg-muted transition-colors">
                <Github className="h-5 w-5 text-muted-foreground hover:text-primary" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <p className="text-muted-foreground">
                © 2025 한국어 배우기. Feito por Mary Lindsen.
              </p>
            </div>
            
            <div className="flex space-x-6">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Privacidade
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Termos
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;