import './globals.css'

export async function generateMetadata() {
   const meta = {
      title: {
         // default: "이태현 포트폴리오"
      },
   }
   return meta
}

const PRELOAD_IMAGES = [
   '/portfolio/images/laon_swingcraft_1.webp',
   '/portfolio/images/laon_swingcraft_2.webp',
   '/portfolio/images/laon_swingcraft_3.webp',
   '/portfolioimages/devfive_1.webp',
   '/portfolioimages/devfive_2.webp',
   '/portfolioimages/devfive_3.webp',
]

export default async function RootLayout({ children }: { children: React.ReactNode }) {
   return (
      <html lang="en">
         <head>
            {PRELOAD_IMAGES.map((value) => (
               <link key={value} rel="preload" href={value} as="image" />
            ))}
         </head>
         <body className="flex flex-col overflow-x-hidden bg-black pb-20">{children}</body>
      </html>
   )
}
