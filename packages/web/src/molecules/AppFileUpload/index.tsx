import React, { useRef, useState } from 'react'

interface FileUploaderProps {
  maxSize?: number // in bytes
  allowedTypes?: string[]
  onUpload: (file: File) => Promise<string> // Function to handle file upload, returns image URL
  width?: string
  height?: string
}

const AppFileUploader: React.FC<FileUploaderProps> = ({
  maxSize = 800 * 400,
  allowedTypes = ['image/svg+xml', 'image/png', 'image/jpeg', 'image/gif'],
  onUpload,
  width = '400px',
  height = '160px',
}) => {
  const [file, setFile] = useState<File | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const [isUploading, setIsUploading] = useState(false)
  const [uploadProgress, setUploadProgress] = useState(0)
  const [uploadedImageUrl, setUploadedImageUrl] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileChange = async (selectedFile: File | null) => {
    if (selectedFile) {
      if (selectedFile.size > maxSize) {
        setError(`File size exceeds ${maxSize / 1024}KB limit`)
        return
      }
      if (!allowedTypes.includes(selectedFile.type)) {
        setError('Invalid file type')
        return
      }
      setFile(selectedFile)
      setError(null)
      await uploadFile(selectedFile)
    }
  }

  const uploadFile = async (file: File) => {
    setIsUploading(true)
    setUploadProgress(0)
    try {
      const url = await onUpload(file)
      setUploadedImageUrl(url)
      setUploadProgress(100)
    } catch (err) {
      setError('Upload failed')
    } finally {
      setIsUploading(false)
    }
  }

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDragging(false)
    const droppedFile = e.dataTransfer.files[0]
    handleFileChange(droppedFile)
  }

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = () => {
    setIsDragging(false)
  }

  return (
    <div
      className={`border-2 border-dashed rounded-lg p-4 flex flex-col items-center justify-center transition-colors
        ${isDragging || isHovering ? 'border-blue-500 bg-blue-50' : 'border-gray-300'}
        ${isUploading ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:border-blue-500 hover:bg-blue-50'}`}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      style={{ width, height }}
      onClick={() => !isUploading && fileInputRef.current?.click()}>
      {uploadedImageUrl ? (
        <div className="w-full h-full relative">
          <img
            src={uploadedImageUrl}
            alt="Uploaded file"
            className="w-full h-full object-contain"
          />
          {isUploading && (
            <div className="absolute bottom-0 left-0 w-full bg-white bg-opacity-75 p-2">
              <div className="bg-purple-500 h-1" style={{ width: `${uploadProgress}%` }}></div>
              <p className="text-xs mt-1">{uploadProgress}%</p>
            </div>
          )}
        </div>
      ) : file ? (
        <div className="flex flex-col items-center">
          <i className="ri-file-line text-2xl mb-2"></i>
          <span className="text-sm truncate">{file.name}</span>
          {isUploading && (
            <div className="w-full mt-2">
              <div className="bg-purple-500 h-1" style={{ width: `${uploadProgress}%` }}></div>
              <p className="text-xs mt-1">{uploadProgress}%</p>
            </div>
          )}
        </div>
      ) : (
        <>
          <i className="ri-upload-cloud-line text-2xl mb-2"></i>
          <p className="text-sm text-center">Click to upload or drag and drop</p>
          <p className="text-xs text-gray-500 text-center">SVG, PNG, JPG or GIF (max. 800x400px)</p>
        </>
      )}
      <input
        type="file"
        ref={fileInputRef}
        onChange={e => handleFileChange(e.target.files ? e.target.files[0] : null)}
        accept={allowedTypes.join(',')}
        className="hidden"
        disabled={isUploading}
      />
      {error && <p className="text-red-500 text-xs mt-2">{error}</p>}
    </div>
  )
}

export default AppFileUploader
