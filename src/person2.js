/* eslint-disable */
export const PERSON = {
  name: {
    first: 'John',
    middle: '',
    last: 'Doe',
  },
  about: 'Hi, my name is John Doe. I\'m just about the most boring type of person you could possibly imagine. I like collecting leaves from the tree in my back yard and documenting each time I eat a peanut that is non-uniform. I am not a robot. Please hire me.',
  position: 'Software Developer',
  birth: {
    year: 1990,
    location: 'New York'
  },
  experience: [{
      company: 'Company A',
      position: 'Developer',
      timeperiod: 'since January 2016',
      description: 'Programming and watching cute cat videos.'
    },
    {
      company: 'Company B',
      position: 'Frontend Developer',
      timeperiod: 'January 2015 - December 2015',
      description: 'Fulfillment of extremely important tasks.'
    }
  ],
  education: [{
      degree: 'Master of Arts',
      timeperiod: 'March 2012 - December 2013',
      description: 'Major in Hacking and Computer Penetration, University A, New York, USA.'
    }
  ],
  projects :[
    {
     project : 'Project A',
     timeperiod :'March 2012 - December 2013',
     description :'HIS',
    },
    {
      project : 'Project B',
      timeperiod :'March 2012 - December 2013',
      description :'ERP',
    }
  ],


  // skill level goes 0 to 100
  skills: [{
      name: 'HTML5',
      level: '99'
    },
    {
      name: 'CSS3',
      level: '95'
    },
    {
      name: 'JavaScript',
      level: '97'
    },
    {
      name: 'Node.js',
      level: '93'
    },
    {
      name: 'Angular 2',
      level: '60'
    }
  ],
  skillDescription: 'Also proficient in Adobe Photoshop and Illustrator, grew up bilingual (English and Klingon).',
  contact: {
    email: 'john.doe@email.com',
    phone: '0123 456789',
    street: '1234 Broadway',
    city: 'New York',
    website: 'johndoe.com',
    github: 'johnyD'
  },
  lang: 'en' // en, de, fr, pt, cn, it
};
