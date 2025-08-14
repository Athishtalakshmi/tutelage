"use client"

import { useState } from "react"
import { Download, FileText, X } from "lucide-react"

interface PdfDownloadButtonProps {
  title: string
  price: number
  pdfUrl?: string
  position?: "top-right" | "bottom-right" | "inline"
  variant?: "primary" | "secondary" | "outline"
}

export default function PdfDownloadButton({
  title,
  price,
  pdfUrl = "#",
  position = "top-right",
  variant = "primary",
}: PdfDownloadButtonProps) {
  const [showPaymentModal, setShowPaymentModal] = useState(false)
  const [paymentStatus, setPaymentStatus] = useState<"idle" | "processing" | "success" | "error">("idle")

  // Position classes
  const positionClasses = {
    "top-right": "absolute top-4 right-4",
    "bottom-right": "fixed bottom-6 right-6 z-50 shadow-lg",
    inline: "relative",
  }

  // Variant classes
  const variantClasses = {
    primary: "bg-[#b80877] hover:bg-[#b80877]/90 text-white",
    secondary: "bg-[#1f888f] hover:bg-[#1f888f]/90 text-white",
    outline: "bg-white hover:bg-gray-50 text-[#b80877] border border-[#b80877]",
  }

  const handleDownloadClick = () => {
    setShowPaymentModal(true)
  }

  const handlePaymentSuccess = () => {
    setPaymentStatus("processing")

    // Simulate payment processing
    setTimeout(() => {
      setPaymentStatus("success")

      // Simulate download
      setTimeout(() => {
        // In a real implementation, this would trigger the actual download
        console.log("Downloading PDF:", pdfUrl)

        // Reset state after download
        setTimeout(() => {
          setShowPaymentModal(false)
          setPaymentStatus("idle")
        }, 2000)
      }, 1000)
    }, 1500)
  }

  return (
    <>
      <button
        onClick={handleDownloadClick}
        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm transition-colors ${
          position !== "inline" ? positionClasses[position] : ""
        } ${variantClasses[variant]}`}
      >
        <Download size={16} />
        Download PDF (₹{price})
      </button>

      {/* Payment Modal */}
      {showPaymentModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6 relative">
            <button
              onClick={() => setShowPaymentModal(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
              disabled={paymentStatus === "processing"}
            >
              <X size={20} />
            </button>

            <h3 className="text-xl font-bold mb-4">Download {title} PDF</h3>

            {paymentStatus === "idle" && (
              <>
                <p className="text-gray-600 mb-6">
                  Complete your payment to download the full PDF version of this content.
                </p>

                <div className="space-y-4 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#b80877]"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#b80877]"
                      placeholder="Enter your email address"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#b80877]"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-md mb-6">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Price:</span>
                    <span className="font-medium">₹{price}</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">GST (18%):</span>
                    <span className="font-medium">₹{Math.round(price * 0.18)}</span>
                  </div>
                  <div className="border-t pt-2 flex justify-between font-bold">
                    <span>Total:</span>
                    <span>₹{price + Math.round(price * 0.18)}</span>
                  </div>
                </div>

                <button
                  onClick={handlePaymentSuccess}
                  className="w-full bg-[#b80877] hover:bg-[#b80877]/90 text-white py-2 rounded-md font-medium"
                >
                  Pay Now
                </button>

                <p className="text-xs text-gray-500 mt-4 text-center">
                  By proceeding, you agree to our Terms of Service and Privacy Policy.
                </p>
              </>
            )}

            {paymentStatus === "processing" && (
              <div className="py-8 text-center">
                <div className="inline-block animate-spin h-8 w-8 border-4 border-[#b80877] border-t-transparent rounded-full mb-4"></div>
                <p className="text-gray-600">Processing your payment...</p>
              </div>
            )}

            {paymentStatus === "success" && (
              <div className="py-8 text-center">
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-4">
                  <FileText size={32} className="text-green-600" />
                </div>
                <h4 className="text-lg font-bold text-green-600 mb-2">Payment Successful!</h4>
                <p className="text-gray-600 mb-4">Your download will begin automatically.</p>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-green-500 animate-progress"></div>
                </div>
              </div>
            )}

            {paymentStatus === "error" && (
              <div className="py-8 text-center">
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-red-100 mb-4">
                  <X size={32} className="text-red-600" />
                </div>
                <h4 className="text-lg font-bold text-red-600 mb-2">Payment Failed</h4>
                <p className="text-gray-600 mb-4">There was an issue processing your payment. Please try again.</p>
                <button
                  onClick={() => setPaymentStatus("idle")}
                  className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md"
                >
                  Try Again
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}
