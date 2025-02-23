import { Button } from "@heroui/react";

export const CTA = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="bg-[#E9E5FF] glass-card rounded-3xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-6 text-[#1F1A38]">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of students who are already learning blockchain
            development with us.
          </p>
          <Button className="bg-[#1F1A38] hover:bg-[#1F1A38]/90 text-white px-8 py-6">
            Start Learning Now
          </Button>
        </div>
      </div>
    </section>
  );
};
