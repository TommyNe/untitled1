import {Link} from "@tanstack/react-router";

interface Props {
    label?: string;
    key: string;
    isOpen?: (key: string) => boolean;
    toggle?: (key: string) => void;
    route: string;
    id?: string;
    subMenuItems?: Array<{
        label: string;
        link: string;
        subItems?: Array<{
            label: string;
            link: string;
            subItems?: Array<{
                label: string;
                link: string;
            }>;
        }>;
    }>;
}


export default function NavElement({ key, isOpen, toggle, route, id, subMenuItems, label }: Props) {
    console.log('dd', subMenuItems)
    return (
        <li className="relative text-base box-border caret-transparent block leading-[normal] text-left uppercase w-full md:inline-block md:leading-[50px] md:text-center md:w-auto group">
            <div className="flex items-center">
                <Link
                    to={route}
                    className="text-zinc-600 border-b-stone-200 border-l-zinc-600 border-r-zinc-600 border-t-zinc-600 box-border caret-transparent block leading-[normal] text-left py-5 border-b md:border-b-zinc-600 md:leading-[50px] md:text-center md:py-0 md:border-b-0 hover:text-teal-700 hover:border-b-teal-700 hover:border-l-teal-700 hover:border-r-teal-700 hover:border-t-teal-700"
                >
                    {label}
                </Link>
                <button
                    type="button"
                    aria-haspopup="menu"
                    aria-controls="submenu-home"
                    aria-expanded={!!isOpen?.(key)}
                    onClick={(e) => { e.preventDefault(); toggle?.(key); }}
                    className="ml-1 inline-flex h-6 w-6 items-center justify-center rounded hover:bg-zinc-100 focus:outline-none focus:ring-2 focus:ring-teal-500"
                    title="Untermenü umschalten"
                >
                    ▾
                </button>
            </div>
            <ul
                id={id}
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
                    {subMenuItems && subMenuItems.map((item) => (
                    <li className="relative text-sm box-border caret-transparent block leading-[normal] text-left w-full md:text-center md:w-auto">
                        <Link
                            to={item.link}
                            className="text-zinc-600 border-b-stone-100 border-l-zinc-600 border-r-zinc-600 border-t-zinc-600 box-border caret-transparent block text-left text-nowrap py-2.5 border-b md:text-center hover:text-teal-700 hover:border-l-teal-700 hover:border-r-teal-700 hover:border-t-teal-700 px-2"
                        >
                            {item.label}
                        </Link>
                        {item.subItems && (
                            <ul className="pl-4">
                                {item.subItems.map((subItem) => (
                                    <li key={subItem.link} className="text-sm">
                                        <Link
                                            to={subItem.link}
                                            className="text-zinc-600 block py-2.5 hover:text-teal-700"
                                        >
                                            {subItem.label}
                                        </Link>
                                        {item.subItems && (
                                            <ul className="pl-4">
                                                {item.subItems.map((subItem) => (
                                                    <li key={subItem.link} className="text-sm">
                                                        <Link
                                                            to={subItem.link}
                                                            className="text-zinc-600 block py-2.5 hover:text-teal-700"
                                                        >
                                                            {subItem.label}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                    ))}
                </div>
            </ul>
        </li>
    );
}