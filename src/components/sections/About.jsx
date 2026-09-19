import { RevealOnScroll } from '../RevealOnScroll';
import face from '../../assets/face.png';
import coop1 from '../../assets/W24.png';
import coop2 from '../../assets/F24.png';
import coop3 from '../../assets/S25.png';
import coop4 from '../../assets/W26.png';

const skills = {
  "Design": ["Altium Designer", "KiCAD", "Keysight ADS", "QUCS", "SPICE", "AutoCAD"],
  "Embedded": ["FPGA", "STM32", "VHDL", "PCB Design"],
  "Equipment": ["Oscilloscope", "Multimeter", "Network Analyzer", "Signal Generator"],
  "Programming": ["C", "C++", "Python", "Java", "MATLAB/Octave"],
  "Fullstack": ["JavaScript", "TypeScript", "React", "Next.js", "Vite", "Express", "HTML/CSS"],
  "Data Science & ML": ["SQL", "pandas", "NumPy"],
  "Tools": ["GitHub", "GitLab", "CI/CD Pipelines", "YAML", "AWS", "Jira", "MS Office"],
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
                            className="flex justify-center mb-16"
                        >
                            <img
                                src={face}
                                alt="LinkedIn page"
                                className="h-50 w-50 rounded-full object-cover transition-all hover:shadow-[0_8px_24px_rgba(246,130,59,0.7)]"
                            />
                        </a>

                        <p className="text-gray-300 mb-6">
                            I’m 20 and still don’t have a dream job.
                        </p>
                        <p className="text-gray-300 mb-6">
                            What I do have is the willingness to explore until the answer becomes obvious. I’ve worked across embedded systems, building automation, and full-stack development. I design, break, and fix, operating at the intersection of theory and reality.
                        </p>
                        <p className="text-gray-300 mb-6">
                            Outside engineering, I run multiple YouTube channels, where I apply technical and creative skills in video editing, SEO, and analytics. Growing an audience taught me how systems behave at scale, how users think, and how to iterate when something doesn’t work.
                        </p>
                        <p className="text-gray-300 mb-6">
                            I don’t claim to have everything mapped out. But the more I build, the clearer it gets. There’s no better time to experiment than now.
                        </p>
                        <p className="text-gray-300 mb-6">
                            2026 is my year.
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
                                Coursework: RF and Microwave Circuits, Digital Signal Processing, Analog Control Systems
                            </li>
                            <li>
                                100% on Advanced Calculus 2
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
                            {/* Fall 2026 */}
                            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                                <div className="md:w-3/4 space-y-2">
                                    <h4><strong>RF & Hardware Research Assistant</strong> - University of Waterloo (09/2026 - 12/2026)</h4>
                                    <li>Developing a digital twin of a BeagleBone Black cape board in Keysight ADS and QUCS to model and simulate board-level circuit and RF behavior</li>
                                </div>
                                <a href="https://uwaterloo.ca/electrical-computer-engineering/profile/sfischme" target="_blank" rel="noopener noreferrer" className="md:w-1/4 block">
                                    <img src={coop3} alt="Sebastian Fischmeister - University of Waterloo" className="w-full rounded-xl shadow-md object-cover max-h-40 transition-all hover:shadow-[0_8px_24px_rgba(246,130,59,0.7)]" />
                                </a>
                            </div>

                            {/* Spring 2026 */}
                            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                                <div className="md:w-3/4 space-y-2">
                                    <h4><strong>Robotics & Computer Vision Research Assistant</strong> - University of Waterloo (05/2026 - 08/2026)</h4>
                                    <li>Engineered prompt-based object recognition pipelines for a QT Robot using ROS, Python, and the Gemini Robotics-ER 1.6 API, refining prompts to improve spatial reasoning accuracy by 80% across 10+ object categories</li>
                                    <li>Designed and executed a structured test suite on Ubuntu to benchmark recognition under partial occlusion and varied positioning, running 10 trials per object</li>
                                </div>
                                <a href="https://uwaterloo.ca/social-intelligent-robotics-research-lab/" target="_blank" rel="noopener noreferrer" className="md:w-1/4 block">
                                    <img src={coop3} alt="University of Waterloo Social and Intelligent Robotics Research Lab" className="w-full rounded-xl shadow-md object-cover max-h-40 transition-all hover:shadow-[0_8px_24px_rgba(246,130,59,0.7)]" />
                                </a>
                            </div>

                            {/* Winter 2026 */}
                            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                                <div className="md:w-3/4 space-y-2">
                                    <h4><strong>QA Automation Engineer</strong> - Mircom Group of Companies (01/2026 - 04/2026)</h4>
                                    <li>Built GitLab CI/CD pipelines with Cygwin and YAML to automate FPGA firmware builds for fire panels, reducing build errors by 90%</li>
                                    <li>Developed Python conversion tools (DOCX→XML, CSV→DOCX, Markdown→PDF) used by 50+ engineers, automating manual documentation formatting</li>
                                    <li>Engineered 100+ automated fire alarm panel test cases using Python and the TestRail API, replacing manual validation and increasing testing speed by 20x</li>
                                </div>
                                <a href="https://mircom.com/" target="_blank" rel="noopener noreferrer" className="md:w-1/4 block">
                                    <img src={coop4} alt="Mircom Group of Companies" className="w-full rounded-xl shadow-md object-cover max-h-40 transition-all hover:shadow-[0_8px_24px_rgba(246,130,59,0.7)]" />
                                </a>
                            </div>

                            {/* Spring 2025 */}
                            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                                <div className="md:w-3/4 space-y-2">
                                    <h4><strong>Graphics Designer</strong> - University of Waterloo (05/2025 - 08/2025)</h4>
                                    <li>Designed operator graphics for 25 campus buildings using Tridium Niagara 4 and JavaScript, applying UI/UX principles to improve usability and situational awareness for HVAC operators</li>
                                    <li>Authored onboarding documentation and video tutorials covering air handling units, chillers, and heat exchangers, reducing co-op training time by 50%</li>
                                </div>
                                <a href="https://uwaterloo.ca/plant-operations/" target="_blank" rel="noopener noreferrer" className="md:w-1/4 block">
                                    <img src={coop3} alt="University of Waterloo Plant Operations" className="w-full rounded-xl shadow-md object-cover max-h-40 transition-all hover:shadow-[0_8px_24px_rgba(246,130,59,0.7)]" />
                                </a>
                            </div>

                            {/* Fall 2024 */}
                            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                                <div className="md:w-3/4 space-y-2">
                                    <h4><strong>Fullstack Developer</strong> - Wiz Robotics (09/2024 - 12/2024)</h4>
                                    <li>Developed the certified Technology and Skilled Trades curriculum using React, Express, and Axios, instructing 30+ students per term</li>
                                    <li>Designed an AI prompting curriculum for 100+ GTA teachers to promote ethical AI use in classrooms</li>
                                    <li>Increased click-through rate by 30\% by revamping partner websites for SEO using WordPress and Elementor</li>
                                </div>
                                <a href="https://wizrobotics.com/" target="_blank" rel="noopener noreferrer" className="md:w-1/4 block">
                                    <img src={coop2} alt="Wiz Robotics" className="w-full rounded-xl shadow-md object-cover max-h-40 transition-all hover:shadow-[0_8px_24px_rgba(246,130,59,0.7)]" />
                                </a>
                            </div>

                            {/* Winter 2024 */}
                            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                                <div className="md:w-3/4 space-y-2">
                                    <h4><strong>Web Developer</strong> - Upgraded Technologies Inc. (01/2024 - 04/2024)</h4>
                                    <li>Audited and corrected SEO errors, earning first-page Google Search rankings for the company website</li>
                                    <li>Built responsive pages in HTML/CSS and Webflow, ensuring consistent, mobile-friendly design across the site</li>
                                </div>
                                <a href="https://www.getupgraded.ca/" target="_blank" rel="noopener noreferrer" className="md:w-1/4 block">
                                    <img src={coop1} alt="Upgraded Technologies Inc." className="w-full rounded-xl shadow-md object-cover max-h-40 transition-all hover:shadow-[0_8px_24px_rgba(246,130,59,0.7)]" />
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </RevealOnScroll>
        </section>
    );
};