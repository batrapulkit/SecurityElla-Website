
import React from 'react';
import { ArrowRight, Shield, Users, Award, BookOpen, Zap, Target } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CourseCard from '../components/CourseCard';
import { courses } from '../data/courses';

const Index = () => {
  const navigate = useNavigate();
  const featuredCourses = courses.filter(course => course.featured).slice(0, 3);

  const stats = [
    { number: '1000+', label: 'Students Trained', icon: Users },
    { number: '18', label: 'Expert Courses', icon: BookOpen },
    { number: '95%', label: 'Success Rate', icon: Award },
    { number: '24/7', label: 'Support', icon: Shield }
  ];

  const features = [
    {
      icon: Shield,
      title: 'Industry Expert Instructors',
      description: 'Learn from cybersecurity professionals with years of real-world experience'
    },
    {
      icon: Zap,
      title: 'Hands-on Learning',
      description: 'Practical exercises and real-world scenarios to build your skills'
    },
    {
      icon: Target,
      title: 'Career-Focused Training',
      description: 'Courses designed to get you job-ready in cybersecurity roles'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-black via-gray-900 to-black text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Master <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">Cybersecurity</span> Skills
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Transform your career with our comprehensive cybersecurity training programs. 
                From fundamentals to expert-level techniques, we've got you covered.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => navigate('/courses')}
                  className="bg-white text-black hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center group"
                >
                  Explore Courses 
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
                <button 
                  onClick={() => navigate('/contact')}
                  className="border-2 border-white text-white hover:bg-white hover:text-black font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  Get Started Today
                </button>
              </div>
            </div>
            <div className="animate-slide-in-right">
              <img 
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Cybersecurity Training" 
                className="rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <stat.icon className="h-12 w-12 mx-auto mb-4 text-white" />
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-black mb-4">Why Choose SecurityElla?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide world-class cybersecurity education with practical, hands-on training
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-slide-in-left border border-gray-200"
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                <feature.icon className="h-12 w-12 text-black mb-6" />
                <h3 className="text-xl font-bold text-black mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-black mb-4">Featured Courses</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Start your cybersecurity journey with our most popular courses
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCourses.map((course, index) => (
              <div key={course.id} style={{ animationDelay: `${index * 0.2}s` }}>
                <CourseCard course={course} featured={true} />
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12 animate-bounce-subtle">
            <button 
              onClick={() => navigate('/courses')}
              className="bg-black hover:bg-gray-800 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              View All Courses
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-5"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Secure Your Future?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of professionals who have advanced their careers with our cybersecurity training
            </p>
            <button 
              onClick={() => navigate('/contact')}
              className="bg-white text-black hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl inline-flex items-center group"
            >
              Start Your Journey Today
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
