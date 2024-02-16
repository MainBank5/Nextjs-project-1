import { IconType } from "react-icons";

interface AboutCardProps {
  icon: IconType;
  title: string;
  desc?: string;
}

export default function AboutCard({ icon, title, desc }: AboutCardProps) {
  return (
    <div className="flex flex-col justify-center items-center rounded-lg shadow-md text-center p-8 ">
      <div className="text-4xl text-green-500 mb-4">{icon}</div>
      <h4 className="text-lg font-bold mb-2">{title}</h4>
      {desc && <p className="text-gray-500">{desc}</p>}
    </div>
  );
}

