// import { getBlogs } from "@/lib/getBlogs";
// import Image from "next/image";
// import { notFound } from "next/navigation";

// export default async function Page({
//   params,
// }: {
//   params: Promise<{ slug: string }>;
// }) {
//   const { slug } = await params; // ✅ unwrap params

//   const blogs = getBlogs();
//   const blog = blogs.find((b) => b.slug === slug);

//   if (!blog) {
//     notFound();
//   }

//   return (
//     <div className="max-w-6xl mx-auto">
//       <div className="grid gap-10 justify-center mt-50 px-4">
//         <div className="grid gap-3">
//           <p className="text-gray-400 text-md text-center font-md">
//             Published {blog.date}
//           </p>
//           <h1 className="leading-normal text-white text-center font-bold 2xl:text-6xl lg:text-4xl md:text-3xl sm:text-2xl text-2xl">
//             {blog.title}
//           </h1>

//           <div className="flex justify-center">
//             <span className="rounded-full text-bold bg-white shadow-2xl text-gray-800 px-3 pt-3 pb-2 text-xs w-fit">
//               {blog.tag}
//             </span>
//           </div>
//         </div>

//         <div className="flex justify-center">
//           <Image
//             src={blog.image}
//             alt="Image"
//             className="h-fit w-fit rounded-2xl"
//             height={200}
//             width={200}
//           />
//         </div>

//         <div className="flex justify-center">
//           <Image
//             src={blog.content}
//             alt="Image"
//             className="h-fit w-fit 2xl:block lg:block md:block sm:hidden hidden"
//             height={200}
//             width={200}
//           />

//           <Image
//             src={blog.contentMobile}
//             alt="Image"
//             className="h-fit w-fit 2xl:hidden lg:hidden md:hidden sm:block block"
//             height={200}
//             width={200}
//           />
//         </div>
//       </div>
//     </div>
//   );
// }
