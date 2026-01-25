import { Link } from '@tanstack/react-router'

import { BreadcrumbHeader } from '@/components/BreadcrumbHeader.tsx'
import { PageHeader } from '@/components/PageHeader.tsx'

type EventItem = {
    id: number
    day: string
    month: string
    title: string
    time: string
    url: string
}

const events: EventItem[] = [
    {
        id: 546,
        day: '25',
        month: 'Jan',
        title: 'Neujahrskonzert mit 3 Trompeten und Orgel in St. Martinus Haren',
        time: 'So. | 17:00',
        url: '/event/detail/546'
    },
    {
        id: 540,
        day: '06',
        month: 'Feb',
        title: 'Kinderkirche in Herz Jesu in Altharen',
        time: 'Fr. | 16:30',
        url: '/event/detail/540'
    },
    {
        id: 547,
        day: '07',
        month: 'Feb',
        title: 'Familienmesse in St. Martinus Haren',
        time: 'Sa. | 16:30',
        url: '/event/detail/547'
    }
]
export default function EventComponents() {
    return (
        <main className="bg-white">
            <BreadcrumbHeader />
            {/* Page Header */}
            <PageHeader />

            {/* Content */}
            <div className="container mx-auto px-12 py-12 grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Main */}
                <section className="lg:col-span-9">
                    <header className="mb-6 flex items-center justify-between">
                        <h3 className="text-2xl font-semibold">Alle Events</h3>
                    </header>

                    <ul className="space-y-4">
                        {events.map(event => (
                            <li
                                key={event.id}
                                className="flex items-center gap-6 rounded-xl border p-4 hover:shadow-sm transition"
                            >
                                {/* Date */}
                                <div className="w-16 text-center rounded-lg bg-gray-100 py-2">
                                    <div className="text-xl font-bold">{event.day}</div>
                                    <div className="text-sm uppercase text-gray-500">
                                        {event.month}
                                    </div>
                                </div>

                                {/* Details */}
                                <div className="flex-1">
                                    <h4 className="font-semibold text-lg">
                                        <Link to={event.url} className="hover:text-primary">
                                            {event.title}
                                        </Link>
                                    </h4>
                                    <span className="text-sm text-gray-500">{event.time}</span>
                                </div>

                                {/* CTA */}
                                <Link
                                    to={event.url}
                                    className="inline-flex items-center rounded-lg border px-4 py-2 text-sm font-medium hover:bg-gray-100"
                                >
                                    Details
                                </Link>
                            </li>
                        ))}
                    </ul>
                </section>

                {/* Sidebar */}
                <aside className="lg:col-span-3 space-y-8">
                    {/* Featured Event */}
                    <div className="rounded-xl border overflow-hidden">
                        <img
                            src="/bilder/04e6270259968d03382380a62d5054d3689ef854.png"
                            alt=""
                            className="w-full h-40 object-cover"
                        />

                        <div className="p-4 space-y-3">
                            <span className="inline-block rounded bg-red-600 px-2 py-1 text-xs font-semibold text-white">
                                Demnächst
                            </span>

                            <div className="text-sm text-gray-600">
                                <span className="block text-xl font-bold text-gray-900">25</span>
                                <span>Jan. 26</span>
                            </div>

                            <h4 className="font-semibold">
                                <Link to="/events/details" className="hover:text-primary">
                                    Neujahrskonzert mit 3 Trompeten und Orgel in St. Martinus Haren
                                </Link>
                            </h4>

                            <p className="text-sm text-gray-600">Herzliche Einladung!</p>
                        </div>
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
                                    <a
                                        href="/post/details/884"
                                        className="font-medium hover:text-primary"
                                    >
                                        Fr., 06.02.2026, 16:30 Uhr Kinderkirche in der Herz Jesu
                                        Kirche in Altharen
                                    </a>
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
