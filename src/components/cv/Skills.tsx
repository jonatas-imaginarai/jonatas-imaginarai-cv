import { Container } from "../ui/Container";

interface SkillsProps {
  skills: any[];
  title: string;
}

export function Skills({ skills, title }: SkillsProps) {
  return (
    <section className="py-24 bg-accent/30">
      <Container>
        <div className="mb-16 flex items-center gap-8">
          <h2 className="text-4xl font-bold tracking-tighter uppercase">{title}</h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {skills.map((category, index) => (
            <div key={index}>
              <h3 className="font-mono text-sm uppercase tracking-[0.3em] font-bold text-primary mb-8">
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.items.map((item: string, i: number) => (
                  <div
                    key={i}
                    className="rounded-full border border-border bg-background px-6 py-2 text-sm font-medium tracking-tight hover:border-primary/30 transition-colors"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
