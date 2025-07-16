import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Coffee, Lightbulb, Users } from "lucide-react";

export function About() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const values = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code that stands the test of time."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Always exploring new technologies and approaches to solve complex problems."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working effectively with teams to deliver exceptional user experiences."
    },
    {
      icon: Coffee,
      title: "Dedication",
      description: "Passionate about continuous learning and professional growth in web development."
    }
  ];

  return (
    <section id="about" ref={ref} className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            I'm a passionate Senior Web Developer with over 5 years of experience creating
            beautiful, functional, and user-friendly web applications.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-foreground">My Journey</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                My journey in web development began 5 years ago when I discovered my passion
                for creating digital experiences that make a difference. Since then, I've worked
                with various technologies and frameworks, always staying on the cutting edge.
              </p>
              <p>
                I specialize in React, TypeScript, and modern web technologies, with a strong
                focus on performance, accessibility, and user experience. My goal is to bridge
                the gap between design and functionality, creating applications that are both
                beautiful and highly functional.
              </p>
              <p>
                When I'm not coding, you can find me contributing to open-source projects,
                mentoring fellow developers, or exploring new technologies that can enhance
                my development workflow.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              >
                <Card className="h-full hover:shadow-card transition-all duration-300 hover:scale-105 border-primary/10">
                  <CardContent className="p-6 text-center">
                    <value.icon className="w-8 h-8 mx-auto mb-3 text-primary" />
                    <h4 className="font-semibold mb-2 text-foreground">{value.title}</h4>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-3xl font-bold text-primary mb-2">5+</h4>
              <p className="text-muted-foreground">Years Experience</p>
            </div>
            <div>
              <h4 className="text-3xl font-bold text-primary mb-2">50+</h4>
              <p className="text-muted-foreground">Projects Completed</p>
            </div>
            <div>
              <h4 className="text-3xl font-bold text-primary mb-2">20+</h4>
              <p className="text-muted-foreground">Happy Clients</p>
            </div>
            <div>
              <h4 className="text-3xl font-bold text-primary mb-2">100%</h4>
              <p className="text-muted-foreground">Commitment</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}