import Mock from 'mockjs';

Mock.mock('/api/login', 'post', options => (options));
