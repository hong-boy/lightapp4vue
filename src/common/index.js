import debug from 'debug';
import * as axios from './axios';
import GradientColorUtil from './gradient-color.util.js';
import ParticleWave from './canvas_praticle';

const log = debug('*');

function isFunction(param) {
  return Object.prototype.toString.call(param) === '[object Function]';
}

export default {
  ...axios,
  log,
  GradientColorUtil,
  ParticleWave,
  isFunction
};
