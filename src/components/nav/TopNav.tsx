interface Props {
  onClick1: () => void;
  onClick2: () => void;
  tab: number;
}

export default function TopNav({ onClick1, onClick2, tab }: Props) {
  return (
    <nav className="fixed top-0 flex w-full justify-between text-center text-white md:hidden">
      <p
        onClick={onClick1}
        className={`${tab === 1 ? "border-b-2 border-red-500 bg-blue-950" : "bg-blue-900"} w-full py-3`}
      >
        Disscussion Fourm
      </p>
      <p
        onClick={onClick2}
        className={`${tab === 2 ? "border-b-2 border-red-500 bg-blue-950" : "bg-blue-900"} w-full py-3`}
      >
        Market Stories
      </p>
    </nav>
  );
}
