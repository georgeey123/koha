import Image from "next/image";

export default function Testimonial() {
  const images = [
    { before: "/images/before_samp_1.jpg", after: "/images/after_samp_1.jpg" },
    { before: "/images/before_samp_2.jpg", after: "/images/after_samp_2.jpg" },
    { before: "/images/before_samp_3.jpg", after: "/images/after_samp_3.jpg" },
  ];

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-8">Testimonials</h1>
      <p className="text-center text-lg text-gray-600 mb-12">
        Check out the amazing transformations with our hair products!
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {images.map((img, index) => (
          <div key={index} className="flex flex-col items-center">
            <h3 className="text-xl font-semibold mb-2">Before</h3>
            <Image
              src={img.before}
              alt="Before using product"
              width={300}
              height={300}
              className="rounded-lg shadow-lg"
            />
            <h3 className="text-xl font-semibold mt-4 mb-2">After</h3>
            <Image
              src={img.after}
              alt="After using product"
              width={300}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
