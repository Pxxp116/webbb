import { useEffect } from "react";

export default function FooterLegal({
  open,
  onClose,
  content,
  title,
}: {
  open: boolean;
  onClose: () => void;
  content: string;
  title: string;
}) {
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[70] flex items-end sm:items-center justify-center"
      role="dialog"
      aria-modal="true"
    >
      <button
        onClick={onClose}
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        aria-label="Cerrar"
      />
      <div className="relative bg-white w-full sm:max-w-4xl max-h-[85vh] overflow-y-auto rounded-t-2xl sm:rounded-2xl shadow-lg">
        <div className="flex items-center justify-between px-4 sm:px-6 py-3 border-b">
          <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
          <button
            onClick={onClose}
            className="text-sm px-3 py-1 rounded-full border border-gray-300 hover:bg-gray-100 text-gray-700"
          >
            Cerrar
          </button>
        </div>
        {/* ✅ Color de texto visible en fondo blanco */}
        <div className="p-4 sm:p-6 whitespace-pre-wrap text-sm leading-relaxed font-sans text-gray-900 dark:text-gray-100">
          {content}
        </div>
      </div>
    </div>
  );
}
