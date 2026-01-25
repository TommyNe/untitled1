import { createFileRoute } from '@tanstack/react-router'

import { CommunityPage } from '@/sections/CommunityPage'

const SIDEBAR_LINKS = [
    { label: 'AG Schöne Kirche', href: '/haren/agk' },
    { label: 'DPSG Stamm St. Franziskus', href: '/haren/jugend/dpsg' },
    { label: 'Projektchor St. Martinus', href: '/haren/fc' },
    { label: 'KFD', href: '/haren/kfd' },
    { label: 'KLJB Landegge', href: '/haren/kljb' },
    { label: 'Kolping', href: '/haren/kolping' },
    { label: 'Kolpingkapelle', href: '/haren/kk' },
    { label: 'Nikolaus Schiffer Verein', href: '/haren/schiffer' }
]

const ASSOCIATIONS = {
    kolping: {
        title: 'Kolpingsfamilie St. Martinus Haren (Ems)',
        heroImage: {
            src: '/images/Bilder/bilder_martinus/Kolping/Kolp%20Logo.png',
            alt: 'Kolpingsfamilie Logo'
        },
        description: [
            'Kolpingsfamilie St. Martinus Haren (Ems)',
            'Sprecher des Leitungsteam: Ralf Schmitz'
        ],
        contact: {
            leader: 'Sprecher des Leitungsteam: Ralf Schmitz',
            address: ['Im Holte 19', '49733 Haren (Ems)'],
            phone: '(05932) 997041',
            email: 'info@kolping-haren.de',
            website: 'https://www.kolping-haren.de'
        },
        notes: ['Logo: Kolping Deutschland']
    }
} as const

type AssociationKey = keyof typeof ASSOCIATIONS

type Association = (typeof ASSOCIATIONS)[AssociationKey]

function getAssociation(slug: string): Association | undefined {
    return ASSOCIATIONS[slug as AssociationKey]
}

function RouteComponent() {
    const { name } = Route.useParams()
    const association = getAssociation(name)

    const fallback = {
        title: 'Gemeinde Haren',
        description: ['Für diese Gruppe liegen noch keine Inhalte vor.'],
        contact: undefined,
        notes: undefined,
        heroImage: undefined
    }

    const page = association ?? fallback

    return (
        <CommunityPage
            title={page.title}
            sidebarTitle="Vereine"
            sidebarLinks={SIDEBAR_LINKS}
            heroImage={page?.heroImage}
            description={page.description}
            contact={page.contact}
            notes={page.notes}
        />
    )
}

export const Route = createFileRoute('/communities/haren/$name')({
    component: RouteComponent
})
