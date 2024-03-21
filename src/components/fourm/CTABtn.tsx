interface Props {
  icon: JSX.Element;
  value: number | string;
}

export default function CTABtn({ icon, value }: Props) {
  return (
    <button className="flex items-center gap-1">
      {icon}
      {value}
    </button>
  );
}
