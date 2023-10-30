export default function Submenu({ menuItems }) {
  //   console.log(menuItems);
  return (
    <>
      {menuItems.map((item) => {
        return (
          <>
            <p>{item}</p>
          </>
        );
      })}
    </>
  );
}
