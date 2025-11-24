import { HeaderTop } from "@/sections/Header/components/HeaderTop";
import { Navigation } from "@/sections/Header/components/Navigation";

export const Header = () => {
    return (
        <header className=" box-border caret-transparent w-full absolute">
                <HeaderTop />
                <Navigation />

        </header>
    );
};