"use client"

import { usePdfDownloadButton } from "@/lib/add-pdf-to-pages"

export default function ExamplePage() {
  // This will automatically add a PDF download button next to the first h1 element
  usePdfDownloadButton("Example Page Title", 39)

  return (
    <div className="container mx-auto py-6 px-4">
      <div className="bg-white rounded-lg shadow-md p-5">
        <h1 className="text-xl font-bold text-[#1f888f]">Example Page Title</h1>

        <div className="prose max-w-none text-sm mt-6">
          <p>This is an example page that demonstrates how to use the PDF download helper function.</p>
          <p>The helper function automatically adds a PDF download button next to the page title.</p>
        </div>
      </div>
    </div>
  )
}
