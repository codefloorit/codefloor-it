import { Link } from "react-router-dom";
import { ArrowLeft, Compass } from "lucide-react";
import Reveal from "../components/common/Reveal";

const NotFound = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-hero-glow opacity-70 pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-25 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,black,transparent)] pointer-events-none" />
      <div className="container-app relative text-center">
        <Reveal direction="zoom">
          <span className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/10 text-accent mb-6">
            <Compass size={28} />
          </span>
          <p className="font-mono text-7xl sm:text-8xl font-bold text-gradient mb-4">404</p>
          <h1 className="text-2xl sm:text-3xl font-semibold text-ink mb-3">
            This page took a wrong turn.
          </h1>
          <p className="text-muted max-w-md mx-auto mb-8">
            The page you're looking for doesn't exist or may have moved. Let's get you back on track.
          </p>
          <Link to="/" className="btn-primary">
            <ArrowLeft size={16} /> Back to Home
          </Link>
        </Reveal>
      </div>
    </section>
  );
};

export default NotFound;
