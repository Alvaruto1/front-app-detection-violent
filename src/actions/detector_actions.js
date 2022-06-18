export const SEND_IMAGE_DETECT = "SEND_IMAGE_DETECT";
export const IS_LIVE_API_DETECTOR_VIOLENCE = "IS_LIVE_API_DETECTOR_VIOLENCE";

const back_url = process.env.REACT_APP_BACK_URL;
export function sendImageToDetect(file) {
  const url = back_url + "/?download=True";
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

export function isLiveAPiDetectorViolence() {
  const url = back_url;
  const request = fetch(url, {
    method: "GET",
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
          dispatch({
            type: SEND_IMAGE_DETECT,
            payload: { isLive: false, text: "no live" },
          });
          reject(error);
        });
    });
  };
}
