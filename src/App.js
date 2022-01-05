import { useState } from 'react';

function App() {
  const [selectedFile, setSelectedFile] = useState()
  const [isFilePicked, setIsFilePicked] = useState(false)

  const changeHandler = (event) => {
    console.log('inside changeHandler')

    setSelectedFile(event.target.files[0]);
    setIsFilePicked(true);
  } 

  const submitHandle = () => {
    console.log('inside submitHandle')
  }

  const renderFileInfo = () => {
    if (isFilePicked) {
      return (
        <div>
          <p>Filename: {selectedFile.name}</p>
          <p>Filetype: {selectedFile.type}</p>
        </div>
      )
    }
  }


  return (
    <div className="App">
      <input type="file" name="file" onChange={changeHandler} />
      <div>
        <button onClick={submitHandle}>
          Submit!
        </button>
      </div>
      { 
        renderFileInfo()
      }
    </div>
  );
}

export default App;
