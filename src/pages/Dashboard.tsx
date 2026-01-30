import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Trophy, FileText, Clock, CheckCircle, XCircle, 
  ArrowRight, Plus, User, LogOut, Bell, Settings
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/layout/Layout";

// Mock user data
const user = {
  name: "Rajitha Perera",
  email: "rajitha@example.com",
  memberSince: "January 2024",
};

// Mock application data
const applications = [
  {
    id: "APP-2024-001",
    title: "Longest Continuous Painting Session",
    category: "Individual",
    status: "approved",
    submittedDate: "2024-01-10",
    updatedDate: "2024-01-20",
  },
  {
    id: "APP-2024-002",
    title: "Most Books Read in 30 Days",
    category: "Individual",
    status: "under_review",
    submittedDate: "2024-02-15",
    updatedDate: "2024-02-18",
  },
  {
    id: "APP-2024-003",
    title: "Fastest Solo Marathon",
    category: "Individual",
    status: "pending",
    submittedDate: "2024-03-01",
    updatedDate: "2024-03-01",
  },
];

const stats = [
  { label: "Total Applications", value: 3, icon: FileText, color: "bg-blue-500" },
  { label: "Approved", value: 1, icon: CheckCircle, color: "bg-emerald-500" },
  { label: "Under Review", value: 1, icon: Clock, color: "bg-amber-500" },
  { label: "Pending", value: 1, icon: Clock, color: "bg-slate-500" },
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

const Dashboard = () => {
  return (
    <Layout>
      {/* Header */}
      <section className="py-8 bg-secondary border-b border-border">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
                <User className="w-8 h-8 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-2xl font-serif font-bold text-primary">
                  Welcome, {user.name}
                </h1>
                <p className="text-muted-foreground">Member since {user.memberSince}</p>
              </div>
            </div>
            <div className="flex gap-3">
              <Link to="/apply">
                <Button className="btn-gold">
                  <Plus className="w-5 h-5 mr-2" />
                  New Application
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-8">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="card-premium p-6"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-lg ${stat.color} flex items-center justify-center`}>
                    <stat.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-primary">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-4">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-4">
            <Link to="/apply" className="card-premium p-6 card-hover-lift group">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center">
                  <Plus className="w-6 h-6 text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-primary group-hover:text-accent transition-colors">
                    Apply for Record
                  </h3>
                  <p className="text-sm text-muted-foreground">Submit a new application</p>
                </div>
                <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
              </div>
            </Link>

            <Link to="/dashboard/applications" className="card-premium p-6 card-hover-lift group">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-primary group-hover:text-accent transition-colors">
                    My Applications
                  </h3>
                  <p className="text-sm text-muted-foreground">View all submissions</p>
                </div>
                <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
              </div>
            </Link>

            <Link to="/dashboard/profile" className="card-premium p-6 card-hover-lift group">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Settings className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-primary group-hover:text-accent transition-colors">
                    Profile Settings
                  </h3>
                  <p className="text-sm text-muted-foreground">Manage your account</p>
                </div>
                <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Recent Applications */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-serif font-bold text-primary">Recent Applications</h2>
            <Link to="/dashboard/applications">
              <Button variant="ghost" className="text-primary">
                View All
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
          </div>

          <div className="space-y-4">
            {applications.map((app, index) => (
              <motion.div
                key={app.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="card-premium p-6"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className="flex-1">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Trophy className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-primary">{app.title}</h3>
                        <p className="text-sm text-muted-foreground">
                          {app.id} • {app.category}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="text-right hidden sm:block">
                      <p className="text-xs text-muted-foreground">Submitted</p>
                      <p className="text-sm font-medium text-foreground">
                        {new Date(app.submittedDate).toLocaleDateString()}
                      </p>
                    </div>
                    {getStatusBadge(app.status)}
                    <Link to={`/dashboard/applications/${app.id}`}>
                      <Button variant="outline" size="sm">
                        View
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {applications.length === 0 && (
            <div className="text-center py-12 card-premium">
              <FileText className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="font-semibold text-primary mb-2">No Applications Yet</h3>
              <p className="text-muted-foreground mb-6">
                You haven't submitted any record applications yet.
              </p>
              <Link to="/apply">
                <Button className="btn-gold">
                  <Plus className="w-5 h-5 mr-2" />
                  Apply for Your First Record
                </Button>
              </Link>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Dashboard;
