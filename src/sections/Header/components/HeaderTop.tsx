import { Logo } from "@/components/Logo";
import { TopMenu } from "@/sections/Header/components/TopMenu";

export const HeaderTop = () => {
    return (
        <div className="relative bg-white/80 shadow-[rgba(0,0,0,0.1)_0px_2px_0px_0px] box-border caret-transparent h-20 z-[3]">
            <div className="box-border caret-transparent max-w-none w-full mx-auto px-6 md:max-w-[1200px]">
                <div className="items-center box-border caret-transparent flex flex-wrap -mx-3">
                    <div className="box-border caret-transparent shrink-0 max-w-full w-full px-3 md:w-[33.3333%]">
                        <Logo />
                    </div>
                    <div className="box-border caret-transparent shrink-0 max-w-full w-full px-3 md:w-[66.6667%]">
                        <TopMenu />
                        <a
                            href="https://etwah.de/"
                            className="absolute text-zinc-600 text-lg box-border caret-transparent block mt-[-52px] underline z-[9999] right-[15px] md:hidden md:-mt-2 hover:text-teal-700 hover:no-underline hover:border-teal-700"
                        >
                            <i className="font-black box-border caret-transparent inline-block leading-[18px] font-font_awesome_5_free before:accent-auto before:box-border before:caret-transparent before:text-zinc-600 before:text-lg before:not-italic before:normal-nums before:font-black before:tracking-[normal] before:leading-[18px] before:list-outside before:list-disc before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-font_awesome_5_free"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};