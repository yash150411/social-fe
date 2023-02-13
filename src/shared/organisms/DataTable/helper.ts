export const isBottomScroll = (e: any) => {
  const isBottom =
    e.target.scrollHeight && e.target.scrollTop
      ? Math.round(e.target.scrollHeight - e.target.scrollTop) === e.target.clientHeight ||
        Math.round(e.target.scrollHeight - e.target.scrollTop) === e.target.clientHeight - 1
      : false;

  return isBottom;
};
