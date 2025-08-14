import { type NextRequest, NextResponse } from "next/server"
import { cookies } from "next/headers"

// This is a mock database of purchased PDFs
// In a real application, this would be stored in a database
const mockPurchasedPdfs = new Map()

export async function GET(request: NextRequest, { params }: { params: { slug: string } }) {
  const slug = params.slug
  const cookieStore = cookies()
  const purchaseToken = cookieStore.get("purchase_token")?.value

  // Check if the user has purchased this PDF
  // In a real application, you would verify this against your database
  const hasPurchased =
    purchaseToken && mockPurchasedPdfs.has(purchaseToken) && mockPurchasedPdfs.get(purchaseToken).includes(slug)

  if (!hasPurchased) {
    return NextResponse.json({ error: "Payment required to download this PDF" }, { status: 402 })
  }

  // In a real application, you would generate or fetch the actual PDF here
  // For this example, we'll just return a mock response

  // Set headers to force download
  const headers = new Headers()
  headers.set("Content-Type", "application/pdf")
  headers.set("Content-Disposition", `attachment; filename="${slug}.pdf"`)

  // In a real application, you would return the actual PDF file
  // For this example, we'll just return a mock response
  return new NextResponse("PDF content would be here", { headers })
}
