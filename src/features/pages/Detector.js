import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendImageToDetect } from "../../actions/detector_actions";
import ReactJson from "react-json-view";
import Swal from "sweetalert2";

import {} from "react-router-dom";

export default function Detector() {
  const [detectedImageUrl, setDetectedImageUrl] = useState("");
  const [inputImage, setInputImage] = useState("");
  const [nameImage, setNameImage] = useState("");
  const dispatch = useDispatch();
  const data_detection = useSelector((state) => state);

  useEffect(() => {
    if (data_detection.detector) {
      const data = data_detection.detector.data;
      if (data.status){
        setDetectedImageUrl(`data:image/jpeg;base64,${data.imageB64}`);
        Swal.fire({
          text: 'detection complete',
          icon: 'success'
        })
      }      
      else{
        Swal.fire({
          title: "Error!",
          text: `${data.text}, support .jpeg y .jpg`,
          icon: 'error'
        })
        setDetectedImageUrl("");
      }
    }
  }, [data_detection.detector]);

  const handleInputFile = (e) => {
    setDetectedImageUrl("charging");
    const fileInput = document.getElementById("formFile");
    const data = new FormData();
    setNameImage(fileInput.files[0].name);
    data.append("file", fileInput.files[0]);
    let reader = new FileReader();
    reader.onload = function (e) {
      setInputImage(e.target.result);
    };
    reader.readAsDataURL(fileInput.files[0]);
    dispatch(sendImageToDetect(data));
  };
  return (
    <div className="pt-16">
      <h1>Detector de violencia</h1>

      <div className="grid md:grid-cols-2 place-items-center grid-cols-1">
        <div className="grid grid-cols-1 place-items-center h-screen">
          <div className="flex justify-center items-center">
            <div className="grid place-items-center">
              <div className="mb-3 w-96">
                <label
                  htmlFor="formFile"
                  className="form-label inline-block mb-2 text-gray-700"
                >
                  Seleccionar Imagen
                </label>
                <input
                  className=" form-control
                      block
                      w-full
                      px-3
                      py-1.5
                      text-base
                      font-normal
                      text-gray-700
                      bg-white bg-clip-padding
                      border border-solid border-gray-300
                      rounded
                      transition
                      ease-in-out
                      m-0
                      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  type="file"
                  accept=".jpeg"
                  id="formFile"
                  onChange={handleInputFile}
                />
              </div>
              {inputImage === "" ? (
                <></>
              ) : (
                <img
                  src={inputImage}
                  alt="Imagen de entrada"
                  className="w-full p-10"
                />
              )}
            </div>
          </div>
        </div>
        <div>
          <div className="grid grid-cols-1 place-items-center h-screen">
            <div className="flex justify-center items-center">
              <div className="grid place-items-center">
                <p className="form-label inline-block mb-2 text-gray-700">
                  Imagen detección
                </p>
                {detectedImageUrl === "" ? (
                  <></>
                ) : (
                  <a href={detectedImageUrl} download={`detected_${nameImage}`}>
                    <img
                      src={detectedImageUrl}
                      alt=""
                      className="w-full p-10"
                    />
                    <h4
                      className={
                        detectedImageUrl === "charging" ? "hidden" : ""
                      }
                    >
                      Hacer click sobre imagen para descargar!
                    </h4>
                  </a>
                )}
                {detectedImageUrl === "charging" ? (
                  <svg
                    role="status"
                    class="mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 h-auto">
          <div className="flex w-screen justify-center items-center">
            <div className="grid grid-cols-1 m-20 h-screen pt-64">
              <label className="text-gray-700">Resultados</label>
              {data_detection.detector ? (
                <div className="text-justify p-1">
                  <ReactJson
                    theme="monokai"
                    src={data_detection.detector.data.detection}
                  />
                </div>
              ) : (
                <div>No resultados</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

