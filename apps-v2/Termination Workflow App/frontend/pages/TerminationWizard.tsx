import { useState, useMemo, useCallback } from "react";
import { ChevronLeft, ChevronRight, Phone, Mail, Clock, MessageSquare, AlertCircle, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../lib/shadcn/dialog";
import { validateStep, type ValidationError } from "../utils/validation";
import { Button } from "../lib/shadcn/button";
import WizardStepper from "../components/WizardStepper";
import EmployeeBanner from "../components/EmployeeBanner";
import EmployeeSearch from "./EmployeeSearch";
import EmployeeDetails from "./EmployeeDetails";
import TerminationOptions from "./TerminationOptions";
import TerminationInfo from "./TerminationInfo";
import LeaveAndPTO from "./LeaveAndPTO";
import FinalPay from "./FinalPay";
import DeliveryInstructions from "./DeliveryInstructions";
import ReviewSubmit from "./ReviewSubmit";
import { WizardContext } from "../hooks/useWizardState";
import {
  mockRetrieveInfo,
  mockStateLaw,
  mockPendingTerminations,
  initialFormData,
} from "../utils/mockData";
import { WIZARD_STEPS } from "../utils/types";
import type { SimpleEmployee, WizardFormData } from "../utils/types";

export default function TerminationWizard() {
  const [currentStep, setCurrentStep] = useState(0);
  const [furthestStep, setFurthestStep] = useState(0);
  const [employee, setEmployeeState] = useState<SimpleEmployee | null>(null);
  const [formData, setFormData] = useState<WizardFormData>(initialFormData);
  const [validationErrors, setValidationErrors] = useState<ValidationError[]>([]);

  const setEmployee = useCallback((emp: SimpleEmployee | null) => {
    setEmployeeState(emp);
  }, []);

  const updateFormData = useCallback(
    (updates: Partial<WizardFormData>) => {
      setFormData((prev) => ({ ...prev, ...updates }));
    },
    []
  );

  const clearValidationErrors = useCallback(() => {
    setValidationErrors([]);
  }, []);

  const goNext = useCallback(() => {
    setCurrentStep((prev) => {
      const errors = validateStep(prev, formData, {
        employee,
        isUSEmployee: mockStateLaw.countryCd === "US",
      });
      if (errors.length > 0) {
        setValidationErrors(errors);
        return prev;
      }
      setValidationErrors([]);
      const next = Math.min(prev + 1, WIZARD_STEPS.length - 1);
      setFurthestStep((f) => Math.max(f, next));
      return next;
    });
  }, [formData, employee]);

  const goBack = useCallback(() => {
    setValidationErrors([]);
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  }, []);

  const handleStepClick = useCallback(
    (step: number) => {
      if (step <= furthestStep) {
        setValidationErrors([]);
        setCurrentStep(step);
      }
    },
    [furthestStep]
  );

  // Derived state
  const isUSEmployee = mockStateLaw.countryCd === "US";
  const eligBenefits = employee?.emplStatus === "A"; // Simplified mock check
  const needBenDefault = eligBenefits; // Mock: always needs default

  const contextValue = useMemo(
    () => ({
      currentStep,
      setCurrentStep: handleStepClick,
      furthestStep,
      employee,
      setEmployee,
      retrieveInfo: employee ? mockRetrieveInfo : null,
      stateLaw: employee ? mockStateLaw : null,
      formData,
      updateFormData,
      pendingTerminations: mockPendingTerminations,
      eligBenefits,
      needBenDefault,
      isUSEmployee,
      goNext,
      goBack,
      canProceed: true,
      validationErrors,
      clearValidationErrors,
    }),
    [
      currentStep,
      handleStepClick,
      furthestStep,
      employee,
      setEmployee,
      formData,
      updateFormData,
      eligBenefits,
      needBenDefault,
      isUSEmployee,
      goNext,
      goBack,
      validationErrors,
      clearValidationErrors,
    ]
  );

  const steps = [
    <EmployeeSearch key="search" />,
    <EmployeeDetails key="details" />,
    <TerminationOptions key="termoptions" />,
    <TerminationInfo key="terminfo" />,
    <LeaveAndPTO key="leave" />,
    <FinalPay key="finalpay" />,
    <DeliveryInstructions key="delivery" />,
    <ReviewSubmit key="review" />,
  ];

  const isFirstStep = currentStep === 0;
  const isLastStep = currentStep === WIZARD_STEPS.length - 1;

  return (
    <WizardContext.Provider value={contextValue}>
      <div className="flex h-screen bg-background overflow-hidden">
        {/* Left Sidebar - Stepper */}
        <aside className="w-64 flex-shrink-0 bg-card border-r border-border flex flex-col">
          {/* Logo / Title */}
          <div className="px-5 py-4 border-b border-border">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-600 dark:bg-emerald-500 flex items-center justify-center">
                <span className="text-white font-bold text-sm">T</span>
              </div>
              <div>
                <h1 className="text-sm font-bold text-foreground leading-tight">
                  TriNet
                </h1>
                <p className="text-[10px] text-muted-foreground leading-tight">
                  Termination Wizard
                </p>
              </div>
            </div>
          </div>

          {/* Steps */}
          <div className="flex-1 overflow-y-auto px-2">
            <WizardStepper
              currentStep={currentStep}
              furthestStep={furthestStep}
              onStepClick={handleStepClick}
            />
          </div>

          {/* Help */}
          <div className="px-4 py-3 border-t border-border">
            <p className="text-[11px] text-muted-foreground">
              Need help?{" "}
              <Dialog>
                <DialogTrigger asChild>
                  <button className="text-emerald-600 dark:text-emerald-400 hover:underline font-medium cursor-pointer">
                    Contact HR Support
                  </button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle>Contact HR Support</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4 pt-2">
                    <p className="text-sm text-muted-foreground">
                      Our HR Support team is available to assist you with the termination process.
                    </p>

                    <div className="space-y-3">
                      <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
                        <Phone className="w-4 h-4 mt-0.5 text-emerald-600 dark:text-emerald-400" />
                        <div>
                          <p className="text-sm font-medium text-foreground">Phone</p>
                          <p className="text-sm text-muted-foreground">1-800-638-0461</p>
                          <p className="text-xs text-muted-foreground">Option 3 for HR Support</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
                        <Mail className="w-4 h-4 mt-0.5 text-emerald-600 dark:text-emerald-400" />
                        <div>
                          <p className="text-sm font-medium text-foreground">Email</p>
                          <p className="text-sm text-muted-foreground">hrsupport@trinet.com</p>
                          <p className="text-xs text-muted-foreground">Response within 24 hours</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
                        <MessageSquare className="w-4 h-4 mt-0.5 text-emerald-600 dark:text-emerald-400" />
                        <div>
                          <p className="text-sm font-medium text-foreground">Live Chat</p>
                          <p className="text-sm text-muted-foreground">Available on TriNet Platform</p>
                          <p className="text-xs text-muted-foreground">Avg. wait time: 2 minutes</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
                        <Clock className="w-4 h-4 mt-0.5 text-emerald-600 dark:text-emerald-400" />
                        <div>
                          <p className="text-sm font-medium text-foreground">Hours of Operation</p>
                          <p className="text-sm text-muted-foreground">Mon–Fri: 6:00 AM – 6:00 PM PT</p>
                          <p className="text-xs text-muted-foreground">Closed on major holidays</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </p>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
          {/* Employee Banner (shown after step 0) */}
          {employee && currentStep > 0 && (
            <div className="flex-shrink-0 px-6 pt-4">
              <EmployeeBanner
                employee={employee}
                retrieveInfo={mockRetrieveInfo}
              />
            </div>
          )}

          {/* Validation Error Banner */}
          {validationErrors.length > 0 && (
            <div className="flex-shrink-0 px-6 pt-4">
              <div className="rounded-lg border border-destructive/40 bg-destructive/5 dark:bg-destructive/10 p-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="text-sm font-semibold text-destructive">
                        Please fix the following errors before continuing
                      </h4>
                      <ul className="mt-2 space-y-1">
                        {validationErrors.map((err) => (
                          <li
                            key={err.field}
                            className="text-sm text-destructive/80 flex items-center gap-1.5"
                          >
                            <span className="w-1 h-1 rounded-full bg-destructive/60 flex-shrink-0" />
                            {err.message}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <button
                    onClick={clearValidationErrors}
                    className="text-destructive/60 hover:text-destructive transition-colors p-1"
                    aria-label="Dismiss errors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Step Content */}
          <div className="flex-1 overflow-y-auto px-6 py-5">
            {steps[currentStep] ?? null}
          </div>

          {/* Bottom Navigation */}
          {!isLastStep && (
            <div className="flex-shrink-0 px-6 py-4 border-t border-border bg-card flex items-center justify-between">
              <div>
                {!isFirstStep && (
                  <Button variant="outline" onClick={goBack}>
                    <ChevronLeft className="w-4 h-4 mr-1" />
                    Back
                  </Button>
                )}
              </div>

              <div className="flex items-center gap-3">
                <span className="text-xs text-muted-foreground">
                  Step {currentStep + 1} of {WIZARD_STEPS.length}
                </span>
                {currentStep > 0 && (
                  <Button
                    onClick={goNext}
                    className="bg-emerald-600 hover:bg-emerald-700 text-white"
                  >
                    Next
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
                )}
              </div>
            </div>
          )}
        </main>
      </div>
    </WizardContext.Provider>
  );
}
