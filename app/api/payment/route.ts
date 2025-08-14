import { type NextRequest, NextResponse } from "next/server"
import { cookies } from "next/headers"
import crypto from "crypto"

// This is a mock database of purchased PDFs
// In a real application, this would be stored in a database
const mockPurchasedPdfs = new Map()

export async function POST(request: NextRequest) {
  try {
    const { pdfId, paymentDetails } = await request.json()

    // In a real application, you would verify the payment with your payment gateway
    // For this example, we'll just simulate a successful payment

    // Generate a purchase token
    const purchaseToken = crypto.randomBytes(16).toString("hex")

    // Store the purchase in our mock database
    mockPurchasedPdfs.set(purchaseToken, [pdfId])

    // Set a cookie with the purchase token
    cookies().set("purchase_token", purchaseToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24 * 30, // 30 days
      path: "/",
    })

    return NextResponse.json({
      success: true,
      message: "Payment successful",
      downloadUrl: `/api/download/${pdfId}`,
    })
  } catch (error) {
    console.error("Payment error:", error)
    return NextResponse.json(
      {
        success: false,
        message: "Payment failed",
      },
      { status: 500 },
    )
  }
}
