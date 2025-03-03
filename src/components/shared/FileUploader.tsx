import {useCallback, useState} from 'react'
import {useDropzone, FileWithPath} from 'react-dropzone'
import { Button } from '../ui/button'


type FileUploaderProps = {
    fieldChange: (FILES:File[]) => void
    mediaUrl: string
}

const FileUploader = ({fieldChange, mediaUrl}: FileUploaderProps) => {
   const[fileUrl, setFileUrl] = useState(mediaUrl)
   const[file, setFile] = useState<File[]>([])

    const onDrop = useCallback((acceptedFiles:FileWithPath[]) => {
        setFile(acceptedFiles);
        fieldChange(acceptedFiles)
        setFileUrl(URL.createObjectURL(acceptedFiles[0]))
        // Do something with the files
      }, [file])
      const {getRootProps, getInputProps} = useDropzone({
        onDrop,
        accept: {'image/*':
            ['.png', '.jpg', '.jpeg', '.svg']
        }
      })
  return (
    <div {...getRootProps()} 
    className = "flex flex-center flex-col bg-dark-3 rounded-xl cursor-pointer">
      <input {...getInputProps()} className='cursor-pointer'/>
      {
        fileUrl ?(
            <>
            <div className = "flex flex-1 justify-center w-full p-5 lg:p-10">
                <img 
                src = {fileUrl}
                alt = "preview"
                className = "w-full h-full object-cover rounded-xl"
                />
            </div>
                <p className='file_uploader-label'>
                    Click or drag photo to replace
                </p>
                </>

        ) :(
            <div className='file_uploader-box'>
                    <img src='/assets/icons/file-upload.svg' 
                    alt='upload' 
                    width = {80}
                    height = {96}
                    />
                    <h3 className='text-white-4 text-lg small-regular font-regular mb-6'>
                        Drag & Drop your image here
                    </h3>
                    <p className='text-light-4 text-lg small-regular font-regular mb-6'>
                        SVG, PNG, JPG
                    </p>
                    <Button className='shad-btn_dark_4 bg-neutral-700 rounded-xl'>
                        Browse Files
                    </Button>
                </div>
        )
      }
    </div>
  )
}

export default FileUploader 