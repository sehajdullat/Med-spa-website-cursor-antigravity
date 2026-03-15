"use client";

import { useState } from "react";
import { TREATMENTS } from "@/data/treatments";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, CheckCircle2, ChevronRight, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface Question {
  id: string;
  question: string;
  options: { label: string; value: string }[];
}

const QUIZ_QUESTIONS: Question[] = [
  {
    id: "concern",
    question: "What is your primary skin or body concern?",
    options: [
      { label: "Acne & Blemishes", value: "acne" },
      { label: "Fine Lines & Wrinkles", value: "aging" },
      { label: "Dullness & Uneven Texture", value: "dullness" },
      { label: "Redness & Sun Damage", value: "pigmentation" },
      { label: "Unwanted Hair or Stubborn Fat", value: "body" },
    ],
  },
  {
    id: "downtime",
    question: "Are you open to having some downtime after treatment?",
    options: [
      { label: "Yes, I can handle a few days of peeling/redness", value: "yes" },
      { label: "No, I need to look perfect immediately", value: "no" },
    ],
  },
  {
    id: "timeline",
    question: "How quickly do you want to see results?",
    options: [
      { label: "Instantly! I have an event coming up", value: "immediate" },
      { label: "I'm willing to wait for cumulative, long-term results", value: "gradual" },
    ],
  },
  {
    id: "budget",
    question: "What is your comfortable price range per session?",
    options: [
      { label: "Under $200", value: "low" },
      { label: "$200 - $400", value: "medium" },
      { label: "$400+", value: "high" },
    ],
  },
  {
    id: "experience",
    question: "Have you had medical aesthetic treatments before?",
    options: [
      { label: "Yes, I'm a veteran", value: "yes" },
      { label: "No, this is my first time", value: "no" },
    ],
  },
  {
    id: "feeling",
    question: "How do you want to feel after your visit?",
    options: [
      { label: "Relaxed and Pampered", value: "relaxed" },
      { label: "Transformed and Confident", value: "transformed" },
      { label: "Energized and Restored", value: "energized" },
    ],
  },
];

