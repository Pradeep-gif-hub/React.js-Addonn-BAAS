

export default function Card10() {
  return (
    <div
      className="flex flex-col rounded-xl  p-4"
      style={{
        border: "10px solid",

        backdropFilter: "saturate(80%) blur(4px)",
        background: " #244141",
      }}
    >
      <div>
        <img
          src="https://res.cloudinary.com/ddcg0rzlo/image/upload/v1652470298/9StaF0UBJfih_df0248.gif"
          alt="nft-gif"
          width="550"
          height="550"
          className="rounded-xl"
        />
      </div>
      <div className="flex flex-col">
  <div className="flex justify-between">
    <h1 className="font-RubikBold">Demons's Slayer</h1>
  </div>
  <div className="flex justify-end">
    <h1 className="font-bold font-RubikBold">Tomiyoka Giyuu</h1>
  </div>
</div>

    </div>
  );
}
