//import AEditor from '../../../Components/Editor/AEditor'



const cardTitle ="VS Code Snippets";
const cardDate = createDate("2024-03-22");
const cardContent = CardContent();

function CardContent() {
  return (
    <>
    <details>
      <summary className='text-sm'>
        <p><strong>HTML Format</strong></p>
      </summary>
      <p>shift+l</p>
    </details>

    <details>
      <summary className='text-sm'>
        <p><strong>React Component Snippets</strong></p>
      </summary>
      <p>rfc (enter)</p>
    </details>
   
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