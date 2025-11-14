import { CarouselIndicators } from "@/sections/Carousel/components/CarouselIndicators";
import { CarouselControls } from "@/sections/Carousel/components/CarouselControls";

export const Carousel = () => {
    return (
        <div className="relative bg-[url('https://etwah.de/build/images/loader.f1da3573.gif')] bg-no-repeat box-border caret-transparent h-[500px] mb-[-81px] top-[-81px] w-full z-[1] overflow-hidden bg-center left-0 after:accent-auto after:box-border after:caret-transparent after:clear-both after:text-stone-500 after:block after:text-sm after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-5 after:list-outside after:list-disc after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-roboto">
            <ul className="box-border caret-transparent h-full list-none pl-0">
                <li className="relative bg-stone-50 bg-[url('https://etwah.de/galerie/aebb41f09293d335a352e2f5f5bff417784f38a7.jpg')] bg-no-repeat bg-cover box-border caret-transparent hidden float-left h-[500px] mr-[-100%] w-full overflow-hidden bg-center"></li>
                <li className="relative bg-stone-50 bg-[url('https://etwah.de/galerie/67536a282c136523ce4d9a915044e21bdda17351.jpg')] bg-no-repeat bg-cover box-border caret-transparent hidden float-left h-[500px] mr-[-100%] w-full overflow-hidden bg-center"></li>
                <li className="relative bg-stone-50 bg-[url('https://etwah.de/galerie/8fb1437e1572092249226978abb78457ed2c69b7.jpg')] bg-no-repeat bg-cover box-border caret-transparent hidden float-left h-[500px] mr-[-100%] w-full overflow-hidden bg-center"></li>
                <li className="relative bg-stone-50 bg-[url('https://etwah.de/galerie/c96d679ad5951e1f847792dc6571ad4dcf1aaa9f.jpg')] bg-no-repeat bg-cover box-border caret-transparent hidden float-left h-[500px] mr-[-100%] w-full overflow-hidden bg-center"></li>
                <li className="relative bg-stone-50 bg-[url('https://etwah.de/galerie/02c62f7f8c3a26d06bc083b9aca000b3da28fc95.jpg')] bg-no-repeat bg-cover box-border caret-transparent hidden float-left h-[500px] mr-[-100%] w-full overflow-hidden bg-center"></li>
                <li className="relative bg-stone-50 bg-[url('https://etwah.de/galerie/a629e419ad9e1c85f06647baf6a3a5a1a23b0f5a.jpg')] bg-no-repeat bg-cover box-border caret-transparent hidden float-left h-[500px] mr-[-100%] w-full overflow-hidden bg-center"></li>
                <li className="relative bg-stone-50 bg-[url('https://etwah.de/galerie/5ccd1fc4d2ad0b7f355708b6bc8ebe4fa915144f.jpg')] bg-no-repeat bg-cover box-border caret-transparent float-left h-[500px] mr-[-100%] w-full overflow-hidden bg-center"></li>
                <li className="relative bg-stone-50 bg-[url('https://etwah.de/galerie/488dc394b62f57f1319b4a2d8a317dec86e27e8e.jpg')] bg-no-repeat bg-cover box-border caret-transparent hidden float-left h-[500px] mr-[-100%] w-full overflow-hidden bg-center"></li>
                <li className="relative bg-stone-50 bg-[url('https://etwah.de/galerie/4b7e09dfe7c3af945aab67f427dddae2627d4a00.jpg')] bg-no-repeat bg-cover box-border caret-transparent hidden float-left h-[500px] mr-[-100%] w-full overflow-hidden bg-center"></li>
                <li className="relative bg-stone-50 bg-[url('https://etwah.de/galerie/468102d83de8671aeae6bf81968fef65e5c78ef4.jpg')] bg-no-repeat bg-cover box-border caret-transparent hidden float-left h-[500px] mr-[-100%] w-full overflow-hidden bg-center"></li>
            </ul>
            <CarouselIndicators />
            <CarouselControls />
        </div>
    );
};