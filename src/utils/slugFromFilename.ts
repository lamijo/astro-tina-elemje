import * as path from 'path';

const slugFromFilename = (file: string) => {
  if (!file) return '#';
  return path.parse(file).name;
}

export default slugFromFilename;
