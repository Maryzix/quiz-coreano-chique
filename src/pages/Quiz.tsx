import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { useNavigate } from "react-router-dom";
import { 
  Volume2, 
  CheckCircle, 
  XCircle, 
  RotateCcw,
  Play,
  Trophy,
  Star,
  Home
} from "lucide-react";

// Vogais
const vogaisData = [
  { question: "Qual é a vogal ㅏ?", options: ["o","a","ó"], answer:"a", audio:"/audio/vogais/vogal_a.mp3" },
  { question: "Qual é a vogal ㅑ?", options: ["i","ya","u"], answer:"ya", audio:"/audio/vogais/vogal_ya.mp3" },
  { question: "Qual é a vogal ㅓ?", options: ["a","eo","e"], answer:"eo", audio:"/audio/vogais/vogal_eo.mp3" },
  { question: "Qual é a vogal ㅕ?", options: ["yo","yeo","yu"], answer:"yeo", audio:"/audio/vogais/vogal_yeo.mp3" },
  { question: "Qual é a vogal ㅗ?", options: ["u","a","o"], answer:"o", audio:"/audio/vogais/vogal_o.mp3" },
  { question: "Qual é a vogal ㅛ?", options: ["ya","yo","yu"], answer:"yo", audio:"/audio/vogais/vogal_yo.mp3" },
  { question: "Qual é a vogal ㅜ?", options: ["o","eu","u"], answer:"u", audio:"/audio/vogais/vogal_u.mp3" },
  { question: "Qual é a vogal ㅠ?", options: ["ya","yo","yu"], answer:"yu", audio:"/audio/vogais/vogal_yu.mp3" },
  { question: "Qual é a vogal ㅡ?", options: ["i","eu","u"], answer:"eu", audio:"/audio/vogais/vogal_eu.mp3" },
  { question: "Qual é a vogal ㅣ?", options: ["a","i","eo"], answer:"i", audio:"/audio/vogais/vogal_i.mp3" },
  { question: "Qual é a vogal ㅘ?", options: ["wo","wa","wu"], answer:"wa", audio:"/audio/vogais/vogal_wa.mp3" },
  { question: "Qual é a vogal ㅝ?", options: ["we","wa","wo"], answer:"we", audio:"/audio/vogais/vogal_we.mp3" },
  { question: "Qual é a vogal ㅙ?", options: ["we","wae","wa"], answer:"wae", audio:"/audio/vogais/vogal_wae.mp3" },
  { question: "Qual é a vogal ㅞ?", options: ["wo","we","wa"], answer:"we", audio:"/audio/vogais/vogal_we2.mp3" },
  { question: "Qual é a vogal ㅚ?", options: ["we","wa","oe"], answer:"oe", audio:"/audio/vogais/vogal_oe.mp3" },
  { question: "Qual é a vogal ㅟ?", options: ["wu","wi","we"], answer:"wi", audio:"/audio/vogais/vogal_wi.mp3" }
];


// Consoantes + ㅏ
const consVogaisRaw = [
  { c:"가", p:"ga" },
  { c:"나", p:"na" },
  { c:"다", p:"da" },
  { c:"라", p:"ra" },
  { c:"마", p:"ma" },
  { c:"바", p:"ba" },
  { c:"사", p:"sa" },
  { c:"아", p:"a" },   // ㅇ + ㅏ = 아 (não tem som inicial, fica só "a")
  { c:"자", p:"ja" },
  { c:"차", p:"cha" },
  { c:"카", p:"ka" },
  { c:"타", p:"ta" },
  { c:"파", p:"pa" },
  { c:"하", p:"ha" }
]

const consVogaisData = consVogaisRaw.map((item) => ({
  question: `Qual é o som de ${item.c}?`,
  options: [item.p, "ma", "ka", "sa"],
  answer: item.p,
  audio: `/audio/consoantes/cons_${item.p}.mp3`
}));

