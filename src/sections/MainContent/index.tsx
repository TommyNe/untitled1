import { EventsList } from '@/sections/MainContent/components/EventsList'
import { Sidebar } from '@/sections/MainContent/components/Sidebar'

export const MainContent = () => {
    return (
        <div role="main" className="box-border caret-transparent">
            <div className="box-border caret-transparent py-[50px]">
                <div className="box-border caret-transparent max-w-none w-full mx-auto px-6 md:max-w-[1200px]">
                    <div className="box-border caret-transparent mb-[30px] after:accent-auto after:box-border after:caret-transparent after:clear-both after:text-stone-500 after:block after:text-sm after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-5 after:list-outside after:list-disc after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-roboto">
                        <div className="box-border caret-transparent flex flex-wrap -mx-3">
                            <div className="relative box-border caret-transparent shrink-0 max-w-full w-full mb-5 px-3 md:w-[33.3333%] md:mb-0">
                                <a
                                    href="https://etwah.de/download"
                                    className="text-zinc-600 bg-stone-100 box-border caret-transparent inline-block max-w-full underline border border-stone-200 p-[5px] rounded-[3px] border-solid hover:text-teal-700 hover:no-underline"
                                >
                                    <img
                                        src="https://etwah.de/images/newspaper-595478_640.png"
                                        alt="staff"
                                        className="box-border caret-transparent max-w-full w-full"
                                    />
                                    <strong className="absolute text-white text-lg font-bold bg-teal-700 bg-[url('https://etwah.de/build/images/pattern.3bc6cea1.png')] box-border caret-transparent block leading-[25.7143px] z-10 px-[30px] py-2 left-2.5 bottom-[30px]">
                                        Kirchliche Nachrichten
                                    </strong>
                                    <span className="absolute text-zinc-800 bg-white box-border caret-transparent block z-[9] pl-[30px] pr-5 py-[5px] left-2.5 bottom-[30px]">
                                        hier klicken
                                    </span>
                                </a>
                            </div>
                            <div className="relative box-border caret-transparent shrink-0 max-w-full w-full mb-5 px-3 md:w-[33.3333%] md:mb-0">
                                <a
                                    href="https://etwah.de/livestream"
                                    className="text-zinc-600 bg-stone-100 box-border caret-transparent inline-block max-w-full underline border border-stone-200 p-[5px] rounded-[3px] border-solid hover:text-teal-700 hover:no-underline"
                                >
                                    <img
                                        src="https://etwah.de/images/jesus-3469896_640.jpg"
                                        alt="staff"
                                        className="box-border caret-transparent max-w-full w-full"
                                    />
                                    <strong className="absolute text-white text-lg font-bold bg-teal-700 bg-[url('https://etwah.de/build/images/pattern.3bc6cea1.png')] box-border caret-transparent block leading-[25.7143px] z-10 px-[30px] py-2 left-2.5 bottom-[30px]">
                                        Livestream
                                    </strong>
                                    <span className="absolute text-zinc-800 bg-white box-border caret-transparent block z-[9] pl-[30px] pr-5 py-[5px] left-2.5 bottom-[30px]">
                                        hier klicken
                                    </span>
                                </a>
                            </div>
                            <div className="relative box-border caret-transparent shrink-0 max-w-full w-full mb-5 px-3 md:w-[33.3333%] md:mb-0">
                                <a
                                    href="https://etwah.de/belegung/index"
                                    className="text-zinc-600 bg-stone-100 box-border caret-transparent inline-block max-w-full underline border border-stone-200 p-[5px] rounded-[3px] border-solid hover:text-teal-700 hover:no-underline"
                                >
                                    <img
                                        src="https://etwah.de/images/office-620822_1280.jpg"
                                        alt="staff"
                                        className="box-border caret-transparent max-w-full w-full"
                                    />
                                    <strong className="absolute text-white text-lg font-bold bg-teal-700 bg-[url('https://etwah.de/build/images/pattern.3bc6cea1.png')] box-border caret-transparent block leading-[25.7143px] z-10 px-[30px] py-2 left-2.5 bottom-[30px]">
                                        Belegungspläne PH/BDH
                                    </strong>
                                    <span className="absolute text-zinc-800 bg-white box-border caret-transparent block z-[9] pl-[30px] pr-5 py-[5px] left-2.5 bottom-[30px]">
                                        hier klicken
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="box-border caret-transparent flex flex-wrap -mx-3">
                        <EventsList />
                        <Sidebar />
                    </div>
                </div>
            </div>
        </div>
    )
}
