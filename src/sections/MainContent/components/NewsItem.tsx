export type NewsItemProps = {
    imageUrl: string;
    imageLink: string;
    title: string;
    titleLink: string;
    date: string;
    location: string;
    description: string;
    moreLink: string;
};

export const NewsItem = (props: NewsItemProps) => {
    return (
        <li className="border-b-stone-200 border-l-stone-500 border-r-stone-500 border-t-stone-500 box-border caret-transparent w-full pt-5 pb-2.5 border-b">
            <div className="box-border caret-transparent flex flex-wrap -mx-3">
                <div className="box-border caret-transparent shrink-0 max-w-full w-full px-3 md:w-[33.3333%]">
                    <a
                        href={props.imageLink}
                        className="relative text-zinc-600 box-border caret-transparent block max-w-full underline mb-2.5 hover:text-teal-700 hover:no-underline hover:border-teal-700"
                    >
                        <img
                            src={props.imageUrl}
                            alt=""
                            className="bg-stone-100 box-border caret-transparent inline-block max-w-full border border-stone-200 mb-5 p-[5px] rounded-[3px] border-solid md:mb-0"
                        />
                    </a>
                </div>
                <div className="box-border caret-transparent shrink-0 max-w-full w-full px-3 md:w-[66.6667%]">
                    <div className="border-b-stone-200 border-l-stone-500 border-r-stone-500 border-t-stone-500 box-border caret-transparent mb-3 pb-1.5 border-b">
                        <h2 className="text-zinc-800 text-base box-border caret-transparent leading-6 font-roboto">
                            <a
                                href={props.titleLink}
                                className="text-zinc-600 box-border caret-transparent hover:text-teal-700 hover:border-teal-700"
                            >
                                {props.title}
                            </a>
                        </h2>
                        <span className="text-neutral-400 text-xs italic box-border caret-transparent block mb-2.5 font-volkhov">
              <i className="not-italic font-black box-border caret-transparent inline-block leading-3 mr-1 font-font_awesome_5_free before:accent-auto before:box-border before:caret-transparent before:text-neutral-400 before:text-xs before:not-italic before:normal-nums before:font-black before:tracking-[normal] before:leading-3 before:list-outside before:list-none before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-font_awesome_5_free"></i>
                            {` ${props.date},  ${props.location} `}
            </span>
                    </div>
                    <p className="text-base box-border caret-transparent mb-[15px]">
                        {props.description}{" "}
                        <a
                            href={props.moreLink}
                            className="text-zinc-600 box-border caret-transparent underline hover:text-teal-700 hover:no-underline hover:border-teal-700"
                        >
                            ...mehr
                        </a>
                    </p>
                </div>
            </div>
        </li>
    );
};
