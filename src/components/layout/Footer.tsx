// import Link from 'next/link'

// export default function Footer() {
//   return (
//     <footer className="border-t border-gray-200 bg-gray-900 text-gray-300">
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
//           <div>
//             <h3 className="text-white font-semibold mb-4">DesignHub</h3>
//             <p className="text-sm">
//               Global marketplace for UI/UX design assets. Discover, download, and monetize designs.
//             </p>
//           </div>

//           <div>
//             <h4 className="text-white font-semibold mb-4">For Buyers</h4>
//             <ul className="space-y-2 text-sm">
//               <li>
//                 <Link href="/browse" className="hover:text-white transition-colors">
//                   Browse Assets
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/categories" className="hover:text-white transition-colors">
//                   Categories
//                 </Link>
//               </li>
//               <li>
//                 <Link href="#" className="hover:text-white transition-colors">
//                   Collections
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           <div>
//             <h4 className="text-white font-semibold mb-4">For Designers</h4>
//             <ul className="space-y-2 text-sm">
//               <li>
//                 <Link href="/designer-dashboard" className="hover:text-white transition-colors">
//                   Dashboard
//                 </Link>
//               </li>
//               <li>
//                 <Link href="#" className="hover:text-white transition-colors">
//                   Upload Assets
//                 </Link>
//               </li>
//               <li>
//                 <Link href="#" className="hover:text-white transition-colors">
//                   Earnings
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           <div>
//             <h4 className="text-white font-semibold mb-4">Legal</h4>
//             <ul className="space-y-2 text-sm">
//               <li>
//                 <Link href="#" className="hover:text-white transition-colors">
//                   Privacy Policy
//                 </Link>
//               </li>
//               <li>
//                 <Link href="#" className="hover:text-white transition-colors">
//                   Terms of Service
//                 </Link>
//               </li>
//               <li>
//                 <Link href="#" className="hover:text-white transition-colors">
//                   Contact
//                 </Link>
//               </li>
//             </ul>
//           </div>
//         </div>

//         <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
//           <p className="text-sm">&copy; 2026 DesignHub. All rights reserved.</p>
//           <div className="flex gap-4 mt-4 md:mt-0">
//             <a href="#" className="text-gray-400 hover:text-white transition-colors">
//               Twitter
//             </a>
//             <a href="#" className="text-gray-400 hover:text-white transition-colors">
//               LinkedIn
//             </a>
//             <a href="#" className="text-gray-400 hover:text-white transition-colors">
//               Discord
//             </a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   )
// }


import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">

          {/* Logo + About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/designhub-logo.png"
                alt="DesignHub Logo"
                width={40}
                height={40}
                className="rounded"
              />
              <h3 className="text-white text-lg font-semibold">
                DesignHub
              </h3>
            </div>

            <p className="text-sm">
              Global marketplace for UI/UX design assets. Discover, download, and monetize designs.
            </p>
          </div>

          {/* For Buyers */}
          <div>
            <h4 className="text-white font-semibold mb-4">For Buyers</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/browse" className="hover:text-white">Browse Assets</Link></li>
              <li><Link href="/categories" className="hover:text-white">Categories</Link></li>
              <li><Link href="#" className="hover:text-white">Collections</Link></li>
            </ul>
          </div>

          {/* For Designers */}
          <div>
            <h4 className="text-white font-semibold mb-4">For Designers</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/designer-dashboard" className="hover:text-white">Dashboard</Link></li>
              <li><Link href="#" className="hover:text-white">Upload Assets</Link></li>
              <li><Link href="#" className="hover:text-white">Earnings</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-white">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-white">Terms of Service</Link></li>
              <li><Link href="#" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">© 2026 DesignHub. All rights reserved.</p>

          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Twitter</a>
            <a href="#" className="hover:text-white">LinkedIn</a>
            <a href="#" className="hover:text-white">Discord</a>
          </div>
        </div>

      </div>
    </footer>
  )
}
