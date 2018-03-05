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
      timeperiod: '2016年8月——2017年3月',
      description: 'HIS系统开发与维护'
    },{
    company: '青岛菩提信息技术有限公司南京技术中心',
    position: '软件开发工程师',
    timeperiod: '2017年3月——至今',
    description: '医院相关系统开发与维护'
  }
  ],
  education: [{
      degree: '南京晓庄学院',
      timeperiod: '2012.09 - 2016.09',
      description: '计算机科学与技术'
    }
  ],
  projects :[
    {
      project : 'SPD医院物流系统',
      timeperiod :'2016.12 - 2017.03',
      description :'主要负责医院库存系统对外接口的开发',
    },
    {
     project : '双向转诊系统',
     timeperiod :'2017.04 - 2017.06',
     description :'基于ssm框架的上下级医院转诊系统',
    },
    {
      project : '昆明市第一人民医院绩效以及科损益系统',
      timeperiod :'2017.08 -至今',
      description :'使用spingBoot搭建开发平台，采用ssm框架开发。mysql做数据存储，redis做用户缓存。选择Undertow做Web容器。',
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
  skillDescription: '熟悉JavaWeb开发的技术,' +
    '了解过知名开源框架源码.'+
  '同时也比较关注比如容器等新的技术。',
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
