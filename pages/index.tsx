import { About, FeaturedProject, Footer, Navigation, SelectedProject } from "@/components";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});
export default function Home() {

  return (
    <main
      className={`bg-white box-border ${poppins.className} mx-auto max-w-[80rem]`}
    >
      <Navigation />
      <About />
      <FeaturedProject />
      <SelectedProject />
      <Footer />
    </main>
  );
}
