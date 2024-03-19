import Card1 from "./CardContent/Card1"


const logo = <img src="https://firebasestorage.googleapis.com/v0/b/between-tags.appspot.com/o/logo%2Flogo_CSharp.png?alt=media&token=9c458fa4-2a06-47df-8865-8d4f3d6043b7"/>;


const content: any =[];

content.push(
  Card1,
  Card1,
  Card1 
);



content.forEach((item:any )=> {
  item.logo =logo;
  
});

export default content;