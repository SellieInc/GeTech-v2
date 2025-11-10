import { CheckCircle2, Zap, Shield, Sparkles } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized performance with modern frameworks and best practices"
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Production-ready security and maintainable code"
    },
    {
      icon: Sparkles,
      title: "Modern Design",
      description: "Clean, responsive interfaces that focus on usability"
    }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-background to-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Building exceptional web experiences
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              I'm a freelance developer specializing in Angular and React. I design and build
              fast, accessible, and maintainable websites and progressive web apps tailored to
              each client's goals.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-glow animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-card border border-border rounded-2xl p-8 lg:p-12">
            <h3 className="text-2xl font-bold mb-6">What I Offer</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                "Personalized, direct communication",
                "Hands-on implementation using Angular or React",
                "Performance-first development",
                "Responsive and accessible design",
                "Clean, maintainable code",
                "Flexible timelines and ongoing support"
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
