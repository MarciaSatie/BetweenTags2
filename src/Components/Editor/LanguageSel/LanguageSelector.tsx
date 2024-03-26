import { LanguageOptions } from "./LanguageOptions";

const languages = Object.entries(LanguageOptions); 

interface Props {
  language: string; // Corrected typo
  onSelect: (selectedLanguage: string) => void; // Specify return type as void
}

export default function LanguageSelector(props: Props) {
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLanguage = event.target.value;
    props.onSelect(selectedLanguage); // Call onSelect function with selected language
  };

  return (
    <>
      <div className="bg-black pt-4 pl-4 pb-2">
        <select
          name="Code Language"
          id="codeLanguage"
          className="bg-black text-pink-500"
          value={props.language} // Set selected value based on props.language
          onChange={handleSelectChange} // Call handleSelectChange function on select change
        >
          {languages.map(([language, version]) => (
            <option key={language} value={language}>
              {language} {version}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}
