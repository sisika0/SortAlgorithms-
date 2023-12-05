function Bar(props) {
  const { height, id } = props;
  return (
    <div
      className="bar"
      id={`bar-${id}`}
      style={{ height: `${height}px` }}
    ></div>
  );
}
export default Bar;
