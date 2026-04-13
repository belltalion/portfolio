import { hasLocale } from "next-intl"
import { routing } from '@/i18n/routing'
import { notFound } from "next/navigation"
import "tailwindcss"
import "sanitize"

export async function generateMetadata(){
  const meta = {
    title: {
      default: "이태현 포트폴리오"
    }
  }
  return 
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params

  if (!hasLocale(routing.locales, lang)) {
    notFound()
  }
  
  return (
    <html
      lang="en"
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
