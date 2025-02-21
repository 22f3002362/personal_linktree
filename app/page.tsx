"use client";

import { motion } from "framer-motion";
import {
  Github,
  Twitter,
  Instagram,
  Linkedin,
  ExternalLink,
  Phone,
} from "lucide-react";
import Image from "next/image";
import myimg from "../public/image/me.jpg";
import { ThemeToggle } from "@/components/theme-toggle";

const links = [
  {
    title: "Portfolio",
    url: "https://akarsh-gupta.vercel.app",
    icon: <ExternalLink className="w-5 h-5" />,
  },
  {
    title: "GitHub",
    url: "https://github.com/22f3002362",
    icon: <Github className="w-5 h-5" />,
  },
  {
    title: "Twitter",
    url: "https://twitter.com/_akarshgupta",
    icon: <Twitter className="w-5 h-5" />,
  },
  {
    title: "Instagram",
    url: "https://instagram.com/the_akarshgupta",
    icon: <Instagram className="w-5 h-5" />,
  },
  {
    title: "LinkedIn",
    url: "https://linkedin.com/in/theakarshgupta",
    icon: <Linkedin className="w-5 h-5" />,
  },
  {
    title: "Contact",
    url: "/vcard/akarsh_gupta.vcf",
    icon: <Phone className="w-5 h-5" />,
  },
];

const floatingElements = [
  { id: 1, size: 200, x: 10, y: 20, duration: 20 },
  { id: 2, size: 150, x: 80, y: 15, duration: 25 },
  { id: 3, size: 180, x: 20, y: 80, duration: 30 },
  { id: 4, size: 120, x: 70, y: 60, duration: 22 },
  { id: 5, size: 160, x: 40, y: 40, duration: 28 },
  { id: 6, size: 140, x: 85, y: 85, duration: 24 },
  { id: 7, size: 170, x: 5, y: 60, duration: 26 },
  { id: 8, size: 130, x: 60, y: 10, duration: 23 },
  { id: 9, size: 190, x: 30, y: 70, duration: 27 },
  { id: 10, size: 110, x: 75, y: 30, duration: 21 },
];

export default function Home() {
  return (
    <main
      className="min-h-screen w-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white via-gray-50 to-gray-100 
                     dark:from-gray-900 dark:via-gray-900 dark:to-black overflow-hidden relative transition-colors duration-300"
    >
      {/* Enhanced background overlay with more pronounced effect in light mode */}
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,rgba(0,0,0,0.05),transparent)] 
                      dark:bg-[radial-gradient(circle_500px_at_50%_200px,rgba(255,255,255,0.05),transparent)]"
      ></div>

      <ThemeToggle />

      {/* Floating 3D Elements with enhanced light mode appearance */}
      {floatingElements.map((element) => (
        <motion.div
          key={element.id}
          className="absolute rounded-full bg-gradient-to-br from-white/60 to-white/20 dark:from-white/10 dark:to-white/0 
                     backdrop-blur-3xl shadow-[0_8px_32px_rgba(0,0,0,0.06)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.25)]"
          initial={{
            width: element.size,
            height: element.size,
            left: `${element.x}%`,
            top: `${element.y}%`,
          }}
          animate={{
            y: [0, -50, 0],
            x: [0, 30, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: element.duration,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      <div className="container mx-auto px-4 py-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center mb-12"
        >
          {/* Enhanced profile container with matching effects for both modes */}
          <div
            className="w-32 h-32 rounded-full overflow-hidden mb-6 
                         ring-4 ring-black/5 dark:ring-white/5 
                         shadow-[0_8px_32px_rgba(0,0,0,0.15)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.25)]
                         bg-gradient-to-br from-white/80 to-white/50 dark:from-white/10 dark:to-white/5 
                         backdrop-blur-xl p-1"
          >
            <Image
              src={myimg}
              alt="Profile"
              width={128}
              height={128}
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-3 tracking-tight">
            Akarsh Gupta
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-center max-w-md text-lg">
            Frontend Developer & Graphic Designer
          </p>
        </motion.div>
        <div className="space-y-4 max-w-md mx-auto">
          {links.map((link, index) => (
            <motion.a
              key={link.title}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="block w-full group"
            >
              <motion.div
                whileHover={{
                  scale: 1.02,
                  y: -2,
                  transition: {
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                  },
                }}
                whileTap={{
                  scale: 0.98,
                  transition: {
                    type: "spring",
                    stiffness: 500,
                    damping: 20,
                  },
                }}
                className="p-4 rounded-2xl relative overflow-hidden transition-all duration-200 ease-out"
              >
                {/* Enhanced glass background with matching effects for both modes */}
                <div
                  className="absolute inset-0 bg-gradient-to-br from-white/80 to-white/50 
                               dark:from-white/10 dark:to-white/5 backdrop-blur-xl rounded-2xl 
                               border border-white/40 dark:border-white/10 
                               group-hover:border-black/20 dark:group-hover:border-white/20
                               shadow-[0_8px_32px_rgba(0,0,0,0.08)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.25)]
                               transition-all duration-200 ease-out"
                ></div>

                {/* Enhanced shine effect for both modes */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-x-0 h-px top-0 bg-gradient-to-r from-transparent via-black/20 dark:via-white/10 to-transparent"></div>
                  <div className="absolute inset-x-0 h-px bottom-0 bg-gradient-to-r from-transparent via-black/10 dark:via-white/5 to-transparent"></div>
                  <div className="absolute inset-y-0 w-px left-0 bg-gradient-to-b from-transparent via-black/20 dark:via-white/10 to-transparent"></div>
                  <div className="absolute inset-y-0 w-px right-0 bg-gradient-to-b from-transparent via-black/10 dark:via-white/5 to-transparent"></div>
                </div>

                {/* Enhanced content with better contrast in both modes */}
                <div className="relative flex items-center justify-between">
                  <span className="text-gray-800 dark:text-white font-medium text-lg">
                    {link.title}
                  </span>
                  <div
                    className="text-gray-400 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-white 
                                transition-colors duration-200"
                  >
                    {link.icon}
                  </div>
                </div>
              </motion.div>
            </motion.a>
          ))}
        </div>
        <div className="absolute bottom-4 w-full left-0 text-center text-sm text-gray-500 dark:text-gray-400">
          Made with ♥️ by Akarsh Gupta
        </div>
      </div>
    </main>
  );
}
