"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../ui/Button";
import { X, Download } from "lucide-react";

interface PdfModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PdfModal({ isOpen, onClose }: PdfModalProps) {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async (locale: string) => {
    setIsDownloading(true);
    try {
      window.location.href = `/api/pdf/${locale}`;
    } catch (error) {
      console.error("Download failed", error);
    } finally {
      setTimeout(() => {
        setIsDownloading(false);
        onClose();
      }, 2000);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[60] bg-background/80 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed left-1/2 top-1/2 z-[70] w-full max-w-md -translate-x-1/2 -translate-y-1/2 rounded-3xl border border-border bg-card p-8 shadow-2xl shadow-primary/10"
          >
            <div className="mb-6 flex items-center justify-between">
              <h3 className="font-mono text-xs uppercase tracking-[0.3em] font-bold">
                Download CV (PDF)
              </h3>
              <button onClick={onClose} className="opacity-40 hover:opacity-100 transition-opacity">
                <X className="h-4 w-4" />
              </button>
            </div>

            <p className="mb-8 text-sm opacity-60">
              Selecione o idioma para o arquivo PDF:
            </p>

            <div className="grid gap-4">
              <Button 
                variant="outline" 
                className="justify-between" 
                onClick={() => handleDownload('pt')}
                disabled={isDownloading}
              >
                Português (Brasil)
                <Download className="h-4 w-4" />
              </Button>
              <Button 
                variant="outline" 
                className="justify-between" 
                onClick={() => handleDownload('es')}
                disabled={isDownloading}
              >
                Español (Argentina)
                <Download className="h-4 w-4" />
              </Button>
              <Button 
                variant="outline" 
                className="justify-between" 
                onClick={() => handleDownload('en')}
                disabled={isDownloading}
              >
                English (USA)
                <Download className="h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
