import React from 'react';
import Slider from './Slider/Slider';
import Video from './Video/Video';
import About from './About/About';
import Preview from './Preview/Preview';
import Contacts from './Contacts/Contacts';

import Partners from './Partners/Partners';

const projects = [
  {
    image: '1'
  },
  {
    image: '2'
  },
  {
    image: '3'
  },
  {
    image: '4'
  }
];
function MainPage() {
  return (
    <>
        <Video />
        {/* <Slider/> */}
        <About />
        {/* <Breif/> */}
        {/* <Map/> */}
        {/* <Partners/> */}
        <Preview projects={projects}/>
      

    </>
  );
}

export default MainPage;
