"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface VimeoPlayerProps {
  vimeoId: string;
  title: string;
  autoplay?: boolean;
  className?: string;
}

/**
 * Thumbnail preview for a Vimeo video. Clicking loads the Vimeo player in a
 * modal dialog so the iframe only loads when the user wants to watch.
 */
export default function VimeoPlayer({
  vimeoId,
  title,
  autoplay = false,
  className = "",
}: VimeoPlayerProps) {
  const [open, setOpen] = useState(false);
  const [thumbnail, setThumbnail] = useState<string | null>(null);

  useEffect(() => {
    let active = true;
    fetch(`https://vimeo.com/api/oembed.json?url=https://vimeo.com/${vimeoId}&width=1280`)
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => {
        if (active && data?.thumbnail_url) {
          // Upscale the Vimeo CDN thumbnail URL for higher resolution.
          setThumbnail(data.thumbnail_url.replace(/_\d+x\d+/, "_1280x720"));
        }
      })
      .catch(() => {});
    return () => {
      active = false;
    };
  }, [vimeoId]);

  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      const onKey = (e: KeyboardEvent) => {
        if (e.key === "Escape") setOpen(false);
      };
      window.addEventListener("keydown", onKey);
      return () => {
        document.body.style.overflow = prev;
        window.removeEventListener("keydown", onKey);
      };
    }
  }, [open]);

  const embedUrl = `https://player.vimeo.com/video/${vimeoId}?dnt=1&byline=0&portrait=0&title=0${
    autoplay ? "&autoplay=1" : ""
  }`;

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={`Play ${title}`}
        className={`group relative block w-full aspect-video overflow-hidden bg-black focus:outline-none focus-visible:outline-2 focus-visible:outline-brand-blue focus-visible:outline-offset-4 ${className}`}
      >
        {thumbnail ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={thumbnail}
            alt=""
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-black to-brand-blue/60" />
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />

        {/* Play button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/95 flex items-center justify-center shadow-2xl transition-transform duration-500 group-hover:scale-110">
            <svg
              viewBox="0 0 24 24"
              className="w-6 h-6 md:w-7 md:h-7 text-brand-blue ml-1"
              aria-hidden="true"
            >
              <polygon points="7,4 20,12 7,20" fill="currentColor" />
            </svg>
          </span>
        </div>
      </button>

      {/* Modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[200] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 md:p-10"
            onClick={() => setOpen(false)}
            role="dialog"
            aria-modal="true"
            aria-label={title}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-6xl aspect-video bg-black overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                src={embedUrl}
                title={title}
                className="absolute inset-0 w-full h-full border-0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              />
            </motion.div>

            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close video"
              className="absolute top-5 right-5 md:top-8 md:right-8 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors focus:outline-none focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
            >
              <svg
                viewBox="0 0 24 24"
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              </svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
