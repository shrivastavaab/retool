import { useState } from "react";
import { Search, Users, ArrowRight, Clock } from "lucide-react";
import { Input } from "../lib/shadcn/input";
import { Button } from "../lib/shadcn/button";
import { Badge } from "../lib/shadcn/badge";
import { Status } from "../vendor/tnet_ds/status";
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
import { useWizard } from "../hooks/useWizardState";
import TNetPageHeader from "../components/tnet/TNetPageHeader";
import { mockEmployee } from "../utils/mockData";
import type { SimpleEmployee } from "../utils/types";

// Additional mock employees for search
const searchableEmployees: SimpleEmployee[] = [
  mockEmployee,
  { ...mockEmployee, empId: "00010062891", firstName: "Michael", lastName: "Chen", emailAddr: "mchen@trinet.com", emplStatus: "A", lastHireDate: "2019-03-15", serviceDt: "2019-03-15", phoneNumber: "5551234567 (H)", locationId: "W000003SFO" },
  { ...mockEmployee, empId: "00010071234", firstName: "Anita", lastName: "Patel", emailAddr: "apatel@trinet.com", emplStatus: "A", lastHireDate: "2021-06-01", serviceDt: "2021-06-01", phoneNumber: "5559876543 (H)", locationId: "W000001NYC" },
  { ...mockEmployee, empId: "00010045678", firstName: "Carlos", lastName: "Rodriguez", emailAddr: "crodriguez@trinet.com", emplStatus: "A", lastHireDate: "2018-11-10", serviceDt: "2018-11-10", phoneNumber: "5554567890 (H)", locationId: "W000004CHI" },
  { ...mockEmployee, empId: "00010089012", firstName: "Sarah", lastName: "Williams", emailAddr: "swilliams@trinet.com", emplStatus: "A", lastHireDate: "2022-01-05", serviceDt: "2022-01-05", phoneNumber: "5557891234 (H)", locationId: "W000002DNR" },
];

export default function EmployeeSearch() {
  const { setEmployee, goNext, pendingTerminations } = useWizard();
  const [searchQuery, setSearchQuery] = useState("");
  const [company, setCompany] = useState("LD2");
  const [searchResults, setSearchResults] = useState<SimpleEmployee[]>([]);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = () => {
    if (!searchQuery.trim()) return;
    const q = searchQuery.toLowerCase().trim();
    const results = searchableEmployees.filter(
      (e) =>
        e.empId.includes(q) ||
        e.firstName.toLowerCase().includes(q) ||
        e.lastName.toLowerCase().includes(q)
    );
    setSearchResults(results);
    setHasSearched(true);
  };

  const handleSelectEmployee = (emp: SimpleEmployee) => {
    setEmployee(emp);
    goNext();
  };

  const getPendingStatusVariant = (status: string) =>
    status === "In Progress" ? "inProgress" : "pending";

  const handleSelectPending = (empId: string) => {
    const emp = searchableEmployees.find((e) => e.empId === empId);
    if (emp) {
      setEmployee(emp);
      goNext();
    }
  };

  return (
    <div className="space-y-6">
      <TNetPageHeader
        title="Employee Search"
        description="Search for an employee by ID or name, or select from pending terminations below."
      />

      {/* Company Selector */}
      <div className="flex items-end gap-4">
        <div className="w-48">
          <label className="text-sm font-medium text-foreground mb-1.5 block">
            Company
          </label>
          <Select value={company} onValueChange={setCompany}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="LD2">LD2 - TriNet HR Corp</SelectItem>
              <SelectItem value="LD3">LD3 - TriNet West</SelectItem>
              <SelectItem value="LD4">LD4 - TriNet East</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Search */}
        <div className="flex-1 max-w-md">
          <label className="text-sm font-medium text-foreground mb-1.5 block">
            Employee ID or Name
          </label>
          <div className="flex gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Enter employee ID or name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                className="pl-9"
              />
            </div>
            <Button
              onClick={handleSearch}
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Search Employee
            </Button>
          </div>
        </div>
      </div>

      {/* Search Results */}
      {hasSearched && (
        <div className="bg-card border border-border rounded-lg overflow-hidden shadow-retool-sm">
          <div className="px-4 py-3 border-b border-border bg-muted/30">
            <h3 className="text-sm font-semibold text-foreground flex items-center gap-2">
              <Users className="w-4 h-4" />
              Search Results
              <Badge variant="secondary" className="text-xs">{searchResults.length}</Badge>
            </h3>
          </div>
          {searchResults.length > 0 ? (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Employee ID</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Hire Date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="w-[100px]">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {searchResults.map((emp) => (
                  <TableRow key={emp.empId} className="cursor-pointer hover:bg-muted/50">
                    <TableCell className="font-mono text-sm">{emp.empId}</TableCell>
                    <TableCell className="font-medium">{emp.lastName.trim()}, {emp.firstName.trim()}</TableCell>
                    <TableCell className="text-sm text-muted-foreground">{emp.emailAddr}</TableCell>
                    <TableCell className="text-sm">{emp.lastHireDate}</TableCell>
                    <TableCell>
                      <Badge variant={emp.emplStatus === "A" ? "success" : "destructive"} className="text-xs">
                        {emp.emplStatus === "A" ? "Active" : "Inactive"}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="text-primary hover:text-primary hover:bg-primary/10"
                        onClick={() => handleSelectEmployee(emp)}
                      >
                        Select <ArrowRight className="w-3.5 h-3.5 ml-1" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          ) : (
            <div className="py-8 text-center text-sm text-muted-foreground">
              No employees found matching &ldquo;{searchQuery}&rdquo;
            </div>
          )}
        </div>
      )}

      {/* Pending Terminations */}
      <div className="bg-card border border-border rounded-lg overflow-hidden shadow-retool-sm">
        <div className="px-4 py-3 border-b border-border bg-muted/30">
          <h3 className="text-sm font-semibold text-foreground flex items-center gap-2">
            <Clock className="w-4 h-4" />
            Pending Terminations
            <Badge variant="secondary" className="text-xs">{pendingTerminations.length}</Badge>
          </h3>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Employee ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Company</TableHead>
              <TableHead>Process Date</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="w-[100px]">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {pendingTerminations.map((pt) => (
              <TableRow key={pt.id} className="cursor-pointer hover:bg-muted/50">
                <TableCell className="font-mono text-sm">{pt.empId}</TableCell>
                <TableCell className="font-medium">{pt.name}</TableCell>
                <TableCell>{pt.company}</TableCell>
                <TableCell className="text-sm">{pt.processDate}</TableCell>
                <TableCell>
                  <Badge variant="outline" className="text-xs">{pt.termType}</Badge>
                </TableCell>
                <TableCell>
                  <Status variant={getPendingStatusVariant(pt.status)} size="small">
                    {pt.status}
                  </Status>
                </TableCell>
                <TableCell>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="text-primary hover:text-primary hover:bg-primary/10"
                    onClick={() => handleSelectPending(pt.empId)}
                  >
                    Select <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

