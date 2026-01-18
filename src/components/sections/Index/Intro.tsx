import { Typography } from "@/components/ui/Typography";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Intro = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "center center"],
  });

  return (
    <section ref={sectionRef} className="overflow-hidden" id="who-we-are">
      <div className="py-48 text-center px-16">
        <div className="space-y-3">
          {introTexts.map((text, index) => (
            <IntroText key={index} index={index} scrollYProgress={scrollYProgress}>
              {text}
            </IntroText>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Intro

function IntroText({
  children,
  index,
  scrollYProgress,
}: {
  children: React.ReactNode;
  index: number;
  scrollYProgress: any;
}) {
  const startX = index % 2 === 0 ? -600 : 600;
  const x = useTransform(scrollYProgress, [0, 1], [startX, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  return (
    <motion.div style={{ x, opacity }}>
      <Typography variant="heading" size="md">
        {children}
      </Typography>
    </motion.div>
  );
}

const introTexts = [
  <>ARCHITECTING <Typography as="span" variant="heading" size="md" font="lg" className="text-primary">E</Typography>XCELLENCE</>,
  "Defining Dubai's Skyline Since 1984",
  "Innovative Engineering & Sustainable Design",
  "Built on Trust and Proven Expertise",
];
