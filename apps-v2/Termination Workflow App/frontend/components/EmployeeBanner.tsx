import { User, MapPin, Phone, Mail, Calendar, Briefcase } from "lucide-react";
import { Status } from "../vendor/tnet_ds/status";
import type { SimpleEmployee, RetrieveInfoVO } from "../utils/types";

interface EmployeeBannerProps {
  employee: SimpleEmployee;
  retrieveInfo: RetrieveInfoVO | null;
}

export default function EmployeeBanner({ employee, retrieveInfo }: EmployeeBannerProps) {
  const statusLabel = employee.emplStatus === "A" ? "Active" : "Inactive";
  const statusVariant = employee.emplStatus === "A" ? "active" : "inactive";

  return (
    <div className="bg-card border border-border rounded-lg px-5 py-3 shadow-retool-sm">
      <div className="flex items-center justify-between gap-4 flex-wrap">
        {/* Employee Identity */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
            <User className="w-5 h-5 text-primary" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-sm font-semibold text-foreground">
                {employee.firstName.trim()} {employee.lastName.trim()}
              </h3>
              <Status variant={statusVariant} size="small">
                {statusLabel}
              </Status>
            </div>
            <p className="text-xs text-muted-foreground">
              ID: {employee.empId}
            </p>
          </div>
        </div>

        {/* Quick Info */}
        <div className="flex items-center gap-5 flex-wrap text-xs text-muted-foreground">
          {retrieveInfo && (
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5" />
              {retrieveInfo.city}, {retrieveInfo.homeState} {retrieveInfo.postalCd}
            </span>
          )}
          <span className="flex items-center gap-1.5">
            <Phone className="w-3.5 h-3.5" />
            {employee.phoneNumber}
          </span>
          <span className="flex items-center gap-1.5">
            <Mail className="w-3.5 h-3.5" />
            {employee.emailAddr}
          </span>
          <span className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5" />
            Hired: {employee.lastHireDate}
          </span>
          <span className="flex items-center gap-1.5">
            <Briefcase className="w-3.5 h-3.5" />
            {employee.locationId}
          </span>
        </div>
      </div>
    </div>
  );
}
