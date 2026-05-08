import { Container } from "../ui/Container";

interface ExperienceProps {
  experience: any[];
  title: string;
}

export function Experience({ experience, title }: ExperienceProps) {
  return (
    <section className="py-32">
      <Container>
        <div className="mb-24 flex items-end justify-between border-b border-border pb-8">
          <h2 className="font-mono text-[11px] uppercase tracking-[0.4em] text-primary">
            01 // {title}
          </h2>
          <div className="hidden font-mono text-[9px] uppercase tracking-[0.2em] opacity-30 md:block">
            Professional History
          </div>
        </div>

        <div className="space-y-24">
          {experience.map((item, index) => (
            <div 
              key={index} 
              className="group relative grid md:grid-cols-[1fr_2fr] gap-12"
            >
              <div className="flex flex-col gap-2">
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
                  {item.period}
                </div>
                <div className="text-xs uppercase tracking-[0.1em] opacity-40">
                  {item.location}
                </div>
              </div>
              
              <div className="relative">
                <h3 className="text-3xl font-medium tracking-tight mb-2">
                  {item.role}
                </h3>
                <div className="text-lg opacity-40 mb-10 font-light italic">
                  {item.company}
                </div>
                
                <ul className="space-y-6">
                  {item.description.map((desc: string, i: number) => (
                    <li key={i} className="group/item flex items-start gap-6 text-[15px] leading-relaxed opacity-60 transition-opacity hover:opacity-100">
                      <span className="mt-3 h-[1px] w-4 bg-primary/30 shrink-0 transition-all group-hover/item:w-6 group-hover/item:bg-primary" />
                      <p className="max-w-2xl font-light">{desc}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
