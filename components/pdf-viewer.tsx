"use client";

import { useState } from "react";
import Image from "next/image";
import {
    Dialog,
    DialogContent,
    DialogTitle,
} from "@/components/ui/dialog";
import { Download, Eye } from "lucide-react";

interface PDFViewerProps {
    title: string;
    pdfUrl: string;
    thumbnailUrl: string;
    description: string;
    category?: string;
}

export function PDFViewer({
    title,
    pdfUrl,
    thumbnailUrl,
    description,
    category,
}: PDFViewerProps) {
    const [isOpen, setIsOpen] = useState(false);

    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = `${title}.pdf`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className='card-surface flex flex-col h-full'>
            <div className='relative aspect-[3/4] overflow-hidden'>
                <Image
                    src={thumbnailUrl || "/placeholder.svg"}
                    alt={title}
                    fill
                    sizes='(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw'
                    className='object-cover'
                />
                <div
                    className='absolute inset-0'
                    style={{
                        background:
                            "linear-gradient(to top, rgba(0,0,0,.45), transparent 55%)",
                    }}
                />
                {category && (
                    <span className='absolute top-3 left-3 rounded-pill bg-surface-raised px-2.5 py-1 text-[10px] font-medium uppercase tracking-wide text-ink'>
                        {category}
                    </span>
                )}
            </div>

            <div className='p-5 flex flex-col flex-1'>
                <h3 className='text-[15px] font-semibold uppercase tracking-wide text-ink mb-1'>
                    {title}
                </h3>
                <p className='text-xs text-ink-muted mb-3'>by Tsuco</p>
                <p className='text-sm text-ink-secondary leading-relaxed mb-5 flex-1 line-clamp-3'>
                    {description}
                </p>

                <div className='flex flex-col gap-2'>
                    <Dialog open={isOpen} onOpenChange={setIsOpen}>
                        <button
                            type='button'
                            onClick={() => setIsOpen(true)}
                            className='btn btn-secondary w-full'
                        >
                            <Eye className='h-4 w-4' />
                            Preview
                        </button>
                        <DialogContent className='max-w-4xl h-[80vh] rounded-lg bg-surface-raised border-[color:var(--border-header)]'>
                            <DialogTitle className='text-ink'>
                                {title}
                            </DialogTitle>
                            <div className='bg-surface-elevated rounded-md overflow-hidden border border-[color:var(--border-header)] flex-1'>
                                <iframe
                                    src={`${pdfUrl}#toolbar=1&scrollbar=1&zoom=20&view=FitH`}
                                    className='w-full h-full'
                                    title={title}
                                />
                            </div>
                        </DialogContent>
                    </Dialog>

                    <button
                        type='button'
                        onClick={handleDownload}
                        className='btn btn-ghost w-full'
                    >
                        <Download className='h-4 w-4' />
                        Download
                    </button>
                </div>
            </div>
        </div>
    );
}
