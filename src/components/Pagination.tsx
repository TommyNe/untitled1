export const Pagination = () => {
    return (
        <div className="box-border caret-transparent text-right">
            <ul className="box-border caret-transparent flex justify-center my-5 pl-0 rounded-[3px]">
                <li className="box-border caret-transparent block">
                    <a
                        href="https://etwah.de/?p=1"
                        className="relative text-white bg-teal-700 box-border caret-transparent block float-left z-[2] border border-teal-700 px-3 py-1.5 rounded-bl rounded-tl border-solid"
                    >
                        1
                    </a>
                </li>
                <li className="box-border caret-transparent block">
                    <a
                        href="https://etwah.de/?p=2"
                        className="relative text-zinc-600 bg-white box-border caret-transparent block float-left border border-stone-200 -ml-px px-3 py-1.5 border-solid hover:text-teal-700 hover:bg-stone-100"
                    >
                        2
                    </a>
                </li>
                <li className="box-border caret-transparent block">
                    <a
                        href="https://etwah.de/?p=3"
                        className="relative text-zinc-600 bg-white box-border caret-transparent block float-left border border-stone-200 -ml-px px-3 py-1.5 border-solid hover:text-teal-700 hover:bg-stone-100"
                    >
                        3
                    </a>
                </li>
                <li className="box-border caret-transparent block">
                    <a
                        href="https://etwah.de/?p=4"
                        className="relative text-zinc-600 bg-white box-border caret-transparent block float-left border border-stone-200 -ml-px px-3 py-1.5 border-solid hover:text-teal-700 hover:bg-stone-100"
                    >
                        4
                    </a>
                </li>
                <li className="box-border caret-transparent block">
                    <a
                        href="https://etwah.de/"
                        className="relative text-zinc-600 bg-white box-border caret-transparent block float-left border border-stone-200 -ml-px px-3 py-1.5 border-solid hover:text-teal-700 hover:bg-stone-100"
                    >
                        ..
                    </a>
                </li>
                <li className="box-border caret-transparent block">
                    <a
                        href="https://etwah.de/?p=2"
                        className="relative text-zinc-600 bg-white box-border caret-transparent block float-left border border-stone-200 -ml-px px-3 py-1.5 rounded-br rounded-tr border-solid hover:text-teal-700 hover:bg-stone-100"
                    >
                        <i className="font-black box-border caret-transparent inline-block leading-[14px] font-font_awesome_5_free before:accent-auto before:box-border before:caret-transparent before:text-zinc-600 before:text-sm before:not-italic before:normal-nums before:font-black before:tracking-[normal] before:leading-[14px] before:list-outside before:list-none before:pointer-events-auto before:text-right before:indent-[0px] before:normal-case before:visible before:border-separate before:font-font_awesome_5_free"></i>
                    </a>
                </li>
            </ul>
        </div>
    )
}
