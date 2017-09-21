/* eslint-disable */
export const PERSON = {
  name: {
    first: '周',
    middle: '',
    last: '宇翔',
  },
  about: '',
  position: '软件开发工程师',
  birth: {
    year: 1995,
    location: '江苏省溧阳市'
  },
  experience: [{
      company: '南京明基医院有限公司',
      position: '软件开发工程师',
      timeperiod: '2016年-9月——至今',
      description: 'HSI系统开发与维护'
    },

  ],
  education: [{
      degree: '南京晓庄学院',
      timeperiod: '2012.09 - 2016.09',
      description: '计算机科学与技术'
    }
  ],
  projects :[
    {
      project : '医院库存系统',
      timeperiod :'2016.12 - 2017.03',
      description :'医院库存系统对外接口的开发',
    },
    {
     project : '双向转诊系统',
     timeperiod :'2017.04 - 2017.06',
     description :'基于ssm框架的 ',
    }
  ],
  // skill level goes 0 to 100
  skills: [{
      name: 'Java',
      level: '99'
    },
    {
      name: '数据库',
      level: '95'
    },
    {
      name: 'JavaScript',
      level: '97'
    },
    {
      name: 'Linux',
      level: '93'
    }
  ],
  skillDescription: '熟练使用springboot开发web项目',
  contact: {
    email: '864197662@qq.com',
    phone: '15151838621',
    street: '',
    city: '',
    website: '',
    github: ''
  },
  lang: 'cn' // en, de, fr, pt, cn, it
};
