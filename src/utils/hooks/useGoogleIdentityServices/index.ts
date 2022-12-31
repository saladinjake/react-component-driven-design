import { useEffect, useRef, useState } from "react";

interface IOptions {
  onSuccess: (response: any) => void;
  onError: (response: any) => void;
}

const loadScript = (src) => {
  return new Promise((resolve, reject) => {
    if (document.querySelector(`script[src="${src}"]`)) {
      return resolve("success");
    }

    const script = document.createElement("script");
    script.src = src;
    script.onload = () => resolve("success");
    script.onerror = (err) => reject(err);
    document.body.appendChild(script);
  });
};

const useGoogleIdentityService = (options: IOptions) => {
  const { onSuccess, onError } = options;
  const buttonRef = useRef(null);
  const [data, setData] = useState(null);


  useEffect(() => {
    const src = "https://accounts.google.com/gsi/client";

    loadScript(src)
      .then(() => {
        google.accounts.id.initialize({
          client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
          callback: (response) => {
            onSuccess(response);
            setData(response);
            
          },
        });

        google.accounts.id.renderButton(buttonRef.current, {
          type: "standard",
          theme: "outline",
          size: "large",
        });
      })
      .catch(onError);
  }, [onSuccess, onError]);

  return {
    data,
    buttonRef,
  };
};

export default useGoogleIdentityService;
