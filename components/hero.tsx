import React from 'react';
import Image from 'next/image';
import { FaFacebookF, FaInstagram, FaWhatsapp, FaLinkedinIn } from 'react-icons/fa';

const HeroSection: React.FC = () => {
  return (
    <section className="bg-[#0a0a0a] text-white min-h-screen px-8 py-12 md:px-24">
      {/* Container untuk Hero Content */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Kolom Kiri: Teks */}
        <div className="space-y-6">
          <h4 className="text-xl font-medium">Hello Buds</h4>
          <h1 className="text-5xl md:text-6xl font-bold">
            I am <span className="text-[#7d5fff]">Dimas Ardiansyah</span>
          </h1>
          <p className="text-gray-400 text-sm tracking-widest uppercase">
            UI / UX Design Enthusiast
          </p>
          
          <hr className="w-20 border-gray-600" />
          
          <p className="text-gray-400 leading-relaxed max-w-lg">
            I'm a person who has a keen interest in the design layout. I think presenting 
            an attractive design is a matter of concern in developing a branding of products...
          </p>

          <div className="flex gap-4 pt-4">
            <button className="bg-[#7d5fff] hover:bg-[#6a4eee] px-6 py-3 rounded-md flex items-center gap-2 transition">
              <span>Download CV</span>
            </button>
            <button className="border border-gray-600 hover:bg-gray-800 px-8 py-3 rounded-md transition">
              More
            </button>
          </div>
        </div>

        {/* Kolom Kanan: Gambar & Socials */}
        <div className="relative flex flex-col items-center md:items-end">
          <div className="relative w-80 h-96">
            {/* Dekorasi Background Ungu */}
            <div className="absolute inset-0 bg-[#7d5fff] rounded-3xl rotate-6 opacity-20 -z-10"></div>
            {/* Placeholder untuk foto profil */}
            <div className="w-full h-full bg-gray-800 rounded-2xl overflow-hidden relative">
               <Image 
                src="/profile-placeholder.jpg" 
                alt="Profile" 
                fill 
                className="object-cover"
              />
            </div>
          </div>

          {/* Social Media Links */}
          <div className="flex items-center gap-4 mt-8">
            <span className="text-sm text-gray-400">Find Me On</span>
            {[FaFacebookF, FaInstagram, FaWhatsapp, FaLinkedinIn].map((Icon, idx) => (
              <a key={idx} href="#" className="p-2 bg-gray-900 rounded-full hover:bg-[#7d5fff] transition">
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bagian Bawah: What Do I Offer */}
      <div className="mt-32 text-center">
        <p className="text-gray-500 text-sm mb-4">What Do I Offer</p>
        <h2 className="text-3xl font-bold max-w-2xl mx-auto">
          Creates Professional Design That's Oriented Towards Client Needs
        </h2>
        
        {/* Garis Dekorasi */}
        <div className="w-32 h-1 bg-[#7d5fff] mx-auto mt-8 rounded-full"></div>

        {/* Card Grid Mini (Preview) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-5xl mx-auto">
           {/* Contoh Card */}
           <div className="bg-[#151515] p-8 rounded-xl border border-gray-800 hover:border-[#7d5fff] transition cursor-pointer">
              <div className="text-[#7d5fff] text-4xl mb-4">📱</div>
              <h3 className="font-semibold">Mobile App Design</h3>
           </div>
           {/* Tambahkan card lainnya di sini */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;