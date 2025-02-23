import { Link } from "@/modules/translations/i18n/routing";

export const NavigationBar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold bg-gradient-to-r to-80% from-primary to-secondary bg-clip-text text-transparent">
            Cryptolab
          </span>
        </Link>

        <div className="hidden md:flex items-center space-x-6">
          <Link
            href="/courses"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Courses
          </Link>
          <Link
            href="/pricing"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Pricing
          </Link>
          <button className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg transition-colors">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};
