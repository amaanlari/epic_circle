import {Card, CardContent} from '@/components/ui/card';
import {Twitter, Instagram, Facebook, Globe, Linkedin} from 'lucide-react';
import {Button} from "@/components/ui/button.tsx";

// const socialMedia = [
//     {
//         src: 'https://images.pexels.com/photos/8872753/pexels-photo-8872753.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
//         alt: 'Community member'
//     },
//     {
//         src: 'https://images.pexels.com/photos/3783725/pexels-photo-3783725.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//         alt: 'Community member'
//     },
//     {
//         src: '/assets/images/exclusive-event.png',
//         alt: 'Community member'
//     },
//     {
//         src: '/assets/images/exclusive-event.png',
//         alt: 'Community member'
//     },
//     {
//         src: '/assets/images/exclusive-event.png',
//         alt: 'Community member'
//     },
//     {
//         src: '/assets/images/exclusive-event.png',
//         alt: 'Community member'
//     }
// ];

const SocialMediaCommunity = () => {
    return (
        <div className="w-full inset-0 bg-gradient-to-br from-neutral-900 via-neutral-800/90 to-neutral-500/10 background-animate opacity-90 py-16 px-4 md:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-amber-300 to-yellow-600 bg-clip-text text-transparent mb-4">
                        Social Media & Community
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-amber-300 to-yellow-600 mx-auto mb-8"></div>

                    <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed mb-8">
                        As an Epic Circle member, your journey doesn't end with the rewards and experiences we offer.
                        By joining our exclusive social media community, you become part of a vibrant, global network
                        of like-minded individuals who share a passion for luxury, success, and unique experiences.
                    </p>

                    <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
                        Stay connected and be the first to know about special offers, exciting events, and exclusive
                        content available only to our members. Our social media platforms are your go-to source for
                        the latest updates and behind-the-scenes glimpses into the world of Epic Circle.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    <Card
                        className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 shadow-lg overflow-hidden group hover:border-amber-500 transition-all duration-300">
                        <CardContent className="p-8">
                            <h3 className="text-xl font-bold text-white mb-3">Share Your Journey</h3>
                            <p className="text-gray-400 mb-4">
                                Document your Epic Circle experiences and connect with fellow members worldwide.
                                Use the hashtag <span
                                className="font-semibold text-amber-400">#EpicCircleExperience</span> to
                                showcase your exclusive moments.
                            </p>
                            <div className="flex space-x-4 mt-6">
                                <a href={"/epic-circle-instagram"}>
                                    <Button
                                        className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center hover:from-amber-500 hover:to-yellow-600 transition-all duration-300">
                                        <Instagram className="w-6 h-6 text-white"/>
                                    </Button>
                                </a>
                                <a href={"/epic-circle-twitter"}>
                                    <Button
                                        className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center hover:from-amber-500 hover:to-yellow-600 transition-all duration-300">
                                        <Twitter fill={"white"} className="w-6 h-6 text-white"/>
                                    </Button>
                                </a>
                                <a href={"/epic-circle-facebook"}>
                                    <Button
                                        className={"w-12 h-12 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center hover:from-amber-500 hover:to-yellow-900 transition-all duration-300"}>
                                        <Facebook fill={"white"} className="w-6 h-6 text-white"/>
                                    </Button>
                                </a>
                                <a href={"/epic-circle-linkedin"}>
                                    <Button
                                        className={"w-12 h-12 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center hover:from-amber-500 hover:to-yellow-900 transition-all duration-300"}>
                                        <Linkedin fill={"white"} className="w-6 h-6 text-white"/>
                                    </Button>
                                </a>
                            </div>
                        </CardContent>
                    </Card>

                    <Card
                        className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 shadow-lg overflow-hidden group hover:border-amber-500 transition-all duration-300">
                        <CardContent className="p-8">
                            <h3 className="text-xl font-bold text-white mb-3">Exclusive Content & Updates</h3>
                            <p className="text-gray-400 mb-4">
                                Gain access to VIP-only content, behind-the-scenes looks, and be the first to know about
                                upcoming events and experiences reserved for Epic Circle members.
                            </p>
                            <div className="mt-6 flex items-center">
                                <div
                                    className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-yellow-600 flex items-center justify-center mr-4">
                                    <Globe className="w-6 h-6 text-black"/>
                                </div>
                                <p className="text-amber-400 font-medium">Members-only portal updates</p>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/*    <div className="relative">*/}
                {/*        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-10"></div>*/}
                {/*        <div className="grid grid-cols-3 gap-4">*/}
                {/*            {socialMedia.map((_media, index) => (*/}

                {/*                <div key={index} className="aspect-square overflow-hidden relative">*/}
                {/*                    <img*/}
                {/*                        src={`${_media.src}`}*/}
                {/*                        alt="Community member"*/}
                {/*                        className="object-cover w-full h-full opacity-70 hover:opacity-100 transition-opacity duration-300"*/}
                {/*                    />*/}
                {/*                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-2">*/}
                {/*                        <p className="text-sm text-amber-300 font-medium">#EpicCircleExperience</p>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*                ))*/}
                {/*            }*/}
                {/*        </div>*/}
                {/*    </div>*/}
            </div>
        </div>
    );
};

export default SocialMediaCommunity;