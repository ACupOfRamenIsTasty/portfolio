import { RevealOnScroll } from '../RevealOnScroll';
import ACupOfRamen from '../../assets/ACupOfRamen.png';
import nihilith from '../../assets/nihilith.png';
import nihiline from '../../assets/nihiline.png';
import tictactoe from '../../assets/tictactoe.png';
import reservoir from '../../assets/reservoir.png';
import worldbank from '../../assets/worldbank.png';

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
    hover:shadow-[0_2px_8px_rgba(246,130,59,0.1)] transition text-center">

                            <h3 className="text-3xl font-bold mb-4">
                                ACupOfRamen
                            </h3>

                            <a
                                href="https://youtube.com/@ACupOfRamenIsTasty/?sub_confirmation=1"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex justify-center mb-4"
                            >
                                <img
                                    src={ACupOfRamen}
                                    alt="ACupOfRamen's YouTube Channel"
                                    className="h-30 w-30 rounded-full object-cover transition-all hover:shadow-[0_8px_24px_rgba(246,130,59,0.7)]"
                                />
                            </a>

                            <h4 className="text-xl mb-2">
                                01/2018 - 06/2025
                            </h4>

                            <p className="text-gray-400 mb-4">
                                Creatively edited 700+ former Minecraft and rhythm game videos to become a self-starting YouTube Partner
                            </p>

                            <div className="flex flex-wrap justify-center gap-2 mb-4">
                                {["Final Cut Pro X", "YouTube Studio", "SEO", "Communication"].map((skill, key) => (
                                    <span
                                        key={key}
                                        className="bg-orange-500/10 text-yellow-400 py-1 px-3 rounded-full text-sm hover:bg-yellow-400/20
                hover:shadow-[0_2px_8px_rgba(246,130,59,0.2)] transition-all"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>

                            <div className="rounded-xl overflow-hidden mb-4 shadow-[0_2px_8px_rgba(246,130,59,0.2)]">
                                <iframe
                                    width="560"
                                    height="315"
                                    src="https://www.youtube.com/embed/iTmeMrhNlDM"
                                    title="50 things Phigros players hate..."
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="w-full h-full"
                                ></iframe>
                            </div>

                            <div className="rounded-xl overflow-hidden mb-4 shadow-[0_2px_8px_rgba(246,130,59,0.2)]">
                                <iframe
                                    width="560"
                                    height="315"
                                    src="https://www.youtube.com/embed/iYcDJ85lSA0"
                                    title="Dog Hunting [4K]"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="w-full h-full"
                                ></iframe>
                            </div>

                        </div>

                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-pink-500/30
    hover:shadow-[0_2px_8px_rgba(255,0,255,0.1)] transition text-center">

                            <h3 className="text-3xl font-bold mb-4">
                                nihilith
                            </h3>

                            <a
                                href="https://youtube.com/@nihilRG/?sub_confirmation=1"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex justify-center mb-4"
                            >
                                <img
                                    src={nihilith}
                                    alt="nihilith's YouTube Channel"
                                    className="h-30 w-30 rounded-full object-cover transition-all hover:shadow-[0_8px_24px_rgba(0,255,255,0.7)]"
                                />
                            </a>

                            <h4 className="text-xl mb-2">
                                06/2025 - Present
                            </h4>

                            <p className="text-gray-400 mb-4">
                                Scaled a niche rhythm game channel to gather 1000 subscribers and 100,000 views within 2 months
                            </p>

                            <div className="flex flex-wrap justify-center gap-2 mb-4">
                                {["Final Cut Pro X", "YouTube Studio", "SEO", "Canva", "Prompt Engineering"].map((skill, key) => (
                                    <span
                                        key={key}
                                        className="bg-pink-500/10 text-pink-400 py-1 px-3 rounded-full text-sm hover:text-cyan-200 hover:bg-cyan-400/20
                hover:shadow-[0_2px_8px_rgba(0,255,255,0.2)] transition-all"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>

                            <div className="rounded-xl overflow-hidden mb-4 shadow-[0_2px_8px_rgba(255,0,255,0.2)]">
                                <iframe
                                    width="560"
                                    height="315"
                                    src="https://www.youtube.com/embed/zM8U4r2_4K4"
                                    title="The most ILLEGAL Phigros play you'll ever see."
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="w-full h-full"
                                ></iframe>
                            </div>

                            <div className="rounded-xl overflow-hidden mb-4 shadow-[0_2px_8px_rgba(255,0,255,0.2)]">
                                <iframe
                                    width="560"
                                    height="315"
                                    src="https://youtube.com/embed/-3JoXT4RHsk"
                                    title="Can I master Paradigm: Reboot in 10 HOURS?!"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="w-full h-full"
                                ></iframe>
                            </div>

                        </div>

                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8">

                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-yellow-500/30
                    hover:shadow-[0_2px_8px_rgba(246,130,59,0.1)] transition"
                        >
                            <h3 className="text-xl font-bold mb-2">
                                AI Rhythm Game Prototype
                            </h3>
                            <h4 className="text-lg mb-2">
                                09/2025 - Present
                            </h4>
                            <p className="text-gray-400 mb-4">
                                Developed a browser-based rhythm game to implement responsive hit detection, note timing, and calibration mechanics
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["React", "JavaScript", "Tailwind CSS", "UI/UX", "Prompt Engineering"].map((skill, key) => (
                                    <span className="bg-orange-500/10 text-yellow-400 py-1 px-3 rounded-full text-sm hover:bg-yellow-400/20
                            hover:shadow-[0_2px_8px_rgba(246,130,59,0.2)] transition-all"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                            <img
                                src={nihiline}
                                alt="nihiline"
                                className="rounded-xl overflow-hidden mb-4"
                            />
                        </div>

                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-yellow-500/30
                    hover:shadow-[0_2px_8px_rgba(246,130,59,0.1)] transition"
                        >
                            <h3 className="text-xl font-bold mb-2">
                                Embedded Water Reservoir Prototype
                            </h3>
                            <h4 className="text-lg mb-2">
                                09/2025 - Present
                            </h4>
                            <p className="text-gray-400 mb-4">
                                Designed and implemented an embedded prototype, integrating PCBs, sensors, and GPIO through iterative hardware/software co-design
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["STM32CubeIDE", "C", "PCBs", "Soldering", "Oscilloscope", "Power Supply"].map((skill, key) => (
                                    <span className="bg-orange-500/10 text-yellow-400 py-1 px-3 rounded-full text-sm hover:bg-yellow-400/20
                            hover:shadow-[0_2px_8px_rgba(246,130,59,0.2)] transition-all"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                            <img
                                src={reservoir}
                                alt="Embedded Water Reservoir Prototype"
                                className="rounded-xl overflow-hidden mb-4"
                            />
                        </div>

                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-yellow-500/30
                    hover:shadow-[0_2px_8px_rgba(246,130,59,0.1)] transition"
                        >
                            <h3 className="text-xl font-bold mb-2">
                                TIC TAC TOE -EX+REME-
                            </h3>
                            <h4 className="text-lg mb-2">
                                07/2025 - 09/2025
                            </h4>
                            <p className="text-gray-400 mb-4">
                                Added a spin to the classic Tic-tac-toe in a browser-based game introducing wildcard mechanics
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["React", "JavaScript", "Tailwind CSS", "UI/UX"].map((skill, key) => (
                                    <span className="bg-orange-500/10 text-yellow-400 py-1 px-3 rounded-full text-sm hover:bg-yellow-400/20
                            hover:shadow-[0_2px_8px_rgba(246,130,59,0.2)] transition-all"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                            <img
                                src={tictactoe}
                                alt="TIC TAC TOE -EX+REME-"
                                className="rounded-xl overflow-hidden mb-4"
                            />
                        </div>
                        
                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-yellow-500/30
                    hover:shadow-[0_2px_8px_rgba(246,130,59,0.1)] transition"
                        >
                            <h3 className="text-xl font-bold mb-2">
                                World Bank Software Library
                            </h3>
                            <h4 className="text-lg mb-2">
                                01/2025 - 04/2025
                            </h4>
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
                            <img
                                src={worldbank}
                                alt="Data Structures and Algorithms"
                                className="rounded-xl overflow-hidden mb-4 border border-white"
                            />
                        </div>

                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-yellow-500/30
                    hover:shadow-[0_2px_8px_rgba(246,130,59,0.1)] transition"
                        >
                            <h3 className="text-xl font-bold mb-2">
                                Prompt Engineering Curriculum
                            </h3>
                            <h4 className="text-lg mb-2">
                                10/2024 - 11/2024
                            </h4>
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
                                Traffic Light Controller
                            </h3>
                            <h4 className="text-lg mb-2">
                                06/2024 - 07/2024
                            </h4>
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
                            <h3 className="text-xl font-bold mb-2">
                                Digital Thermostat
                            </h3>
                            <h4 className="text-lg mb-2">
                                06/2024 - 07/2024
                            </h4>
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
                            <h3 className="text-xl font-bold mb-2">
                                C++ Minesweeper
                            </h3>
                            <h4 className="text-lg mb-2">
                                10/2023 - 11/2023
                            </h4>
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
                            <h3 className="text-xl font-bold mb-2">
                                Sunscreen Alarm
                            </h3>
                            <h4 className="text-lg mb-2">
                                09/2023 - 11/2023
                            </h4>
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