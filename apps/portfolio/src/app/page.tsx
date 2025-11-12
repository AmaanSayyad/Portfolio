import React from 'react';

import {
  AboutAchievements,
  Blogs,
  City,
  Contact,
  Footer,
  GrantsSpeaking,
  Hackathons,
  Header,
  Interests,
  Projects,
  Resume,
  ScrollToTop,
  ExperienceSkills,
} from '~/components';

const Home = () => {
  return (
    <>
      <Header />
      <City />
      <AboutAchievements />
      <Interests />
      <ExperienceSkills />
      <Projects />
      <Hackathons />
      <GrantsSpeaking />
      <Blogs />
      <Resume />
      <Contact />
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default Home;
