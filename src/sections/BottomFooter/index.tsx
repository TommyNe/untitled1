import { Copyright } from "@/sections/BottomFooter/components/Copyright";
import { SocialIcons } from "@/components/SocialIcons";

export const BottomFooter = () => {
    return (
        <footer className="text-neutral-400 text-xs bg-stone-200 box-border caret-transparent py-5 font-roboto">
            <div className="box-border caret-transparent max-w-none w-full mx-auto px-6 md:max-w-[1200px]">
                <div className="box-border caret-transparent flex flex-wrap -mx-3">
                    <Copyright />
                    <div className="box-border caret-transparent shrink-0 max-w-full text-center w-full px-3 md:text-start md:w-6/12">
                        <SocialIcons />
                    </div>
                </div>
            </div>
        </footer>
    );
};