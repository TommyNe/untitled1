import { useEffect, useMemo, useState } from 'react'

type Props = {
    date?: string
}
export const EventCountdown = ({ date }: Props) => {
    const targetTime = useMemo(() => (date ? new Date(date).getTime() : NaN), [date])

    const computeRemaining = () => {
        if (Number.isNaN(targetTime)) return null
        const diffMs = targetTime - Date.now()
        const clampedMs = diffMs < 0 ? 0 : diffMs
        const totalSeconds = Math.floor(clampedMs / 1000)
        const days = Math.floor(totalSeconds / 86_400)
        const hours = Math.floor((totalSeconds % 86_400) / 3_600)
        const minutes = Math.floor((totalSeconds % 3_600) / 60)
        const seconds = totalSeconds % 60
        return { days, hours, minutes, seconds }
    }

    const [remaining, setRemaining] = useState(computeRemaining)

    useEffect(() => {
        if (Number.isNaN(targetTime)) {
            setRemaining(null)
            return
        }
        const tick = () => setRemaining(computeRemaining())
        tick()
        const id = setInterval(tick, 1_000)
        return () => clearInterval(id)
    }, [targetTime])

    const formatTwo = (value: number | undefined) =>
        value === undefined ? '--' : value.toString().padStart(2, '0')
    const days = remaining?.days ?? '--'
    const hours = formatTwo(remaining?.hours)
    const minutes = formatTwo(remaining?.minutes)
    const seconds = formatTwo(remaining?.seconds)

    return (
        <div className="box-border caret-transparent shrink-0 max-w-full w-full mt-5 px-3 md:w-[33.3333%] md:mt-0">
            <div className="box-border caret-transparent inline-block text-center w-[24%]">
                <span className="text-white text-lg bg-teal-700 box-border caret-transparent inline-block px-2.5 py-[5px] rounded-sm font-roboto_condensed">
                    {days}
                </span>
                <span className="text-xs box-border caret-transparent block mt-0.5">Tage</span>
            </div>
            <div className="box-border caret-transparent inline-block text-center w-[24%]">
                <span className="text-lg bg-stone-200 box-border caret-transparent inline-block px-2.5 py-[5px] rounded-sm font-roboto_condensed">
                    {hours}
                </span>
                <span className="text-xs box-border caret-transparent block mt-0.5">Std.</span>
            </div>
            <div className="box-border caret-transparent inline-block text-center w-[24%]">
                <span className="text-lg bg-stone-200 box-border caret-transparent inline-block px-2.5 py-[5px] rounded-sm font-roboto_condensed">
                    {minutes}
                </span>
                <span className="text-xs box-border caret-transparent block mt-0.5">min</span>
            </div>
            <div className="box-border caret-transparent inline-block text-center w-[24%]">
                <span className="text-lg bg-stone-200 box-border caret-transparent inline-block px-2.5 py-[5px] rounded-sm font-roboto_condensed">
                    {seconds}
                </span>
                <span className="text-xs box-border caret-transparent block mt-0.5">sec</span>
            </div>
        </div>
    )
}
