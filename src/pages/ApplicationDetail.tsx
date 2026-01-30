import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  ArrowLeft, Trophy, Calendar, MapPin, User, Clock,
  FileText, Image, Video, Download, CheckCircle, AlertCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/layout/Layout";

// Mock data
const applicationData: Record<string, {
  id: string;
  title: string;
  category: string;
  status: string;
  submittedDate: string;
  updatedDate: string;
  description: string;
  location: string;
  city: string;
  date: string;
  duration: string;
  witnesses: { name: string; organization: string }[];
  adminRemarks: string;
  hasCertificate: boolean;
}> = {
  "APP-2024-001": {
    id: "APP-2024-001",
    title: "Longest Continuous Painting Session",
    category: "Individual",
    status: "approved",
    submittedDate: "2024-01-10",
    updatedDate: "2024-01-20",
    description: "A continuous painting session lasting 48 hours, creating a 20-foot mural depicting Sri Lankan wildlife and nature. The attempt was documented with continuous video recording and verified by multiple witnesses.",
    location: "Art Gallery, Independence Square",
    city: "Colombo",
    date: "2024-01-05",
    duration: "48 hours",
    witnesses: [
      { name: "Dr. Sarah Fernando", organization: "University of Visual Arts" },
      { name: "Mr. Kumar Silva", organization: "National Art Gallery" },
    ],
    adminRemarks: "Excellent documentation provided. Video evidence clearly shows continuous painting activity. Witnesses verified in person. Congratulations on your record!",
    hasCertificate: true,
  },
  "APP-2024-002": {
    id: "APP-2024-002",
    title: "Most Books Read in 30 Days",
    category: "Individual",
    status: "under_review",
    submittedDate: "2024-02-15",
    updatedDate: "2024-02-18",
    description: "Reading 150 books in 30 days, with detailed summaries and reviews of each book as proof of completion.",
    location: "Home Library",
    city: "Kandy",
    date: "2024-02-01",
    duration: "30 days",
    witnesses: [
      { name: "Mrs. Anoma Perera", organization: "Public Library, Kandy" },
      { name: "Mr. John David", organization: "Book Club Association" },
    ],
    adminRemarks: "Documentation under review. Additional verification of book summaries in progress.",
    hasCertificate: false,
  },
};

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

const ApplicationDetail = () => {
  const { id } = useParams<{ id: string }>();
  const application = id ? applicationData[id] : null;

  if (!application) {
    return (
      <Layout>
        <div className="section-padding text-center">
          <h1 className="text-2xl font-serif font-bold text-primary mb-4">Application Not Found</h1>
          <Link to="/dashboard/applications">
            <Button>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Applications
            </Button>
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Header */}
      <section className="py-8 bg-secondary border-b border-border">
        <div className="container-custom">
          <Link to="/dashboard/applications" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-4">
            <ArrowLeft className="w-4 h-4" />
            Back to Applications
          </Link>
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-sm text-muted-foreground">{application.id}</span>
                {getStatusBadge(application.status)}
              </div>
              <h1 className="text-3xl font-serif font-bold text-primary">
                {application.title}
              </h1>
            </div>
            {application.hasCertificate && (
              <Link to={`/dashboard/certificate/${application.id}`}>
                <Button className="btn-gold">
                  <Trophy className="w-5 h-5 mr-2" />
                  View Certificate
                </Button>
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Record Details */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="card-premium p-6"
              >
                <h2 className="text-xl font-serif font-bold text-primary mb-4 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-accent" />
                  Record Details
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {application.description}
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-muted-foreground" />
                    <div>
                      <p className="text-sm text-muted-foreground">Location</p>
                      <p className="font-medium">{application.location}, {application.city}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-muted-foreground" />
                    <div>
                      <p className="text-sm text-muted-foreground">Date</p>
                      <p className="font-medium">{new Date(application.date).toLocaleDateString()}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-muted-foreground" />
                    <div>
                      <p className="text-sm text-muted-foreground">Duration</p>
                      <p className="font-medium">{application.duration}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Trophy className="w-5 h-5 text-muted-foreground" />
                    <div>
                      <p className="text-sm text-muted-foreground">Category</p>
                      <p className="font-medium">{application.category}</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Uploaded Evidence */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="card-premium p-6"
              >
                <h2 className="text-xl font-serif font-bold text-primary mb-4 flex items-center gap-2">
                  <Image className="w-5 h-5 text-accent" />
                  Uploaded Evidence
                </h2>
                <div className="grid grid-cols-3 gap-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="aspect-square bg-muted rounded-lg flex items-center justify-center">
                      <Image className="w-8 h-8 text-muted-foreground" />
                    </div>
                  ))}
                </div>
                <div className="flex gap-3 mt-4">
                  <Button variant="outline" size="sm">
                    <Video className="w-4 h-4 mr-2" />
                    View Video
                  </Button>
                  <Button variant="outline" size="sm">
                    <FileText className="w-4 h-4 mr-2" />
                    Documents
                  </Button>
                </div>
              </motion.div>

              {/* Witnesses */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="card-premium p-6"
              >
                <h2 className="text-xl font-serif font-bold text-primary mb-4 flex items-center gap-2">
                  <User className="w-5 h-5 text-accent" />
                  Witnesses
                </h2>
                <div className="space-y-4">
                  {application.witnesses.map((witness, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-secondary rounded-lg">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <User className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-primary">{witness.name}</p>
                        <p className="text-sm text-muted-foreground">{witness.organization}</p>
                      </div>
                      <CheckCircle className="w-5 h-5 text-emerald-600 ml-auto" />
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* Status Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="card-premium p-6"
              >
                <h3 className="font-semibold text-primary mb-4">Application Status</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Status</span>
                    {getStatusBadge(application.status)}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Submitted</span>
                    <span className="text-sm font-medium">
                      {new Date(application.submittedDate).toLocaleDateString()}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Last Updated</span>
                    <span className="text-sm font-medium">
                      {new Date(application.updatedDate).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Admin Remarks */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className={`card-premium p-6 ${
                  application.status === "approved" 
                    ? "border-emerald-200 bg-emerald-50/50" 
                    : ""
                }`}
              >
                <h3 className="font-semibold text-primary mb-4 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-accent" />
                  Admin Remarks
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {application.adminRemarks}
                </p>
              </motion.div>

              {/* Quick Actions */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="card-premium p-6"
              >
                <h3 className="font-semibold text-primary mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-start">
                    <Download className="w-4 h-4 mr-2" />
                    Download Application
                  </Button>
                  {application.hasCertificate && (
                    <Link to={`/dashboard/certificate/${application.id}`} className="block">
                      <Button className="w-full btn-gold justify-start">
                        <Trophy className="w-4 h-4 mr-2" />
                        View Certificate
                      </Button>
                    </Link>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ApplicationDetail;
