import { plans } from "@/modules/landing/constants/plans";
import { Button } from "@heroui/react";

const Pricing = () => {
  return (
    <div className="container mx-auto px-4 pt-32 pb-20 min-h-screen">
      <div className="text-center mb-16 animate-fade-up">
        <h1 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Choose the perfect plan to accelerate your blockchain development
          journey
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {plans.map((plan, index) => (
          <div
            key={plan.name}
            className={`glass rounded-2xl p-8 animate-fade-up ${
              plan.popular ? "ring-2 ring-emerald-500 scale-105" : ""
            }`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {plan.popular && (
              <div className="text-emerald-600 text-sm font-medium mb-4">
                ★ Most Popular
              </div>
            )}
            <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
            <div className="text-4xl font-bold mb-4">{plan.price}</div>
            <p className="text-gray-600 mb-6">{plan.description}</p>
            <Button
              className="w-full mb-8"
              variant={plan.popular ? "solid" : "bordered"}
            >
              Get Started
            </Button>
            <ul className="space-y-4">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center text-gray-600">
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
