const Header = (props) => {
  return (
    <div className={props.bgClass}>
      <div className="text-content">
        <h1 className="text-context">{props.title}</h1>
        {props.children}
      </div>
    </div>
  );
};

export default Header;
