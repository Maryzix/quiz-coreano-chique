import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Volume2, 
  CheckCircle, 
  XCircle, 
  RotateCcw,
  Play,
  Trophy,
  Star
} from "lucide-react";

const quizData = [
  {
    question: "Como se diz 'Olá' em coreano?",
    korean: "안녕하세요",
    romanization: "annyeonghaseyo",
    options: ["안녕하세요", "감사합니다", "죄송합니다", "잘 가세요"],
    correct: 0,
    audio: "annyeonghaseyo.mp3"
  },
  {
    question: "Qual é o significado de '감사합니다'?",
    korean: "감사합니다",
    romanization: "gamsahamnida",
    options: ["Por favor", "Obrigado", "Desculpe", "Tchau"],
    correct: 1,
    audio: "gamsahamnida.mp3"
  },
  {
    question: "Como se escreve 'casa' em coreano?",
    korean: "집",
    romanization: "jip",
    options: ["학교", "집", "병원", "상점"],
    correct: 1,
    audio: "jip.mp3"
  }
];

const DemoSection = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  const handleAnswerSelect = (answerIndex: number) => {
    if (showResult) return;
    
    setSelectedAnswer(answerIndex);
    setShowResult(true);
    
    if (answerIndex === quizData[currentQuestion].correct) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setIsCompleted(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setIsCompleted(false);
  };

  const playAudio = () => {
    // Simulação de reprodução de áudio
    console.log(`Playing audio: ${quizData[currentQuestion].audio}`);
  };

  const progress = ((currentQuestion + (showResult ? 1 : 0)) / quizData.length) * 100;

  if (isCompleted) {
    return (
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="p-8 text-center card-learning">
              <Trophy className="h-16 w-16 text-primary mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4">Quiz Concluído!</h3>
              <p className="text-muted-foreground mb-6">
                Você acertou {score} de {quizData.length} questões
              </p>
              
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-8 w-8 ${
                      i < Math.ceil((score / quizData.length) * 5)
                        ? 'text-yellow-500 fill-current'
                        : 'text-muted-foreground'
                    }`}
                  />
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button onClick={resetQuiz} variant="outline">
                  <RotateCcw className="mr-2 h-4 w-4" />
                  Tentar Novamente
                </Button>
                <Button className="btn-primary" variant="hero">
                  Continuar Aprendendo
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>
    );
  }
}

export default DemoSection;