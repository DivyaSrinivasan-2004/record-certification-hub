import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  ArrowLeft, User, Mail, Phone, MapPin, Camera, Save,
  Shield, Bell, LogOut
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/hooks/use-toast";
import Layout from "@/components/layout/Layout";

const Profile = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "Rajitha Perera",
    email: "rajitha@example.com",
    phone: "+94 77 123 4567",
    address: "123 Main Street, Colombo 03",
    bio: "Passionate about setting records and achieving new milestones.",
    emailNotifications: true,
    smsNotifications: false,
  });

  const handleSave = async () => {
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    toast({
      title: "Profile Updated",
      description: "Your profile has been saved successfully.",
    });
    setIsLoading(false);
  };

  return (
    <Layout>
      {/* Header */}
      <section className="py-8 bg-secondary border-b border-border">
        <div className="container-custom">
          <Link to="/dashboard" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-4">
            <ArrowLeft className="w-4 h-4" />
            Back to Dashboard
          </Link>
          <h1 className="text-3xl font-serif font-bold text-primary">
            Profile Settings
          </h1>
          <p className="text-muted-foreground mt-1">
            Manage your account information and preferences
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Sidebar */}
              <div className="lg:col-span-1">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="card-premium p-6 text-center"
                >
                  <div className="relative inline-block mb-4">
                    <div className="w-24 h-24 rounded-full bg-primary flex items-center justify-center">
                      <User className="w-12 h-12 text-primary-foreground" />
                    </div>
                    <button className="absolute bottom-0 right-0 w-8 h-8 rounded-full bg-accent flex items-center justify-center hover:bg-accent/80 transition-colors">
                      <Camera className="w-4 h-4 text-accent-foreground" />
                    </button>
                  </div>
                  <h3 className="font-serif font-semibold text-primary text-lg">
                    {formData.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{formData.email}</p>
                  <p className="text-xs text-muted-foreground mt-2">Member since January 2024</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  className="card-premium p-6 mt-6"
                >
                  <h4 className="font-semibold text-primary mb-4">Quick Stats</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Total Applications</span>
                      <span className="font-semibold text-primary">3</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Approved Records</span>
                      <span className="font-semibold text-primary">1</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Certificates</span>
                      <span className="font-semibold text-primary">1</span>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Main Content */}
              <div className="lg:col-span-2 space-y-6">
                {/* Personal Information */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="card-premium p-6"
                >
                  <h3 className="font-serif font-semibold text-primary text-lg mb-6 flex items-center gap-2">
                    <User className="w-5 h-5 text-accent" />
                    Personal Information
                  </h3>
                  <div className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                          <Input
                            id="email"
                            type="email"
                            className="pl-10"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                          <Input
                            id="phone"
                            type="tel"
                            className="pl-10"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="address">Address</Label>
                        <div className="relative">
                          <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                          <Input
                            id="address"
                            className="pl-10"
                            value={formData.address}
                            onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="bio">Bio</Label>
                      <Textarea
                        id="bio"
                        rows={3}
                        value={formData.bio}
                        onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                      />
                    </div>
                  </div>
                </motion.div>

                {/* Notification Preferences */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="card-premium p-6"
                >
                  <h3 className="font-serif font-semibold text-primary text-lg mb-6 flex items-center gap-2">
                    <Bell className="w-5 h-5 text-accent" />
                    Notification Preferences
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-primary">Email Notifications</p>
                        <p className="text-sm text-muted-foreground">Receive updates about your applications via email</p>
                      </div>
                      <Switch
                        checked={formData.emailNotifications}
                        onCheckedChange={(checked) => setFormData({ ...formData, emailNotifications: checked })}
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-primary">SMS Notifications</p>
                        <p className="text-sm text-muted-foreground">Receive updates about your applications via SMS</p>
                      </div>
                      <Switch
                        checked={formData.smsNotifications}
                        onCheckedChange={(checked) => setFormData({ ...formData, smsNotifications: checked })}
                      />
                    </div>
                  </div>
                </motion.div>

                {/* Security */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="card-premium p-6"
                >
                  <h3 className="font-serif font-semibold text-primary text-lg mb-6 flex items-center gap-2">
                    <Shield className="w-5 h-5 text-accent" />
                    Security
                  </h3>
                  <div className="space-y-4">
                    <Button variant="outline" className="w-full md:w-auto">
                      Change Password
                    </Button>
                    <div className="pt-4 border-t border-border">
                      <Button variant="destructive" className="w-full md:w-auto">
                        <LogOut className="w-4 h-4 mr-2" />
                        Sign Out
                      </Button>
                    </div>
                  </div>
                </motion.div>

                {/* Save Button */}
                <div className="flex justify-end">
                  <Button 
                    className="btn-gold" 
                    size="lg"
                    onClick={handleSave}
                    disabled={isLoading}
                  >
                    <Save className="w-5 h-5 mr-2" />
                    {isLoading ? "Saving..." : "Save Changes"}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Profile;
