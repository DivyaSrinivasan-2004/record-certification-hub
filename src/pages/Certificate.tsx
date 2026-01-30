import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Download, Share2, Trophy, Shield, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";

// Mock certificate data
const certificateData: Record<string, {
  id: string;
  certificateId: string;
  title: string;
  holder: string;
  category: string;
  date: string;
  location: string;
  achievement: string;
  issuedDate: string;
}> = {
  "APP-2024-001": {
    id: "APP-2024-001",
    certificateId: "LBR-2024-IND-0015",
    title: "Longest Continuous Painting Session",
    holder: "Rajitha Perera",
    category: "Individual Records",
    date: "January 5, 2024",
    location: "Colombo, Sri Lanka",
    achievement: "48 Hours of Continuous Painting",
    issuedDate: "January 20, 2024",
  },
};

const Certificate = () => {
  const { id } = useParams<{ id: string }>();
  const certificate = id ? certificateData[id] : null;

  if (!certificate) {
    return (
      <Layout>
        <div className="section-padding text-center">
          <h1 className="text-2xl font-serif font-bold text-primary mb-4">Certificate Not Found</h1>
          <Link to="/dashboard">
            <Button>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Dashboard
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
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-serif font-bold text-primary">
                Official Certificate
              </h1>
              <p className="text-muted-foreground mt-1">
                Certificate ID: {certificate.certificateId}
              </p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline">
                <Share2 className="w-5 h-5 mr-2" />
                Share
              </Button>
              <Button className="btn-gold">
                <Download className="w-5 h-5 mr-2" />
                Download PDF
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Certificate Preview */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="certificate-pattern bg-card border-4 border-gold-400 rounded-xl shadow-2xl overflow-hidden"
            >
              {/* Certificate Header */}
              <div className="bg-primary py-8 px-12 text-center">
                <div className="flex items-center justify-center gap-4 mb-4">
                  <Award className="w-12 h-12 text-accent" />
                  <Trophy className="w-16 h-16 text-accent" />
                  <Award className="w-12 h-12 text-accent" />
                </div>
                <h1 className="text-3xl md:text-4xl font-serif font-bold text-primary-foreground">
                  Lanka Book of Records
                </h1>
                <p className="text-primary-foreground/80 mt-2">
                  Official Certificate of Achievement
                </p>
              </div>

              {/* Certificate Body */}
              <div className="py-12 px-8 md:px-16 text-center">
                <p className="text-muted-foreground text-lg mb-6">This is to certify that</p>
                
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
                  {certificate.holder}
                </h2>

                <p className="text-muted-foreground text-lg mb-6">
                  has successfully achieved the record for
                </p>

                <h3 className="text-2xl md:text-3xl font-serif font-semibold text-accent mb-6">
                  {certificate.title}
                </h3>

                <div className="inline-block px-6 py-3 bg-accent/10 rounded-full mb-8">
                  <p className="text-xl font-semibold text-primary">
                    {certificate.achievement}
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-12">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Date of Record</p>
                    <p className="font-semibold text-primary">{certificate.date}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Location</p>
                    <p className="font-semibold text-primary">{certificate.location}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Category</p>
                    <p className="font-semibold text-primary">{certificate.category}</p>
                  </div>
                </div>

                {/* Verification Badge */}
                <div className="flex items-center justify-center gap-3 py-4 px-6 bg-secondary rounded-lg inline-flex mb-8">
                  <Shield className="w-6 h-6 text-primary" />
                  <div className="text-left">
                    <p className="text-xs text-muted-foreground">Verification ID</p>
                    <p className="font-mono font-semibold text-primary">{certificate.certificateId}</p>
                  </div>
                </div>

                {/* Signature Area */}
                <div className="flex justify-center gap-16 pt-8 border-t border-border">
                  <div className="text-center">
                    <div className="w-32 h-0.5 bg-primary mb-2 mx-auto" />
                    <p className="text-sm text-muted-foreground">Chairman</p>
                    <p className="font-semibold text-primary">Lanka Book of Records</p>
                  </div>
                  <div className="text-center">
                    <div className="w-32 h-0.5 bg-primary mb-2 mx-auto" />
                    <p className="text-sm text-muted-foreground">Date of Issue</p>
                    <p className="font-semibold text-primary">{certificate.issuedDate}</p>
                  </div>
                </div>
              </div>

              {/* Certificate Footer */}
              <div className="bg-secondary py-4 px-8 text-center">
                <p className="text-xs text-muted-foreground">
                  This certificate is issued by Lanka Book of Records. Verify at www.lankabookofrecords.lk/verify
                </p>
              </div>
            </motion.div>

            {/* Download Options */}
            <div className="mt-8 text-center">
              <p className="text-muted-foreground mb-4">
                Download your certificate in high resolution
              </p>
              <div className="flex justify-center gap-4">
                <Button variant="outline" size="lg">
                  <Download className="w-5 h-5 mr-2" />
                  Download PDF
                </Button>
                <Button variant="outline" size="lg">
                  <Download className="w-5 h-5 mr-2" />
                  Download PNG
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Certificate;
