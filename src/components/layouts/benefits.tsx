import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Star, Gift, Ticket } from "lucide-react";

const benefits = [
    {
        title: "VIP Events & Experiences",
        icon: <Sparkles className="w-8 h-8 text-yellow-400" />,
        description:
            "Members of Epic Circle gain access to a world of private, invite-only events that money can’t buy.",
        details: [
            "Private gala dinners",
            "Luxury product launches",
            "Exclusive networking events"
        ],
    },
    {
        title: "Membership Card Features",
        icon: <Star className="w-8 h-8 text-yellow-400" />,
        description:
            "The Epic Circle Membership Card is your passport to a world of privilege and exclusivity.",
        details: [
            "Ticketing discounts",
            "Study abroad discounts",
            "Holiday package discounts",
            "Hotel discounts",
            "Car service discounts"
        ],
    },
    {
        title: "Exclusive Offers",
        icon: <Ticket className="w-8 h-8 text-yellow-400" />,
        description:
            "Receive 10 exclusive coupons, offering unique benefits designed to elevate your lifestyle.",
        details: [
            "Luxury gift vouchers",
            "VIP invitations",
            "Priority access",
            "Exclusive discounts"
        ],
    },
    {
        title: "Premium Rewards",
        icon: <Gift className="w-8 h-8 text-yellow-400" />,
        description:
            "As an Epic Circle member, you gain access to curated rewards that redefine luxury.",
        details: [
            "Luxury gifts",
            "Exclusive discounts",
            "Experiential rewards"
        ],
    },
];

export default function Benefits() {
    return (
        <section className="bg-black text-white py-16 px-6 md:px-12 lg:px-24">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-5xl font-light text-gold mb-12">Membership Benefits</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                        >
                            <Card className="bg-gradient-to-br from-gray-900 via-gray-800 to-black shadow-yellow-500/20 shadow-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all h-full">
                                <CardContent className="flex flex-col justify-between h-full">
                                    <div>
                                        <div className="flex flex-col justify-center items-center mb-6 w-full">
                                            <div className={"items-center justify-center"}>{benefit.icon}</div>
                                            <h3 className="text-3xl font-light text-gold">{benefit.title}</h3>
                                        </div>
                                        <p className="text-gray-300 mb-6 text-lg">{benefit.description}</p>
                                        <ul className="">
                                            {benefit.details.map((item, index) => (
                                                <li key={index}>{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
