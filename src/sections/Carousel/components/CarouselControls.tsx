type Props = {
    onPrev: () => void
    onNext: () => void
}

export const CarouselControls = ({ onPrev, onNext }: Props) => {
    return (
        <div className="pointer-events-none select-none">
            <button
                type="button"
                onClick={onPrev}
                aria-label="Vorheriges Bild"
                className="pointer-events-auto absolute text-white text-2xl bg-black/50 hover:bg-black/70 box-border caret-transparent h-12 w-12 flex items-center justify-center rounded-full top-1/2 -translate-y-1/2 left-4 focus:outline-none focus:ring-2 focus:ring-white"
            >
                ‹
            </button>
            <button
                type="button"
                onClick={onNext}
                aria-label="Nächstes Bild"
                className="pointer-events-auto absolute text-white text-2xl bg-black/50 hover:bg-black/70 box-border caret-transparent h-12 w-12 flex items-center justify-center rounded-full top-1/2 -translate-y-1/2 right-4 focus:outline-none focus:ring-2 focus:ring-white"
            >
                ›
            </button>
        </div>
    )
}
