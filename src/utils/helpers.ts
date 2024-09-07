import { RefObject } from 'react';

export const addToRef = <T>(el: T | null, ref: RefObject<T[]>) => {
    if (el !== null && !ref.current.some(item => item === el)) {
        ref.current.push(el);
    }
}
