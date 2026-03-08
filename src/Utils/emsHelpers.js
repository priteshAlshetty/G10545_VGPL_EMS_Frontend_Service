export const getRightCenter = p => ({
  x: p.x + p.w,
  y: p.y + p.h / 2,
});

export const getLeftCenter = p => ({
  x: p.x,
  y: p.y + p.h / 2,
});

export const getTopCenter = p => ({
  x: p.x + p.w / 2,
  y: p.y,
});

export const getBottomCenter = p => ({
  x: p.x + p.w / 2,
  y: p.y + p.h,
});
