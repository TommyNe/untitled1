export type QuickLinkCardProps = {
    href: string;
    imageUrl: string;
    imageAlt: string;
    title: string;
    linkText: string;
};

export const QuickLinkCard = (props: QuickLinkCardProps) => {
    return (
        <div className="relative box-border caret-transparent shrink-0 max-w-full w-full mb-5 px-3 md:w-[33.3333%] md:mb-0">
            <a
                href={props.href}
                className="text-zinc-600 bg-stone-100 box-border caret-transparent inline-block max-w-full underline border border-stone-200 p-[5px] rounded-[3px] border-solid hover:text-teal-700 hover:no-underline"
            >
                <img
                    src={props.imageUrl}
                    alt={props.imageAlt}
                    className="box-border caret-transparent max-w-full w-full"
                />
                <strong className="absolute text-white text-lg font-bold bg-teal-700 bg-[url('https://etwah.de/build/images/pattern.3bc6cea1.png')] box-border caret-transparent block leading-[25.7143px] z-10 px-[30px] py-2 left-2.5 bottom-[30px]">
                    {props.title}
                </strong>
                <span className="absolute text-zinc-800 bg-white box-border caret-transparent block z-[9] pl-[30px] pr-5 py-[5px] left-2.5 bottom-[30px]">
          {props.linkText}
        </span>
            </a>
        </div>
    );
};