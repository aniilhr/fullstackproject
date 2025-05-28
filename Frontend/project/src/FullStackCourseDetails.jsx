import React from 'react';


const FullStackCourseDetails = () => {
  return (
    <div className="max-w-5xl mx-auto p-6 bg-white rounded-2xl shadow-lg mt-10">
      <h1 className="text-4xl font-bold mb-2 text-gray-800">Full Stack Web Developer</h1>
      <p className="text-lg text-gray-600 mb-6">Become a job-ready Full Stack Web Developer. Master both frontend and backend skills.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="p-5 border rounded-xl shadow-sm hover:shadow-md transition">
          <h3 className="text-xl font-semibold text-gray-700 mb-2">💼 Average Salary</h3>
          <p className="text-2xl font-bold text-green-600">$127,005</p>
          <p className="text-sm text-gray-500">(United States)</p>
        </div>

        <div className="p-5 border rounded-xl shadow-sm hover:shadow-md transition">
          <h3 className="text-xl font-semibold text-gray-700 mb-2">📊 Job Roles Available</h3>
          <p className="text-2xl font-bold text-blue-600">16,500+</p>
          <p className="text-sm text-gray-500">roles open across the US</p>
        </div>
      </div>

      <div className="flex items-center space-x-3 mb-6">
        <div className="flex items-center text-yellow-500">
          <Star className="w-6 h-6 fill-yellow-400 stroke-yellow-400" />
          <span className="text-xl font-semibold ml-1">4.7</span>
        </div>
        <span className="text-sm text-gray-500">442K Ratings</span>
      </div>

      <div className="p-6 bg-blue-50 rounded-xl border border-blue-200 mb-6">
        <h3 className="text-xl font-semibold text-blue-800 mb-2">⏱ Total Duration</h3>
        <p className="text-2xl text-blue-700 font-bold">87.6 Hours</p>
        <p className="text-sm text-blue-600">Self-paced with progress tracking</p>
      </div>

      <button className="px-6 py-3 bg-blue-600 text-white text-lg rounded-xl hover:bg-blue-700 transition">
        Enroll Now
      </button>
    </div>
  );
};

export default FullStackCourseDetails;
