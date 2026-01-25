import { SearchForm } from '@/components/SearchForm'
import { InfoSection } from '@/sections/MainContent/components/InfoSection'

export const Sidebar = () => {
    return (
        <div className="box-border caret-transparent shrink-0 max-w-full w-full px-3 md:w-[33.3333%]">
            <SearchForm />
            <InfoSection />
        </div>
    )
}
