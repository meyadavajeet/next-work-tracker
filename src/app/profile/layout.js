export default function ProfileLayout({ children }) {
  {
    return (
      <>
        <div>
          <h1>Profile Header</h1>
        </div>
        {children}
        <div>
          <h1>Profile Footer</h1>
        </div>
      </>
    );
  }
}
