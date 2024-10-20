"use client"
import { useDropzone } from "react-dropzone";
import { Inbox, Loader2 } from "lucide-react";
import { uploadToS3 } from '@/lib/s3';
import { useState } from "react";

export default function FileUpload() {
    const [uploading, setUploading] = useState(false)
    const { getRootProps, getInputProps } = useDropzone(
        {
        accept: { "application/pdf": [".pdf"] },
        maxFiles: 1,
        onDrop: async (acceptedFiles) => {
          const file = acceptedFiles[0];
          if (file.size > 10 * 1024 * 1024) {
            // bigger than 10mb!
            toast.error("File too large");
            return;
          }
    
          try {
           const data = await uploadToS3(file)
           console.log(data)
          } catch (error) {
            console.log(error);
          } finally {
            setUploading(false);
          }
        },
      }
    );
  return (
    <div className="p-2 bg-white rounded-xl">
    <div
      {...getRootProps({
        className:
          "border-dashed border-2 rounded-xl cursor-pointer bg-gray-50 py-8 flex justify-center items-center flex-col",
      })}
    >
      <input {...getInputProps()} />
      {uploading ? (
        <>
          {/* loading state */}
          <Loader2 className="h-10 w-10 text-blue-500 animate-spin" />
          <p className="mt-2 text-sm text-slate-400">
            Spilling Tea to GPT...
          </p>
        </>
      ) : (
        <>
          <Inbox className="w-10 h-10 text-blue-500" />
          <p className="mt-2 text-sm text-slate-400">Drop PDF Here</p>
        </>
      )}
    </div>
  </div>
  )
}
