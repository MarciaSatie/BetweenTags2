

const logo = <img className="size-7"
src="https://firebasestorage.googleapis.com/v0/b/between-tags.appspot.com/o/logo%2Freact.png?alt=media&token=9aaeef22-5cc8-46f4-8505-aa815b461218"
/>

import CreateNewProject from "./CardContent/CreateNewProject"
import Firebase from "./CardContent/Firebase"

const content: any =[];

content.push(
  CreateNewProject,
  Firebase
  
);



content.forEach((item:any )=> {
  item.logo =logo;
  
});

export default content;