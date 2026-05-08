import { Container } from "../ui/Container";

interface EducationLanguagesProps {
  education: any[];
  languages: any[];
  educationTitle: string;
  languagesTitle: string;
}

export function EducationLanguages({
  education,
  languages,
  educationTitle,
  languagesTitle,
}) {
  return (
    <section className="py-32">
      <Container className="grid lg:grid-cols-2 gap-32">
        <div className="flex flex-col">
          <div className="mb-16 flex items-end justify-between border-b border-border pb-8">
            <h2 className="font-mono text-[11px] uppercase tracking-[0.4em] text-primary">
              03 // {educationTitle}
            </h2>
          </div>
          <div className="space-y-12">
            {education.map((item, index) => (
              <div key={index} className="flex flex-col gap-2">
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
                  {item.period}
                </div>
                <h3 className="text-xl font-bold tracking-tight">
                  {item.institution}
                </h3>
                <div className="text-sm opacity-50 font-light italic">
                  {item.degree}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col">
          <div className="mb-16 flex items-end justify-between border-b border-border pb-8">
            <h2 className="font-mono text-[11px] uppercase tracking-[0.4em] text-primary">
              04 // {languagesTitle}
            </h2>
          </div>
          <div className="grid gap-8">
            {languages.map((item, index) => (
              <div key={index} className="flex items-baseline justify-between gap-8 border-b border-border/40 pb-4 last:border-0">
                <div className="text-lg font-medium tracking-tight">
                  {item.name}
                </div>
                <div className="h-[1px] flex-1 bg-border/20" />
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] opacity-40">
                  {item.level}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
