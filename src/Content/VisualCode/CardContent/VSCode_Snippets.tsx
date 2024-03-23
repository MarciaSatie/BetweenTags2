//import AEditor from '../../../Components/Editor/AEditor'



const cardTitle ="VS Code Snippets, shortcuts, editing";
const cardDate = createDate("2024-03-22");
const cardContent = CardContent();

function CardContent() {
  return (
    <>
    <details>
      <summary className='font-bold'>
        HTML Format
      </summary>
      <p>shift+l</p>
    </details>
    <br/>

    <details>
      <summary className='font-bold text-pink-700'>
        React Component Snippets
      </summary>
      <p>rfc (enter)</p>
    </details>
    <br/>

    <details>
      <summary className="font-bold">
        Basic Editing
      </summary>
      <a href="https://code.visualstudio.com/docs/editor/codebasics#:~:text=Pressing%20Ctrl%2BEnter%20inserts%20a%20new%20line%20in%20the%20input%20box.">Page Link</a>

      <details>
        <summary className="text-pink-700">Alt+Click</summary>
        <p>Creates multiples selectors, that will replicate the same behaviour from the original cursor.</p>
      </details>
      <details>
        <summary>Ctrl+D</summary>
        <p>Select the next occurrence (from the selected word) allowing changes in the same time.</p>
        <ol>
          <li>Select a word.</li>
          <li>press Ctrl+D, then it will select the next similar word.</li>
          <li>Keep pressing Ctrl+D until reach teh amount of occurrence to change.</li>
        </ol>
      </details>

      <details>
        <summary className="text-pink-700"> Ctrl+Alt+Down or Ctrl+Alt+Up  </summary>
        <p>Allow you to add more cursors up or down in the line, replicating the same behavior from the proginal cursor.</p>
      </details>
     
      <details>
        <summary>Ctrl+F</summary>
        <p>Find and Replace</p>
        <p>If there are more than one matched result in the current opened file, you can press Enter and Shift+Enter to navigate to next or previous result when the find input box is focused.</p>
      </details>
    </details>
    <br/>

    <details> 
      <summary className="font-bold text-pink-700">Alt+Q (Wrap the select text between tags)</summary>
      <ol>
        <p>Alt+Q is a personal shortcut added to Emmet Abbreviation.</p>
        <li> Select the text taht you wnat to wrap with the new tags</li>
        <li>press Alt+Q</li>
        <li>type the tag and press Enters</li>
        </ol>
    </details>
   
   <details>
    <summary className="font-bold">Add Emojis</summary>
    <p>Windows: Press Windows+.</p>
    <p>macOS: Press CMD+CTRL+Apace</p>
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