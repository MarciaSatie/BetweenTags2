

const logo = <img className="size-7"
src="https://firebasestorage.googleapis.com/v0/b/between-tags.appspot.com/o/logo%2Fvscode.png?alt=media&token=703d946f-fe1a-41cc-a20a-aae906305e61"/>;

import VSCode_Snippets from "./CardContent/VSCode_Snippets"

const content: any =[];

content.push(
  VSCode_Snippets

);



content.forEach((item:any )=> {
  item.logo =logo;
  
});

export default content;