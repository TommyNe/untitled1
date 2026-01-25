import { Link } from '@tanstack/react-router'

export function BreadcrumbHeader() {
    return (
        <div className="relative bg-teal-700 py-2 h-56">
            <div className="container mx-auto px-44 py-5 h-full flex flex-col justify-end">
                <ol className="flex items-end space-x-2 text-sm text-gray-300">
                    <li>
                        <Link to="/" className="hover:text-primary transition-colors">
                            Home
                        </Link>
                    </li>
                    <li className="text-gray-400">/</li>
                    <li className="font-medium text-white">Events</li>
                </ol>
            </div>
        </div>
    )
}
