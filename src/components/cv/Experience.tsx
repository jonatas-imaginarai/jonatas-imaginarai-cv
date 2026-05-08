import { Container } from "../ui/Container";
import { Card } from "../ui/Card";

interface ExperienceProps {
  experience: any[];
  title: string;
}

export function Experience({ experience, title }: ExperienceProps) {
  return (
    <section className="py-24">
      <Container>
        <div className="mb-16 flex items-center gap-8">
          <h2 className="text-4xl font-bold tracking-tighter uppercase">{title}</h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="grid gap-8">
          {experience.map((item, index) => (
            <Card key={index} className="group relative overflow-hidden">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                <div>
                  <div className="font-mono text-xs uppercase tracking-[0.2em] text-primary mb-2">
                    {item.period} • {item.location}
                  </div>
                  <h3 className="text-2xl font-bold tracking-tight mb-1">{item.role}</h3>
                  <div className="text-lg font-medium opacity-60 mb-6">{item.company}</div>
                </div>
              </div>
              
              <ul className="grid gap-3">
                {item.description.map((desc: string, i: number) => (
                  <li key={i} className="flex items-start gap-3 text-balance opacity-80">
                    <span className="mt-2 h-1 w-1 rounded-full bg-primary shrink-0" />
                    {desc}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
