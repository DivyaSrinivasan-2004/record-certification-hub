import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  UserPlus, FileText, Upload, Search, Award, ArrowRight,
  CheckCircle, Clock, HelpCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";

const steps = [
  {
    number: "01",
    icon: UserPlus,
    title: "Register an Account",
    description: "Create your free account on our platform with your basic details. This allows you to track your application progress.",
    duration: "2 minutes"
  },
  {
    number: "02",
    icon: FileText,
    title: "Submit Application",
    description: "Fill out the detailed application form with information about your record attempt, including date, location, and description.",
    duration: "10-15 minutes"
  },
  {
    number: "03",
    icon: Upload,
    title: "Upload Evidence",
    description: "Provide supporting evidence including photos, videos, witness statements, and any relevant documentation.",
    duration: "Varies"
  },
  {
    number: "04",
    icon: Search,
    title: "Verification Process",
    description: "Our expert panel reviews your submission, verifies the evidence, and may contact you for additional information.",
    duration: "5-10 business days"
  },
  {
    number: "05",
    icon: Award,
    title: "Receive Certification",
    description: "Upon approval, receive your official Lanka Book of Records certificate with a unique verification ID.",
    duration: "3-5 business days"
  },
];

const requirements = [
  "Clear, high-quality photographs from multiple angles",
  "Video recording of the record attempt (if applicable)",
  "At least two independent witness statements",
  "Official timing/measurement documentation (if applicable)",
  "Valid government-issued ID of the record holder",
  "Consent forms for minors (if applicable)",
];

const faqs = [
  {
    question: "How much does it cost to apply?",
    answer: "Application fees vary by category. Standard individual records start from LKR 5,000. Check our pricing page for detailed information."
  },
  {
    question: "How long does the verification take?",
    answer: "Standard verification takes 5-10 business days. Express processing is available for an additional fee."
  },
  {
    question: "Can I apply for a record that already exists?",
    answer: "Yes, you can attempt to break an existing record. You must exceed the current record by a significant margin as defined in our guidelines."
  },
];

const HowToApply = () => {
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
              How to Apply
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              Follow our simple 5-step process to get your achievement officially 
              recognized by Lanka Book of Records.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative flex gap-6 mb-12 last:mb-0"
              >
                {/* Timeline Line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-8 top-20 w-0.5 h-[calc(100%-2rem)] bg-border" />
                )}
                
                {/* Step Number */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center relative z-10">
                    <step.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 pb-6">
                  <div className="card-premium p-6 md:p-8">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-3xl font-serif font-bold text-accent">{step.number}</span>
                      <h3 className="text-xl font-serif font-bold text-primary">{step.title}</h3>
                    </div>
                    <p className="text-muted-foreground mb-4">{step.description}</p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span>Estimated time: {step.duration}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <Link to="/register">
              <Button size="lg" className="btn-gold">
                Start Your Application
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif font-bold text-primary mb-4">
                What You'll Need
              </h2>
              <p className="text-muted-foreground">
                Prepare these items before starting your application
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {requirements.map((req, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3 bg-background p-4 rounded-lg"
                >
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{req}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quick FAQs */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif font-bold text-primary mb-4">
                Common Questions
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="card-premium p-6"
                >
                  <div className="flex items-start gap-3">
                    <HelpCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-primary mb-2">{faq.question}</h4>
                      <p className="text-muted-foreground text-sm">{faq.answer}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-8">
              <Link to="/faqs">
                <Button variant="outline">
                  View All FAQs
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container-custom text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mb-4">
            Ready to Make History?
          </h2>
          <p className="text-white/80 mb-6 max-w-xl mx-auto">
            Join thousands of record holders who have been officially recognized 
            by Lanka Book of Records.
          </p>
          <Link to="/register">
            <Button size="lg" className="btn-gold">
              Create Your Account
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default HowToApply;
