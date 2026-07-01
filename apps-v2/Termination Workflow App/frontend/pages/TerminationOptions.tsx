import { Info } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "../lib/shadcn/radio-group";
import { Alert, AlertDescription } from "../lib/shadcn/alert";
import { useWizard } from "../hooks/useWizardState";
import type { TermProcessingType } from "../utils/types";

const TERM_OPTIONS: {
  value: TermProcessingType;
  label: string;
  description: string;
}[] = [
  {
    value: "REGULAR",
    label: "Regular Termination",
    description:
      "Employee terminates and is paid regular and accrued leave.",
  },
  {
    value: "ONE_TIME_SEP",
    label: "Termination with One-Time Separation Pay",
    description:
      "Employee terminates from employment and paid a lump sum amount over and above regular pay. This applies to voluntary or involuntary termination when paid in lieu of notice or the employee signs a release agreement. This is the preferred and more prevalent situation.",
  },
  {
    value: "RECURRING_SEP",
    label: "Termination with Recurring Separation Pay",
    description:
      "Employment terminates due to voluntary or involuntary reasons and employer/customer is obliged or desires to continue paying the employee for a certain period of time. Since employment is terminated, the employee is not expected to perform any duties for the employer/customer in exchange for compensation.",
  },
  {
    value: "SALARY_CONT",
    label: "Termination following Salary Continuance",
    description:
      'Employee is no longer required to come into the worksite but considered "on call". The definition of duties that is expected of the employee must be clearly documented. All compensation and benefits (including Worker\'s comp liability) continue for the duration of the "on call" arrangement. This includes Disability and Life Insurance plans as well as PTO accruals.',
  },
  {
    value: "DECEASED",
    label: "Deceased",
    description:
      "Process termination due to the death of the employee.",
  },
];

export default function TerminationOptions() {
  const { formData, updateFormData } = useWizard();

  const handleChange = (value: string) => {
    const v = value as TermProcessingType;
    updateFormData({
      termProcessingType: v,
      // Auto-set termType based on processing type
      ...(v === "DECEASED" ? { termType: "DEC" as const } : {}),
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-foreground">
          Termination Options
        </h2>
        <p className="text-sm text-muted-foreground mt-1">
          What type of termination would you like to process?
        </p>
      </div>

      <Alert className="border-blue-200 bg-blue-50 dark:bg-blue-950/20 dark:border-blue-800">
        <Info className="h-4 w-4 text-blue-600 dark:text-blue-400" />
        <AlertDescription className="text-blue-700 dark:text-blue-400">
          Select the processing type that best matches the termination
          scenario. This determines how final pay and benefits are handled.
        </AlertDescription>
      </Alert>

      <div className="bg-card border border-border rounded-lg shadow-retool-sm overflow-hidden">
        <div className="px-5 py-3.5 border-b border-border bg-muted/30">
          <h3 className="text-sm font-semibold text-foreground">
            Processing Type <span className="text-destructive">*</span>
          </h3>
        </div>
        <div className="p-5">
          <RadioGroup
            value={formData.termProcessingType}
            onValueChange={handleChange}
            className="space-y-3"
          >
            {TERM_OPTIONS.map((option) => (
              <label
                key={option.value}
                className={`
                  flex items-start gap-3 p-4 rounded-lg border-2 cursor-pointer transition-all
                  ${
                    formData.termProcessingType === option.value
                      ? "border-emerald-500 bg-emerald-50/50 dark:bg-emerald-950/20 dark:border-emerald-600"
                      : "border-border hover:border-muted-foreground/30 hover:bg-muted/30"
                  }
                `}
              >
                <RadioGroupItem
                  value={option.value}
                  className="mt-1 flex-shrink-0"
                />
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    {option.label}
                  </p>
                  <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                    {option.description}
                  </p>
                </div>
              </label>
            ))}
          </RadioGroup>
        </div>
      </div>
    </div>
  );
}
