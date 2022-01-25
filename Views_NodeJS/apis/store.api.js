const { axiosJava, axiosCSharp } = require('./axiosClient');

const BASE_URL = '/store';

const storeApi = {
  getProductByStore: (storeId, page, pageSize) => {
    return axiosCSharp.get(
      `common/product/store?storeId=${storeId}&page=${page}&pageSize=${pageSize}`
    );
  },

  getProductDetailById: (productId) => {
    return axiosCSharp.get(`common/product?productId=${productId}`);
  },

  getProductImageById: (productId) => {
    return axiosCSharp.get(`common/Product/thumbnail?productId=${productId}`);
  },

  getCurrentStoreId: (username) => {
    return axiosCSharp.get(`common/store/getId?username='${username}'`);
  },

  addProduct: (data) => {
    return axiosCSharp.post(`${BASE_URL}/product/add`, data);
  },
  getStoreByUsername: (username) => {
    return axiosCSharp.get(
      `${BASE_URL}/self/info-by-username?username=${username}`
    );
  },

  getAccount: (username) => {
    return axiosCSharp.get(`${BASE_URL}/self/account?username=${username}`);
  },

  getBasicInfo: (userId) => {
    return axiosCSharp.get(`${BASE_URL}/self/info?userId=${userId}`);
  },

  getOrders: (storeId) => {
    return axiosCSharp.get(`${BASE_URL}/order/history/${storeId}`);
  },

  getFeedback: () => {
    return axiosCSharp.get(`/common/feedback/store`);
  },

  postFeedback: (feedback) => {
    return axiosCSharp.post(`/common/feedback/store`, feedback);
  },
};

module.exports = storeApi;
