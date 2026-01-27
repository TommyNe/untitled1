import { ASSET_URLS } from '@/constands/baseUrls'
import { AggregateResponse } from '@/types/aggregate.ts'

type Props = {
    data: AggregateResponse
}
export const InfoSection = ({ data }: Props) => {
    const wasTunWenn = data.wtw || []
    const anzeigen = data.ads || []
    const jobs = data.jobs || []

    const stripHtml = (value?: string) => value?.replace(/<[^>]+>/g, '') || ''

    return (
        <div className="box-border caret-transparent">
            <header className="border-b-stone-200 border-l-stone-500 border-r-stone-500 border-t-stone-500 box-border caret-transparent border-b">
                <h3 className="text-zinc-800 text-2xl box-border caret-transparent leading-9 mb-[15px] font-roboto">
                    Was Tun Wenn ...
                </h3>
            </header>
            <section className="border-b-stone-500 border-l-stone-500 border-r-stone-500 border-t-stone-100 box-border caret-transparent border-t-4">
                <ul className="box-border caret-transparent list-none pl-0">
                    {wasTunWenn.map(item => (
                        <li
                            key={item.id}
                            className="relative bg-stone-100 box-border caret-transparent w-full mt-5 mb-2.5 p-[30px] before:accent-auto before:border-b-stone-200 before:border-l-stone-500 before:border-t-stone-500 before:box-border before:caret-transparent before:text-stone-500 before:block before:text-sm before:not-italic before:normal-nums before:font-normal before:h-0 before:tracking-[normal] before:leading-5 before:list-outside before:list-none before:pointer-events-auto before:absolute before:text-start before:indent-[0px] before:normal-case before:visible before:w-0 before:border-r-transparent before:border-r-[20px] before:border-b-[20px] before:border-separate before:right-0 before:top-0 before:font-roboto after:accent-auto after:border-b-stone-500 after:border-r-stone-500 after:box-border after:caret-transparent after:text-stone-500 after:block after:text-sm after:not-italic after:normal-nums after:font-normal after:h-0 after:tracking-[normal] after:leading-5 after:list-outside after:list-none after:pointer-events-auto after:absolute after:text-start after:indent-[0px] after:normal-case after:visible after:w-0 after:border-l-transparent after:border-l-[19px] after:border-t-white after:border-t-[19px] after:border-separate after:right-0 after:top-0 after:font-roboto"
                        >
                            <h2 className="text-zinc-800 text-base box-border caret-transparent leading-6 font-roboto">
                                <a
                                    href={item.id ? `https://etwah.de/wastunwenn/${item.id}` : '#'}
                                    className="text-zinc-600 box-border caret-transparent hover:text-teal-700 hover:border-teal-700"
                                >
                                    &gt;&gt;&gt; {item.title}
                                </a>
                            </h2>
                        </li>
                    ))}
                    {!wasTunWenn.length && (
                        <li className="box-border caret-transparent w-full p-4 text-sm text-neutral-500">
                            Keine Einträge gefunden.
                        </li>
                    )}
                </ul>
            </section>

            <header className="border-b-stone-200 border-l-stone-500 border-r-stone-500 border-t-stone-500 box-border caret-transparent border-b">
                <h3 className="text-zinc-800 text-2xl box-border caret-transparent leading-9 mb-[15px] font-roboto">
                    Anzeige
                </h3>
            </header>
            <section className="border-b-stone-500 border-l-stone-500 border-r-stone-500 border-t-stone-100 box-border caret-transparent border-t-4">
                <ul className="box-border caret-transparent list-none pl-0">
                    {anzeigen.map(item => {
                        const image = item.file ? `${ASSET_URLS.posts}${item.file}` : undefined
                        const url = item.id ? `https://etwah.de/post/details/${item.id}` : '#'
                        return (
                            <li
                                key={item.id}
                                className="relative bg-stone-100 box-border caret-transparent w-full mt-5 mb-2.5 p-[30px] before:accent-auto before:border-b-stone-200 before:border-l-stone-500 before:border-t-stone-500 before:box-border before:caret-transparent before:text-stone-500 before:block before:text-sm before:not-italic before:normal-nums before:font-normal before:h-0 before:tracking-[normal] before:leading-5 before:list-outside before:list-none before:pointer-events-auto before:absolute before:text-start before:indent-[0px] before:normal-case before:visible before:w-0 before:border-r-transparent before:border-r-[20px] before:border-b-[20px] before:border-separate before:right-0 before:top-0 before:font-roboto after:accent-auto after:border-b-stone-500 after:border-r-stone-500 after:box-border after:caret-transparent after:text-stone-500 after:block after:text-sm after:not-italic after:normal-nums after:font-normal after:h-0 after:tracking-[normal] after:leading-5 after:list-outside after:list-none after:pointer-events-auto after:absolute after:text-start after:indent-[0px] after:normal-case after:visible after:w-0 after:border-l-transparent after:border-l-[19px] after:border-t-white after:border-t-[19px] after:border-separate after:right-0 after:top-0 after:font-roboto"
                            >
                                <a
                                    href={url}
                                    className="text-zinc-600 box-border caret-transparent hover:text-teal-700 hover:border-teal-700"
                                >
                                    <h2 className="text-zinc-800 text-base box-border caret-transparent leading-6 font-roboto">
                                        {item.title}
                                    </h2>
                                    {image && (
                                        <img
                                            src={image}
                                            alt={item.title || ''}
                                            className="box-border caret-transparent max-w-full"
                                        />
                                    )}
                                    <p className="text-base box-border caret-transparent mb-[15px]">
                                        {stripHtml(item.content)?.slice(0, 240)}
                                    </p>
                                </a>
                            </li>
                        )
                    })}
                    {!anzeigen.length && (
                        <li className="box-border caret-transparent w-full p-4 text-sm text-neutral-500">
                            Keine Anzeigen gefunden.
                        </li>
                    )}
                </ul>
            </section>

            <header className="border-b-stone-200 border-l-stone-500 border-r-stone-500 border-t-stone-500 box-border caret-transparent border-b">
                <h3 className="text-zinc-800 text-2xl box-border caret-transparent leading-9 mb-[15px] font-roboto">
                    Jobs
                </h3>
            </header>
            <section className="border-b-stone-500 border-l-stone-500 border-r-stone-500 border-t-stone-100 box-border caret-transparent border-t-4">
                <ul className="box-border caret-transparent list-none pl-0">
                    {jobs.map(item => {
                        console.log('jobs', item)
                        const image = item.image ? `${ASSET_URLS.posts}${item.image}` : undefined
                        const url = item.id ? `https://etwah.de/post/details/${item.id}` : '#'
                        return (
                            <li
                                key={item.id}
                                className="relative bg-stone-100 box-border caret-transparent w-full mt-5 mb-2.5 p-[30px] before:accent-auto before:border-b-stone-200 before:border-l-stone-500 before:border-t-stone-500 before:box-border before:caret-transparent before:text-stone-500 before:block before:text-sm before:not-italic before:normal-nums before:font-normal before:h-0 before:tracking-[normal] before:leading-5 before:list-outside before:list-none before:pointer-events-auto before:absolute before:text-start before:indent-[0px] before:normal-case before:visible before:w-0 before:border-r-transparent before:border-r-[20px] before:border-b-[20px] before:border-separate before:right-0 before:top-0 before:font-roboto after:accent-auto after:border-b-stone-500 after:border-r-stone-500 after:box-border after:caret-transparent after:text-stone-500 after:block after:text-sm after:not-italic after:normal-nums after:font-normal after:h-0 after:tracking-[normal] after:leading-5 after:list-outside after:list-none after:pointer-events-auto after:absolute after:text-start after:indent-[0px] after:normal-case after:visible after:w-0 after:border-l-transparent after:border-l-[19px] after:border-t-white after:border-t-[19px] after:border-separate after:right-0 after:top-0 after:font-roboto"
                            >
                                <a
                                    href={url}
                                    className="text-zinc-600 box-border caret-transparent hover:text-teal-700 hover:border-teal-700"
                                >
                                    <h2 className="text-zinc-800 text-base box-border caret-transparent leading-6 font-roboto">
                                        {item.title}
                                    </h2>
                                    {image && (
                                        <img
                                            src={image}
                                            alt={item.title || ''}
                                            className="box-border caret-transparent max-w-full"
                                        />
                                    )}
                                    <p className="text-base box-border caret-transparent mb-[15px]">
                                        {stripHtml(item.content)?.slice(0, 240)}
                                    </p>
                                </a>
                            </li>
                        )
                    })}
                    {!jobs.length && (
                        <li className="box-border caret-transparent w-full p-4 text-sm text-neutral-500">
                            Keine Jobs gefunden.
                        </li>
                    )}
                </ul>
            </section>

            <header className="border-b-stone-200 border-l-stone-500 border-r-stone-500 border-t-stone-500 box-border caret-transparent border-b">
                <h3 className="text-zinc-800 text-2xl box-border caret-transparent leading-9 mb-[15px] font-roboto">
                    Spenden
                </h3>
            </header>
            <section className="border-b-stone-500 border-l-stone-500 border-r-stone-500 border-t-stone-100 box-border caret-transparent border-t-4">
                <ul className="box-border caret-transparent list-none pl-0">
                    <li className="relative bg-stone-100 box-border caret-transparent text-center w-full mt-5 mb-2.5 p-[30px] before:accent-auto before:border-b-stone-200 before:border-l-stone-500 before:border-t-stone-500 before:box-border before:caret-transparent before:text-stone-500 before:block before:text-sm before:not-italic before:normal-nums before:font-normal before:h-0 before:tracking-[normal] before:leading-5 before:list-outside before:list-none before:pointer-events-auto before:absolute before:text-center before:indent-[0px] before:normal-case before:visible before:w-0 before:border-r-transparent before:border-r-[20px] before:border-separate before:right-0 before:top-0 before:font-roboto after:accent-auto after:border-b-stone-500 after:border-r-stone-500 after:box-border after:caret-transparent after:text-stone-500 after:block after:text-sm after:not-italic after:normal-nums after:font-normal after:h-0 after:tracking-[normal] after:leading-5 after:list-outside after:list-none after:pointer-events-auto after:absolute after:text-center after:indent-[0px] after:normal-case after:visible after:w-0 after:border-l-transparent after:border-l-[19px] after:border-t-white after:border-t-[19px] after:border-separate after:right-0 after:top-0 after:font-roboto">
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
    )
}
