const infographics = (theme) => ({
  section: {
    padding: "24px",
    [theme.breakpoints.down("sm")]: {
      padding: "12px",
    },
    borderTop: "1px solid #ddd",
    borderBottom: "1px solid #ddd",
    boxSizing: "border-box",
  },
});

export default infographics;
