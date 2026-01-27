import { useMemo, useState } from 'react'
import { ASSET_URLS } from '@/constands/baseUrls'
import { ContentItem } from '@/types/aggregate'

type Props = {
    posts?: ContentItem[]
}

export function NewsHomeList({ posts = [] }: Props) {
    const pageSize = 5
    const [page, setPage] = useState(1)

    const { items, totalPages } = useMemo(() => {
        const totalPages = Math.max(1, Math.ceil(posts.length / pageSize))
        const start = (page - 1) * pageSize
        const end = start + pageSize
        return { items: posts.slice(start, end), totalPages }
    }, [posts, page])

    const formatDate = (date?: string) => {
        if (!date) return ''
        const parsed = new Date(date)
        if (Number.isNaN(parsed.getTime())) return date

        return parsed.toLocaleDateString('de-DE', {
            day: '2-digit',
            month: 'short',
            year: 'numeric'
        })
    }

    return (
        <div className="box-border caret-transparent">
            <header className="border-b-stone-200 border-l-stone-500 border-r-stone-500 border-t-stone-500 box-border caret-transparent border-b">
                <h3 className="text-zinc-800 text-2xl box-border caret-transparent leading-9 mb-[15px] font-roboto">
                    Aktuelles
                </h3>
            </header>
            <section className="border-b-stone-500 border-l-stone-500 border-r-stone-500 border-t-stone-100 box-border caret-transparent border-t-4">
                <ul className="box-border caret-transparent list-none pl-0">
                    {items.map(post => {
                        const imageSrc = post.image ? `${ASSET_URLS.posts}${post.image}` : undefined
                        const postUrl = post.id ? `https://etwah.de/post/details/${post.id}` : '#'
                        const when = formatDate(post.date)
                        const location = post.location ? `, ${post.location}` : ''
                        const teaser = post.content?.replace(/<[^>]+>/g, '')?.slice(0, 140) ?? ''
                        return (
                            <li
                                key={post.id}
                                className="border-b-stone-200 border-l-stone-500 border-r-stone-500 border-t-stone-500 box-border caret-transparent w-full pt-5 pb-2.5 border-b"
                            >
                                <div className="box-border caret-transparent flex flex-wrap -mx-3">
                                    <div className="box-border caret-transparent shrink-0 max-w-full w-full px-3 md:w-[33.3333%]">
                                        {imageSrc ? (
                                            <a
                                                href={postUrl}
                                                className="relative text-zinc-600 box-border caret-transparent block max-w-full underline mb-2.5 hover:text-teal-700 hover:no-underline hover:border-teal-700"
                                            >
                                                <img
                                                    src={imageSrc}
                                                    alt={post.title || ''}
                                                    className="bg-stone-100 box-border caret-transparent inline-block max-w-full border border-stone-200 mb-5 p-[5px] rounded-[3px] border-solid md:mb-0"
                                                />
                                            </a>
                                        ) : null}
                                    </div>
                                    <div className="box-border caret-transparent shrink-0 max-w-full w-full px-3 md:w-[66.6667%]">
                                        <div className="border-b-stone-200 border-l-stone-500 border-r-stone-500 border-t-stone-500 box-border caret-transparent mb-3 pb-1.5 border-b">
                                            <h2 className="text-zinc-800 text-base box-border caret-transparent leading-6 font-roboto">
                                                <a
                                                    href={postUrl}
                                                    className="text-zinc-600 box-border caret-transparent hover:text-teal-700 hover:border-teal-700"
                                                >
                                                    {post.title}
                                                </a>
                                            </h2>
                                            <span className="text-neutral-400 text-xs italic box-border caret-transparent block mb-2.5 font-volkhov">
                                                {when}
                                                {location}
                                            </span>
                                        </div>
                                        <p className="text-base box-border caret-transparent mb-[15px]">
                                            {teaser}
                                            {teaser ? ' … ' : ''}
                                            <a
                                                href={postUrl}
                                                className="text-zinc-600 box-border caret-transparent underline hover:text-teal-700 hover:no-underline hover:border-teal-700"
                                            >
                                                ...mehr
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </li>
                        )
                    })}
                    {!items.length && (
                        <li className="box-border caret-transparent w-full p-4 text-sm text-neutral-500">
                            Keine Beiträge gefunden.
                        </li>
                    )}
                </ul>
                <div className="box-border caret-transparent flex items-center justify-between px-3 py-2 text-sm text-neutral-600">
                    <button
                        type="button"
                        className="text-xs font-semibold bg-white box-border caret-transparent inline-block tracking-[1px] leading-[18.3428px] text-center uppercase text-nowrap align-middle border border-stone-300 px-3 py-1.5 rounded-[3px] border-solid font-roboto_condensed disabled:opacity-50 disabled:cursor-not-allowed"
                        onClick={() => setPage(p => Math.max(1, p - 1))}
                        disabled={page <= 1}
                    >
                        Zurück
                    </button>
                    <span className="box-border caret-transparent">
                        Seite {page} von {totalPages}
                    </span>
                    <button
                        type="button"
                        className="text-xs font-semibold bg-white box-border caret-transparent inline-block tracking-[1px] leading-[18.3428px] text-center uppercase text-nowrap align-middle border border-stone-300 px-3 py-1.5 rounded-[3px] border-solid font-roboto_condensed disabled:opacity-50 disabled:cursor-not-allowed"
                        onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                        disabled={page >= totalPages}
                    >
                        Weiter
                    </button>
                </div>
            </section>
        </div>
    )
}
