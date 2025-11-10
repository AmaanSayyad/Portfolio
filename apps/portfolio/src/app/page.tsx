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
  Skills,
  Speaking,
  WorkExperience,
} from '~/components';

const Home = () => {
  return (
    <>
      <Header />
      <City />
      <AboutAchievements />
      <Interests />
      <WorkExperience />
      <Projects />
      <Hackathons />
      <Skills />
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
