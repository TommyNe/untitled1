export type EventInfoProps = {
    variant: "header" | "detail";
    title?: string;
    eventUrl?: string;
    location?: string;
    date?: string;
    labelPrimary?: string;
    labelSecondary?: string;
};

export const EventInfo = (props: EventInfoProps) => {
    if (props.variant === "header") {
        return (
            <div className="box-border caret-transparent shrink-0 max-w-full w-6/12 px-3 md:w-3/12">
                <div className="box-border caret-transparent flex">
          <span className="box-border caret-transparent hidden min-h-0 min-w-0 mr-[15px] md:block md:min-h-[auto] md:min-w-[auto]">
            <i className="text-[42px] box-border caret-transparent inline-block leading-[42px] font-font_awesome_5_free before:accent-auto before:box-border before:caret-transparent before:text-stone-500 before:text-[42px] before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-[42px] before:list-outside before:list-disc before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-font_awesome_5_free"></i>
          </span>
                    <span className="box-border caret-transparent block">
            <span className="text-white text-[11px] font-bold bg-teal-700 box-border caret-transparent inline-block uppercase mt-1 px-[5px] rounded-sm font-roboto_condensed">
              {props.labelPrimary}
            </span>
            <strong className="text-zinc-800 text-base font-bold box-border caret-transparent block tracking-[2px] uppercase font-roboto_condensed">
              {props.labelSecondary}
            </strong>
          </span>
                </div>
            </div>
        );
    }

    return (
        <div className="box-border caret-transparent shrink-0 max-w-full w-6/12 px-3 md:w-3/12">
            <h5 className="text-zinc-800 text-base font-bold box-border caret-transparent leading-6 font-roboto">
                <a
                    href={props.eventUrl}
                    className="text-zinc-600 box-border caret-transparent hover:text-teal-700 hover:border-teal-700"
                >
                    {props.title}
                </a>
            </h5>
            <span className="text-neutral-400 text-xs italic box-border caret-transparent block mb-2.5 font-volkhov">
        {props.location}, {props.date}
      </span>
        </div>
    );
};
