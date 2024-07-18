import Link from "next/link";
import { IoIosArrowRoundBack } from "react-icons/io";

export default function AboutMe() {


  return (
    <main className="md:h-[100vh] w-full flex flex-col  gap-y-7 md:gap-y-20 justify-center items-center text-neutral-50 mx-auto py-10 md:py-0">
     <h2 className="text-4xl font-semibold">About me</h2>

   <div className="flex flex-col text-center justify-center items-center w-11/12 md:w-7/12 leading-loose">
   <p>Hello, I&#39;m Princess Enuma, a front-end developer with a passion for building beautiful and functional user interfaces,
   I&#39;m interested in user experience, accessibility and web animations.
   I&#39;ve always been fascinated by the way technology can shape user experiences. That&#39;s why I love turning designs into interactive, user-friendly websites.
   I&#39;m always eager to learn new technologies and contribute to innovative projects.
   Witnessing my code come to life as a user-friendly website is incredibly rewarding. 
   When I&#39;m not coding, you&#39;ll likely find me lost in the world of music, exploring new genres, or unwinding with a good anime series.
   </p> 
   </div>

   <div>
    <Link href="/" className="flex flex-row justify-center items-center gap-x-1"> <IoIosArrowRoundBack />Go back </Link>
   </div>
    </main>
  );
}