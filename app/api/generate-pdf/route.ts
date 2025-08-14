import { type NextRequest, NextResponse } from "next/server"
import { renderToBuffer } from "@react-pdf/renderer"
import PDFTemplate from "@/components/pdf-template"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { title, subject, className, sections } = body

    // Validate required fields
    if (!title || !subject || !className || !sections || sections.length === 0) {
      return NextResponse.json({ success: false, error: "Missing required fields" }, { status: 400 })
    }

    // Generate content from sections
    let content = ""
    sections.forEach((section: any, index: number) => {
      content += `\n\n${index + 1}. ${section.title}\n\n`
      content += `${section.content}\n`

      if (section.subsections && section.subsections.length > 0) {
        section.subsections.forEach((subsection: any, subIndex: number) => {
          if (subsection.title && subsection.content) {
            content += `\n${index + 1}.${subIndex + 1} ${subsection.title}\n`
            content += `${subsection.content}\n`
          }
        })
      }
    })

    // Create PDF document
    const pdfDoc = PDFTemplate({
      title: `${title} - ${subject} ${className}`,
      content: content,
    })

    // Generate PDF buffer
    const pdfBuffer = await renderToBuffer(pdfDoc)

    // Create response with PDF
    const response = new NextResponse(pdfBuffer, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${title.replace(/[^a-zA-Z0-9]/g, "-")}.pdf"`,
      },
    })

    return response
  } catch (error) {
    console.error("PDF generation error:", error)
    return NextResponse.json({ success: false, error: "Failed to generate PDF" }, { status: 500 })
  }
}
