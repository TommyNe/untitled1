export type EventItemProps = {
    day: string
    month: string
    title: string
    eventUrl: string
    dateTime: string
}

export const EventItem = (props: EventItemProps) => {
    return (
        <li className="items-center border-b-stone-200 border-l-stone-500 border-r-stone-500 border-t-stone-500 box-border caret-transparent flex w-full py-2.5 border-b">
            <div className="text-zinc-800 box-border caret-transparent text-center uppercase w-[10%] mr-[4%] pt-[5px] font-roboto_condensed md:w-[6%]">
                <span className="text-[34px] font-bold box-border caret-transparent block mt-0.5">
                    {props.day}
                </span>
                <span className="text-neutral-400 text-xs font-bold box-border caret-transparent block tracking-[2px] mt-1">
                    {props.month}
                </span>
            </div>
            <div className="box-border caret-transparent w-[57%] mr-[3%] md:w-[70%]">
                <h4 className="text-zinc-800 text-base box-border caret-transparent leading-6 font-roboto">
                    <a href={props.eventUrl} className="text-teal-700 box-border caret-transparent">
                        {props.title}
                    </a>
                </h4>
                <span className="text-neutral-400 text-xs italic box-border caret-transparent block mb-2.5 font-volkhov">
                    {props.dateTime}
                </span>
            </div>
            <div className="box-border caret-transparent text-right w-[26%] md:w-[17%]">
                <div className="box-border caret-transparent">
                    <a
                        href={props.eventUrl}
                        className="text-zinc-800 text-xs font-bold bg-white box-border caret-transparent inline-block tracking-[1px] leading-[18.3428px] text-center uppercase text-nowrap align-middle border border-stone-300 px-3 py-1.5 rounded-[3px] border-solid font-roboto_condensed hover:bg-gray-200 hover:border-zinc-400"
                    >
                        Details
                    </a>
                </div>
            </div>
        </li>
    )
}
