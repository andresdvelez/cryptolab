import { courses } from "@/modules/landing/constants/courses";
import { Button, Image } from "@heroui/react";
import React from "react";

const Courses = () => {
  return (
    <div className="container mx-auto px-4 pt-32 pb-20">
      <div className="text-center mb-16 animate-fade-up">
        <h1 className="text-4xl font-bold mb-4">Explore Our Courses</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Start your journey to becoming a blockchain expert with our
          comprehensive courses
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course, index) => (
          <div
            key={course.id}
            className="glass rounded-xl overflow-hidden animate-fade-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <Image
              src={course.image}
              alt={course.title}
              radius="none"
              className="w-full h-48 object-cover max-w-"
              classNames={{
                wrapper: "w-full !max-w-full",
              }}
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{course.title}</h3>
              <p className="text-gray-600 mb-4">{course.description}</p>
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                <div className="flex items-center">{course.level}</div>
                <div className="flex items-center">{course.duration}</div>
                <div className="flex items-center">
                  {course.lessons} lessons
                </div>
              </div>
              <Button className="w-full">Enroll Now</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
