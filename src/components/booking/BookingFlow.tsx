"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { TREATMENTS } from "@/data/treatments";
import { Check, ChevronRight, ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";

interface BookingFlowProps {
  onClose: () => void;
}

type Step = 
  | "service" 
  | "provider" 
  | "datetime" 
  | "client-info" 
  | "medical" 
  | "payment" 
  | "confirmation";

const STEPS: Step[] = [
  "service",
  "provider",
  "datetime",
  "client-info",
  "medical",
  "payment",
  "confirmation",
];

const PROVIDERS = [
  { id: "any", name: "First Available", role: "Medical Professional" },
  { id: "dr-chen", name: "Dr. Sarah Chen", role: "Medical Director" },
  { id: "rn-jessica", name: "Jessica Smith, RN", role: "Aesthetic Nurse" },
];

export default function BookingFlow({ onClose }: BookingFlowProps) {
  const [currentStep, setCurrentStep] = useState<Step>("service");
  
  // Form State
  const [selectedService, setSelectedService] = useState<string>("");
  const [selectedProvider, setSelectedProvider] = useState<string>("any");
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<string>("");
  
  const currentStepIndex = STEPS.indexOf(currentStep);
  const progressPercent = ((currentStepIndex) / (STEPS.length - 1)) * 100;

  const handleNext = () => {
    if (currentStepIndex < STEPS.length - 1) {
      setCurrentStep(STEPS[currentStepIndex + 1]);
    }
  };

  const handleBack = () => {
    if (currentStepIndex > 0) {
      setCurrentStep(STEPS[currentStepIndex - 1]);
    }
  };

  return (
    <div className="flex flex-col h-full bg-white text-gray-900">
      {/* Header & Progress */}
      {currentStep !== "confirmation" && (
        <div className="p-6 border-b border-gray-100 shrink-0">
          <div className="flex items-center justify-between mb-4">
            {currentStepIndex > 0 ? (
              <button onClick={handleBack} className="p-2 -ml-2 text-gray-500 hover:bg-gray-100 rounded-full">
                <ArrowLeft className="w-5 h-5" />
              </button>
            ) : (
              <div className="w-9" />
            )}
            <h2 className="font-heading text-xl font-semibold capitalize text-center">
              {currentStep.replace("-", " ")}
            </h2>
            <div className="w-9" />
          </div>
          <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
            <div 
              className="bg-[var(--color-primary)] h-full transition-all duration-300" 
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>
      )}

      {/* Content Area */}
      <div className="flex-1 overflow-y-auto p-6">
        {currentStep === "service" && (
          <div className="space-y-4">
            <h3 className="font-medium text-lg mb-4">Select a Service</h3>
            <div className="grid grid-cols-1 gap-3">
              {TREATMENTS.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setSelectedService(t.id)}
                  className={cn(
                    "flex items-center justify-between p-4 rounded-xl border-2 transition-all text-left",
                    selectedService === t.id 
                      ? "border-[var(--color-primary)] bg-[var(--color-primary)]/5" 
                      : "border-gray-100 hover:border-gray-200"
                  )}
                >
                  <div>
                    <p className="font-semibold">{t.name}</p>
                    <p className="text-sm text-gray-500">{t.duration} • {t.priceRange}</p>
                  </div>
                  {selectedService === t.id && <Check className="w-5 h-5 text-[var(--color-primary)]" />}
                </button>
              ))}
            </div>
          </div>
        )}

        {currentStep === "provider" && (
          <div className="space-y-4">
            <h3 className="font-medium text-lg mb-4">Select a Provider</h3>
            <div className="grid grid-cols-1 gap-3">
              {PROVIDERS.map((p) => (
                <button
                  key={p.id}
                  onClick={() => setSelectedProvider(p.id)}
                  className={cn(
                    "flex items-center justify-between p-4 rounded-xl border-2 transition-all text-left",
                    selectedProvider === p.id 
                      ? "border-[var(--color-primary)] bg-[var(--color-primary)]/5" 
                      : "border-gray-100 hover:border-gray-200"
                  )}
                >
                  <div>
                    <p className="font-semibold">{p.name}</p>
                    <p className="text-sm text-gray-500">{p.role}</p>
                  </div>
                  {selectedProvider === p.id && <Check className="w-5 h-5 text-[var(--color-primary)]" />}
                </button>
              ))}
            </div>
          </div>
        )}

        {currentStep === "datetime" && (
          <div className="space-y-6">
            <h3 className="font-medium text-lg mb-4">Select Date & Time</h3>
            <div className="space-y-2">
              <label className="text-sm font-medium">Date</label>
              <input 
                type="date" 
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="w-full p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[var(--color-primary)] focus:outline-none"
              />
            </div>
            {selectedDate && (
              <div className="space-y-2">
                <label className="text-sm font-medium">Available Times</label>
                <div className="grid grid-cols-3 gap-2">
                  {["09:00 AM", "10:30 AM", "01:00 PM", "02:30 PM", "04:00 PM"].map((time) => (
                    <button
                      key={time}
                      onClick={() => setSelectedTime(time)}
                      className={cn(
                        "py-2 px-3 text-sm rounded-lg border transition-all",
                        selectedTime === time
                          ? "bg-[var(--color-primary)] text-white border-[var(--color-primary)]"
                          : "border-gray-200 hover:border-gray-300 bg-white text-gray-900"
                      )}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {currentStep === "client-info" && (
          <div className="space-y-4">
            <h3 className="font-medium text-lg mb-4">Your Information</h3>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">First Name</label>
                  <input type="text" className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]" placeholder="Jane" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Last Name</label>
                  <input type="text" className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]" placeholder="Doe" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Email</label>
                <input type="email" className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]" placeholder="jane@example.com" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Phone</label>
                <input type="tel" className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]" placeholder="(555) 000-0000" />
              </div>
            </div>
          </div>
        )}

        {currentStep === "medical" && (
          <div className="space-y-6">
            <h3 className="font-medium text-lg mb-4">Quick Medical Screening</h3>
            <div className="space-y-4">
              <div className="space-y-2">
                <p className="text-sm font-medium">Are you currently pregnant or nursing?</p>
                <div className="flex gap-4">
                  <label className="flex items-center gap-2"><input type="radio" name="pregnant" className="text-[var(--color-primary)]" /> Yes</label>
                  <label className="flex items-center gap-2"><input type="radio" name="pregnant" defaultChecked className="text-[var(--color-primary)]" /> No</label>
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-medium">Have you used Accutane in the past 6 months?</p>
                <div className="flex gap-4">
                  <label className="flex items-center gap-2"><input type="radio" name="accutane" className="text-[var(--color-primary)]" /> Yes</label>
                  <label className="flex items-center gap-2"><input type="radio" name="accutane" defaultChecked className="text-[var(--color-primary)]" /> No</label>
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-medium">Any active skin infections or cold sores?</p>
                <div className="flex gap-4">
                  <label className="flex items-center gap-2"><input type="radio" name="infection" className="text-[var(--color-primary)]" /> Yes</label>
                  <label className="flex items-center gap-2"><input type="radio" name="infection" defaultChecked className="text-[var(--color-primary)]" /> No</label>
                </div>
              </div>
              <div className="p-4 bg-amber-50 rounded-xl text-sm text-amber-800">
                Please note: Certain treatments may be contraindicated based on these answers. Your provider will review this before your appointment.
              </div>
            </div>
          </div>
        )}

        {currentStep === "payment" && (
          <div className="space-y-6">
            <h3 className="font-medium text-lg mb-4">Secure Payment</h3>
            <p className="text-gray-600 text-sm">To secure your appointment, a $50 deposit is required. It will be applied to your treatment cost.</p>
            
            <div className="p-4 rounded-xl border border-gray-200 bg-gray-50 flex justify-between items-center mb-6">
              <span className="font-medium text-gray-700">Deposit Amount</span>
              <span className="font-bold text-xl text-gray-900">$50.00</span>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Card Information</label>
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="Card Number" 
                    className="w-full p-3 rounded-t-lg border border-gray-200 focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] relative z-10"
                  />
                  <div className="flex -mt-px">
                    <input 
                      type="text" 
                      placeholder="MM / YY" 
                      className="w-1/2 p-3 rounded-bl-lg border border-gray-200 focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] relative z-10"
                    />
                    <input 
                      type="text" 
                      placeholder="CVC" 
                      className="w-1/2 p-3 rounded-br-lg border border-gray-200 focus:outline-none focus:border-[var(--color-primary)] border-l-0 focus:ring-1 focus:ring-[var(--color-primary)] relative z-10"
                    />
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Name on Card</label>
                <input 
                  type="text" 
                  placeholder="Jane Doe" 
                  className="w-full p-3 rounded-lg border border-gray-200 flex items-center focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)]"
                />
              </div>

              <div className="flex items-center gap-2 mt-4 text-sm text-gray-500">
                <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"></path></svg>
                Payments are securely processed by Stripe.
              </div>
            </div>
          </div>
        )}

        {currentStep === "confirmation" && (
          <div className="flex flex-col items-center justify-center h-full text-center space-y-6 py-12">
            <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
              <Check className="w-10 h-10" />
            </div>
            <div>
              <h2 className="font-heading text-3xl mb-2">Booking Confirmed!</h2>
              <p className="text-gray-600 max-w-sm mx-auto">
                Your appointment is secured. We&apos;ve sent the details and preparation instructions to your email.
              </p>
            </div>
            <div className="p-4 bg-gray-50 rounded-xl w-full text-left space-y-2 border border-gray-100">
              <div className="flex justify-between">
                <span className="text-gray-500 text-sm">Service</span>
                <span className="font-medium text-sm">{TREATMENTS.find(t => t.id === selectedService)?.name || "Treatment"}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500 text-sm">Provider</span>
                <span className="font-medium text-sm">{PROVIDERS.find(p => p.id === selectedProvider)?.name || "First Available"}</span>
              </div>
              {selectedDate && selectedTime && (
                <div className="flex justify-between">
                  <span className="text-gray-500 text-sm">Date & Time</span>
                  <span className="font-medium text-sm">{selectedDate} at {selectedTime}</span>
                </div>
              )}
            </div>
            <Button 
              className="w-full bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] mt-4"
              onClick={onClose}
            >
              Done
            </Button>
          </div>
        )}
      </div>

      {/* Footer / Actions */}
      {currentStep !== "confirmation" && (
        <div className="p-6 border-t border-gray-100 bg-gray-50 shrink-0">
          <Button 
            className="w-full bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] flex items-center justify-center gap-2 text-lg h-14"
            onClick={handleNext}
            disabled={
              (currentStep === "service" && !selectedService) ||
              (currentStep === "datetime" && (!selectedDate || !selectedTime))
            }
          >
            {currentStep === "payment" ? "Confirm Booking & Pay $50" : "Continue"} 
            {currentStep !== "payment" && <ChevronRight className="w-5 h-5" />}
          </Button>
        </div>
      )}
    </div>
  );
}
