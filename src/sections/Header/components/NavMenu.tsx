import type React from "react";

type NavMenuProps = {
    isOpen?: (id: string) => boolean;
    toggle?: (id: string) => void;
    closeAll?: () => void;
    mobile?: boolean;
    onItemClick?: () => void;
};

export const NavMenu = ({ isOpen, toggle, mobile, onItemClick }: NavMenuProps) => {
    const handleClick: React.MouseEventHandler<HTMLUListElement> = (e) => {
        if (!mobile) return;
        const target = e.target as HTMLElement;
        const anchor = target.closest ? (target.closest('a') as HTMLAnchorElement | null) : null;
        if (anchor) {
            onItemClick?.();
        }
    };

    const homeSubMenuItems = [
        { label: 'Aktuelles', link: '/#aktuelles' },
        { label: 'Archive', link: '/archive' },
    ];

    const aboutSubMenuItems = [
        { label: 'Kooperationsrat', link: '/about/koop' },
        { label: 'Liturgische Dienste', link: '/about/lit' },
        { label: 'Pastoralteam', link: '/team' },
        { label: 'Pfarreingemeinschaft', link: '/about/gem' }
    ];

    const subItemsEmmeln = [
        { label: 'Unsere Kirche', link: '/emmeln/kirche' },
        { label: 'Pfarrbüro', link: '/emmeln/pburo' },
        { label: 'Pfarrheim', link: '/emmeln/pfarrheim' },
        { label: 'Kindertagesstätte', link: '/kita/emmeln/home' },
        { label: 'Bücherei', link: '/emmeln/bucherei' },
        { label: 'Gremien', link: '/emmeln/kv' },
        { label: 'Vereine/Verbände/Gruppen', link: '/emmeln/kolping' },
        { label: 'Kinder u. Familien', link: '/emmeln/kinder/ek' },
        { label: 'Jugend', link: '/emmeln/jugend/firmung' }
    ];

    const communitySubItems = [
        { label: 'St. Josef Emmeln', link: '/emmeln', subItems: subItemsEmmeln },
        { label: 'St. Marien Tinnen', link: '/tinnen' },
        { label: 'St. Clemens Wesuwe', link: '/wesuwe' },
        { label: 'Herz-Jesu Altharen', link: '/altharen' },
        { label: 'St. Martinus Haren', link: '/haren' }

        ];

    const faithSubMenuItems = [
        { label: 'Subitem 1', link: '/hope/subitem1' },
        { label: 'Subitem 2', link: '/hope/subitem2' },
    ];

    const menuItems = [
        {
            key: 'home',
            label: 'Home',
            route: '/',
            id: 'submenu-home',
            subMenuItems: homeSubMenuItems
        },
        {
            key: 'about',
            route: '/about',
            id: 'submenu-about',
            subMenuItems: aboutSubMenuItems
        },
        {
            key: 'communities',
            route: '/communities',
            id: 'submenu-communities',
            subMenuItems: communitySubItems
        },
        {
            key: 'faith',
            route: '/faith',
            id: 'submenu-faith',
            subMenuItems: faithSubMenuItems
        }
    ];



    return (
        <ul
            onClick={handleClick}
            className={[
                "box-border caret-transparent list-none px-[21px]",
                mobile ? "flex flex-col md:hidden" : "hidden md:flex",
            ].join(" ")}
        >
            <li className="relative text-base box-border caret-transparent block leading-[normal] text-left uppercase w-full md:inline-block md:leading-[50px] md:text-center md:w-auto group">
                <div className="flex items-center">
                    <a
                        href="https://etwah.de/"
                        className="text-zinc-600 border-b-stone-200 border-l-zinc-600 border-r-zinc-600 border-t-zinc-600 box-border caret-transparent block leading-[normal] text-left py-5 border-b md:border-b-zinc-600 md:leading-[50px] md:text-center md:py-0 md:border-b-0 hover:text-teal-700 hover:border-b-teal-700 hover:border-l-teal-700 hover:border-r-teal-700 hover:border-t-teal-700"
                    >
                        Home
                    </a>
                    <button
                        type="button"
                        aria-haspopup="menu"
                        aria-controls="submenu-home"
                        aria-expanded={!!isOpen?.("home")}
                        onClick={(e) => { e.preventDefault(); toggle?.("home"); }}
                        className="ml-1 inline-flex h-6 w-6 items-center justify-center rounded hover:bg-zinc-100 focus:outline-none focus:ring-2 focus:ring-teal-500"
                        title="Untermenü umschalten"
                    >
                        ▾
                    </button>
                </div>
                <ul
                    id="submenu-home"
                    className={[
                        "transition-all duration-200 ease-out",
                        "grid",
                        "md:absolute md:left-0 md:top-[60px] md:min-w-full md:shadow-[rgba(0,0,0,0.2)_0px_2px_2px_0px] md:rounded-bl md:rounded-br md:rounded-tl md:rounded-tr md:z-[999] m-3 md:bg-white",
                        "md:opacity-0 md:translate-y-1 md:invisible",
                        "md:group-hover:visible md:group-hover:opacity-100 md:group-hover:translate-y-0",
                        "md:focus-within:visible md:focus-within:opacity-100 md:focus-within:translate-y-0",
                        "md:grid-rows-[1fr] md:overflow-visible",
                        "box-border caret-transparent leading-[normal] min-w-full text-left z-[999] ml-0 pl-0 rounded-none border-b left-0 top-0"
                    ].join(" ")}
                >
                    <div>
                        <li className="relative text-sm box-border caret-transparent block leading-[normal] text-left w-full md:text-center md:w-auto">
                            <a
                                href="https://etwah.de/#aktuelles"
                                className="text-zinc-600 border-b-stone-100 border-l-zinc-600 border-r-zinc-600 border-t-zinc-600 box-border caret-transparent block text-left text-nowrap py-2.5 border-b md:text-center hover:text-teal-700 hover:border-l-teal-700 hover:border-r-teal-700 hover:border-t-teal-700 px-2"
                            >
                                Aktuelles
                            </a>
                        </li>
                        <li className="relative text-sm box-border caret-transparent block leading-[normal] text-left w-full md:text-center md:w-auto">
                            <a
                                href="https://etwah.de/archive"
                                className="text-zinc-600 box-border caret-transparent block text-left text-nowrap py-2.5 md:text-center hover:text-teal-700 hover:border-teal-700"
                            >
                                Archive
                            </a>
                        </li>
                    </div>
                </ul>
            </li>
            <li className="relative text-base box-border caret-transparent block leading-[normal] text-left uppercase w-full md:inline-block md:leading-[50px] md:text-center md:w-auto group">
                <div className="flex items-center">
                    <a
                        href="https://etwah.de/"
                        className="text-zinc-600 border-b-stone-200 border-l-zinc-600 border-r-zinc-600 border-t-zinc-600 box-border caret-transparent block leading-[normal] text-left px-[25px] py-5 border-b md:border-b-zinc-600 md:leading-[50px] md:text-center md:px-6 md:py-0 md:border-b-0 hover:text-teal-700 hover:border-b-teal-700 hover:border-l-teal-700 hover:border-r-teal-700 hover:border-t-teal-700"
                    >
                        Über uns{" "}
                        <i className="text-[13px] font-black box-border caret-transparent inline-block leading-[13px] text-left font-font_awesome_5_free md:text-center before:accent-auto before:box-border before:caret-transparent before:text-zinc-600 before:text-[13px] before:not-italic before:normal-nums before:font-black before:tracking-[normal] before:leading-[13px] before:list-outside before:list-none before:pointer-events-auto before:text-left before:indent-[0px] before:uppercase before:visible before:border-separate before:font-font_awesome_5_free before:md:text-center"></i>
                    </a>
                    <button
                        type="button"
                        aria-haspopup="menu"
                        aria-controls="submenu-about"
                        aria-expanded={!!isOpen?.("about")}
                        onClick={(e) => { e.preventDefault(); toggle?.("about"); }}
                        className="ml-1 inline-flex h-6 w-6 items-center justify-center rounded hover:bg-zinc-100 focus:outline-none focus:ring-2 focus:ring-teal-500"
                        title="Untermenü umschalten"
                    >
                        ▾
                    </button>
                </div>
                <ul
                    id="submenu-about"
                    className={[
                        "transition-all duration-200 ease-out",
                        "grid",
                        isOpen?.("about") ? "grid-rows-[1fr] opacity-100 translate-y-0" : "grid-rows-[0fr] opacity-0 -translate-y-1",
                        "md:absolute md:left-0 md:top-[60px] md:min-w-full md:shadow-[rgba(0,0,0,0.2)_0px_2px_2px_0px] md:rounded-bl md:rounded-br md:rounded-tl md:rounded-tr md:z-[999] md:bg-white",
                        "md:opacity-0 md:translate-y-1 md:invisible",
                        "md:group-hover:visible md:group-hover:opacity-100 md:group-hover:translate-y-0",
                        "md:focus-within:visible md:focus-within:opacity-100 md:focus-within:translate-y-0",
                        "md:grid-rows-[1fr] md:overflow-visible",
                        "box-border caret-transparent leading-[normal] w-auto text-left z-[999] ml-0 pl-0 rounded-none border-b left-0 top-0"
                    ].join(" ")}>
                    <div>
                    <li className="relative text-sm box-border caret-transparent block leading-[normal] text-left w-full md:text-center md:w-auto">
                        <a
                            href="https://etwah.de/about/koop"
                            className="text-zinc-600 border-b-stone-100 border-l-zinc-600 border-r-zinc-600 border-t-zinc-600 box-border caret-transparent block text-left text-nowrap px-5 py-2.5 border-b md:text-center hover:text-teal-700 hover:border-l-teal-700 hover:border-r-teal-700 hover:border-t-teal-700"
                        >
                            Kooperationsrat
                        </a>
                    </li>
                    <li className="relative text-sm box-border caret-transparent block leading-[normal] text-left w-full md:text-center md:w-auto">
                        <a
                            href="https://etwah.de/about/lit"
                            className="text-zinc-600 border-b-stone-100 border-l-zinc-600 border-r-zinc-600 border-t-zinc-600 box-border caret-transparent block text-left text-nowrap px-5 py-2.5 border-b md:text-center hover:text-teal-700 hover:border-l-teal-700 hover:border-r-teal-700 hover:border-t-teal-700"
                        >
                            Liturgische Dienste
                        </a>
                    </li>
                    <li className="relative text-sm box-border caret-transparent block leading-[normal] text-left w-full md:text-center md:w-auto">
                        <a
                            href="https://etwah.de/team"
                            className="text-zinc-600 border-b-stone-100 border-l-zinc-600 border-r-zinc-600 border-t-zinc-600 box-border caret-transparent block text-left text-nowrap px-5 py-2.5 border-b md:text-center hover:text-teal-700 hover:border-l-teal-700 hover:border-r-teal-700 hover:border-t-teal-700"
                        >
                            Pastoralteam
                        </a>
                    </li>
                    <li className="relative text-sm box-border caret-transparent block leading-[normal] text-left w-full md:text-center md:w-auto">
                        <a
                            href="https://etwah.de/about/gem"
                            className="text-zinc-600 box-border caret-transparent block text-left text-nowrap px-5 py-2.5 md:text-center hover:text-teal-700 hover:border-teal-700"
                        >
                            Pfarreingemeinschaft
                        </a>
                    </li>
                    </div>
                </ul>
            </li>
            <li className="relative text-base box-border caret-transparent block leading-[normal] text-left uppercase w-full md:inline-block md:leading-[50px] md:text-center md:w-auto">
                <a
                    href="https://etwah.de/"
                    className="text-zinc-600 border-b-stone-200 border-l-zinc-600 border-r-zinc-600 border-t-zinc-600 box-border caret-transparent block leading-[normal] text-left px-[25px] py-5 border-b md:border-b-zinc-600 md:leading-[50px] md:text-center md:px-6 md:py-0 md:border-b-0 hover:text-teal-700 hover:border-b-teal-700 hover:border-l-teal-700 hover:border-r-teal-700 hover:border-t-teal-700"
                >
                    Unsere Gemeinden{" "}
                    <i className="text-[13px] font-black box-border caret-transparent inline-block leading-[13px] text-left font-font_awesome_5_free md:text-center before:accent-auto before:box-border before:caret-transparent before:text-zinc-600 before:text-[13px] before:not-italic before:normal-nums before:font-black before:tracking-[normal] before:leading-[13px] before:list-outside before:list-none before:pointer-events-auto before:text-left before:indent-[0px] before:uppercase before:visible before:border-separate before:font-font_awesome_5_free before:md:text-center"></i>
                </a>
                <button
                    type="button"
                    aria-haspopup="menu"
                    aria-controls="submenu-communities"
                    aria-expanded={!!isOpen?.("communities")}
                    onClick={(e) => { e.preventDefault(); toggle?.(""); }}
                    className="ml-1 inline-flex h-6 w-6 items-center justify-center rounded hover:bg-zinc-100 focus:outline-none focus:ring-2 focus:ring-teal-500"
                    title="Untermenü umschalten"
                >
                    ▾
                </button>
                <ul className="static bg-white border-b-stone-200 border-l-stone-500 border-r-stone-500 border-t-stone-500 shadow-none box-border caret-transparent hidden leading-[normal] min-w-full text-left z-[999] ml-0 pl-0 rounded-none border-b -left-6 top-0 md:absolute md:border-b-stone-500 md:shadow-[rgba(0,0,0,0.2)_0px_2px_2px_0px] md:leading-[50px] md:text-center md:ml-[30px] md:rounded-bl md:rounded-br md:rounded-tl md:rounded-tr md:border-b-0 md:top-[60px] before:accent-auto before:box-border before:caret-transparent before:text-stone-500 before:hidden before:text-base before:not-italic before:normal-nums before:font-normal before:h-0 before:tracking-[normal] before:leading-[normal] before:list-outside before:list-none before:pointer-events-none before:absolute before:text-left before:indent-[0px] before:uppercase before:visible before:w-0 before:-ml-2.5 before:-mt-2.5 before:border-t-transparent before:border-b-white before:border-x-transparent before:border-separate before:border-[5px] before:border-solid before:left-2/4 before:font-roboto_condensed before:md:block before:md:leading-[50px] before:md:text-center">
                    <li className="relative text-sm box-border caret-transparent block leading-[normal] text-left w-full md:text-center md:w-auto">
                        <a
                            href="https://etwah.de/"
                            className="text-zinc-600 border-b-stone-100 border-l-zinc-600 border-r-zinc-600 border-t-zinc-600 box-border caret-transparent block text-left text-nowrap px-5 py-2.5 border-b md:text-center hover:text-teal-700 hover:border-l-teal-700 hover:border-r-teal-700 hover:border-t-teal-700"
                        >
                            St. Josef Emmeln{" "}
                            <i className="text-[13px] font-black box-border caret-transparent inline-block leading-[13px] text-left text-nowrap font-font_awesome_5_free md:text-center before:accent-auto before:box-border before:caret-transparent before:text-zinc-600 before:text-[13px] before:not-italic before:normal-nums before:font-black before:tracking-[normal] before:leading-[13px] before:list-outside before:list-none before:pointer-events-auto before:text-left before:indent-[0px] before:uppercase before:text-nowrap before:visible before:border-separate before:font-font_awesome_5_free before:md:text-center"></i>
                        </a>
                        <ul className="static bg-white border-b-stone-200 border-l-stone-500 border-r-stone-500 border-t-stone-500 shadow-none box-border caret-transparent hidden text-left z-[999] ml-0 pl-0 rounded-none border-b left-full top-0 md:absolute md:border-b-stone-500 md:shadow-[rgba(0,0,0,0.2)_0px_2px_2px_0px] md:text-center md:ml-[11px] md:rounded-bl md:rounded-br md:rounded-tl md:rounded-tr md:border-b-0 before:accent-auto before:box-border before:caret-transparent before:text-stone-500 before:hidden before:text-sm before:not-italic before:normal-nums before:font-normal before:h-0 before:tracking-[normal] before:leading-[normal] before:list-outside before:list-none before:pointer-events-none before:absolute before:text-left before:indent-[0px] before:uppercase before:visible before:w-0 before:-ml-2.5 before:mt-[15px] before:border-l-transparent before:border-r-white before:border-y-transparent before:border-separate before:border-[5px] before:border-solid before:left-0 before:font-roboto_condensed before:md:block before:md:text-center">
                            <li className="relative box-border caret-transparent block text-left w-full md:text-center md:w-auto">
                                <a
                                    href="https://etwah.de/emmeln/kirche"
                                    className="text-zinc-600 border-b-stone-100 border-l-zinc-600 border-r-zinc-600 border-t-zinc-600 box-border caret-transparent block text-left text-nowrap px-5 py-2.5 border-b md:text-center hover:text-teal-700 hover:border-l-teal-700 hover:border-r-teal-700 hover:border-t-teal-700"
                                >
                                    Unsere Kirche
                                </a>
                            </li>
                            <li className="relative box-border caret-transparent block text-left w-full md:text-center md:w-auto">
                                <a
                                    href="https://etwah.de/emmeln/pburo"
                                    className="text-zinc-600 border-b-stone-100 border-l-zinc-600 border-r-zinc-600 border-t-zinc-600 box-border caret-transparent block text-left text-nowrap px-5 py-2.5 border-b md:text-center hover:text-teal-700 hover:border-l-teal-700 hover:border-r-teal-700 hover:border-t-teal-700"
                                >
                                    Pfarrbüro
                                </a>
                            </li>
                            <li className="relative box-border caret-transparent block text-left w-full md:text-center md:w-auto">
                                <a
                                    href="https://etwah.de/emmeln/pfarrheim"
                                    className="text-zinc-600 border-b-stone-100 border-l-zinc-600 border-r-zinc-600 border-t-zinc-600 box-border caret-transparent block text-left text-nowrap px-5 py-2.5 border-b md:text-center hover:text-teal-700 hover:border-l-teal-700 hover:border-r-teal-700 hover:border-t-teal-700"
                                >
                                    Pfarrheim
                                </a>
                            </li>
                            <li className="relative box-border caret-transparent block text-left w-full md:text-center md:w-auto">
                                <a
                                    href="https://etwah.de/kita/emmeln/home"
                                    className="text-zinc-600 border-b-stone-100 border-l-zinc-600 border-r-zinc-600 border-t-zinc-600 box-border caret-transparent block text-left text-nowrap px-5 py-2.5 border-b md:text-center hover:text-teal-700 hover:border-l-teal-700 hover:border-r-teal-700 hover:border-t-teal-700"
                                >
                                    Kindertagesstätte
                                </a>
                            </li>
                            <li className="relative box-border caret-transparent block text-left w-full md:text-center md:w-auto">
                                <a
                                    href="https://etwah.de/emmeln/bucherei"
                                    className="text-zinc-600 border-b-stone-100 border-l-zinc-600 border-r-zinc-600 border-t-zinc-600 box-border caret-transparent block text-left text-nowrap px-5 py-2.5 border-b md:text-center hover:text-teal-700 hover:border-l-teal-700 hover:border-r-teal-700 hover:border-t-teal-700"
                                >
                                    Bücherei
                                </a>
                            </li>
                            <li className="relative box-border caret-transparent block text-left w-full md:text-center md:w-auto">
                                <a
                                    href="https://etwah.de/emmeln/kv"
                                    className="text-zinc-600 border-b-stone-100 border-l-zinc-600 border-r-zinc-600 border-t-zinc-600 box-border caret-transparent block text-left text-nowrap px-5 py-2.5 border-b md:text-center hover:text-teal-700 hover:border-l-teal-700 hover:border-r-teal-700 hover:border-t-teal-700"
                                >
                                    Gremien{" "}
                                </a>
                            </li>
                            <li className="relative box-border caret-transparent block text-left w-full md:text-center md:w-auto">
                                <a
                                    href="https://etwah.de/emmeln/kolping"
                                    className="text-zinc-600 border-b-stone-100 border-l-zinc-600 border-r-zinc-600 border-t-zinc-600 box-border caret-transparent block text-left text-nowrap px-5 py-2.5 border-b md:text-center hover:text-teal-700 hover:border-l-teal-700 hover:border-r-teal-700 hover:border-t-teal-700"
                                >
                                    Vereine/Verbände/Gruppen
                                </a>
                            </li>
                            <li className="relative box-border caret-transparent block text-left w-full md:text-center md:w-auto">
                                <a
                                    href="https://etwah.de/emmeln/kinder/ek"
                                    className="text-zinc-600 border-b-stone-100 border-l-zinc-600 border-r-zinc-600 border-t-zinc-600 box-border caret-transparent block text-left text-nowrap px-5 py-2.5 border-b md:text-center hover:text-teal-700 hover:border-l-teal-700 hover:border-r-teal-700 hover:border-t-teal-700"
                                >
                                    Kinder u. Familien
                                </a>
                            </li>
                            <li className="relative box-border caret-transparent block text-left w-full md:text-center md:w-auto">
                                <a
                                    href="https://etwah.de/emmeln/jugend/firmung"
                                    className="text-zinc-600 box-border caret-transparent block text-left text-nowrap px-5 py-2.5 md:text-center hover:text-teal-700 hover:border-teal-700"
                                >
                                    Jugend
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="relative text-sm box-border caret-transparent block leading-[normal] text-left w-full md:text-center md:w-auto">
                        <a
                            href="https://etwah.de/"
                            className="text-zinc-600 border-b-stone-100 border-l-zinc-600 border-r-zinc-600 border-t-zinc-600 box-border caret-transparent block text-left text-nowrap px-5 py-2.5 border-b md:text-center hover:text-teal-700 hover:border-l-teal-700 hover:border-r-teal-700 hover:border-t-teal-700"
                        >
                            St. Marien Tinnen{" "}
                            <i className="text-[13px] font-black box-border caret-transparent inline-block leading-[13px] text-left text-nowrap font-font_awesome_5_free md:text-center before:accent-auto before:box-border before:caret-transparent before:text-zinc-600 before:text-[13px] before:not-italic before:normal-nums before:font-black before:tracking-[normal] before:leading-[13px] before:list-outside before:list-none before:pointer-events-auto before:text-left before:indent-[0px] before:uppercase before:text-nowrap before:visible before:border-separate before:font-font_awesome_5_free before:md:text-center"></i>
                        </a>
                        <ul className="static bg-white border-b-stone-200 border-l-stone-500 border-r-stone-500 border-t-stone-500 shadow-none box-border caret-transparent hidden text-left z-[999] ml-0 pl-0 rounded-none border-b left-full top-0 md:absolute md:border-b-stone-500 md:shadow-[rgba(0,0,0,0.2)_0px_2px_2px_0px] md:text-center md:ml-[11px] md:rounded-bl md:rounded-br md:rounded-tl md:rounded-tr md:border-b-0 before:accent-auto before:box-border before:caret-transparent before:text-stone-500 before:hidden before:text-sm before:not-italic before:normal-nums before:font-normal before:h-0 before:tracking-[normal] before:leading-[normal] before:list-outside before:list-none before:pointer-events-none before:absolute before:text-left before:indent-[0px] before:uppercase before:visible before:w-0 before:-ml-2.5 before:mt-[15px] before:border-l-transparent before:border-r-white before:border-y-transparent before:border-separate before:border-[5px] before:border-solid before:left-0 before:font-roboto_condensed before:md:block before:md:text-center">
                            <li className="relative box-border caret-transparent block text-left w-full md:text-center md:w-auto">
                                <a
                                    href="https://etwah.de/tinnen/portrat"
                                    className="text-zinc-600 border-b-stone-100 border-l-zinc-600 border-r-zinc-600 border-t-zinc-600 box-border caret-transparent block text-left text-nowrap px-5 py-2.5 border-b md:text-center hover:text-teal-700 hover:border-l-teal-700 hover:border-r-teal-700 hover:border-t-teal-700"
                                >
                                    Porträt
                                </a>
                            </li>
                            <li className="relative box-border caret-transparent block text-left w-full md:text-center md:w-auto">
                                <a
                                    href="https://etwah.de/tinnen/kirche"
                                    className="text-zinc-600 border-b-stone-100 border-l-zinc-600 border-r-zinc-600 border-t-zinc-600 box-border caret-transparent block text-left text-nowrap px-5 py-2.5 border-b md:text-center hover:text-teal-700 hover:border-l-teal-700 hover:border-r-teal-700 hover:border-t-teal-700"
                                >
                                    Unsere Kirche
                                </a>
                            </li>
                            <li className="relative box-border caret-transparent block text-left w-full md:text-center md:w-auto">
                                <a
                                    href="https://etwah.de/tinnen/pburo"
                                    className="text-zinc-600 border-b-stone-100 border-l-zinc-600 border-r-zinc-600 border-t-zinc-600 box-border caret-transparent block text-left text-nowrap px-5 py-2.5 border-b md:text-center hover:text-teal-700 hover:border-l-teal-700 hover:border-r-teal-700 hover:border-t-teal-700"
                                >
                                    Pfarrbüro
                                </a>
                            </li>
                            <li className="relative box-border caret-transparent block text-left w-full md:text-center md:w-auto">
                                <a
                                    href="https://etwah.de/tinnen/pheim"
                                    className="text-zinc-600 border-b-stone-100 border-l-zinc-600 border-r-zinc-600 border-t-zinc-600 box-border caret-transparent block text-left text-nowrap px-5 py-2.5 border-b md:text-center hover:text-teal-700 hover:border-l-teal-700 hover:border-r-teal-700 hover:border-t-teal-700"
                                >
                                    Pfarrheim
                                </a>
                            </li>
                            <li className="relative box-border caret-transparent block text-left w-full md:text-center md:w-auto">
                                <a
                                    href="https://etwah.de/tinnen/kv"
                                    className="text-zinc-600 border-b-stone-100 border-l-zinc-600 border-r-zinc-600 border-t-zinc-600 box-border caret-transparent block text-left text-nowrap px-5 py-2.5 border-b md:text-center hover:text-teal-700 hover:border-l-teal-700 hover:border-r-teal-700 hover:border-t-teal-700"
                                >
                                    Gremien
                                </a>
                            </li>
                            <li className="relative box-border caret-transparent block text-left w-full md:text-center md:w-auto">
                                <a
                                    href="https://etwah.de/tinnen/kinder/ek"
                                    className="text-zinc-600 border-b-stone-100 border-l-zinc-600 border-r-zinc-600 border-t-zinc-600 box-border caret-transparent block text-left text-nowrap px-5 py-2.5 border-b md:text-center hover:text-teal-700 hover:border-l-teal-700 hover:border-r-teal-700 hover:border-t-teal-700"
                                >
                                    Kinder u. Familien
                                </a>
                            </li>
                            <li className="relative box-border caret-transparent block text-left w-full md:text-center md:w-auto">
                                <a
                                    href="https://etwah.de/tinnen/jugend/firmung"
                                    className="text-zinc-600 border-b-stone-100 border-l-zinc-600 border-r-zinc-600 border-t-zinc-600 box-border caret-transparent block text-left text-nowrap px-5 py-2.5 border-b md:text-center hover:text-teal-700 hover:border-l-teal-700 hover:border-r-teal-700 hover:border-t-teal-700"
                                >
                                    Jugend
                                </a>
                            </li>
                            <li className="relative box-border caret-transparent block text-left w-full md:text-center md:w-auto">
                                <a
                                    href="https://etwah.de/tinnen/ld"
                                    className="text-zinc-600 border-b-stone-100 border-l-zinc-600 border-r-zinc-600 border-t-zinc-600 box-border caret-transparent block text-left text-nowrap px-5 py-2.5 border-b md:text-center hover:text-teal-700 hover:border-l-teal-700 hover:border-r-teal-700 hover:border-t-teal-700"
                                >
                                    Liturgischer Dienst
                                </a>
                            </li>
                            <li className="relative box-border caret-transparent block text-left w-full md:text-center md:w-auto">
                                <a
                                    href="https://etwah.de/tinnen/djk"
                                    className="text-zinc-600 box-border caret-transparent block text-left text-nowrap px-5 py-2.5 md:text-center hover:text-teal-700 hover:border-teal-700"
                                >
                                    Vereine/Verbände/Gruppen
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="relative text-sm box-border caret-transparent block leading-[normal] text-left w-full md:text-center md:w-auto">
                        <a
                            href="https://etwah.de/"
                            className="text-zinc-600 border-b-stone-100 border-l-zinc-600 border-r-zinc-600 border-t-zinc-600 box-border caret-transparent block text-left text-nowrap px-5 py-2.5 border-b md:text-center hover:text-teal-700 hover:border-l-teal-700 hover:border-r-teal-700 hover:border-t-teal-700"
                        >
                            St. Clemens Wesuwe{" "}
                            <i className="text-[13px] font-black box-border caret-transparent inline-block leading-[13px] text-left text-nowrap font-font_awesome_5_free md:text-center before:accent-auto before:box-border before:caret-transparent before:text-zinc-600 before:text-[13px] before:not-italic before:normal-nums before:font-black before:tracking-[normal] before:leading-[13px] before:list-outside before:list-none before:pointer-events-auto before:text-left before:indent-[0px] before:uppercase before:text-nowrap before:visible before:border-separate before:font-font_awesome_5_free before:md:text-center"></i>
                        </a>
                        <ul className="static bg-white border-b-stone-200 border-l-stone-500 border-r-stone-500 border-t-stone-500 shadow-none box-border caret-transparent hidden text-left z-[999] ml-0 pl-0 rounded-none border-b left-full top-0 md:absolute md:border-b-stone-500 md:shadow-[rgba(0,0,0,0.2)_0px_2px_2px_0px] md:text-center md:ml-[11px] md:rounded-bl md:rounded-br md:rounded-tl md:rounded-tr md:border-b-0 before:accent-auto before:box-border before:caret-transparent before:text-stone-500 before:hidden before:text-sm before:not-italic before:normal-nums before:font-normal before:h-0 before:tracking-[normal] before:leading-[normal] before:list-outside before:list-none before:pointer-events-none before:absolute before:text-left before:indent-[0px] before:uppercase before:visible before:w-0 before:-ml-2.5 before:mt-[15px] before:border-l-transparent before:border-r-white before:border-y-transparent before:border-separate before:border-[5px] before:border-solid before:left-0 before:font-roboto_condensed before:md:block before:md:text-center">
                            <li className="relative box-border caret-transparent block text-left w-full md:text-center md:w-auto">
                                <a
                                    href="https://etwah.de/wesuwe/kirche"
                                    className="text-zinc-600 border-b-stone-100 border-l-zinc-600 border-r-zinc-600 border-t-zinc-600 box-border caret-transparent block text-left text-nowrap px-5 py-2.5 border-b md:text-center hover:text-teal-700 hover:border-l-teal-700 hover:border-r-teal-700 hover:border-t-teal-700"
                                >
                                    Kirche St. Clemens
                                </a>
                            </li>
                            <li className="relative box-border caret-transparent block text-left w-full md:text-center md:w-auto">
                                <a
                                    href="https://etwah.de/wesuwe/pburo"
                                    className="text-zinc-600 border-b-stone-100 border-l-zinc-600 border-r-zinc-600 border-t-zinc-600 box-border caret-transparent block text-left text-nowrap px-5 py-2.5 border-b md:text-center hover:text-teal-700 hover:border-l-teal-700 hover:border-r-teal-700 hover:border-t-teal-700"
                                >
                                    Pfarrbüro
                                </a>
                            </li>
                            <li className="relative box-border caret-transparent block text-left w-full md:text-center md:w-auto">
                                <a
                                    href="https://etwah.de/wesuwe/ph"
                                    className="text-zinc-600 border-b-stone-100 border-l-zinc-600 border-r-zinc-600 border-t-zinc-600 box-border caret-transparent block text-left text-nowrap px-5 py-2.5 border-b md:text-center hover:text-teal-700 hover:border-l-teal-700 hover:border-r-teal-700 hover:border-t-teal-700"
                                >
                                    Pfarrheim
                                </a>
                            </li>
                            <li className="relative box-border caret-transparent block text-left w-full md:text-center md:w-auto">
                                <a
                                    href="https://etwah.de/wesuwe/jugend/firmung"
                                    className="text-zinc-600 border-b-stone-100 border-l-zinc-600 border-r-zinc-600 border-t-zinc-600 box-border caret-transparent block text-left text-nowrap px-5 py-2.5 border-b md:text-center hover:text-teal-700 hover:border-l-teal-700 hover:border-r-teal-700 hover:border-t-teal-700"
                                >
                                    Jugend
                                </a>
                            </li>
                            <li className="relative box-border caret-transparent block text-left w-full md:text-center md:w-auto">
                                <a
                                    href="https://etwah.de/wesuwe/kinder/ek"
                                    className="text-zinc-600 border-b-stone-100 border-l-zinc-600 border-r-zinc-600 border-t-zinc-600 box-border caret-transparent block text-left text-nowrap px-5 py-2.5 border-b md:text-center hover:text-teal-700 hover:border-l-teal-700 hover:border-r-teal-700 hover:border-t-teal-700"
                                >
                                    Kinder u. Familien
                                </a>
                            </li>
                            <li className="relative box-border caret-transparent block text-left w-full md:text-center md:w-auto">
                                <a
                                    href="https://etwah.de/wesuwe/kita"
                                    className="text-zinc-600 border-b-stone-100 border-l-zinc-600 border-r-zinc-600 border-t-zinc-600 box-border caret-transparent block text-left text-nowrap px-5 py-2.5 border-b md:text-center hover:text-teal-700 hover:border-l-teal-700 hover:border-r-teal-700 hover:border-t-teal-700"
                                >
                                    Kindertagesstätte St. Clemens
                                </a>
                            </li>
                            <li className="relative box-border caret-transparent block text-left w-full md:text-center md:w-auto">
                                <a
                                    href="https://etwah.de/wesuwe/bucherei"
                                    className="text-zinc-600 border-b-stone-100 border-l-zinc-600 border-r-zinc-600 border-t-zinc-600 box-border caret-transparent block text-left text-nowrap px-5 py-2.5 border-b md:text-center hover:text-teal-700 hover:border-l-teal-700 hover:border-r-teal-700 hover:border-t-teal-700"
                                >
                                    Bücherei
                                </a>
                            </li>
                            <li className="relative box-border caret-transparent block text-left w-full md:text-center md:w-auto">
                                <a
                                    href="https://etwah.de/wesuwe/kv"
                                    className="text-zinc-600 border-b-stone-100 border-l-zinc-600 border-r-zinc-600 border-t-zinc-600 box-border caret-transparent block text-left text-nowrap px-5 py-2.5 border-b md:text-center hover:text-teal-700 hover:border-l-teal-700 hover:border-r-teal-700 hover:border-t-teal-700"
                                >
                                    Gremien
                                </a>
                            </li>
                            <li className="relative box-border caret-transparent block text-left w-full md:text-center md:w-auto">
                                <a
                                    href="https://etwah.de/wesuwe/ld"
                                    className="text-zinc-600 border-b-stone-100 border-l-zinc-600 border-r-zinc-600 border-t-zinc-600 box-border caret-transparent block text-left text-nowrap px-5 py-2.5 border-b md:text-center hover:text-teal-700 hover:border-l-teal-700 hover:border-r-teal-700 hover:border-t-teal-700"
                                >
                                    Liturgische Dienste
                                </a>
                            </li>
                            <li className="relative box-border caret-transparent block text-left w-full md:text-center md:w-auto">
                                <a
                                    href="https://etwah.de/wesuwe/kolping"
                                    className="text-zinc-600 box-border caret-transparent block text-left text-nowrap px-5 py-2.5 md:text-center hover:text-teal-700 hover:border-teal-700"
                                >
                                    Vereine/Verbände/Grupen
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="relative text-sm box-border caret-transparent block leading-[normal] text-left w-full md:text-center md:w-auto">
                        <a
                            href="https://etwah.de/"
                            className="text-zinc-600 border-b-stone-100 border-l-zinc-600 border-r-zinc-600 border-t-zinc-600 box-border caret-transparent block text-left text-nowrap px-5 py-2.5 border-b md:text-center hover:text-teal-700 hover:border-l-teal-700 hover:border-r-teal-700 hover:border-t-teal-700"
                        >
                            Herz-Jesu Altharen{" "}
                            <i className="text-[13px] font-black box-border caret-transparent inline-block leading-[13px] text-left text-nowrap font-font_awesome_5_free md:text-center before:accent-auto before:box-border before:caret-transparent before:text-zinc-600 before:text-[13px] before:not-italic before:normal-nums before:font-black before:tracking-[normal] before:leading-[13px] before:list-outside before:list-none before:pointer-events-auto before:text-left before:indent-[0px] before:uppercase before:text-nowrap before:visible before:border-separate before:font-font_awesome_5_free before:md:text-center"></i>
                        </a>
                        <ul className="static bg-white border-b-stone-200 border-l-stone-500 border-r-stone-500 border-t-stone-500 shadow-none box-border caret-transparent hidden text-left z-[999] ml-0 pl-0 rounded-none border-b left-full top-0 md:absolute md:border-b-stone-500 md:shadow-[rgba(0,0,0,0.2)_0px_2px_2px_0px] md:text-center md:ml-[11px] md:rounded-bl md:rounded-br md:rounded-tl md:rounded-tr md:border-b-0 before:accent-auto before:box-border before:caret-transparent before:text-stone-500 before:hidden before:text-sm before:not-italic before:normal-nums before:font-normal before:h-0 before:tracking-[normal] before:leading-[normal] before:list-outside before:list-none before:pointer-events-none before:absolute before:text-left before:indent-[0px] before:uppercase before:visible before:w-0 before:-ml-2.5 before:mt-[15px] before:border-l-transparent before:border-r-white before:border-y-transparent before:border-separate before:border-[5px] before:border-solid before:left-0 before:font-roboto_condensed before:md:block before:md:text-center">
                            <li className="relative box-border caret-transparent block text-left w-full md:text-center md:w-auto">
                                <a
                                    href="https://etwah.de/altharen/portrat"
                                    className="text-zinc-600 border-b-stone-100 border-l-zinc-600 border-r-zinc-600 border-t-zinc-600 box-border caret-transparent block text-left text-nowrap px-5 py-2.5 border-b md:text-center hover:text-teal-700 hover:border-l-teal-700 hover:border-r-teal-700 hover:border-t-teal-700"
                                >
                                    Porträt
                                </a>
                            </li>
                            <li className="relative box-border caret-transparent block text-left w-full md:text-center md:w-auto">
                                <a
                                    href="https://etwah.de/altharen/bucherei"
                                    className="text-zinc-600 border-b-stone-100 border-l-zinc-600 border-r-zinc-600 border-t-zinc-600 box-border caret-transparent block text-left text-nowrap px-5 py-2.5 border-b md:text-center hover:text-teal-700 hover:border-l-teal-700 hover:border-r-teal-700 hover:border-t-teal-700"
                                >
                                    Bücherei
                                </a>
                            </li>
                            <li className="relative box-border caret-transparent block text-left w-full md:text-center md:w-auto">
                                <a
                                    href="https://etwah.de/altharen/kv"
                                    className="text-zinc-600 border-b-stone-100 border-l-zinc-600 border-r-zinc-600 border-t-zinc-600 box-border caret-transparent block text-left text-nowrap px-5 py-2.5 border-b md:text-center hover:text-teal-700 hover:border-l-teal-700 hover:border-r-teal-700 hover:border-t-teal-700"
                                >
                                    Gremien
                                </a>
                            </li>
                            <li className="relative box-border caret-transparent block text-left w-full md:text-center md:w-auto">
                                <a
                                    href="https://etwah.de/altharen/jugend/dpsg"
                                    className="text-zinc-600 border-b-stone-100 border-l-zinc-600 border-r-zinc-600 border-t-zinc-600 box-border caret-transparent block text-left text-nowrap px-5 py-2.5 border-b md:text-center hover:text-teal-700 hover:border-l-teal-700 hover:border-r-teal-700 hover:border-t-teal-700"
                                >
                                    Jugend
                                </a>
                            </li>
                            <li className="relative box-border caret-transparent block text-left w-full md:text-center md:w-auto">
                                <a
                                    href="https://etwah.de/altharen/kinder/ek"
                                    className="text-zinc-600 border-b-stone-100 border-l-zinc-600 border-r-zinc-600 border-t-zinc-600 box-border caret-transparent block text-left text-nowrap px-5 py-2.5 border-b md:text-center hover:text-teal-700 hover:border-l-teal-700 hover:border-r-teal-700 hover:border-t-teal-700"
                                >
                                    Kinder u. Familien
                                </a>
                            </li>
                            <li className="relative box-border caret-transparent block text-left w-full md:text-center md:w-auto">
                                <a
                                    href="https://etwah.de/altharen/kirche"
                                    className="text-zinc-600 border-b-stone-100 border-l-zinc-600 border-r-zinc-600 border-t-zinc-600 box-border caret-transparent block text-left text-nowrap px-5 py-2.5 border-b md:text-center hover:text-teal-700 hover:border-l-teal-700 hover:border-r-teal-700 hover:border-t-teal-700"
                                >
                                    Unsere Kirche
                                </a>
                            </li>
                            <li className="relative box-border caret-transparent block text-left w-full md:text-center md:w-auto">
                                <a
                                    href="https://etwah.de/altharen/pburo"
                                    className="text-zinc-600 border-b-stone-100 border-l-zinc-600 border-r-zinc-600 border-t-zinc-600 box-border caret-transparent block text-left text-nowrap px-5 py-2.5 border-b md:text-center hover:text-teal-700 hover:border-l-teal-700 hover:border-r-teal-700 hover:border-t-teal-700"
                                >
                                    Pfarrbüro
                                </a>
                            </li>
                            <li className="relative box-border caret-transparent block text-left w-full md:text-center md:w-auto">
                                <a
                                    href="https://etwah.de/altharen/ph"
                                    className="text-zinc-600 border-b-stone-100 border-l-zinc-600 border-r-zinc-600 border-t-zinc-600 box-border caret-transparent block text-left text-nowrap px-5 py-2.5 border-b md:text-center hover:text-teal-700 hover:border-l-teal-700 hover:border-r-teal-700 hover:border-t-teal-700"
                                >
                                    Pfarrheim
                                </a>
                            </li>
                            <li className="relative box-border caret-transparent block text-left w-full md:text-center md:w-auto">
                                <a
                                    href="https://etwah.de/altharen/kita"
                                    className="text-zinc-600 border-b-stone-100 border-l-zinc-600 border-r-zinc-600 border-t-zinc-600 box-border caret-transparent block text-left text-nowrap px-5 py-2.5 border-b md:text-center hover:text-teal-700 hover:border-l-teal-700 hover:border-r-teal-700 hover:border-t-teal-700"
                                >
                                    Kindertagesstätte St. Anna
                                </a>
                            </li>
                            <li className="relative box-border caret-transparent block text-left w-full md:text-center md:w-auto">
                                <a
                                    href="https://etwah.de/altharen/kolping"
                                    className="text-zinc-600 box-border caret-transparent block text-left text-nowrap px-5 py-2.5 md:text-center hover:text-teal-700 hover:border-teal-700"
                                >
                                    Vereine/Verbände/Gruppen
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="relative text-sm box-border caret-transparent block leading-[normal] text-left w-full md:text-center md:w-auto">
                        <a
                            href="https://etwah.de/"
                            className="text-zinc-600 box-border caret-transparent block text-left text-nowrap px-5 py-2.5 md:text-center hover:text-teal-700 hover:border-teal-700"
                        >
                            St. Martinus Haren{" "}
                            <i className="text-[13px] font-black box-border caret-transparent inline-block leading-[13px] text-left text-nowrap font-font_awesome_5_free md:text-center before:accent-auto before:box-border before:caret-transparent before:text-zinc-600 before:text-[13px] before:not-italic before:normal-nums before:font-black before:tracking-[normal] before:leading-[13px] before:list-outside before:list-none before:pointer-events-auto before:text-left before:indent-[0px] before:uppercase before:text-nowrap before:visible before:border-separate before:font-font_awesome_5_free before:md:text-center"></i>
                        </a>
                        <ul className="static bg-white border-b-stone-200 border-l-stone-500 border-r-stone-500 border-t-stone-500 shadow-none box-border caret-transparent hidden text-left z-[999] ml-0 px-0 rounded-none border-b left-full top-0 md:absolute md:border-b-stone-500 md:shadow-[rgba(0,0,0,0.2)_0px_2px_2px_0px] md:text-center md:ml-2.5 md:pr-5 md:rounded-bl md:rounded-br md:rounded-tl md:rounded-tr md:border-b-0 before:accent-auto before:box-border before:caret-transparent before:text-stone-500 before:hidden before:text-sm before:not-italic before:normal-nums before:font-normal before:h-0 before:tracking-[normal] before:leading-[normal] before:list-outside before:list-none before:pointer-events-none before:absolute before:text-left before:indent-[0px] before:uppercase before:visible before:w-0 before:-ml-2.5 before:mt-[15px] before:border-l-transparent before:border-r-white before:border-y-transparent before:border-separate before:border-[5px] before:border-solid before:left-0 before:font-roboto_condensed before:md:block before:md:text-center">
                            <li className="relative box-border caret-transparent block text-left w-full md:text-center md:w-auto">
                                <a
                                    href="https://etwah.de/haren/portrat"
                                    className="text-zinc-600 box-border caret-transparent block text-left text-nowrap px-5 py-2.5 md:text-center hover:text-teal-700 hover:border-teal-700"
                                >
                                    Überblick
                                </a>
                            </li>
                            <li className="relative box-border caret-transparent block text-left w-full md:text-center md:w-auto">
                                <a
                                    href="https://etwah.de/haren/bucherei"
                                    className="text-zinc-600 box-border caret-transparent block text-left text-nowrap px-5 py-2.5 md:text-center hover:text-teal-700 hover:border-teal-700"
                                >
                                    Bücherei
                                </a>
                            </li>
                            <li className="relative box-border caret-transparent block text-left w-full md:text-center md:w-auto">
                                <a
                                    href="https://etwah.de/haren/kv"
                                    className="text-zinc-600 box-border caret-transparent block text-left text-nowrap px-5 py-2.5 md:text-center hover:text-teal-700 hover:border-teal-700"
                                >
                                    Gremien
                                </a>
                            </li>
                            <li className="relative box-border caret-transparent block text-left w-full md:text-center md:w-auto">
                                <a
                                    href="https://etwah.de/haren/jugend/dpsg"
                                    className="text-zinc-600 box-border caret-transparent block text-left text-nowrap px-5 py-2.5 md:text-center hover:text-teal-700 hover:border-teal-700"
                                >
                                    Jugend
                                </a>
                            </li>
                            <li className="relative box-border caret-transparent block text-left w-full md:text-center md:w-auto">
                                <a
                                    href="https://etwah.de/haren/kirche"
                                    className="text-zinc-600 box-border caret-transparent block text-left text-nowrap px-5 py-2.5 md:text-center hover:text-teal-700 hover:border-teal-700"
                                >
                                    St. Martinus Kirche
                                </a>
                            </li>
                            <li className="relative box-border caret-transparent block text-left w-full md:text-center md:w-auto">
                                <a
                                    href="https://etwah.de/haren/kinder/ek"
                                    className="text-zinc-600 box-border caret-transparent block text-left text-nowrap px-5 py-2.5 md:text-center hover:text-teal-700 hover:border-teal-700"
                                >
                                    Kinder u. Familien
                                </a>
                            </li>
                            <li className="relative box-border caret-transparent block text-left w-full md:text-center md:w-auto">
                                <a
                                    href="https://etwah.de/haren/kitae"
                                    className="text-zinc-600 box-border caret-transparent block text-left text-nowrap px-5 py-2.5 md:text-center hover:text-teal-700 hover:border-teal-700"
                                >
                                    Kindertagesstätten
                                </a>
                            </li>
                            <li className="relative box-border caret-transparent block text-left w-full md:text-center md:w-auto">
                                <a
                                    href="https://etwah.de/haren/pburo"
                                    className="text-zinc-600 box-border caret-transparent block text-left text-nowrap px-5 py-2.5 md:text-center hover:text-teal-700 hover:border-teal-700"
                                >
                                    Pfarrbüro
                                </a>
                            </li>
                            <li className="relative box-border caret-transparent block text-left w-full md:text-center md:w-auto">
                                <a
                                    href="https://etwah.de/haren/kolping"
                                    className="text-zinc-600 box-border caret-transparent block text-left text-nowrap px-5 py-2.5 md:text-center hover:text-teal-700 hover:border-teal-700"
                                >
                                    Vereine/Verbände/Gruppen
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li className="relative text-base box-border caret-transparent block leading-[normal] text-left uppercase w-full md:inline-block md:leading-[50px] md:text-center md:w-auto">
                <a
                    href="https://etwah.de/"
                    className="text-zinc-600 border-b-stone-200 border-l-zinc-600 border-r-zinc-600 border-t-zinc-600 box-border caret-transparent block leading-[normal] text-left px-[25px] py-5 border-b md:border-b-zinc-600 md:leading-[50px] md:text-center md:px-6 md:py-0 md:border-b-0 hover:text-teal-700 hover:border-b-teal-700 hover:border-l-teal-700 hover:border-r-teal-700 hover:border-t-teal-700"
                >
                    Glauben und Leben{" "}
                    <i className="text-[13px] font-black box-border caret-transparent inline-block leading-[13px] text-left font-font_awesome_5_free md:text-center before:accent-auto before:box-border before:caret-transparent before:text-zinc-600 before:text-[13px] before:not-italic before:normal-nums before:font-black before:tracking-[normal] before:leading-[13px] before:list-outside before:list-none before:pointer-events-auto before:text-left before:indent-[0px] before:uppercase before:visible before:border-separate before:font-font_awesome_5_free before:md:text-center"></i>
                </a>
                <ul className="static bg-white border-b-stone-200 border-l-stone-500 border-r-stone-500 border-t-stone-500 shadow-none box-border caret-transparent hidden left-[-21px] leading-[normal] min-w-full text-left z-[999] ml-0 px-0 rounded-none border-b top-0 md:absolute md:border-b-stone-500 md:shadow-[rgba(0,0,0,0.2)_0px_2px_2px_0px] md:leading-[50px] md:text-center md:ml-2.5 md:pr-5 md:rounded-bl md:rounded-br md:rounded-tl md:rounded-tr md:border-b-0 md:top-[60px] before:accent-auto before:box-border before:caret-transparent before:text-stone-500 before:hidden before:text-base before:not-italic before:normal-nums before:font-normal before:h-0 before:tracking-[normal] before:leading-[normal] before:list-outside before:list-none before:pointer-events-none before:absolute before:text-left before:indent-[0px] before:uppercase before:visible before:w-0 before:-ml-2.5 before:-mt-2.5 before:border-t-transparent before:border-b-white before:border-x-transparent before:border-separate before:border-[5px] before:border-solid before:left-2/4 before:font-roboto_condensed before:md:block before:md:leading-[50px] before:md:text-center">
                    <li className="relative text-sm box-border caret-transparent block leading-[normal] text-left w-full md:text-center md:w-auto">
                        <a
                            href="https://etwah.de/glauben/eintritt"
                            className="text-zinc-600 border-b-stone-100 border-l-zinc-600 border-r-zinc-600 border-t-zinc-600 box-border caret-transparent block text-left text-nowrap px-5 py-2.5 border-b md:text-center hover:text-teal-700 hover:border-l-teal-700 hover:border-r-teal-700 hover:border-t-teal-700"
                        >
                            Eintritt/Wiedereintritt
                        </a>
                    </li>
                    <li className="relative text-sm box-border caret-transparent block leading-[normal] text-left w-full md:text-center md:w-auto">
                        <a
                            href="https://www.reliki.de/"
                            className="text-zinc-600 border-b-stone-100 border-l-zinc-600 border-r-zinc-600 border-t-zinc-600 box-border caret-transparent block text-left text-nowrap px-5 py-2.5 border-b md:text-center hover:text-teal-700 hover:border-l-teal-700 hover:border-r-teal-700 hover:border-t-teal-700"
                        >
                            Kinderseite des Bistums
                        </a>
                    </li>
                    <li className="relative text-sm box-border caret-transparent block leading-[normal] text-left w-full md:text-center md:w-auto">
                        <a
                            href="https://etwah.de/glauben/okumene"
                            className="text-zinc-600 border-b-stone-100 border-l-zinc-600 border-r-zinc-600 border-t-zinc-600 box-border caret-transparent block text-left text-nowrap px-5 py-2.5 border-b md:text-center hover:text-teal-700 hover:border-l-teal-700 hover:border-r-teal-700 hover:border-t-teal-700"
                        >
                            Ökumene
                        </a>
                    </li>
                    <li className="relative text-sm box-border caret-transparent block leading-[normal] text-left w-full md:text-center md:w-auto">
                        <a
                            href="https://etwah.de/"
                            className="text-zinc-600 box-border caret-transparent block text-left text-nowrap px-5 py-2.5 md:text-center hover:text-teal-700 hover:border-teal-700"
                        >
                            Projekte{" "}
                            <i className="text-[13px] font-black box-border caret-transparent inline-block leading-[13px] text-left text-nowrap font-font_awesome_5_free md:text-center before:accent-auto before:box-border before:caret-transparent before:text-zinc-600 before:text-[13px] before:not-italic before:normal-nums before:font-black before:tracking-[normal] before:leading-[13px] before:list-outside before:list-none before:pointer-events-auto before:text-left before:indent-[0px] before:uppercase before:text-nowrap before:visible before:border-separate before:font-font_awesome_5_free before:md:text-center"></i>
                        </a>
                        <ul className="static bg-white border-b-stone-200 border-l-stone-500 border-r-stone-500 border-t-stone-500 shadow-none box-border caret-transparent hidden text-left z-[999] ml-0 px-0 rounded-none border-b left-full top-0 md:absolute md:border-b-stone-500 md:shadow-[rgba(0,0,0,0.2)_0px_2px_2px_0px] md:text-center md:ml-2.5 md:pr-5 md:rounded-bl md:rounded-br md:rounded-tl md:rounded-tr md:border-b-0 before:accent-auto before:box-border before:caret-transparent before:text-stone-500 before:hidden before:text-sm before:not-italic before:normal-nums before:font-normal before:h-0 before:tracking-[normal] before:leading-[normal] before:list-outside before:list-none before:pointer-events-none before:absolute before:text-left before:indent-[0px] before:uppercase before:visible before:w-0 before:-ml-2.5 before:mt-[15px] before:border-l-transparent before:border-r-white before:border-y-transparent before:border-separate before:border-[5px] before:border-solid before:left-0 before:font-roboto_condensed before:md:block before:md:text-center">
                            <li className="relative box-border caret-transparent block text-left w-full md:text-center md:w-auto">
                                <a
                                    href="https://etwah.de/projekte/cafe"
                                    className="text-zinc-600 box-border caret-transparent block text-left text-nowrap px-5 py-2.5 md:text-center hover:text-teal-700 hover:border-teal-700"
                                >
                                    Offenes Nähcafe
                                </a>
                            </li>
                            <li className="relative box-border caret-transparent block text-left w-full md:text-center md:w-auto">
                                <a
                                    href="https://etwah.de/projekte/schule"
                                    className="text-zinc-600 box-border caret-transparent block text-left text-nowrap px-5 py-2.5 md:text-center hover:text-teal-700 hover:border-teal-700"
                                >
                                    Schulgeld Uganda
                                </a>
                            </li>
                            <li className="relative box-border caret-transparent block text-left w-full md:text-center md:w-auto">
                                <a
                                    href="https://www.tafel-lingen.de/"
                                    className="text-zinc-600 box-border caret-transparent block text-left text-nowrap px-5 py-2.5 md:text-center hover:text-teal-700 hover:border-teal-700"
                                >
                                    Tafel
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>
        </ul>
    );
};
