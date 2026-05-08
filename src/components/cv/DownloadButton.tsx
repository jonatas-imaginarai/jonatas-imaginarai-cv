"use client";

import { useState } from "react";
import { Button } from "../ui/Button";
import { Download } from "lucide-react";
import { PdfModal } from "./PdfModal";

export function DownloadButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Button
        variant="outline"
        size="md"
        className="fixed bottom-8 right-8 z-40 shadow-2xl shadow-primary/20 backdrop-blur-md"
        onClick={() => setIsModalOpen(true)}
      >
        <Download className="mr-2 h-4 w-4" />
        Download CV
      </Button>
      <PdfModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
