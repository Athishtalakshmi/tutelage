import { FileText, Lock, CheckCircle } from "lucide-react"
import Link from "next/link"
import PdfDownloadButton from "./pdf-download-button"

interface PdfDownloadSectionProps {
  title: string
  subject: string
  className: string
  price: number
  pdfUrl: string
  features?: string[]
}

export default function PdfDownloadSection({
  title,
  subject,
  className,
  price,
  pdfUrl,
  features = [],
}: PdfDownloadSectionProps) {
  // Default features if none provided
  const defaultFeatures = [
    "High-quality PDF format",
    "Printable version",
    "Exam-focused content",
    "CBSE 2024-25 syllabus aligned",
    "Important questions highlighted",
  ]

  const displayFeatures = features.length > 0 ? features : defaultFeatures

  return (
    <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 mt-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
        <div>
          <h3 className="font-bold text-lg flex items-center gap-2">
            <FileText size={20} className="text-[#b80877]" />
            Download Complete Notes
          </h3>
          <p className="text-gray-600 text-sm mt-1">
            Get the complete {subject} Class {className} {title} notes in PDF format
          </p>
        </div>

        <div className="mt-4 md:mt-0">
          <PdfDownloadButton title={title} subject={subject} className={className} price={price} pdfUrl={pdfUrl} />
        </div>
      </div>

      {/* Features list */}
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-2">
        {displayFeatures.map((feature, index) => (
          <div key={index} className="flex items-center gap-2">
            <CheckCircle size={16} className="text-green-600 flex-shrink-0" />
            <span className="text-sm">{feature}</span>
          </div>
        ))}
      </div>

      {/* Security note */}
      <div className="mt-6 flex flex-col sm:flex-row items-center justify-between text-sm text-gray-500 border-t pt-4">
        <div className="flex items-center gap-2">
          <Lock size={14} />
          <span>Secure payment via Razorpay</span>
        </div>
        <Link href="/terms" className="mt-2 sm:mt-0 hover:text-[#1f888f]">
          Terms & Conditions
        </Link>
      </div>
    </div>
  )
}
