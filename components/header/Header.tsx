import { Logo } from "./Logo"

export const Header = () => {

    return (
        <header className="sticky flex items-center space-x-4 top-0 z-50 bg-neutral-50 dark:bg-neutral-800 px-4">
            <Logo />
        </header >
    )

}