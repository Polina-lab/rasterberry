import { useDropzone } from 'react-dropzone';

const ImageUploader = ({ onDrop }) => {
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: 'image/*'
  });

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      <p>Drag and drop an image here, or click to select one</p>
    </div>
  );
};

export default ImageUploader;
