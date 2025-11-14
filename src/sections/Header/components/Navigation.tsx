import { NavMenu } from "@/sections/Header/components/NavMenu";

export const Navigation = () => {
    return (
        <div className="fixed bg-stone-100 shadow-none box-border caret-transparent hidden min-h-[50px] w-full z-[1000] left-0 top-0 md:bg-white/80 md:shadow-[rgba(0,0,0,0.1)_0px_1px_0px_0px] md:block md:left-auto">
            <div className="box-border caret-transparent max-w-none w-full mx-auto px-6 md:max-w-[1200px]">
                <div className="box-border caret-transparent flex flex-wrap -mx-3">
                    <div className="relative box-border caret-transparent shrink-0 max-w-full min-h-0 min-w-0 w-full px-3 md:min-h-[auto] md:min-w-[auto]">
                        <nav className="relative box-border caret-transparent h-auto text-center w-full z-[9999] rounded-bl rounded-br top-0 font-roboto_condensed md:absolute md:h-[50px] md:w-[1010px] md:z-[1000]">
                            <NavMenu />
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
};