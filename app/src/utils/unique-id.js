'use strict'

export function uniqueId () {
  return (Date.now().toString(36) + Math.random().toString(36).substr(2, 5));
};

export default {};
