import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { ArrowRightIcon, ShieldCheckIcon } from "lucide-react";

const Hero: React.FC = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
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

    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={containerVariants}
            className="relative min-h-screen flex items-center overflow-hidden"
        >
            {/* Sophisticated Gradient Background */}
            <div className="inset-0 bg-gradient-to-br
        from-neutral-900
        via-neutral-800/90
        to-black
        background-animate opacity-90"
            >
                <div className="inset-0 bg-gradient-to-r
          from-amber-500/10
          via-gray-500/10
          to-neutral-500/10
          opacity-50 blur-3xl"
                ></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        variants={itemVariants}
                        className="space-y-6"
                    >
                        <motion.div
                            variants={itemVariants}
                            className="inline-flex items-center gap-2
                bg-neutral-800/50 px-4 py-2 rounded-full
                border border-neutral-700/50"
                        >
                            <ShieldCheckIcon className="w-5 h-5 text-amber-400" />
                            <span className="text-neutral-300 text-sm">
                Verified Luxury Membership
              </span>
                        </motion.div>

                        <motion.h1
                            variants={itemVariants}
                            className="text-5xl font-light tracking-tight
                         bg-clip-text text-transparent
                         bg-gradient-to-r from-white via-neutral-200 to-neutral-500"
                        >
                            Redefining{" "}
                            <span className="bg-clip-text text-transparent
                               bg-gradient-to-r from-amber-400 to-amber-600">
                Exclusive Loyalty
              </span>
                        </motion.h1>

                        <motion.p
                            variants={itemVariants}
                            className="text-lg text-neutral-300 leading-relaxed"
                        >
                            Epic Circle is more than a membership—it's a passport to
                            extraordinary experiences. Meticulously curated benefits,
                            cutting-edge personalization, and access to a world
                            reserved for the most discerning individuals.
                        </motion.p>

                        <motion.div variants={itemVariants}>
                            <Button
                                size="lg"
                                className="bg-gradient-to-r from-amber-500 to-amber-600
                           text-black hover:from-amber-600 hover:to-amber-700
                           group flex items-center gap-2"
                            >
                                Explore Membership
                                <ArrowRightIcon
                                    className="group-hover:translate-x-1 transition-transform"
                                    size={20}
                                />
                            </Button>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        variants={itemVariants}
                        className="relative"
                    >
                        <motion.div
                            whileHover={{
                                scale: 1.05,
                                rotate: 1,
                                transition: {
                                    type: "spring",
                                    stiffness: 300
                                }
                            }}
                            className="rounded-3xl overflow-hidden
                          shadow-2xl border-4 border-neutral-700/30
                          bg-gradient-to-br from-neutral-800/50 to-neutral-900/50"
                        >
                            <img
                                src="/assets/images/exclusive-event.png"
                                alt="Luxury Lifestyle"
                                className="w-full h-full object-cover
                           brightness-90 contrast-125
                           opacity-90 hover:opacity-100
                           transition-all duration-300"
                            />
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
};

export default Hero;