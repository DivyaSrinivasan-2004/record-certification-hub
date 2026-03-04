import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Trophy, Award, Users, Building2, GraduationCap, Baby,
  ArrowRight, CheckCircle2, Star, Medal, Shield
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import heroBg from "@/assets/hero-bg.jpg";

const stats = [
  { label: "Records Verified", value: "2,500+", icon: Trophy },
  { label: "Participants", value: "15,000+", icon: Users },
  { label: "Institutions", value: "500+", icon: Building2 },
  { label: "Categories", value: "50+", icon: Award },
];

const categories = [
  { name: "Kids Records", icon: Baby, description: "Celebrating young achievers under 14", href: "/categories?type=kids", color: "bg-pink-500" },
  { name: "Individual Records", icon: Medal, description: "Personal achievements and talents", href: "/categories?type=individual", color: "bg-blue-500" },
  { name: "Group Records", icon: Users, description: "Team accomplishments and collaborations", href: "/categories?type=group", color: "bg-green-500" },
  { name: "School & College", icon: GraduationCap, description: "Academic institution records", href: "/categories?type=school", color: "bg-purple-500" },
  { name: "Corporate Records", icon: Building2, description: "Business and organizational achievements", href: "/categories?type=corporate", color: "bg-orange-500" },
];

const featuredRecords = [
  {
    id: 1,
    title: "Longest Continuous Cricket Commentary",
    holder: "Rajitha Perera",
    location: "Colombo",
    date: "2024",
    category: "Individual",
    image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=300&fit=crop",
  },
  {
    id: 2,
    title: "Largest Traditional Dance Performance",
    holder: "Kandy Dance Academy",
    location: "Kandy",
    date: "2024",
    category: "Group",
    image: "https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?w=400&h=300&fit=crop",
  },
  {
    id: 3,
    title: "Youngest Chess Grandmaster",
    holder: "Amaya Silva",
    location: "Galle",
    date: "2024",
    category: "Kids",
    image: "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?w=400&h=300&fit=crop",
  },
];

const features = [
  { icon: Shield, title: "Official Certification", description: "Nationally recognized certificates with unique verification IDs" },
  { icon: CheckCircle2, title: "Rigorous Verification", description: "Multi-step verification process ensuring authenticity" },
  { icon: Star, title: "Media Coverage", description: "Featured in national media and official publications" },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img 
            src={heroBg} 
            alt="Trophy celebration" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-900/95 via-navy-800/90 to-navy-900/80" />
          <div className="absolute inset-0 hero-pattern" />
        </div>

        <div className="container-custom relative z-10 py-20">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent text-sm font-medium mb-6">
                <Trophy className="w-4 h-4" />
                Sri Lanka's Official Record Authority
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight mb-6"
            >
              Celebrating{" "}
              <span className="text-gradient-gold">Extraordinary</span>{" "}
              Achievements
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed"
            >
              Lanka Book of Records is the premier authority for certifying and celebrating 
              exceptional achievements across Sri Lanka. From individual talents to institutional 
              accomplishments, we recognize the extraordinary.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Link to="/apply">
                <Button size="lg" className="btn-gold text-base px-8">
                  Apply for a Record
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to="/records">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="text-base px-8 border-white/30 text-black hover:bg-white/10 hover:text-white"
                >
                  View Records
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Floating Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="absolute right-10 bottom-20 hidden xl:block"
        >
          <div className="w-40 h-40 rounded-full bg-accent/20 backdrop-blur-sm flex items-center justify-center animate-float">
            <div className="text-center">
              <Trophy className="w-12 h-12 text-accent mx-auto mb-2" />
              <span className="text-white text-sm font-medium">Since 2020</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-secondary border-y border-border">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary mb-4">
                  <stat.icon className="w-7 h-7" />
                </div>
                <div className="text-3xl md:text-4xl font-serif font-bold text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
              What We Do
            </h2>
            <p className="text-muted-foreground text-lg">
              We verify, document, and celebrate extraordinary achievements, 
              providing official recognition to record holders across Sri Lanka.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card-premium p-8 text-center card-hover-lift"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent mb-6">
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-primary mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
              Record Categories
            </h2>
            <p className="text-muted-foreground text-lg">
              Explore our diverse range of categories designed to recognize achievements 
              at every level and age group.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <Link 
                  to={category.href}
                  className="block card-premium p-6 card-hover-lift group"
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-lg ${category.color} flex items-center justify-center flex-shrink-0`}>
                      <category.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-serif font-semibold text-primary mb-1 group-hover:text-accent transition-colors">
                        {category.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {category.description}
                      </p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/categories">
              <Button variant="outline" size="lg">
                View All Categories
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Records */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-2">
                Featured Records
              </h2>
              <p className="text-muted-foreground">
                Recent outstanding achievements recognized by Lanka Book of Records
              </p>
            </div>
            <Link to="/records">
              <Button variant="link" className="text-primary p-0">
                View All Records
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredRecords.map((record, index) => (
              <motion.article
                key={record.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card-premium overflow-hidden card-hover-lift group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={record.image} 
                    alt={record.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-semibold">
                      {record.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-serif font-semibold text-lg text-primary mb-2 group-hover:text-accent transition-colors line-clamp-2">
                    {record.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    {record.holder} • {record.location}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">{record.date}</span>
                    <Link to={`/records/${record.id}`}>
                      <Button variant="ghost" size="sm" className="text-primary">
                        View Details
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 hero-pattern opacity-50" />
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Trophy className="w-16 h-16 text-accent mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
                Have You Achieved Something Extraordinary?
              </h2>
              <p className="text-lg text-white/80 mb-8">
                Whether it's a personal accomplishment, a group effort, or an institutional 
                achievement, we want to hear about it. Apply now and get officially recognized!
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/apply">
                  <Button size="lg" className="btn-gold text-base px-8">
                    Apply for a Record
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Link to="/how-to-apply">
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="text-base px-8 border-white/30 text-white hover:bg-white/10 hover:text-white"
                  >
                    Learn How It Works
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
