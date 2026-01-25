import { Pagination } from '@/components/Pagination'
import { NewsItem } from '@/sections/MainContent/components/NewsItem'

export const NewsList = () => {
    return (
        <div className="box-border caret-transparent">
            <header className="border-b-stone-200 border-l-stone-500 border-r-stone-500 border-t-stone-500 box-border caret-transparent border-b">
                <h3 className="text-zinc-800 text-2xl box-border caret-transparent leading-9 mb-[15px] font-roboto">
                    Aktuelles
                </h3>
            </header>
            <section className="border-b-stone-500 border-l-stone-500 border-r-stone-500 border-t-stone-100 box-border caret-transparent border-t-4">
                <ul className="box-border caret-transparent list-none pl-0">
                    <NewsItem
                        imageUrl="https://etwah.de/bilder/6d4e75c73faaef4cecbb5e0bad36b13e9270d880.png"
                        imageLink="https://etwah.de/bilder/6d4e75c73faaef4cecbb5e0bad36b13e9270d880.png"
                        title="Mi., 29.10.2025, 9 Uhr Rosenkranzgebet St, Marien in Tinnen"
                        titleLink="https://etwah.de/post/details/932"
                        date="30.08.2025"
                        location="Tinnen"
                        description="Herzliche Einladung!"
                        moreLink="https://etwah.de/post/details/932"
                    />
                    <NewsItem
                        imageUrl="https://etwah.de/bilder/7305e07bb5fa06e97b5fc117289a9ce8dd5679c4.png"
                        imageLink="https://etwah.de/bilder/7305e07bb5fa06e97b5fc117289a9ce8dd5679c4.png"
                        title="Do., 30.10.2025,  Anmeldeschluss für den Senioren - Spielenachmittag am Do., 06.11.2025 organisiert vom Kolping Emmeln"
                        titleLink="https://etwah.de/post/details/965"
                        date="01.10.2025"
                        location="Emmeln"
                        description="Herzliche Einladung! Weitere Hinweise im Post!"
                        moreLink="https://etwah.de/post/details/965"
                    />
                    <NewsItem
                        imageUrl="https://etwah.de/bilder/66abe9e3869a2d9b824c5b4577ae138bd9b60e6d.png"
                        imageLink="https://etwah.de/bilder/66abe9e3869a2d9b824c5b4577ae138bd9b60e6d.png"
                        title="Fr., 31.10.2025, 16 Uhr Laternenlaufen in Landegge - AN DER BAUMBANK SANDE BZW. AN DEN VERABREDETEN TREFFPUNKTEN"
                        titleLink="https://etwah.de/post/details/980"
                        date="21.10.2025"
                        location="Haren"
                        description="Herzliche Einladung!"
                        moreLink="https://etwah.de/post/details/980"
                    />
                    <NewsItem
                        imageUrl="https://etwah.de/bilder/f5477811a8a35fb7d4069ee15dc1cfece89bd84f.png"
                        imageLink="https://etwah.de/bilder/f5477811a8a35fb7d4069ee15dc1cfece89bd84f.png"
                        title="Fr., 31.10.2025, 19  Uhr Rosenkranzgebet in der Herz Jesu Kirche in Altharen"
                        titleLink="https://etwah.de/post/details/983"
                        date="24.10.2025"
                        location="Altharen"
                        description="Herzliche Einladung!"
                        moreLink="https://etwah.de/post/details/983"
                    />
                    <NewsItem
                        imageUrl="https://etwah.de/bilder/d70b4f51c098f2554fd8c887976d4ba93013cb5b.png"
                        imageLink="https://etwah.de/bilder/d70b4f51c098f2554fd8c887976d4ba93013cb5b.png"
                        title="Gräbersegnung zu Allerheiligen Allerseelen"
                        titleLink="https://etwah.de/post/details/928"
                        date="28.08.2025"
                        location="ETWAH"
                        description="Herzliche Einladung!"
                        moreLink="https://etwah.de/post/details/928"
                    />
                    <NewsItem
                        imageUrl="https://etwah.de/bilder/dd7f5d19d618f8aad8835f6fde6ac6a5b52b0eb5.png"
                        imageLink="https://etwah.de/bilder/dd7f5d19d618f8aad8835f6fde6ac6a5b52b0eb5.png"
                        title="So., 02.11.2025, 17 Uhr hl. Messe in polnischer Sprache"
                        titleLink="https://etwah.de/post/details/945"
                        date="11.09.2025"
                        location="ETWAH"
                        description="Herzlich willkommen!"
                        moreLink="https://etwah.de/post/details/945"
                    />
                    <NewsItem
                        imageUrl="https://etwah.de/bilder/f02a466ac4c9616db0b8a14554d100b00d17a32a.png"
                        imageLink="https://etwah.de/bilder/f02a466ac4c9616db0b8a14554d100b00d17a32a.png"
                        title="Mo., 03.11.2025, 19 Uhr Besprechung zum 1. Harener Krippenweg im BDH in Haren."
                        titleLink="https://etwah.de/post/details/926"
                        date="28.08.2025"
                        location="Haren"
                        description="Wer hat Lust beim 1. Harener Krippenweg mitzumachen? Zum Abschluss des Heiligen Jahres 2025 möchten wir vom PGR Haren gemeinsam mit euch einen besonderen Weg gestalten – den 1. Harener Krippenweg vom 1. Adventssontag 30.11.2025 bis Dreikönig 6.1.2026. Stelle eine Außenkrippe "
                        moreLink="https://etwah.de/post/details/926"
                    />
                    <Pagination />
                </ul>
            </section>
        </div>
    )
}