export default function QuizFlow() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const handleOptionSelect = (questionId: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  };

  const currentQuestion = QUIZ_QUESTIONS[currentStep];
  const isLastQuestion = currentStep === QUIZ_QUESTIONS.length - 1;

  const handleNext = () => {
    if (isLastQuestion) {
      setIsAnalyzing(true);
      setTimeout(() => {
        setIsAnalyzing(false);
        setShowResults(true);
      }, 2000);
    } else {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    setCurrentStep((prev) => prev - 1);
  };

  // Very basic recommendation logic
  const getRecommendations = () => {
    const scores = TREATMENTS.map(t => ({ ...t, score: 0 }));

    const concern = answers["concern"];
    const downtime = answers["downtime"];
    const timeline = answers["timeline"];

    scores.forEach(t => {
      // Concern matching
      if (concern === "acne" && ["chemical-peels", "led-therapy", "hydrafacial"].includes(t.slug)) t.score += 3;
      if (concern === "aging" && ["botox", "fillers", "microneedling", "chemical-peels"].includes(t.slug)) t.score += 3;
      if (concern === "dullness" && ["hydrafacial", "dermaplaning", "chemical-peels"].includes(t.slug)) t.score += 3;
      if (concern === "pigmentation" && ["ipl-photofacial", "chemical-peels", "microneedling"].includes(t.slug)) t.score += 3;
      if (concern === "body" && ["laser-hair-removal", "body-contouring", "laser-vein-removal"].includes(t.slug)) t.score += 3;

      // Downtime matching
      if (downtime === "no" && t.downtime.toLowerCase().includes("none")) t.score += 2;
      if (downtime === "yes" && !t.downtime.toLowerCase().includes("none")) t.score += 1;

      // Timeline matching
      if (timeline === "immediate" && t.resultsVisible.toLowerCase().includes("immediate")) t.score += 2;
      if (timeline === "gradual" && !t.resultsVisible.toLowerCase().includes("immediate")) t.score += 2;
    });

    return scores.sort((a, b) => b.score - a.score).slice(0, 3);
  };

  if (showResults) {
    const recommendations = getRecommendations();
    return (
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 text-green-600 rounded-full mb-6">
            <Sparkles className="w-8 h-8" />
          </div>
          <h2 className="font-heading text-4xl mb-4">Your Personalized Plan</h2>
          <p className="text-xl text-gray-600">Based on your answers, here are the top treatments we recommend.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {recommendations.map((treatment, idx) => (
            <motion.div 
              key={treatment.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-lg"
            >
              <div className="aspect-[4/3] relative bg-gray-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={treatment.image} alt={treatment.name} className="object-cover w-full h-full" />
                {idx === 0 && (
                  <div className="absolute top-4 right-4 bg-white text-[var(--color-primary)] font-bold px-3 py-1 rounded-full text-xs shadow-sm">
                    Top Match
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="font-heading text-xl mb-2">{treatment.name}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{treatment.shortDescription}</p>
                <div className="space-y-2 mb-6 text-sm">
                  <div className="flex justify-between border-b pb-2">
                    <span className="text-gray-500">Downtime</span>
                    <span className="font-medium text-right">{treatment.downtime}</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="text-gray-500">Results</span>
                    <span className="font-medium text-right">{treatment.resultsVisible}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Price</span>
                    <span className="font-medium text-right">{treatment.priceRange}</span>
                  </div>
                </div>
                <Button className="w-full bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)]" asChild>
                  <Link href={`/treatments/${treatment.slug}`}>Learn More & Book</Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center p-8 bg-gray-50 rounded-2xl">
          <h3 className="font-heading text-2xl mb-4">Still Not Sure?</h3>
          <p className="text-gray-600 mb-6 max-w-lg mx-auto">
            Book a free 30-minute consultation with our medical team to create a custom treatment plan just for you.
          </p>
          <Button size="lg" variant="outline" className="border-2 border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white" asChild>
            <Link href="/book">Schedule Free Consult</Link>
          </Button>
        </div>
      </motion.div>
    );
  }

  if (isAnalyzing) {
    return (
      <div className="max-w-lg mx-auto text-center py-20">
        <div className="inline-block animate-spin w-12 h-12 border-4 border-gray-200 border-t-[var(--color-primary)] rounded-full mb-6" />
        <h2 className="font-heading text-3xl mb-2">Analyzing your answers...</h2>
        <p className="text-gray-500">Matching you with the perfect treatments from our clinic.</p>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-8">
        <div className="flex justify-between text-sm text-gray-500 mb-2 font-medium">
          <span>Question {currentStep + 1} of {QUIZ_QUESTIONS.length}</span>
          <span>{Math.round(((currentStep + 1) / QUIZ_QUESTIONS.length) * 100)}%</span>
        </div>
        <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
          <div 
            className="bg-[var(--color-primary)] h-full transition-all duration-500" 
            style={{ width: `${((currentStep + 1) / QUIZ_QUESTIONS.length) * 100}%` }}
          />
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8"
        >
          <h2 className="font-heading text-2xl md:text-3xl mb-8 leading-tight">
            {currentQuestion.question}
          </h2>

          <div className="space-y-3 mb-8">
            {currentQuestion.options.map((opt) => (
              <button
                key={opt.value}
                onClick={() => handleOptionSelect(currentQuestion.id, opt.value)}
                className={cn(
                  "w-full flex items-center justify-between p-4 rounded-xl border-2 transition-all text-left group",
                  answers[currentQuestion.id] === opt.value 
                    ? "border-[var(--color-primary)] bg-[var(--color-primary)]/5" 
                    : "border-gray-200 hover:border-gray-300 bg-white"
                )}
              >
                <span className="text-lg font-medium text-gray-800">{opt.label}</span>
                <div className={cn(
                  "w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors",
                  answers[currentQuestion.id] === opt.value
                    ? "border-[var(--color-primary)] bg-[var(--color-primary)]"
                    : "border-gray-300 group-hover:border-gray-400"
                )}>
                  {answers[currentQuestion.id] === opt.value && <CheckCircle2 className="w-4 h-4 text-white" />}
                </div>
              </button>
            ))}
          </div>

          <div className="flex items-center justify-between pt-6 border-t border-gray-100">
            {currentStep > 0 ? (
              <Button variant="ghost" className="text-gray-500 hover:text-gray-900" onClick={handleBack}>
                <ArrowLeft className="w-4 h-4 mr-2" /> Back
              </Button>
            ) : <div />}
            <Button 
              className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] px-8"
              disabled={!answers[currentQuestion.id]}
              onClick={handleNext}
            >
              {isLastQuestion ? "See My Results" : "Next"} {!isLastQuestion && <ChevronRight className="w-4 h-4 ml-2" />}
            </Button>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
