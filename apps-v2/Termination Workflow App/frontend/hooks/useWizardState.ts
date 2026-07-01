import { createContext, useContext } from "react";
import type {
  SimpleEmployee,
  RetrieveInfoVO,
  StateLaw,
  WizardFormData,
  PendingTermination,
} from "../utils/types";
import type { ValidationError } from "../utils/validation";

export interface WizardContextType {
  currentStep: number;
  setCurrentStep: (step: number) => void;
  furthestStep: number;
  employee: SimpleEmployee | null;
  setEmployee: (emp: SimpleEmployee | null) => void;
  retrieveInfo: RetrieveInfoVO | null;
  stateLaw: StateLaw | null;
  formData: WizardFormData;
  updateFormData: (updates: Partial<WizardFormData>) => void;
  pendingTerminations: PendingTermination[];
  eligBenefits: boolean;
  needBenDefault: boolean;
  isUSEmployee: boolean;
  goNext: () => void;
  goBack: () => void;
  canProceed: boolean;
  validationErrors: ValidationError[];
  clearValidationErrors: () => void;
}

export const WizardContext = createContext<WizardContextType | null>(null);

export function useWizard(): WizardContextType {
  const ctx = useContext(WizardContext);
  if (!ctx) {
    throw new Error("useWizard must be used within WizardProvider");
  }
  return ctx;
}
