"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Download, Eye, X } from "lucide-react";

interface PDFViewerProps {
    title: string;
    pdfUrl: string;
    thumbnailUrl: string;
    description: string;
}

export function PDFViewer({
    title,
    pdfUrl,
    thumbnailUrl,
    description,
}: PDFViewerProps) {
    const [isOpen, setIsOpen] = useState(false);

    const handleDownload = () => {
        // Create a temporary link element and trigger download
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = `${title}.pdf`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className='elegant-card hover:shadow-2xl transition-all duration-500 border border-warmBrown/20 rounded-xl overflow-hidden bg-white flex flex-col'>
            {/* Image Section */}
            <div className='aspect-[3/4] bg-gradient-to-br from-softPink/20 to-warmBrown/10 relative overflow-hidden flex-shrink-0'>
                <img
                    src={thumbnailUrl || "/placeholder.svg"}
                    alt={title}
                    className='w-full h-full object-cover'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-warmBrown/20 to-transparent'></div>
            </div>

            {/* Content Section */}
            <div className='p-6 flex flex-col flex-1 min-h-0'>
                <h3 className='text-xl font-bold mb-3 text-warmBrown'>
                    {title}
                </h3>
                <p className='text-warmBrown/70 mb-4 text-sm font-normal leading-relaxed flex-1'>
                    {description}
                </p>

                {/* Buttons Section */}
                <div className='flex gap-3 pt-2'>
                    <Dialog open={isOpen} onOpenChange={setIsOpen}>
                        <DialogTrigger asChild>
                            <Button className='flex-1 bg-warmBrown text-white hover:bg-warmBrown/80 transition-all duration-300 rounded-lg px-3 py-2 font-medium text-sm'>
                                <Eye className='mr-2 h-4 w-4' />
                                Preview
                            </Button>
                        </DialogTrigger>
                        <DialogContent className='max-w-4xl h-[80vh] bg-white border-warmBrown/20'>
                            {/* <DialogHeader className='items-center'> */}
                            <DialogTitle className='items-center justify-between text-warmBrown grid grid-rows-1 '>
                                {title}
                                {/* <Button
                                        variant='ghost'
                                        size='sm'
                                        onClick={() => setIsOpen(false)}
                                        className='text-warmBrown hover:bg-warmBrown/10'
                                    >
                                        <X className='h-4 w-4' />
                                    </Button> */}
                            </DialogTitle>
                            {/* </DialogHeader> */}

                            <div className=' bg-gray-100 rounded-lg overflow-hidden border border-warmBrown/10 grid grid-rows-3'>
                                <iframe
                                    src={`${pdfUrl}#toolbar=1&scrollbar=1&zoom=20&view=FitH`}
                                    className='w-full h-full'
                                    title={title}
                                />
                            </div>
                        </DialogContent>
                    </Dialog>

                    <Button
                        variant='outline'
                        className='flex-1 border-2 border-warmBrown text-warmBrown hover:bg-warmBrown hover:text-white transition-all duration-300 rounded-lg px-3 py-2 font-medium text-sm'
                        onClick={handleDownload}
                    >
                        <Download className='mr-2 h-4 w-4' />
                        Download
                    </Button>
                </div>
            </div>
        </div>
    );
}
