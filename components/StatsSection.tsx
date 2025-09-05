import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Card } from '../components/ui/card';
import { Trophy, Eye, Users, Coffee } from 'lucide-react';

const StatsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  const [projectsCount, setProjectsCount] = useState(0);
  const [viewsCount, setViewsCount] = useState(0);
  const [clientsCount, setClientsCount] = useState(0);
  const [coffeeCount, setCoffeeCount] = useState(0);

  const stats = [
    {
      icon: Trophy,
      label: 'Projects Completed',
      value: 47,
      setter: setProjectsCount,
      current: projectsCount,
      suffix: '+',
    },
    {
      icon: Eye,
      label: 'Site Views',
      value: 12500,
      setter: setViewsCount,
      current: viewsCount,
      suffix: '+',
    },
    {
      icon: Users,
      label: 'Happy Clients',
      value: 28,
      setter: setClientsCount,
      current: clientsCount,
      suffix: '+',
    },
    {
      icon: Coffee,
      label: 'Cups of Coffee',
      value: 892,
      setter: setCoffeeCount,
      current: coffeeCount,
      suffix: '+',
    },
  ];

  useEffect(() => {
    if (isInView) {
      stats.forEach((stat, index) => {
        const duration = 2000; // 2 seconds
        const startTime = Date.now() + index * 200; // Stagger animations
        
        const animate = () => {
          const elapsed = Date.now() - startTime;
          const progress = Math.min(elapsed / duration, 1);
          
          // Easing function for smooth animation
          const easeOut = 1 - Math.pow(1 - progress, 3);
          const currentValue = Math.floor(easeOut * stat.value);
          
          stat.setter(currentValue);
          
          if (progress < 1) {
            requestAnimationFrame(animate);
          }
        };
        
        setTimeout(() => animate(), index * 200);
      });
    }
  }, [isInView]);

  return (
    <section ref={ref} className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            By the <span className="text-gradient">Numbers</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A glimpse into my journey as a developer and the impact of my work
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ y: 50, opacity: 0, scale: 0.9 }}
                whileInView={{ y: 0, opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group"
              >
                <Card className="p-8 text-center border-0 shadow-md hover:shadow-xl transition-all duration-500 bg-card/50 backdrop-blur-sm group-hover:shadow-glow">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6 group-hover:bg-primary/20 transition-smooth"
                  >
                    <Icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </motion.div>
                  
                  <motion.div 
                    className="text-4xl md:text-5xl font-bold text-gradient mb-2"
                    animate={{ scale: isInView ? [1, 1.05, 1] : 1 }}
                    transition={{ duration: 0.3, delay: index * 0.2 + 1 }}
                  >
                    {stat.current.toLocaleString()}{stat.suffix}
                  </motion.div>
                  
                  <p className="text-muted-foreground font-medium">{stat.label}</p>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;