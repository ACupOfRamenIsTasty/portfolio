import { RevealOnScroll } from '../RevealOnScroll';

export const Projects = () => {
    return (
        <section
            id="projects"
            className="min-h-screen flex items-center justify-center py-20"
        >
            <RevealOnScroll>
                <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-orange-700 to-yellow-400 bg-clip-text text-transparent text-center">
                        Featured Projects
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-yellow-500/30
                    hover:shadow-[0_2px_8px_rgba(246,130,59,0.1)] transition"
                        >
                            <h3 className="text-xl font-bold mb-2">
                                Multiple YouTube Partnerships
                            </h3>
                            <p className="text-gray-400 mb-4">
                                Creatively edited 700+ former Minecraft and rhythm game videos to become a <u>self-starting</u> YouTube Partner
                            </p>
                            <p className="text-gray-400 mb-4">
                                Scaled a niche rhythm game channel from 0 to 600 subscribers within 2 months
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["Final Cut Pro X", "YouTube Studio", "Canva", "SEO", "Communication"].map((skill, key) => (
                                    <span className="bg-orange-500/10 text-yellow-400 py-1 px-3 rounded-full text-sm hover:bg-yellow-400/20
                            hover:shadow-[0_2px_8px_rgba(246,130,59,0.2)] transition-all"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>

                            <div className="flex justify-between items-center">
                                <a
                                    href="https:/youtube.com/@nihilRG"
                                    target="_blank"
                                    className="text-yellow-400 hover:text-yellow-200 transition-colors my-4"
                                >
                                    View Channels
                                </a>
                            </div>
                        </div>

                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-yellow-500/30
                    hover:shadow-[0_2px_8px_rgba(246,130,59,0.1)] transition"
                        >
                            <h3 className="text-xl font-bold mb-2">
                                Prompt Engineering Curriculum
                            </h3>
                            <p className="text-gray-400 mb-4">
                                Designed an AI curriculum for elementary and high-school students, promoting it with a blog and YouTube video
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["Final Cut Pro X", "YouTube Studio", "WordPress", "Prompt Engineering", "Communication"].map((skill, key) => (
                                    <span className="bg-orange-500/10 text-yellow-400 py-1 px-3 rounded-full text-sm hover:bg-yellow-400/20
                            hover:shadow-[0_2px_8px_rgba(246,130,59,0.2)] transition-all"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>

                            <div className="flex flex-wrap justify-between items-center grid grid-cols-3 gap-2 mb-4">
                                <a
                                    href="https://drive.google.com/drive/u/0/folders/1dYGAmO4XE_X2SSoWgKSyqRKjmoAAkyV5"
                                    target="_blank"
                                    className="text-yellow-400 hover:text-yellow-200 transition-colors my-4"
                                >
                                    View Curriculum
                                </a>

                                <a
                                    href="https://wizrobotics.com/2024/10/17/the-ultimate-ai-lesson/"
                                    target="_blank"
                                    className="text-yellow-400 hover:text-yellow-200 transition-colors my-4"
                                >
                                    View Blog
                                </a>

                                <a
                                    href="https://youtu.be/Wvl6_jXIpGo"
                                    target="_blank"
                                    className="text-yellow-400 hover:text-yellow-200 transition-colors my-4"
                                >
                                    View Video
                                </a>
                            </div>
                        </div>

                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-yellow-500/30
                    hover:shadow-[0_2px_8px_rgba(246,130,59,0.1)] transition"
                        >
                            <h3 className="text-xl font-bold mb-2">
                                World Bank Software Library
                            </h3>
                            <p className="text-gray-400 mb-4">
                                Constructed an application to analyze real-world datasets and gain insights into societally-relevant problems
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["C++", "DSA", "Dynamic Memory", "OOP"].map((skill, key) => (
                                    <span className="bg-orange-500/10 text-yellow-400 py-1 px-3 rounded-full text-sm hover:bg-yellow-400/20
                            hover:shadow-[0_2px_8px_rgba(246,130,59,0.2)] transition-all"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-yellow-500/30
                    hover:shadow-[0_2px_8px_rgba(246,130,59,0.1)] transition"
                        >
                            <h3 className="text-xl font-bold mb-2">Traffic Light Controller</h3>
                            <p className="text-gray-400 mb-4">
                                Programmed an FPGA traffic display allowing users to trigger crosswalk signals from both directions
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["VHDL", "Moore SMs", "Mealy SMs"].map((skill, key) => (
                                    <span className="bg-orange-500/10 text-yellow-400 py-1 px-3 rounded-full text-sm hover:bg-yellow-400/20
                            hover:shadow-[0_2px_8px_rgba(246,130,59,0.2)] transition-all"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-yellow-500/30
                    hover:shadow-[0_2px_8px_rgba(246,130,59,0.1)] transition"
                        >
                            <h3 className="text-xl font-bold mb-2">Digital Thermostat</h3>
                            <p className="text-gray-400 mb-4">
                                Programmed an FPGA application to simulate the regulation of a room's temperature when opening doors and turning on the AC/furnace
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["VHDL", "Adders", "Comparators", "Sequential Logic"].map((skill, key) => (
                                    <span className="bg-orange-500/10 text-yellow-400 py-1 px-3 rounded-full text-sm hover:bg-yellow-400/20
                            hover:shadow-[0_2px_8px_rgba(246,130,59,0.2)] transition-all"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-yellow-500/30
                    hover:shadow-[0_2px_8px_rgba(246,130,59,0.1)] transition"
                        >
                            <h3 className="text-xl font-bold mb-2">C++ Minesweeper</h3>
                            <p className="text-gray-400 mb-4">
                                Wrote function definitions for the game, allowing the player to customize the board size and number of mines
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["C++", "OOP", "Bitwise", "Recursion"].map((skill, key) => (
                                    <span className="bg-orange-500/10 text-yellow-400 py-1 px-3 rounded-full text-sm hover:bg-yellow-400/20
                            hover:shadow-[0_2px_8px_rgba(246,130,59,0.2)] transition-all"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-yellow-500/30
                    hover:shadow-[0_2px_8px_rgba(246,130,59,0.1)] transition"
                        >
                            <h3 className="text-xl font-bold mb-2">Sunscreen Alarm</h3>
                            <p className="text-gray-400 mb-4">
                                Prototyped a device that sets a timer based on the detected UV levels
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["STM32CubeIDE", "C"].map((skill, key) => (
                                    <span className="bg-orange-500/10 text-yellow-400 py-1 px-3 rounded-full text-sm hover:bg-yellow-400/20
                            hover:shadow-[0_2px_8px_rgba(246,130,59,0.2)] transition-all"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};