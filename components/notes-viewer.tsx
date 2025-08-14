"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Download, Lock, CheckCircle, AlertCircle } from "lucide-react"
import PaymentModal from "./payment-modal"

interface NotesViewerProps {
  title: string
  subject: string
  className: string
  price: number
  previewContent: React.ReactNode
  pdfUrl: string
}

export default function NotesViewer({ title, subject, className, price, previewContent, pdfUrl }: NotesViewerProps) {
  const [paymentStatus, setPaymentStatus] = useState<"idle" | "processing" | "success" | "error">("idle")
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false)

  const handleDownload = () => {
    setIsPaymentModalOpen(true)
  }

  const handlePaymentSuccess = () => {
    setIsPaymentModalOpen(false)
    setPaymentStatus("success")

    // Trigger download
    setTimeout(() => {
      const link = document.createElement("a")
      link.href = pdfUrl
      link.download = `${subject}-${className}-${title.replace(/\s+/g, "-")}.pdf`
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }, 1000)
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      {/* Notes Header */}
      <div className="bg-gradient-to-r from-[#1f888f] to-[#1f888f]/80 p-4 text-white">
        <h1 className="text-xl font-bold">{title}</h1>
        <div className="flex items-center text-sm mt-1">
          <span>{subject}</span>
          <span className="mx-2">•</span>
          <span>Class {className}</span>
        </div>
      </div>

      {/* Notes Content Preview */}
      <div className="p-6">
        <div className="prose max-w-none">{previewContent}</div>

        {/* Download Section */}
        <div className="mt-8 border-t pt-6">
          <div className="bg-gray-50 rounded-lg p-4 flex flex-col sm:flex-row justify-between items-center">
            <div>
              <h3 className="font-bold text-lg">Download PDF Notes</h3>
              <p className="text-gray-600 text-sm mt-1">
                Get the complete notes in high-quality PDF format for offline study
              </p>
            </div>

            <div className="mt-4 sm:mt-0">
              {paymentStatus === "idle" && (
                <button
                  onClick={handleDownload}
                  className="flex items-center gap-2 bg-[#b80877] hover:bg-[#b80877]/90 text-white px-4 py-2 rounded-md"
                >
                  <Download size={18} />
                  Download (₹{price})
                </button>
              )}

              {paymentStatus === "processing" && (
                <button disabled className="flex items-center gap-2 bg-gray-400 text-white px-4 py-2 rounded-md">
                  <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></div>
                  Processing...
                </button>
              )}

              {paymentStatus === "success" && (
                <button disabled className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-md">
                  <CheckCircle size={18} />
                  Download Starting...
                </button>
              )}

              {paymentStatus === "error" && (
                <button
                  onClick={handleDownload}
                  className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md"
                >
                  <AlertCircle size={18} />
                  Try Again
                </button>
              )}
            </div>
          </div>

          <div className="mt-4 flex flex-col sm:flex-row items-center justify-between text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <Lock size={14} />
              <span>Secure payment via Razorpay</span>
            </div>
            <Link href="/terms" className="mt-2 sm:mt-0 hover:text-[#1f888f]">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>

      <PaymentModal
        isOpen={isPaymentModalOpen}
        onClose={() => setIsPaymentModalOpen(false)}
        onSuccess={handlePaymentSuccess}
        amount={price}
        title={`${subject} Class ${className} - ${title} Notes`}
      />
    </div>
  )
}
