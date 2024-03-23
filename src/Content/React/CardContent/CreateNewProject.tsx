
//import AEditor from './../../../Components/Editor/AEditor'


const cardTitle ="npm create vite@latest";
const cardDate = createDate("2024-03-22");
const cardContent = CardContent();

function CardContent() {
  return (
  <>
    <details>
      <summary className='font-bold'>
        Install Node.js and Vite
      </summary>
      <a href='https://nodejs.org/en/downloa'>Node.js</a>
    </details>
    <br />
    <details>
      <summary className='font-bold text-pink-700 '> npm create vite@latest </summary>
      <ol>
        <li><p>In terminal type the code npm create vite@latest and press Enter </p></li>
        <br />
        <p><b>Answer the Questions:</b></p>
        <li><b>create-vite@5.2.3. Ok to proceed? </b>(Type y)</li>
        <li><b>? Project name:</b> (Ths will create a new folder with the project inside, if you don't want to create the folder, type ".") </li>
        <li><b>? Package name:</b> (Feel free to choose any name, usually is used the project name)</li>
        <li><b>Select a framework:</b> (React, using arrow's keywords)</li>
        <li><b>Select a variant:</b> (Choose the code langague to work on, +SWF install the package faster)</li>
        <li>Type <b>npm install</b>.</li>
        <li>Type <b>npm run dev</b>.</li>
        <p>Done 😜 </p>
      </ol>
    </details>
    <br />

    <details>
      <summary className='font-bold'>Install Tailwind CSS with Vite</summary>
      <a href="https://tailwindcss.com/docs/guides/vite">Tailwind CSS with Vite Link.</a>
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