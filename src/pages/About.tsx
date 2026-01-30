import { motion } from "framer-motion";
import { Target, Eye, Heart, Shield, Award, Users, CheckCircle } from "lucide-react";
import Layout from "@/components/layout/Layout";

const values = [
  { icon: Shield, title: "Integrity", description: "We maintain the highest standards of honesty and fairness in all our verification processes." },
  { icon: Award, title: "Excellence", description: "We recognize only genuine, verified achievements that meet our rigorous standards." },
  { icon: Users, title: "Inclusivity", description: "We celebrate achievements from all backgrounds, ages, and categories." },
  { icon: Heart, title: "Respect", description: "We treat every applicant with dignity and provide constructive feedback." },
];

const timeline = [
  { year: "2020", title: "Foundation", description: "Lanka Book of Records was established as Sri Lanka's official record authority." },
  { year: "2021", title: "First 500 Records", description: "Reached our first milestone of verifying and certifying 500 records." },
  { year: "2022", title: "Nationwide Recognition", description: "Gained official recognition and partnerships with educational institutions." },
  { year: "2023", title: "Digital Transformation", description: "Launched our digital platform for seamless application and verification." },
  { year: "2024", title: "2,500+ Records", description: "Celebrating over 2,500 verified records and growing." },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-secondary">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
            >
              About Us
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6"
            >
              Sri Lanka's Premier Record Authority
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              Lanka Book of Records is dedicated to discovering, verifying, and celebrating 
              exceptional achievements across Sri Lanka. We provide official certification 
              to individuals, groups, and institutions who accomplish extraordinary feats.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="card-premium p-8 md:p-10"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent mb-6">
                <Target className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-serif font-bold text-primary mb-4">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                To identify, verify, and officially recognize exceptional achievements across 
                Sri Lanka, inspiring individuals and communities to push boundaries and achieve 
                greatness. We aim to create a comprehensive database of Sri Lankan records while 
                maintaining the highest standards of authenticity and credibility.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="card-premium p-8 md:p-10"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
                <Eye className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-serif font-bold text-primary mb-4">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed">
                To become the most trusted and respected record certification authority in 
                Sri Lanka, fostering a culture of excellence and achievement. We envision a 
                nation where extraordinary accomplishments are celebrated, documented, and 
                preserved for future generations to admire and aspire to.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
              Our Core Values
            </h2>
            <p className="text-muted-foreground text-lg">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-background rounded-xl p-6 text-center card-hover-lift"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent/10 text-accent mb-4">
                  <value.icon className="w-7 h-7" />
                </div>
                <h3 className="font-serif font-semibold text-primary mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
              Our Journey
            </h2>
            <p className="text-muted-foreground text-lg">
              Key milestones in our mission to celebrate Sri Lankan achievements
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex gap-6 mb-8 last:mb-0"
              >
                <div className="flex-shrink-0 w-20">
                  <span className="inline-block px-3 py-1 rounded-full bg-accent text-accent-foreground text-sm font-bold">
                    {item.year}
                  </span>
                </div>
                <div className="flex-1 pb-8 border-l-2 border-border pl-6 relative">
                  <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-primary" />
                  <h3 className="font-serif font-semibold text-primary mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-primary">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
              Why Choose Lanka Book of Records?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              "Official nationally recognized certificates",
              "Rigorous multi-step verification process",
              "Permanent archival of your achievement",
              "Media coverage opportunities",
              "Digital and physical certificates",
              "Dedicated support throughout the process",
            ].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 text-white"
              >
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                <span>{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
