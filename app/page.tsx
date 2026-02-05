import NotchCard from "./components/NotchCard";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <div className="container">
      <Hero />
      <div className="flex gap-7">
        <NotchCard>
          oioi<br />
          oioi<br />
          oioi<br />
          oioi<br />
        </NotchCard>
        <NotchCard>
          oioi<br />
          oioi<br />
          oioi<br />
          oioi<br />
        </NotchCard>
        <NotchCard>
          oioi<br />
          oioi<br />
          oioi<br />
          oioi<br />
        </NotchCard>
      </div>
    </div>
  );
}
