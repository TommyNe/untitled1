export const SocialIcons = () => {
    return (
        <form role="search" className="box-border caret-transparent">
            <div className="box-border caret-transparent mt-2.5 mb-[30px]">
                <div className="relative items-stretch box-border caret-transparent table flex-wrap w-full">
                    <input
                        type="text"
                        name="search"
                        placeholder="Suche ..."
                        className="relative text-neutral-600 text-[15px] bg-clip-padding bg-gray-200 shadow-[rgba(0,0,0,0.075)_0px_1px_3px_0px_inset] box-border caret-transparent table-cell grow h-[46px] leading-[19.95px] align-middle w-full border border-stone-300 px-4 py-2.5 rounded-l-[3px] border-solid"
                    />
                    <span className="relative box-border caret-transparent table-cell text-nowrap align-middle w-[1%] -ml-px">
                        <button
                            type="submit"
                            className="relative text-[15px] font-bold bg-transparent caret-transparent h-[46px] tracking-[1px] leading-[19.95px] opacity-65 pointer-events-none text-center uppercase text-nowrap align-middle z-[2] border border-stone-500 -ml-px px-4 py-2.5 rounded-[3px] border-solid font-roboto_condensed hover:text-zinc-800 hover:bg-gray-200 hover:border-zinc-400"
                        >
                            <i className="text-xl font-black box-border caret-transparent inline-block leading-[15px] text-nowrap font-font_awesome_5_free before:accent-auto before:box-border before:caret-transparent before:text-stone-500 before:text-xl before:not-italic before:normal-nums before:font-black before:tracking-[1px] before:leading-[15px] before:list-outside before:list-disc before:pointer-events-none before:text-center before:indent-[0px] before:uppercase before:text-nowrap before:visible before:border-separate before:font-font_awesome_5_free"></i>
                        </button>
                    </span>
                </div>
            </div>
        </form>
    )
}
