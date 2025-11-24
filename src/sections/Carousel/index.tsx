import { useEffect, useMemo, useState } from "react";
import { CarouselIndicators } from "@/sections/Carousel/components/CarouselIndicators";
import { CarouselControls } from "@/sections/Carousel/components/CarouselControls";

const SLIDES = [
    "https://etwah.de/galerie/488dc394b62f57f1319b4a2d8a317dec86e27e8e.jpg",
    "https://etwah.de/galerie/4b7e09dfe7c3af945aab67f427dddae2627d4a00.jpg",
    "https://etwah.de/galerie/468102d83de8671aeae6bf81968fef65e5c78ef4.jpg",
];

export const Carousel = () => {
    const [index, setIndex] = useState(0);
    const count = SLIDES.length;

    const next = () => setIndex((i) => (i + 1) % count);
    const prev = () => setIndex((i) => (i - 1 + count) % count);
    const goTo = (i: number) => setIndex(((i % count) + count) % count);

    // Auto-play every 5s
    useEffect(() => {
        const id = setInterval(next, 5000);
        return () => clearInterval(id);
    }, [count]);

    const slides = useMemo(() => SLIDES, []);

    return (
        <div className="relative bg-[url('https://etwah.de/build/images/loader.f1da3573.gif')] bg-no-repeat box-border caret-transparent h-[500px] mb-[-81px] top-[-81px] w-full z-[1] overflow-hidden bg-center left-0 after:accent-auto after:box-border after:caret-transparent after:clear-both after:text-stone-500 after:block after:text-sm after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-5 after:list-outside after:list-disc after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-roboto">
            <ul className="relative box-border caret-transparent h-full list-none pl-0 m-0">
                {slides.map((src, i) => (
                    <li
                        key={src}
                        className={`absolute inset-0 transition-opacity duration-700 ease-in-out bg-stone-50 bg-no-repeat bg-cover bg-center ${i === index ? "opacity-100" : "opacity-0"}`}
                        style={{ backgroundImage: `url(${src})`, height: 500 }}
                        aria-hidden={i !== index}
                        role="group"
                        aria-roledescription="slide"
                        aria-label={`${i + 1} von ${count}`}
                    />
                ))}
            </ul>
            <CarouselIndicators total={count} currentIndex={index} onSelect={goTo} />
            <CarouselControls onPrev={prev} onNext={next} />
        </div>
    );
};