import React, { useEffect } from "react";
import { CheckCircle2, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface ToastProps {
  message: string;
  isOpen: boolean;
  onClose: () => void;
}

export default function Toast({ message, isOpen, onClose }: ToastProps) {
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-lg border border-primary/40 bg-surface-dark/95 px-5 py-4 text-white shadow-2xl backdrop-blur-md"
          role="alert"
          id="copy-toast"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/20 text-primary">
            <CheckCircle2 className="h-5 w-5" />
          </div>
          <div className="flex-1">
            <p className="font-display text-sm font-semibold tracking-wide">IP BERHASIL DISALIN!</p>
            <p className="text-xs text-text-secondary">{message}</p>
          </div>
          <button
            onClick={onClose}
            className="text-text-secondary hover:text-white transition-colors"
            aria-label="Tutup notifikasi"
          >
            <X className="h-4 w-4" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
