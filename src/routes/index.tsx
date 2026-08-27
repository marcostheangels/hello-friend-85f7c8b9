import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { CalendarDays, MapPin, Clock, Ticket, Instagram, Mail, Phone, Search } from "lucide-react";

import heroImg from "@/assets/hero-eventos.jpg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { categorias, eventos, type Evento } from "@/data/eventos";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Agenda Montes Claros | Eventos, Shows e Festas da Cidade" },
      {
        name: "description",
        content:
          "Todos os eventos de Montes Claros em um só lugar: shows, festas, cultura, esportes e gastronomia. Confira a agenda completa e garanta seu ingresso.",
      },
      { property: "og:title", content: "Agenda Montes Claros | Eventos da Cidade" },
      {
        property: "og:description",
        content: "A agenda oficial de shows, festas e eventos de Montes Claros (MG).",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function EventoCard({ evento }: { evento: Evento }) {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/50">
      <div className="flex items-start justify-between gap-4">
        <div
          className="flex h-16 w-16 shrink-0 flex-col items-center justify-center rounded-xl text-primary-foreground"
          style={{ backgroundImage: "var(--gradient-heat)" }}
        >
          <span className="font-display text-2xl leading-none">{evento.data.split(" ")[0]}</span>
          <span className="text-[11px] font-semibold tracking-widest">{evento.data.split(" ")[1]}</span>
        </div>
        <Badge variant="secondary" className="uppercase tracking-wider">
          {evento.categoria}
        </Badge>
      </div>

      <h3 className="mt-5 font-display text-2xl tracking-wide text-foreground">{evento.titulo}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{evento.descricao}</p>

      <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
        <li className="flex items-center gap-2">
          <MapPin className="h-4 w-4 text-primary" aria-hidden /> {evento.local}
        </li>
        <li className="flex items-center gap-2">
          <Clock className="h-4 w-4 text-primary" aria-hidden /> {evento.hora}
        </li>
        <li className="flex items-center gap-2">
          <Ticket className="h-4 w-4 text-primary" aria-hidden /> {evento.preco}
        </li>
      </ul>

      <Button className="mt-6 w-full font-semibold">Ver detalhes</Button>
    </article>
  );
}

