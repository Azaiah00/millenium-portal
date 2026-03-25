"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Lock } from "lucide-react";

export default function Navbar() {
  const [isShaking, setIsShaking] = useState(false);

  const handleLockClick = () => {
    setIsShaking(true);
    setTimeout(() => setIsShaking(false), 500);
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gunmetal bg-obsidian/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex-shrink-0 flex items-center h-full py-2">
            <Image 
              src="/millenium-logo.png" 
              alt="Millenium Security Logo" 
              width={120} 
              height={40} 
              className="object-contain h-full w-auto"
              priority
            />
          </Link>
          
          <div>
            <motion.button
              onClick={handleLockClick}
              animate={isShaking ? { x: [-5, 5, -5, 5, 0] } : {}}
              transition={{ duration: 0.4 }}
              className="flex items-center gap-2 px-5 py-2.5 bg-gunmetal hover:bg-gunmetal/80 text-metallic text-sm font-semibold rounded-md border border-gunmetal transition-colors focus:outline-none focus:ring-2 focus:ring-metallic focus:ring-offset-2 focus:ring-offset-obsidian"
            >
              <span>Client Terminal</span>
              <Lock className="w-4 h-4" />
            </motion.button>
          </div>
        </div>
      </div>
    </nav>
  );
}
