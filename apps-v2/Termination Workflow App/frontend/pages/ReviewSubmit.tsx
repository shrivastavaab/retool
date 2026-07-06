import { useState, type ComponentType, type ReactNode } from "react";
import {
  CheckCircle,
  User,
  FileText,
  TreePalm,
  DollarSign,
  Truck,
  Send,
  AlertTriangle,
  ClipboardList,
} from "lucide-react";
import { Button } from "../lib/shadcn/button";
import { Label } from "../lib/shadcn/label";
import { Textarea } from "../lib/shadcn/textarea";
import { Switch } from "../lib/shadcn/switch";
import { Input } from "../lib/shadcn/input";
import { Badge } from "../lib/shadcn/badge";
import { Separator } from "../lib/shadcn/separator";
import { Alert, AlertDescription, AlertTitle } from "../lib/shadcn/alert";
import { useWizard } from "../hooks/useWizardState";
import TNetPageHeader from "../components/tnet/TNetPageHeader";
import { TERM_REASONS } from "../utils/types";

function SectionCard({
  icon: Icon,
  title,
  children,
  onEdit,
}: {
  icon: ComponentType<{ className?: string }>;
  title: string;
  children: ReactNode;
  onEdit?: () => void;
}) {
  return (
    <div className="bg-card border border-border rounded-lg shadow-retool-sm overflow-hidden">
      <div className="px-5 py-3 border-b border-border bg-muted/30 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Icon className="w-4 h-4 text-muted-foreground" />
          <h3 className="text-sm font-semibold text-foreground">{title}</h3>
        </div>
        {onEdit && (
          <Button
            size="sm"
            variant="ghost"
            className="h-7 text-xs text-primary hover:text-primary"
            onClick={onEdit}
          >
            Edit
          </Button>
        )}
      </div>
      <div className="px-5 py-3">{children}</div>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string | number | null | undefined }) {
  return (
    <div className="flex items-center justify-between py-1.5">
      <span className="text-sm text-muted-foreground">{label}</span>
      <span className="text-sm font-medium text-foreground">
        {value ?? "—"}
      </span>
    </div>
  );
}

