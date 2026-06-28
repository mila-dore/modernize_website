export default function AtelierPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <section className="space-y-6">
        <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
          Atelier
        </span>

        <h1 className="text-4xl font-bold">
          Nom de l'atelier
        </h1>

        <p className="text-lg text-gray-600">
          Une courte présentation de l'atelier expliquant ce que les
          participants vont apprendre et pourquoi il est intéressant.
        </p>
      </section>

      <section className="mt-12 grid gap-10 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-10">
          <div>
            <h2 className="mb-4 text-2xl font-semibold">
              Description
            </h2>

            <p className="text-gray-700 leading-7">
              Décrivez ici le contenu de l'atelier, les compétences qui seront
              abordées, les exercices proposés et le niveau attendu.
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-semibold">
              Objectifs
            </h2>

            <ul className="list-disc space-y-2 pl-6 text-gray-700">
              <li>Comprendre les bases du sujet.</li>
              <li>Mettre en pratique avec des exercices.</li>
              <li>Créer un projet concret.</li>
              <li>Repartir avec des ressources complémentaires.</li>
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-semibold">
              Programme
            </h2>

            <ol className="list-decimal space-y-2 pl-6 text-gray-700">
              <li>Introduction</li>
              <li>Présentation des concepts</li>
              <li>Exercices pratiques</li>
              <li>Projet guidé</li>
              <li>Questions & réponses</li>
            </ol>
          </div>
        </div>

        <aside className="rounded-xl border p-6 shadow-sm">
          <h2 className="text-xl font-semibold">
            Informations
          </h2>

          <div className="mt-6 space-y-4 text-gray-700">
            <div>
              <p className="font-medium">📅 Date</p>
              <p>À définir</p>
            </div>

            <div>
              <p className="font-medium">⏱️ Durée</p>
              <p>3 heures</p>
            </div>

            <div>
              <p className="font-medium">📍 Lieu</p>
              <p>Présentiel ou en ligne</p>
            </div>

            <div>
              <p className="font-medium">👥 Public</p>
              <p>Débutants à intermédiaires</p>
            </div>

            <div>
              <p className="font-medium">💰 Tarif</p>
              <p>Gratuit / XX €</p>
            </div>
          </div>

          <button className="mt-8 w-full rounded-lg bg-blue-600 px-4 py-3 font-semibold text-white transition hover:bg-blue-700">
            S'inscrire
          </button>
        </aside>
      </section>
    </main>
  );
}