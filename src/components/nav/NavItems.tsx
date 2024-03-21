export default function NavItems() {
  const items = [
    { label: "Sentiment" },
    { label: "Market" },
    { label: "Sector" },
    { label: "Watchlist" },
    { label: "Events" },
    { label: "News/Interview" },
  ];

  return (
    <ul className="flex flex-col">
      {items.map((item, i) => (
        <li key={i} className="p-5 pl-[52px] hover:bg-blue-950">
          {item.label}
        </li>
      ))}
    </ul>
  );
}
