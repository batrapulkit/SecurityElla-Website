
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { courses } from '../data/courses';
import { ArrowLeft, Clock, Users, Award, CheckCircle, Star, Shield, Target } from 'lucide-react';

const CourseDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const course = courses.find(c => c.id === parseInt(id || '0'));

  const handleEnrollNow = () => {
    navigate(`/contact?course=${encodeURIComponent(course?.title || '')}&action=enroll`);
  };

  const handleContactForInfo = () => {
    navigate(`/contact?course=${encodeURIComponent(course?.title || '')}&action=info`);
  };

  if (!course) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="pt-24 pb-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
            <h1 className="text-3xl font-bold text-black mb-4">Course Not Found</h1>
            <button
              onClick={() => navigate('/courses')}
              className="text-black hover:text-gray-600 transition-colors duration-300"
            >
              Back to Courses
            </button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const features = [
    'Comprehensive video tutorials',
    'Hands-on practical exercises',
    'Real-world case studies',
    'Expert instructor support',
    'Certificate of completion',
    'Lifetime access to materials'
  ];

  const courseImages = [
    'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Header Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-black via-gray-900 to-black text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => navigate('/courses')}
            className="flex items-center text-gray-300 hover:text-white mb-8 transition-all duration-300 hover:scale-105 animate-slide-in-left"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Courses
          </button>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="flex items-center mb-4">
                {course.featured && (
                  <div className="flex items-center bg-white text-black px-3 py-1 rounded-full text-sm font-semibold mr-4 animate-bounce-subtle">
                    <Star className="h-4 w-4 mr-1" />
                    Featured
                  </div>
                )}
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">{course.title}</h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">{course.description}</p>
              
              <div className="flex flex-wrap items-center gap-6 mb-8 animate-slide-in-right">
                <div className="flex items-center bg-white/10 px-4 py-2 rounded-lg">
                  <Clock className="h-5 w-5 mr-2" />
                  <span>Self-paced</span>
                </div>
                <div className="flex items-center bg-white/10 px-4 py-2 rounded-lg">
                  <Users className="h-5 w-5 mr-2" />
                  <span>All levels</span>
                </div>
                <div className="flex items-center bg-white/10 px-4 py-2 rounded-lg">
                  <Award className="h-5 w-5 mr-2" />
                  <span>Certificate included</span>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 animate-bounce-subtle">
                <span className="text-4xl font-bold text-white">{course.priceINR}</span>
                <span className="text-gray-400 text-2xl">/</span>
                <span className="text-3xl font-semibold text-gray-300">{course.priceUSD}</span>
              </div>
            </div>
            <div className="animate-slide-in-right">
              <img 
                src={courseImages[Math.floor(Math.random() * courseImages.length)]} 
                alt={course.title} 
                className="rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Course Content */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-xl p-8 mb-8 animate-slide-in-left border border-gray-200 hover:shadow-2xl transition-shadow duration-300">
                <h2 className="text-3xl font-bold text-black mb-8 flex items-center">
                  <Target className="h-8 w-8 mr-3" />
                  What You'll Learn
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start p-4 bg-gray-50 rounded-lg transition-all duration-300 hover:scale-105 hover:bg-gray-100">
                      <CheckCircle className="h-6 w-6 text-green-500 mr-4 mt-1 flex-shrink-0" />
                      <span className="text-gray-700 text-lg">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-xl p-8 animate-slide-in-left border border-gray-200 hover:shadow-2xl transition-shadow duration-300">
                <h2 className="text-3xl font-bold text-black mb-8 flex items-center">
                  <Shield className="h-8 w-8 mr-3" />
                  Course Description
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                    This comprehensive course is designed to provide you with in-depth knowledge and practical skills in <strong>{course.title.toLowerCase()}</strong>. 
                    Whether you're a beginner or looking to advance your existing skills, this course will take you through all the essential 
                    concepts and real-world applications.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                    Our expert instructors bring years of industry experience and will guide you through hands-on exercises, case studies, 
                    and practical scenarios that mirror real-world challenges in cybersecurity. You'll work with the latest tools and techniques 
                    used by professionals in the field.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Upon completion, you'll have the confidence and skills needed to apply your knowledge in professional environments 
                    and advance your cybersecurity career. Our graduates have gone on to work at top companies and security firms worldwide.
                  </p>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-xl p-8 sticky top-24 animate-slide-in-right border border-gray-200 hover:shadow-2xl transition-shadow duration-300">
                <div className="text-center mb-8">
                  <div className="text-4xl font-bold text-black mb-2">{course.priceINR}</div>
                  <div className="text-2xl text-gray-600">{course.priceUSD}</div>
                </div>
                
                <button 
                  onClick={handleEnrollNow}
                  className="w-full bg-black hover:bg-gray-800 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 mb-4 transform hover:scale-105 hover:shadow-xl text-lg"
                >
                  Enroll Now
                </button>
                
                <button 
                  onClick={handleContactForInfo}
                  className="w-full border-2 border-black text-black hover:bg-black hover:text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 text-lg"
                >
                  Contact for Info
                </button>

                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h3 className="font-bold text-black mb-6 text-xl">Course Includes:</h3>
                  <ul className="space-y-4 text-gray-600">
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      Lifetime access
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      Certificate of completion
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      Expert support
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      Mobile and desktop access
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      Regular updates
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CourseDetail;
