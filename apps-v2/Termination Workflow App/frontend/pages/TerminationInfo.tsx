import { AlertTriangle, Info } from "lucide-react";
import { Input } from "../lib/shadcn/input";
import { Label } from "../lib/shadcn/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../lib/shadcn/select";
import { RadioGroup, RadioGroupItem } from "../lib/shadcn/radio-group";
import { Alert, AlertDescription } from "../lib/shadcn/alert";
import { Separator } from "../lib/shadcn/separator";
import { useWizard } from "../hooks/useWizardState";
import { TERM_REASONS } from "../utils/types";
import type { TermType } from "../utils/types";

export default function TerminationInfo() {
  const { formData, updateFormData, isUSEmployee, employee } = useWizard();

  const isVNS = formData.actionReason === "VNS";
  const isInvoluntary = formData.termType === "IVOL";

  const handleTermTypeChange = (value: string) => {
    const tt = value as TermType;
    updateFormData({
      termType: tt,
      actionReason: "",
      // Reset VNS-specific overrides
      ...(tt !== "VOL" ? { noticeDate: "" } : {}),
    });
  };

  const handleReasonChange = (value: string) => {
    updateFormData({ actionReason: value });

    // VNS auto-fills dates to hire date (TER-4897 / TER-12027)
    if (value === "VNS" && employee) {
      updateFormData({
        actionReason: value,
        lastDateWorked: employee.lastHireDate,
        terminationDate: employee.lastHireDate,
        payThroughDate: employee.lastHireDate,
        finalPayDueDate: employee.lastHireDate,
      });
    }
  };

  const reasons = formData.termType ? TERM_REASONS[formData.termType] : [];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-foreground">
          Termination Information
        </h2>
        <p className="text-sm text-muted-foreground mt-1">
          Select the termination type, reason, and key dates.
        </p>
      </div>

      {/* VNS Alert */}
      {isVNS && (
        <Alert className="border-amber-200 bg-amber-50 dark:bg-amber-950/20 dark:border-amber-800">
          <AlertTriangle className="h-4 w-4 text-amber-600 dark:text-amber-400" />
          <AlertDescription className="text-amber-700 dark:text-amber-400">
            <strong>Never Started:</strong> All dates have been set to the hire date.
            This termination will be submitted directly without additional steps.
          </AlertDescription>
        </Alert>
      )}

      {/* Termination Type */}
      <div className="bg-card border border-border rounded-lg shadow-retool-sm overflow-hidden">
        <div className="px-5 py-3.5 border-b border-border bg-muted/30">
          <h3 className="text-sm font-semibold text-foreground">
            Termination Type
          </h3>
        </div>
        <div className="p-5">
          <RadioGroup
            value={formData.termType}
            onValueChange={handleTermTypeChange}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {[
              { value: "VOL", label: "Voluntary", desc: "Employee-initiated" },
              { value: "IVOL", label: "Involuntary", desc: "Employer-initiated" },
              { value: "DEC", label: "Deceased", desc: "Death of employee" },
              { value: "VNS", label: "Never Started", desc: "Did not begin work" },
            ].map((option) => (
              <label
                key={option.value}
                className={`
                  relative flex flex-col items-center gap-2 rounded-lg border-2 p-4 cursor-pointer transition-all
                  ${formData.termType === option.value
                    ? "border-emerald-500 bg-emerald-50/50 dark:bg-emerald-950/20 dark:border-emerald-600"
                    : "border-border hover:border-muted-foreground/30 hover:bg-muted/30"
                  }
                `}
              >
                <RadioGroupItem value={option.value} className="sr-only" />
                <span className="text-sm font-semibold text-foreground">
                  {option.label}
                </span>
                <span className="text-xs text-muted-foreground text-center">
                  {option.desc}
                </span>
              </label>
            ))}
          </RadioGroup>
        </div>
      </div>

      {/* Reason Code */}
      {formData.termType && (
        <div className="bg-card border border-border rounded-lg shadow-retool-sm overflow-hidden">
          <div className="px-5 py-3.5 border-b border-border bg-muted/30">
            <h3 className="text-sm font-semibold text-foreground">
              Reason & Dates
            </h3>
          </div>
          <div className="p-5 space-y-5">
            {/* Reason */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <Label className="text-sm font-medium">
                  Action Reason <span className="text-destructive">*</span>
                </Label>
                <Select
                  value={formData.actionReason}
                  onValueChange={handleReasonChange}
                >
                  <SelectTrigger className="mt-1.5">
                    <SelectValue placeholder="Select reason..." />
                  </SelectTrigger>
                  <SelectContent>
                    {reasons.map((r) => (
                      <SelectItem key={r.code} value={r.code}>
                        {r.code} — {r.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Rehire Eligibility */}
              <div>
                <Label className="text-sm font-medium">Rehire Eligibility</Label>
                <Select
                  value={formData.rehireEligibility}
                  onValueChange={(v) => updateFormData({ rehireEligibility: v })}
                >
                  <SelectTrigger className="mt-1.5">
                    <SelectValue placeholder="Select..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Y">Yes — Eligible for rehire</SelectItem>
                    <SelectItem value="N">No — Not eligible</SelectItem>
                    <SelectItem value="U">Unknown</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Separator />

            {/* Dates */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              <div>
                <Label className="text-sm font-medium">
                  Last Date Worked <span className="text-destructive">*</span>
                </Label>
                <Input
                  type="date"
                  className="mt-1.5"
                  value={formData.lastDateWorked}
                  onChange={(e) =>
                    updateFormData({ lastDateWorked: e.target.value })
                  }
                  disabled={isVNS}
                />
              </div>

              <div>
                <Label className="text-sm font-medium">
                  Termination Date <span className="text-destructive">*</span>
                </Label>
                <Input
                  type="date"
                  className="mt-1.5"
                  value={formData.terminationDate}
                  onChange={(e) =>
                    updateFormData({ terminationDate: e.target.value })
                  }
                  disabled={isVNS}
                />
              </div>

              {/* Notice Date - hidden for involuntary (TER-4202) */}
              {!isInvoluntary && !isVNS && (
                <div>
                  <Label className="text-sm font-medium">Notice Date</Label>
                  <Input
                    type="date"
                    className="mt-1.5"
                    value={formData.noticeDate}
                    onChange={(e) =>
                      updateFormData({ noticeDate: e.target.value })
                    }
                  />
                </div>
              )}

              <div>
                <Label className="text-sm font-medium">
                  Pay Through Date <span className="text-destructive">*</span>
                </Label>
                <Input
                  type="date"
                  className="mt-1.5"
                  value={formData.payThroughDate}
                  onChange={(e) =>
                    updateFormData({ payThroughDate: e.target.value })
                  }
                  disabled={isVNS}
                />
              </div>

              {/* Final Pay Due Date - required for US (TER-6416) */}
              <div>
                <Label className="text-sm font-medium">
                  Final Pay Due Date{" "}
                  {isUSEmployee && <span className="text-destructive">*</span>}
                </Label>
                <Input
                  type="date"
                  className="mt-1.5"
                  value={formData.finalPayDueDate}
                  onChange={(e) =>
                    updateFormData({ finalPayDueDate: e.target.value })
                  }
                  disabled={isVNS}
                />
                {isUSEmployee && (
                  <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
                    <Info className="w-3 h-3" />
                    Required for US employees
                  </p>
                )}
              </div>

              <div>
                <Label className="text-sm font-medium">Date Contacted</Label>
                <Input
                  type="date"
                  className="mt-1.5"
                  value={formData.dateContacted}
                  onChange={(e) =>
                    updateFormData({ dateContacted: e.target.value })
                  }
                />
              </div>
            </div>

            <Separator />

            {/* Manager Info */}
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-3">
                Manager Information
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div>
                  <Label className="text-sm font-medium">Manager Name</Label>
                  <Input
                    className="mt-1.5"
                    placeholder="Enter manager name"
                    value={formData.mgrName}
                    onChange={(e) =>
                      updateFormData({ mgrName: e.target.value })
                    }
                  />
                </div>
                <div>
                  <Label className="text-sm font-medium">HR Manager Contacted</Label>
                  <Select
                    value={formData.hrmContacted}
                    onValueChange={(v) => updateFormData({ hrmContacted: v })}
                  >
                    <SelectTrigger className="mt-1.5">
                      <SelectValue placeholder="Select..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Y">Yes</SelectItem>
                      <SelectItem value="N">No</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label className="text-sm font-medium">HR Manager Name</Label>
                  <Input
                    className="mt-1.5"
                    placeholder="Enter HRM name"
                    value={formData.hrmName}
                    onChange={(e) =>
                      updateFormData({ hrmName: e.target.value })
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
