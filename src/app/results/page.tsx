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
          <div className="relative aspect-[4/3] bg-gray-200 rounded-2xl overflow-hidden">
            <img src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2940&auto=format&fit=crop" alt="Result 1" className="object-cover w-full h-full" />
          </div>
          <div className="relative aspect-[4/3] bg-gray-200 rounded-2xl overflow-hidden">
            <img src="https://images.unsplash.com/photo-1579402507204-517dfcda7233?q=80&w=2940&auto=format&fit=crop" alt="Result 2" className="object-cover w-full h-full" />
          </div>
          <div className="relative aspect-[4/3] bg-gray-200 rounded-2xl overflow-hidden">
            <img src="https://images.unsplash.com/photo-1596755389378-c31d21fd1273?q=80&w=2940&auto=format&fit=crop" alt="Result 3" className="object-cover w-full h-full" />
          </div>
          <div className="relative aspect-[4/3] bg-gray-200 rounded-2xl overflow-hidden">
            <img src="https://plus.unsplash.com/premium_photo-1675806655182-ed386aa0ed60?q=80&w=2940&auto=format&fit=crop" alt="Result 4" className="object-cover w-full h-full" />
          </div>
        </div>
        <p className="text-center text-gray-500 mt-8">
          Before & after gallery coming soon. Call us to hear about real client
          experiences.
        </p>
      </div>
    </div>
  );
}
