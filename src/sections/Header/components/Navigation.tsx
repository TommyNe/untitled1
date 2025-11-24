import { NavMenu } from "@/sections/Header/components/NavMenu";
import { useDisclosureTree } from "@/hooks/useDisclosureTree";

export const Navigation = () => {
    const { containerRef, isOpen, toggle, closeAll } = useDisclosureTree<HTMLDivElement>();
    return (
        <div className={'flex justify-center'} ref={containerRef}>
            <div id="nav-wrapper" className="sticky top-0 z-50 w-auto shadow-sm">
                <nav
                    className="relative box-border flex justify-center caret-transparent h-[50px] w-full md:w-[1010px] mx-auto bg-white shadow-[rgba(0,0,0,0.1)_0px_1px_0px_0px] font-roboto_condensed rounded-b">
                    <NavMenu isOpen={isOpen} toggle={toggle} closeAll={closeAll} />
                </nav>
            </div>
        </div>
    )
}