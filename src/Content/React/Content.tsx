

const logo = <img className="size-7"
src="https://firebasestorage.googleapis.com/v0/b/between-tags.appspot.com/o/logo%2Freact.png?alt=media&token=9aaeef22-5cc8-46f4-8505-aa815b461218"
/>

import CreateNewProject from "./CardContent/CreateNewProject"

const content: any =[];

content.push(
  CreateNewProject
  
);



content.forEach((item:any )=> {
  item.logo =logo;
  
});

export default content;