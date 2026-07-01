// Employee types
export interface SimpleEmployee {
  empId: string;
  lastName: string;
  firstName: string;
  phoneNumber: string;
  emailAddr: string;
  emplStatus: string;
  locationId: string;
  primaryFirstName: string | null;
  primaryLastName: string | null;
  hccLastName: string | null;
  hccFirstName: string | null;
  hccPhoneNumber: string | null;
  hccEmailAddr: string | null;
  termStatus: string;
  serviceDt: string;
  lastHireDate: string;
}

export interface EarningCode {
  erncd: string;
  desc: string;
  paymentType: string;
  prcCategory: string;
  hrsOnly: string;
  multiFactor: number;
  addToGross: string;
  perUnitRate: string;
}

export interface RetrieveInfoVO {
  address1: string;
  address2: string;
  city: string;
  homeState: string;
  postalCd: string;
  dollarEarningCodes: EarningCode[];
  hourEarningCodes: EarningCode[];
  unitEarningCodes: EarningCode[];
}

export interface TermVoSubEmpInfo {
  endDt: string;
  effDt: string | null;
  mgdEvent: string;
  mgdReason: string | null;
  emplymntStatus: string;
  dateContacted: string | null;
  death: string | null;
  dateGaveNotice: string | null;
  lastWorkDate: string | null;
  emailAddr: string | null;
  othAddr1: string | null;
  othAddr2: string | null;
  othCity: string | null;
  othStateProvinceCd: string | null;
  othCountryCd: string | null;
  othPostalCd: string | null;
  rehireEligibility: string | null;
  referrerCode: string;
  workPeriod: string;
}

export interface TermVoSubBenefits {
  estBenefName: string | null;
  estBenefTaxId: string | null;
}

export interface TermVoSubPayBal {
  ptoHrsTaken: number | null;
  vacHrsTaken: number | null;
  sickHrsTaken: number | null;
  finalHoursWorked: number | null;
  totalFinalHrs: number | null;
  finalOtHoursWorked: number | null;
  curPtoAdjust: number | null;
  curPtoAdjust2: number | null;
  ptoBalance: number | null;
  curPtoBalance: number | null;
  curPtoBalance2: number | null;
  negPtoBalance: number | null;
  payPtoBalance: number | null;
  sickBalance: number | null;
  paySickBalance: number | null;
  negSickBalance: number | null;
}

export interface TermVoSubPay {
  payThroughDate: string | null;
  othPay: number | null;
  additionalPay: number | null;
  additionalDescr: string | null;
  finalCheckDist: string | null;
  othChkDistAddr: string | null;
  finalReimburse: number | null;
  othChkDistName: string | null;
  payAccruedLvHrs: string | null;
  hoursEarning: string | null;
  dollarsEarning: string | null;
  totalFinalDollars: number | null;
  equalPayment: string | null;
  checkDate: string | null;
  sameCheckDate: string | null;
  addlSeparateCk: string | null;
  commissionSeparateCk: string | null;
  bonusSeparateCk: string | null;
  payUfhAccruedHrs: string | null;
  paymentMethod: string | null;
  deliveryMethod: string | null;
  deliveryIstr: string | null;
  additionalPayCode: string | null;
  directDepositEndDate: string | null;
  offCycle: string | null;
  paymentCycleCheckDate: string | null;
  inHouseCkType: string | null;
  inHouseCkAmount: number | null;
  inHouseCkContact: string | null;
  inHouseCkAttachment: string | null;
  finalPayPeriodEarnings: number | null;
  previousPayPeriodEarnings: number | null;
  finalPayDueDate: string | null;
  firstPaymentDate: string | null;
  lastPaymentDate: string | null;
}

export interface TermVoSubMgr {
  hrmContacted: string | null;
  hrmName: string | null;
  mgrName: string | null;
}

export interface TermVoSubProcess {
  confirmSendEmail: string | null;
  emailAddress: string | null;
  emailSent: string | null;
  notes: string | null;
  timestamp: string;
  operatorId: string;
  auditKey: string | null;
  updateKey: string | null;
  emplTermEnd: string | null;
  hccConsultDates: string | null;
  deductAgreementForm: string | null;
  isSubmitted: string | null;
  uiCurrTarget: number;
  uiFurthestTarget: number;
  tabMask: string;
  chklstRequired: string | null;
  chklstTimestamp: string | null;
  isRevised: string | null;
}

export interface TerminationVO {
  personId: string;
  positionId: string;
  hrAuthId: string | null;
  companyId: string | null;
  uniqueId: number;
  termVoSubEmpInfo: TermVoSubEmpInfo;
  termVoSubBenefits: TermVoSubBenefits;
  termVoSubPayBal: TermVoSubPayBal;
  termVoSubPay: TermVoSubPay;
  termVoSubMgr: TermVoSubMgr;
  termVoSubProcess: TermVoSubProcess;
  employeeId: string | null;
  checkListEnabled: boolean;
  integrationCenterMarketingEnabled: boolean;
  salesDemoEnabled: boolean;
  deaFlowEnabled: boolean;
}

