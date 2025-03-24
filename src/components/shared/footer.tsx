import { Instagram, Twitter, Facebook, Linkedin, Mail, Phone, Globe } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full bg-black border-t border-gray-900 py-16 px-4 md:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-24 mb-16">
                    <div>
                        <div className="mb-6">
                            <h2 className="text-xl font-light text-white">
                                Epic<span className="text-amber-400">Circle</span>
                            </h2>
                        </div>
                        <p className="text-gray-400 mb-8 max-w-md">
                            Redefining luxury experiences through exceptional service,
                            curated events, and a global community of discerning members.
                        </p>
                        <div className="flex space-x-8">
                            <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors duration-200">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors duration-200">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors duration-200">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors duration-200">
                                <Linkedin className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/*<div>*/}
                    {/*    <h3 className="text-sm font-medium text-white uppercase tracking-wider mb-6">Navigation</h3>*/}
                    {/*    <div className="grid grid-cols-2">*/}
                    {/*        <div>*/}
                    {/*            <ul className="space-y-4">*/}
                    {/*                <li>*/}
                    {/*                    <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors duration-200 text-sm">*/}
                    {/*                        Membership*/}
                    {/*                    </a>*/}
                    {/*                </li>*/}
                    {/*                <li>*/}
                    {/*                    <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors duration-200 text-sm">*/}
                    {/*                        Benefits*/}
                    {/*                    </a>*/}
                    {/*                </li>*/}
                    {/*                <li>*/}
                    {/*                    <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors duration-200 text-sm">*/}
                    {/*                        Events*/}
                    {/*                    </a>*/}
                    {/*                </li>*/}
                    {/*                <li>*/}
                    {/*                    <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors duration-200 text-sm">*/}
                    {/*                        Partners*/}
                    {/*                    </a>*/}
                    {/*                </li>*/}
                    {/*            </ul>*/}
                    {/*        </div>*/}
                    {/*        <div>*/}
                    {/*            <ul className="space-y-4">*/}
                    {/*                <li>*/}
                    {/*                    <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors duration-200 text-sm">*/}
                    {/*                        About Us*/}
                    {/*                    </a>*/}
                    {/*                </li>*/}
                    {/*                <li>*/}
                    {/*                    <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors duration-200 text-sm">*/}
                    {/*                        Blog*/}
                    {/*                    </a>*/}
                    {/*                </li>*/}
                    {/*                <li>*/}
                    {/*                    <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors duration-200 text-sm">*/}
                    {/*                        FAQ*/}
                    {/*                    </a>*/}
                    {/*                </li>*/}
                    {/*                <li>*/}
                    {/*                    <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors duration-200 text-sm">*/}
                    {/*                        Community*/}
                    {/*                    </a>*/}
                    {/*                </li>*/}
                    {/*            </ul>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}

                    <div className={"ms-auto w-fit"}>
                        <h3 className="text-sm font-medium text-white uppercase tracking-wider mb-6">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start space-x-3">
                                <Phone className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-400 text-sm">+91-9818929900</span>
                            </li>
                            <li className="flex items-start space-x-3">
                                <Globe className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-400 text-sm">info@valueadzglobal.com</span>
                            </li>
                            <li className="flex items-start space-x-3">
                                <Mail className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
                                <div className="flex flex-col">
                                    <span className="text-gray-400 text-sm">partnerships@epiccircle.com</span>
                                    <span className="text-gray-400 text-sm mt-1">zahoor.sofi@valueadz.ae</span>
                                </div>
                            </li>
                        </ul>
                        <div className="mt-8 pt-8 border-t border-gray-900">
                            <a href="#" className="inline-block px-5 py-2.5 border border-amber-400 text-amber-400 text-xs tracking-wider uppercase hover:bg-amber-400 hover:text-black transition-all duration-200">
                                Contact Concierge
                            </a>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-500 text-xs mb-4 md:mb-0">
                        © {currentYear} Epic Circle. All rights reserved.
                    </p>
                    <div className="flex space-x-6">
                        <a href="#" className="text-gray-500 hover:text-gray-400 text-xs">
                            Privacy Policy
                        </a>
                        <a href="#" className="text-gray-500 hover:text-gray-400 text-xs">
                            Terms of Service
                        </a>
                        <a href="#" className="text-gray-500 hover:text-gray-400 text-xs">
                            Cookie Policy
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;