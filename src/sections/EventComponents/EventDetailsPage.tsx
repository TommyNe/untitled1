import { Link } from '@tanstack/react-router'

import { BreadcrumbHeader } from '@/components/BreadcrumbHeader.tsx'
import { PageHeader } from '@/components/PageHeader.tsx'

export default function EventDetailPage() {
    return (
        <main role="main" className="bg-white">
            <BreadcrumbHeader />
            {/* Page Header */}
            <PageHeader />
            <div className="container mx-auto px-12 py-12 grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Main Content */}
                <section className="lg:col-span-9 space-y-8">
                    {/* Header */}
                    <header className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                        <h2 className="text-3xl font-bold leading-tight">
                            Neujahrskonzert mit 3 Trompeten und Orgel in St. Martinus Haren
                        </h2>

                        {/* Toolbar */}
                        <div className="flex gap-2">
                            <button
                                onClick={() => window.print()}
                                className="rounded-lg border p-2 hover:bg-gray-100"
                                title="Print"
                            >
                                🖨️
                            </button>

                            <button
                                className="rounded-lg border p-2 hover:bg-gray-100"
                                title="Contact"
                            >
                                ✉️
                            </button>

                            <a
                                href="https://www.google.com/maps/search/Haren"
                                target="_blank"
                                rel="noreferrer"
                                className="rounded-lg border p-2 hover:bg-gray-100"
                                title="Location"
                            >
                                📍
                            </a>
                        </div>
                    </header>

                    {/* Content */}
                    <article className="space-y-8">
                        <img
                            src="/bilder/04e6270259968d03382380a62d5054d3689ef854.png"
                            alt=""
                            className="w-full rounded-xl object-cover"
                        />

                        {/* Event Details */}
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                            <div className="md:col-span-8">
                                <div className="rounded-xl border">
                                    <div className="border-b px-6 py-4">
                                        <h3 className="text-lg font-semibold">Event details</h3>
                                    </div>

                                    <ul className="px-6 py-4 space-y-2 text-sm text-gray-700">
                                        <li>
                                            📅 <strong>Sonntag</strong> | 25 Jan, 2026
                                        </li>
                                        <li>⏰ 17:00 Uhr</li>
                                        <li>📍 Haren</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Description */}
                        <div className="prose max-w-none">
                            <p>Herzliche Einladung!</p>
                        </div>
                    </article>
                </section>

                {/* Sidebar */}
                <aside className="lg:col-span-3 space-y-10">
                    {/* Upcoming Events */}
                    <div>
                        <h3 className="mb-4 text-xl font-semibold">Nächste Events</h3>

                        <ul className="space-y-4">
                            {[
                                {
                                    date: '25',
                                    month: 'Jan',
                                    title: 'Neujahrskonzert mit 3 Trompeten und Orgel in St. Martinus Haren',
                                    time: 'So., 17:00 Uhr'
                                },
                                {
                                    date: '06',
                                    month: 'Feb',
                                    title: 'Kinderkirche in Herz Jesu in Altharen',
                                    time: 'Fr., 16:30 Uhr'
                                },
                                {
                                    date: '07',
                                    month: 'Feb',
                                    title: 'Familienmesse in St. Martinus Haren',
                                    time: 'Sa., 16:30 Uhr'
                                }
                            ].map((event, idx) => (
                                <li key={idx} className="flex gap-4">
                                    <div className="w-14 text-center rounded-lg bg-gray-100 py-2">
                                        <div className="font-bold">{event.date}</div>
                                        <div className="text-xs uppercase text-gray-500">
                                            {event.month}
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className="font-medium leading-snug">
                                            <Link
                                                to="/events/details"
                                                className="hover:text-primary"
                                            >
                                                {event.title}
                                            </Link>
                                        </h4>
                                        <span className="text-sm text-gray-500">{event.time}</span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Recent Posts */}
                    <div>
                        <h3 className="mb-4 text-xl font-semibold">Aktuelles</h3>

                        <ul className="space-y-4">
                            <li className="flex gap-3">
                                <img
                                    src="/bilder/e806202607d28b89202ad56d605a9c3c61bd0c3f.png"
                                    alt=""
                                    className="h-16 w-16 rounded object-cover"
                                />
                                <div>
                                    <Link
                                        to="/post/details/884"
                                        className="font-medium hover:text-primary"
                                    >
                                        Fr., 06.02.2026, 16:30 Uhr Kinderkirche in der Herz Jesu
                                        Kirche in Altharen
                                    </Link>
                                    <div className="text-xs text-gray-500">am 29 Mai, 2025</div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </aside>
            </div>
        </main>
    )
}
