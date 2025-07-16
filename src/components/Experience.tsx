import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Briefcase, Calendar, MapPin } from "lucide-react";

export function Experience() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const experiences = [
    {
      title: "Senior Web Developer",
      company: "Netcompany",
      logo: undefined,
      location: "Remote (Warsaw, Poland)",
      period: "March 2024 - Present",
      type: "Full-time",
      achievements: [
        "Leading front-end architecture for government and enterprise web platforms using Next.js, React, and GraphQL.",
        "Designed a modular form workflow system now used across four public sector platforms.",
        "Coordinated Agile sprints across 3 globally distributed teams.",
        "Mentored junior developers and led React performance workshops."
      ]
    },
    {
      title: "React Native Engineer",
      company: "Monstarlab",
      logo: undefined,
      location: "Copenhagen, Denmark",
      period: "December 2022 - February 2024",
      type: "Full-time",
      achievements: [
        "Delivered cross-platform mobile apps for fintech and retail clients.",
        "Integrated Stripe payments and Firebase Auth in secure, production-ready apps.",
        "Delivered MVPs under tight deadlines (e.g., 10-week launch for a major fashion brand).",
        "Built a reusable component library that cut dev time by 25%."
      ]
    },
    {
      title: "Full Stack Developer",
      company: "Tactile Games",
      logo: undefined,
      location: "Copenhagen, Denmark",
      period: "September 2021 – November 2022",
      type: "Full-time",
      achievements: [
        "Developed internal tools for mobile game analytic using React Native and Node.js.",
        "Reduced crash rates by 60% for a mobile game with over 10M downloads.",
        "Implemented CI/CD pipelines with GitHub Actions, boosting deployment speed by 30%.",
        "Conducted regular code reviews and mentored two junior developers."
      ]
    },
    {
      title: "Frontend Developer",
      company: "Trifork A/S",
      logo: undefined,
      location: "Aarhus, Denmark",
      period: "June 2019 – August 2021",
      type: "Full-time",
      achievements: [
        "Built responsive web apps for healthcare and logistics clients using React, Redux, and TypeScript.",
        "Improved task completion rates by 35% through UX collaboration.",
        "Integrated real-time dashboards using Socket.IO and REST API.",
        "Led migration from AngularJS to React across 3 enterprise projects."
      ]
    }
  ];

  return (
    <section id="experience" ref={ref} className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Work <span className="bg-gradient-primary bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            My professional journey and the impactful projects I've contributed to.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-px h-full w-0.5 bg-gradient-primary"></div>

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg z-10"></div>

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}>
                  <Card className="hover:shadow-card transition-all duration-300 hover:scale-105 border-primary/10">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-start space-x-3">
                          <Avatar className="w-12 h-12">
                            <AvatarImage src={exp.logo} />
                            <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                              {exp.company.split(' ').map(word => word[0]).join('').slice(0, 2)}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <h3 className="text-xl font-semibold text-foreground mb-1">
                              {exp.title}
                            </h3>
                            <p className="text-primary font-medium mb-2">{exp.company}</p>
                          </div>
                        </div>
                        <div className="bg-primary/10 p-2 rounded-lg">
                          <Briefcase className="w-5 h-5 text-primary" />
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {exp.period}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {exp.location}
                        </div>
                        <span className="bg-accent/10 text-accent px-2 py-1 rounded-full">
                          {exp.type}
                        </span>
                      </div>

                      <p className="text-muted-foreground mb-4">{exp.description}</p>

                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Key Achievements:</h4>
                        <ul className="space-y-1">
                          {exp.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="text-sm text-muted-foreground flex items-start">
                              <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-2 flex-shrink-0"></span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}