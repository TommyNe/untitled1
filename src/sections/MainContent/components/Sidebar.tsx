import { SearchForm } from '@/components/SearchForm'
import { InfoSection } from '@/sections/MainContent/components/InfoSection'
import { AggregateResponse } from '@/types/aggregate.ts'

type Props = {
    data: AggregateResponse
}

export const Sidebar = ({ data }: Props) => {
    return (
        <div className="box-border caret-transparent shrink-0 max-w-full w-full px-3 md:w-[33.3333%]">
            <SearchForm />
            <InfoSection data={data} />
        </div>
    )
}
