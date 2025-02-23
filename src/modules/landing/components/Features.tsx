export const Features = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Why Choose Our Platform</h2>
          <p className="text-xl text-gray-600">
            Everything you need to become a blockchain expert
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Interactive Learning",
              description:
                "Practice with real-world projects and get instant feedback",
              color: "bg-[#E9E5FF]",
              textColor: "text-purple-600",
            },
            {
              title: "Expert Instructors",
              description:
                "Learn from experienced blockchain developers and professionals",
              color: "bg-orange-100",
              textColor: "text-orange-600",
            },
            {
              title: "Community Support",
              description:
                "Join a community of learners and get help when needed",
              color: "bg-pink-100",
              textColor: "text-pink-600",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className={`${feature.color} glass-card rounded-2xl p-8 animate-fade-up hover-scale`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <h3 className={`text-xl font-bold mb-4 ${feature.textColor}`}>
                {feature.title}
              </h3>
              <p className="text-gray-700">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
