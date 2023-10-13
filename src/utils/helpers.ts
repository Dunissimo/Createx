export const handleLinkClick = () => {
  window.scrollTo({ top: 0, left: 0, behavior: "auto" });
};

export const handleSmoothLinkClick = () => {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
};

export const getDate = (item: any) => {
  return new Date(
    `${item.date.month} ${item.date.day} ${item.date.time.split(" ")[0]}`
  );
};
