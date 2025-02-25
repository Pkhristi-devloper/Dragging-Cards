import { useRef } from "react";
import Card from "./Card";

const Foreground = () => {
  let data = [
    {
      description: "lorem ipsum dolor sit amet, consectetur adip occum",
      fileSize: "0.9mb",
      close: false,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      description: "hello world card from the Foreground ! ",
      fileSize: "0.9mb",
      close: false,
      tag: { isOpen: false, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      description: "Temporarily updated version of Card from the Foreground ",
      fileSize: "0.9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Upload", tagColor: "blue" },
    },
    
  ];
  let ref = useRef(null);
  return (
    <div ref={ref} className="fixed h-full w-full top-0 left-0 z-[3]">
      <div className="flex gap-10 flex-wrap">
       {
        data.map((item,idx)=>{
          return <Card key={idx} data={item} reference={ref}/>;
        })
       }
      </div>
    </div>
  );
};

export default Foreground;
