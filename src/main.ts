import Interopdata from './Interopdata.js';

export * from './generated-sources';

export { Interopdata };

export default (projectSecret: string) => {
  return new Interopdata(projectSecret);
};
