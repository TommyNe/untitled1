import { createFileRoute } from '@tanstack/react-router'

function RouteComponent() {
    return (
        <main className="bg-white" role="main">
            <div className="mx-auto max-w-5xl px-6 py-12 space-y-6">
                <header className="space-y-2">
                    <h1 className="text-3xl font-semibold text-gray-900">Datenschutzerklärung</h1>
                    <p className="text-sm text-gray-600">Informationen zum Schutz Ihrer Daten</p>
                </header>

                <section className="space-y-2 text-gray-800">
                    <h2 className="text-xl font-semibold text-gray-900">Verantwortlicher</h2>
                    <p>Pfarreingemeinschaft ETWAH</p>
                    <p>St. Martinus Haren (Ems)</p>
                    <p>Adresse Platzhalter</p>
                    <p>
                        E-Mail:{' '}
                        <a className="text-blue-600" href="mailto:info@example.com">
                            info@example.com
                        </a>
                    </p>
                </section>

                <section className="space-y-2 text-gray-800">
                    <h2 className="text-xl font-semibold text-gray-900">Hosting & Zugriffsdaten</h2>
                    <p>
                        Beim Aufruf unserer Seiten werden Server-Logfiles (IP-Adresse, Datum,
                        Uhrzeit, aufgerufene Ressource) verarbeitet. Diese Daten dienen der
                        Sicherstellung des Betriebs und werden nach gesetzlichen Vorgaben gelöscht.
                    </p>
                </section>

                <section className="space-y-2 text-gray-800">
                    <h2 className="text-xl font-semibold text-gray-900">Cookies</h2>
                    <p>
                        Falls wir Cookies einsetzen, informieren wir Sie hierüber und holen
                        erforderliche Einwilligungen ein.
                    </p>
                </section>

                <section className="space-y-2 text-gray-800">
                    <h2 className="text-xl font-semibold text-gray-900">
                        Kontaktformular &amp; E-Mail
                    </h2>
                    <p>
                        Wenn Sie uns per E-Mail kontaktieren, verarbeiten wir Ihre Anfrage zur
                        Bearbeitung und speichern sie, soweit erforderlich, entsprechend
                        gesetzlicher Aufbewahrungsfristen.
                    </p>
                </section>

                <section className="space-y-2 text-gray-800">
                    <h2 className="text-xl font-semibold text-gray-900">Ihre Rechte</h2>
                    <p>
                        Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der
                        Verarbeitung, Datenübertragbarkeit und Widerspruch. Bitte wenden Sie sich
                        dazu an die oben genannte Kontaktadresse.
                    </p>
                </section>
            </div>
        </main>
    )
}

export const Route = createFileRoute('/datenschutz')({
    component: RouteComponent
})
