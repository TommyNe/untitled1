import { HeaderTop } from "@/sections/Header/components/HeaderTop";
import { Navigation } from "@/sections/Header/components/Navigation";

export const Header = () => {
    return (
        <header className="box-border caret-transparent w-full">
            <HeaderTop />
            <div className="box-border caret-transparent h-auto max-h-[50px] md:h-0">
                <Navigation />
            </div>
        </header>
    );
};