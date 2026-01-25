import { Link } from '@tanstack/react-router'
import type { ReactNode } from 'react'
import {BreadcrumbHeader} from "@/components/BreadcrumbHeader.tsx";
import {PageHeader} from "@/components/PageHeader.tsx";

type NewsMeta = {
    id: string
    title: string
    createdAt: string
    category: string
    categoryUrl: string
    image: { src: string; alt?: string }
    body: { type: 'paragraph'; content: ReactNode }[]
}

type SidebarCategory = { label: string; href: string }

type RecentPost = { id: string; title: string; date: string; url: string }

const NEWS_DATA: Record<string, NewsMeta> = {
    '1050': {
        id: '1050',
        title: 'So., 25.01.2025, 17 Uhr Neujahrskonzert mit 3 Trompeten und Orgel',
        createdAt: '04. Jan. 2026',
        category: 'All',
        categoryUrl: '/post/all',
        image: {
            src: '/bilder/8dd1069aa0ff3ac1a84629f2047d983ccf46b459.png',
            alt: 'Neujahrskonzert Bild'
        },
        body: [
            {
                type: 'paragraph',
                content: (
                    <span className="text-base">
                        Herzliche Einladung! Weitere Infos im Post! Hinweise zu unserem Organisten{' '}
                        <strong>Tom Jänen</strong> findet ihr{' '}
                        <strong>
                            &gt;&gt;{' '}
                            <a
                                className="text-blue-600 underline"
                                href="https://www.katholisch.de/artikel/65764-man-kann-alles-vor-gott-bringen-das-schafft-nur-die-musik"
                                target="_blank"
                                rel="noreferrer"
                            >
                                hier
                            </a>
                        </strong>
                    </span>
                )
            }
        ]
    }
}

const CATEGORIES: SidebarCategory[] = [
    { label: 'Emmeln', href: '/post/emmeln' },
    { label: 'Tinnen', href: '/post/tinnen' },
    { label: 'Wesuwe', href: '/post/wesuwe' },
    { label: 'Altharen', href: '/post/altharen' },
    { label: 'Haren', href: '/post/haren' }
]

const RECENT_POSTS: RecentPost[] = [
    {
        id: '1050',
        title: 'So., 25.01.2025, 17 Uhr Neujahrskonzert mit 3 Trompeten und Orgel',
        date: 'am 04. Jan. 2026',
        url: '/post/details/1050'
    },
    {
        id: '1021',
        title: 'Mo., 26.01.2026, 19 Uhr ökum. Friedensgebet St. Marien Tinnen',
        date: 'am 21. Nov. 2025',
        url: '/post/details/1021'
    },
    {
        id: '1043',
        title: 'Sa., 31.01.2025, 10 Uhr kfd Haren Generalversammlung BDH',
        date: 'am 18. Dez. 2025',
        url: '/post/details/1043'
    }
]

type NewsDetailPageProps = {
    id: string
}

export const NewsDetailPage = ({ id }: NewsDetailPageProps) => {
    const news = NEWS_DATA[id] ?? NEWS_DATA['1050']

    return (
        <main role="main" className="bg-white">
            <BreadcrumbHeader />
            <PageHeader />
            <div className="mx-auto max-w-6xl px-6 py-12 lg:grid lg:grid-cols-12 lg:gap-8">
                <section className="lg:col-span-9 space-y-6">
                    <header className="space-y-2">
                        <h2 className="text-3xl font-semibold text-gray-900 leading-tight">
                            {news.title}
                        </h2>
                        <div className="flex flex-wrap gap-3 text-sm text-gray-600">
                            <span className="inline-flex items-center gap-2">
                                <span aria-hidden>📅</span>
                                <span>Erstellt am {news.createdAt}</span>
                            </span>
                            <span className="inline-flex items-center gap-2">
                                <span aria-hidden>🗂️</span>
                                <span>
                                    Gemeinde:{' '}
                                    <Link
                                        to={news.categoryUrl}
                                        className="text-blue-600 hover:underline"
                                    >
                                        {news.category}
                                    </Link>
                                </span>
                            </span>
                        </div>
                    </header>

                    <article className="space-y-6">
                        <div className="overflow-hidden rounded-xl border bg-gray-50">
                            <img
                                src={news.image.src}
                                alt={news.image.alt ?? news.title}
                                className="h-auto w-full object-cover"
                            />
                        </div>

                        <div className="prose max-w-none text-gray-800">
                            {news.body.map((block, idx) => (
                                <p key={idx} className="leading-relaxed">
                                    {block.content}
                                </p>
                            ))}
                        </div>
                    </article>
                </section>

                <aside className="mt-10 space-y-8 lg:col-span-3 lg:mt-0">
                    <form role="search" className="space-y-3">
                        <div className="rounded-xl border p-4 shadow-sm">
                            <label htmlFor="news-search" className="sr-only">
                                Suche
                            </label>
                            <div className="flex">
                                <input
                                    id="news-search"
                                    name="search"
                                    type="search"
                                    placeholder="Suche ..."
                                    className="w-full rounded-l-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
                                />
                                <button
                                    type="submit"
                                    className="rounded-r-md border border-l-0 border-gray-300 bg-gray-100 px-3 py-2 text-sm hover:bg-gray-200"
                                >
                                    🔍
                                </button>
                            </div>
                        </div>
                    </form>

                    <div className="rounded-xl border shadow-sm">
                        <div className="border-b px-4 py-3">
                            <h3 className="text-lg font-semibold">Gemeinden Aktuell</h3>
                        </div>
                        <ul className="divide-y text-sm text-gray-700">
                            {CATEGORIES.map(cat => (
                                <li key={cat.href} className="hover:bg-gray-50">
                                    <Link
                                        to={cat.href}
                                        className="block px-4 py-3 hover:text-gray-900"
                                    >
                                        {cat.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="rounded-xl border shadow-sm">
                        <div className="border-b px-4 py-3">
                            <h3 className="text-lg font-semibold">Aktuelles</h3>
                        </div>
                        <ul className="divide-y">
                            {RECENT_POSTS.map(post => (
                                <li key={post.id} className="px-4 py-3 text-sm">
                                    <div className="space-y-1">
                                        <Link
                                            to={post.url}
                                            className="font-medium text-blue-700 hover:underline"
                                        >
                                            {post.title}
                                        </Link>
                                        <div className="text-xs text-gray-600">
                                            <span aria-hidden>📅</span> {post.date}
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </aside>
            </div>
        </main>
    )
}
