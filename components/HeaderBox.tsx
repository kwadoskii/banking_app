const HeaderBox = ({ type = "title", title, subtext, user }: HeaderBoxProps) => {
  return (
    <div className="header-box">
      <h1 className="header-box-title">
        {title}
        {type === "greeting" && <span className="text-bankGradient font-bold">&nbsp;{user}</span>}
      </h1>
      <div className="header-box-subtext">{subtext}</div>
    </div>
  );
};

export default HeaderBox;
