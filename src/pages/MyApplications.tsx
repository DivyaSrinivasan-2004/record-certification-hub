import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Trophy, FileText, ArrowRight, ArrowLeft, Search, Filter,
  Clock, CheckCircle, XCircle, Eye
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Layout from "@/components/layout/Layout";
import { useState } from "react";

// Mock application data
const allApplications = [
  {
    id: "APP-2024-001",
    title: "Longest Continuous Painting Session",
    category: "Individual",
    status: "approved",
    submittedDate: "2024-01-10",
    updatedDate: "2024-01-20",
    hasCertificate: true,
  },
  {
    id: "APP-2024-002",
    title: "Most Books Read in 30 Days",
    category: "Individual",
    status: "under_review",
    submittedDate: "2024-02-15",
    updatedDate: "2024-02-18",
    hasCertificate: false,
  },
  {
    id: "APP-2024-003",
    title: "Fastest Solo Marathon",
    category: "Individual",
    status: "pending",
    submittedDate: "2024-03-01",
    updatedDate: "2024-03-01",
    hasCertificate: false,
  },
  {
    id: "APP-2024-004",
    title: "Largest Community Cleanup",
    category: "Group",
    status: "rejected",
    submittedDate: "2023-12-01",
    updatedDate: "2023-12-15",
    hasCertificate: false,
  },
];

const getStatusBadge = (status: string) => {
  switch (status) {
    case "approved":
      return <Badge className="badge-status badge-approved">Approved</Badge>;
    case "under_review":
      return <Badge className="badge-status badge-review">Under Review</Badge>;
    case "pending":
      return <Badge className="badge-status badge-pending">Pending</Badge>;
    case "rejected":
      return <Badge className="badge-status badge-rejected">Rejected</Badge>;
    default:
      return <Badge>{status}</Badge>;
  }
};

const getStatusIcon = (status: string) => {
  switch (status) {
    case "approved":
      return <CheckCircle className="w-5 h-5 text-emerald-600" />;
    case "rejected":
      return <XCircle className="w-5 h-5 text-red-600" />;
    default:
      return <Clock className="w-5 h-5 text-amber-600" />;
  }
};

const MyApplications = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const filteredApplications = allApplications.filter((app) => {
    const matchesSearch = app.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          app.id.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === "all" || app.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <Layout>
      {/* Header */}
      <section className="py-8 bg-secondary border-b border-border">
        <div className="container-custom">
          <Link to="/dashboard" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-4">
            <ArrowLeft className="w-4 h-4" />
            Back to Dashboard
          </Link>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-serif font-bold text-primary">
                My Applications
              </h1>
              <p className="text-muted-foreground mt-1">
                View and track all your record applications
              </p>
            </div>
            <Link to="/apply">
              <Button className="btn-gold">
                <FileText className="w-5 h-5 mr-2" />
                New Application
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-6 border-b border-border">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder="Search by title or application ID..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex items-center gap-3">
              <Filter className="w-5 h-5 text-muted-foreground" />
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="under_review">Under Review</SelectItem>
                  <SelectItem value="approved">Approved</SelectItem>
                  <SelectItem value="rejected">Rejected</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Applications List */}
      <section className="section-padding">
        <div className="container-custom">
          {filteredApplications.length === 0 ? (
            <div className="text-center py-16 card-premium">
              <FileText className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="font-semibold text-primary mb-2">No Applications Found</h3>
              <p className="text-muted-foreground mb-6">
                {searchQuery || statusFilter !== "all" 
                  ? "Try adjusting your search or filter criteria."
                  : "You haven't submitted any applications yet."}
              </p>
              <Link to="/apply">
                <Button className="btn-gold">Submit Your First Application</Button>
              </Link>
            </div>
          ) : (
            <>
              <p className="text-muted-foreground mb-6">
                Showing {filteredApplications.length} application{filteredApplications.length !== 1 ? 's' : ''}
              </p>
              <div className="space-y-4">
                {filteredApplications.map((app, index) => (
                  <motion.div
                    key={app.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="card-premium p-6"
                  >
                    <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                      {/* Icon & Title */}
                      <div className="flex items-start gap-4 flex-1">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          {getStatusIcon(app.status)}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-primary mb-1">{app.title}</h3>
                          <p className="text-sm text-muted-foreground">
                            {app.id} • {app.category}
                          </p>
                        </div>
                      </div>

                      {/* Dates */}
                      <div className="flex items-center gap-8 text-sm">
                        <div className="hidden md:block">
                          <p className="text-muted-foreground">Submitted</p>
                          <p className="font-medium text-foreground">
                            {new Date(app.submittedDate).toLocaleDateString()}
                          </p>
                        </div>
                        <div className="hidden md:block">
                          <p className="text-muted-foreground">Last Updated</p>
                          <p className="font-medium text-foreground">
                            {new Date(app.updatedDate).toLocaleDateString()}
                          </p>
                        </div>
                      </div>

                      {/* Status & Actions */}
                      <div className="flex items-center gap-4">
                        {getStatusBadge(app.status)}
                        <div className="flex gap-2">
                          <Link to={`/dashboard/applications/${app.id}`}>
                            <Button variant="outline" size="sm">
                              <Eye className="w-4 h-4 mr-1" />
                              View
                            </Button>
                          </Link>
                          {app.hasCertificate && (
                            <Link to={`/dashboard/certificate/${app.id}`}>
                              <Button size="sm" className="btn-gold">
                                <Trophy className="w-4 h-4 mr-1" />
                                Certificate
                              </Button>
                            </Link>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default MyApplications;
