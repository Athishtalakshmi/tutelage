"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { X, CreditCard, CheckCircle } from "lucide-react"

interface PaymentModalProps {
  isOpen: boolean
  onClose: () => void
  onSuccess: () => void
  amount: number
  title: string
  pdfId?: string
}

export default function PaymentModal({ isOpen, onClose, onSuccess, amount, title, pdfId }: PaymentModalProps) {
  const [step, setStep] = useState<"details" | "processing" | "success" | "error">("details")
  const [formData, setFormData] = useState({
    cardNumber: "",
    cardName: "",
    expiry: "",
    cvv: "",
  })
  const [errorMessage, setErrorMessage] = useState("")

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    // Format card number with spaces
    if (name === "cardNumber") {
      const formatted = value
        .replace(/\s/g, "")
        .replace(/(\d{4})/g, "$1 ")
        .trim()
      setFormData((prev) => ({ ...prev, [name]: formatted }))
      return
    }

    // Format expiry date
    if (name === "expiry") {
      const formatted = value
        .replace(/\D/g, "")
        .replace(/^(\d{2})/, "$1/")
        .substring(0, 5)
      setFormData((prev) => ({ ...prev, [name]: formatted }))
      return
    }

    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStep("processing")

    try {
      // In a real application, you would integrate with a payment gateway here
      // For this example, we'll just simulate a payment process

      // Simulate API call to process payment
      const response = await fetch("/api/payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          pdfId: pdfId || title.toLowerCase().replace(/\s+/g, "-"),
          paymentDetails: {
            amount,
            cardNumber: formData.cardNumber.replace(/\s/g, ""),
            cardName: formData.cardName,
            expiry: formData.expiry,
          },
        }),
      })

      const data = await response.json()

      if (data.success) {
        setStep("success")
        // Simulate success callback after showing success message
        setTimeout(() => {
          onSuccess()
        }, 2000)
      } else {
        throw new Error(data.message || "Payment failed")
      }
    } catch (error) {
      console.error("Payment error:", error)
      setStep("error")
      setErrorMessage(error instanceof Error ? error.message : "Payment failed. Please try again.")
    }
  }

  const handleRetry = () => {
    setStep("details")
    setErrorMessage("")
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md mx-4">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-bold">Payment</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X size={20} />
          </button>
        </div>

        <div className="p-6">
          {step === "details" && (
            <>
              <div className="mb-4">
                <p className="text-gray-600">You are purchasing:</p>
                <p className="font-medium mt-1">{title}</p>
                <p className="text-lg font-bold mt-2">₹{amount}</p>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Card Number</label>
                  <input
                    type="text"
                    name="cardNumber"
                    value={formData.cardNumber}
                    onChange={handleChange}
                    placeholder="1234 5678 9012 3456"
                    maxLength={19}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Cardholder Name</label>
                  <input
                    type="text"
                    name="cardName"
                    value={formData.cardName}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Expiry Date</label>
                    <input
                      type="text"
                      name="expiry"
                      value={formData.expiry}
                      onChange={handleChange}
                      placeholder="MM/YY"
                      maxLength={5}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">CVV</label>
                    <input
                      type="text"
                      name="cvv"
                      value={formData.cvv}
                      onChange={handleChange}
                      placeholder="123"
                      maxLength={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      required
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#1f888f] hover:bg-[#1f888f]/90 text-white py-2 rounded-md flex items-center justify-center gap-2"
                >
                  <CreditCard size={18} />
                  Pay ₹{amount}
                </button>
              </form>

              <div className="mt-4 text-xs text-gray-500 text-center">
                This is a demo payment form. No actual payment will be processed.
              </div>
            </>
          )}

          {step === "processing" && (
            <div className="py-8 text-center">
              <div className="animate-spin h-12 w-12 border-4 border-[#1f888f] border-t-transparent rounded-full mx-auto mb-4"></div>
              <p className="text-lg font-medium">Processing Payment</p>
              <p className="text-gray-500 mt-1">Please wait while we process your payment...</p>
            </div>
          )}

          {step === "success" && (
            <div className="py-8 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle size={32} className="text-green-600" />
              </div>
              <p className="text-lg font-medium text-green-600">Payment Successful!</p>
              <p className="text-gray-500 mt-1">Your download will begin shortly...</p>
            </div>
          )}

          {step === "error" && (
            <div className="py-8 text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <X size={32} className="text-red-600" />
              </div>
              <p className="text-lg font-medium text-red-600">Payment Failed</p>
              <p className="text-gray-500 mt-1">{errorMessage}</p>
              <button
                onClick={handleRetry}
                className="mt-4 px-4 py-2 bg-[#1f888f] text-white rounded-md hover:bg-[#1f888f]/90"
              >
                Try Again
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
