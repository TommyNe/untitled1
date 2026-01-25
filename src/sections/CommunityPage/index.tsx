import type { ReactNode } from 'react'

import { BreadcrumbHeader } from '@/components/BreadcrumbHeader.tsx'
import { PageHeader } from '@/components/PageHeader.tsx'

type SidebarLink = {
    label: string
    href: string
}

type ContactInfo = {
    leader?: string
    address?: ReadonlyArray<string>
    phone?: string
    email?: string
    website?: string
}

type CommunityPageProps = {
    title: string
    sidebarTitle: string
    sidebarLinks: SidebarLink[]
    heroImage?: { src: string; alt?: string }
    description?: ReadonlyArray<ReactNode>
    contact?: ContactInfo
    notes?: ReadonlyArray<string>
}

export const CommunityPage = ({
    title,
    sidebarLinks,
    sidebarTitle,
    heroImage,
    description,
    contact,
    notes
}: CommunityPageProps) => {
    return (
        <main role="main" className="bg-white">
            <BreadcrumbHeader />
            <PageHeader />
            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-6 py-12 lg:grid-cols-12">
                <aside className="lg:col-span-3">
                    <div className="rounded-xl border bg-white shadow-sm">
                        <div className="border-b px-5 py-4">
                            <h3 className="text-lg font-semibold text-gray-800">{sidebarTitle}</h3>
                        </div>
                        <ul className="divide-y text-sm text-gray-700">
                            {sidebarLinks.map(link => (
                                <li key={link.href} className="hover:bg-gray-50">
                                    <a
                                        href={link.href}
                                        className="block px-5 py-3 transition-colors hover:text-gray-900"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </aside>

                <section className="space-y-6 lg:col-span-9">
                    {heroImage ? (
                        <div className="rounded-xl border bg-white p-4 shadow-sm">
                            <img
                                src={heroImage.src}
                                alt={heroImage.alt ?? title}
                                className="mx-auto h-auto w-full max-w-3xl rounded-lg bg-white object-contain"
                            />
                        </div>
                    ) : null}

                    <div className="space-y-4 rounded-xl border bg-white p-6 shadow-sm">
                        <h1 className="text-2xl font-semibold text-gray-900">{title}</h1>
                        {description?.length ? (
                            <div className="space-y-3 text-gray-800">
                                {description.map((paragraph, idx) => (
                                    <p key={idx} className="leading-relaxed">
                                        {paragraph}
                                    </p>
                                ))}
                            </div>
                        ) : null}

                        {contact ? (
                            <div className="space-y-2 text-sm text-gray-700">
                                {contact.leader ? (
                                    <div className="font-medium">{contact.leader}</div>
                                ) : null}
                                {contact.address?.length ? (
                                    <div>
                                        {contact.address.map(line => (
                                            <div key={line}>{line}</div>
                                        ))}
                                    </div>
                                ) : null}
                                {contact.phone ? <div>Telefon: {contact.phone}</div> : null}
                                {contact.email ? (
                                    <div>
                                        Email:{' '}
                                        <a
                                            className="text-blue-600"
                                            href={`mailto:${contact.email}`}
                                        >
                                            {contact.email}
                                        </a>
                                    </div>
                                ) : null}
                                {contact.website ? (
                                    <div>
                                        Homepage:{' '}
                                        <a
                                            className="text-blue-600"
                                            href={contact.website}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            {contact.website.replace(/^https?:\/\//, '')}
                                        </a>
                                    </div>
                                ) : null}
                            </div>
                        ) : null}

                        {notes?.length ? (
                            <div className="pt-2 text-xs text-gray-500">
                                {notes.map(note => (
                                    <div key={note}>{note}</div>
                                ))}
                            </div>
                        ) : null}
                    </div>
                </section>
            </div>
        </main>
    )
}
