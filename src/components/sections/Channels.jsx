import { RevealOnScroll } from '../RevealOnScroll';
import ACupOfRamen from '../../assets/ACupOfRamen.png';
import nihilith from '../../assets/nihilith.png';

export const Channels = () => {
    return (
        <section
            id="channels"
            className="min-h-screen flex items-center justify-center py-20"
        >
            <RevealOnScroll>
                <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-orange-700 to-yellow-400 bg-clip-text text-transparent text-center">
                        YouTube Channels
                    </h2>

                    {/* Main Grid */}
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

                            <div className="rounded-xl overflow-hidden mb-4">
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

                            <div className="rounded-xl overflow-hidden mb-4">
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

                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-yellow-500/30
    hover:shadow-[0_2px_8px_rgba(246,130,59,0.1)] transition text-center">

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
                                    className="h-30 w-30 rounded-full object-cover transition-all hover:shadow-[0_8px_24px_rgba(246,130,59,0.7)]"
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
                                        className="bg-orange-500/10 text-yellow-400 py-1 px-3 rounded-full text-sm hover:bg-yellow-400/20
                hover:shadow-[0_2px_8px_rgba(246,130,59,0.2)] transition-all"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>

                            <div className="rounded-xl overflow-hidden mb-4">
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

                            <div className="rounded-xl overflow-hidden mb-4">
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
                </div>
            </RevealOnScroll>
        </section>
    );
};