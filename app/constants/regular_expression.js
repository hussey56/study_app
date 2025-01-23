export const MATH_JAX_PATTERN_INLINE_BLOCK =
  /(?:\${2}|\\\[|\\(begin|end)\{.*?})[^<]*(?:\${2}|\\\]|\\(begin|end)\{.*?})/g;

export const MATH_JAX_PATTERN_INLINE =
  /<\s*\s*.*\s*>*(?:\\\(|\\(begin|end)\{.*?})[^<]*(?:\\\)|\\(begin|end)\{.*?})*<\s*\/\s*.*\s*>/g;
