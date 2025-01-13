export const servicesContainerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };
  
export const servicesItemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

export const fadeInLeft = {
    hidden: { opacity: 0, x: -50},
    visible: { opacity: 1, x: 0, transition: { duration: 2 } },
  };

export const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 2 } },
  };