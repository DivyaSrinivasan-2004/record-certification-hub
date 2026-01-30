import { motion } from "framer-motion";
import { Shield, FileCheck, Users, Scale, AlertTriangle, CheckCircle } from "lucide-react";
import Layout from "@/components/layout/Layout";

const policies = [
  {
    icon: FileCheck,
    title: "Eligibility Requirements",
    items: [
      "Record attempts must be legal and comply with Sri Lankan laws",
      "Participants must be of appropriate age for the category (parental consent required for minors)",
      "Records must be measurable, breakable, and verifiable",
      "No records that involve harm to humans, animals, or the environment",
      "Previous record holders from other organizations may apply with fresh attempts",
    ]
  },
  {
    icon: Shield,
    title: "Evidence & Documentation",
    items: [
      "High-resolution photographs from at least 3 angles required",
      "Continuous video recording of the entire attempt (unedited)",
      "Minimum 2 independent witnesses with signed statements",
      "Official timing devices for time-based records",
      "Government-issued ID verification for all participants",
      "Institutional letterhead for school/corporate applications",
    ]
  },
  {
    icon: Users,
    title: "Witness Requirements",
    items: [
      "Witnesses must be 18 years or older",
      "Witnesses cannot be family members of the participant",
      "At least one witness should be from a recognized institution",
      "Witnesses must provide contact information for verification",
      "Professional adjudicators required for certain categories",
    ]
  },
  {
    icon: AlertTriangle,
    title: "Safety Guidelines",
    items: [
      "No records that endanger the life of participants",
      "Medical clearance required for physical endurance records",
      "First aid provisions must be available for physical attempts",
      "No records involving consumption of harmful substances",
      "Compliance with all safety regulations is mandatory",
    ]
  },
  {
    icon: Scale,
    title: "Verification & Decision",
    items: [
      "All applications undergo preliminary screening within 48 hours",
      "Detailed verification takes 5-10 business days",
      "Panel decision is final and binding",
      "Appeals may be submitted within 14 days of rejection",
      "Fraudulent claims will result in permanent blacklisting",
    ]
  },
];

const Policies = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-secondary">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6"
            >
              Policies & Guidelines
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              To ensure fairness, safety, and authenticity, all record attempts must 
              adhere to our comprehensive guidelines.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-8 bg-accent/10 border-y border-accent/20">
        <div className="container-custom">
          <div className="flex items-center gap-4 max-w-3xl mx-auto">
            <CheckCircle className="w-8 h-8 text-accent flex-shrink-0" />
            <p className="text-foreground">
              <strong>Important:</strong> By submitting an application, you agree to all policies 
              and guidelines outlined on this page. Non-compliance may result in rejection or 
              revocation of certification.
            </p>
          </div>
        </div>
      </section>

      {/* Policies Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-8">
            {policies.map((policy, index) => (
              <motion.div
                key={policy.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card-premium p-6 md:p-8"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <policy.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl font-serif font-bold text-primary mb-4">
                      {policy.title}
                    </h2>
                    <ul className="space-y-3">
                      {policy.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ethics Statement */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-serif font-bold text-primary mb-6">
              Our Commitment to Ethics
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Lanka Book of Records is committed to maintaining the highest ethical standards. 
              We do not accept records that promote discrimination, violence, or any form of 
              illegal activity. Our verification process is designed to be fair, transparent, 
              and impartial.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              If you have concerns about any record or application, please contact our 
              ethics committee at <span className="text-primary font-medium">ethics@lankabookofrecords.lk</span>
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Policies;
