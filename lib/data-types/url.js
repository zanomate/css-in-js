import { Method } from 'utils';

export const url = (uri) => new Method('url').required(uri).build();