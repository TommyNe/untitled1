type MobileMenuToggleProps = {
    open: boolean;
    onToggle: () => void;
};

export const MobileMenuToggle = ({ open, onToggle }: MobileMenuToggleProps) => {
    return (
        <button
            type="button"
            aria-controls="mobile-menu"
            aria-expanded={open}
            onClick={onToggle}
            className="absolute text-zinc-600 text-xl box-border caret-transparent block mt-[-52px] z-[9999] right-[1px] md:hidden md:-mt-2 hover:text-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
            title={open ? "Menü schließen" : "Menü öffnen"}
        >
            <span className="sr-only">{open ? "Menü schließen" : "Menü öffnen"}</span>
            {/* Icon: simple hamburger / close */}
            <svg
                className="h-7 w-7"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                {open ? (
                    <>
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                    </>
                ) : (
                    <>
                        <line x1="3" y1="6" x2="21" y2="6" />
                        <line x1="3" y1="12" x2="21" y2="12" />
                        <line x1="3" y1="18" x2="21" y2="18" />
                    </>
                )}
            </svg>
        </button>
    );
};
