const Container = ({ children }) => {
  return (
    <div id={id} className={"max-w-screen-xl mx-auto pb-14 px-4"}>
      {children}
    </div>
  );
};

export default Container;
