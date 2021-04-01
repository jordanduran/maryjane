import React, { useRef, useState, useEffect } from 'react';

const ImageUpload = (props) => {
  const [file, setFile] = useState();
  const [previewUrl, setPreviewUrl] = useState();
  const [isValid, setIsValid] = useState(false);

  const filePickerRef = useRef();

  useEffect(() => {
    if (!file) {
      return;
    }
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPreviewUrl(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  }, [file]);

  const pickedHandler = (event) => {
    let pickedFile;
    let fileIsValid = isValid;
    if (event.target.files && event.target.files.length === 1) {
      const pickedFile = event.target.files[0];
      setFile(pickedFile);
      setIsValid(true);
      fileIsValid = true;
    } else {
      setIsValid(false);
      fileIsValid = false;
    }
    props.onInput(props.id, pickedFile, fileIsValid);
  };

  const pickImageHandler = () => {
    filePickerRef.current.click();
  };

  return (
    <div className='image-input'>
      <input
        id='file-upload'
        name='file-upload'
        ref={filePickerRef}
        type='file'
        className='sr-only'
        accept='.jpg, .png, .jpeg'
        onChange={pickedHandler}
      />
      <div className=''>
        {previewUrl && (
          <div className='image-container mt-2 mb-2'>
            <img src={previewUrl} alt='preview' className='' />
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageUpload;
