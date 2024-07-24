export const API_BASE_URL = "http://192.168.1.37:9090"
  // process.env.REACT_APP_API_BASE_URL || "http://192.168.8.113:9090";

export const users = "/api/users";
export const Contacts = "/api/contact/contact-us";
export const Company = "/api/settings";
export const Banks = "/api/banks/bank-account-details";


export const Categories = `${API_BASE_URL}/api/category/get-main-categories`
export const getAllCategories = `${API_BASE_URL}/api/category/get-all-categories`
export const getProductsByCategories = `${API_BASE_URL}/api/products/get-products-by-category`
export const getAllProducts = `${API_BASE_URL}/api/products/get-all-products`
export const getProductById = `${API_BASE_URL}/api/products/get-products-by-category`
export const getProductByBothCategory = `${API_BASE_URL}/api/products/get-products-by-both-category`
export const getServices = `${API_BASE_URL}/api/service/get-services`
export const getSettings = `${API_BASE_URL}/api/settings/settings`
