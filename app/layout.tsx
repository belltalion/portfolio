import './globals.css'

export async function generateMetadata() {
   const meta = {
      title: {
         // default: "이태현 포트폴리오"
      },
   }
   return meta
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
   return (
      <html lang="en">
         <body className="flex flex-col overflow-x-hidden bg-black pb-20">{children}</body>
      </html>
   )
}
