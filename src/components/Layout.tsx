const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="container">
      <div className="content">{children}</div>

      <p className="text-down-center">
        created by{" "}
        <a href="https://github.com/zitrocode" target="_blank">
          zitrocode
        </a>{" "}
        - devChallenges.io
      </p>
    </div>
  );
};

export default Layout;
