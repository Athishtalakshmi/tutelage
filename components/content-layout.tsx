import type React from "react"
import { SimplePdfButton } from "@/lib/add-pdf-button"

interface ContentLayoutProps {
  title: string
  children: React.ReactNode
  showPdfButton?: boolean
  pdfPrice?: number
  pdfUrl?: string
}

export default function ContentLayout({
  title,
  children,
  showPdfButton = true,
  pdfPrice = 29,
  pdfUrl,
}: ContentLayoutProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-5">
      <div className="flex justify-between items-start mb-6">
        <h1 className="text-xl font-bold text-[#1f888f]">{title}</h1>
        {showPdfButton && <SimplePdfButton title={title} price={pdfPrice} pdfUrl={pdfUrl} className="ml-4" />}
      </div>
      <div className="prose max-w-none">{children}</div>
    </div>
  )
}
