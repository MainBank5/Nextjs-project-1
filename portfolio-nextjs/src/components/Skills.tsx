
import SkillCard from "@/UI/card";
export default function Skills() {
  return (
    <div id='skills' className="py-10 md:py-20 min-h-screen flex justify-center items-center">
       <div className="max-w-6xl w-full px-4 md:px-8 flex flex-col justify-center items-center">
          <h3 className="text-center text-4xl md:text-5xl font-bold text-green-500 mb-10">Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            <SkillCard imageName="/css.webp" altText="icon-css" />
            <SkillCard imageName="/javascript.png"  altText="icon-javascript" />
            <SkillCard imageName="/typescript-icon.png" altText="icon-typescript" />
            <SkillCard imageName="/react.png" altText="icon-react" />
            <SkillCard imageName="/nextjs.png" altText="icon-nextjs" />
            <SkillCard imageName="/pythoniv.png" altText="icon-python" />
            <SkillCard imageName="/graphql.png" altText="icon-graphql" />
          </div>
       </div>
    </div>
  );
}


