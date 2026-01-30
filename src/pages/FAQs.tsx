import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Layout from "@/components/layout/Layout";

const faqCategories = [
  {
    title: "Application Process",
    faqs: [
      {
        question: "How do I apply for a record?",
        answer: "To apply for a record, first create an account on our website. Then, fill out the application form with details about your record attempt, upload supporting evidence, and submit for review. Our team will verify your submission and contact you if additional information is needed."
      },
      {
        question: "What documents do I need to submit?",
        answer: "Required documents include: clear photographs from multiple angles, video recording of the attempt, at least two witness statements, valid ID proof, and any relevant measurement or timing documentation. For institutional records, an official letter on institution letterhead is also required."
      },
      {
        question: "How long does the verification process take?",
        answer: "Standard verification takes 5-10 business days. Express processing is available for an additional fee and takes 2-3 business days. Complex records may require additional time for thorough verification."
      },
      {
        question: "Can I track my application status?",
        answer: "Yes, you can track your application status through your dashboard after logging in. You'll also receive email notifications at each stage of the verification process."
      },
    ]
  },
  {
    title: "Fees & Payment",
    faqs: [
      {
        question: "What are the application fees?",
        answer: "Application fees vary by category. Individual records start from LKR 5,000, school/college records from LKR 8,000, and corporate records from LKR 15,000. Detailed pricing is available on our pricing page."
      },
      {
        question: "Is there a refund if my application is rejected?",
        answer: "If your application is rejected due to insufficient evidence, you may resubmit with additional documentation at no extra cost within 30 days. The application fee is non-refundable as it covers the verification process."
      },
      {
        question: "What payment methods do you accept?",
        answer: "We accept bank transfers, credit/debit cards (Visa, MasterCard), and popular mobile payment methods. Payment details are provided upon application submission."
      },
    ]
  },
  {
    title: "Proof & Evidence",
    faqs: [
      {
        question: "What kind of video evidence is required?",
        answer: "Videos should be continuous, unedited recordings of the entire record attempt. For time-based records, the video must clearly show timing devices. Good lighting and clear audio are essential. Multiple camera angles are recommended."
      },
      {
        question: "Who can be a witness?",
        answer: "Witnesses must be adults (18+) who are not family members of the participant. At least one witness should be from a recognized institution (school, government office, etc.). Professional adjudicators may be required for certain categories."
      },
      {
        question: "Can I use photos from my phone?",
        answer: "Yes, high-quality photos from smartphones are acceptable. Ensure photos are well-lit, in focus, and capture the record attempt from multiple angles. Original, unedited photos are required."
      },
    ]
  },
  {
    title: "Certificates & Recognition",
    faqs: [
      {
        question: "What does the certificate include?",
        answer: "Official certificates include: the record title, record holder's name, date of achievement, location, unique certificate ID for verification, and the Lanka Book of Records official seal. Both digital and physical certificates are provided."
      },
      {
        question: "How can I verify a certificate?",
        answer: "Every certificate has a unique verification ID. This can be verified on our website by entering the certificate ID in our verification portal. This helps confirm the authenticity of any certificate."
      },
      {
        question: "Will my record be published?",
        answer: "Yes, approved records are published in our online gallery and may be featured in our annual publication. You can opt out of public display if you prefer to keep your record private."
      },
    ]
  },
  {
    title: "Record Categories & Eligibility",
    faqs: [
      {
        question: "Can I attempt a record that already exists?",
        answer: "Yes, you can attempt to break an existing record. To qualify, you must exceed the current record by a margin defined in our guidelines. The specific margin varies by record type."
      },
      {
        question: "Are there age restrictions?",
        answer: "Different categories have different age requirements. Kids Records are for those under 14, while Individual Records are open to all ages. Parental consent is required for participants under 18."
      },
      {
        question: "Can I propose a new record category?",
        answer: "Yes, we welcome new record proposals. If your achievement doesn't fit existing categories, contact us with details. Our panel will evaluate if it meets our criteria for a new record category."
      },
    ]
  },
];

const FAQs = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-secondary">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
            >
              <HelpCircle className="w-4 h-4" />
              Help Center
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6"
            >
              Frequently Asked Questions
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              Find answers to common questions about applying for records, 
              the verification process, and more.
            </motion.p>
          </div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-12">
            {faqCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-serif font-bold text-primary mb-6">
                  {category.title}
                </h2>
                <Accordion type="single" collapsible className="space-y-3">
                  {category.faqs.map((faq, faqIndex) => (
                    <AccordionItem 
                      key={faqIndex} 
                      value={`${categoryIndex}-${faqIndex}`}
                      className="card-premium px-6"
                    >
                      <AccordionTrigger className="text-left hover:no-underline py-5">
                        <span className="font-semibold text-primary pr-4">{faq.question}</span>
                      </AccordionTrigger>
                      <AccordionContent className="pb-5">
                        <p className="text-muted-foreground leading-relaxed">
                          {faq.answer}
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="section-padding bg-secondary">
        <div className="container-custom text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-4">
            Still Have Questions?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Can't find the answer you're looking for? Our support team is here to help.
          </p>
          <Link to="/contact">
            <Button size="lg" className="btn-gold">
              Contact Us
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default FAQs;
