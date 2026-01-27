import { EventItem } from '@/sections/MainContent/components/EventItem'
import { NewsHomeList } from '@/sections/MainContent/components/NewsHomeList'
import { AggregateResponse } from '@/types/aggregate'

type Props = {
    data?: AggregateResponse
}

export const EventsList = ({ data }: Props) => {
    const events = data?.events || []
    const news = data?.posts || []

    const formatEventDate = (value?: string) => {
        if (!value) return { day: '--', month: '--', dateTime: '—' }
        const parsed = new Date(value)
        if (Number.isNaN(parsed.getTime())) return { day: '--', month: '--', dateTime: value }
        const day = parsed.toLocaleDateString('de-DE', { day: '2-digit' })
        const month = parsed.toLocaleDateString('de-DE', { month: 'short' })
        const weekday = parsed.toLocaleDateString('de-DE', { weekday: 'short' })
        const time = parsed.toLocaleTimeString('de-DE', { hour: '2-digit', minute: '2-digit' })
        return { day, month, dateTime: `${weekday} | ${time} Uhr` }
    }

    const upcoming = events.slice(0, 5)

    return (
        <div className="box-border caret-transparent shrink-0 max-w-full w-full px-3 md:w-[66.6667%]">
            <div className="box-border caret-transparent">
                <header className="border-b-stone-200 border-l-stone-500 border-r-stone-500 border-t-stone-500 box-border caret-transparent border-b">
                    <h3 className="text-zinc-800 text-2xl box-border caret-transparent leading-9 mb-[15px] font-roboto">
                        Die nächsten Events
                    </h3>
                </header>
                <section className="border-b-stone-500 border-l-stone-500 border-r-stone-500 border-t-stone-100 box-border caret-transparent border-t-4">
                    <ul className="box-border caret-transparent list-none pl-0">
                        {upcoming.map(event => {
                            const { day, month, dateTime } = formatEventDate(
                                event.startDate || event.date
                            )
                            const eventUrl = event.id
                                ? `https://etwah.de/event/detail/${event.id}`
                                : '#'
                            return (
                                <EventItem
                                    key={event.id}
                                    day={day}
                                    month={month}
                                    title={event.title || ''}
                                    eventUrl={eventUrl}
                                    dateTime={dateTime}
                                />
                            )
                        })}
                        {!upcoming.length && (
                            <li className="box-border caret-transparent p-4 text-sm text-neutral-500">
                                Keine Events gefunden.
                            </li>
                        )}
                    </ul>
                </section>
            </div>
            <div className="box-border caret-transparent clear-both h-[30px] w-full"></div>
            <NewsHomeList posts={news} />
        </div>
    )
}
