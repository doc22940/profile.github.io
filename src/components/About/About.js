import React from 'react';

import SkewBg from '@common/SkewBg';
import PageHeader from '@common/PageHeader';
import Flex from '@common/Flex';

import Quote from './Quote';
import Avatar from './Avatar';

import { AboutWrapper, AboutInfo } from './About.style';

const About = () => {
  return (
    <AboutWrapper id="about">
      <PageHeader>About Me</PageHeader>
      <SkewBg />
      <AboutInfo>
        <div>
          <Avatar src="hfest_avatar_2.jpg" />
        </div>
        <p>
          Hi, I'm Rudresh Dixit, an avid problem solver from India, currently
          persuing my bachelors in Information Technology(IT) at{' '}
          <a className="about__link" href="http://nsut.ac.in">
          Netaji Subhash University of Technology(NSUT)
          </a>{' '}
          I am quite passionate and enthusiastic about what I do.
          I tend to make use of Machine Learning to build fantastic projects
          and mordern web technologies to build websites that look great and function
          correctly.
          <br />
          <br />
          I love both programming and designing.
          I'm also interested in creating
          programmatic designs and creative coding projects.
        </p>
      </AboutInfo>

      <Flex justify="space-between" className="quotes__wrapper">
        <Quote>
          <p>“Simplicity is the baddest choice to be the best.“</p>
        </Quote>
        <Quote>
          <p>
            “I know I’m not successful enough, but I’m passionate enough not to
            worry about success.“
          </p>
        </Quote>
        <Quote>
          <p>
            “Creativity is the driver of an unstoppable train called Passion.”
          </p>
        </Quote>
      </Flex>
    </AboutWrapper>
  );
};

export default About;
