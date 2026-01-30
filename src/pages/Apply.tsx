import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Trophy, FileText, Upload, MapPin, Calendar, Users,
  ArrowLeft, ArrowRight, CheckCircle, Info
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import Layout from "@/components/layout/Layout";

const steps = [
  { id: 1, title: "Record Details", icon: FileText },
  { id: 2, title: "Location & Date", icon: MapPin },
  { id: 3, title: "Evidence Upload", icon: Upload },
  { id: 4, title: "Witnesses", icon: Users },
  { id: 5, title: "Review & Submit", icon: CheckCircle },
];

const categories = [
  { value: "kids", label: "Kids Records" },
  { value: "individual", label: "Individual Records" },
  { value: "group", label: "Group Records" },
  { value: "school", label: "School & College Records" },
  { value: "corporate", label: "Corporate Records" },
];

const Apply = () => {
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    // Step 1
    recordTitle: "",
    category: "",
    description: "",
    previousRecord: "",
    // Step 2
    location: "",
    city: "",
    date: "",
    duration: "",
    // Step 3
    photos: [],
    videos: [],
    documents: [],
    // Step 4
    witness1Name: "",
    witness1Contact: "",
    witness1Organization: "",
    witness2Name: "",
    witness2Contact: "",
    witness2Organization: "",
    // Agreements
    agreeTerms: false,
    agreeVerification: false,
  });

  const updateFormData = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (currentStep < 5) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast({
      title: "Application Submitted!",
      description: "Your record application has been submitted successfully. You'll receive a confirmation email shortly.",
    });
    
    setTimeout(() => {
      window.location.href = "/dashboard";
    }, 1500);
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
            Apply for a Record
          </h1>
          <p className="text-muted-foreground mt-2">
            Fill out the form below to submit your record application
          </p>
        </div>
      </section>

      {/* Progress Steps */}
      <section className="py-6 border-b border-border bg-background sticky top-20 z-40">
        <div className="container-custom">
          <div className="flex justify-between">
            {steps.map((step, index) => (
              <div 
                key={step.id} 
                className={`flex items-center ${index < steps.length - 1 ? 'flex-1' : ''}`}
              >
                <div className="flex items-center gap-2">
                  <div className={`
                    w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold
                    ${currentStep === step.id 
                      ? 'bg-accent text-accent-foreground' 
                      : currentStep > step.id 
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted text-muted-foreground'
                    }
                  `}>
                    {currentStep > step.id ? (
                      <CheckCircle className="w-5 h-5" />
                    ) : (
                      step.id
                    )}
                  </div>
                  <span className={`hidden md:block text-sm font-medium ${
                    currentStep >= step.id ? 'text-primary' : 'text-muted-foreground'
                  }`}>
                    {step.title}
                  </span>
                </div>
                {index < steps.length - 1 && (
                  <div className={`flex-1 h-0.5 mx-4 ${
                    currentStep > step.id ? 'bg-primary' : 'bg-border'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="card-premium p-8"
            >
              {/* Step 1: Record Details */}
              {currentStep === 1 && (
                <div className="space-y-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <FileText className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h2 className="text-xl font-serif font-bold text-primary">Record Details</h2>
                      <p className="text-sm text-muted-foreground">Tell us about your record attempt</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="recordTitle">Record Title *</Label>
                    <Input
                      id="recordTitle"
                      placeholder="e.g., Longest Continuous Drumming"
                      value={formData.recordTitle}
                      onChange={(e) => updateFormData("recordTitle", e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="category">Category *</Label>
                    <Select
                      value={formData.category}
                      onValueChange={(value) => updateFormData("category", value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map((cat) => (
                          <SelectItem key={cat.value} value={cat.value}>
                            {cat.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Description *</Label>
                    <Textarea
                      id="description"
                      placeholder="Describe your record attempt in detail..."
                      rows={5}
                      value={formData.description}
                      onChange={(e) => updateFormData("description", e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="previousRecord">Previous Record (if attempting to break)</Label>
                    <Input
                      id="previousRecord"
                      placeholder="e.g., Current record is 48 hours by John Doe"
                      value={formData.previousRecord}
                      onChange={(e) => updateFormData("previousRecord", e.target.value)}
                    />
                  </div>
                </div>
              )}

              {/* Step 2: Location & Date */}
              {currentStep === 2 && (
                <div className="space-y-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h2 className="text-xl font-serif font-bold text-primary">Location & Date</h2>
                      <p className="text-sm text-muted-foreground">When and where did/will this take place?</p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="location">Venue/Location *</Label>
                      <Input
                        id="location"
                        placeholder="e.g., Town Hall Auditorium"
                        value={formData.location}
                        onChange={(e) => updateFormData("location", e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="city">City *</Label>
                      <Input
                        id="city"
                        placeholder="e.g., Colombo"
                        value={formData.city}
                        onChange={(e) => updateFormData("city", e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="date">Date of Record Attempt *</Label>
                      <Input
                        id="date"
                        type="date"
                        value={formData.date}
                        onChange={(e) => updateFormData("date", e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="duration">Duration (if applicable)</Label>
                      <Input
                        id="duration"
                        placeholder="e.g., 72 hours"
                        value={formData.duration}
                        onChange={(e) => updateFormData("duration", e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Evidence Upload */}
              {currentStep === 3 && (
                <div className="space-y-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Upload className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h2 className="text-xl font-serif font-bold text-primary">Evidence Upload</h2>
                      <p className="text-sm text-muted-foreground">Upload photos, videos, and documents</p>
                    </div>
                  </div>

                  <div className="bg-muted/50 rounded-lg p-4 flex items-start gap-3">
                    <Info className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div className="text-sm text-muted-foreground">
                      <p className="font-medium text-foreground mb-1">Evidence Requirements:</p>
                      <ul className="list-disc list-inside space-y-1">
                        <li>High-quality photographs from multiple angles</li>
                        <li>Continuous video recording (unedited)</li>
                        <li>Timing/measurement documentation if applicable</li>
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary transition-colors cursor-pointer">
                      <Upload className="w-10 h-10 text-muted-foreground mx-auto mb-3" />
                      <p className="font-medium text-primary mb-1">Upload Photos</p>
                      <p className="text-sm text-muted-foreground">PNG, JPG up to 10MB each (minimum 3 photos)</p>
                    </div>

                    <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary transition-colors cursor-pointer">
                      <Upload className="w-10 h-10 text-muted-foreground mx-auto mb-3" />
                      <p className="font-medium text-primary mb-1">Upload Videos</p>
                      <p className="text-sm text-muted-foreground">MP4, MOV up to 500MB</p>
                    </div>

                    <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary transition-colors cursor-pointer">
                      <Upload className="w-10 h-10 text-muted-foreground mx-auto mb-3" />
                      <p className="font-medium text-primary mb-1">Upload Documents</p>
                      <p className="text-sm text-muted-foreground">PDF, DOC (timing sheets, official letters)</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 4: Witnesses */}
              {currentStep === 4 && (
                <div className="space-y-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Users className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h2 className="text-xl font-serif font-bold text-primary">Witness Information</h2>
                      <p className="text-sm text-muted-foreground">Provide details of at least 2 witnesses</p>
                    </div>
                  </div>

                  <div className="bg-muted/50 rounded-lg p-4 flex items-start gap-3 mb-6">
                    <Info className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-muted-foreground">
                      Witnesses must be adults (18+) who are not family members. 
                      At least one should be from a recognized institution.
                    </p>
                  </div>

                  {/* Witness 1 */}
                  <div className="space-y-4">
                    <h3 className="font-semibold text-primary">Witness 1</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label>Full Name *</Label>
                        <Input
                          placeholder="Witness full name"
                          value={formData.witness1Name}
                          onChange={(e) => updateFormData("witness1Name", e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>Phone/Email *</Label>
                        <Input
                          placeholder="Contact information"
                          value={formData.witness1Contact}
                          onChange={(e) => updateFormData("witness1Contact", e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label>Organization/Institution</Label>
                      <Input
                        placeholder="e.g., University of Colombo"
                        value={formData.witness1Organization}
                        onChange={(e) => updateFormData("witness1Organization", e.target.value)}
                      />
                    </div>
                  </div>

                  {/* Witness 2 */}
                  <div className="space-y-4 pt-6 border-t border-border">
                    <h3 className="font-semibold text-primary">Witness 2</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label>Full Name *</Label>
                        <Input
                          placeholder="Witness full name"
                          value={formData.witness2Name}
                          onChange={(e) => updateFormData("witness2Name", e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>Phone/Email *</Label>
                        <Input
                          placeholder="Contact information"
                          value={formData.witness2Contact}
                          onChange={(e) => updateFormData("witness2Contact", e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label>Organization/Institution</Label>
                      <Input
                        placeholder="e.g., Department of Sports"
                        value={formData.witness2Organization}
                        onChange={(e) => updateFormData("witness2Organization", e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 5: Review & Submit */}
              {currentStep === 5 && (
                <div className="space-y-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h2 className="text-xl font-serif font-bold text-primary">Review & Submit</h2>
                      <p className="text-sm text-muted-foreground">Review your application before submitting</p>
                    </div>
                  </div>

                  {/* Summary Cards */}
                  <div className="space-y-4">
                    <div className="bg-secondary rounded-lg p-4">
                      <h4 className="font-semibold text-primary mb-2">Record Details</h4>
                      <p className="text-sm"><strong>Title:</strong> {formData.recordTitle || "Not provided"}</p>
                      <p className="text-sm"><strong>Category:</strong> {formData.category || "Not selected"}</p>
                      <p className="text-sm"><strong>Description:</strong> {formData.description || "Not provided"}</p>
                    </div>

                    <div className="bg-secondary rounded-lg p-4">
                      <h4 className="font-semibold text-primary mb-2">Location & Date</h4>
                      <p className="text-sm"><strong>Venue:</strong> {formData.location || "Not provided"}, {formData.city || ""}</p>
                      <p className="text-sm"><strong>Date:</strong> {formData.date || "Not provided"}</p>
                    </div>

                    <div className="bg-secondary rounded-lg p-4">
                      <h4 className="font-semibold text-primary mb-2">Witnesses</h4>
                      <p className="text-sm"><strong>Witness 1:</strong> {formData.witness1Name || "Not provided"}</p>
                      <p className="text-sm"><strong>Witness 2:</strong> {formData.witness2Name || "Not provided"}</p>
                    </div>
                  </div>

                  {/* Application Fee Notice */}
                  <div className="bg-accent/10 border border-accent/20 rounded-lg p-4">
                    <h4 className="font-semibold text-primary mb-2 flex items-center gap-2">
                      <Trophy className="w-5 h-5 text-accent" />
                      Application Fee
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      The application fee of <strong className="text-foreground">LKR 5,000</strong> will be processed 
                      after initial review. You will receive payment instructions via email.
                    </p>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-8 pt-6 border-t border-border">
                <Button
                  variant="outline"
                  onClick={prevStep}
                  disabled={currentStep === 1}
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Previous
                </Button>
                
                {currentStep < 5 ? (
                  <Button onClick={nextStep} className="btn-gold">
                    Next Step
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                ) : (
                  <Button 
                    onClick={handleSubmit} 
                    className="btn-gold"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Submit Application"}
                    <CheckCircle className="w-4 h-4 ml-2" />
                  </Button>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Apply;
