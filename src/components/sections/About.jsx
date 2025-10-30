import { RevealOnScroll } from '../RevealOnScroll';
import face from '../../assets/face.png';
import coop1 from '../../assets/W24.png';
import coop2 from '../../assets/F24.png';
import coop3 from '../../assets/S25.png';

const skills = {
    "Design": ["AutoCAD", "MicroStation", "Tinkercad", "Tridium Niagara"],
    "Coding": ["Java", "Python", "C", "C++", "HTML/CSS", "Javascript", "Matlab"],
    "Fullstack": ["React", "Vite", "Tailwind CSS", "Node.js", "Express", "Axios", "WordPress"],
    "Data Science": ["Machine Learning", "SQL", "pandas"],
    "Content": ["Final Cut Pro X", "iMovie", "Adobe Creative Suite", "Canva"],
    "Circuits": ["Arduino", "Breadboard", "FPGAs", "PCBs", "STM32", "VHDL"],
    "Equipment": ["Soldering", "Oscilloscope", "Power supply", "Multimeter", "Function Generator"],
    "Tools": ["MS Office", "Excel", "Git", "Github", "AWS", "Jira", "npm"],
};

const SkillsDisplay = () => {
    return (
        <>
            {
                Object.entries(skills).map(([category, skillList]) => (
                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">{category}</h3>
                        <div className="flex flex-wrap gap-2">
                            {skillList.map((skill) => (
                                <span className="bg-orange-500/10 text-yellow-400 py-1 px-3 rounded-full text-sm hover:bg-yellow-400/20
                            hover:shadow-[0_2px_8px_rgba(246,130,59,0.2)] transition"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))
            }
        </>
    )
};


export const About = () => {
    return (
        <section
            id="about"
            className="min-h-screen flex items-center justify-center py-20"
        >
            <RevealOnScroll>
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-orange-700 to-yellow-400 bg-clip-text text-transparent text-center">
                        About Me
                    </h2>

                    <div className="glass rounded-xl p-8">
                        <a
                            href="https://www.linkedin.com/in/d75kim/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex justify-center mb-4"
                        >
                            <img
                                src={face}
                                alt="LinkedIn page"
                                className="h-50 w-50 rounded-full object-cover transition-all hover:shadow-[0_8px_24px_rgba(0,119,181,0.3)]"
                            />
                        </a>

                        <p className="text-gray-300 mb-6">
                            Hi! I'm Daniel, an ambitious Electrical Engineering undergraduate passionate about bridging hardware and software to create meaningful, real-world solutions. With experience spanning embedded systems, full-stack web development, and automation graphics, I enjoy transforming ideas into tangible systems that connect technology with people.
                        </p>
                        <p className="text-gray-300 mb-6">
                            Outside of engineering, I run multiple YouTube channels where I apply my skills in video editing, SEO, and storytelling to engage a growing audience. I’m always excited to learn, build, and contribute to projects that make an impact, whether it’s coding interactive games, prototyping new circuits, or exploring creative software tools.
                        </p>
                    </div>

                    <div className="glass rounded-xl p-8 border border-white/10 hover:-translate-y-1 hover:border-yellow-500/30
    hover:shadow-[0_2px_8px_rgba(246,130,59,0.1)] transition-all">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <SkillsDisplay />
                        </div>
                    </div>

                    <div className="glass rounded-xl p-8 border border-white/10 hover:-translate-y-1 hover:border-yellow-500/30 mt-8
    hover:shadow-[0_2px_8px_rgba(246,130,59,0.1)] transition-all">
                        <h3 className="text-xl font-bold mb-4">Education</h3>
                        <ul className="list-disc list-inside text-gray-300 space-y-2">
                            <div className="space-y-2">
                                <strong> BASc in Electrical Engineering (Co-op) </strong> - University of Waterloo (09/2023 - 04/2028)
                            </div>
                            <li>
                                GPA: 3.8/4.0
                            </li>
                            <li>
                                Coursework: Signals, Power Systems, Semiconductor Physics, Data Structures and Algorithms, Advanced Calculus 2
                            </li>
                            <div className="space-y-2">
                                <strong> Ontario Secondary School Diploma </strong> - St. Theresa of Lisieux Catholic High School (09/2019 - 06/2023)
                            </div>
                            <li>
                                GPA: 95.00%
                            </li>
                        </ul>
                    </div>

                    <div className="glass rounded-xl p-8 border border-white/10 hover:-translate-y-1 hover:border-yellow-500/30 mt-8
    hover:shadow-[0_2px_8px_rgba(246,130,59,0.1)] transition-all">
                        <h3 className="text-xl font-bold mb-4">Work Experience</h3>

                        <div className="space-y-8 text-gray-300">
                            {/* Spring 2025 */}
                            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                                <div className="md:w-3/4 space-y-2">
                                    <h4><strong>Graphics Designer</strong> - University of Waterloo (05/2025 - 08/2025)</h4>
                                    <li>Designed graphics for 25 campus buildings with <u>Tridium Niagara 4, Javascript, and UI/UX</u> to improve ease of use and situational awareness for HVAC operators</li>
                                    <li>Authored onboarding documentation and video tutorials for future co-op students by applying knowledge of <u>air handling units, chillers, and heat exchangers</u>, reducing training time by 50%</li>
                                </div>
                                <a href="https://uwaterloo.ca/plant-operations/" target="_blank" rel="noopener noreferrer" className="md:w-1/4 block">
                                    <img src={coop3} alt="University of Waterloo Plant Operations" className="w-full rounded-xl shadow-md object-cover max-h-40" />
                                </a>
                            </div>

                            {/* Fall 2024 */}
                            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                                <div className="md:w-3/4 space-y-2">
                                    <h4><strong>Fullstack Developer</strong> - Wiz Robotics (09/2024 - 12/2024)</h4>
                                    <li>Utilized <u>React, Node.js, Express, and Axios</u> to develop a certified curriculum for 30 students per term</li>
                                    <li>Designed an <u>AI prompting curriculum</u> for 100+ teachers in the GTA, promoting AI use in classrooms</li>
                                    <li>Boosted SEO performance by revamping websites with <u>Wordpress and Elementor</u>, increasing click-through rate by 30%</li>
                                    <li>Taught Arduino wiring and code concepts to 50+ students using <u>Arduino IDE</u></li>
                                </div>
                                <a href="https://wizrobotics.com/" target="_blank" rel="noopener noreferrer" className="md:w-1/4 block">
                                    <img src={coop2} alt="Wiz Robotics" className="w-full rounded-xl shadow-md object-cover max-h-40" />
                                </a>
                            </div>

                            {/* Winter 2024 */}
                            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                                <div className="md:w-3/4 space-y-2">
                                    <h4><strong>Web Developer</strong> - Upgraded Technologies Inc. (01/2024 - 04/2024)</h4>
                                    <li>Identified SEO errors, enabling the site to rank on Google's first page</li>
                                    <li>Utilized <u>HTML/CSS</u> and Webflow to ensure responsive and visually consistent design</li>
                                    <li>Maintained clear daily communication to achieve project goals</li>
                                </div>
                                <a href="https://www.getupgraded.ca/" target="_blank" rel="noopener noreferrer" className="md:w-1/4 block">
                                    <img src={coop1} alt="Upgraded Technologies Inc." className="w-full rounded-xl shadow-md object-cover max-h-40" />
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </RevealOnScroll>
        </section>
    );
};