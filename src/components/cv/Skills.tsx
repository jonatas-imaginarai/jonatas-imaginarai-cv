import { Container } from "../ui/Container";

interface SkillsProps {
  skills: any[];
  title: string;
}

export function Skills({ skills, title }: SkillsProps) {
  return (
    <section className="py-32 bg-accent/10 border-y border-border/50">
      <Container>
        <div className="mb-24 flex items-end justify-between border-b border-border pb-8">
          <h2 className="font-mono text-[11px] uppercase tracking-[0.4em] text-primary">
            02 // {title}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16">
          {skills.map((category, index) => (
            <div key={index} className="flex flex-col gap-6">
              <h3 className="font-mono text-[10px] uppercase tracking-[0.3em] font-bold opacity-40">
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-x-3 gap-y-2">
                {category.items.map((item: string, i: number) => (
                  <span
                    key={i}
                    className="text-sm font-medium tracking-tight opacity-70 after:content-['/'] after:ml-3 after:opacity-20 last:after:content-none"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