// Frases com 이에요/예요
const frasesData = [
  { question: "저는 학생 ___", translation: "Eu sou aluno", options:["이에요","예요"], answer:"이에요", audio:"/audio/frases/eu_sou_aluno.mp3" },
  { question: "저는 브라질 사람 ___", translation: "Eu sou brasileiro", options:["이에요","예요"], answer:"이에요", audio:"/audio/frases/eu_sou_brasileiro.mp3" },
  { question: "저는 학생 ___", translation: "Eu sou estudante", options:["이에요","예요"], answer:"이에요", audio:"/audio/frases/eu_sou_estudante.mp3" },
  { question: "제 이름은 마리아 ___", translation: "Meu nome é Maria", options:["이에요","예요"], answer:"예요", audio:"/audio/frases/meu_nome_e_maria.mp3" },
  { question: "그는 제 친구 ___", translation: "Ele é meu amigo", options:["이에요","예요"], answer:"예요", audio:"/audio/frases/ele_e_meu_amigo.mp3" },
  { question: "그녀는 선생님 ___", translation: "Ela é professora", options:["이에요","예요"], answer:"이에요", audio:"/audio/frases/ela_e_professora.mp3" },
  { question: "당신은 학생 ___", translation: "Você é estudante", options:["이에요","예요"], answer:"이에요", audio:"/audio/frases/voce_e_estudante.mp3" },
  { question: "이것은 책 ___", translation: "Isto é um livro", options:["이에요","예요"], answer:"이에요", audio:"/audio/frases/isto_e_um_livro.mp3" },
  { question: "이것은 펜 ___", translation: "Isto é uma caneta", options:["이에요","예요"], answer:"이에요", audio:"/audio/frases/isto_e_uma_caneta.mp3" },
  { question: "그는 제 선생님 ___", translation: "Ele é meu professor", options:["이에요","예요"], answer:"이에요", audio:"/audio/frases/ele_e_meu_professor.mp3" },
  { question: "그녀는 제 친구 ___", translation: "Ela é minha amiga", options:["이에요","예요"], answer:"예요", audio:"/audio/frases/ela_e_minha_amiga.mp3" },
  { question: "이것은 쉬운 것 ___", translation: "Isto é fácil", options:["이에요","예요"], answer:"이에요", audio:"/audio/frases/isso_e_facil.mp3" },
  { question: "이것은 어려운 것 ___", translation: "Isto é difícil", options:["이에요","예요"], answer:"이에요", audio:"/audio/frases/isso_e_dificil.mp3" },
  { question: "저는 행복한 사람 ___", translation: "Eu sou feliz", options:["이에요","예요"], answer:"이에요", audio:"/audio/frases/eu_sou_feliz.mp3" },
  { question: "저는 슬픈 사람 ___", translation: "Eu sou triste", options:["이에요","예요"], answer:"이에요", audio:"/audio/frases/eu_sou_triste.mp3" },
  { question: "당신은 제 친구 ___", translation: "Você é meu amigo", options:["이에요","예요"], answer:"예요", audio:"/audio/frases/voce_e_meu_amigo.mp3" },
  { question: "그녀는 제 선생님 ___", translation: "Ela é minha professora", options:["이에요","예요"], answer:"이에요", audio:"/audio/frases/ela_e_minha_professora.mp3" },
  { question: "이것은 개 ___", translation: "Isto é um cachorro", options:["이에요","예요"], answer:"예요", audio:"/audio/frases/isto_e_um_cachorro.mp3" },
  { question: "이것은 고양이 ___", translation: "Isto é um gato", options:["이에요","예요"], answer:"예요", audio:"/audio/frases/isto_e_um_gato.mp3" },
  { question: "그녀는 학생 ___", translation: "Ela é estudante", options:["이에요","예요"], answer:"이에요", audio:"/audio/frases/ela_e_estudante.mp3" },
  { question: "당신은 브라질 사람 ___", translation: "Você é brasileiro", options:["이에요","예요"], answer:"이에요", audio:"/audio/frases/voce_e_brasileiro.mp3" },
  { question: "저는 선생님 ___", translation: "Eu sou professor", options:["이에요","예요"], answer:"이에요", audio:"/audio/frases/eu_sou_professor.mp3" },
  { question: "저는 의사 ___", translation: "Eu sou médica", options:["이에요","예요"], answer:"예요", audio:"/audio/frases/eu_sou_medica.mp3" },
  { question: "이것은 재미있는 것 ___", translation: "Isso é interessante", options:["이에요","예요"], answer:"이에요", audio:"/audio/frases/isso_e_interessante.mp3" },
  { question: "이것은 중요한 것 ___", translation: "Isso é importante", options:["이에요","예요"], answer:"이에요", audio:"/audio/frases/isso_e_importante.mp3" },
  { question: "저는 한국 사람 ___", translation: "Eu sou coreano", options:["이에요","예요"], answer:"이에요", audio:"/audio/frases/eu_sou_coreano.mp3" },
  { question: "저는 브라질 사람 ___", translation: "Eu sou brasileira", options:["이에요","예요"], answer:"이에요", audio:"/audio/frases/eu_sou_brasileira.mp3" },
  { question: "그는 제 형 ___", translation: "Ele é meu irmão mais velho", options:["이에요","예요"], answer:"예요", audio:"/audio/frases/ele_e_meu_irmao.mp3" }
] as Array<{question: string; translation?: string; options: string[]; answer: string; audio: string}>;

const quizData = [...vogaisData, ...consVogaisData, ...frasesData] as Array<{question: string; translation?: string; options: string[]; answer: string; audio: string}>;

