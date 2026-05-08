import { NextRequest, NextResponse } from "next/server";
import { generatePdf } from "@/lib/pdf";

export async function GET(
  request: NextRequest,
  { params: { locale } }: { params: { locale: string } }
) {
  try {
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
    // Adicionamos ?print=true para que a página possa esconder elementos desnecessários como o toggle de idioma
    const url = `${siteUrl}/${locale}?print=true`;
    
    const pdf = await generatePdf(url);

    return new NextResponse(pdf, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="CV-Jonatas-${locale}.pdf"`,
      },
    });
  } catch (error) {
    console.error("PDF API Error:", error);
    return NextResponse.json(
      { error: "Failed to generate PDF" },
      { status: 500 }
    );
  }
}
