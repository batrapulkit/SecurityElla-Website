
import React from 'react';
import { Lock, Star, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface Course {
  id: number;
  title: string;
  priceINR: string;
  priceUSD: string;
  description: string;
  featured?: boolean;
}

interface CourseCardProps {
  course: Course;
  featured?: boolean;
}

const CourseCard: React.FC<CourseCardProps> = ({ course, featured = false }) => {
  const navigate = useNavigate();

  const handleLearnMore = () => {
    navigate(`/course/${course.id}`);
  };

  return (
    <div className={`bg-white rounded-xl shadow-xl p-8 transition-all duration-500 hover:shadow-2xl hover:scale-105 hover:-translate-y-2 group animate-fade-in relative overflow-hidden ${
      featured ? 'border-2 border-black ring-2 ring-black/10' : 'border border-gray-300'
    }`}>
      {/* Background gradient overlay for featured courses */}
      {featured && (
        <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-transparent pointer-events-none"></div>
      )}
      
      <div className="relative z-10">
        {featured && (
          <div className="flex items-center mb-4 animate-bounce-subtle">
            <div className="bg-black text-white px-3 py-1 rounded-full flex items-center">
              <Star className="h-4 w-4 mr-1" />
              <span className="text-sm font-semibold">Featured Course</span>
            </div>
          </div>
        )}
        
        <div className="flex items-start mb-6">
          <div className="bg-black/10 p-3 rounded-lg mr-4">
            <Lock className="h-8 w-8 text-black transition-transform duration-300 group-hover:rotate-12" />
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-black group-hover:text-gray-700 transition-colors duration-300 leading-tight">
              {course.title}
            </h3>
          </div>
        </div>
        
        <div className="mb-6">
          <div className="flex items-center space-x-3">
            <span className="text-3xl font-bold text-black">{course.priceINR}</span>
            <span className="text-gray-400 text-xl">/</span>
            <span className="text-2xl font-semibold text-gray-700">{course.priceUSD}</span>
          </div>
        </div>
        
        <p className="text-gray-600 mb-8 leading-relaxed text-lg line-clamp-3">{course.description}</p>
        
        <button 
          onClick={handleLearnMore}
          className="w-full bg-black hover:bg-gray-800 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center group/btn text-lg"
        >
          Learn More
          <ArrowRight className="ml-2 h-5 w-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
        </button>
      </div>
    </div>
  );
};

export default CourseCard;
