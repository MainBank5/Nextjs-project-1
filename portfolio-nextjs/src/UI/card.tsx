import Image from "next/image";


export default function SkillCard({ imageName, altText } : { imageName: string; altText: string }) {
    return (
      <div className="flex justify-center items-center p-4 rounded-lg shadow-md">
        <Image src={imageName} alt={altText} width={80} height={80} />
      </div>
    );
  }