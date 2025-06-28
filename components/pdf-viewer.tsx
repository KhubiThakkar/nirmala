"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Download, Eye, X } from "lucide-react"

interface PDFViewerProps {
  title: string
  pdfUrl: string
  thumbnailUrl: string
  description: string
}

export function PDFViewer({ title, pdfUrl, thumbnailUrl, description }: PDFViewerProps) {
  const [isOpen, setIsOpen] = useState(false)

  const handleDownload = () => {
    // Create a temporary link element and trigger download
    const link = document.createElement("a")
    link.href = pdfUrl
    link.download = `${title}.pdf`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
      <div className="aspect-[3/4] bg-gray-100 relative overflow-hidden">
        <img src={thumbnailUrl || "/placeholder.svg"} alt={title} className="w-full h-full object-cover" />
      </div>

      <div className="p-6">
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 text-sm">{description}</p>

        <div className="flex gap-2">
          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
              <Button size="sm" className="flex-1 bg-black text-white hover:bg-gray-800">
                <Eye className="mr-2 h-4 w-4" />
                View
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl h-[80vh]">
              <DialogHeader>
                <DialogTitle className="flex items-center justify-between">
                  {title}
                  <Button variant="ghost" size="sm" onClick={() => setIsOpen(false)}>
                    <X className="h-4 w-4" />
                  </Button>
                </DialogTitle>
              </DialogHeader>
              <div className="flex-1 bg-gray-100 rounded-lg overflow-hidden">
                <iframe src={`${pdfUrl}#toolbar=1&navpanes=1&scrollbar=1`} className="w-full h-full" title={title} />
              </div>
            </DialogContent>
          </Dialog>

          <Button size="sm" variant="outline" className="flex-1" onClick={handleDownload}>
            <Download className="mr-2 h-4 w-4" />
            Download
          </Button>
        </div>
      </div>
    </div>
  )
}
