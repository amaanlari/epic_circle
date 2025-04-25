import { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { HeadsetIcon, ClockIcon, ShieldCheckIcon, PhoneIcon } from 'lucide-react';

// Customer Support Component
const CustomerSupport = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px 0px" });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.5,
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5 }
        }
    };

    return (
        <section ref={ref} className="py-24 px-24  relative inset-0 bg-gradient-to-br from-neutral-900 via-neutral-800/90 to-neutral-500/10 background-animate opacity-90 overflow-hidden">
            {/* Background decoration elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-600 opacity-5 rounded-full -mr-48 -mt-48 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-600 opacity-5 rounded-full -ml-32 -mb-32 blur-2xl"></div>

            <div className="container mx-auto px-4">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.7 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600">
              Customer Support Like Never Before
            </span>
                    </h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Enjoy top-tier customer service with dedicated, 24/7 support tailored exclusively for our members.
                    </p>
                </motion.div>

                <div className="flex flex-col md:flex-row gap-8 mb-12">
                    <motion.div
                        className="md:w-1/2"
                        variants={containerVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                    >
                        <motion.div
                            variants={itemVariants}
                            className="h-full bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl p-8 relative overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-600 opacity-10 rounded-full -mr-16 -mt-16 transition-all duration-700 group-hover:scale-150 group-hover:opacity-20"></div>

                            <HeadsetIcon className="h-16 w-16 text-yellow-500 mb-6" />
                            <h3 className="text-2xl font-bold mb-4 text-white">Priority Support for Epic Circle</h3>
                            <p className="text-gray-300 mb-6 leading-relaxed">
                                Our team is available to handle your needs and requests, offering priority support tailored to your preferences. Whether it's a complex request or a simple inquiry, we ensure that your needs are handled with priority and care.
                            </p>
                            <p className="text-gray-300 mb-8 leading-relaxed">
                                As an Epic Circle member, you'll never have to worry about waiting in line for assistance. We understand that your time is valuable, which is why our customer support team is dedicated to providing you with seamless, personalized service whenever you need it.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="flex items-start space-x-3">
                                    <div className="bg-yellow-600 bg-opacity-20 rounded-lg p-2">
                                        <ClockIcon className="h-5 w-5 text-white" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-white">Fast-tracked Service</h4>
                                        <p className="text-gray-400 text-sm">For all inquiries and requests</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <div className="bg-yellow-600 bg-opacity-20 rounded-lg p-2">
                                        <PhoneIcon className="h-5 w-5 text-white" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-white">Exclusive Helplines</h4>
                                        <p className="text-gray-400 text-sm">Direct access to dedicated support</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        className="md:w-1/2"
                        variants={containerVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                    >
                        <motion.div
                            variants={itemVariants}
                            className="h-full relative"
                        >
                            <div className="absolute -inset-0.5 bg-gradient-to-br from-yellow-600 to-yellow-400 rounded-xl opacity-50 blur-sm"></div>
                            <div className="relative h-full bg-gray-900 rounded-xl overflow-hidden">
                                <div className="h-3/5 bg-gradient-to-br from-gray-800 to-gray-900">
                                    <img
                                        src="https://images.unsplash.com/photo-1556745753-b2904692b3cd?auto=format&fit=crop&q=80"
                                        alt="Customer support team"
                                        className="w-full h-full object-cover opacity-80 mix-blend-overlay"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center p-8">
                                        <div className="text-center">
                                            <ShieldCheckIcon className="h-20 w-20 text-yellow-500 mx-auto mb-4" />
                                            <h3 className="text-2xl font-bold text-white mb-2">24/7 Dedicated Support</h3>
                                            <p className="text-gray-300">Available whenever you need us</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="h-2/5 p-6">
                                    <div className="flex flex-col h-full justify-center items-center text-center">
                                        <h4 className="text-xl font-semibold text-white mb-3">Our Promise to You</h4>
                                        <p className="text-gray-300">
                                            We're committed to resolving your inquiries with speed, efficiency, and the utmost professionalism.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

// Travel & Leisure Component
const TravelLeisure = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px 0px" });
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const translateY = useTransform(scrollYProgress, [0, 1], [100, -100]);

    const travelExperiences = [
        {
            title: "Luxury Accommodations",
            description: "Stay in the world's finest five-star hotels and resorts, where every detail is tailored to your preferences. From private villas to exclusive suites, we ensure that your accommodations are as extraordinary as the destination itself.",
            image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&q=80",
            percentage: 75
        },
        {
            title: "Private Tours & Experiences",
            description: "Embark on curated, once-in-a-lifetime experiences with private tours of top attractions, cultural landmarks, and hidden gems around the globe. Whether it's a private yacht tour in the Mediterranean or a guided exploration of a city's best-kept secrets, your journey will be uniquely yours.",
            image: "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?auto=format&fit=crop&q=80",
            percentage: 70
        },
        {
            title: "VIP Airport Lounges & Fast-Track Services",
            description: "Skip the lines with priority check-in, security, and fast-track services to make your airport experience effortless. Enjoy access to luxurious airport lounges where you can relax in comfort before your flight with gourmet dining, premium beverages, and dedicated services.",
            image: "https://images.unsplash.com/photo-1535078035266-a0fa7d3b8f65?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            percentage: 92
        },
        {
            title: "Unforgettable Experiences for Every Occasion",
            description: "Whether traveling for business or leisure, every journey you take is an opportunity for exceptional experiences. We offer customized travel packages for corporate retreats, romantic getaways, family vacations, and solo adventures, each designed to match your unique needs and interests.",
            image: "https://images.unsplash.com/photo-1530541930197-ff16ac917b0e?auto=format&fit=crop&q=80",
            percentage: 65
        }
    ];

    return (
        <section ref={ref} className="py-24 px-24 bg-gradient-to-b from-black to-black/60 relative overflow-hidden">
            {/* Parallax background elements */}
            <motion.div
                className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-yellow-600 opacity-5 blur-3xl"
                style={{ y: translateY }}
            />

            <div className="container mx-auto px-4">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.7 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600">
              Travel & Leisure Opportunities
            </span>
                    </h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Experience a world of luxury and exclusivity with our premium travel services, curated specifically for Epic Circle members.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {travelExperiences.map((experience, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group"
                        >
                            <Card className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 group-hover:border-yellow-600 transition-all duration-500 overflow-hidden h-full">
                                <div className="relative h-64 overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10"></div>
                                    <motion.img
                                        src={experience.image}
                                        alt={experience.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: 0.5 }}
                                    />
                                    <div className="absolute bottom-0 left-0 right-0 z-20 p-6">
                                        <div className="flex items-center">
                                            <div className="w-16 h-16 rounded-full bg-yellow-600 flex items-center justify-center mr-4">
                                                <span className="text-xl font-bold text-black">{experience.percentage}%</span>
                                            </div>
                                            <div>
                                                <p className="text-gray-300 text-sm">Member Satisfaction</p>
                                                <div className="w-32 bg-gray-700 h-1 mt-1 rounded-full overflow-hidden">
                                                    <div
                                                        className="h-full bg-gradient-to-r from-yellow-600 to-yellow-400"
                                                        style={{ width: `${experience.percentage}%` }}
                                                    ></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <CardContent className="p-6">
                                    <h3 className="text-xl font-bold mb-3 text-white group-hover:text-yellow-400 transition-colors duration-300">
                                        {experience.title}
                                    </h3>
                                    <p className="text-gray-400">{experience.description}</p>

                                    <div className="mt-6 flex items-center">
                                        <div className="h-px flex-grow bg-gradient-to-r from-transparent to-gray-700"></div>
                                        <div className="h-px flex-grow bg-gradient-to-l from-transparent to-gray-700"></div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// Export both components
export { CustomerSupport, TravelLeisure };