import { Header } from "@/sections/Header";
import { CourseLanding } from "@/sections/CourseLanding"
import { HeroSection } from "@/sections/Hero";
export default function Home() {
    return (
      <div>
        <Header/>
        <HeroSection/>
        <CourseLanding/>
      </div>
    )
  }