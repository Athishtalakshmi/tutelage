"use client"

import { useEffect } from "react"

export function usePdfDownloadButton(title: string, price = 49) {
  useEffect(() => {
    // Find the h1 element on the page
    const h1Element = document.querySelector("h1")

    if (h1Element && !document.querySelector(".pdf-download-button")) {
      // Create a wrapper div for the button
      const wrapper = document.createElement("div")
      wrapper.className = "flex justify-between items-start mb-6"

      // Clone the h1 element
      const h1Clone = h1Element.cloneNode(true)

      // Create a div for the button
      const buttonContainer = document.createElement("div")
      buttonContainer.className = "pdf-download-button"

      // Replace the h1 with the wrapper
      h1Element.parentNode?.replaceChild(wrapper, h1Element)

      // Add the h1 clone and button container to the wrapper
      wrapper.appendChild(h1Clone)
      wrapper.appendChild(buttonContainer)

      // Render the PDF button in the container
      const button = document.createElement("button")
      button.className =
        "flex items-center gap-2 bg-[#b80877] hover:bg-[#b80877]/90 text-white px-4 py-2 rounded-md transition-colors"
      button.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>Download PDF`

      button.addEventListener("click", () => {
        // Create modal
        const modal = document.createElement("div")
        modal.className = "fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
        modal.innerHTML = `
          <div class="bg-white rounded-lg shadow-xl max-w-md w-full p-6 relative">
            <button class="absolute top-3 right-3 text-gray-400 hover:text-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
            <h3 class="text-xl font-bold mb-4">Download PDF Notes</h3>
            <p class="text-gray-600 mb-4">
              Complete your payment to download the full PDF version of <span class="font-medium">${title}</span>.
            </p>
            <div class="bg-gray-50 p-4 rounded-md mb-6">
              <div class="flex justify-between font-bold">
                <span>Price:</span>
                <span>₹${price}</span>
              </div>
            </div>
            <form>
              <div class="space-y-4 mb-6">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    class="w-full px-3 py-2 border border-gray-300 rounded-md"
                    required
                  />
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    class="w-full px-3 py-2 border border-gray-300 rounded-md"
                    required
                  />
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    class="w-full px-3 py-2 border border-gray-300 rounded-md"
                    required
                  />
                </div>
              </div>
              <button
                type="submit"
                class="w-full bg-[#b80877] hover:bg-[#b80877]/90 text-white py-2 rounded-md font-medium"
              >
                Pay ₹${price} and Download
              </button>
            </form>
          </div>
        `

        document.body.appendChild(modal)

        // Close button functionality
        const closeButton = modal.querySelector("button")
        closeButton?.addEventListener("click", () => {
          document.body.removeChild(modal)
        })

        // Form submission
        const form = modal.querySelector("form")
        form?.addEventListener("submit", (e) => {
          e.preventDefault()

          // Replace form with processing indicator
          const formContainer = form.parentNode
          formContainer.innerHTML = `
            <div class="py-10 text-center">
              <div class="inline-block animate-spin h-10 w-10 border-4 border-[#b80877] border-t-transparent rounded-full mb-4"></div>
              <p class="text-gray-600">Processing your payment...</p>
            </div>
          `

          // Simulate payment processing
          setTimeout(() => {
            formContainer.innerHTML = `
              <div class="py-10 text-center">
                <div class="inline-flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="text-green-600"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                </div>
                <h4 class="text-lg font-bold text-green-600 mb-2">Payment Successful!</h4>
                <p class="text-gray-600 mb-4">Your download will begin automatically.</p>
                <div class="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div class="h-full bg-green-500 animate-pulse"></div>
                </div>
              </div>
            `

            // Simulate download
            setTimeout(() => {
              // In a real implementation, this would trigger the actual download
              console.log("Downloading PDF:", `/pdfs/${title.toLowerCase().replace(/\s+/g, "-")}.pdf`)

              // Close modal after download
              setTimeout(() => {
                document.body.removeChild(modal)
              }, 1000)
            }, 1500)
          }, 1500)
        })
      })

      buttonContainer.appendChild(button)
    }
  }, [title, price])

  return null
}
