import { useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";
import { Calendar, Clock, User } from "lucide-react";
import PageHero from "../../components/common/PageHero";
import BlogCard from "../../components/cards/BlogCard";
import SectionTitle from "../../components/common/SectionTitle";
import Reveal from "../../components/common/Reveal";
import CTA from "../../components/sections/CTA";
import { blogPosts } from "../../data/blogPosts";

const BlogDetail = () => {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  useEffect(() => {
    if (post) document.title = `${post.title} | Codefloor Blog`;
  }, [post]);

  if (!post) return <Navigate to="/blog" replace />;

  const formattedDate = new Date(post.date).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const related = blogPosts.filter((p) => p.slug !== slug && p.category === post.category).slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow={post.category}
        title={post.title}
        breadcrumbItems={[{ label: "Blog", path: "/blog" }, { label: post.title }]}
      />

      <article className="section-pad !pt-14">
        <div className="container-app max-w-3xl">
          <Reveal className="flex flex-wrap items-center gap-5 text-sm text-muted font-mono mb-10 pb-8 border-b border-line">
            <span className="flex items-center gap-1.5"><User size={14} /> {post.author}</span>
            <span className="flex items-center gap-1.5"><Calendar size={14} /> {formattedDate}</span>
            <span className="flex items-center gap-1.5"><Clock size={14} /> {post.readTime}</span>
          </Reveal>

          <div className="flex flex-col gap-5">
            {post.content.map((para, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <p className="text-ink/85 leading-relaxed text-[15px] sm:text-base">{para}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </article>

      {related.length > 0 && (
        <section className="section-pad bg-secondary/40 border-y border-line">
          <div className="container-app">
            <SectionTitle eyebrow="Keep Reading" title="More on this topic" />
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mt-12">
              {related.map((p, i) => (
                <BlogCard key={p.slug} post={p} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CTA />
    </>
  );
};

export default BlogDetail;
