import {
  User,
  MapPin,
  Briefcase,
  Shield,
  AlertTriangle,
  CheckCircle,
  Info,
  Scale,
} from "lucide-react";
import { Badge } from "../lib/shadcn/badge";
import { Alert, AlertDescription, AlertTitle } from "../lib/shadcn/alert";
import { Separator } from "../lib/shadcn/separator";
import { useWizard } from "../hooks/useWizardState";

function InfoRow({ label, value }: { label: string; value: string | null }) {
  return (
    <div className="flex items-start justify-between py-2">
      <span className="text-sm text-muted-foreground w-40 flex-shrink-0">
        {label}
      </span>
      <span className="text-sm font-medium text-foreground text-right">
        {value || "—"}
      </span>
    </div>
  );
}

export default function EmployeeDetails() {
  const { employee, retrieveInfo, stateLaw, eligBenefits, needBenDefault, isUSEmployee } = useWizard();

  if (!employee) return null;

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-foreground">
          Employee Details
        </h2>
        <p className="text-sm text-muted-foreground mt-1">
          Review employee information and eligibility before proceeding.
        </p>
      </div>

      {/* Eligibility Alerts */}
      <div className="space-y-3">
        {eligBenefits && (
          <Alert className="border-emerald-200 bg-emerald-50 dark:bg-emerald-950/20 dark:border-emerald-800">
            <CheckCircle className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
            <AlertTitle className="text-emerald-800 dark:text-emerald-300">
              Benefits Eligible
            </AlertTitle>
            <AlertDescription className="text-emerald-700 dark:text-emerald-400">
              This employee is eligible for benefits (Full-Time, Regular, 30+ hours).
            </AlertDescription>
          </Alert>
        )}

        {needBenDefault && (
          <Alert className="border-amber-200 bg-amber-50 dark:bg-amber-950/20 dark:border-amber-800">
            <AlertTriangle className="h-4 w-4 text-amber-600 dark:text-amber-400" />
            <AlertTitle className="text-amber-800 dark:text-amber-300">
              Benefits Default Needed
            </AlertTitle>
            <AlertDescription className="text-amber-700 dark:text-amber-400">
              This employee requires a benefits default. Health benefit enrollment was not found since hire date.
            </AlertDescription>
          </Alert>
        )}

        {isUSEmployee && (
          <Alert className="border-blue-200 bg-blue-50 dark:bg-blue-950/20 dark:border-blue-800">
            <Info className="h-4 w-4 text-blue-600 dark:text-blue-400" />
            <AlertTitle className="text-blue-800 dark:text-blue-300">
              US Employee
            </AlertTitle>
            <AlertDescription className="text-blue-700 dark:text-blue-400">
              Final pay due date will be required per state regulations.
            </AlertDescription>
          </Alert>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Personal Information */}
        <div className="bg-card border border-border rounded-lg shadow-retool-sm overflow-hidden">
          <div className="px-5 py-3.5 border-b border-border bg-muted/30 flex items-center gap-2">
            <User className="w-4 h-4 text-muted-foreground" />
            <h3 className="text-sm font-semibold text-foreground">
              Personal Information
            </h3>
          </div>
          <div className="px-5 py-2 divide-y divide-border">
            <InfoRow label="Employee ID" value={employee.empId} />
            <InfoRow
              label="Full Name"
              value={`${employee.firstName.trim()} ${employee.lastName.trim()}`}
            />
            <InfoRow label="Email" value={employee.emailAddr} />
            <InfoRow label="Phone" value={employee.phoneNumber} />
            <InfoRow
              label="Status"
              value={employee.emplStatus === "A" ? "Active" : "Inactive"}
            />
            <InfoRow label="Term Status" value={employee.termStatus} />
          </div>
        </div>

        {/* Address */}
        <div className="bg-card border border-border rounded-lg shadow-retool-sm overflow-hidden">
          <div className="px-5 py-3.5 border-b border-border bg-muted/30 flex items-center gap-2">
            <MapPin className="w-4 h-4 text-muted-foreground" />
            <h3 className="text-sm font-semibold text-foreground">
              Address
            </h3>
          </div>
          <div className="px-5 py-2 divide-y divide-border">
            <InfoRow
              label="Street"
              value={retrieveInfo?.address1 ?? "—"}
            />
            <InfoRow
              label="Address Line 2"
              value={
                retrieveInfo?.address2?.trim()
                  ? retrieveInfo.address2
                  : "—"
              }
            />
            <InfoRow label="City" value={retrieveInfo?.city ?? "—"} />
            <InfoRow label="State" value={retrieveInfo?.homeState ?? "—"} />
            <InfoRow
              label="Postal Code"
              value={retrieveInfo?.postalCd ?? "—"}
            />
            <InfoRow label="Country" value={isUSEmployee ? "United States" : "Canada"} />
          </div>
        </div>

        {/* Employment Details */}
        <div className="bg-card border border-border rounded-lg shadow-retool-sm overflow-hidden">
          <div className="px-5 py-3.5 border-b border-border bg-muted/30 flex items-center gap-2">
            <Briefcase className="w-4 h-4 text-muted-foreground" />
            <h3 className="text-sm font-semibold text-foreground">
              Employment Details
            </h3>
          </div>
          <div className="px-5 py-2 divide-y divide-border">
            <InfoRow label="Hire Date" value={employee.lastHireDate} />
            <InfoRow label="Service Date" value={employee.serviceDt} />
            <InfoRow label="Location ID" value={employee.locationId} />
            <div className="flex items-start justify-between py-2">
              <span className="text-sm text-muted-foreground w-40 flex-shrink-0">
                Benefits Eligible
              </span>
              <Badge
                variant={eligBenefits ? "success" : "secondary"}
                className="text-xs"
              >
                {eligBenefits ? "Yes" : "No"}
              </Badge>
            </div>
            <div className="flex items-start justify-between py-2">
              <span className="text-sm text-muted-foreground w-40 flex-shrink-0">
                Benefits Default
              </span>
              <Badge
                variant={needBenDefault ? "warning" : "secondary"}
                className="text-xs"
              >
                {needBenDefault ? "Needed" : "Not Required"}
              </Badge>
            </div>
          </div>
        </div>

        {/* State Law */}
        {stateLaw && (
          <div className="bg-card border border-border rounded-lg shadow-retool-sm overflow-hidden">
            <div className="px-5 py-3.5 border-b border-border bg-muted/30 flex items-center gap-2">
              <Scale className="w-4 h-4 text-muted-foreground" />
              <h3 className="text-sm font-semibold text-foreground">
                State Law — {stateLaw.stateProvincDesc}
              </h3>
            </div>
            <div className="px-5 py-4 space-y-4">
              <div>
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">
                  Leave Pay Requirement
                </p>
                <p className="text-sm text-foreground">
                  {stateLaw.leavePayDesc}
                </p>
              </div>
              <Separator />
              <div>
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">
                  Involuntary Payment Method
                </p>
                <p className="text-sm text-foreground">
                  {stateLaw.reqPaymentMethodIV === "C"
                    ? "Check required"
                    : stateLaw.reqPaymentMethodIV || "No specific requirement"}
                </p>
              </div>
              <Separator />
              <div>
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">
                  Voluntary Payment Method
                </p>
                <p className="text-sm text-foreground">
                  {stateLaw.reqPaymentMethodV?.trim()
                    ? stateLaw.reqPaymentMethodV
                    : "No specific requirement"}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Earning Codes Summary */}
      {retrieveInfo && (
        <div className="bg-card border border-border rounded-lg shadow-retool-sm overflow-hidden">
          <div className="px-5 py-3.5 border-b border-border bg-muted/30 flex items-center gap-2">
            <Shield className="w-4 h-4 text-muted-foreground" />
            <h3 className="text-sm font-semibold text-foreground">
              Available Earning Codes
            </h3>
          </div>
          <div className="px-5 py-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                  Dollar Earnings ({retrieveInfo.dollarEarningCodes.length})
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {retrieveInfo.dollarEarningCodes.map((ec) => (
                    <Badge key={ec.erncd} variant="outline" className="text-xs">
                      {ec.erncd}
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                  Hour Earnings ({retrieveInfo.hourEarningCodes.length})
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {retrieveInfo.hourEarningCodes.map((ec) => (
                    <Badge key={ec.erncd} variant="outline" className="text-xs">
                      {ec.erncd}
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                  Unit Earnings ({retrieveInfo.unitEarningCodes.length})
                </p>
                <p className="text-sm text-muted-foreground">None available</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
