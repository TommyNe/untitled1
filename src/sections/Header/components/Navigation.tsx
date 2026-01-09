import { NavMenu } from "@/sections/Header/components/NavMenu";
import { useDisclosureTree } from "@/hooks/useDisclosureTree";
import { useEffect, useState } from "react";
import { MobileMenuToggle } from "@/sections/Header/components/MobileMenuToggle";

export const Navigation = () => {
    const { containerRef, isOpen, toggle, closeAll } = useDisclosureTree<HTMLDivElement>();
    const [mobileOpen, setMobileOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (containerRef.current) {
                const { top } = containerRef.current.getBoundingClientRect();
                // Wenn der Container den oberen Rand erreicht (oder leicht darüber ist)
                setIsSticky(top <= 0);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [containerRef]);

    useEffect(() => {
        // Prevent background scroll when mobile menu is open
        if (mobileOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [mobileOpen]);
    return (
        <div className={'flex justify-center'} ref={containerRef}>
            <div id="nav-wrapper" className={`${isSticky ? 'fixed top-0 left-0 w-full' : 'relative w-auto'} z-50 transition-all duration-300`}>
                <nav
                    className={[
                        "relative box-border flex justify-center caret-transparent md:h-[50px] mx-auto bg-white font-roboto_condensed shadow-sm",
                        isSticky
                            ? "w-full rounded-none border-b opacity-80 border-gray-200"
                            : "w-full md:w-[1010px] rounded-b shadow-[rgba(0,0,0,0.1)_0px_1px_0px_0px]"
                    ].join(" ")}>
                    {/* Desktop menu */}
                    <NavMenu isOpen={isOpen} toggle={toggle} closeAll={closeAll} />
                    {/* Mobile toggle button */}
                    <MobileMenuToggle open={mobileOpen} onToggle={() => setMobileOpen((v) => !v)} />
                </nav>
                {/* Mobile menu panel */}
                <div
                    id="mobile-menu"
                    aria-hidden={!mobileOpen}
                    className={[
                        "md:hidden relative",
                        "transition-[max-height,opacity] duration-300 ease-out",
                        mobileOpen ? "max-h-[85vh] opacity-100" : "max-h-0 opacity-0",
                        "overflow-hidden bg-white shadow-md",
                    ].join(" ")}
                >
                    <div className="px-2 py-2">
                        <NavMenu
                            isOpen={isOpen}
                            toggle={toggle}
                            closeAll={closeAll}
                            mobile
                            onItemClick={() => {
                                setMobileOpen(false);
                                closeAll?.();
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}