export default function ReviewSubmit() {
  const { formData, employee, updateFormData, setCurrentStep } = useWizard();
  const [submitted, setSubmitted] = useState(false);

  if (!employee) return null;

  const termTypeLabels: Record<string, string> = {
    VOL: "Voluntary",
    IVOL: "Involuntary",
    DEC: "Deceased",
    VNS: "Never Started",
  };

  const termProcessingLabels: Record<string, string> = {
    REGULAR: "Regular Termination",
    ONE_TIME_SEP: "One-Time Separation Pay",
    RECURRING_SEP: "Recurring Separation Pay",
    SALARY_CONT: "Salary Continuance",
    DECEASED: "Deceased",
  };

  const reasonsForType = formData.termType ? TERM_REASONS[formData.termType] : undefined;
  const reasonLabel = reasonsForType
    ? reasonsForType.find((r) => r.code === formData.actionReason)?.label ?? formData.actionReason
    : formData.actionReason;

  const totalEarnings = formData.earnings.reduce((s, e) => s + e.amount, 0);
  const payableLeaveHrs = formData.leavePlans
    .filter((p) => p.payAtTermination === "Y")
    .reduce((s, p) => s + p.balance, 0);

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-16 space-y-4">
        <div className="w-16 h-16 rounded-full bg-success/10 flex items-center justify-center">
          <CheckCircle className="w-8 h-8 text-success" />
        </div>
        <h2 className="text-xl font-semibold text-foreground">
          Termination Submitted
        </h2>
        <p className="text-sm text-muted-foreground text-center max-w-md">
          The termination for{" "}
          <strong>
            {employee.firstName.trim()} {employee.lastName.trim()}
          </strong>{" "}
          has been submitted for processing. You will receive a confirmation
          email.
        </p>
        <Badge variant="success" className="text-sm px-3 py-1">
          Reference: TW-{Date.now().toString().slice(-8)}
        </Badge>
      </div>
    );
  }

  // Validation
  const missingFields: string[] = [];
  if (!formData.termProcessingType) missingFields.push("Termination Processing Type");
  if (!formData.termType) missingFields.push("Termination Type");
  if (!formData.actionReason) missingFields.push("Action Reason");
  if (!formData.lastDateWorked) missingFields.push("Last Date Worked");
  if (!formData.terminationDate) missingFields.push("Termination Date");

  return (
    <div className="space-y-6">
      <TNetPageHeader
        title="Review & Submit"
        description="Review all termination details before submitting."
      />

      {missingFields.length > 0 && (
        <Alert className="border-destructive/30 bg-destructive/5">
          <AlertTriangle className="h-4 w-4 text-destructive" />
          <AlertTitle className="text-destructive">Missing Required Fields</AlertTitle>
          <AlertDescription className="text-destructive/80">
            {missingFields.join(", ")}
          </AlertDescription>
        </Alert>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {/* Employee */}
        <SectionCard
          icon={User}
          title="Employee"
          onEdit={() => setCurrentStep(1)}
        >
          <Row
            label="Name"
            value={`${employee.firstName.trim()} ${employee.lastName.trim()}`}
          />
          <Row label="Employee ID" value={employee.empId} />
          <Row label="Email" value={employee.emailAddr} />
          <Row label="Hire Date" value={employee.lastHireDate} />
        </SectionCard>

        {/* Term Options */}
        <SectionCard
          icon={ClipboardList}
          title="Termination Options"
          onEdit={() => setCurrentStep(2)}
        >
          <Row
            label="Processing Type"
            value={termProcessingLabels[formData.termProcessingType] ?? "—"}
          />
        </SectionCard>

        {/* Termination Info */}
        <SectionCard
          icon={FileText}
          title="Termination Info"
          onEdit={() => setCurrentStep(3)}
        >
          <Row
            label="Type"
            value={termTypeLabels[formData.termType] ?? "—"}
          />
          <Row label="Reason" value={reasonLabel} />
          <Row label="Last Date Worked" value={formData.lastDateWorked} />
          <Row label="Termination Date" value={formData.terminationDate} />
          <Row label="Pay Through Date" value={formData.payThroughDate} />
          <Row
            label="Final Pay Due Date"
            value={formData.finalPayDueDate}
          />
        </SectionCard>

        {/* Leave */}
        <SectionCard
          icon={TreePalm}
          title="Leave & PTO"
          onEdit={() => setCurrentStep(4)}
        >
          <Row
            label="Leave Plans"
            value={formData.leavePlans.length}
          />
          <Row
            label="Payable Hours"
            value={`${payableLeaveHrs.toFixed(1)} hrs`}
          />
          <Row
            label="Pay Accrued Leave"
            value={formData.payAccruedLeave ? "Yes" : "No"}
          />
        </SectionCard>

        {/* Final Pay */}
        <SectionCard
          icon={DollarSign}
          title="Final Pay"
          onEdit={() => setCurrentStep(5)}
        >
          <Row
            label="Earning Lines"
            value={formData.earnings.length}
          />
          <Row
            label="Total Earnings"
            value={`$${totalEarnings.toFixed(2)}`}
          />
          <Row
            label="Additional Pay"
            value={
              formData.additionalPay
                ? `$${formData.additionalPay.toFixed(2)}`
                : "—"
            }
          />
          <Row
            label="Override Benefits"
            value={formData.overrideBenefits ? "Yes" : "No"}
          />
        </SectionCard>

        {/* Delivery */}
        <SectionCard
          icon={Truck}
          title="Delivery"
          onEdit={() => setCurrentStep(6)}
        >
          <Row
            label="Payment Method"
            value={formData.paymentMethod || "—"}
          />
          <Row
            label="Delivery Method"
            value={formData.deliveryMethod || "—"}
          />
          <Row
            label="Check Distribution"
            value={formData.checkDistribution || "—"}
          />
          <Row
            label="DDP Active Until"
            value={formData.ddpActiveDate}
          />
        </SectionCard>

        {/* Manager */}
        <SectionCard icon={User} title="Manager Info">
          <Row label="Manager" value={formData.mgrName} />
          <Row label="HRM Contacted" value={formData.hrmContacted === "Y" ? "Yes" : formData.hrmContacted === "N" ? "No" : "—"} />
          <Row label="HRM Name" value={formData.hrmName} />
        </SectionCard>
      </div>

      <Separator />

      {/* Notes & Email */}
      <div className="bg-card border border-border rounded-lg shadow-retool-sm overflow-hidden">
        <div className="px-5 py-3.5 border-b border-border bg-muted/30 flex items-center gap-2">
          <Send className="w-4 h-4 text-muted-foreground" />
          <h3 className="text-sm font-semibold text-foreground">
            Submission Options
          </h3>
        </div>
        <div className="p-5 space-y-5">
          <div>
            <Label className="text-sm font-medium">Notes / Comments</Label>
            <Textarea
              className="mt-1.5"
              rows={3}
              placeholder="Add any notes about this termination..."
              value={formData.notes}
              onChange={(e) => updateFormData({ notes: e.target.value })}
            />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <Label className="text-sm font-medium">
                Send Confirmation Email
              </Label>
              <p className="text-xs text-muted-foreground mt-0.5">
                An email will be sent to the address below
              </p>
            </div>
            <Switch
              checked={formData.sendConfirmEmail}
              onCheckedChange={(checked) =>
                updateFormData({ sendConfirmEmail: checked })
              }
            />
          </div>

          {formData.sendConfirmEmail && (
            <div>
              <Label className="text-sm font-medium">Email Address</Label>
              <Input
                type="email"
                className="mt-1.5 max-w-md"
                value={formData.emailAddress}
                onChange={(e) =>
                  updateFormData({ emailAddress: e.target.value })
                }
              />
            </div>
          )}
        </div>
      </div>

      {/* Submit */}
      <div className="flex items-center justify-end gap-3 pt-2">
        <Button
          variant="outline"
          onClick={() => setCurrentStep(6)}
        >
          Back
        </Button>
        <Button
          className="bg-primary hover:bg-primary/90 text-primary-foreground px-8"
          onClick={() => setSubmitted(true)}
          disabled={missingFields.length > 0}
        >
          <Send className="w-4 h-4 mr-2" />
          Submit Termination
        </Button>
      </div>
    </div>
  );
}
