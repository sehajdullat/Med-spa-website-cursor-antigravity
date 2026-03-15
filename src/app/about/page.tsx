import Image from "next/image";

export const metadata = {
  title: "About Us | TranquilGlow Med Spa",
  description:
    "Meet the board-certified team transforming skin health. Medical expertise you can trust.",
};

export default function AboutPage() {
  return (
    <div>
      <section className="relative h-[70vh] min-h-[500px]">
        <Image
          src="/images/team-photo.jpg"
          alt="TranquilGlow team"
          fill
          className="object-cover brightness-50"
          sizes="100vw"
          unoptimized
        />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4 text-center text-white">
            <h1 className="font-heading text-4xl md:text-6xl mb-6">
              Medical Expertise You Can Trust,
              <br />
              Care You Can Feel
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Meet the board-certified team transforming skin health across San
              Francisco
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="relative h-[400px] md:h-[600px] rounded-2xl overflow-hidden bg-gray-200">
              <Image
                src="/images/founder-photo.jpg"
                alt="Dr. Sarah Chen"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                unoptimized
              />
            </div>
            <div className="space-y-6">
              <h2 className="font-heading text-4xl md:text-5xl">Our Story</h2>
              <div className="prose prose-lg text-gray-700 max-w-none">
                <p>
                  Dr. Sarah Chen opened TranquilGlow in 2009 with a simple
                  mission: bring hospital-grade aesthetic medicine to a spa
                  environment where clients feel pampered, not clinical.
                </p>
                <p>
                  After seeing too many patients receive cookie-cutter treatments
                  at big chains, she built a practice focused on personalized
                  care. Every treatment plan is custom. Every client is heard.
                  And every result is backed by medical science.
                </p>
                <p>
                  Today, we&apos;re proud to serve over 1,000 clients annually
                  with a team of 15 medical professionals—all committed to the
                  same philosophy: your skin deserves expert care in an
                  environment that respects your time and comfort.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-6 pt-6">
                <div className="text-center p-4 bg-[var(--color-secondary)] rounded-xl">
                  <p className="font-heading text-3xl font-bold text-[var(--color-primary)]">
                    15
                  </p>
                  <p className="text-sm text-gray-600">Years Serving SF</p>
                </div>
                <div className="text-center p-4 bg-[var(--color-secondary)] rounded-xl">
                  <p className="font-heading text-3xl font-bold text-[var(--color-primary)]">
                    1,000+
                  </p>
                  <p className="text-sm text-gray-600">Happy Clients</p>
                </div>
                <div className="text-center p-4 bg-[var(--color-secondary)] rounded-xl">
                  <p className="font-heading text-3xl font-bold text-[var(--color-primary)]">
                    15
                  </p>
                  <p className="text-sm text-gray-600">Medical Professionals</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-[var(--color-secondary)]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-4xl mb-12">
            Certifications & Partnerships
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We invest in continuous education, cutting-edge technology, and
            medical-grade products. When you choose TranquilGlow, you&apos;re
            choosing proven safety and efficacy.
          </p>
        </div>
      </section>
    </div>
  );
}
