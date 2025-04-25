import { Check, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const MembershipPlans = () => {
    const plans = [
        {
            name: "Basic Plan",
            price: "$149",
            period: "monthly",
            description: "Essential benefits for those beginning their luxury journey",
            featured: false,
            benefits: [
                "Exclusive access to select events",
                "Standard concierge service",
                "Quarterly digital magazine",
                "Basic rewards program"
            ],
            cta: "Select Plan"
        },
        {
            name: "Elite Plan",
            price: "$399",
            period: "monthly",
            description: "Enhanced benefits for the discerning individual",
            featured: true,
            benefits: [
                "Priority access to premium events",
                "24/7 dedicated concierge service",
                "Monthly digital magazine + quarterly print edition",
                "Enhanced rewards program with 2x points",
                "Complimentary partner privileges"
            ],
            cta: "Select Plan"
        },
        {
            name: "Premium Plan",
            price: "$899",
            period: "monthly",
            description: "Comprehensive benefits for luxury connoisseurs",
            featured: false,
            benefits: [
                "VIP access to all events and experiences",
                "Personal lifestyle manager",
                "All publications with exclusive content",
                "Premium rewards program with 3x points",
                "Exclusive partner privileges",
                "Annual luxury retreat"
            ],
            cta: "Select Plan"
        },
        {
            name: "VIP Legacy Plan",
            price: "$2,499",
            period: "monthly",
            description: "The ultimate in exclusivity and personalized service",
            featured: false,
            benefits: [
                "Ultra-exclusive access to invitation-only events",
                "Dedicated team of lifestyle specialists",
                "Custom content and personalized publications",
                "Unlimited rewards program with 5x points",
                "Bespoke partner experiences",
                "Bi-annual luxury retreats",
                "Legacy member recognition"
            ],
            cta: "Apply Now"
        }
    ];

    return (
        <div className="w-full bg-black py-24 px-10 md:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-light text-white mb-6">
                        Membership <span className="text-amber-400">Plans Overview</span>
                    </h2>
                    <p className="text-gray-300 max-w-3xl mx-auto text-lg">
                        We offer several membership plans to suit different needs. Whether you're looking for
                        basic benefits or full VIP access, we have a plan for you.
                    </p>
                    <div className="h-px w-48 bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-50 mx-auto mt-10"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
                    {plans.map((plan, index) => (
                        <Card key={index} className={`bg-gray-900 border-gray-800 overflow-hidden transition-all duration-300 hover:border-amber-500 h-full flex flex-col ${plan.featured ? 'border-amber-500 relative' : ''}`}>
                            {plan.featured && (
                                <div className="absolute top-0 inset-x-0">
                                    <Badge className="bg-amber-500 text-black rounded-none rounded-b-sm font-light text-xs px-3 py-1 mx-auto block w-fit">
                                        Most Popular
                                    </Badge>
                                </div>
                            )}
                            <CardHeader className="py-8 px-6 bg-gradient-to-b from-gray-800 to-gray-900 border-b border-gray-800">
                                <h3 className="text-xl font-light text-white text-center">{plan.name}</h3>
                                <div className="text-center mt-4">
                                    <span className="text-3xl font-light text-amber-400">{plan.price}</span>
                                    <span className="text-gray-400 text-sm ml-1">/{plan.period}</span>
                                </div>
                                <p className="text-gray-400 text-sm text-center mt-3">
                                    {plan.description}
                                </p>
                            </CardHeader>
                            <CardContent className="flex-grow py-6 px-6">
                                <ul className="space-y-4">
                                    {plan.benefits.map((benefit, i) => (
                                        <li key={i} className="flex items-start">
                                            <Check className="w-5 h-5 text-amber-400 flex-shrink-0 mr-3 mt-0.5" />
                                            <span className="text-gray-300 text-sm">{benefit}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                            <CardFooter className="p-6 pt-0">
                                <Button className={`w-full ${plan.featured ? 'bg-amber-500 hover:bg-amber-600 text-black' : 'bg-gray-800 hover:bg-gray-700 text-white border border-gray-700'} rounded-sm font-light flex items-center justify-center group transition-all duration-200`}>
                                    <span>{plan.cta}</span>
                                    <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" />
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <p className="text-gray-400 mb-6">
                        Looking for something more tailored to your specific needs?
                    </p>
                    <Button className="bg-transparent border border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-black transition-all duration-300 rounded-none px-8 py-6 text-sm font-light">
                        Contact Us for Custom Plans
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default MembershipPlans;