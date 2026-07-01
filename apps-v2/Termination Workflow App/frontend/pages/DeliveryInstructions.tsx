import { Truck, CreditCard, Calendar, Info } from "lucide-react";
import { Input } from "../lib/shadcn/input";
import { Label } from "../lib/shadcn/label";
import { Textarea } from "../lib/shadcn/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../lib/shadcn/select";
import { RadioGroup, RadioGroupItem } from "../lib/shadcn/radio-group";
import { Alert, AlertDescription } from "../lib/shadcn/alert";
import { useWizard } from "../hooks/useWizardState";

export default function DeliveryInstructions() {
  const { formData, updateFormData, stateLaw } = useWizard();

  // DDP active date calculation (simplified mock - 5 business days from today)
  const computedDDPDate = (() => {
    const d = new Date();
    let bizDays = 0;
    while (bizDays < 5) {
      d.setDate(d.getDate() + 1);
      const day = d.getDay();
      if (day !== 0 && day !== 6) bizDays++;
    }
    return d.toISOString().split("T")[0] ?? "";
  })();

  // Auto-set DDP date on first render if empty
  if (!formData.ddpActiveDate && computedDDPDate) {
    updateFormData({ ddpActiveDate: computedDDPDate });
  }

  const showInvoluntaryPaymentWarning =
    formData.termType === "IVOL" && stateLaw?.reqPaymentMethodIV === "C";

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-foreground">
          Delivery Instructions
        </h2>
        <p className="text-sm text-muted-foreground mt-1">
          Configure payment method, delivery, and direct deposit options.
        </p>
      </div>

      {/* Payment method warning */}
      {showInvoluntaryPaymentWarning && (
        <Alert className="border-warning/30 bg-warning/10">
          <Info className="h-4 w-4 text-warning" />
          <AlertDescription className="text-foreground">
            <strong>{stateLaw?.stateProvincDesc} Law:</strong> For involuntary
            terminations, check payment is required in this state.
          </AlertDescription>
        </Alert>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Payment Method */}
        <div className="bg-card border border-border rounded-lg shadow-retool-sm overflow-hidden">
          <div className="px-5 py-3.5 border-b border-border bg-muted/30 flex items-center gap-2">
            <CreditCard className="w-4 h-4 text-muted-foreground" />
            <h3 className="text-sm font-semibold text-foreground">
              Payment Method
            </h3>
          </div>
          <div className="p-5 space-y-5">
            <RadioGroup
              value={formData.paymentMethod}
              onValueChange={(v) =>
                updateFormData({
                  paymentMethod: v as "CHECK" | "DD" | "WIRE",
                })
              }
              className="space-y-3"
            >
              {[
                { value: "CHECK", label: "Paper Check", desc: "Physical check printed and mailed/delivered" },
                { value: "DD", label: "Direct Deposit", desc: "Electronic deposit to bank account" },
                { value: "WIRE", label: "Wire Transfer", desc: "Wire transfer to bank account" },
              ].map((opt) => (
                <label
                  key={opt.value}
                  className={`
                    flex items-start gap-3 p-3 rounded-lg border cursor-pointer transition-all
                    ${formData.paymentMethod === opt.value
                      ? "border-primary bg-primary/10"
                      : "border-border hover:border-muted-foreground/30"
                    }
                  `}
                >
                  <RadioGroupItem value={opt.value} className="mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      {opt.label}
                    </p>
                    <p className="text-xs text-muted-foreground">{opt.desc}</p>
                  </div>
                </label>
              ))}
            </RadioGroup>
          </div>
        </div>

        {/* Check Distribution */}
        <div className="bg-card border border-border rounded-lg shadow-retool-sm overflow-hidden">
          <div className="px-5 py-3.5 border-b border-border bg-muted/30 flex items-center gap-2">
            <Truck className="w-4 h-4 text-muted-foreground" />
            <h3 className="text-sm font-semibold text-foreground">
              Distribution & Delivery
            </h3>
          </div>
          <div className="p-5 space-y-5">
            <div>
              <Label className="text-sm font-medium">Check Distribution</Label>
              <Select
                value={formData.checkDistribution}
                onValueChange={(v) =>
                  updateFormData({
                    checkDistribution: v as "COMPANY" | "EMPLOYEE" | "OTHER",
                  })
                }
              >
                <SelectTrigger className="mt-1.5">
                  <SelectValue placeholder="Select distribution..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="COMPANY">Send to Company</SelectItem>
                  <SelectItem value="EMPLOYEE">
                    Send to Employee Address
                  </SelectItem>
                  <SelectItem value="OTHER">Other Address</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label className="text-sm font-medium">Delivery Method</Label>
              <Select
                value={formData.deliveryMethod}
                onValueChange={(v) =>
                  updateFormData({
                    deliveryMethod: v as
                      | "MAIL"
                      | "PICKUP"
                      | "OVERNIGHT"
                      | "FEDEX",
                  })
                }
              >
                <SelectTrigger className="mt-1.5">
                  <SelectValue placeholder="Select method..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="MAIL">Standard Mail</SelectItem>
                  <SelectItem value="PICKUP">Pick Up</SelectItem>
                  <SelectItem value="OVERNIGHT">Overnight</SelectItem>
                  <SelectItem value="FEDEX">FedEx</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label className="text-sm font-medium">
                Delivery Instructions
              </Label>
              <Textarea
                className="mt-1.5"
                rows={3}
                placeholder="Enter any special delivery instructions..."
                value={formData.deliveryInstructions}
                onChange={(e) =>
                  updateFormData({
                    deliveryInstructions: e.target.value,
                  })
                }
              />
            </div>
          </div>
        </div>
      </div>

      {/* Direct Deposit End Date */}
      <div className="bg-card border border-border rounded-lg shadow-retool-sm overflow-hidden">
        <div className="px-5 py-3.5 border-b border-border bg-muted/30 flex items-center gap-2">
          <Calendar className="w-4 h-4 text-muted-foreground" />
          <h3 className="text-sm font-semibold text-foreground">
            Direct Deposit Settings
          </h3>
        </div>
        <div className="p-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <Label className="text-sm font-medium">
                Direct Deposit End Date
              </Label>
              <Input
                type="date"
                className="mt-1.5"
                value={formData.directDepositEndDate}
                onChange={(e) =>
                  updateFormData({
                    directDepositEndDate: e.target.value,
                  })
                }
              />
            </div>
            <div>
              <Label className="text-sm font-medium">
                Keep Direct Deposit Active Until
              </Label>
              <Input
                type="date"
                className="mt-1.5"
                value={formData.ddpActiveDate}
                onChange={(e) =>
                  updateFormData({ ddpActiveDate: e.target.value })
                }
              />
              <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
                <Info className="w-3 h-3" />
                Calculated as 5 business days from check date (excluding
                holidays)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
