import React from 'react';

import {
  AboutAchievements,
  Blogs,
  City,
  Footer,
  GrantsSpeaking,
  Hackathons,
  Header,
  Interests,
  Projects,
  ResumeContact,
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
      <ResumeContact />
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default Home;
