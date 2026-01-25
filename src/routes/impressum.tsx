import { createFileRoute } from '@tanstack/react-router'

function RouteComponent() {
    return (
        <main className="bg-white" role="main">
            <div className="mx-auto max-w-5xl px-6 py-12 space-y-6">
                <header className="space-y-2">
                    <h1 className="text-3xl font-semibold text-gray-900">Impressum</h1>
                    <p className="text-sm text-gray-600">Angaben gemäß § 5 TMG</p>
                </header>

                <section className="space-y-1 text-gray-800">
                    <p className="font-medium">Pfarreingemeinschaft ETWAH</p>
                    <p>St. Martinus Haren (Ems)</p>
                    <p>Adresse Platzhalter</p>
                </section>

                <section className="space-y-2 text-gray-800">
                    <h2 className="text-xl font-semibold text-gray-900">Kontakt</h2>
                    <p>
                        Telefon: <span className="font-medium">(0000) 000000</span>
                    </p>
                    <p>
                        E-Mail:{' '}
                        <a className="text-blue-600" href="mailto:info@example.com">
                            info@example.com
                        </a>
                    </p>
                </section>

                <section className="space-y-2 text-gray-800">
                    <h2 className="text-xl font-semibold text-gray-900">Vertreten durch</h2>
                    <p>Verantwortliche Person Platzhalter</p>
                </section>

                <section className="space-y-2 text-gray-800">
                    <h2 className="text-xl font-semibold text-gray-900">
                        Redaktionelle Verantwortung
                    </h2>
                    <p>Platzhalter für redaktionell Verantwortliche gemäß § 18 Abs. 2 MStV.</p>
                </section>
            </div>
        </main>
    )
}

export const Route = createFileRoute('/impressum')({
    component: RouteComponent
})
