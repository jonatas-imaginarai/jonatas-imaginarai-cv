import { getTranslations } from "next-intl/server";
import { Container } from "@/components/ui/Container";
import { LanguageToggle } from "@/components/LanguageToggle";
import { Hero } from "@/components/hero/Hero";
import { Experience } from "@/components/cv/Experience";
import { Skills } from "@/components/cv/Skills";
import { EducationLanguages } from "@/components/cv/EducationLanguages";
import { DownloadButton } from "@/components/cv/DownloadButton";

export default async function Index({ 
  params,
  searchParams
}: { 
  params: Promise<{ locale: string }>,
  searchParams: Promise<{ print?: string }>
}) {
  const { locale } = await params;
  const { print } = await searchParams;
  
  const isPrinting = print === 'true';
  const t = await getTranslations("Index");
  
  // Load localized data
  const data = (await import(`@/data/${locale}.json`)).default;

  return (
    <main className="relative min-h-screen">
      {!isPrinting && (
        <nav className="fixed top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md print:hidden">
          <Container className="flex h-16 items-center justify-between">
            <div className="font-mono text-xs uppercase tracking-[0.3em] font-bold">
              Jonatas Freire
            </div>
            <LanguageToggle />
          </Container>
        </nav>
      )}

      <Hero profile={data.profile} />
      
      <Experience 
        experience={data.experience} 
        title={locale === 'pt' ? 'Experiência' : locale === 'es' ? 'Experiencia' : 'Experience'} 
      />
      
      <Skills 
        skills={data.skills} 
        title={locale === 'pt' ? 'Habilidades' : locale === 'es' ? 'Habilidades' : 'Skills'} 
      />
      
      <EducationLanguages 
        education={data.education} 
        languages={data.languages}
        educationTitle={locale === 'pt' ? 'Educação' : locale === 'es' ? 'Educación' : 'Education'}
        languagesTitle={locale === 'pt' ? 'Línguas' : locale === 'es' ? 'Idiomas' : 'Languages'}
      />

      <footer className="py-12 border-t border-border">
        <Container className="text-center font-mono text-[10px] uppercase tracking-[0.3em] opacity-40">
          © 2026 Jonatas Freire • Imaginar.ai DNA
        </Container>
      </footer>

      {!isPrinting && <DownloadButton />}
    </main>
  );
}
