type Props = {
    total: number
    currentIndex: number
    onSelect: (index: number) => void
}

export const CarouselIndicators = ({ total, currentIndex, onSelect }: Props) => {
    return (
        <ol className="absolute box-border flex flex-row justify-center caret-transparent list-none text-center w-full z-[111] pl-0 left-0 -bottom-10 md:bottom-2.5">
            {Array.from({ length: total }).map((_, i) => (
                <li key={i} className="box-border caret-transparent">
                    <button
                        type="button"
                        aria-label={`Slide ${i + 1}`}
                        aria-current={i === currentIndex}
                        onClick={() => onSelect(i)}
                        className={`${i === currentIndex ? 'bg-teal-700' : 'bg-white'} text-zinc-600 box-border caret-transparent inline-block h-3 w-3 mx-1.5 rounded-full hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500`}
                    />
                </li>
            ))}
        </ol>
    )
}
