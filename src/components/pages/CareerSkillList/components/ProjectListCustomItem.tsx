import React from "react";

type Prop = {
  items: {
    title: string;
    descriptions: string[]
  }[]
};

function ProjectListCustomItem({ items }: Prop) {
  if (items) {
    return <>
    {
      items.map(({title, descriptions}) => 
        <dl>
          <dt>{ title }</dt>
          <dd>
            <ul>
              {descriptions.map((description) => {
                if (!description) return <p style={{height: "8px"}}> </p>;
                return <li>{description}</li>
              })}
            </ul>
          </dd>
        </dl>
      )
    }
    </>;
  }
  return <></>;
}

export default ProjectListCustomItem;
