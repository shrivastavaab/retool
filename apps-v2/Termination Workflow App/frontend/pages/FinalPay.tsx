import { useState } from "react";
import { DollarSign, Plus, Trash2, Info } from "lucide-react";
import { Input } from "../lib/shadcn/input";
import { Label } from "../lib/shadcn/label";
import { Button } from "../lib/shadcn/button";
import { Switch } from "../lib/shadcn/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../lib/shadcn/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../lib/shadcn/table";
import { Separator } from "../lib/shadcn/separator";
import { useWizard } from "../hooks/useWizardState";
import TNetPageHeader from "../components/tnet/TNetPageHeader";
import type { EarningsEntry } from "../utils/types";

export default function FinalPay() {
  const { formData, updateFormData, retrieveInfo } = useWizard();
  const [addingType, setAddingType] = useState<"H" | "A">("H");

  const allEarningCodes = [
    ...(retrieveInfo?.hourEarningCodes ?? []),
    ...(retrieveInfo?.dollarEarningCodes ?? []),
  ];

  const addEarning = () => {
    const codes =
      addingType === "H"
        ? retrieveInfo?.hourEarningCodes
        : retrieveInfo?.dollarEarningCodes;
    const firstCode = codes?.[0];
    if (!firstCode) return;

    const newEntry: EarningsEntry = {
      id: `E${Date.now()}`,
      erncd: firstCode.erncd,
      description: firstCode.desc,
      hours: 0,
      rate: 0,
      amount: 0,
      paymentType: addingType,
    };
    updateFormData({ earnings: [...formData.earnings, newEntry] });
  };

  const removeEarning = (id: string) => {
    updateFormData({
      earnings: formData.earnings.filter((e) => e.id !== id),
    });
  };

  const updateEarning = (id: string, updates: Partial<EarningsEntry>) => {
    const updated = formData.earnings.map((e) => {
      if (e.id !== id) return e;
      const merged = { ...e, ...updates };
      // Auto-calc amount for hourly
      if (merged.paymentType === "H" && ("hours" in updates || "rate" in updates)) {
        const code = allEarningCodes.find((c) => c.erncd === merged.erncd);
        const factor = code?.multiFactor ?? 1;
        merged.amount = merged.hours * merged.rate * factor;
      }
      return merged;
    });
    updateFormData({ earnings: updated });
  };

  const handleEarnCodeChange = (id: string, erncd: string) => {
    const code = allEarningCodes.find((c) => c.erncd === erncd);
    if (code) {
      updateEarning(id, {
        erncd,
        description: code.desc,
        paymentType: code.paymentType,
      });
    }
  };

  const totalEarnings = formData.earnings.reduce((s, e) => s + e.amount, 0);

  return (
    <div className="space-y-6">
      <TNetPageHeader
        title="Final Pay"
        description="Configure earnings for the final paycheck."
      />

      {/* Earnings Table */}
      <div className="bg-card border border-border rounded-lg shadow-retool-sm overflow-hidden">
        <div className="px-5 py-3.5 border-b border-border bg-muted/30 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <DollarSign className="w-4 h-4 text-muted-foreground" />
            <h3 className="text-sm font-semibold text-foreground">
              Earnings
            </h3>
          </div>
          <div className="flex items-center gap-2">
            <Select
              value={addingType}
              onValueChange={(v) => setAddingType(v as "H" | "A")}
            >
              <SelectTrigger className="h-8 w-32 text-xs">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="H">Hour Earnings</SelectItem>
                <SelectItem value="A">Dollar Earnings</SelectItem>
              </SelectContent>
            </Select>
            <Button
              size="sm"
              variant="outline"
              onClick={addEarning}
              className="h-8 text-xs"
            >
              <Plus className="w-3.5 h-3.5 mr-1" /> Add Row
            </Button>
          </div>
        </div>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[160px]">Earn Code</TableHead>
              <TableHead>Description</TableHead>
              <TableHead className="text-center w-[60px]">Type</TableHead>
              <TableHead className="text-right w-[100px]">Hours</TableHead>
              <TableHead className="text-right w-[120px]">Rate</TableHead>
              <TableHead className="text-right w-[120px]">Amount</TableHead>
              <TableHead className="w-[50px]" />
            </TableRow>
          </TableHeader>
          <TableBody>
            {formData.earnings.map((entry) => {
              const applicableCodes =
                entry.paymentType === "H"
                  ? retrieveInfo?.hourEarningCodes
                  : retrieveInfo?.dollarEarningCodes;

              return (
                <TableRow key={entry.id}>
                  <TableCell>
                    <Select
                      value={entry.erncd}
                      onValueChange={(v) =>
                        handleEarnCodeChange(entry.id, v)
                      }
                    >
                      <SelectTrigger className="h-8 text-xs">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {applicableCodes?.map((ec) => (
                          <SelectItem key={ec.erncd} value={ec.erncd}>
                            {ec.erncd} — {ec.desc}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </TableCell>
                  <TableCell className="text-sm text-muted-foreground">
                    {entry.description}
                  </TableCell>
                  <TableCell className="text-center text-xs text-muted-foreground">
                    {entry.paymentType === "H" ? "Hour" : "$"}
                  </TableCell>
                  <TableCell className="text-right">
                    {entry.paymentType === "H" ? (
                      <Input
                        type="number"
                        step="0.5"
                        className="w-20 ml-auto text-right h-8"
                        value={entry.hours || ""}
                        onChange={(e) =>
                          updateEarning(entry.id, {
                            hours: parseFloat(e.target.value) || 0,
                          })
                        }
                      />
                    ) : (
                      "—"
                    )}
                  </TableCell>
                  <TableCell className="text-right">
                    {entry.paymentType === "H" ? (
                      <Input
                        type="number"
                        step="0.01"
                        className="w-24 ml-auto text-right h-8"
                        value={entry.rate || ""}
                        onChange={(e) =>
                          updateEarning(entry.id, {
                            rate: parseFloat(e.target.value) || 0,
                          })
                        }
                      />
                    ) : (
                      <Input
                        type="number"
                        step="0.01"
                        className="w-24 ml-auto text-right h-8"
                        value={entry.amount || ""}
                        onChange={(e) =>
                          updateEarning(entry.id, {
                            amount: parseFloat(e.target.value) || 0,
                          })
                        }
                      />
                    )}
                  </TableCell>
                  <TableCell className="text-right font-semibold text-sm">
                    ${entry.amount.toFixed(2)}
                  </TableCell>
                  <TableCell>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => removeEarning(entry.id)}
                      className="h-7 w-7 p-0 text-muted-foreground hover:text-destructive"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>

        {/* Total */}
        <div className="px-5 py-3 border-t border-border bg-muted/20 flex items-center justify-between">
          <span className="text-sm font-medium text-muted-foreground">
            Total Earnings
          </span>
          <span className="text-lg font-bold text-foreground">
            ${totalEarnings.toFixed(2)}
          </span>
        </div>
      </div>

      {/* Deductions & Overrides */}
      <div className="bg-card border border-border rounded-lg shadow-retool-sm overflow-hidden">
        <div className="px-5 py-3.5 border-b border-border bg-muted/30 flex items-center justify-between">
          <h3 className="text-sm font-semibold text-foreground">
            Deductions & Benefits Override
          </h3>
          <div className="flex items-center gap-2">
            <Label className="text-sm text-muted-foreground">
              Override Benefits
            </Label>
            <Switch
              checked={formData.overrideBenefits}
              onCheckedChange={(checked) =>
                updateFormData({ overrideBenefits: checked })
              }
            />
          </div>
        </div>
        <div className="p-5">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div>
              <Label className="text-sm font-medium">No. of Premiums</Label>
              <Input
                type="number"
                className="mt-1.5"
                value={formData.numberOfPremiums}
                onChange={(e) =>
                  updateFormData({
                    numberOfPremiums: parseInt(e.target.value) || 0,
                  })
                }
                disabled={!formData.overrideBenefits}
              />
            </div>
            <div>
              <Label className="text-sm font-medium">No. of Benefit Supplements</Label>
              <Input
                type="number"
                className="mt-1.5"
                value={formData.numberOfBenSupp}
                onChange={(e) =>
                  updateFormData({
                    numberOfBenSupp: parseInt(e.target.value) || 0,
                  })
                }
                disabled={!formData.overrideBenefits}
              />
            </div>
            <div>
              <Label className="text-sm font-medium">No. of Genl Deductions</Label>
              <Input
                type="number"
                className="mt-1.5"
                value={formData.numberOfGenlDeds}
                onChange={(e) =>
                  updateFormData({
                    numberOfGenlDeds: parseInt(e.target.value) || 0,
                  })
                }
                disabled={!formData.overrideBenefits}
              />
              <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
                <Info className="w-3 h-3" />
                Editable when override is enabled
              </p>
            </div>
          </div>

          <Separator className="my-5" />

          {/* Additional Pay */}
          <h4 className="text-sm font-semibold text-foreground mb-3">
            Additional Pay
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div>
              <Label className="text-sm font-medium">Amount ($)</Label>
              <Input
                type="number"
                step="0.01"
                className="mt-1.5"
                value={formData.additionalPay || ""}
                onChange={(e) =>
                  updateFormData({
                    additionalPay: parseFloat(e.target.value) || 0,
                  })
                }
              />
            </div>
            <div>
              <Label className="text-sm font-medium">Earning Code</Label>
              <Select
                value={formData.additionalPayCode}
                onValueChange={(v) =>
                  updateFormData({ additionalPayCode: v })
                }
              >
                <SelectTrigger className="mt-1.5">
                  <SelectValue placeholder="Select code..." />
                </SelectTrigger>
                <SelectContent>
                  {retrieveInfo?.dollarEarningCodes.map((ec) => (
                    <SelectItem key={ec.erncd} value={ec.erncd}>
                      {ec.erncd} — {ec.desc}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label className="text-sm font-medium">Description</Label>
              <Input
                className="mt-1.5"
                placeholder="Enter description"
                value={formData.additionalPayDesc}
                onChange={(e) =>
                  updateFormData({ additionalPayDesc: e.target.value })
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
