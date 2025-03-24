import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const voucherImages = [
    "/assets/images/epic-circle-voucher-banner-1.png",
    "/assets/images/epic-circle-voucher-banner-2.png",
    "/assets/images/epic-circle-voucher-banner-3.png",
    "/assets/images/epic-circle-voucher-banner-4.png",
    "/assets/images/epic-circle-voucher-banner-5.png",
    "/assets/images/epic-circle-voucher-banner-6.png",
    "/assets/images/epic-circle-voucher-banner-7.png",
    "/assets/images/epic-circle-voucher-banner-8.png",
    "/assets/images/epic-circle-voucher-banner-9.png",
    "/assets/images/epic-circle-voucher-banner-10.png",
    // Add more images as required
];

export default function VoucherCarousel() {
    return (
        <div className="inset-0 bg-gradient-to-br from-neutral-900 via-neutral-800/90 to-neutral-500/10 background-animate opacity-90 py-28">
            <div className="lg:max-w-5xl mx-auto flex items-center justify-center">
                <Carousel className="sm:w-9/12 md:w-full" opts={{loop: true}}>
                    <CarouselContent className="-ml-1">
                        {voucherImages.map((src, index) => (
                            <CarouselItem key={index} className="pl-1 basis-full">
                                <Card className="overflow-hidden rounded-xl shadow-lg">
                                    <CardContent className="p-0">
                                        <img src={src} alt={`Voucher ${index + 1}`} className="w-full object-fill bg-yellow-100" />
                                    </CardContent>
                                </Card>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="bg-primary/30 hover:bg-primary/60 transform -translate-y-1/2" />
                    <CarouselNext className="bg-primary/50 hover:bg-primary/60  transform -translate-y-1/2" />
                </Carousel>
            </div>
        </div>
    );
}
