import { Method } from 'utils';

export const element = (id) => new Method('element').required(id).build();
