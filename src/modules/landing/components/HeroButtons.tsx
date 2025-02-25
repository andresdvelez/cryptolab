"use client";

import { Link } from "@/modules/translations/i18n/routing";
import { Button } from "@heroui/react";

export const HeroButtons = () => {
  return (
    <div className="flex items-center justify-center space-x-4 animate-fade-up">
      <Button
        as={Link}
        href="/pricing"
        className="px-8 py-3 bg-primary hover:bg-primary/90 text-white rounded-lg font-medium transition-colors"
      >
        Start Learning
      </Button>
      <Button
        as={Link}
        href="/courses"
        className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg font-medium transition-colors"
      >
        View Courses
      </Button>
    </div>
  );
};
