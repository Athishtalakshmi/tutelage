"use client"

import type React from "react"
import { Download, X, CheckCircle, CreditCard, Smartphone } from "lucide-react"
import { useState } from "react"

interface SimplePdfButtonProps {
  title: string
  price: number
  pdfUrl?: string
  className?: string
}

function SimplePdfButton({ title, price, pdfUrl = "#", className = "" }: SimplePdfButtonProps) {
  const [showPaymentModal, setShowPaymentModal] = useState(false)
  const [paymentStatus, setPaymentStatus] = useState<"idle" | "processing" | "success">("idle")
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<"card" | "upi" | "wallet" | null>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    cardNumber: "",
    cardName: "",
    expiry: "",
    cvv: "",
    upiId: "",
  })

  const handleDownloadClick = () => {
    setShowPaymentModal(true)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setPaymentStatus("processing")

    // Simulate payment processing
    setTimeout(() => {
      setPaymentStatus("success")

      // Simulate download after success
      setTimeout(() => {
        // Open the PDF generation URL in a new window
        const pdfWindow = window.open("/api/generate-pdf/working-with-functions", "_blank")

        // Add a small delay then show print dialog
        setTimeout(() => {
          if (pdfWindow) {
            pdfWindow.focus()
            pdfWindow.print()
          }
        }, 1000)

        // Close modal and reset state
        setTimeout(() => {
          setShowPaymentModal(false)
          setPaymentStatus("idle")
          setSelectedPaymentMethod(null)
          setFormData({
            name: "",
            email: "",
            phone: "",
            cardNumber: "",
            cardName: "",
            expiry: "",
            cvv: "",
            upiId: "",
          })
        }, 1000)
      }, 1500)
    }, 2000)
  }

  const paymentMethods = [
    {
      id: "card" as const,
      name: "Credit/Debit Card",
      icon: <CreditCard size={24} />,
      description: "Visa, Mastercard, RuPay",
    },
    {
      id: "upi" as const,
      name: "UPI",
      icon: <Smartphone size={24} />,
      description: "GPay, PhonePe, Paytm",
    },
    {
      id: "wallet" as const,
      name: "Wallets",
      icon: <Smartphone size={24} />,
      description: "Paytm, Mobikwik, Amazon Pay",
    },
  ]

  return (
    <>
      <button
        onClick={handleDownloadClick}
        className={`flex items-center gap-2 bg-[#b80877] hover:bg-[#b80877]/90 text-white px-4 py-2 rounded-md transition-colors ${className}`}
      >
        <Download size={18} />
        Download PDF
      </button>

      {/* Payment Modal */}
      {showPaymentModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b p-4 flex justify-between items-center">
              <h3 className="text-xl font-bold">Download PDF Notes</h3>
              <button
                onClick={() => setShowPaymentModal(false)}
                className="text-gray-400 hover:text-gray-600"
                disabled={paymentStatus !== "idle"}
              >
                <X size={20} />
              </button>
            </div>

            <div className="p-6">
              {paymentStatus === "idle" && (
                <>
                  <p className="text-gray-600 mb-4">
                    Complete your payment to download the full PDF version of{" "}
                    <span className="font-medium">{title}</span>.
                  </p>

                  <div className="bg-gray-50 p-4 rounded-md mb-6">
                    <div className="flex justify-between font-bold">
                      <span>Price:</span>
                      <span>₹{price}</span>
                    </div>
                  </div>

                  {!selectedPaymentMethod ? (
                    <>
                      <h4 className="font-medium mb-4">Select Payment Method</h4>
                      <div className="space-y-3">
                        {paymentMethods.map((method) => (
                          <button
                            key={method.id}
                            onClick={() => setSelectedPaymentMethod(method.id)}
                            className="w-full p-4 border border-gray-200 rounded-lg hover:border-[#b80877] hover:bg-pink-50 transition-colors flex items-center gap-3"
                          >
                            <div className="text-[#b80877]">{method.icon}</div>
                            <div className="text-left">
                              <div className="font-medium">{method.name}</div>
                              <div className="text-sm text-gray-500">{method.description}</div>
                            </div>
                          </button>
                        ))}
                      </div>
                    </>
                  ) : (
                    <form onSubmit={handlePaymentSubmit}>
                      <div className="mb-4">
                        <button
                          type="button"
                          onClick={() => setSelectedPaymentMethod(null)}
                          className="text-[#b80877] text-sm hover:underline"
                        >
                          ← Change Payment Method
                        </button>
                      </div>

                      {/* Basic Details */}
                      <div className="space-y-4 mb-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                            Full Name
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                            required
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                            Email Address
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                            required
                          />
                        </div>
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                            required
                          />
                        </div>
                      </div>

                      {/* Payment Method Specific Fields */}
                      {selectedPaymentMethod === "card" && (
                        <div className="space-y-4 mb-6">
                          <h5 className="font-medium text-gray-700">Card Details</h5>
                          <div>
                            <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 mb-1">
                              Card Number
                            </label>
                            <input
                              type="text"
                              id="cardNumber"
                              name="cardNumber"
                              value={formData.cardNumber}
                              onChange={handleInputChange}
                              placeholder="1234 5678 9012 3456"
                              maxLength={19}
                              className="w-full px-3 py-2 border border-gray-300 rounded-md"
                              required
                            />
                          </div>
                          <div>
                            <label htmlFor="cardName" className="block text-sm font-medium text-gray-700 mb-1">
                              Cardholder Name
                            </label>
                            <input
                              type="text"
                              id="cardName"
                              name="cardName"
                              value={formData.cardName}
                              onChange={handleInputChange}
                              placeholder="John Doe"
                              className="w-full px-3 py-2 border border-gray-300 rounded-md"
                              required
                            />
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <label htmlFor="expiry" className="block text-sm font-medium text-gray-700 mb-1">
                                Expiry Date
                              </label>
                              <input
                                type="text"
                                id="expiry"
                                name="expiry"
                                value={formData.expiry}
                                onChange={handleInputChange}
                                placeholder="MM/YY"
                                maxLength={5}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                                required
                              />
                            </div>
                            <div>
                              <label htmlFor="cvv" className="block text-sm font-medium text-gray-700 mb-1">
                                CVV
                              </label>
                              <input
                                type="text"
                                id="cvv"
                                name="cvv"
                                value={formData.cvv}
                                onChange={handleInputChange}
                                placeholder="123"
                                maxLength={3}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                                required
                              />
                            </div>
                          </div>
                        </div>
                      )}

                      {selectedPaymentMethod === "upi" && (
                        <div className="space-y-4 mb-6">
                          <h5 className="font-medium text-gray-700">UPI Details</h5>
                          <div>
                            <label htmlFor="upiId" className="block text-sm font-medium text-gray-700 mb-1">
                              UPI ID
                            </label>
                            <input
                              type="text"
                              id="upiId"
                              name="upiId"
                              value={formData.upiId}
                              onChange={handleInputChange}
                              placeholder="yourname@paytm"
                              className="w-full px-3 py-2 border border-gray-300 rounded-md"
                              required
                            />
                          </div>
                          <div className="bg-blue-50 p-3 rounded-md">
                            <p className="text-sm text-blue-700">
                              You can also scan the QR code using your UPI app after clicking pay.
                            </p>
                          </div>
                        </div>
                      )}

                      {selectedPaymentMethod === "wallet" && (
                        <div className="space-y-4 mb-6">
                          <h5 className="font-medium text-gray-700">Wallet Payment</h5>
                          <div className="bg-green-50 p-3 rounded-md">
                            <p className="text-sm text-green-700">
                              You will be redirected to your selected wallet app to complete the payment.
                            </p>
                          </div>
                        </div>
                      )}

                      <button
                        type="submit"
                        className="w-full bg-[#b80877] hover:bg-[#b80877]/90 text-white py-3 rounded-md font-medium"
                      >
                        Pay ₹{price} and Download
                      </button>
                    </form>
                  )}
                </>
              )}

              {paymentStatus === "processing" && (
                <div className="py-10 text-center">
                  <div className="inline-block animate-spin h-10 w-10 border-4 border-[#b80877] border-t-transparent rounded-full mb-4"></div>
                  <p className="text-gray-600">Processing your payment...</p>
                  <p className="text-sm text-gray-500 mt-2">Please do not close this window</p>
                </div>
              )}

              {paymentStatus === "success" && (
                <div className="py-10 text-center">
                  <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-4">
                    <CheckCircle size={32} className="text-green-600" />
                  </div>
                  <h4 className="text-lg font-bold text-green-600 mb-2">Payment Successful!</h4>
                  <p className="text-gray-600">Opening PDF for download...</p>
                  <p className="text-sm text-gray-500 mt-2">Use Ctrl+P (Cmd+P on Mac) to save as PDF</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

interface AddPdfButtonProps {
  title: string
  price: number
  pdfUrl?: string
  className?: string
}

export function AddPdfButton({ title, price, pdfUrl, className }: AddPdfButtonProps) {
  return (
    <SimplePdfButton
      title={title}
      price={price}
      pdfUrl={pdfUrl || `/pdfs/${title.toLowerCase().replace(/\s+/g, "-")}.pdf`}
      className={className}
    />
  )
}

// Default export for backward compatibility
export default SimplePdfButton
