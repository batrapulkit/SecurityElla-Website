
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Shield, Target, Users, BookOpen, Award, Globe } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-r from-blue-900 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About SecurityElla</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Empowering the next generation of cybersecurity professionals through comprehensive, 
              practical, and accessible education.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center mb-6">
                <Target className="h-10 w-10 text-blue-600 mr-4" />
                <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                At SecurityElla, we believe that cybersecurity education should be accessible to everyone. 
                Our mission is to bridge the cybersecurity skills gap by providing high-quality, practical 
                training that prepares individuals and organizations for the evolving threat landscape.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We're committed to making cybersecurity learning exciting, engaging, and empowering, 
                helping our students build the confidence and skills they need to protect digital assets 
                and advance their careers.
              </p>
            </div>

            <div>
              <div className="flex items-center mb-6">
                <Shield className="h-10 w-10 text-blue-600 mr-4" />
                <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                We envision a world where cybersecurity knowledge is widespread and accessible, 
                creating a safer digital environment for everyone. Our goal is to become the 
                leading platform for cybersecurity education globally.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Through innovative teaching methods, cutting-edge curriculum, and a supportive 
                learning community, we aim to cultivate the next generation of cybersecurity 
                experts who will defend against tomorrow's threats.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              What Sets Us Apart
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              SecurityElla stands out in the cybersecurity education landscape through our commitment 
              to practical, hands-on learning and comprehensive curriculum design.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <BookOpen className="h-12 w-12 text-blue-600 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Comprehensive Curriculum</h3>
              <p className="text-gray-600">
                18 specialized courses covering everything from fundamentals to expert-level techniques, 
                ensuring complete coverage of the cybersecurity domain.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <Users className="h-12 w-12 text-blue-600 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Expert Instructors</h3>
              <p className="text-gray-600">
                Learn from industry professionals with years of hands-on experience in cybersecurity, 
                ethical hacking, and digital forensics.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <Award className="h-12 w-12 text-blue-600 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Practical Focus</h3>
              <p className="text-gray-600">
                Hands-on labs, real-world scenarios, and practical exercises that prepare you 
                for actual cybersecurity challenges in the workplace.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <Globe className="h-12 w-12 text-blue-600 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Global Accessibility</h3>
              <p className="text-gray-600">
                Flexible online learning platform accessible from anywhere in the world, 
                with courses designed for different time zones and learning schedules.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <Shield className="h-12 w-12 text-blue-600 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Up-to-Date Content</h3>
              <p className="text-gray-600">
                Regularly updated curriculum that reflects the latest threats, technologies, 
                and best practices in the rapidly evolving cybersecurity landscape.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <Users className="h-12 w-12 text-blue-600 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Community Support</h3>
              <p className="text-gray-600">
                Join a vibrant community of cybersecurity professionals, students, and experts 
                who support each other's learning journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Who We Serve
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our courses are designed for a diverse range of learners, from complete beginners 
              to experienced professionals looking to advance their cybersecurity expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <BookOpen className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Students & Beginners</h3>
              <p className="text-gray-600">
                Whether you're a computer science student or someone new to cybersecurity, 
                our foundational courses will give you the knowledge and skills to start your journey.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">IT Professionals</h3>
              <p className="text-gray-600">
                Expand your skillset and advance your career with specialized training in 
                ethical hacking, penetration testing, digital forensics, and security management.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Organizations & Startups</h3>
              <p className="text-gray-600">
                Train your teams with our comprehensive courses designed for businesses, 
                including specialized training for startups and enterprise security management.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
