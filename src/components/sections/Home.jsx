import { RevealOnScroll } from '../RevealOnScroll';

export const Home = () => {
    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center relative"
        >
            <RevealOnScroll>
                <div className="text-center z-10 px-4">
                    <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
                        I'm Daniel Kim, better known as:
                    </p>

                    <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-700 to-yellow-400 bg-clip-text text-transparent leading-right">
                        ACupOfRamen
                    </h1>

                    <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
                        A UWaterloo Electrical Engineering undergraduate.
                        Proficient in coding, fullstack, content creation, and AI.
                    </p>

                    <div className="flex justify-center space-x-4">
                        <a
                            href="#projects"
                            className="bg-orange-700 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden
                        hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(246, 130, 59, 0.4)]"
                        >
                            View Projects
                        </a>

                        <a
                            href="#contact"
                            className="border border-yellow-400/50 text-yellow-400 py-3 px-6 rounded font-medium transition-all duration-200
                        hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(246, 130, 59, 0.2)] hover:bg-yellow-400/10"
                        >
                            Contact Me
                        </a>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};