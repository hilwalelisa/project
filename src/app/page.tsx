"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Play } from "lucide-react";
import Image from 'next/image';
import React, { useState } from "react";



// Data for live monitoring cards
const liveMonitoringData = [
  {
    id: 1,
    location: "Papua - Cenderawasih",
    status: "Sedang Live",
    videoUrl: "https://youtu.be/YQCo9rWFgAY?si=K-IUSt2KA8ar97yW" // Link video YouTube
  },
  {
    id: 2,
    location: "Bali - Jalak Bali",
    status: "Sedang Live",
    videoUrl: "https://youtu.be/YQCo9rWFgAY?si=K-IUSt2KA8ar97yW" // Link video YouTube
  },
  {
    id: 3,
    location: "Papua - Cenderawasih",
    status: "Sedang Live",
    videoUrl: "https://youtu.be/YQCo9rWFgAY?si=K-IUSt2KA8ar97yW", // Link video YouTube
  },
  {
    id: 4,
    location: "Bali - Jalak Bali",
    status: "Sedang Live",
    videoUrl: "https://youtu.be/YQCo9rWFgAY?si=K-IUSt2KA8ar97yW", // Link video YouTube
  },
];

// Data for community members
const communityMembersData = [
  {
    id: 1,
    name: "John Doe",
    activity: "Aktivitas terbaru: Mengikuti patroli hutan di Papua",
    avatar: "JohnDoe.png",
  },
  {
    id: 2,
    name: "Jane Smith",
    activity:
      "Aktivitas terbaru: Membantu mendirikan stasiun pengamatan burung",
    avatar: "JaneSmith.png",
  },
];

// Data for news items
const newsItemsData = [
  {
    id: 1,
    title: "Patroli Hutan Terbaru",
    description:
      "Tim kami baru saja menyelesaikan patroli hutan terakhir di Papua.",
    image: "/Property1.png",
  },
  {
    id: 2,
    title: "Workshop Komunitas",
    description:
      "Kami akan mengadakan workshop konservasi burung untuk masyarakat lokal.",
    image: "/Property2.png",

  },
  {
    id: 3,
    title: "Komunitas Burung Se-Kabupaten",
    description: "Komunitas baru saja terbentuk di kabupaten kami!",
    image: "/Property3.png",
  },
  {
    id: 4,
    title: "Pembagian Bibit Tanaman",
    description:
      "Komunitas akan membagikan bibit tanaman untuk mendukung habitat burung.",
    image: "/Property4.png",
  },
];

// Navigation items
const navItems = [
  { name: "Beranda", href: "#" },
  { name: "Lindungi Burung", href: "#" },
  { name: "Donasi", href: "#" },
  { name: "Pemantauan Live", href: "#" },
];

