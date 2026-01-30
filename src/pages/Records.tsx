import { useState } from "react";
import { motion } from "framer-motion";
import { Link, useSearchParams } from "react-router-dom";
import { Search, Filter, ArrowRight, Calendar, MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Layout from "@/components/layout/Layout";

const allRecords = [
  {
    id: 1,
    title: "Longest Continuous Cricket Commentary",
    holder: "Rajitha Perera",
    location: "Colombo",
    date: "2024-01-15",
    category: "Individual",
    description: "72 hours of non-stop cricket commentary",
    image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=300&fit=crop",
    verified: true,
  },
  {
    id: 2,
    title: "Largest Traditional Dance Performance",
    holder: "Kandy Dance Academy",
    location: "Kandy",
    date: "2024-02-20",
    category: "Group",
    description: "1,500 dancers performing simultaneously",
    image: "https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?w=400&h=300&fit=crop",
    verified: true,
  },
  {
    id: 3,
    title: "Youngest Chess Grandmaster",
    holder: "Amaya Silva",
    location: "Galle",
    date: "2024-03-10",
    category: "Kids",
    description: "Achieved grandmaster status at age 12",
    image: "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?w=400&h=300&fit=crop",
    verified: true,
  },
  {
    id: 4,
    title: "Most Trees Planted in a Day",
    holder: "Green Future Initiative",
    location: "Anuradhapura",
    date: "2024-04-22",
    category: "Corporate",
    description: "50,000 trees planted in 24 hours",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&h=300&fit=crop",
    verified: true,
  },
  {
    id: 5,
    title: "Longest Continuous Singing",
    holder: "Malini Fernando",
    location: "Negombo",
    date: "2024-05-05",
    category: "Individual",
    description: "48 hours of continuous singing",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop",
    verified: true,
  },
  {
    id: 6,
    title: "Largest School Art Exhibition",
    holder: "Royal College Colombo",
    location: "Colombo",
    date: "2024-06-15",
    category: "School",
    description: "5,000 artworks displayed",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=300&fit=crop",
    verified: true,
  },
  {
    id: 7,
    title: "Fastest 100m Swim (Under 10)",
    holder: "Kasun Jayawardene",
    location: "Colombo",
    date: "2024-07-01",
    category: "Kids",
    description: "Completed in 58.2 seconds",
    image: "https://images.unsplash.com/photo-1530549387789-4c1017266635?w=400&h=300&fit=crop",
    verified: true,
  },
  {
    id: 8,
    title: "Longest Drumming Marathon",
    holder: "Nuwan Bandara",
    location: "Matara",
    date: "2024-08-10",
    category: "Individual",
    description: "60 hours of continuous drumming",
    image: "https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?w=400&h=300&fit=crop",
    verified: true,
  },
];

const categories = ["All", "Kids", "Individual", "Group", "School", "Corporate"];

const Records = () => {
  const [searchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get("category") || "All");

  const filteredRecords = allRecords.filter((record) => {
    const matchesSearch = record.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          record.holder.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || record.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

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
              Records Gallery
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              Explore our collection of verified records celebrating extraordinary 
              achievements across Sri Lanka.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 border-b border-border sticky top-20 bg-background z-40">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder="Search by title or record holder..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex items-center gap-3">
              <Filter className="w-5 h-5 text-muted-foreground" />
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((cat) => (
                    <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Records Grid */}
      <section className="section-padding">
        <div className="container-custom">
          {filteredRecords.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg">No records found matching your criteria.</p>
            </div>
          ) : (
            <>
              <p className="text-muted-foreground mb-8">
                Showing {filteredRecords.length} record{filteredRecords.length !== 1 ? 's' : ''}
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredRecords.map((record, index) => (
                  <motion.article
                    key={record.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="card-premium overflow-hidden card-hover-lift group"
                  >
                    <div className="relative h-40 overflow-hidden">
                      <img
                        src={record.image}
                        alt={record.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="px-2.5 py-1 rounded-full bg-accent text-accent-foreground text-xs font-semibold">
                          {record.category}
                        </span>
                      </div>
                      {record.verified && (
                        <div className="absolute top-3 right-3">
                          <span className="px-2 py-1 rounded-full bg-emerald-500 text-white text-xs font-medium">
                            Verified
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="p-4">
                      <h3 className="font-serif font-semibold text-primary mb-2 line-clamp-2 group-hover:text-accent transition-colors">
                        {record.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        {record.holder}
                      </p>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {record.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {new Date(record.date).getFullYear()}
                        </span>
                      </div>
                      <Link to={`/records/${record.id}`}>
                        <Button variant="ghost" size="sm" className="w-full text-primary">
                          View Details
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </Button>
                      </Link>
                    </div>
                  </motion.article>
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Records;
