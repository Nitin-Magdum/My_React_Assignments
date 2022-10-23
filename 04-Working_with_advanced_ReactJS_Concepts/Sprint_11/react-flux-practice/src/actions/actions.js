export const ADD_NUM = 'ADD_TODO'
export const SUB_NUM = 'SUB_NUM'
export const RESET = 'RESET'


export function addNum() {
   return {
      type: ADD_NUM,
   };
}

export function subNum() {
   return {
      type: SUB_NUM,
   };
}

export function reset() {
   return {
      type: RESET,
   };
}