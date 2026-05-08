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
    <section className="py-24">
      <Container className="grid md:grid-cols-2 gap-24">
        <div>
          <div className="mb-12 flex items-center gap-6">
            <h2 className="text-3xl font-bold tracking-tighter uppercase whitespace-nowrap">
              {educationTitle}
            </h2>
            <div className="h-px flex-1 bg-border" />
          </div>
          <div className="grid gap-8">
            {education.map((item, index) => (
              <div key={index}>
                <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary mb-1">
                  {item.period}
                </div>
                <h3 className="text-xl font-bold tracking-tight">{item.institution}</h3>
                <div className="opacity-60">{item.degree}</div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="mb-12 flex items-center gap-6">
            <h2 className="text-3xl font-bold tracking-tighter uppercase whitespace-nowrap">
              {languagesTitle}
            </h2>
            <div className="h-px flex-1 bg-border" />
          </div>
          <div className="grid gap-6">
            {languages.map((item, index) => (
              <div key={index} className="flex items-center justify-between border-b border-border pb-4">
                <div className="font-bold">{item.name}</div>
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
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
