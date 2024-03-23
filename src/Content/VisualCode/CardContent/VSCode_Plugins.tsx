
//import AEditor from '../../../Components/Editor/AEditor'


//Replce XXX by file name.s

const cardTitle ="VS Code main Plugins";
const cardDate = createDate("2024-03-22");
const cardContent = CardContent();

function CardContent() {
  return (
    <>
      <h2 className='font-bold'>List of usefull plugins to install at VS Code.</h2>
      <br></br>
      <ul>
        <li><a href='https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag'>Auto Rename Tag (HTML)</a> </li>
        <li><a href="https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode">Prettier-Code Formater</a></li>
        <li><a href="https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer">Live Server (Web Developement)</a></li>
        <li><a href="https://marketplace.visualstudio.com/items?itemName=xabikos.JavaScriptSnippets">JavaScript (ES6) Code Snippets</a></li>
      </ul>
    </>
    
  )
}

// adding information to a Map
const NewCard = new Map();
NewCard.set ("title",cardTitle);
NewCard.set ("date", cardDate);
NewCard.set ("cardContent",cardContent);
NewCard.set ("key",GenerateKey())

const cardObj = convertMapToObj(NewCard);
export default cardObj;



//////////////////////Functions //////////////////////////////////////////
function GenerateKey(){
    const nameKey = cardTitle.replace(/\s+/g, ''); // Removes all whitespace
    const keyAssemble = nameKey + Math.random().toString(36);
    return keyAssemble;
}

function createDate(dateImput:string){
    const x = new Date (dateImput);

    const month = x.toLocaleString("en-US",{month:"long"});
    const day = x.toLocaleString("en-US",{day:"2-digit"});
    const year = x.getFullYear();

    return day+" "+month+" "+year;
}

function convertMapToObj(map: Map<string, any>): { [key: string]: any } {
  const obj: { [key: string]: any } = {};
  for (let [index, value] of map.entries()) {
      obj[index] = value;
  }
  return obj;
}