import type { WizardFormData, SimpleEmployee } from "./types";

export interface ValidationError {
  field: string;
  message: string;
}

/**
 * Validates form data for a given wizard step.
 * Returns an array of validation errors (empty = valid).
 */
export function validateStep(
  step: number,
  formData: WizardFormData,
  options: {
    employee: SimpleEmployee | null;
    isUSEmployee: boolean;
  }
): ValidationError[] {
  switch (step) {
    case 0:
      return validateEmployeeSearch(options.employee);
    case 1:
      return []; // Employee Details is read-only
    case 2:
      return validateTermOptions(formData);
    case 3:
      return validateTerminationInfo(formData, options.isUSEmployee);
    case 4:
      return []; // Leave & PTO has no strict required fields
    case 5:
      return validateFinalPay(formData);
    case 6:
      return validateDelivery(formData);
    default:
      return [];
  }
}

function validateEmployeeSearch(
  employee: SimpleEmployee | null
): ValidationError[] {
  const errors: ValidationError[] = [];
  if (!employee) {
    errors.push({
      field: "employee",
      message: "Please select an employee before proceeding.",
    });
  }
  return errors;
}

function validateTermOptions(
  formData: WizardFormData
): ValidationError[] {
  const errors: ValidationError[] = [];
  if (!formData.termProcessingType) {
    errors.push({
      field: "termProcessingType",
      message: "Please select a termination processing type.",
    });
  }
  return errors;
}

function validateTerminationInfo(
  formData: WizardFormData,
  isUSEmployee: boolean
): ValidationError[] {
  const errors: ValidationError[] = [];

  if (!formData.termType) {
    errors.push({
      field: "termType",
      message: "Termination Type is required.",
    });
  }

  if (!formData.actionReason) {
    errors.push({
      field: "actionReason",
      message: "Action Reason is required.",
    });
  }

  if (!formData.lastDateWorked) {
    errors.push({
      field: "lastDateWorked",
      message: "Last Date Worked is required.",
    });
  }

  if (!formData.terminationDate) {
    errors.push({
      field: "terminationDate",
      message: "Termination Date is required.",
    });
  }

  if (!formData.payThroughDate) {
    errors.push({
      field: "payThroughDate",
      message: "Pay Through Date is required.",
    });
  }

  if (isUSEmployee && !formData.finalPayDueDate) {
    errors.push({
      field: "finalPayDueDate",
      message: "Final Pay Due Date is required for US employees.",
    });
  }

  // Date logic: termination date should be >= last date worked
  if (formData.lastDateWorked && formData.terminationDate) {
    if (formData.terminationDate < formData.lastDateWorked) {
      errors.push({
        field: "terminationDate",
        message:
          "Termination Date cannot be before Last Date Worked.",
      });
    }
  }

  // Pay through date should be >= last date worked
  if (formData.lastDateWorked && formData.payThroughDate) {
    if (formData.payThroughDate < formData.lastDateWorked) {
      errors.push({
        field: "payThroughDate",
        message:
          "Pay Through Date cannot be before Last Date Worked.",
      });
    }
  }

  return errors;
}

function validateFinalPay(formData: WizardFormData): ValidationError[] {
  const errors: ValidationError[] = [];

  if (formData.earnings.length === 0) {
    errors.push({
      field: "earnings",
      message: "At least one earnings entry is required.",
    });
  }

  // Check that hourly earnings have hours and rate filled in
  for (const entry of formData.earnings) {
    if (entry.paymentType === "H" && entry.hours <= 0) {
      errors.push({
        field: `earnings_${entry.id}_hours`,
        message: `"${entry.description}" requires hours greater than 0.`,
      });
    }
    if (entry.paymentType === "H" && entry.rate <= 0) {
      errors.push({
        field: `earnings_${entry.id}_rate`,
        message: `"${entry.description}" requires a rate greater than 0.`,
      });
    }
    if (entry.paymentType === "A" && entry.amount <= 0) {
      errors.push({
        field: `earnings_${entry.id}_amount`,
        message: `"${entry.description}" requires an amount greater than 0.`,
      });
    }
  }

  return errors;
}

function validateDelivery(formData: WizardFormData): ValidationError[] {
  const errors: ValidationError[] = [];

  if (!formData.paymentMethod) {
    errors.push({
      field: "paymentMethod",
      message: "Payment Method is required.",
    });
  }

  if (!formData.deliveryMethod) {
    errors.push({
      field: "deliveryMethod",
      message: "Delivery Method is required.",
    });
  }

  if (!formData.checkDistribution) {
    errors.push({
      field: "checkDistribution",
      message: "Check Distribution is required.",
    });
  }

  return errors;
}
