"use client";

import {MenuIcon} from "lucide-react";

import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion.tsx";
import {Button} from "@/components/ui/button.tsx";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu.tsx";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet.tsx";
import {cva} from "class-variance-authority";

const Navbar = () => {

    const navigationMenuLinkStyle = cva(
        "hover:brightness-225"
    )

    const navLinks = [
        { href: "#about", label: "About" },
        { href: "#benefits", label: "Benefits" },
        { href: "#how-it-works", label: "How It Works" },
        { href: "#plans", label: "Plans" },
        { href: "#contact", label: "Contact" },
    ];

    return (
        <section className="fixed w-full overflow-hidden top-0 left-0 p-3 rounded-xl z-50 bg-neutral-900">
            <div className="container">
                <nav className="flex items-center justify-between">
                    <a
                        href="https://epic-circle.in"
                        className="flex items-center gap-0 mx-0"
                    >
                        <img
                            src="/assets/logo.png"
                            className="max-h-10"
                            alt="Epic Circle Logo"
                        />
                        <span className="ms-4 text-lg font-semibold tracking-tighter">Epic Circle</span>
                    </a>
                    <NavigationMenu className="hidden md:block">
                        <NavigationMenuList className={"gap-3"}>
                            {navLinks.map((link) => (
                            <NavigationMenuItem>
                                <NavigationMenuLink
                                    key={link.href}
                                    href={link.href}
                                    className={navigationMenuLinkStyle()}
                                >
                                    {link.label}
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            ))}
                        </NavigationMenuList>
                    </NavigationMenu>
                    <Button className={"hidden md:flex"}>Join us</Button>
                    <Sheet>
                        <SheetTrigger asChild className="md:hidden">
                            <Button variant="outline" size="icon">
                                <MenuIcon className="h-4 w-4"/>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="top" className="max-h-screen overflow-auto">
                            <SheetHeader>
                                <SheetTitle>
                                    <a
                                        href="https://www.shadcnblocks.com"
                                        className="flex items-center gap-2"
                                    >
                                        <img
                                            src="/assets/logo.png"
                                            className="max-h-8"
                                            alt="Shadcn UI Navbar"
                                        />
                                        <span className="text-lg font-semibold tracking-tighter">Epic Circle</span>
                                    </a>
                                </SheetTitle>
                            </SheetHeader>
                            <div className="flex flex-col p-4">
                                <Accordion type="single" collapsible className="mt-4 mb-2">
                                    {navLinks.map((link) => (
                                    <AccordionItem value="solutions" className="border-none">
                                        <AccordionTrigger className="text-base hover:no-underline">
                                            {link.label}
                                        </AccordionTrigger>
                                    </AccordionItem>
                                    ))}
                                </Accordion>
                                <div className="mt-6 flex flex-col gap-4">
                                    <Button>Start for free</Button>
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </nav>
            </div>
        </section>
    );
};

export {Navbar};
