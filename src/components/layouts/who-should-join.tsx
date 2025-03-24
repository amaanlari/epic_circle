import {motion} from "framer-motion";
import {CheckCircle} from "lucide-react";

const WhoShouldJoin = () => {
    const points = [
        "Crave exceptional, personalized experiences.",
        "Appreciate a lifestyle centered around luxury and exclusivity.",
        "Desire VIP treatment wherever they go."
    ];

    const containerVariants = {
        hidden: {opacity: 0},
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: {
            opacity: 0,
            x: -50
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                type: "spring",
                stiffness: 120,
                damping: 20
            }
        }
    };

    const itemVariantsReverse = {
        hidden: {
            opacity: 0,
            x: 100
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                type: "ascending",
                stiffness: 120,
                duration: 1,
                damping: 20
            }
        }
    };

    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, amount: 0.1}}
            variants={containerVariants}
            className="relative min-h-screen flex items-center overflow-hidden inset-0 bg-gradient-to-br from-neutral-900 via-neutral-800/90 to-neutral-500/10 background-animate opacity-90"
        >
            <div
                className="inset-0 bg-gradient-to-br from-neutral-900 via-neutral-800/90 to-black background-animate opacity-90"
            >
                <div className="inset-0 bg-gradient-to-r from-amber-500/10 via-gray-500/10 to-neutral-500/10 opacity-50 blur-3xl"
                ></div>
            </div>
            <div
                className="container mx-auto px-6 relative z-10 md:px-20 lg:px-40">
                <div className="max-w-5xl mx-auto text-center py-20">
                    <motion.h2
                        variants={itemVariants}
                        className="text-5xl font-light tracking-tight pb-4
                    bg-clip-text text-gold
                    bg-gradient-to-r from-white via-neutral-200 to-neutral-500"
                    >
                        Who Should Join Epic Circle?
                    </motion.h2>
                    <motion.p variants={itemVariants} className="text-xl text-secondary-foreground font-light mb-12">
                        Epic Circle is for those who seek exclusivity and prestige:
                    </motion.p>
                    <div className="space-y-6">
                        {points.map((point, index) => (
                            <motion.div
                                variants={itemVariantsReverse}
                                key={index}
                                className="flex items-center gap-6 p-6 rounded-xl bg-gray-900 bg-opacity-30 backdrop-blur-lg shadow-lg transition-transform transform hover:scale-105"
                            >
                                <CheckCircle className="text-gold w-8 h-8"/>
                                <span className="text-lg font-medium text-gray-200">{point}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default WhoShouldJoin;
