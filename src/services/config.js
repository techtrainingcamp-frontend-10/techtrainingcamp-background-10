const devBaseURL = "https://qcmt57.fn.thelarkcloud.com";
const proBaseURL = "https://qcmt57.fn.thelarkcloud.com";
export const BASE_URL = process.env.NODE_ENV === 'development' ? devBaseURL: proBaseURL;

export const TIMEOUT = 5000;