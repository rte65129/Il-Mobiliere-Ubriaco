import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Feature from "@/components/Feature"
import Card from "@/components/Collection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header></Header>
      <main>
        <Hero/>
        <Feature/>
        <Card/>
      </main>
      <Footer/>
    </>
  );
}