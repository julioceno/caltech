import ClipCard from "./components/ClipCard";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <div className="container">
      <Hero />
      <div className="flex gap-7">
        <ClipCard>
          oioi<br />
          oioi<br />
          oioi<br />
          oioi<br />
        </ClipCard>
        <ClipCard>
          oioi<br />
          oioi<br />
          oioi<br />
          oioi<br />
        </ClipCard>
        <ClipCard>
          oioi<br />
          oioi<br />
          oioi<br />
          oioi<br />
        </ClipCard>
      </div>
    </div>
  );
}