const HomeDesktop = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  // Fungsi untuk mengubah status pemutaran video
  const handlePlay = (videoUrl: string) => {
    setIsPlaying(true);
    // Mengecek apakah URL sudah mengandung parameter query
    if (videoUrl.includes('?')) {
      return videoUrl + "&autoplay=1"; // Menambahkan autoplay jika URL sudah ada query
    } else {
      return videoUrl + "?autoplay=1"; // Menambahkan autoplay jika URL belum ada query
    }
  };


  return (
    <div className="bg-neutral-50 flex flex-row justify-center w-full">
      <div className="bg-konservasi-burung-1-base-base-white w-full relative">
        {/* Hero Section */}
        <section className="relative w-full h-[487px] mt-[66px]">
          <div className="absolute w-full h-full top-0 left-0 bg-[url(/Property3.png)] bg-cover bg-center">
            <div className="h-full [background:linear-gradient(180deg,rgba(250,250,250,0)_50%,rgba(250,250,250,0.25)_55%,rgba(250,250,250,0.5)_65%,rgba(250,250,250,0.75)_85%,rgba(250,250,250,1)_100%)]" />
          </div>

          <div className="absolute w-full max-w-[1307px] top-80 left-0">
            <h1 className="text-4xl font-bold text-konservasi-burung-1-base-base-black">
              Selamat Datang di Konservasi Burung
            </h1>
          </div>

          <div className="absolute w-full max-w-[1361px] top-[413px] left-0">
            <p className="text-lg text-konservasi-burung-1-base-base-black">
              Kami berkomitmen untuk melindungi burung yang terancam punah dan
              habitatnya. Bergabunglah dengan kami dalam upaya pelestarian ini.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <div className="w-full">
          {/* Live Monitoring Section */}
          <section className="px-[var(--konservasi-burung-1-spacing-xl)] py-8">
            <h2 className="text-2xl font-semibold mb-6 text-konservasi-burung-1-base-base-black">
              Pemantauan Populer
            </h2>
            
            <div className="flex justify-between items-start overflow-x-auto pb-4">
            {liveMonitoringData.map((item) => (
                <Card
                  key={item.id}
                  className="w-[395px] mr-4 border-none shadow-none"
                >
                  <CardContent className="p-4">
                    <div className="relative h-[188px] rounded-[var(--konservasi-burung-1-spacing-s)] overflow-hidden mb-3">
                      <div className="w-full h-full relative">
                        {/* Menampilkan video YouTube dengan iframe */}
                        <iframe
                          width="100%"
                          height="100%"
                          src={item.videoUrl}
                          title="YouTube video player"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="absolute top-0 left-0 w-full h-full"
                        ></iframe>
                        
                        {/* Kontrol tombol play */}
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center">
                          <button
                            className="bg-[#ffffff4d] p-3 rounded-full text-white flex justify-center items-center"
                            onClick={() => window.open(handlePlay(item.videoUrl), "_blank")}
                          >
                            <Play className="w-6 h-6" />
                          </button>
                        </div>

                      </div>
                    </div>

                    <div className="flex flex-col gap-0.5">
                      <h3 className="font-konservasi-burung-1-desktop-body-feature-accent text-konservasi-burung-1-base-base-black text-[length:var(--konservasi-burung-1-desktop-body-feature-accent-font-size)]">
                        {item.location}
                      </h3>
                      <div className="flex items-center gap-[var(--konservasi-burung-1-spacing-xxs)]">
                        <div className="w-[5px] h-[5px] bg-konservasi-burung-1-error-error rounded-full"></div>
                        <span className="font-konservasi-burung-1-desktop-body-caption-regular text-konservasi-burung-1-neutrals-neutrals400 text-[length:var(--konservasi-burung-1-desktop-body-caption-regular-font-size)]">
                          {item.status}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
              ))}
              
            </div>
          </section>

          {/* Two Column Layout */}
          <div className="flex flex-wrap">
            {/* News Section */}
            <section className="w-full md:w-1/2 px-[var(--konservasi-burung-1-spacing-xl)] py-8">
            <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-semibold text-konservasi-burung-1-base-base-black">
                    Berita Terbaru
                  </h2>
                  <Button
                    variant="link"
                    className="text-konservasi-burung-1-base-base-black"
                  >
                    See All
                  </Button>
                </div>
              
              <div className="space-y-4">
                {newsItemsData.map((item) => (
                  <Card key={item.id} className="border-none shadow-none">
                    <CardContent className="p-0">
                      <div className="flex gap-4 p-2">
                        <div className="w-[100px] h-[80px] rounded-md overflow-hidden bg-gray-200">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="font-konservasi-burung-1-desktop-body-feature-accent text-konservasi-burung-1-base-base-black text-[length:var(--konservasi-burung-1-desktop-body-feature-accent-font-size)] text-lg">
                            {item.title}
                          </h3>
                          <p className="font-konservasi-burung-1-desktop-body-highlight-standard text-konservasi-burung-1-neutrals-neutrals400 text-[length:var(--konservasi-burung-1-desktop-body-highlight-standard-font-size)]">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

            </section>

            {/* Community Section */}
            <section className="w-full md:w-1/2 px-[var(--konservasi-burung-1-spacing-xl)] py-8">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold text-konservasi-burung-1-base-base-black">
                  Komunitas
                </h2>
                <Button
                  variant="link"
                  className="text-konservasi-burung-1-base-base-black"
                >
                  See All
                </Button>
              </div>
              <div className="space-y-2">
                {communityMembersData.map((member) => (
                  <Card key={member.id} className="border-none shadow-none">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3">
                        <Avatar className="w-[79px] h-[79px]">
                          <AvatarImage
                            src=""
                            alt={member.name}
                            style={{
                              background: member.avatar,
                              backgroundSize: "100% 100%",
                            }}
                          />
                          <AvatarFallback>
                            {member.name.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col gap-0.5">
                          <h3 className="font-konservasi-burung-1-desktop-body-feature-accent text-konservasi-burung-1-base-base-black text-[length:var(--konservasi-burung-1-desktop-body-feature-accent-font-size)]">
                            {member.name}
                          </h3>
                          <p className="font-konservasi-burung-1-desktop-body-highlight-standard text-konservasi-burung-1-neutrals-neutrals400 text-[length:var(--konservasi-burung-1-desktop-body-highlight-standard-font-size)]">
                            {member.activity}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                ))}
              </div>

            </section>
          </div>
        </div>

        {/* Navigation Bar */}
        <header className="fixed w-full h-[67px] top-0 left-0 bg-[#ffffff52] border border-solid border-[#ffffff03] backdrop-blur-[9.6px] z-50">
          <div className="flex items-center justify-between px-[var(--konservasi-burung-1-spacing-xl)] py-[var(--konservasi-burung-1-spacing-sm)] h-full">
            {/* Logo */}
            <div className="flex items-center gap-1">
              
              <img src="/bird.png" alt="Bird Logo" className="w-[46px] h-[46px]" />

              <span className="font-bold text-konservasi-burung-1-base-base-black text-base [font-family:'Merriweather-Bold',Helvetica]">
                Aviary Bird
              </span>
            </div>

            {/* Navigation */}
            <NavigationMenu>
              <NavigationMenuList className="flex">
                {navItems.map((item) => (
                  <NavigationMenuItem key={item.name}>
                    <Button
                      variant="ghost"
                      className="px-[var(--konservasi-burung-1-spacing-base)] py-[var(--konservasi-burung-1-spacing-xxs)]"
                    >
                      <span className="font-bold text-konservasi-burung-1-base-base-black text-base [font-family:'Merriweather-Bold',Helvetica]">
                        {item.name}
                      </span>
                    </Button>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            {/* Action Buttons */}
            <div className="flex items-center gap-[var(--konservasi-burung-1-spacing-xs)]">
              <Button
                variant="outline"
                className="rounded-full border-konservasi-burung-1-base-base-black"
              >
                <span className="font-konservasi-burung-1-mobile-body-highlight-standard text-konservasi-burung-1-base-base-black">
                  Our Work
                </span>
              </Button>
              <Button
                variant="outline"
                className="rounded-full border-konservasi-burung-1-base-base-black"
              >
                <span className="font-konservasi-burung-1-mobile-body-highlight-standard text-konservasi-burung-1-base-base-black">
                  Get Involved
                </span>
              </Button>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
};

export default HomeDesktop;