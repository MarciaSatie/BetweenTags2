
import AEditor from './../../../Components/Editor/AEditor'


//Replce XXX by file name.

const cardTitle ="XXX";
const cardDate = createDate("2024-03-22");
const cardContent = CardContent();

function CardContent() {
  return (
    <>
    <AEditor
      code ={`Add code here`}
    />
    <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a ligula mattis, viverra tortor tincidunt, blandit magna. In commodo semper diam nec efficitur. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Praesent rhoncus sapien sem, non ornare mi efficitur vel. Duis vel lacinia lectus. Fusce pretium est in metus scelerisque, eget porttitor turpis bibendum. Vestibulum sed maximus arcu. Ut non tristique justo. Pellentesque sodales id tortor sit amet dictum. Integer varius nisi sed nisi imperdiet, et euismod enim condimentum. Mauris libero tortor, hendrerit in eleifend eget, rutrum ut velit. Proin semper purus in dolor feugiat, et auctor est convallis. Phasellus condimentum at elit in ullamcorper. Integer interdum mauris nec urna mattis ullamcorper. Etiam aliquam placerat nisl in pharetra.</div>
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