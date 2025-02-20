// const About = () => {
//     return (
//       <div className="w-full max-w-7xl mx-auto px-6 md:px-12 py-16">
//         <h1 className="text-4xl font-bold mb-8">About Us</h1>
//         <p className="text-lg">This is the About Us page content.</p>
//       </div>
//     );
//   };
  
//   export default About;

import React from 'react';
import { 
  Brain, 
  BarChart, 
  Shield, 
  Users, 
  Activity, 
  Database,
  Award,
  ScrollText
} from 'lucide-react';

const AboutSection = ({ title, content, icon: Icon }) => (
  <div className="flex flex-col items-center text-center p-6">
    <div className="p-4 bg-blue-100 rounded-full mb-4">
      <Icon className="w-8 h-8 text-blue-600" />
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{content}</p>
  </div>
);

const TechCard = ({ title, description, icon: Icon }) => (
  <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 p-6 border border-gray-100">
    <div className="flex items-center gap-3 mb-3">
      <div className="p-2 bg-purple-100 rounded-lg">
        <Icon className="w-5 h-5 text-purple-600" />
      </div>
      <h4 className="font-semibold text-lg">{title}</h4>
    </div>
    <p className="text-gray-600 text-sm">{description}</p>
  </div>
);

const AboutUs = () => {
  const stats = [
    { value: "95%", label: "Prediction Accuracy" },
    { value: "100+", label: "Features Analyzed" },
    { value: "24/7", label: "Monitoring" },
    { value: "Secure", label: "Data Handling" }
  ];

  const techStack = [
    {
      icon: Brain,
      title: "Random Forest Classifier",
      description: "Advanced machine learning model trained on comprehensive mental health data for accurate predictions."
    },
    {
      icon: Database,
      title: "Standardized Processing",
      description: "Robust data preprocessing with StandardScaler ensuring consistent and reliable predictions."
    },
    {
      icon: Activity,
      title: "Real-time Analysis",
      description: "Flask-powered API enabling instant mental health assessments and predictions."
    },
    {
      icon: Shield,
      title: "Secure Infrastructure",
      description: "CORS-enabled backend with comprehensive error handling and logging systems."
    }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-6 md:px-12 py-16 bg-gray-50">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Pioneering Mental Health Prediction
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Using advanced machine learning and data analytics to revolutionize mental health assessment 
          and support with our AI-powered prediction system.
        </p>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
        {stats.map((stat, index) => (
          <div key={index} className="text-center bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</div>
            <div className="text-gray-600">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Main Features */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        <AboutSection 
          icon={Brain}
          title="AI-Powered Analysis"
          content="Advanced machine learning algorithms process multiple mental health indicators for accurate predictions."
        />
        <AboutSection 
          icon={BarChart}
          title="Data-Driven Insights"
          content="Comprehensive analysis of mental health patterns using standardized data processing techniques."
        />
        <AboutSection 
          icon={Award}
          title="High Accuracy"
          content="Our random forest classifier achieves exceptional accuracy in mental health predictions."
        />
        <AboutSection 
          icon={ScrollText}
          title="Detailed Reporting"
          content="Generate comprehensive mental health assessments with confidence scores and detailed insights."
        />
      </div>

      {/* Technical Stack */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">Our Technology Stack</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {techStack.map((tech, index) => (
            <TechCard key={index} {...tech} />
          ))}
        </div>
      </div>

      {/* Mission Statement */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 text-center shadow-sm">
        <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
        <p className="text-gray-700 max-w-3xl mx-auto">
          We're committed to making mental health assessment more accessible and accurate through 
          innovative technology. Our AI-powered system combines clinical expertise with advanced 
          machine learning to provide reliable mental health predictions and support.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;