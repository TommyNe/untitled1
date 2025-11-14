import { FooterAbout } from "@/sections/Footer/components/FooterAbout";
import { FooterLinks } from "@/sections/Footer/components/FooterLinks";
import { FooterSocial } from "@/sections/Footer/components/FooterSocial";

export const Footer = () => {
    return (
        <footer className="bg-stone-100 shadow-[rgba(0,0,0,0.07)_0px_-2px_0px_0px] box-border caret-transparent py-[50px]">
            <div className="box-border caret-transparent max-w-none w-full mx-auto px-6 md:max-w-[1200px]">
                <div className="box-border caret-transparent flex flex-wrap -mx-3">
                    <FooterAbout />
                    <FooterLinks />
                    <FooterSocial />
                </div>
            </div>
        </footer>
    );
};
