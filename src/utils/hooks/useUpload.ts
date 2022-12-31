import { useState } from "react";
import { uploadFile } from "api/services/Utilities";

function useUpload(onComplete?: (data: any) => void) {
  const [progress, setProgress] = useState("");
  const [link, setLink] = useState(null);

  const handleReset = () => {
    setProgress("");
    setLink(null);
  };

  const onClick = async (event) => {
    try {
      const formData = new FormData();
      formData.append("model", event.target.files[0]);

      const { data } = await uploadFile(formData, {
        onUploadProgress: (progressEvent) => {
          const calculateProgress =
            (Number(progressEvent.loaded) / Number(progressEvent.total)) * 100;

          setProgress(`${Math.ceil(calculateProgress)}%...`);
        },
      });

      setLink(data.fileUrl);
      onComplete(data);
    } catch (err) {
      throw new Error(err);
    }
  };

  return { progress, link, onClick, handleReset };
}

export default useUpload;
