import { dirtImg, grassImg, glassImg, logImg, woodImg } from './images';
import { TextureLoader } from 'three';

export const dirtTexture = new TextureLoader().load(dirtImg);
export const grassTexture = new TextureLoader().load(grassImg);
export const glassTexture = new TextureLoader().load(glassImg);
export const logTexture = new TextureLoader().load(logImg);
export const woodTexture = new TextureLoader().load(woodImg);
export const groundTexture = new TextureLoader().load(grassImg);
