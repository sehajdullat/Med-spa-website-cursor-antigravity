import QuizFlow from "@/components/quiz/QuizFlow";

export const metadata = {
  title: "Find Your Perfect Treatment | TranquilGlow",
  description: "Take our quick quiz for a personalized treatment plan.",
};

export default function QuizPage() {
  return (
    <div className="py-16 md:py-20 min-h-[80vh] bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h1 className="font-heading text-4xl mb-4">Find Your Perfect Treatment</h1>
          <p className="text-gray-600">
            Answer a few quick questions to receive a personalized treatment plan matched to your unique goals and skin profile.
          </p>
        </div>
        
        <QuizFlow />
      </div>
    </div>
  );
}
