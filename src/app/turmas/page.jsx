import Link from "next/link";

export default function Turmas() {
    return (
        <main ClassName="card">
            <h1>Turmas</h1>
            <Link href="/turmas/docente" className="btn">
                Docentes
            </Link>
            <Link href="/turmas/instrutor" className="btn">
                Instrutor
            </Link>
        </main>
    )
}