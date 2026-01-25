export const EventCountdown = () => {
    return (
        <div className="box-border caret-transparent shrink-0 max-w-full w-full mt-5 px-3 md:w-[33.3333%] md:mt-0">
            <div className="box-border caret-transparent inline-block text-center w-[24%]">
                <span className="text-white text-lg bg-teal-700 box-border caret-transparent inline-block px-2.5 py-[5px] rounded-sm font-roboto_condensed">
                    2
                </span>
                <span className="text-xs box-border caret-transparent block mt-0.5">Tage</span>
            </div>
            <div className="box-border caret-transparent inline-block text-center w-[24%]">
                <span className="text-lg bg-stone-200 box-border caret-transparent inline-block px-2.5 py-[5px] rounded-sm font-roboto_condensed">
                    00
                </span>
                <span className="text-xs box-border caret-transparent block mt-0.5">Std.</span>
            </div>
            <div className="box-border caret-transparent inline-block text-center w-[24%]">
                <span className="text-lg bg-stone-200 box-border caret-transparent inline-block px-2.5 py-[5px] rounded-sm font-roboto_condensed">
                    46
                </span>
                <span className="text-xs box-border caret-transparent block mt-0.5">min</span>
            </div>
            <div className="box-border caret-transparent inline-block text-center w-[24%]">
                <span className="text-lg bg-stone-200 box-border caret-transparent inline-block px-2.5 py-[5px] rounded-sm font-roboto_condensed">
                    05
                </span>
                <span className="text-xs box-border caret-transparent block mt-0.5">sec</span>
            </div>
        </div>
    )
}
