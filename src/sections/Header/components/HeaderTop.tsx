import { Logo } from "@/components/Logo";
import { TopMenu } from "@/sections/Header/components/TopMenu";

export const HeaderTop = () => {
    return (
        <div className="relative bg-white/80 shadow-[rgba(0,0,0,0.1)_0px_2px_0px_0px] box-border caret-transparent h-20 z-[3]">
            <div className="box-border caret-transparent max-w-[1200px] w-full mx-auto px-6">
                <div className="items-center box-border caret-transparent flex flex-wrap -mx-3">
                    <div className="box-border caret-transparent shrink-0 max-w-full w-full px-3 md:w-[33.3333%]">
                        <Logo />
                    </div>
                    <div className="box-border caret-transparent shrink-0 max-w-full w-full px-3 md:w-[66.6667%]">
                        <TopMenu />
                    </div>
                </div>
            </div>
        </div>
    );
};
