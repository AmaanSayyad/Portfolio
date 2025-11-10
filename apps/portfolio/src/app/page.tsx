import React from 'react';

import {
  AboutAchievements,
  Blogs,
  City,
  Contact,
  Footer,
  Grants,
  Hackathons,
  Header,
  Interests,
  Projects,
  Resume,
  ScrollToTop,
  Speaking,
  ExperienceSkills,
  VolunteerExperience,
} from '~/components';

const Home = () => {
  return (
    <>
      <Header />
      <City />
      <AboutAchievements />
      <Interests />
      <ExperienceSkills />
      <VolunteerExperience />
      <Projects />
      <Hackathons />
      <Grants />
      <Speaking />
      <Blogs />
      <Resume />
      <Contact />
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default Home;
