import { ASSET_URLS } from '@/constands/baseUrls'
import { GalleryItem } from '@/types/aggregate'

type Props = {
    images?: GalleryItem[]
}

export const ImageGallery = ({ images = [] }: Props) => {
    const visible = images.slice(0, 3)

    return (
        <div className="bg-teal-700 box-border caret-transparent text-center py-[50px] md:text-start">
            <div className="box-border caret-transparent max-w-none text-center w-full mx-auto px-6 md:max-w-[1200px] md:text-start">
                <div className="box-border caret-transparent flex flex-wrap text-center -mx-3 md:text-start">
                    <div className="box-border caret-transparent shrink-0 max-w-full text-center w-full px-3 md:text-start md:w-3/12">
                        <h4 className="text-white text-base font-bold box-border caret-transparent tracking-[2px] leading-6 text-center uppercase mb-[15px] font-roboto_condensed md:text-start">
                            Die neusten Bilder Uploads
                        </h4>
                        <a
                            href="https://etwah.de/gallery"
                            className="text-zinc-800 text-[15px] font-bold bg-white box-border caret-transparent block tracking-[1px] leading-[19.95px] text-center uppercase text-nowrap align-middle mb-5 px-5 py-[15px] rounded-[3px] font-roboto_condensed md:inline-block md:mb-0 hover:bg-gray-200 hover:border-zinc-400"
                        >
                            Bilder Galerie
                        </a>
                    </div>
                    {visible.map(item => {
                        const href = `${ASSET_URLS.gallery}${item.image}`
                        const alt = item?.name ?? 'Gallery Image'
                        return (
                            <div
                                key={item.id}
                                className="box-border caret-transparent shrink-0 max-w-full text-center w-full px-3 md:text-start md:w-3/12"
                            >
                                <a
                                    href={href}
                                    className="relative text-zinc-600 box-border caret-transparent block max-w-full text-center underline mb-5 md:text-start md:mb-0 hover:text-teal-700 hover:no-underline hover:border-teal-700"
                                >
                                    <img
                                        src={href}
                                        alt={alt}
                                        className="box-border caret-transparent max-w-full text-center md:text-start"
                                    />
                                </a>
                            </div>
                        )
                    })}
                    {!visible.length && (
                        <div className="box-border caret-transparent shrink-0 max-w-full text-center w-full px-3 md:text-start">
                            <span className="text-white text-sm">Keine Bilder gefunden.</span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
