export const SEND_IMAGE_DETECT = "SEND_IMAGE_DETECT";

export function sendImageToDetect(file) {
  const url = "http://detector-violence.myftp.org:5000?download=True";
  const request = fetch(url, {
    method: "POST",
    body: file,
  });

  return (dispatch) => {
    return new Promise((resolve, reject) => {
      request
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          dispatch({
            type: SEND_IMAGE_DETECT,
            payload: data,
          });

          resolve(true);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };
}
