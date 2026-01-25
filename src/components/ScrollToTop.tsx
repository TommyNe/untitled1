export const ScrollToTop = () => {
    return (
        <a
            href="#top"
            aria-label="Zum Seitenanfang"
            className="fixed text-white bg-black/70 box-border caret-transparent hidden px-3 py-[5px] rounded-[3px] right-[17px] bottom-[17px] md:block"
        >
            <i className="font-black box-border caret-transparent inline-block leading-[14px] font-font_awesome_5_free before:accent-auto before:box-border before:caret-transparent before:text-white before:text-sm before:not-italic before:normal-nums before:font-black before:tracking-[normal] before:leading-[14px] before:list-outside before:list-disc before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-font_awesome_5_free"></i>
        </a>
    )
}
