import { useState } from "react";
import { TreePalm, Info, AlertTriangle } from "lucide-react";
import { Input } from "../lib/shadcn/input";
import { Label } from "../lib/shadcn/label";
import { Switch } from "../lib/shadcn/switch";
import { Badge } from "../lib/shadcn/badge";
import { Alert, AlertDescription } from "../lib/shadcn/alert";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../lib/shadcn/table";
import { useWizard } from "../hooks/useWizardState";
import type { LeavePlan } from "../utils/types";

export default function LeaveAndPTO() {
  const { formData, updateFormData, stateLaw } = useWizard();
  const [editingRow, setEditingRow] = useState<string | null>(null);

  const updateLeavePlan = (planType: string, updates: Partial<LeavePlan>) => {
    const updatedPlans = formData.leavePlans.map((p) =>
      p.planType === planType ? { ...p, ...updates } : p
    );
    updateFormData({ leavePlans: updatedPlans });
  };

  const totalPayableHours = formData.leavePlans
    .filter((p) => p.payAtTermination === "Y")
    .reduce((sum, p) => sum + p.balance, 0);

  const totalNonPayable = formData.leavePlans
    .filter((p) => p.payAtTermination !== "Y")
    .reduce((sum, p) => sum + p.balance, 0);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-foreground">
          Leave & PTO
        </h2>
        <p className="text-sm text-muted-foreground mt-1">
          Review leave plan balances and configure payout options.
        </p>
      </div>

      {/* State law notice */}
      {stateLaw && (
        <Alert className="border-accent bg-accent/60">
          <Info className="h-4 w-4 text-primary" />
          <AlertDescription className="text-muted-foreground">
            <strong>{stateLaw.stateProvincDesc} Law:</strong>{" "}
            {stateLaw.leavePayDesc}
          </AlertDescription>
        </Alert>
      )}

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-card border border-border rounded-lg p-4 shadow-retool-sm">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
            Total Leave Plans
          </p>
          <p className="text-2xl font-bold text-foreground mt-1">
            {formData.leavePlans.length}
          </p>
        </div>
        <div className="bg-success/10 border border-success/30 rounded-lg p-4 shadow-retool-sm">
          <p className="text-xs font-semibold text-success uppercase tracking-wider">
            Payable Hours
          </p>
          <p className="text-2xl font-bold text-success mt-1">
            {totalPayableHours.toFixed(1)}
          </p>
        </div>
        <div className="bg-card border border-border rounded-lg p-4 shadow-retool-sm">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
            Non-Payable Hours
          </p>
          <p className="text-2xl font-bold text-foreground mt-1">
            {totalNonPayable.toFixed(1)}
          </p>
        </div>
      </div>

      {/* Pay Accrued Leave Toggle */}
      <div className="bg-card border border-border rounded-lg shadow-retool-sm overflow-hidden">
        <div className="px-5 py-3.5 border-b border-border bg-muted/30 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <TreePalm className="w-4 h-4 text-muted-foreground" />
            <h3 className="text-sm font-semibold text-foreground">
              Leave Plan Balances
            </h3>
          </div>
          <div className="flex items-center gap-2">
            <Label className="text-sm text-muted-foreground">
              Pay Accrued Leave
            </Label>
            <Switch
              checked={formData.payAccruedLeave}
              onCheckedChange={(checked) =>
                updateFormData({ payAccruedLeave: checked })
              }
            />
          </div>
        </div>

        {/* Leave Plans Table */}
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Plan Type</TableHead>
              <TableHead>Plan Name</TableHead>
              <TableHead>Benefit Plan</TableHead>
              <TableHead>Accrual Rate</TableHead>
              <TableHead className="text-right">Balance</TableHead>
              <TableHead className="text-right">Hours Taken</TableHead>
              <TableHead className="text-right">Prior Yr Hrs</TableHead>
              <TableHead className="text-center">Pay at Term</TableHead>
              <TableHead>Earn Period</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {formData.leavePlans.map((plan) => (
              <TableRow
                key={plan.planType}
                className="cursor-pointer hover:bg-muted/30"
                onClick={() =>
                  setEditingRow(
                    editingRow === plan.planType ? null : plan.planType
                  )
                }
              >
                <TableCell className="font-mono text-sm">
                  {plan.planType}
                </TableCell>
                <TableCell className="font-medium">{plan.planName}</TableCell>
                <TableCell className="text-sm text-muted-foreground">
                  {plan.benefitPlan}
                </TableCell>
                <TableCell className="text-sm">{plan.accrualRate}</TableCell>
                <TableCell className="text-right font-semibold">
                  {plan.balance.toFixed(1)}
                </TableCell>
                <TableCell className="text-right">
                  {editingRow === plan.planType ? (
                    <Input
                      type="number"
                      step="0.5"
                      className="w-20 ml-auto text-right h-8"
                      value={plan.hrsTaken}
                      onClick={(e) => e.stopPropagation()}
                      onChange={(e) =>
                        updateLeavePlan(plan.planType, {
                          hrsTaken: parseFloat(e.target.value) || 0,
                        })
                      }
                    />
                  ) : (
                    plan.hrsTaken.toFixed(1)
                  )}
                </TableCell>
                <TableCell className="text-right">
                  {editingRow === plan.planType ? (
                    <Input
                      type="number"
                      step="0.5"
                      className="w-20 ml-auto text-right h-8"
                      value={plan.prvYrHrs}
                      onClick={(e) => e.stopPropagation()}
                      onChange={(e) =>
                        updateLeavePlan(plan.planType, {
                          prvYrHrs: parseFloat(e.target.value) || 0,
                        })
                      }
                    />
                  ) : (
                    plan.prvYrHrs.toFixed(1)
                  )}
                </TableCell>
                <TableCell className="text-center">
                  <Badge
                    variant={plan.payAtTermination === "Y" ? "success" : "secondary"}
                    className="text-xs"
                  >
                    {plan.payAtTermination === "Y" ? "Yes" : "No"}
                  </Badge>
                </TableCell>
                <TableCell className="text-xs text-muted-foreground">
                  {plan.earnsBeginDt} — {plan.earnsEndDt}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <div className="px-5 py-3 border-t border-border bg-muted/20 text-xs text-muted-foreground flex items-center gap-1.5">
          <Info className="w-3.5 h-3.5" />
          Click a row to edit Hours Taken and Prior Year Hours. Prior year hours
          must be between 0 and Hours Taken.
        </div>
      </div>

      {/* Validation warnings */}
      {formData.leavePlans.some(
        (p) => p.prvYrHrs > p.hrsTaken && p.prvYrHrs > 0
      ) && (
        <Alert className="border-destructive/30 bg-destructive/5">
          <AlertTriangle className="h-4 w-4 text-destructive" />
          <AlertDescription className="text-destructive">
            Prior Year Hours cannot exceed Hours Taken. Please correct the
            highlighted values.
          </AlertDescription>
        </Alert>
      )}
    </div>
  );
}
