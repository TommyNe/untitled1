export const Logo = () => {
    return (
        <h1 className="relative text-zinc-800 text-4xl items-center box-border caret-transparent flex h-20 leading-[0px] align-middle z-[1300] font-roboto">
            <a
                href="https://etwah.de/"
                className="text-zinc-600 box-border caret-transparent block hover:text-teal-700 hover:border-teal-700"
            >
                <img
                    src="https://etwah.de/images/logo.png"
                    alt="Logo"
                    className="aspect-[auto_100_/_100] box-border caret-transparent max-w-full w-[100px]"
                />
            </a>
        </h1>
    );
};