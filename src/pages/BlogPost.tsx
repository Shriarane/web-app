import { useParams, Link, Navigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar, Clock, User, ArrowLeft, Share2, Linkedin, Twitter } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";
import { blogExplainerImages } from "@/data/blogExplainerImages";

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);
  const explainerImage = slug ? blogExplainerImages[slug] : undefined;

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const relatedPosts = blogPosts.filter(p => p.slug !== slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Article Header */}
      <section className="pt-32 pb-8 px-6">
        <div className="max-w-3xl mx-auto">
          <Link 
            to="/blog" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>
          
          <div className="flex items-center gap-3 mb-6">
            <span className="text-sm font-medium px-3 py-1 rounded-full bg-accent/10 text-accent">
              {post.category}
            </span>
            <span className="text-sm text-muted-foreground flex items-center gap-1">
              <Clock className="w-4 h-4" /> {post.readTime}
            </span>
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
            {post.title}
          </h1>
          
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-accent/60 flex items-center justify-center">
                <span className="text-lg font-bold text-accent-foreground">
                  {post.author.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <div>
                <p className="font-medium text-foreground">{post.author}</p>
                <p className="text-sm text-muted-foreground flex items-center gap-2">
                  <Calendar className="w-4 h-4" /> {post.date}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground mr-2">Share:</span>
              <button className="p-2 rounded-full bg-muted hover:bg-accent/10 transition-colors">
                <Linkedin className="w-4 h-4 text-muted-foreground hover:text-accent" />
              </button>
              <button className="p-2 rounded-full bg-muted hover:bg-accent/10 transition-colors">
                <Twitter className="w-4 h-4 text-muted-foreground hover:text-accent" />
              </button>
              <button className="p-2 rounded-full bg-muted hover:bg-accent/10 transition-colors">
                <Share2 className="w-4 h-4 text-muted-foreground hover:text-accent" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-8 px-6">
        <div className="max-w-4xl mx-auto">
          {post.image ? (
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full aspect-video object-cover rounded-2xl"
            />
          ) : (
            <div className="aspect-video bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl flex items-center justify-center">
              <span className="text-8xl">{post.emoji}</span>
            </div>
          )}
        </div>
      </section>

      {/* Article Content */}
      <section className="py-8 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-lg max-w-none">
            {post.content.map((block, index) => {
              // Insert explainer image after the second heading
              const headingCount = post.content.slice(0, index).filter(b => b.type === 'heading').length;
              const shouldShowExplainer = block.type === 'heading' && headingCount === 2 && explainerImage;
              
              return (
                <div key={index}>
                  {shouldShowExplainer && (
                    <div className="my-10">
                      <img 
                        src={explainerImage}
                        alt={`${post.title} - Visual Explainer`}
                        className="w-full rounded-xl shadow-lg"
                      />
                    </div>
                  )}
                  {block.type === 'paragraph' && (
                    <p className="text-foreground/90 leading-relaxed mb-6">{block.text}</p>
                  )}
                  {block.type === 'heading' && (
                    <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">{block.text}</h2>
                  )}
                  {block.type === 'subheading' && (
                    <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">{block.text}</h3>
                  )}
                  {block.type === 'list' && (
                    <ul className="list-disc pl-6 mb-6 space-y-2">
                      {block.items?.map((item, i) => (
                        <li key={i} className="text-foreground/90">{item}</li>
                      ))}
                    </ul>
                  )}
                  {block.type === 'quote' && (
                    <blockquote className="border-l-4 border-accent pl-6 my-8 italic text-muted-foreground">
                      {block.text}
                    </blockquote>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Author Bio */}
      <section className="py-8 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="bg-muted/30 rounded-2xl p-8">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent to-accent/60 flex items-center justify-center flex-shrink-0">
                <span className="text-xl font-bold text-accent-foreground">
                  {post.author.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <div>
                <p className="font-semibold text-foreground mb-1">Written by {post.author}</p>
                <p className="text-sm text-muted-foreground mb-3">{post.authorBio}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-8">Related Articles</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {relatedPosts.map((relatedPost) => (
              <Link
                key={relatedPost.slug}
                to={`/blog/${relatedPost.slug}`}
                className="group bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-all"
              >
                {relatedPost.image ? (
                  <img 
                    src={relatedPost.image} 
                    alt={relatedPost.title}
                    className="w-full aspect-video object-cover"
                  />
                ) : (
                  <div className="aspect-video bg-gradient-to-br from-accent/10 to-muted/30 flex items-center justify-center">
                    <span className="text-4xl">{relatedPost.emoji}</span>
                  </div>
                )}
                <div className="p-5">
                  <span className="text-xs font-medium px-2 py-1 rounded-full bg-accent/10 text-accent">
                    {relatedPost.category}
                  </span>
                  <h3 className="text-base font-semibold text-foreground mt-3 group-hover:text-accent transition-colors line-clamp-2">
                    {relatedPost.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPost;
