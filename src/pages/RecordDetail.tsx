import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  ArrowLeft, Calendar, MapPin, User, Trophy, Shield, 
  Share2, Download, CheckCircle 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";

// Mock data - in production, fetch from API
const recordsData: Record<string, {
  id: number;
  title: string;
  holder: string;
  location: string;
  date: string;
  category: string;
  description: string;
  fullDescription: string;
  image: string;
  certificateId: string;
  witnesses: string[];
}> = {
  "1": {
    id: 1,
    title: "Longest Continuous Cricket Commentary",
    holder: "Rajitha Perera",
    location: "Colombo, Sri Lanka",
    date: "January 15, 2024",
    category: "Individual",
    description: "72 hours of non-stop cricket commentary",
    fullDescription: "Rajitha Perera achieved an extraordinary feat by providing continuous cricket commentary for 72 hours without sleep, covering multiple matches and engaging audiences with insightful analysis and entertaining commentary. This remarkable achievement showcases exceptional knowledge of the sport, mental endurance, and vocal stamina. The attempt was conducted under strict supervision with medical professionals on standby throughout the duration.",
    image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=800&h=500&fit=crop",
    certificateId: "LBR-2024-IND-0015",
    witnesses: ["Sri Lanka Cricket Association Representative", "Independent Medical Officer", "Media Representatives"]
  },
  "2": {
    id: 2,
    title: "Largest Traditional Dance Performance",
    holder: "Kandy Dance Academy",
    location: "Kandy, Sri Lanka",
    date: "February 20, 2024",
    category: "Group",
    description: "1,500 dancers performing simultaneously",
    fullDescription: "The Kandy Dance Academy organized a spectacular display of Sri Lankan traditional dance with 1,500 performers executing synchronized movements across the historic Dalada Maligawa premises. The performance included traditional Kandyan dance, low country dance, and Sabaragamuwa dance forms, showcasing the rich cultural heritage of Sri Lanka. The event was witnessed by thousands of spectators and broadcast live on national television.",
    image: "https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?w=800&h=500&fit=crop",
    certificateId: "LBR-2024-GRP-0008",
    witnesses: ["Department of Cultural Affairs", "Tourism Board Representative", "Video Documentation Team"]
  },
  "3": {
    id: 3,
    title: "Youngest Chess Grandmaster",
    holder: "Amaya Silva",
    location: "Galle, Sri Lanka",
    date: "March 10, 2024",
    category: "Kids",
    description: "Achieved grandmaster status at age 12",
    fullDescription: "Amaya Silva became Sri Lanka's youngest chess grandmaster at the age of 12 years and 3 months, surpassing the previous record by nearly 6 months. Her journey to this remarkable achievement included winning multiple national championships and competing in international tournaments across Asia and Europe. Amaya's strategic brilliance and dedication to the game have made her a role model for young chess enthusiasts across the country.",
    image: "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?w=800&h=500&fit=crop",
    certificateId: "LBR-2024-KID-0012",
    witnesses: ["Sri Lanka Chess Federation", "FIDE Representative", "National Sports Council"]
  },
};

const RecordDetail = () => {
  const { id } = useParams<{ id: string }>();
  const record = id ? recordsData[id] : null;

  if (!record) {
    return (
      <Layout>
        <div className="section-padding text-center">
          <h1 className="text-2xl font-serif font-bold text-primary mb-4">Record Not Found</h1>
          <p className="text-muted-foreground mb-6">The record you're looking for doesn't exist.</p>
          <Link to="/records">
            <Button>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Records
            </Button>
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Back Navigation */}
      <section className="py-6 border-b border-border">
        <div className="container-custom">
          <Link to="/records" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Records Gallery
          </Link>
        </div>
      </section>

      {/* Hero Image */}
      <section className="relative h-[40vh] md:h-[50vh] overflow-hidden">
        <img 
          src={record.image} 
          alt={record.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        
        <div className="absolute bottom-8 left-0 right-0">
          <div className="container-custom">
            <span className="inline-block px-3 py-1 rounded-full bg-accent text-accent-foreground text-sm font-semibold mb-4">
              {record.category} Record
            </span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding -mt-20 relative z-10">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="card-premium p-8"
              >
                <h1 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">
                  {record.title}
                </h1>
                
                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <User className="w-4 h-4" />
                    <span>{record.holder}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span>{record.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>{record.date}</span>
                  </div>
                </div>

                <div className="prose prose-lg max-w-none">
                  <p className="text-foreground leading-relaxed">
                    {record.fullDescription}
                  </p>
                </div>

                {/* Witnesses */}
                <div className="mt-8 pt-8 border-t border-border">
                  <h3 className="font-serif font-semibold text-primary mb-4">Official Witnesses</h3>
                  <ul className="space-y-2">
                    {record.witnesses.map((witness, index) => (
                      <li key={index} className="flex items-center gap-2 text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-accent" />
                        {witness}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Actions */}
                <div className="flex gap-3 mt-8 pt-8 border-t border-border">
                  <Button variant="outline">
                    <Share2 className="w-4 h-4 mr-2" />
                    Share
                  </Button>
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="card-premium p-6 sticky top-28"
              >
                {/* Verification Badge */}
                <div className="flex items-center gap-3 p-4 rounded-lg bg-emerald-50 border border-emerald-200 mb-6">
                  <Shield className="w-8 h-8 text-emerald-600" />
                  <div>
                    <span className="block font-semibold text-emerald-800">Verified Record</span>
                    <span className="text-sm text-emerald-600">Officially Certified</span>
                  </div>
                </div>

                {/* Certificate Info */}
                <div className="space-y-4">
                  <div>
                    <span className="text-sm text-muted-foreground">Certificate ID</span>
                    <p className="font-mono font-semibold text-primary">{record.certificateId}</p>
                  </div>
                  
                  <div>
                    <span className="text-sm text-muted-foreground">Category</span>
                    <p className="font-semibold text-primary">{record.category}</p>
                  </div>
                  
                  <div>
                    <span className="text-sm text-muted-foreground">Achievement</span>
                    <p className="font-semibold text-primary">{record.description}</p>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-border">
                  <div className="flex items-center gap-3 text-muted-foreground text-sm">
                    <Trophy className="w-5 h-5 text-accent" />
                    <span>This record is part of the official Lanka Book of Records registry</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default RecordDetail;
