// import TestimonialCard from '@/components/TestimonialCard';
// import type { Metadata } from 'next';

// export const metadata: Metadata = {
//   title: 'Koha Testimonials | Real Results',
//   description: 'See what our customers are saying about Koha hair oil and view their amazing results.',
// };

// // Example Testimonial Data
// const testimonials = [
//     {
//         quote: "I've struggled with dry, brittle hair for years. After just a month of using Koha oil, my hair feels incredibly soft and looks so much healthier. The shine is amazing!",
//         author: "Sarah K.",
//         beforeImageUrl: "", 
//         afterImageUrl: "",   
//     },
//     {
//         quote: "My scalp used to be so itchy and flaky. Koha oil has completely balanced it out. Plus, I've noticed less hair fall and some new growth around my hairline.",
//         author: "Michael T.",
//         // beforeImageUrl: "/images/before-2.jpg",
//         // afterImageUrl: "/images/after-2.jpg",
//     },
//      {
//         quote: "Love the natural scent and how lightweight this oil feels. It doesn't make my hair greasy, just beautifully manageable and soft.",
//         author: "Priya L.",
//     },
//      {
//         quote: "Visible difference in split ends and overall strength. This is now a staple in my hair care routine.",
//         author: "James R.",
//         beforeImageUrl: "/images/before-3.jpg",
//         afterImageUrl: "/images/after-3.jpg",
//     },
// ];


// export default function TestimonialsPage() {
//   return (
//     <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
//       <h1 className="text-3xl md:text-4xl font-serif font-semibold text-olive-600 mb-10 text-center">
//         What Our Customers Say
//       </h1>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
//           {testimonials.map((testimonial, index) => (
//             <TestimonialCard
//                 key={index}
//                 quote={testimonial.quote}
//                 author={testimonial.author}
//                 beforeImageUrl={testimonial.beforeImageUrl}
//                 afterImageUrl={testimonial.afterImageUrl}
//             />
//           ))}
//       </div>
//     </div>
//   );
// }