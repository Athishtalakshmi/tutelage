"use client"

import type React from "react"

import { useState } from "react"
import { FileText, Check, AlertCircle } from "lucide-react"

export default function GeneratePDFPage() {
  const [formData, setFormData] = useState({
    title: "",
    subject: "",
    className: "",
    sections: [
      {
        title: "",
        content: "",
        subsections: [{ title: "", content: "" }],
      },
    ],
  })

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [pdfUrl, setPdfUrl] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSectionChange = (index: number, field: string, value: string) => {
    setFormData((prev) => {
      const newSections = [...prev.sections]
      newSections[index] = { ...newSections[index], [field]: value }
      return { ...prev, sections: newSections }
    })
  }

  const handleSubsectionChange = (sectionIndex: number, subsectionIndex: number, field: string, value: string) => {
    setFormData((prev) => {
      const newSections = [...prev.sections]
      const newSubsections = [...newSections[sectionIndex].subsections]
      newSubsections[subsectionIndex] = { ...newSubsections[subsectionIndex], [field]: value }
      newSections[sectionIndex] = { ...newSections[sectionIndex], subsections: newSubsections }
      return { ...prev, sections: newSections }
    })
  }

  const addSection = () => {
    setFormData((prev) => ({
      ...prev,
      sections: [...prev.sections, { title: "", content: "", subsections: [{ title: "", content: "" }] }],
    }))
  }

  const addSubsection = (sectionIndex: number) => {
    setFormData((prev) => {
      const newSections = [...prev.sections]
      newSections[sectionIndex] = {
        ...newSections[sectionIndex],
        subsections: [...newSections[sectionIndex].subsections, { title: "", content: "" }],
      }
      return { ...prev, sections: newSections }
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")

    try {
      const response = await fetch("/api/generate-pdf", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (data.success) {
        setStatus("success")
        setPdfUrl(data.url)
      } else {
        setStatus("error")
      }
    } catch (error) {
      setStatus("error")
    }
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-6 text-[#1f888f]">Generate PDF Notes</h1>

        <div className="bg-white rounded-lg shadow-md p-6">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  required
                >
                  <option value="">Select Subject</option>
                  <option value="Computer Science">Computer Science</option>
                  <option value="Informatics Practices">Informatics Practices</option>
                  <option value="Information Technology">Information Technology</option>
                  <option value="Artificial Intelligence">Artificial Intelligence</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Class</label>
                <select
                  name="className"
                  value={formData.className}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  required
                >
                  <option value="">Select Class</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                </select>
              </div>
            </div>

            <div className="mb-6">
              <h2 className="text-lg font-medium mb-4">Content Sections</h2>

              {formData.sections.map((section, sectionIndex) => (
                <div key={sectionIndex} className="border rounded-md p-4 mb-4">
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Section Title</label>
                    <input
                      type="text"
                      value={section.title}
                      onChange={(e) => handleSectionChange(sectionIndex, "title", e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Section Content</label>
                    <textarea
                      value={section.content}
                      onChange={(e) => handleSectionChange(sectionIndex, "content", e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md h-32"
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <h3 className="text-md font-medium mb-2">Subsections</h3>

                    {section.subsections.map((subsection, subsectionIndex) => (
                      <div key={subsectionIndex} className="border-l-2 border-gray-200 pl-4 mb-4">
                        <div className="mb-3">
                          <label className="block text-sm font-medium text-gray-700 mb-1">Subsection Title</label>
                          <input
                            type="text"
                            value={subsection.title}
                            onChange={(e) =>
                              handleSubsectionChange(sectionIndex, subsectionIndex, "title", e.target.value)
                            }
                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                          />
                        </div>

                        <div className="mb-3">
                          <label className="block text-sm font-medium text-gray-700 mb-1">Subsection Content</label>
                          <textarea
                            value={subsection.content}
                            onChange={(e) =>
                              handleSubsectionChange(sectionIndex, subsectionIndex, "content", e.target.value)
                            }
                            className="w-full px-3 py-2 border border-gray-300 rounded-md h-24"
                          />
                        </div>
                      </div>
                    ))}

                    <button
                      type="button"
                      onClick={() => addSubsection(sectionIndex)}
                      className="text-sm text-[#1f888f] hover:text-[#1f888f]/80"
                    >
                      + Add Subsection
                    </button>
                  </div>
                </div>
              ))}

              <button type="button" onClick={addSection} className="text-[#1f888f] hover:text-[#1f888f]/80 font-medium">
                + Add Section
              </button>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                disabled={status === "loading"}
                className={`flex items-center gap-2 px-4 py-2 rounded-md text-white ${
                  status === "loading" ? "bg-gray-400" : "bg-[#1f888f] hover:bg-[#1f888f]/90"
                }`}
              >
                {status === "loading" ? (
                  <>
                    <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></div>
                    Generating...
                  </>
                ) : (
                  <>
                    <FileText size={18} />
                    Generate PDF
                  </>
                )}
              </button>
            </div>
          </form>

          {status === "success" && (
            <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-md flex items-start gap-3">
              <Check size={20} className="text-green-600 mt-0.5" />
              <div>
                <h3 className="font-medium text-green-800">PDF Generated Successfully</h3>
                <p className="text-green-700 text-sm mt-1">Your PDF has been generated and is ready for download.</p>
                <a
                  href={pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 text-sm bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded"
                >
                  View PDF
                </a>
              </div>
            </div>
          )}

          {status === "error" && (
            <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-md flex items-start gap-3">
              <AlertCircle size={20} className="text-red-600 mt-0.5" />
              <div>
                <h3 className="font-medium text-red-800">Error Generating PDF</h3>
                <p className="text-red-700 text-sm mt-1">There was an error generating the PDF. Please try again.</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
