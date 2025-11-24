import { Header } from "@/sections/Header";
import { Carousel } from "@/sections/Carousel";
import { EventBanner } from "@/sections/EventBanner";
import { MainContent } from "@/sections/MainContent";
import { ImageGallery } from "@/sections/ImageGallery";
import { Footer } from "@/sections/Footer";
import { BottomFooter } from "@/sections/BottomFooter";
import { ScrollToTop } from "@/components/ScrollToTop";

export const App = () => {
    return (
        <body className="text-stone-500 text-sm not-italic normal-nums font-normal accent-auto bg-fixed bg-white box-border caret-transparent block tracking-[normal] leading-5 list-outside list-disc pointer-events-auto text-start indent-[0px] normal-case visible border-separate font-roboto">
        <title className="box-border caret-transparent hidden">
            ETWAH - Pfarreingemeinschaft
        </title>
        <div className="box-border caret-transparent">
            <Header />
            <Carousel />
            <EventBanner />
            <MainContent />
            <ImageGallery />
            <Footer />
            <BottomFooter />
            <ScrollToTop />
        </div>
        <div className="relative box-border caret-transparent">
            <a
                href="https://www.iubenda.com/help/120399-why-does-my-website-show-this-icon?utm_source=cs&utm_medium=web&utm_campaign=csalrt1"
                className="fixed text-black/70 font-bold bg-white bg-[url(data:image/svg+xml,%3Csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20width=%2732%27%20height=%2732%27%20viewBox=%270%200%2032%2032%27%3E%3Cpath%20fill=%27%231CC691%27%20fill-rule=%27evenodd%27%20d=%27M16%207a4%204%200%200%201%202.627%207.016L19.5%2025h-7l.873-10.984A4%204%200%200%201%2016%207z%27/%3E%3C/svg%3E)] bg-no-repeat bg-size-[32px_32px] shadow-[rgba(0,0,0,0.15)_0px_0px_0px_1px] box-border caret-transparent block h-[34px] leading-[34px] min-w-[34px] text-left align-middle z-[2147483647] bg-[position:1px_0.5px] m-4 rounded-bl rounded-br rounded-tl rounded-tr right-0 bottom-0 font-apple_system before:accent-auto before:bg-[url(data:image/svg+xml,%3Csvg%20fill=%27none%27%20height=%2717%27%20viewBox=%270%200%2017%2017%27%20width=%2717%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath%20d=%27m6.79042%202.81577c.7788-1.28272%202.64036-1.28272%203.41918%200l5.9459%209.79333c.8093%201.3328-.1503%203.038-1.7095%203.038h-11.89195c-1.55927%200-2.5188026-1.7052-1.709576-3.038z%27%20fill=%27%23fb6666%27/%3E%3Cpath%20d=%27m14.446%2015.1471h-11.89195c-1.16945%200-1.889102-1.2789-1.28218-2.2785l5.94595-9.79334c.5841-.96204%201.98026-.96204%202.56436%200l5.94592%209.79334c.607.9996-.1127%202.2785-1.2821%202.2785z%27%20stroke=%27%23000%27%20stroke-opacity=%27.1%27/%3E%3Cg%20fill=%27%23fff%27%3E%3Crect%20height=%274.97619%27%20rx=%27.497619%27%20width=%27.995238%27%20x=%278%27%20y=%276%27/%3E%3Cpath%20d=%27m8%2012.5c0-.2761.22386-.5.5-.5.27614%200%20.5.2239.5.5%200%20.2761-.22386.5-.5.5-.27614%200-.5-.2239-.5-.5z%27/%3E%3C/g%3E%3C/svg%3E)] before:bg-center before:bg-no-repeat before:bg-size-[24px_24px] before:box-border before:caret-transparent before:text-black/70 before:block before:text-sm before:not-italic before:normal-nums before:font-bold before:h-8 before:tracking-[normal] before:leading-[34px] before:list-outside before:list-disc before:pointer-events-auto before:absolute before:text-left before:indent-[0px] before:normal-case before:visible before:w-8 before:border-separate before:-right-4 before:-top-4 before:font-apple_system"
            ></a>
        </div>
        </body>
    );
};