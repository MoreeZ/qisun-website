import { useState } from "react";
import { motion } from "framer-motion";

interface GalleryProps {
  images: {
    src: string;
    alt: string;
    caption?: string;
  }[];
  title?: string;
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.16,
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const Gallery = ({ images, title }: GalleryProps) => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openModal = (index: number) => {
    setSelectedImage(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: "prev" | "next") => {
    if (selectedImage === null) return;

    if (direction === "prev") {
      setSelectedImage(
        selectedImage === 0 ? images.length - 1 : selectedImage - 1
      );
    } else {
      setSelectedImage(
        selectedImage === images.length - 1 ? 0 : selectedImage + 1
      );
    }
  };

  return (
    <div className="my-8">
      {title && (
        <div className="mb-12 mt-16 text-center">
          <h2 className="section-title text-gray-900">
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
              style={{ display: 'block' }}
            >
              {title}
            </motion.span>
          </h2>
        </div>
      )}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <motion.div
            variants={itemVariants}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div
              key={index}
              className="overflow-hidden rounded-lg shadow-md cursor-pointer transition-transform hover:scale-105"
              onClick={() => openModal(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover"
              />
              {image.caption && (
                <div className="p-2 bg-white">
                  <p className="text-sm text-gray-600">{image.caption}</p>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
      </motion.div>

      {/* Image Modal */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div
            className="relative max-w-4xl mx-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
              onClick={closeModal}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <button
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300"
              onClick={(e) => {
                e.stopPropagation();
                navigateImage("prev");
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <img
              src={images[selectedImage].src}
              alt={images[selectedImage].alt}
              className="max-h-[80vh] mx-auto"
            />

            <button
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300"
              onClick={(e) => {
                e.stopPropagation();
                navigateImage("next");
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            {images[selectedImage].caption && (
              <div className="bg-white bg-opacity-80 p-4 mt-2">
                <p className="text-center text-gray-800">
                  {images[selectedImage].caption}
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
