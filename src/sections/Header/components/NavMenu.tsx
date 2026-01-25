import type React from 'react'

import NavElement from '@/sections/Header/components/NavComponents/NavElement.tsx'

type NavMenuProps = {
    isOpen?: (id: string) => boolean
    toggle?: (id: string) => void
    closeAll?: () => void
    mobile?: boolean
    onItemClick?: () => void
}

export const NavMenu = ({ isOpen, toggle, mobile, onItemClick }: NavMenuProps) => {
    const handleClick: React.MouseEventHandler<HTMLUListElement> = e => {
        if (!mobile) return
        const target = e.target as HTMLElement
        const anchor = target.closest ? (target.closest('a') as HTMLAnchorElement | null) : null
        if (anchor) {
            onItemClick?.()
        }
    }

    const homeSubMenuItems = [
        { label: 'Aktuelles', link: '/#aktuelles' },
        { label: 'Archive', link: '/archive' }
    ]

    const aboutSubMenuItems = [
        { label: 'Kooperationsrat', link: '/about/koop' },
        { label: 'Liturgische Dienste', link: '/about/lit' },
        { label: 'Pastoralteam', link: '/team' },
        { label: 'Pfarreingemeinschaft', link: '/about/gem' }
    ]

    const subItemsEmmeln = [
        { label: 'Unsere Kirche', link: '/emmeln/kirche' },
        { label: 'Pfarrbüro', link: '/emmeln/pburo' },
        { label: 'Pfarrheim', link: '/emmeln/pfarrheim' },
        { label: 'Kindertagesstätte', link: '/emmeln/kita' },
        { label: 'Bücherei', link: '/emmeln/bucherei' },
        { label: 'Gremien', link: '/emmeln/kv' },
        { label: 'Vereine/Verbände/Gruppen', link: '/emmeln/kolping' },
        { label: 'Kinder u. Familien', link: '/emmeln/kinder/ek' },
        { label: 'Jugend', link: '/emmeln/jugend/firmung' }
    ]

    const subItemsTinnen = [{ label: 'Unsere Kirche', link: '/tinnen/kirche' }]

    const subItemsWesuwe = [{ label: 'Unsere Kirche', link: '/wesuwe/kirche' }]

    const subItemsAltharen = [{ label: 'Unsere Kirche', link: '/altharen/kirche' }]

    const subItemsHaren = [{ label: 'Unsere Kirche', link: '/haren/kirche' }]

    const communitySubItems = [
        { label: 'St. Josef Emmeln', link: '/emmeln', subItems: subItemsEmmeln },
        { label: 'St. Marien Tinnen', link: '/tinnen', subItems: subItemsTinnen },
        { label: 'St. Clemens Wesuwe', link: '/wesuwe', subItems: subItemsWesuwe },
        { label: 'Herz-Jesu Altharen', link: '/altharen', subItems: subItemsAltharen },
        { label: 'St. Martinus Haren', link: '/haren', subItems: subItemsHaren }
    ]

    const faithSubMenuItems = [
        { label: 'Subitem 1', link: '/hope/subitem1' },
        { label: 'Subitem 2', link: '/hope/subitem2' }
    ]

    const menuItems = [
        {
            key: 'home',
            label: 'Home',
            route: '/',
            id: 'submenu-home',
            subMenuItems: homeSubMenuItems
        },
        {
            key: 'about',
            label: 'Über uns',
            route: '/about',
            id: 'submenu-about',
            subMenuItems: aboutSubMenuItems
        },
        {
            key: 'communities',
            label: 'Unsere Gemeinden',
            route: '/communities',
            id: 'submenu-communities',
            subMenuItems: communitySubItems
        },
        {
            key: 'faith',
            label: 'Glaube & Leben',
            route: '/faith',
            id: 'submenu-faith',
            subMenuItems: faithSubMenuItems
        }
    ]

    console.log(menuItems)

    return (
        <ul
            onClick={handleClick}
            className={[
                'box-border caret-transparent list-none px-[21px]',
                mobile ? 'flex flex-col md:hidden' : 'hidden md:flex'
            ].join(' ')}
        >
            {menuItems.map(item => (
                <NavElement
                    label={item.label}
                    key={item.key}
                    isOpen={isOpen}
                    toggle={toggle}
                    route={item.route}
                    subMenuItems={item.subMenuItems}
                />
            ))}
        </ul>
    )
}
