
import AEditor from '../../../Components/Editor/AEditor'


//Replce XXX by file name.s

const cardTitle ="Firebase Hosting Setup Complete Issue";
const cardDate = createDate("2024-03-27");
const cardContent = CardContent();

function CardContent() {
  return (
    <>
    <AEditor
      code ={`Add code here`}
    />

    <details>
      <summary>
        <strong>Firebase Hosting Setup Complete Issue</strong>
        
      </summary>
      <a href='https://dev.to/chayti/firebase-hosting-setup-complete-issue-43cg'>Link Page</a>
    </details>

    <ol >
      <li></li>
    </ol>

    <ul >
      <li></li>
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