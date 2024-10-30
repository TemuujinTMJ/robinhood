import axios from "axios";
// import { alert, alert, alert } from 'components/atoms';
import Cookies from "js-cookie";

export const token = Cookies.get("accessToken") || null;

const axiosConfig = {
  baseURL: "https://robinhood.mn/api/",
  timeout: 30000,
};

// const axiosMediaConfig = {
//   baseURL: config.MEDIA,
//   timeout: 30000,
// };

export const api = axios.create(axiosConfig);
// export const apiMedia = axios.create(axiosMediaConfig);

export const getSubDomain = () => {
  let url = window.location.host;
  url = url.replace("https://www.", "");
  url = url.replace("http://www.", "");
  url = url.replace("https://", "");
  url = url.replace("http://", "");
  const temp = url.split("/");
  if (temp.length > 0) {
    const temp2 = temp[0].split(".");
    if (temp2.length > 2) {
      return temp2[0];
    }
    return "";
  }
  return "";
};

api.interceptors.response.use(
  function (response) {
    const data = response || {};
    if (data?.data?.success && data?.data?.sucmod && data?.data?.msg) {
      alert(data?.data?.msg);
    }
    if (!data?.data?.success && data?.data?.msg) {
      alert(data?.data?.msg);
    }
    // console.log(data);
    return data;
  },
  function (error) {
    if (error?.response?.status === 404) {
      const roleName = (window.location.pathname?.split("/") || [])[2] || null;
      if (roleName) {
        window.location.assign(`/school/${roleName}/notFound/`);
      } else {
        window.location.assign("/school/");
      }
    }
    if (error?.response?.status === 401) {
      window.location.assign("/");
    }
    alert(error);

    return Promise.reject(error);
  }
);

// apiMedia.interceptors.response.use(
//   function (response) {
//     const data = response || {};
//     if (data?.data?.success && data?.data?.sucmod && data?.data?.msg) {
//       alert(data?.data?.msg);
//     }
//     if (!data?.data?.success && data?.data?.msg) {
//       alert(data?.data?.msg);
//     }
//     return data;
//   },
//   function (error) {
//     alert(error);

//     return Promise.reject(error);
//   }
// );
axios.interceptors.request.use(
  (config) => {
    config.headers["Authorization"] = `Bearer ${localStorage.getItem(
      "access_token"
    )}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
// apiMedia.interceptors.request.use(
//   async (conf) => {
//     conf.params = {
//       ...conf.params,
//       host: getSubDomain(),
//     };
//     conf.headers = {
//       Authorization: `${token}`,
//       // Accept: 'application/json',
//       "Content-Type": "application/json",
//     };
//     return conf;
//   },
//   (error) => {
//     Promise.reject(error);
//   }
// );
