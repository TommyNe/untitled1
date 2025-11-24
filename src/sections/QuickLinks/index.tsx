import { QuickLinkCard } from "@/sections/QuickLinks/components/QuickLinkCard";

export const QuickLinks = () => {
    return (
        <div className="box-border caret-transparent py-[50px]">
            <div className="box-border caret-transparent max-w-none w-full mx-auto px-6 md:max-w-[1200px]">
                <div className="box-border caret-transparent mb-[30px] after:accent-auto after:box-border after:caret-transparent after:clear-both after:text-stone-500 after:block after:text-sm after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-5 after:list-outside after:list-disc after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-roboto">
                    <div className="box-border caret-transparent flex flex-wrap -mx-3">
                        <QuickLinkCard
                            href="https://etwah.de/download"
                            imageUrl="https://etwah.de/images/newspaper-595478_640.png"
                            imageAlt="staff"
                            title="Kirchliche Nachrichten"
                            linkText="hier klicken"
                        />
                        <QuickLinkCard
                            href="https://etwah.de/livestream"
                            imageUrl="https://etwah.de/images/jesus-3469896_640.jpg"
                            imageAlt="staff"
                            title="Livestream"
                            linkText="hier klicken"
                        />
                        <QuickLinkCard
                            href="https://etwah.de/belegung/index"
                            imageUrl="https://etwah.de/images/office-620822_1280.jpg"
                            imageAlt="staff"
                            title="Belegungspläne PH/BDH"
                            linkText="hier klicken"
                        />
                    </div>
                </div>
                <div className="box-border caret-transparent flex flex-wrap -mx-3">
                    <div className="box-border caret-transparent shrink-0 max-w-full w-full px-3 md:w-[66.6667%]">
                        <div className="box-border caret-transparent">
                            <header className="border-b-stone-200 border-l-stone-500 border-r-stone-500 border-t-stone-500 box-border caret-transparent border-b">
                                <h3 className="text-zinc-800 text-2xl box-border caret-transparent leading-9 mb-[15px] font-roboto">
                                    Die nächsten Events
                                </h3>
                            </header>
                            <section className="border-b-stone-500 border-l-stone-500 border-r-stone-500 border-t-stone-100 box-border caret-transparent border-t-4">
                                <ul className="box-border caret-transparent list-none pl-0">
                                    <li className="items-center border-b-stone-200 border-l-stone-500 border-r-stone-500 border-t-stone-500 box-border caret-transparent flex w-full py-2.5 border-b">
                                        <div className="text-zinc-800 box-border caret-transparent text-center uppercase w-[10%] mr-[4%] pt-[5px] font-roboto_condensed md:w-[6%]">
                      <span className="text-[34px] font-bold box-border caret-transparent block mt-0.5">
                        31
                      </span>
                                            <span className="text-neutral-400 text-xs font-bold box-border caret-transparent block tracking-[2px] mt-1">
                        Okt
                      </span>
                                        </div>
                                        <div className="box-border caret-transparent w-[57%] mr-[3%] md:w-[70%]">
                                            <h4 className="text-zinc-800 text-base box-border caret-transparent leading-6 font-roboto">
                                                <a
                                                    href="https://etwah.de/event/detail/472"
                                                    className="text-teal-700 box-border caret-transparent"
                                                >
                                                    Gräbersegnung auf dem Friedhof für St. Martinus Haren
                                                </a>
                                            </h4>
                                            <span className="text-neutral-400 text-xs italic box-border caret-transparent block mb-2.5 font-volkhov">
                        Freitag | 16:00 Uhr
                      </span>
                                        </div>
                                        <div className="box-border caret-transparent text-right w-[26%] md:w-[17%]">
                                            <div className="box-border caret-transparent">
                                                <a
                                                    href="https://etwah.de/event/detail/472"
                                                    className="text-zinc-800 text-xs font-bold bg-white box-border caret-transparent inline-block tracking-[1px] leading-[18.3428px] text-center uppercase text-nowrap align-middle border border-stone-300 px-3 py-1.5 rounded-[3px] border-solid font-roboto_condensed hover:bg-gray-200 hover:border-zinc-400"
                                                >
                                                    Details
                                                </a>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="items-center border-b-stone-200 border-l-stone-500 border-r-stone-500 border-t-stone-500 box-border caret-transparent flex w-full py-2.5 border-b">
                                        <div className="text-zinc-800 box-border caret-transparent text-center uppercase w-[10%] mr-[4%] pt-[5px] font-roboto_condensed md:w-[6%]">
                      <span className="text-[34px] font-bold box-border caret-transparent block mt-0.5">
                        31
                      </span>
                                            <span className="text-neutral-400 text-xs font-bold box-border caret-transparent block tracking-[2px] mt-1">
                        Okt
                      </span>
                                        </div>
                                        <div className="box-border caret-transparent w-[57%] mr-[3%] md:w-[70%]">
                                            <h4 className="text-zinc-800 text-base box-border caret-transparent leading-6 font-roboto">
                                                <a
                                                    href="https://etwah.de/event/detail/473"
                                                    className="text-teal-700 box-border caret-transparent"
                                                >
                                                    Gräbersegnung auf dem Friedhof für St. Marien in
                                                    Tinnen
                                                </a>
                                            </h4>
                                            <span className="text-neutral-400 text-xs italic box-border caret-transparent block mb-2.5 font-volkhov">
                        Freitag | 16:00 Uhr
                      </span>
                                        </div>
                                        <div className="box-border caret-transparent text-right w-[26%] md:w-[17%]">
                                            <div className="box-border caret-transparent">
                                                <a
                                                    href="https://etwah.de/event/detail/473"
                                                    className="text-zinc-800 text-xs font-bold bg-white box-border caret-transparent inline-block tracking-[1px] leading-[18.3428px] text-center uppercase text-nowrap align-middle border border-stone-300 px-3 py-1.5 rounded-[3px] border-solid font-roboto_condensed hover:bg-gray-200 hover:border-zinc-400"
                                                >
                                                    Details
                                                </a>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="items-center border-b-stone-200 border-l-stone-500 border-r-stone-500 border-t-stone-500 box-border caret-transparent flex w-full py-2.5 border-b">
                                        <div className="text-zinc-800 box-border caret-transparent text-center uppercase w-[10%] mr-[4%] pt-[5px] font-roboto_condensed md:w-[6%]">
                      <span className="text-[34px] font-bold box-border caret-transparent block mt-0.5">
                        01
                      </span>
                                            <span className="text-neutral-400 text-xs font-bold box-border caret-transparent block tracking-[2px] mt-1">
                        Nov
                      </span>
                                        </div>
                                        <div className="box-border caret-transparent w-[57%] mr-[3%] md:w-[70%]">
                                            <h4 className="text-zinc-800 text-base box-border caret-transparent leading-6 font-roboto">
                                                <a
                                                    href="https://etwah.de/event/detail/474"
                                                    className="text-teal-700 box-border caret-transparent"
                                                >
                                                    Gräbersegnung auf dem Friedhof für St. Josef Emmeln
                                                </a>
                                            </h4>
                                            <span className="text-neutral-400 text-xs italic box-border caret-transparent block mb-2.5 font-volkhov">
                        Samstag | 16:00 Uhr
                      </span>
                                        </div>
                                        <div className="box-border caret-transparent text-right w-[26%] md:w-[17%]">
                                            <div className="box-border caret-transparent">
                                                <a
                                                    href="https://etwah.de/event/detail/474"
                                                    className="text-zinc-800 text-xs font-bold bg-white box-border caret-transparent inline-block tracking-[1px] leading-[18.3428px] text-center uppercase text-nowrap align-middle border border-stone-300 px-3 py-1.5 rounded-[3px] border-solid font-roboto_condensed hover:bg-gray-200 hover:border-zinc-400"
                                                >
                                                    Details
                                                </a>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="items-center border-b-stone-200 border-l-stone-500 border-r-stone-500 border-t-stone-500 box-border caret-transparent flex w-full py-2.5 border-b">
                                        <div className="text-zinc-800 box-border caret-transparent text-center uppercase w-[10%] mr-[4%] pt-[5px] font-roboto_condensed md:w-[6%]">
                      <span className="text-[34px] font-bold box-border caret-transparent block mt-0.5">
                        01
                      </span>
                                            <span className="text-neutral-400 text-xs font-bold box-border caret-transparent block tracking-[2px] mt-1">
                        Nov
                      </span>
                                        </div>
                                        <div className="box-border caret-transparent w-[57%] mr-[3%] md:w-[70%]">
                                            <h4 className="text-zinc-800 text-base box-border caret-transparent leading-6 font-roboto">
                                                <a
                                                    href="https://etwah.de/event/detail/475"
                                                    className="text-teal-700 box-border caret-transparent"
                                                >
                                                    Gräbersegnung auf dem Friedhof für St. Clemens Wesuwe
                                                </a>
                                            </h4>
                                            <span className="text-neutral-400 text-xs italic box-border caret-transparent block mb-2.5 font-volkhov">
                        Samstag | 16:00 Uhr
                      </span>
                                        </div>
                                        <div className="box-border caret-transparent text-right w-[26%] md:w-[17%]">
                                            <div className="box-border caret-transparent">
                                                <a
                                                    href="https://etwah.de/event/detail/475"
                                                    className="text-zinc-800 text-xs font-bold bg-white box-border caret-transparent inline-block tracking-[1px] leading-[18.3428px] text-center uppercase text-nowrap align-middle border border-stone-300 px-3 py-1.5 rounded-[3px] border-solid font-roboto_condensed hover:bg-gray-200 hover:border-zinc-400"
                                                >
                                                    Details
                                                </a>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="items-center border-b-stone-200 border-l-stone-500 border-r-stone-500 border-t-stone-500 box-border caret-transparent flex w-full py-2.5 border-b">
                                        <div className="text-zinc-800 box-border caret-transparent text-center uppercase w-[10%] mr-[4%] pt-[5px] font-roboto_condensed md:w-[6%]">
                      <span className="text-[34px] font-bold box-border caret-transparent block mt-0.5">
                        02
                      </span>
                                            <span className="text-neutral-400 text-xs font-bold box-border caret-transparent block tracking-[2px] mt-1">
                        Nov
                      </span>
                                        </div>
                                        <div className="box-border caret-transparent w-[57%] mr-[3%] md:w-[70%]">
                                            <h4 className="text-zinc-800 text-base box-border caret-transparent leading-6 font-roboto">
                                                <a
                                                    href="https://etwah.de/event/detail/476"
                                                    className="text-teal-700 box-border caret-transparent"
                                                >
                                                    Gräbersegnung auf dem neuen Friedhof für Herz Jesu
                                                    Altharen
                                                </a>
                                            </h4>
                                            <span className="text-neutral-400 text-xs italic box-border caret-transparent block mb-2.5 font-volkhov">
                        Sonntag | 15:00 Uhr
                      </span>
                                        </div>
                                        <div className="box-border caret-transparent text-right w-[26%] md:w-[17%]">
                                            <div className="box-border caret-transparent">
                                                <a
                                                    href="https://etwah.de/event/detail/476"
                                                    className="text-zinc-800 text-xs font-bold bg-white box-border caret-transparent inline-block tracking-[1px] leading-[18.3428px] text-center uppercase text-nowrap align-middle border border-stone-300 px-3 py-1.5 rounded-[3px] border-solid font-roboto_condensed hover:bg-gray-200 hover:border-zinc-400"
                                                >
                                                    Details
                                                </a>
                                            </div>
                                        </div>
                                    </li>
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
                                                            Mi., 29.10.2025, 9 Uhr Rosenkranzgebet St, Marien
                                                            in Tinnen
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
                                                            Spielenachmittag am Do., 06.11.2025 organisiert
                                                            vom Kolping Emmeln
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
                                                            Fr., 31.10.2025, 16 Uhr Laternenlaufen in Landegge
                                                            - AN DER BAUMBANK SANDE BZW. AN DEN VERABREDETEN
                                                            TREFFPUNKTEN
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
                                                            Fr., 31.10.2025, 19 Uhr Rosenkranzgebet in der
                                                            Herz Jesu Kirche in Altharen
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
                                                            So., 02.11.2025, 17 Uhr hl. Messe in polnischer
                                                            Sprache
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
                                                    Wer hat Lust beim 1. Harener Krippenweg mitzumachen?
                                                    Zum Abschluss des Heiligen Jahres 2025 möchten wir vom
                                                    PGR Haren gemeinsam mit euch einen besonderen Weg
                                                    gestalten – den 1. Harener Krippenweg vom 1.
                                                    Adventssontag 30.11.2025 bis Dreikönig 6.1.2026.
                                                    Stelle eine Außenkrippe{" "}
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
                    <div className="box-border caret-transparent shrink-0 max-w-full w-full px-3 md:w-[33.3333%]">
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
                        <div className="box-border caret-transparent">
                            <header className="border-b-stone-200 border-l-stone-500 border-r-stone-500 border-t-stone-500 box-border caret-transparent border-b">
                                <h3 className="text-zinc-800 text-2xl box-border caret-transparent leading-9 mb-[15px] font-roboto">
                                    Was Tun Wenn ...
                                </h3>
                            </header>
                            <section className="border-b-stone-500 border-l-stone-500 border-r-stone-500 border-t-stone-100 box-border caret-transparent border-t-4">
                                <ul className="box-border caret-transparent list-none pl-0">
                                    <li className="relative bg-stone-100 box-border caret-transparent w-full mt-5 mb-2.5 p-[30px] before:accent-auto before:border-b-stone-200 before:border-l-stone-500 before:border-t-stone-500 before:box-border before:caret-transparent before:text-stone-500 before:block before:text-sm before:not-italic before:normal-nums before:font-normal before:h-0 before:tracking-[normal] before:leading-5 before:list-outside before:list-none before:pointer-events-auto before:absolute before:text-start before:indent-[0px] before:normal-case before:visible before:w-0 before:border-r-transparent before:border-r-[20px] before:border-b-[20px] before:border-separate before:right-0 before:top-0 before:font-roboto after:accent-auto after:border-b-stone-500 after:border-r-stone-500 after:box-border after:caret-transparent after:text-stone-500 after:block after:text-sm after:not-italic after:normal-nums after:font-normal after:h-0 after:tracking-[normal] after:leading-5 after:list-outside after:list-none after:pointer-events-auto after:absolute after:text-start after:indent-[0px] after:normal-case after:visible after:w-0 after:border-l-transparent after:border-l-[19px] after:border-t-white after:border-t-[19px] after:border-separate after:right-0 after:top-0 after:font-roboto">
                                        <h2 className="text-zinc-800 text-base box-border caret-transparent leading-6 font-roboto">
                                            <a
                                                href="https://etwah.de/wastunwenn/7"
                                                className="text-zinc-600 box-border caret-transparent hover:text-teal-700 hover:border-teal-700"
                                            >
                                                &gt;&gt;&gt; ...ich ausgetreten bin und wieder eintreten
                                                möchte?
                                            </a>
                                        </h2>
                                        <br className="box-border caret-transparent" />
                                        <h2 className="text-zinc-800 text-base box-border caret-transparent leading-6 font-roboto">
                                            <a
                                                href="https://etwah.de/wastunwenn/12"
                                                className="text-zinc-600 box-border caret-transparent hover:text-teal-700 hover:border-teal-700"
                                            >
                                                &gt;&gt;&gt; ...ich mein Kind taufen lassen möchte?
                                            </a>
                                        </h2>
                                        <br className="box-border caret-transparent" />
                                        <h2 className="text-zinc-800 text-base box-border caret-transparent leading-6 font-roboto">
                                            <a
                                                href="https://etwah.de/wastunwenn/13"
                                                className="text-zinc-600 box-border caret-transparent hover:text-teal-700 hover:border-teal-700"
                                            >
                                                &gt;&gt;&gt; ... ich beichten möchte
                                            </a>
                                        </h2>
                                        <br className="box-border caret-transparent" />
                                        <h2 className="text-zinc-800 text-base box-border caret-transparent leading-6 font-roboto">
                                            <a
                                                href="https://etwah.de/wastunwenn/2"
                                                className="text-zinc-600 box-border caret-transparent hover:text-teal-700 hover:border-teal-700"
                                            >
                                                &gt;&gt;&gt; ...mein Kind Erstkommunion feiern möchte?
                                            </a>
                                        </h2>
                                        <br className="box-border caret-transparent" />
                                        <h2 className="text-zinc-800 text-base box-border caret-transparent leading-6 font-roboto">
                                            <a
                                                href="https://etwah.de/wastunwenn/3"
                                                className="text-zinc-600 box-border caret-transparent hover:text-teal-700 hover:border-teal-700"
                                            >
                                                &gt;&gt;&gt; ...ich gefirmt werden möchte?
                                            </a>
                                        </h2>
                                        <br className="box-border caret-transparent" />
                                        <h2 className="text-zinc-800 text-base box-border caret-transparent leading-6 font-roboto">
                                            <a
                                                href="https://etwah.de/wastunwenn/4"
                                                className="text-zinc-600 box-border caret-transparent hover:text-teal-700 hover:border-teal-700"
                                            >
                                                &gt;&gt;&gt; ...wir kirchlich heiraten möchten?
                                            </a>
                                        </h2>
                                        <br className="box-border caret-transparent" />
                                        <h2 className="text-zinc-800 text-base box-border caret-transparent leading-6 font-roboto">
                                            <a
                                                href="https://etwah.de/wastunwenn/5"
                                                className="text-zinc-600 box-border caret-transparent hover:text-teal-700 hover:border-teal-700"
                                            >
                                                &gt;&gt;&gt; ...wir unser Ehejubiläum feiern möchten?
                                            </a>
                                        </h2>
                                        <br className="box-border caret-transparent" />
                                        <h2 className="text-zinc-800 text-base box-border caret-transparent leading-6 font-roboto">
                                            <a
                                                href="https://etwah.de/wastunwenn/14"
                                                className="text-zinc-600 box-border caret-transparent hover:text-teal-700 hover:border-teal-700"
                                            >
                                                &gt;&gt;&gt; ... ich Priester werden möchte
                                            </a>
                                        </h2>
                                        <br className="box-border caret-transparent" />
                                        <h2 className="text-zinc-800 text-base box-border caret-transparent leading-6 font-roboto">
                                            <a
                                                href="https://etwah.de/wastunwenn/8"
                                                className="text-zinc-600 box-border caret-transparent hover:text-teal-700 hover:border-teal-700"
                                            >
                                                &gt;&gt;&gt; ...ein Familienangehöriger
                                                krank/gebrechlich ist?
                                            </a>
                                        </h2>
                                        <br className="box-border caret-transparent" />
                                        <h2 className="text-zinc-800 text-base box-border caret-transparent leading-6 font-roboto">
                                            <a
                                                href="https://etwah.de/wastunwenn/9"
                                                className="text-zinc-600 box-border caret-transparent hover:text-teal-700 hover:border-teal-700"
                                            >
                                                &gt;&gt;&gt; ...ein Familienangehöriger im Sterben
                                                liegt?
                                            </a>
                                        </h2>
                                        <br className="box-border caret-transparent" />
                                        <h2 className="text-zinc-800 text-base box-border caret-transparent leading-6 font-roboto">
                                            <a
                                                href="https://etwah.de/wastunwenn/10"
                                                className="text-zinc-600 box-border caret-transparent hover:text-teal-700 hover:border-teal-700"
                                            >
                                                &gt;&gt;&gt; ...ein Angehöriger verstorben ist...
                                            </a>
                                        </h2>
                                        <br className="box-border caret-transparent" />
                                        <h2 className="text-zinc-800 text-base box-border caret-transparent leading-6 font-roboto">
                                            <a
                                                href="https://etwah.de/wastunwenn/11"
                                                className="text-zinc-600 box-border caret-transparent hover:text-teal-700 hover:border-teal-700"
                                            >
                                                &gt;&gt;&gt; ...ich ein Trauerangebot suche?
                                            </a>
                                        </h2>
                                        <br className="box-border caret-transparent" />
                                    </li>
                                </ul>
                            </section>
                            <header className="border-b-stone-200 border-l-stone-500 border-r-stone-500 border-t-stone-500 box-border caret-transparent border-b">
                                <h3 className="text-zinc-800 text-2xl box-border caret-transparent leading-9 mb-[15px] font-roboto">
                                    Anzeige
                                </h3>
                            </header>
                            <section className="border-b-stone-500 border-l-stone-500 border-r-stone-500 border-t-stone-100 box-border caret-transparent border-t-4">
                                <ul className="box-border caret-transparent list-none pl-0">
                                    <li className="relative bg-stone-100 box-border caret-transparent w-full mt-5 mb-2.5 p-[30px] before:accent-auto before:border-b-stone-200 before:border-l-stone-500 before:border-t-stone-500 before:box-border before:caret-transparent before:text-stone-500 before:block before:text-sm before:not-italic before:normal-nums before:font-normal before:h-0 before:tracking-[normal] before:leading-5 before:list-outside before:list-none before:pointer-events-auto before:absolute before:text-start before:indent-[0px] before:normal-case before:visible before:w-0 before:border-r-transparent before:border-r-[20px] before:border-b-[20px] before:border-separate before:right-0 before:top-0 before:font-roboto after:accent-auto after:border-b-stone-500 after:border-r-stone-500 after:box-border after:caret-transparent after:text-stone-500 after:block after:text-sm after:not-italic after:normal-nums after:font-normal after:h-0 after:tracking-[normal] after:leading-5 after:list-outside after:list-none after:pointer-events-auto after:absolute after:text-start after:indent-[0px] after:normal-case after:visible after:w-0 after:border-l-transparent after:border-l-[19px] after:border-t-white after:border-t-[19px] after:border-separate after:right-0 after:top-0 after:font-roboto">
                                        <a
                                            href="https://etwah.de/kiosk"
                                            className="text-zinc-600 box-border caret-transparent hover:text-teal-700 hover:border-teal-700"
                                        >
                                            <h2 className="text-zinc-800 text-base box-border caret-transparent leading-6 font-roboto">
                                                Infos zum Heiligen Jahr 24.12.2024 - 06.01.2026
                                            </h2>
                                            <img
                                                src="https://etwah.de/bilder/346c3630c1b40dbdc3f953ee4380297ad5e6ba15.png"
                                                alt="fff"
                                                className="box-border caret-transparent max-w-full"
                                            />
                                            <p className="text-base box-border caret-transparent mb-[15px]"></p>
                                            <div className="box-border caret-transparent">
                                                <br className="box-border caret-transparent" />
                                                <strong className="font-bold box-border caret-transparent">
                                                    Das Jubiläumsjahr 2025
                                                    <br className="box-border caret-transparent" />
                                                </strong>
                                                <br className="box-border caret-transparent" />
                                            </div>
                                        </a>
                                        <div className="box-border caret-transparent">
                                            <a
                                                href="https://etwah.de/kiosk"
                                                className="text-zinc-600 box-border caret-transparent hover:text-teal-700 hover:border-teal-700"
                                            >
                                                <strong className="font-bold box-border caret-transparent">
                                                    Das Logo des Hl. Jahres
                                                </strong>
                                                <br className="box-border caret-transparent" />
                                                Das vom italienischen Künstler Giacomo Travisani
                                                entworfene Jubiläumslogo zeigt vier Figuren, die die
                                                GESAMTE Menschheit repräsentieren aus den{" "}
                                                <em className="italic box-border caret-transparent">
                                                    vier
                                                </em>
                                                Ecken der Erde. Sie umarmen sich, um ihre Solidarität
                                                und Brüderlichkeit zu zeigen, die alle Völker vereinen
                                                sollten. Die &quot;raue&quot; W
                                                <p className="text-base box-border caret-transparent mb-[15px]"></p>
                                            </a>
                                        </div>
                                    </li>
                                </ul>
                            </section>
                            <header className="border-b-stone-200 border-l-stone-500 border-r-stone-500 border-t-stone-500 box-border caret-transparent border-b">
                                <h3 className="text-zinc-800 text-2xl box-border caret-transparent leading-9 mb-[15px] font-roboto">
                                    Spenden
                                </h3>
                            </header>
                            <section className="border-b-stone-500 border-l-stone-500 border-r-stone-500 border-t-stone-100 box-border caret-transparent border-t-4">
                                <ul className="box-border caret-transparent list-none pl-0">
                                    <li className="relative bg-stone-100 box-border caret-transparent text-center w-full mt-5 mb-2.5 p-[30px] before:accent-auto before:border-b-stone-200 before:border-l-stone-500 before:border-t-stone-500 before:box-border before:caret-transparent before:text-stone-500 before:block before:text-sm before:not-italic before:normal-nums before:font-normal before:h-0 before:tracking-[normal] before:leading-5 before:list-outside before:list-none before:pointer-events-auto before:absolute before:text-center before:indent-[0px] before:normal-case before:visible before:w-0 before:border-r-transparent before:border-r-[20px] before:border-b-[20px] before:border-separate before:right-0 before:top-0 before:font-roboto after:accent-auto after:border-b-stone-500 after:border-r-stone-500 after:box-border after:caret-transparent after:text-stone-500 after:block after:text-sm after:not-italic after:normal-nums after:font-normal after:h-0 after:tracking-[normal] after:leading-5 after:list-outside after:list-none after:pointer-events-auto after:absolute after:text-center after:indent-[0px] after:normal-case after:visible after:w-0 after:border-l-transparent after:border-l-[19px] after:border-t-white after:border-t-[19px] after:border-separate after:right-0 after:top-0 after:font-roboto">
                                        <a
                                            href="https://paypal.com/"
                                            className="text-zinc-600 box-border caret-transparent underline hover:text-teal-700 hover:no-underline hover:border-teal-700"
                                        >
                                            <img
                                                src="https://www.paypalobjects.com/de_DE/DE/i/btn/btn_donateCC_LG.gif"
                                                alt="PayPalDonate"
                                                className="box-border caret-transparent max-w-full"
                                            />
                                        </a>
                                    </li>
                                </ul>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
