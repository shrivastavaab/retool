import { Check } from "lucide-react";
import { WIZARD_STEPS } from "../utils/types";
import { cn } from "../lib/shadcn/utils";

interface WizardStepperProps {
  currentStep: number;
  furthestStep: number;
  onStepClick: (step: number) => void;
}

export default function WizardStepper({
  currentStep,
  furthestStep,
  onStepClick,
}: WizardStepperProps) {
  return (
    <nav className="flex flex-col gap-1 py-4" aria-label="Wizard steps">
      {WIZARD_STEPS.map((step, index) => {
        const isCompleted = index < furthestStep;
        const isCurrent = index === currentStep;
        const isAccessible = index <= furthestStep;

        return (
          <button
            key={step.id}
            onClick={() => isAccessible && onStepClick(index)}
            disabled={!isAccessible}
            className={cn(
              "flex items-start gap-3 px-4 py-3 text-left rounded-lg transition-colors group",
              isCurrent && "bg-primary/10 dark:bg-primary/15",
              isAccessible && !isCurrent && "hover:bg-muted/50 cursor-pointer",
              !isAccessible && "opacity-50 cursor-not-allowed"
            )}
          >
            {/* Step indicator circle */}
            <div
              className={cn(
                "flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold border-2 transition-colors mt-0.5",
                isCompleted &&
                  "bg-primary border-primary text-primary-foreground",
                isCurrent &&
                  "border-primary text-primary bg-card dark:bg-transparent",
                !isCompleted &&
                  !isCurrent &&
                  "border-muted-foreground/30 text-muted-foreground/50 bg-transparent"
              )}
            >
              {isCompleted ? (
                <Check className="w-4 h-4" />
              ) : (
                <span>{index + 1}</span>
              )}
            </div>

            {/* Step label */}
            <div className="min-w-0">
              <p
                className={cn(
                  "text-sm font-medium leading-tight",
                  isCurrent && "text-primary",
                  isCompleted && "text-foreground",
                  !isCurrent && !isCompleted && "text-muted-foreground"
                )}
              >
                {step.label}
              </p>
              <p
                className={cn(
                  "text-xs mt-0.5 leading-tight",
                  isCurrent
                    ? "text-primary/70"
                    : "text-muted-foreground/60"
                )}
              >
                {step.description}
              </p>
            </div>
          </button>
        );
      })}
    </nav>
  );
}