function Index() {
  const [categoria, setCategoria] = useState<string>("Todos");
  const [busca, setBusca] = useState("");

  const lista = useMemo(
    () =>
      eventos.filter(
        (e) =>
          (categoria === "Todos" || e.categoria === categoria) &&
          (e.titulo.toLowerCase().includes(busca.toLowerCase()) ||
            e.local.toLowerCase().includes(busca.toLowerCase())),
      ),
    [categoria, busca],
  );

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href="#topo" className="font-display text-2xl tracking-widest">
            AGENDA <span className="text-primary">MOC</span>
          </a>
          <nav className="hidden gap-7 text-sm font-medium text-muted-foreground md:flex">
            <a className="transition-colors hover:text-primary" href="#eventos">Eventos</a>
            <a className="transition-colors hover:text-primary" href="#anuncie">Anuncie</a>
            <a className="transition-colors hover:text-primary" href="#contato">Contato</a>
          </nav>
          <Button asChild size="sm" className="font-semibold">
            <a href="#anuncie">Divulgar evento</a>
          </Button>
        </div>
      </header>

      <main id="topo">
        {/* Hero */}
        <section className="relative isolate overflow-hidden">
          <img
            src={heroImg}
            alt="Público em show noturno com luzes douradas em Montes Claros"
            width={1600}
            height={912}
            className="absolute inset-0 h-full w-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />
          <div className="relative mx-auto max-w-6xl px-5 py-24 md:py-36">
            <Badge className="uppercase tracking-[0.2em]">Montes Claros · MG</Badge>
            <h1 className="mt-6 max-w-3xl font-display text-5xl leading-[1.05] tracking-wide md:text-7xl">
              Tudo o que vai rolar na <span className="text-primary">sua cidade</span>, em um só lugar
            </h1>
            <p className="mt-5 max-w-xl text-lg text-muted-foreground">
              Shows, festas, cultura, esportes e gastronomia. A agenda completa de Montes Claros
              atualizada toda semana.
            </p>

            <div className="mt-9 flex w-full max-w-lg flex-col gap-3 sm:flex-row">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" aria-hidden />
                <Input
                  value={busca}
                  onChange={(e) => setBusca(e.target.value)}
                  placeholder="Buscar evento ou local..."
                  aria-label="Buscar evento"
                  className="h-12 pl-9"
                />
              </div>
              <Button asChild size="lg" className="h-12 font-semibold">
                <a href="#eventos">Ver agenda</a>
              </Button>
            </div>

            <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6">
              {[
                ["+120", "eventos por ano"],
                ["+50", "produtores parceiros"],
                ["100%", "foco em Montes Claros"],
              ].map(([n, l]) => (
                <div key={l}>
                  <dt className="font-display text-3xl text-primary">{n}</dt>
                  <dd className="text-xs uppercase tracking-widest text-muted-foreground">{l}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Eventos */}
        <section id="eventos" className="mx-auto max-w-6xl px-5 py-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="font-display text-4xl tracking-wide md:text-5xl">Próximos eventos</h2>
              <p className="mt-2 text-muted-foreground">Escolha a categoria e descubra o que fazer.</p>
            </div>
            <span className="flex items-center gap-2 text-sm text-muted-foreground">
              <CalendarDays className="h-4 w-4 text-primary" aria-hidden /> {lista.length} evento(s)
            </span>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {categorias.map((c) => (
              <button
                key={c}
                onClick={() => setCategoria(c)}
                className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                  categoria === c
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-card text-muted-foreground hover:border-primary/50 hover:text-foreground"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {lista.map((e) => (
              <EventoCard key={e.id} evento={e} />
            ))}
          </div>

          {lista.length === 0 && (
            <p className="mt-12 text-center text-muted-foreground">
              Nenhum evento encontrado. Tente outra busca.
            </p>
          )}
        </section>

        {/* Anuncie */}
        <section id="anuncie" className="border-y border-border bg-card/50">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="font-display text-4xl tracking-wide md:text-5xl">
                Divulgue seu evento para toda a cidade
              </h2>
              <p className="mt-4 text-muted-foreground">
                Planos de destaque na home, posts nas redes e alcance direto com o público que sai em
                Montes Claros. Sua casa de shows, bar ou produtora lotada todo fim de semana.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Button size="lg" className="font-semibold">Quero anunciar</Button>
                <Button size="lg" variant="outline" className="font-semibold">Ver planos</Button>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ["Destaque", "Seu evento no topo da agenda por 7 dias."],
                ["Redes sociais", "Post e stories no perfil da Agenda MOC."],
                ["Página do evento", "Descrição, fotos e link de ingressos."],
                ["Relatório", "Visualizações e cliques do seu anúncio."],
              ].map(([t, d]) => (
                <div key={t} className="rounded-2xl border border-border bg-card p-5">
                  <h3 className="font-display text-xl tracking-wide text-primary">{t}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer id="contato" className="mx-auto max-w-6xl px-5 py-14">
        <div className="flex flex-col justify-between gap-8 md:flex-row">
          <div>
            <p className="font-display text-2xl tracking-widest">
              AGENDA <span className="text-primary">MOC</span>
            </p>
            <p className="mt-2 max-w-sm text-sm text-muted-foreground">
              A agenda de eventos de Montes Claros, Norte de Minas. Feito por quem vive a cidade.
            </p>
          </div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-primary" aria-hidden /> contato@agendamoc.com.br
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-primary" aria-hidden /> (38) 90000-0000
            </li>
            <li className="flex items-center gap-2">
              <Instagram className="h-4 w-4 text-primary" aria-hidden /> @agendamoc
            </li>
          </ul>
        </div>
        <p className="mt-10 border-t border-border pt-6 text-xs text-muted-foreground">
          © {new Date().getFullYear()} Agenda MOC · Montes Claros, MG
        </p>
      </footer>
    </div>
  );
}
