import PdfDownloadSection from "@/components/pdf-download-section"

interface AddPdfDownloadProps {
  title: string
  subject: string
  className: string
  price: number
  features?: string[]
}

export function addPdfDownload({ title, subject, className, price, features }: AddPdfDownloadProps) {
  // Generate a slug for the PDF URL
  const slug = `${subject.toLowerCase().replace(/\s+/g, "-")}-${className}-${title.toLowerCase().replace(/\s+/g, "-")}`

  return (
    <PdfDownloadSection
      title={title}
      subject={subject}
      className={className}
      price={price}
      pdfUrl={`/api/download/${slug}`}
      features={features}
    />
  )
}
