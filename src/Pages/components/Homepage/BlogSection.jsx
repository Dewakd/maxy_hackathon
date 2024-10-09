import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you use React Router for navigation
import Button from '../../../components/Button'; // Assuming you have a button component

function BlogSection() {
  const blogPosts = [
    {
      title: 'Beautiful nature',
      img: 'https://images.unsplash.com/photo-1664825381616-5cb8397fd9b1?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      path: '/blog/nature',
    },
    {
      title: 'Outdoor Activity',
      img: 'https://images.unsplash.com/photo-1503232478550-492d531afef9?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      path: '/blog/outdoor',
    },
    {
      title: 'Weather in the Leuwimalang',
      img: 'https://images.unsplash.com/photo-1710087305989-3692d5f1b712?q=80&w=1937&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      path: '/blog/weather',
    },
  ];

  return (
    <div className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 sm:mb-20">
            <div>
                <h2 className="text-4xl md:text-5xl font-geo text-gray-900 md:mb-6">Blog About Leuwimalang</h2>
            </div>
            <div>   
                <p className="text-gray-500 max-w-lg mt-5 mb-5">
                Tucked away in the heart of West Java, Indonesia, lies the charming village of Leuwimalang. This off-the-beaten-path destination is a treasure...
                </p>
                <Button buttonText="Read all article" transparent={true} />
            </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <Link to={post.path} key={index} className="group">
              <div className="rounded-lg shadow-lg overflow-hidden">
                <img
                  src={post.img}
                  alt={post.title}
                  className="w-full h-48 md:h-64 object-cover transition-transform duration-300 transform group-hover:scale-105"
                />
                <div className="p-4 flex items-center justify-between">
                  <h3 className="text-lg font-geo text-gray-900">{post.title}</h3>
                  <span className="text-xl text-black block">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BlogSection;
