import { motion } from "framer-motion";
import { Link, useSearchParams } from "react-router-dom";
import { 
  Baby, Medal, Users, GraduationCap, Building2, ArrowRight,
  Palette, Music, Dumbbell, Brain, Mic, Camera, Heart, Utensils
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import { cn } from "@/lib/utils";

const mainCategories = [
  { 
    id: "kids", 
    name: "Kids Records", 
    icon: Baby, 
    color: "bg-pink-500",
    description: "Celebrating extraordinary achievements by young talents under 14 years of age.",
    subcategories: ["Academic Excellence", "Arts & Creativity", "Sports & Fitness", "Social Service", "Unique Talents"]
  },
  { 
    id: "individual", 
    name: "Individual Records", 
    icon: Medal, 
    color: "bg-blue-500",
    description: "Personal achievements showcasing unique talents, skills, and accomplishments.",
    subcategories: ["Endurance & Stamina", "Speed Records", "Memory & Mental Skills", "Creative Arts", "Physical Feats"]
  },
  { 
    id: "group", 
    name: "Group Records", 
    icon: Users, 
    color: "bg-green-500",
    description: "Team accomplishments and collaborative efforts that achieve remarkable results.",
    subcategories: ["Mass Participation", "Synchronized Activities", "Community Projects", "Cultural Events", "Sports Teams"]
  },
  { 
    id: "school", 
    name: "School & College Records", 
    icon: GraduationCap, 
    color: "bg-purple-500",
    description: "Academic institution records celebrating educational excellence and campus achievements.",
    subcategories: ["Academic Performance", "Extra-curricular Activities", "Infrastructure", "Alumni Achievements", "Innovation & Research"]
  },
  { 
    id: "corporate", 
    name: "Corporate Records", 
    icon: Building2, 
    color: "bg-orange-500",
    description: "Business and organizational achievements that set industry benchmarks.",
    subcategories: ["CSR Initiatives", "Employee Engagement", "Business Milestones", "Innovation", "Sustainability"]
  },
];

const specialCategories = [
  { name: "Arts & Culture", icon: Palette, count: 150 },
  { name: "Music & Dance", icon: Music, count: 120 },
  { name: "Sports & Fitness", icon: Dumbbell, count: 200 },
  { name: "Memory & Mental", icon: Brain, count: 80 },
  { name: "Public Speaking", icon: Mic, count: 60 },
  { name: "Photography", icon: Camera, count: 45 },
  { name: "Social Service", icon: Heart, count: 90 },
  { name: "Culinary Arts", icon: Utensils, count: 70 },
];

const Categories = () => {
  const [searchParams] = useSearchParams();
  const activeType = searchParams.get("type");

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
              Record Categories
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              Explore our comprehensive range of categories designed to recognize 
              exceptional achievements across all age groups and fields.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Main Categories */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-2xl font-serif font-bold text-primary mb-8">Main Categories</h2>
          
          <div className="space-y-6">
            {mainCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className={cn(
                  "card-premium overflow-hidden",
                  activeType === category.id && "ring-2 ring-accent"
                )}
              >
                <div className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className={cn("w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0", category.color)}>
                      <category.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-xl font-serif font-bold text-primary mb-2">
                        {category.name}
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        {category.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {category.subcategories.map((sub) => (
                          <span 
                            key={sub}
                            className="px-3 py-1 rounded-full bg-secondary text-sm text-muted-foreground"
                          >
                            {sub}
                          </span>
                        ))}
                      </div>

                      <div className="flex gap-3">
                        <Link to={`/records?category=${category.id}`}>
                          <Button variant="outline" size="sm">
                            View Records
                            <ArrowRight className="w-4 h-4 ml-1" />
                          </Button>
                        </Link>
                        <Link to="/apply">
                          <Button size="sm" className="btn-gold">
                            Apply Now
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Categories */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <h2 className="text-2xl font-serif font-bold text-primary mb-8">Special Interest Categories</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {specialCategories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-background rounded-xl p-6 text-center card-hover-lift cursor-pointer group"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-3 group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                  <category.icon className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-primary text-sm mb-1">{category.name}</h3>
                <p className="text-xs text-muted-foreground">{category.count} records</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="container-custom text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mb-4">
            Don't See Your Category?
          </h2>
          <p className="text-white/80 mb-6 max-w-xl mx-auto">
            We're always open to new categories. Contact us if you have an achievement 
            that doesn't fit existing categories.
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

export default Categories;
