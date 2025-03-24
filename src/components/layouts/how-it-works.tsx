import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Check, CreditCard, Gift, UserPlus } from 'lucide-react';

const HowItWorks = () => {
    const steps = [
        {
            number: 1,
            title: "Register online & offline in minutes",
            description: "Join our exclusive community with a simple registration process.",
            icon: <UserPlus className="h-8 w-8 text-yellow-600" />
        },
        {
            number: 2,
            title: "Receive your membership card & kit",
            description: "Enjoy your beautifully crafted membership card and exclusive corporate kit.",
            icon: <CreditCard className="h-8 w-8 text-yellow-600" />
        },
        {
            number: 3,
            title: "Access tailored offers & experiences",
            description: "Unlock premium services and unique experiences designed for you.",
            icon: <Gift className="h-8 w-8 text-yellow-600" />
        },
        {
            number: 4,
            title: "Join through our website or app",
            description: "Access your membership benefits anytime, anywhere.",
            icon: <Check className="h-8 w-8 text-yellow-600" />
        }
    ];

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <div className="py-16 px-4 bg-background text-foreground">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-light mb-4 text-gold">How Does Epic Circle Work?</h2>
                    <p className="text-lg text-gray-100 max-w-2xl mx-auto">
                        Joining Epic Circle is simple yet life-changing. It's an invitation to a world where you are treated as royalty.
                    </p>
                </div>

                <motion.div
                    className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {steps.map((step) => (
                        <motion.div key={step.number} variants={itemVariants}>
                            <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-0 shadow bg-gray-900">
                                <CardContent className="pt-6 pb-6 flex flex-col items-center text-center">
                                    <div className="mb-6 relative">
                                        <div className="w-16 h-16 rounded-full bg-yellow-100 flex items-center justify-center">
                                            {step.icon}
                                        </div>
                                        <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-yellow-600 text-white flex items-center justify-center font-semibold">
                                            {step.number}
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-semibold mb-2 text-gray-200">{step.title}</h3>
                                    <p className="text-neutral-200">{step.description}</p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>

                <div className="mt-16 text-center">
                    <button className="px-8 py-3 bg-yellow-600 text-white rounded-full font-semibold shadow-lg hover:bg-yellow-700 transition-colors duration-300">
                        Join Epic Circle Today
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HowItWorks;