import React, { useEffect, useState } from "react";
import ToolCard from "../ToolCard/ToolCard";

const Tools = () => {
  const [tools, setTools] = useState([]);
  useEffect(() => {
    fetch("https://rocky-waters-62906.herokuapp.com/tools")
      .then((res) => res.json())
      .then((data) => setTools(data.reverse()));
  }, []);
  return (
    <div className="container mx-auto">
      <h3 className="my-20 text-5xl text-center text-primary">Our Tools</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5">
        {tools.slice(0, 6).map((tool) => (
          <ToolCard key={tool._id} tool={tool}></ToolCard>
        ))}
      </div>
    </div>
  );
};

export default Tools;
