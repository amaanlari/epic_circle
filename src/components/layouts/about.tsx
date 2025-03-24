// import React from 'react';
//
// // Assuming you have a utils file for class merging
//
// type AboutProps = object
//
// const About: React.FC<AboutProps> = () => {
//     return (
//         <section id="about" className="py-20 bg-black text-white">
//             <div className="container mx-auto px-4">
//                 <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
//                     <div className="mt-10 lg:mt-0">
//                         {/* Image or Illustration Placeholder */}
//                         {/* Replace this with your actual image or illustration */}
//                         <div className="rounded-lg overflow-hidden shadow-lg">
//                             <img
//                                 src="https://plus.unsplash.com/premium_photo-1682096459254-781ef26d33f8?w=500&auto=format&fit=crop&q=60" // Replace with your image path
//                                 alt="Exclusive Lifestyle"
//                                 className="object-cover h-full w-full aspect-video"
//                             />
//                         </div>
//                     </div>
//                     <div className="lg:py-16">
//                         <h2 className="text-3xl font-bold text-gold sm:text-4xl lg:text-5xl">
//                             The Ultimate Exclusive Experience
//                         </h2>
//                         <p className="mt-4 text-lg text-gray-400">
//                             The Epic Circle offers a lifestyle where every detail
//                             is tailored to meet your high standards. This isn’t
//                             just about rewards—it’s about a lifestyle. A lifestyle
//                             where luxury meets convenience, and exclusivity
//                             meets quality. Epic Circle members live differently,
//                             experiencing special privileges, world-class events,
//                             and one-of-a-kind offers.
//                         </p>
//                         <div className="mt-8 px-6">
//                             <h3 className="text-xl font-semibold">
//                                 Our Vision
//                             </h3>
//                             <p className="mt-2 text-gray-400">
//                                 To create a unique community of individuals who
//                                 enjoy bespoke experiences, exclusive products,
//                                 and top-tier services.
//                             </p>
//                             <h3 className="text-xl font-semibold mt-4">
//                                 Our Mission
//                             </h3>
//                             <p className="mt-2 text-gray-400">
//                                 To deliver unmatched value through personalized
//                                 attention, exceptional rewards, and a level of
//                                 exclusivity that is second to none.
//                             </p>
//                         </div>
//                     </div>
//
//                 </div>
//             </div>
//         </section>
//     );
// };
//
// export default About;


import { Card, CardContent } from "@/components/ui/card";

export default function AboutSection() {
    return (
        <div className="bg-black text-white py-20">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row gap-12 items-center">
                    {/* Left side content */}
                    <div className="flex-1">
                        <h2 className="text-4xl font-light tracking-tight mb-6">
                            The Ultimate <span className="text-gold">Exclusive Experience</span>
                        </h2>

                        <p className="text-gray-300 mb-8 leading-relaxed">
                            The Epic Circle offers a lifestyle where every detail is tailored to meet your high standards.
                            This isn't just about rewards—it's about a lifestyle. A lifestyle where luxury meets convenience,
                            and exclusivity meets quality. Epic Circle members live differently, experiencing special privileges,
                            world-class events, and one-of-a-kind offers.
                        </p>

                        <div className="space-y-8">
                            <div>
                                <h3 className="text-xl font-semibold mb-3 text-amber-400">Our Vision</h3>
                                <p className="text-gray-300">
                                    To create a unique community of individuals who enjoy bespoke experiences,
                                    exclusive products, and top-tier services.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold mb-3 text-amber-400">Our Mission</h3>
                                <p className="text-gray-300">
                                    To deliver unmatched value through personalized attention, exceptional rewards,
                                    and a level of exclusivity that is second to none.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right side image/graphics */}
                    <div className="flex-1 flex justify-center">
                        <Card className="bg-gradient-to-br from-gray-900 to-black border border-amber-400/30 w-full max-w-md">
                            <CardContent className="p-6">
                                <div className="aspect-square relative bg-black border-2 border-gold flex items-center justify-center mb-6">
                                    <img
                                        src="/assets/images/epic-circle-card.png"
                                        alt="Epic Circle Membership Card"
                                        className="p-10"
                                    />
                                </div>

                                <div className="text-center">
                                    <h3 className="text-xl font-light text-amber-400 mb-2">Epic Circle Membership Card</h3>
                                    <p className="text-gray-300">
                                        A symbol of exclusivity and luxury, designed for those who appreciate the finer things in life.
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}