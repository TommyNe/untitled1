import { EventInfo } from "@/sections/EventBanner/components/EventInfo";
import { EventCountdown } from "@/sections/EventBanner/components/EventCountdown";
import { EventButton } from "@/sections/EventBanner/components/EventButton";

export const EventBanner = () => {
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
                        title="Gräbersegnung auf dem Friedhof für St. Martinus Haren"
                        eventUrl="https://etwah.de/event/detail/472"
                        location="Haren"
                        date="31 Okt 2025"
                    />
                    <EventCountdown />
                    <EventButton />
                </div>
            </div>
        </div>
    );
};