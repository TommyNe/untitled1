import { EventButton } from '@/sections/EventBanner/components/EventButton'
import { EventCountdown } from '@/sections/EventBanner/components/EventCountdown'
import { EventInfo } from '@/sections/EventBanner/components/EventInfo'
import { EventItem } from '@/types/aggregate'

type Props = {
    events: EventItem[]
}

export const EventBanner = ({ events }: Props) => {
    const event = events?.[0]
    const eventDateRaw = event?.date
    const formattedDate = (() => {
        if (!eventDateRaw) return undefined
        const parsed = new Date(eventDateRaw)
        if (Number.isNaN(parsed.getTime())) return eventDateRaw
        return parsed.toLocaleDateString('de-DE', { day: '2-digit', month: 'short', year: 'numeric' })
    })()
    const location = event?.place

    return (
        <div className="bg-stone-100 shadow-[rgba(0,0,0,0.07)_0px_2px_0px_0px] box-border caret-transparent py-5">
            <div className="relative box-border caret-transparent max-w-none w-full mx-auto px-6 md:max-w-[1200px]">
                <div className="relative box-border caret-transparent flex flex-wrap z-[2] -mx-3">
                    <EventInfo
                        variant="header"
                        labelPrimary="Nächste"
                        labelSecondary="Veranstaltung"
                    />
                    <EventInfo
                        variant="detail"
                        title={event?.title}
                        eventUrl="https://etwah.de/event/detail/472"
                        location={location}
                        date={formattedDate}
                    />
                    <EventCountdown date={eventDateRaw} />
                    <EventButton />
                </div>
            </div>
        </div>
    )
}
