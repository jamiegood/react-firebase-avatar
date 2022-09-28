import React from "react";

interface Props {
  name: string;
}

const SayHello: React.FC<Props> = ({ name }): JSX.Element => {
  return (
    <div>
      The name is: <span>{name}</span>
    </div>
  );
};

export default SayHello;
