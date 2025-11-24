import { EventItem } from "@/sections/MainContent/components/EventItem";

export const EventsList = () => {
    return (
        <div className="box-border caret-transparent shrink-0 max-w-full w-full px-3 md:w-[66.6667%]">
            <div className="box-border caret-transparent">
                <header className="border-b-stone-200 border-l-stone-500 border-r-stone-500 border-t-stone-500 box-border caret-transparent border-b">
                    <h3 className="text-zinc-800 text-2xl box-border caret-transparent leading-9 mb-[15px] font-roboto">
                        Die nächsten Events
                    </h3>
                </header>
                <section className="border-b-stone-500 border-l-stone-500 border-r-stone-500 border-t-stone-100 box-border caret-transparent border-t-4">
                    <ul className="box-border caret-transparent list-none pl-0">
                        <EventItem
                            day="31"
                            month="Okt"
                            title="Gräbersegnung auf dem Friedhof für St. Martinus Haren"
                            eventUrl="https://etwah.de/event/detail/472"
                            dateTime="Freitag | 16:00 Uhr"
                        />
                        <EventItem
                            day="31"
                            month="Okt"
                            title="Gräbersegnung auf dem Friedhof für St. Marien in Tinnen"
                            eventUrl="https://etwah.de/event/detail/473"
                            dateTime="Freitag | 16:00 Uhr"
                        />
                        <EventItem
                            day="01"
                            month="Nov"
                            title="Gräbersegnung auf dem Friedhof für St. Josef Emmeln"
                            eventUrl="https://etwah.de/event/detail/474"
                            dateTime="Samstag | 16:00 Uhr"
                        />
                        <EventItem
                            day="01"
                            month="Nov"
                            title="Gräbersegnung auf dem Friedhof für St. Clemens Wesuwe"
                            eventUrl="https://etwah.de/event/detail/475"
                            dateTime="Samstag | 16:00 Uhr"
                        />
                        <EventItem
                            day="02"
                            month="Nov"
                            title="Gräbersegnung auf dem neuen Friedhof für Herz Jesu Altharen"
                            eventUrl="https://etwah.de/event/detail/476"
                            dateTime="Sonntag | 15:00 Uhr"
                        />
                    </ul>
                </section>
            </div>
            <div className="box-border caret-transparent clear-both h-[30px] w-full"></div>
            <div className="box-border caret-transparent">
                <header className="border-b-stone-200 border-l-stone-500 border-r-stone-500 border-t-stone-500 box-border caret-transparent border-b">
                    <h3 className="text-zinc-800 text-2xl box-border caret-transparent leading-9 mb-[15px] font-roboto">
                        Aktuelles
                    </h3>
                </header>
                <section className="border-b-stone-500 border-l-stone-500 border-r-stone-500 border-t-stone-100 box-border caret-transparent border-t-4">
                    <ul className="box-border caret-transparent list-none pl-0">
                        <li className="border-b-stone-200 border-l-stone-500 border-r-stone-500 border-t-stone-500 box-border caret-transparent w-full pt-5 pb-2.5 border-b">
                            <div className="box-border caret-transparent flex flex-wrap -mx-3">
                                <div className="box-border caret-transparent shrink-0 max-w-full w-full px-3 md:w-[33.3333%]">
                                    <a
                                        href="https://etwah.de/bilder/6d4e75c73faaef4cecbb5e0bad36b13e9270d880.png"
                                        className="relative text-zinc-600 box-border caret-transparent block max-w-full underline mb-2.5 hover:text-teal-700 hover:no-underline hover:border-teal-700"
                                    >
                                        <img
                                            src="https://etwah.de/bilder/6d4e75c73faaef4cecbb5e0bad36b13e9270d880.png"
                                            alt=""
                                            className="bg-stone-100 box-border caret-transparent inline-block max-w-full border border-stone-200 mb-5 p-[5px] rounded-[3px] border-solid md:mb-0"
                                        />
                                    </a>
                                </div>
                                <div className="box-border caret-transparent shrink-0 max-w-full w-full px-3 md:w-[66.6667%]">
                                    <div className="border-b-stone-200 border-l-stone-500 border-r-stone-500 border-t-stone-500 box-border caret-transparent mb-3 pb-1.5 border-b">
                                        <h2 className="text-zinc-800 text-base box-border caret-transparent leading-6 font-roboto">
                                            <a
                                                href="https://etwah.de/post/details/932"
                                                className="text-zinc-600 box-border caret-transparent hover:text-teal-700 hover:border-teal-700"
                                            >
                                                Mi., 29.10.2025, 9 Uhr Rosenkranzgebet St, Marien in
                                                Tinnen
                                            </a>
                                        </h2>
                                        <span className="text-neutral-400 text-xs italic box-border caret-transparent block mb-2.5 font-volkhov">
                      <i className="not-italic font-black box-border caret-transparent inline-block leading-3 mr-1 font-font_awesome_5_free before:accent-auto before:box-border before:caret-transparent before:text-neutral-400 before:text-xs before:not-italic before:normal-nums before:font-black before:tracking-[normal] before:leading-3 before:list-outside before:list-none before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-font_awesome_5_free"></i>
                      30.08.2025, Tinnen{" "}
                    </span>
                                    </div>
                                    <p className="text-base box-border caret-transparent mb-[15px]">
                                        Herzliche Einladung!{" "}
                                        <a
                                            href="https://etwah.de/post/details/932"
                                            className="text-zinc-600 box-border caret-transparent underline hover:text-teal-700 hover:no-underline hover:border-teal-700"
                                        >
                                            ...mehr
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </li>
                        <li className="border-b-stone-200 border-l-stone-500 border-r-stone-500 border-t-stone-500 box-border caret-transparent w-full pt-5 pb-2.5 border-b">
                            <div className="box-border caret-transparent flex flex-wrap -mx-3">
                                <div className="box-border caret-transparent shrink-0 max-w-full w-full px-3 md:w-[33.3333%]">
                                    <a
                                        href="https://etwah.de/bilder/7305e07bb5fa06e97b5fc117289a9ce8dd5679c4.png"
                                        className="relative text-zinc-600 box-border caret-transparent block max-w-full underline mb-2.5 hover:text-teal-700 hover:no-underline hover:border-teal-700"
                                    >
                                        <img
                                            src="https://etwah.de/bilder/7305e07bb5fa06e97b5fc117289a9ce8dd5679c4.png"
                                            alt=""
                                            className="bg-stone-100 box-border caret-transparent inline-block max-w-full border border-stone-200 mb-5 p-[5px] rounded-[3px] border-solid md:mb-0"
                                        />
                                    </a>
                                </div>
                                <div className="box-border caret-transparent shrink-0 max-w-full w-full px-3 md:w-[66.6667%]">
                                    <div className="border-b-stone-200 border-l-stone-500 border-r-stone-500 border-t-stone-500 box-border caret-transparent mb-3 pb-1.5 border-b">
                                        <h2 className="text-zinc-800 text-base box-border caret-transparent leading-6 font-roboto">
                                            <a
                                                href="https://etwah.de/post/details/965"
                                                className="text-zinc-600 box-border caret-transparent hover:text-teal-700 hover:border-teal-700"
                                            >
                                                Do., 30.10.2025, Anmeldeschluss für den Senioren -
                                                Spielenachmittag am Do., 06.11.2025 organisiert vom
                                                Kolping Emmeln
                                            </a>
                                        </h2>
                                        <span className="text-neutral-400 text-xs italic box-border caret-transparent block mb-2.5 font-volkhov">
                      <i className="not-italic font-black box-border caret-transparent inline-block leading-3 mr-1 font-font_awesome_5_free before:accent-auto before:box-border before:caret-transparent before:text-neutral-400 before:text-xs before:not-italic before:normal-nums before:font-black before:tracking-[normal] before:leading-3 before:list-outside before:list-none before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-font_awesome_5_free"></i>
                      01.10.2025, Emmeln{" "}
                    </span>
                                    </div>
                                    <p className="text-base box-border caret-transparent mb-[15px]">
                                        Herzliche Einladung! Weitere Hinweise im Post!{" "}
                                        <a
                                            href="https://etwah.de/post/details/965"
                                            className="text-zinc-600 box-border caret-transparent underline hover:text-teal-700 hover:no-underline hover:border-teal-700"
                                        >
                                            ...mehr
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </li>
                        <li className="border-b-stone-200 border-l-stone-500 border-r-stone-500 border-t-stone-500 box-border caret-transparent w-full pt-5 pb-2.5 border-b">
                            <div className="box-border caret-transparent flex flex-wrap -mx-3">
                                <div className="box-border caret-transparent shrink-0 max-w-full w-full px-3 md:w-[33.3333%]">
                                    <a
                                        href="https://etwah.de/bilder/66abe9e3869a2d9b824c5b4577ae138bd9b60e6d.png"
                                        className="relative text-zinc-600 box-border caret-transparent block max-w-full underline mb-2.5 hover:text-teal-700 hover:no-underline hover:border-teal-700"
                                    >
                                        <img
                                            src="https://etwah.de/bilder/66abe9e3869a2d9b824c5b4577ae138bd9b60e6d.png"
                                            alt=""
                                            className="bg-stone-100 box-border caret-transparent inline-block max-w-full border border-stone-200 mb-5 p-[5px] rounded-[3px] border-solid md:mb-0"
                                        />
                                    </a>
                                </div>
                                <div className="box-border caret-transparent shrink-0 max-w-full w-full px-3 md:w-[66.6667%]">
                                    <div className="border-b-stone-200 border-l-stone-500 border-r-stone-500 border-t-stone-500 box-border caret-transparent mb-3 pb-1.5 border-b">
                                        <h2 className="text-zinc-800 text-base box-border caret-transparent leading-6 font-roboto">
                                            <a
                                                href="https://etwah.de/post/details/980"
                                                className="text-zinc-600 box-border caret-transparent hover:text-teal-700 hover:border-teal-700"
                                            >
                                                Fr., 31.10.2025, 16 Uhr Laternenlaufen in Landegge - AN
                                                DER BAUMBANK SANDE BZW. AN DEN VERABREDETEN TREFFPUNKTEN
                                            </a>
                                        </h2>
                                        <span className="text-neutral-400 text-xs italic box-border caret-transparent block mb-2.5 font-volkhov">
                      <i className="not-italic font-black box-border caret-transparent inline-block leading-3 mr-1 font-font_awesome_5_free before:accent-auto before:box-border before:caret-transparent before:text-neutral-400 before:text-xs before:not-italic before:normal-nums before:font-black before:tracking-[normal] before:leading-3 before:list-outside before:list-none before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-font_awesome_5_free"></i>
                      21.10.2025, Haren{" "}
                    </span>
                                    </div>
                                    <p className="text-base box-border caret-transparent mb-[15px]">
                                        Herzliche Einladung!{" "}
                                        <a
                                            href="https://etwah.de/post/details/980"
                                            className="text-zinc-600 box-border caret-transparent underline hover:text-teal-700 hover:no-underline hover:border-teal-700"
                                        >
                                            ...mehr
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </li>
                        <li className="border-b-stone-200 border-l-stone-500 border-r-stone-500 border-t-stone-500 box-border caret-transparent w-full pt-5 pb-2.5 border-b">
                            <div className="box-border caret-transparent flex flex-wrap -mx-3">
                                <div className="box-border caret-transparent shrink-0 max-w-full w-full px-3 md:w-[33.3333%]">
                                    <a
                                        href="https://etwah.de/bilder/f5477811a8a35fb7d4069ee15dc1cfece89bd84f.png"
                                        className="relative text-zinc-600 box-border caret-transparent block max-w-full underline mb-2.5 hover:text-teal-700 hover:no-underline hover:border-teal-700"
                                    >
                                        <img
                                            src="https://etwah.de/bilder/f5477811a8a35fb7d4069ee15dc1cfece89bd84f.png"
                                            alt=""
                                            className="bg-stone-100 box-border caret-transparent inline-block max-w-full border border-stone-200 mb-5 p-[5px] rounded-[3px] border-solid md:mb-0"
                                        />
                                    </a>
                                </div>
                                <div className="box-border caret-transparent shrink-0 max-w-full w-full px-3 md:w-[66.6667%]">
                                    <div className="border-b-stone-200 border-l-stone-500 border-r-stone-500 border-t-stone-500 box-border caret-transparent mb-3 pb-1.5 border-b">
                                        <h2 className="text-zinc-800 text-base box-border caret-transparent leading-6 font-roboto">
                                            <a
                                                href="https://etwah.de/post/details/983"
                                                className="text-zinc-600 box-border caret-transparent hover:text-teal-700 hover:border-teal-700"
                                            >
                                                Fr., 31.10.2025, 19 Uhr Rosenkranzgebet in der Herz Jesu
                                                Kirche in Altharen
                                            </a>
                                        </h2>
                                        <span className="text-neutral-400 text-xs italic box-border caret-transparent block mb-2.5 font-volkhov">
                      <i className="not-italic font-black box-border caret-transparent inline-block leading-3 mr-1 font-font_awesome_5_free before:accent-auto before:box-border before:caret-transparent before:text-neutral-400 before:text-xs before:not-italic before:normal-nums before:font-black before:tracking-[normal] before:leading-3 before:list-outside before:list-none before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-font_awesome_5_free"></i>
                      24.10.2025, Altharen{" "}
                    </span>
                                    </div>
                                    <p className="text-base box-border caret-transparent mb-[15px]">
                                        Herzliche Einladung!{" "}
                                        <a
                                            href="https://etwah.de/post/details/983"
                                            className="text-zinc-600 box-border caret-transparent underline hover:text-teal-700 hover:no-underline hover:border-teal-700"
                                        >
                                            ...mehr
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </li>
                        <li className="border-b-stone-200 border-l-stone-500 border-r-stone-500 border-t-stone-500 box-border caret-transparent w-full pt-5 pb-2.5 border-b">
                            <div className="box-border caret-transparent flex flex-wrap -mx-3">
                                <div className="box-border caret-transparent shrink-0 max-w-full w-full px-3 md:w-[33.3333%]">
                                    <a
                                        href="https://etwah.de/bilder/d70b4f51c098f2554fd8c887976d4ba93013cb5b.png"
                                        className="relative text-zinc-600 box-border caret-transparent block max-w-full underline mb-2.5 hover:text-teal-700 hover:no-underline hover:border-teal-700"
                                    >
                                        <img
                                            src="https://etwah.de/bilder/d70b4f51c098f2554fd8c887976d4ba93013cb5b.png"
                                            alt=""
                                            className="bg-stone-100 box-border caret-transparent inline-block max-w-full border border-stone-200 mb-5 p-[5px] rounded-[3px] border-solid md:mb-0"
                                        />
                                    </a>
                                </div>
                                <div className="box-border caret-transparent shrink-0 max-w-full w-full px-3 md:w-[66.6667%]">
                                    <div className="border-b-stone-200 border-l-stone-500 border-r-stone-500 border-t-stone-500 box-border caret-transparent mb-3 pb-1.5 border-b">
                                        <h2 className="text-zinc-800 text-base box-border caret-transparent leading-6 font-roboto">
                                            <a
                                                href="https://etwah.de/post/details/928"
                                                className="text-zinc-600 box-border caret-transparent hover:text-teal-700 hover:border-teal-700"
                                            >
                                                Gräbersegnung zu Allerheiligen Allerseelen
                                            </a>
                                        </h2>
                                        <span className="text-neutral-400 text-xs italic box-border caret-transparent block mb-2.5 font-volkhov">
                      <i className="not-italic font-black box-border caret-transparent inline-block leading-3 mr-1 font-font_awesome_5_free before:accent-auto before:box-border before:caret-transparent before:text-neutral-400 before:text-xs before:not-italic before:normal-nums before:font-black before:tracking-[normal] before:leading-3 before:list-outside before:list-none before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-font_awesome_5_free"></i>
                      28.08.2025, ETWAH{" "}
                    </span>
                                    </div>
                                    <p className="text-base box-border caret-transparent mb-[15px]">
                                        Herzliche Einladung!{" "}
                                        <a
                                            href="https://etwah.de/post/details/928"
                                            className="text-zinc-600 box-border caret-transparent underline hover:text-teal-700 hover:no-underline hover:border-teal-700"
                                        >
                                            ...mehr
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </li>
                        <li className="border-b-stone-200 border-l-stone-500 border-r-stone-500 border-t-stone-500 box-border caret-transparent w-full pt-5 pb-2.5 border-b">
                            <div className="box-border caret-transparent flex flex-wrap -mx-3">
                                <div className="box-border caret-transparent shrink-0 max-w-full w-full px-3 md:w-[33.3333%]">
                                    <a
                                        href="https://etwah.de/bilder/dd7f5d19d618f8aad8835f6fde6ac6a5b52b0eb5.png"
                                        className="relative text-zinc-600 box-border caret-transparent block max-w-full underline mb-2.5 hover:text-teal-700 hover:no-underline hover:border-teal-700"
                                    >
                                        <img
                                            src="https://etwah.de/bilder/dd7f5d19d618f8aad8835f6fde6ac6a5b52b0eb5.png"
                                            alt=""
                                            className="bg-stone-100 box-border caret-transparent inline-block max-w-full border border-stone-200 mb-5 p-[5px] rounded-[3px] border-solid md:mb-0"
                                        />
                                    </a>
                                </div>
                                <div className="box-border caret-transparent shrink-0 max-w-full w-full px-3 md:w-[66.6667%]">
                                    <div className="border-b-stone-200 border-l-stone-500 border-r-stone-500 border-t-stone-500 box-border caret-transparent mb-3 pb-1.5 border-b">
                                        <h2 className="text-zinc-800 text-base box-border caret-transparent leading-6 font-roboto">
                                            <a
                                                href="https://etwah.de/post/details/945"
                                                className="text-zinc-600 box-border caret-transparent hover:text-teal-700 hover:border-teal-700"
                                            >
                                                So., 02.11.2025, 17 Uhr hl. Messe in polnischer Sprache
                                            </a>
                                        </h2>
                                        <span className="text-neutral-400 text-xs italic box-border caret-transparent block mb-2.5 font-volkhov">
                      <i className="not-italic font-black box-border caret-transparent inline-block leading-3 mr-1 font-font_awesome_5_free before:accent-auto before:box-border before:caret-transparent before:text-neutral-400 before:text-xs before:not-italic before:normal-nums before:font-black before:tracking-[normal] before:leading-3 before:list-outside before:list-none before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-font_awesome_5_free"></i>
                      11.09.2025, ETWAH{" "}
                    </span>
                                    </div>
                                    <p className="text-base box-border caret-transparent mb-[15px]">
                                        Herzlich willkommen!{" "}
                                        <a
                                            href="https://etwah.de/post/details/945"
                                            className="text-zinc-600 box-border caret-transparent underline hover:text-teal-700 hover:no-underline hover:border-teal-700"
                                        >
                                            ...mehr
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </li>
                        <li className="border-b-stone-200 border-l-stone-500 border-r-stone-500 border-t-stone-500 box-border caret-transparent w-full pt-5 pb-2.5 border-b">
                            <div className="box-border caret-transparent flex flex-wrap -mx-3">
                                <div className="box-border caret-transparent shrink-0 max-w-full w-full px-3 md:w-[33.3333%]">
                                    <a
                                        href="https://etwah.de/bilder/f02a466ac4c9616db0b8a14554d100b00d17a32a.png"
                                        className="relative text-zinc-600 box-border caret-transparent block max-w-full underline mb-2.5 hover:text-teal-700 hover:no-underline hover:border-teal-700"
                                    >
                                        <img
                                            src="https://etwah.de/bilder/f02a466ac4c9616db0b8a14554d100b00d17a32a.png"
                                            alt=""
                                            className="bg-stone-100 box-border caret-transparent inline-block max-w-full border border-stone-200 mb-5 p-[5px] rounded-[3px] border-solid md:mb-0"
                                        />
                                    </a>
                                </div>
                                <div className="box-border caret-transparent shrink-0 max-w-full w-full px-3 md:w-[66.6667%]">
                                    <div className="border-b-stone-200 border-l-stone-500 border-r-stone-500 border-t-stone-500 box-border caret-transparent mb-3 pb-1.5 border-b">
                                        <h2 className="text-zinc-800 text-base box-border caret-transparent leading-6 font-roboto">
                                            <a
                                                href="https://etwah.de/post/details/926"
                                                className="text-zinc-600 box-border caret-transparent hover:text-teal-700 hover:border-teal-700"
                                            >
                                                Mo., 03.11.2025, 19 Uhr Besprechung zum 1. Harener
                                                Krippenweg im BDH in Haren.
                                            </a>
                                        </h2>
                                        <span className="text-neutral-400 text-xs italic box-border caret-transparent block mb-2.5 font-volkhov">
                      <i className="not-italic font-black box-border caret-transparent inline-block leading-3 mr-1 font-font_awesome_5_free before:accent-auto before:box-border before:caret-transparent before:text-neutral-400 before:text-xs before:not-italic before:normal-nums before:font-black before:tracking-[normal] before:leading-3 before:list-outside before:list-none before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-font_awesome_5_free"></i>
                      28.08.2025, Haren{" "}
                    </span>
                                    </div>
                                    <p className="text-base box-border caret-transparent mb-[15px]">
                                        Wer hat Lust beim 1. Harener Krippenweg mitzumachen? Zum
                                        Abschluss des Heiligen Jahres 2025 möchten wir vom PGR Haren
                                        gemeinsam mit euch einen besonderen Weg gestalten – den 1.
                                        Harener Krippenweg vom 1. Adventssontag 30.11.2025 bis
                                        Dreikönig 6.1.2026. Stelle eine Außenkrippe{" "}
                                        <a
                                            href="https://etwah.de/post/details/926"
                                            className="text-zinc-600 box-border caret-transparent underline hover:text-teal-700 hover:no-underline hover:border-teal-700"
                                        >
                                            ...mehr
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </li>
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
                    </ul>
                </section>
            </div>
        </div>
    );
};
