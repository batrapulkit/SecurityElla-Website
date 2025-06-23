
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CourseCard from '../components/CourseCard';
import { courses } from '../data/courses';
import { Search, Filter, ArrowUp, BookOpen, Users, Award } from 'lucide-react';

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [priceFilter, setPriceFilter] = useState('all');
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Filter courses based on search term and price filter
  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (priceFilter === 'all') return matchesSearch;
    
    const priceValue = parseInt(course.priceINR.replace(/[₹,]/g, ''));
    if (priceFilter === 'low') return matchesSearch && priceValue <= 10000;
    if (priceFilter === 'medium') return matchesSearch && priceValue > 10000 && priceValue <= 20000;
    if (priceFilter === 'high') return matchesSearch && priceValue > 20000;
    
    return matchesSearch;
  });

  // Handle scroll to show/hide back to top button
  React.useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const stats = [
    { icon: BookOpen, number: '18', label: 'Total Courses' },
    { icon: Users, number: '1000+', label: 'Students' },
    { icon: Award, number: '95%', label: 'Success Rate' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Header Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-black via-gray-900 to-black text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Courses</h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Comprehensive cybersecurity training from fundamentals to expert level. 
                Choose from 18 specialized courses designed to advance your career.
              </p>
            </div>
            <div className="animate-slide-in-right">
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Cybersecurity Learning" 
                className="rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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

      {/* Search and Filter Section */}
      <section className="py-8 bg-white border-b-2 border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between animate-slide-in-right">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search courses..."
                className="w-full pl-10 pr-4 py-3 border-2 border-black rounded-lg focus:ring-2 focus:ring-gray-300 focus:border-gray-500 transition-all duration-300 text-lg"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Price Filter */}
            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-black" />
              <select
                className="border-2 border-black rounded-lg px-4 py-3 focus:ring-2 focus:ring-gray-300 focus:border-gray-500 transition-all duration-300 text-lg"
                value={priceFilter}
                onChange={(e) => setPriceFilter(e.target.value)}
              >
                <option value="all">All Prices</option>
                <option value="low">Under ₹10,000</option>
                <option value="medium">₹10,000 - ₹20,000</option>
                <option value="high">Above ₹20,000</option>
              </select>
            </div>
          </div>

          {/* Results count */}
          <div className="mt-6 text-gray-600 animate-fade-in text-lg">
            Showing <span className="font-bold text-black">{filteredCourses.length}</span> of <span className="font-bold text-black">{courses.length}</span> courses
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredCourses.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCourses.map((course, index) => (
                <div key={course.id} style={{ animationDelay: `${index * 0.1}s` }}>
                  <CourseCard course={course} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 animate-fade-in">
              <div className="mb-6">
                <BookOpen className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500 text-xl mb-2">No courses found matching your criteria.</p>
                <p className="text-gray-400">Try adjusting your search or filter settings.</p>
              </div>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setPriceFilter('all');
                }}
                className="bg-black text-white hover:bg-gray-800 font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-black text-white p-4 rounded-full shadow-2xl hover:bg-gray-800 transition-all duration-300 z-50 animate-bounce-subtle transform hover:scale-110"
          aria-label="Back to top"
        >
          <ArrowUp className="h-6 w-6" />
        </button>
      )}

      <Footer />
    </div>
  );
};

export default Courses;
