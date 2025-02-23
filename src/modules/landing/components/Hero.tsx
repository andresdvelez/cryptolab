export const Hero = () => {
  return (
    <section className="container mx-auto px-4 pt-32 pb-20">
      <div className="text-center space-y-6 max-w-4xl mx-auto">
        <div className="animate-fade-up">
          <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
            Welcome to Cryptolab
          </span>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent animate-fade-up">
          Master Blockchain Development
          <br />
          <span className="text-primary">Build Your Future</span>
        </h1>

        <p className="text-lg text-gray-400 max-w-2xl mx-auto animate-fade-up">
          Learn blockchain development from industry experts. Master Solidity,
          smart contracts, and web3 technologies through hands-on projects and
          real-world applications.
        </p>

        <div className="flex items-center justify-center space-x-4 animate-fade-up">
          <button className="px-8 py-3 bg-primary hover:bg-primary/90 text-white rounded-lg font-medium transition-colors">
            Start Learning
          </button>
          <button className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg font-medium transition-colors">
            View Courses
          </button>
        </div>
      </div>
    </section>
  );
};