export interface StateLaw {
  stateProvinceCd: string;
  countryCd: string;
  stateProvincDesc: string;
  overview: string;
  leavePayDesc: string;
  reqPaymentMethodV: string;
  payDischargeDateDesc: string;
  payResignDateDesc: string;
  payDeathDesc: string;
  reqPaymentMethodIV: string;
}

// Pending Termination
export interface PendingTermination {
  id: string;
  empId: string;
  name: string;
  company: string;
  processDate: string;
  status: string;
  termType: string;
}

// Leave Plan
export interface LeavePlan {
  planType: string;
  planName: string;
  benefitPlan: string;
  accrualRate: string;
  balance: number;
  hrsTaken: number;
  prvYrHrs: number;
  payAtTermination: string;
  earnsBeginDt: string;
  earnsEndDt: string;
}

// Earnings Entry (for final pay)
export interface EarningsEntry {
  id: string;
  erncd: string;
  description: string;
  hours: number;
  rate: number;
  amount: number;
  paymentType: string;
}

// Wizard State
export type TermType = "VOL" | "IVOL" | "DEC" | "VNS" | "";
export type TermProcessingType =
  | "REGULAR"
  | "ONE_TIME_SEP"
  | "RECURRING_SEP"
  | "SALARY_CONT"
  | "DECEASED"
  | "";
export type DeliveryMethodType = "MAIL" | "PICKUP" | "OVERNIGHT" | "FEDEX" | "";
export type PaymentMethodType = "CHECK" | "DD" | "WIRE" | "";
export type CheckDistType = "COMPANY" | "EMPLOYEE" | "OTHER" | "";

export interface WizardFormData {
  // Term Options
  termProcessingType: TermProcessingType;

  // Term Info
  termType: TermType;
  actionReason: string;
  lastDateWorked: string;
  terminationDate: string;
  noticeDate: string;
  payThroughDate: string;
  finalPayDueDate: string;
  rehireEligibility: string;
  dateContacted: string;

  // Leave & PTO
  leavePlans: LeavePlan[];
  payAccruedLeave: boolean;

  // Final Pay
  earnings: EarningsEntry[];
  additionalPay: number;
  additionalPayCode: string;
  additionalPayDesc: string;
  overrideBenefits: boolean;
  numberOfPremiums: number;
  numberOfBenSupp: number;
  numberOfGenlDeds: number;

  // Delivery
  paymentMethod: PaymentMethodType;
  deliveryMethod: DeliveryMethodType;
  checkDistribution: CheckDistType;
  directDepositEndDate: string;
  deliveryInstructions: string;
  ddpActiveDate: string;

  // Manager Info
  mgrName: string;
  hrmContacted: string;
  hrmName: string;

  // Process
  notes: string;
  sendConfirmEmail: boolean;
  emailAddress: string;
}

export interface WizardStep {
  id: number;
  label: string;
  description: string;
}

export const WIZARD_STEPS: WizardStep[] = [
  { id: 0, label: "Employee Search", description: "Find or select an employee" },
  { id: 1, label: "Employee Details", description: "Review employee information" },
  { id: 2, label: "Term Options", description: "Select termination processing type" },
  { id: 3, label: "Termination Info", description: "Enter termination details" },
  { id: 4, label: "Leave & PTO", description: "Review leave balances" },
  { id: 5, label: "Final Pay", description: "Configure final check" },
  { id: 6, label: "Delivery", description: "Set delivery options" },
  { id: 7, label: "Review & Submit", description: "Review and submit" },
];

export const TERM_REASONS: Record<TermType, Array<{ code: string; label: string }>> = {
  VOL: [
    { code: "VR", label: "Voluntary Resignation" },
    { code: "VRT", label: "Voluntary Retirement" },
    { code: "VRL", label: "Voluntary Relocation" },
    { code: "VNS", label: "Never Started" },
    { code: "VOT", label: "Other Voluntary" },
  ],
  IVOL: [
    { code: "IFP", label: "Involuntary - For Cause (Performance)" },
    { code: "IFC", label: "Involuntary - For Cause (Conduct)" },
    { code: "ILO", label: "Involuntary - Layoff" },
    { code: "IPE", label: "Involuntary - Position Eliminated" },
    { code: "IOT", label: "Other Involuntary" },
  ],
  DEC: [
    { code: "DDT", label: "Deceased" },
  ],
  VNS: [
    { code: "VNS", label: "Never Started" },
  ],
  "": [],
};
