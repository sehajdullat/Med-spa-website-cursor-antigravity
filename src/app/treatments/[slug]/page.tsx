import { notFound } from "next/navigation";
import { getTreatmentBySlug } from "@/data/treatments";
import TreatmentPageClient from "./TreatmentPageClient";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function TreatmentPage({ params }: Props) {
  const { slug } = await params;
  const treatment = getTreatmentBySlug(slug);
  if (!treatment) notFound();

  return <TreatmentPageClient treatment={treatment} />;
}

export async function generateStaticParams() {
  const { TREATMENTS } = await import("@/data/treatments");
  return TREATMENTS.map((t) => ({ slug: t.slug }));
}
