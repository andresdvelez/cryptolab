import { Button, Image, Input } from "@heroui/react";
import React from "react";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-[#F8F9FE] p-6">
      <div className="flex gap-6">
        {/* Sidebar */}
        <div className="w-20 flex flex-col items-center gap-8">
          <div className="w-12 h-12 bg-pink-400 rounded-xl flex items-center justify-center">
            <span className="text-white font-bold">BL</span>
          </div>
          <nav className="flex flex-col gap-6">
            <button className="p-3 rounded-xl bg-[#E9E5FF] text-purple-600"></button>
            <button className="p-3 rounded-xl hover:bg-gray-100 text-gray-600 transition-colors"></button>
            <button className="p-3 rounded-xl hover:bg-gray-100 text-gray-600 transition-colors"></button>
            <button className="p-3 rounded-xl hover:bg-gray-100 text-gray-600 transition-colors"></button>
            <button className="p-3 rounded-xl hover:bg-gray-100 text-gray-600 transition-colors mt-auto"></button>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="relative w-96">
              <Input
                placeholder="Search something"
                className="pl-10 bg-white border-none"
              />
            </div>
            <div className="flex items-center gap-4">
              <button className="p-2 rounded-full hover:bg-gray-100"></button>
              <Image
                src="https://i.pravatar.cc/150?img=32"
                alt="Profile"
                className="w-10 h-10 rounded-full"
              />
            </div>
          </div>

          {/* Featured Course Banner */}
          <div className="bg-[#E9E5FF] rounded-3xl p-8 mb-12 flex justify-between items-center">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-[#1F1A38]">
                Have you seen the new blockchain course that has come out yet?
              </h2>
              <Button className="bg-[#1F1A38] hover:bg-[#1F1A38]/90">
                Start Course
              </Button>
            </div>
            <Image
              src="/lovable-uploads/7d906f27-c3b1-4ded-a107-309096bc59f2.png"
              alt="Course illustration"
              className="w-64 animate-fade-in"
            />
          </div>

          {/* Progress Section */}
          <div className="mb-12">
            <h3 className="text-xl font-bold mb-6">Your progress</h3>
            <div className="grid grid-cols-3 gap-6">
              {[
                {
                  title: "Blockchain Fundamentals",
                  progress: 86,
                  color: "bg-[#E9E5FF]",
                  textColor: "text-purple-600",
                },
                {
                  title: "Smart Contract Development",
                  progress: 32,
                  color: "bg-orange-100",
                  textColor: "text-orange-600",
                },
                {
                  title: "DeFi Basics",
                  progress: 5,
                  color: "bg-pink-100",
                  textColor: "text-pink-600",
                },
              ].map((course, index) => (
                <div
                  key={index}
                  className={`${course.color} rounded-2xl p-6 animate-fade-up`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex justify-between items-center mb-4">
                    <div className="w-10 h-10 bg-white rounded-full" />
                    <button className="w-8 h-8 rounded-full hover:bg-white/50 flex items-center justify-center transition-colors">
                      ⋮
                    </button>
                  </div>
                  <h4 className="font-medium mb-4">{course.title}</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Progress</span>
                      <span className={course.textColor}>
                        {course.progress}%
                      </span>
                    </div>
                    <div className="h-1 bg-white/50 rounded-full overflow-hidden">
                      <div
                        className={`h-full ${course.textColor} bg-current transition-all duration-1000`}
                        style={{ width: `${course.progress}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Top Articles */}
          <div>
            <h3 className="text-xl font-bold mb-6">Top articles for you</h3>
            <div className="grid grid-cols-2 gap-6">
              {[
                {
                  title: "Understanding Blockchain: Core Concepts Explained",
                  time: "5 min",
                  category: "Technique",
                },
                {
                  title: "Smart Contract Security Best Practices",
                  time: "7 min",
                  category: "Security",
                },
              ].map((article, index) => (
                <div
                  key={index}
                  className="bg-[#F3F4F6] rounded-2xl p-6 hover:bg-[#E9E5FF] transition-colors cursor-pointer animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <h4 className="font-medium mb-4">{article.title}</h4>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span>{article.category}</span>
                    <span>•</span>
                    <span>{article.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="w-80">
          {/* Calendar Widget */}
          <div className="bg-white rounded-2xl p-6 mb-8">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-bold">March 2024</h3>
              <div className="flex gap-2">
                <button className="p-2 rounded-full hover:bg-gray-100">
                  ←
                </button>
                <button className="p-2 rounded-full hover:bg-gray-100">
                  →
                </button>
              </div>
            </div>
            {/* Calendar grid would go here */}
          </div>

          {/* Upcoming Courses */}
          <div>
            <h3 className="font-bold mb-6">Upcoming courses</h3>
            <div className="space-y-4">
              {[
                {
                  title: "Advanced Smart Contracts",
                  price: "$50.99",
                  duration: "3 month",
                  lessons: "56 lessons",
                },
                {
                  title: "DeFi Development",
                  price: "$25.99",
                  duration: "2 weeks",
                  lessons: "10 lessons",
                },
              ].map((course, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex justify-between items-center mb-4">
                    <div className="space-y-1">
                      <h4 className="font-medium">{course.title}</h4>
                      <p className="text-sm text-gray-500">
                        {course.duration} • {course.lessons}
                      </p>
                    </div>
                    <span className="font-bold">{course.price}</span>
                  </div>
                  <Button className="w-full">Buy course</Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
