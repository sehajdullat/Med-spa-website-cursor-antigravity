export const metadata = {
  title: "Results | TranquilGlow Med Spa",
  description: "Real before & after results from our clients.",
};

export default function ResultsPage() {
  return (
    <div className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="font-heading text-4xl md:text-6xl mb-6">
            Real Results
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See what our clients have achieved with our FDA-approved treatments.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="aspect-[4/3] bg-gray-200 rounded-2xl" />
          <div className="aspect-[4/3] bg-gray-200 rounded-2xl" />
          <div className="aspect-[4/3] bg-gray-200 rounded-2xl" />
          <div className="aspect-[4/3] bg-gray-200 rounded-2xl" />
        </div>
        <p className="text-center text-gray-500 mt-8">
          Before & after gallery coming soon. Call us to hear about real client
          experiences.
        </p>
      </div>
    </div>
  );
}
