import { useState } from 'react';
import { ACCESS_KEY, SECRET_KEY, BUCKET } from './secrets'

const AWS = require('aws-sdk');
AWS.config.update({
  accessKeyId: ACCESS_KEY,
  secretAccessKey: SECRET_KEY,
  region: 'eu-west-1'
});


function App() {
  const [selectedFile, setSelectedFile] = useState()
  const [isFilePicked, setIsFilePicked] = useState(false)

  const changeHandler = (event) => {
    console.log('inside changeHandler')

    setSelectedFile(event.target.files[0]);
    setIsFilePicked(true);
  } 

  const  submitHandle = async () => {
    console.log('inside submitHandle')

    const params = {
      Bucket: BUCKET,
      Key: selectedFile.name,
      Body: selectedFile,
    }

    try {
      const res = await new AWS.S3().putObject(params).promise()
      console.log('Success uploading data: ', res)
    } catch (e) {
      console.error(`Error uploading data. Params: ${JSON.stringify(params)}`)
      console.error(e)
    }
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
