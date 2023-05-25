function Layout({ children, hasHeader }: { children: React.ReactNode; hasHeader?: boolean }) {
  return (
    <>
      {/* {hasHeader && <CommonHeader />} */}
      <div>{children}</div>
    </>
  );
}

export default Layout;
