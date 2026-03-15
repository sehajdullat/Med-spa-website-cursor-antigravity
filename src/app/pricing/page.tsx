"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Shield } from "lucide-react";
import { motion } from "framer-motion";

const PRICING_BY_CATEGORY: Record<
  string,
  { name: string; price: string; note?: string }[]
> = {
  injectables: [
    { name: "Botox & Dysport", price: "$12/unit", note: "50 units: $550 (Save $50)" },
    { name: "Dermal Fillers (Juvéderm, Restylane)", price: "$650/syringe", note: "2 syringes: $1,200 (Save $100)" },
  ],
  laser: [
    { name: "Laser Hair Removal", price: "$150/area" },
    { name: "IPL Photofacial", price: "$350/session" },
    { name: "Laser Vein Removal", price: "$250/session" },
  ],
  facial: [
    { name: "HydraFacial Revival", price: "$200/session" },
    { name: "Chemical Peels", price: "$175-$400" },
    { name: "Microneedling + PRP", price: "$450/session" },
    { name: "Dermaplaning", price: "$125/session" },
  ],
  body: [
    { name: "Body Contouring", price: "$400/area" },
  ],
  wellness: [
    { name: "IV Vitamin Drips", price: "$300/session" },
    { name: "LED Light Therapy", price: "$150/session" },
  ],
};

export default function PricingPage() {
  const [financingAmount, setFinancingAmount] = useState(1500);

  return (
    <div className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <h1 className="font-heading text-4xl md:text-6xl mb-6">
            Transparent Pricing, Exceptional Value
          </h1>
          <p className="text-xl text-gray-600">
            No surprises. No pressure. Just honest pricing for premium
            treatments.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="max-w-6xl mx-auto"
        >
          <Tabs defaultValue="injectables" className="w-full">
            <TabsList className="w-full flex flex-wrap h-auto gap-2 p-2 bg-[var(--color-secondary)] rounded-xl border border-[var(--color-border)]">
              <TabsTrigger value="injectables">Injectables</TabsTrigger>
              <TabsTrigger value="laser">Laser</TabsTrigger>
              <TabsTrigger value="facial">Facial</TabsTrigger>
              <TabsTrigger value="body">Body</TabsTrigger>
              <TabsTrigger value="wellness">Wellness</TabsTrigger>
            </TabsList>
            {Object.entries(PRICING_BY_CATEGORY).map(([key, rows]) => (
              <TabsContent key={key} value={key} className="mt-8">
                <div className="space-y-4">
                  {rows.map((row) => (
                    <div
                      key={row.name}
                      className="flex flex-wrap items-center justify-between py-4 border-b border-[var(--color-border)]"
                    >
                      <div>
                        <p className="font-medium text-[var(--color-accent)]">
                          {row.name}
                        </p>
                        {row.note && (
                          <p className="text-sm text-gray-500">{row.note}</p>
                        )}
                      </div>
                      <p className="font-semibold text-[var(--color-primary)]">
                        {row.price}
                      </p>
                    </div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto mt-16 p-8 bg-green-50 rounded-2xl"
        >
          <h3 className="font-heading text-2xl mb-4">
            Flexible Financing Available
          </h3>
          <p className="text-gray-700 mb-6">
            Treatments starting as low as{" "}
            <strong>$49/month</strong> with 0% APR financing
          </p>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">
                Treatment Cost
              </label>
              <Slider
                min={200}
                max={3000}
                step={50}
                value={[financingAmount]}
                onValueChange={([v]) => setFinancingAmount(v ?? 1500)}
              />
              <p className="text-right text-sm text-gray-600 mt-1">
                ${financingAmount}
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">
                  Monthly Payment (12 months)
                </span>
                <span className="text-3xl font-bold text-[var(--color-primary)]">
                  ${Math.round(financingAmount / 12)}/mo
                </span>
              </div>
            </div>
            <Button
              size="lg"
              className="w-full bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)]"
            >
              Apply for Financing →
            </Button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gray-100 rounded-full mb-6">
            <Shield className="w-6 h-6 text-[var(--color-primary)]" />
            <span className="font-medium">100% Satisfaction Guaranteed</span>
          </div>
          <p className="text-gray-600">
            All prices include: Expert consultation • Medical-grade products •
            Aftercare support
            <br />
            Not happy with results? We&apos;ll re-treat or refund within 30 days.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
