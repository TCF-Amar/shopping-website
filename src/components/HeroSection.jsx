import { Link } from "react-router-dom";
import heroBanner from "../assets/Hero_banner_shopping_lifestyle_65ea43f4.png";

const HeroSection = () => {
    return (
        <section className="relative w-full overflow-hidden bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 text-white">
            {/* Background image overlay */}
            <div className="absolute inset-0">
                <img
                    src={heroBanner}
                    alt="Hero Banner"
                    className="w-full h-full object-cover opacity-40"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-transparent"></div>
            </div>

            {/* Content */}
            <div className="relative container mx-auto px-6 md:px-10 py-20 md:py-32 flex flex-col md:flex-row items-center justify-between gap-10">
                {/* Left Text Section */}
                <div className="max-w-2xl text-center md:text-left animate-fadeIn">
                    <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 tracking-tight drop-shadow-lg">
                        Upgrade Your Style with{" "}
                        <span className="text-yellow-400">Next-Gen Trends</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-100 mb-8 md:mb-10 leading-relaxed">
                        Discover a world of modern fashion, gadgets, and lifestyle essentials —
                        crafted to match your vibe.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start flex-nowrap">
                        <Link
                            to="/products"
                            className="px-6 py-3 rounded-xl text-lg font-semibold bg-yellow-400 text-gray-900 hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105 shadow-lg text-nowrap"
                        >
                            🛍️ Shop Now
                        </Link>
                        <Link
                            to="/products?category=Electronics"
                            className="px-6 py-3 rounded-xl text-lg font-semibold border-2 border-white text-white hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105 text-nowrap"
                        >
                            ⚡ Explore Tech
                        </Link>
                    </div>
                </div>

                {/* Right Decorative Image (optional, hidden on mobile) */}
                <div className="hidden md:block max-w-sm animate-slideIn">
                    <img
                        src={heroBanner}
                        alt="Hero Visual"
                        className="rounded-2xl shadow-2xl w-full object-cover transform hover:scale-105 transition-transform duration-700"
                    />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