const Quiz = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  const handleAnswerSelect = (answerIndex: number) => {
    if (showResult) return;
    
    setSelectedAnswer(answerIndex);
    setShowResult(true);
    
    const correctAnswerIndex = quizData[currentQuestion].options.findIndex(
      option => option === quizData[currentQuestion].answer
    );
    if (answerIndex === correctAnswerIndex) {
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
    const audioUrl = quizData[currentQuestion].audio;
    const audio = new Audio(audioUrl);
    audio.play().catch(err => {
      console.error("Erro ao reproduzir áudio:", err);
    });
  };

  const goHome = () => {
    navigate('/');
  };

  const progress = ((currentQuestion + (showResult ? 1 : 0)) / quizData.length) * 100;

  if (isCompleted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
        <div className="container mx-auto px-4 py-20">
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
                <Button onClick={goHome} className="btn-primary" variant="hero">
                  <Home className="mr-2 h-4 w-4" />
                  Voltar ao Início
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  const getQuestionType = () => {
    const currentQ = quizData[currentQuestion];
    if (currentQ.question.includes('vogal')) return 'vowel';
    if (currentQ.question.includes('som de')) return 'consonant';
    if (currentQ.translation) return 'phrase';
    return 'question';
  };

  const getQuestionTypeColor = (type: string) => {
    switch (type) {
      case 'vowel': return 'from-pink-400 to-pink-600';
      case 'consonant': return 'from-blue-400 to-blue-600';
      case 'phrase': return 'from-green-400 to-green-600';
      default: return 'from-primary to-primary';
    }
  };

  const getQuestionTypeLabel = (type: string) => {
    switch (type) {
      case 'vowel': return 'Vogal';
      case 'consonant': return 'Consoante';
      case 'phrase': return 'Frase';
      default: return 'Questão';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <Button 
            onClick={goHome} 
            variant="ghost" 
            className="mb-4"
          >
            <Home className="mr-2 h-4 w-4" />
            Voltar ao Início
          </Button>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Quiz de <span className="text-gradient">Hangeul</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Teste seus conhecimentos do alfabeto coreano com vogais, consoantes e palavras básicas.
          </p>
        </div>

        {/* Quiz Interface */}
        <div className="max-w-2xl mx-auto">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium">Progresso</span>
              <span className="text-sm text-muted-foreground">
                {currentQuestion + 1} de {quizData.length}
              </span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          {/* Question Card */}
          <Card className="p-8 card-learning mb-8">
            {/* Question Type Badge */}
            <div className="flex justify-between items-center mb-6">
              <Badge variant="secondary" className="font-medium">
                {`${getQuestionTypeLabel(getQuestionType())} ${currentQuestion + 1}`}
              </Badge>
              <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${getQuestionTypeColor(getQuestionType())}`} />
            </div>

            {/* Question */}
            <div className="text-center mb-8">
              <h3 className="text-xl font-semibold mb-4">
                {quizData[currentQuestion].question}
              </h3>
              
              {/* Translation if available */}
              {quizData[currentQuestion].translation && (
                <p className="text-muted-foreground mb-4">
                  {quizData[currentQuestion].translation}
                </p>
              )}
              
              {/* Audio Button */}
              <div className="mb-4">
                <Button 
                  size="sm" 
                  variant="outline" 
                  onClick={playAudio}
                  className="gap-2"
                >
                  <Volume2 className="h-4 w-4" />
                  Reproduzir Áudio
                </Button>
              </div>
            </div>

            {/* Answer Options */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {quizData[currentQuestion].options.map((option, index) => {
                const correctAnswerIndex = quizData[currentQuestion].options.findIndex(
                  opt => opt === quizData[currentQuestion].answer
                );
                let buttonClass = "p-4 text-left border-2 transition-all duration-200 hover:scale-105";
                
                if (showResult) {
                  if (index === correctAnswerIndex) {
                    buttonClass += " border-success bg-success/10 text-success";
                  } else if (index === selectedAnswer) {
                    buttonClass += " border-destructive bg-destructive/10 text-destructive";
                  } else {
                    buttonClass += " border-border opacity-50";
                  }
                } else {
                  buttonClass += selectedAnswer === index 
                    ? " border-primary bg-primary/10" 
                    : " border-border hover:border-primary/50";
                }

                return (
                  <button
                    key={index}
                    onClick={() => handleAnswerSelect(index)}
                    className={buttonClass}
                    disabled={showResult}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-medium">{option}</span>
                      {showResult && index === correctAnswerIndex && (
                        <CheckCircle className="h-5 w-5 text-success" />
                      )}
                      {showResult && index === selectedAnswer && index !== correctAnswerIndex && (
                        <XCircle className="h-5 w-5 text-destructive" />
                      )}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Next Button */}
            {showResult && (
              <div className="mt-8 text-center">
                <Button onClick={nextQuestion} className="btn-primary" variant="hero">
                  {currentQuestion < quizData.length - 1 ? 'Próxima Questão' : 'Ver Resultado'}
                  <Play className="ml-2 h-4 w-4" />
                </Button>
              </div>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
