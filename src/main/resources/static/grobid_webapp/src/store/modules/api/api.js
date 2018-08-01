/* eslint-disable */
import axios from 'axios'
import qs from 'qs'
let domain = ''
export const getDomain = () => {
  return domain
}
export const setDomain = ($domain) => {
  domain = $domain
}
export const request = (method, url, body, queryParameters, form, config) => {
  method = method.toLowerCase()
  let keys = Object.keys(queryParameters)
  let queryUrl = url
  if (keys.length > 0) {
    queryUrl = url + '?' + qs.stringify(queryParameters)
  }
  // let queryUrl = url+(keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
  if (body) {
    return axios[method](queryUrl, body, config)
  } else if (method === 'get') {
    return axios[method](queryUrl, {
      params: form
    }, config)
  } else {
    return axios[method](queryUrl, qs.stringify(form), config)
  }
}
/*==========================================================
 *
 ==========================================================*/
/**
 * API root. Returns JSON Object of Metadata and available Entities
 * request: get
 * url: getURL
 * method: get_TYPE
 * raw_url: get_RAW_URL
 */
export const get = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const get_RAW_URL = function() {
  return '/'
}
export const get_TYPE = function() {
  return 'get'
}
export const getURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Login to the application
 * request: postLogin
 * url: postLoginURL
 * method: postLogin_TYPE
 * raw_url: postLogin_RAW_URL
 * @param user - Login Data.
 */
export const postLogin = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/login'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['user'] !== undefined) {
    body = parameters['user']
  }
  if (parameters['user'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: user'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const postLogin_RAW_URL = function() {
  return '/login'
}
export const postLogin_TYPE = function() {
  return 'post'
}
export const postLoginURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/login'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Logout of the application
 * request: getLogout
 * url: getLogoutURL
 * method: getLogout_TYPE
 * raw_url: getLogout_RAW_URL
 */
export const getLogout = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/logout'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const getLogout_RAW_URL = function() {
  return '/logout'
}
export const getLogout_TYPE = function() {
  return 'get'
}
export const getLogoutURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/logout'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * New User Registration
 * request: postRegister
 * url: postRegisterURL
 * method: postRegister_TYPE
 * raw_url: postRegister_RAW_URL
 * @param user - Login Data.
 */
export const postRegister = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/register'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['user'] !== undefined) {
    body = parameters['user']
  }
  if (parameters['user'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: user'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const postRegister_RAW_URL = function() {
  return '/register'
}
export const postRegister_TYPE = function() {
  return 'post'
}
export const postRegisterURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/register'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Serves an Entities JSONSchema by Name
 * request: getJsonschemaByName
 * url: getJsonschemaByNameURL
 * method: getJsonschemaByName_TYPE
 * raw_url: getJsonschemaByName_RAW_URL
 * @param name - Schema Name.
 */
export const getJsonschemaByName = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/jsonschema/{name}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{name}', `${parameters['name']}`)
  if (parameters['name'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: name'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const getJsonschemaByName_RAW_URL = function() {
  return '/jsonschema/{name}'
}
export const getJsonschemaByName_TYPE = function() {
  return 'get'
}
export const getJsonschemaByNameURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/jsonschema/{name}'
  path = path.replace('{name}', `${parameters['name']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Retrieves Image and returns corresponding AssetRef
 * request: postUpload
 * url: postUploadURL
 * method: postUpload_TYPE
 * raw_url: postUpload_RAW_URL
 * @param image - File Object from upload.
 */
export const postUpload = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/upload/'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['image'] !== undefined) {
    form['image'] = parameters['image']
  }
  if (parameters['image'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: image'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const postUpload_RAW_URL = function() {
  return '/upload/'
}
export const postUpload_TYPE = function() {
  return 'post'
}
export const postUploadURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/upload/'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Returns the number of documents of type assetref
 * request: getAssetrefCount
 * url: getAssetrefCountURL
 * method: getAssetrefCount_TYPE
 * raw_url: getAssetrefCount_RAW_URL
 */
export const getAssetrefCount = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/assetref/count'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const getAssetrefCount_RAW_URL = function() {
  return '/assetref/count'
}
export const getAssetrefCount_TYPE = function() {
  return 'get'
}
export const getAssetrefCountURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/assetref/count'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Returns a List of assetrefs
 * request: getAssetref
 * url: getAssetrefURL
 * method: getAssetref_TYPE
 * raw_url: getAssetref_RAW_URL
 * @param sort - Key Name to Sort by, preceded by '-' for descending, default: _id
 * @param skip - Number of records to skip from start, default: 0
 * @param limit - Number of records to return, default: 10
 * @param query - MongoDB Query as a well formed JSON String, ie {"name":"Bob"}
 * @param populate - Path to a MongoDB reference to populate, ie [{"path":"customer"},{"path":"products"}]
 */
export const getAssetref = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/assetref'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['sort'] !== undefined) {
    queryParameters['sort'] = parameters['sort']
  }
  if (parameters['skip'] !== undefined) {
    queryParameters['skip'] = parameters['skip']
  }
  if (parameters['limit'] !== undefined) {
    queryParameters['limit'] = parameters['limit']
  }
  if (parameters['query'] !== undefined) {
    queryParameters['query'] = parameters['query']
  }
  if (parameters['populate'] !== undefined) {
    queryParameters['populate'] = parameters['populate']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const getAssetref_RAW_URL = function() {
  return '/assetref'
}
export const getAssetref_TYPE = function() {
  return 'get'
}
export const getAssetrefURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/assetref'
  if (parameters['sort'] !== undefined) {
    queryParameters['sort'] = parameters['sort']
  }
  if (parameters['skip'] !== undefined) {
    queryParameters['skip'] = parameters['skip']
  }
  if (parameters['limit'] !== undefined) {
    queryParameters['limit'] = parameters['limit']
  }
  if (parameters['query'] !== undefined) {
    queryParameters['query'] = parameters['query']
  }
  if (parameters['populate'] !== undefined) {
    queryParameters['populate'] = parameters['populate']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Creates a new instance of assetref
 * request: postAssetref
 * url: postAssetrefURL
 * method: postAssetref_TYPE
 * raw_url: postAssetref_RAW_URL
 * @param assetref -
 */
export const postAssetref = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/assetref'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['assetref'] !== undefined) {
    body = parameters['assetref']
  }
  if (parameters['assetref'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: assetref'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const postAssetref_RAW_URL = function() {
  return '/assetref'
}
export const postAssetref_TYPE = function() {
  return 'post'
}
export const postAssetrefURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/assetref'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Deletes the entire contents of collection assetref
 * request: deleteAssetref
 * url: deleteAssetrefURL
 * method: deleteAssetref_TYPE
 * raw_url: deleteAssetref_RAW_URL
 */
export const deleteAssetref = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/assetref'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('delete', domain + path, body, queryParameters, form, config)
}
export const deleteAssetref_RAW_URL = function() {
  return '/assetref'
}
export const deleteAssetref_TYPE = function() {
  return 'delete'
}
export const deleteAssetrefURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/assetref'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Returns a List of assetrefs
 * request: getAssetrefById
 * url: getAssetrefByIdURL
 * method: getAssetrefById_TYPE
 * raw_url: getAssetrefById_RAW_URL
 * @param id - MongoDB document _id
 */
export const getAssetrefById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/assetref/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const getAssetrefById_RAW_URL = function() {
  return '/assetref/{id}'
}
export const getAssetrefById_TYPE = function() {
  return 'get'
}
export const getAssetrefByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/assetref/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Updates the document with the given ID
 * request: postAssetrefById
 * url: postAssetrefByIdURL
 * method: postAssetrefById_TYPE
 * raw_url: postAssetrefById_RAW_URL
 * @param id - MongoDB document _id
 * @param assetref -
 */
export const postAssetrefById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/assetref/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters['assetref'] !== undefined) {
    body = parameters['assetref']
  }
  if (parameters['assetref'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: assetref'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const postAssetrefById_RAW_URL = function() {
  return '/assetref/{id}'
}
export const postAssetrefById_TYPE = function() {
  return 'post'
}
export const postAssetrefByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/assetref/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Deletes the document with the given ID
 * request: deleteAssetrefById
 * url: deleteAssetrefByIdURL
 * method: deleteAssetrefById_TYPE
 * raw_url: deleteAssetrefById_RAW_URL
 * @param id - MongoDB document _id
 */
export const deleteAssetrefById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/assetref/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('delete', domain + path, body, queryParameters, form, config)
}
export const deleteAssetrefById_RAW_URL = function() {
  return '/assetref/{id}'
}
export const deleteAssetrefById_TYPE = function() {
  return 'delete'
}
export const deleteAssetrefByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/assetref/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Returns the number of documents of type authrec
 * request: getAuthrecCount
 * url: getAuthrecCountURL
 * method: getAuthrecCount_TYPE
 * raw_url: getAuthrecCount_RAW_URL
 */
export const getAuthrecCount = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/authrec/count'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const getAuthrecCount_RAW_URL = function() {
  return '/authrec/count'
}
export const getAuthrecCount_TYPE = function() {
  return 'get'
}
export const getAuthrecCountURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/authrec/count'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Returns a List of authrecs
 * request: getAuthrec
 * url: getAuthrecURL
 * method: getAuthrec_TYPE
 * raw_url: getAuthrec_RAW_URL
 * @param sort - Key Name to Sort by, preceded by '-' for descending, default: _id
 * @param skip - Number of records to skip from start, default: 0
 * @param limit - Number of records to return, default: 10
 * @param query - MongoDB Query as a well formed JSON String, ie {"name":"Bob"}
 * @param populate - Path to a MongoDB reference to populate, ie [{"path":"customer"},{"path":"products"}]
 */
export const getAuthrec = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/authrec'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['sort'] !== undefined) {
    queryParameters['sort'] = parameters['sort']
  }
  if (parameters['skip'] !== undefined) {
    queryParameters['skip'] = parameters['skip']
  }
  if (parameters['limit'] !== undefined) {
    queryParameters['limit'] = parameters['limit']
  }
  if (parameters['query'] !== undefined) {
    queryParameters['query'] = parameters['query']
  }
  if (parameters['populate'] !== undefined) {
    queryParameters['populate'] = parameters['populate']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const getAuthrec_RAW_URL = function() {
  return '/authrec'
}
export const getAuthrec_TYPE = function() {
  return 'get'
}
export const getAuthrecURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/authrec'
  if (parameters['sort'] !== undefined) {
    queryParameters['sort'] = parameters['sort']
  }
  if (parameters['skip'] !== undefined) {
    queryParameters['skip'] = parameters['skip']
  }
  if (parameters['limit'] !== undefined) {
    queryParameters['limit'] = parameters['limit']
  }
  if (parameters['query'] !== undefined) {
    queryParameters['query'] = parameters['query']
  }
  if (parameters['populate'] !== undefined) {
    queryParameters['populate'] = parameters['populate']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Creates a new instance of authrec
 * request: postAuthrec
 * url: postAuthrecURL
 * method: postAuthrec_TYPE
 * raw_url: postAuthrec_RAW_URL
 * @param authrec -
 */
export const postAuthrec = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/authrec'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['authrec'] !== undefined) {
    body = parameters['authrec']
  }
  if (parameters['authrec'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: authrec'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const postAuthrec_RAW_URL = function() {
  return '/authrec'
}
export const postAuthrec_TYPE = function() {
  return 'post'
}
export const postAuthrecURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/authrec'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Deletes the entire contents of collection authrec
 * request: deleteAuthrec
 * url: deleteAuthrecURL
 * method: deleteAuthrec_TYPE
 * raw_url: deleteAuthrec_RAW_URL
 */
export const deleteAuthrec = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/authrec'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('delete', domain + path, body, queryParameters, form, config)
}
export const deleteAuthrec_RAW_URL = function() {
  return '/authrec'
}
export const deleteAuthrec_TYPE = function() {
  return 'delete'
}
export const deleteAuthrecURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/authrec'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Returns a List of authrecs
 * request: getAuthrecById
 * url: getAuthrecByIdURL
 * method: getAuthrecById_TYPE
 * raw_url: getAuthrecById_RAW_URL
 * @param id - MongoDB document _id
 */
export const getAuthrecById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/authrec/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const getAuthrecById_RAW_URL = function() {
  return '/authrec/{id}'
}
export const getAuthrecById_TYPE = function() {
  return 'get'
}
export const getAuthrecByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/authrec/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Updates the document with the given ID
 * request: postAuthrecById
 * url: postAuthrecByIdURL
 * method: postAuthrecById_TYPE
 * raw_url: postAuthrecById_RAW_URL
 * @param id - MongoDB document _id
 * @param authrec -
 */
export const postAuthrecById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/authrec/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters['authrec'] !== undefined) {
    body = parameters['authrec']
  }
  if (parameters['authrec'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: authrec'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const postAuthrecById_RAW_URL = function() {
  return '/authrec/{id}'
}
export const postAuthrecById_TYPE = function() {
  return 'post'
}
export const postAuthrecByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/authrec/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Deletes the document with the given ID
 * request: deleteAuthrecById
 * url: deleteAuthrecByIdURL
 * method: deleteAuthrecById_TYPE
 * raw_url: deleteAuthrecById_RAW_URL
 * @param id - MongoDB document _id
 */
export const deleteAuthrecById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/authrec/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('delete', domain + path, body, queryParameters, form, config)
}
export const deleteAuthrecById_RAW_URL = function() {
  return '/authrec/{id}'
}
export const deleteAuthrecById_TYPE = function() {
  return 'delete'
}
export const deleteAuthrecByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/authrec/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Returns the number of documents of type bibref
 * request: getBibrefCount
 * url: getBibrefCountURL
 * method: getBibrefCount_TYPE
 * raw_url: getBibrefCount_RAW_URL
 */
export const getBibrefCount = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/bibref/count'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const getBibrefCount_RAW_URL = function() {
  return '/bibref/count'
}
export const getBibrefCount_TYPE = function() {
  return 'get'
}
export const getBibrefCountURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/bibref/count'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Returns a List of bibrefs
 * request: getBibref
 * url: getBibrefURL
 * method: getBibref_TYPE
 * raw_url: getBibref_RAW_URL
 * @param sort - Key Name to Sort by, preceded by '-' for descending, default: _id
 * @param skip - Number of records to skip from start, default: 0
 * @param limit - Number of records to return, default: 10
 * @param query - MongoDB Query as a well formed JSON String, ie {"name":"Bob"}
 * @param populate - Path to a MongoDB reference to populate, ie [{"path":"customer"},{"path":"products"}]
 */
export const getBibref = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/bibref'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['sort'] !== undefined) {
    queryParameters['sort'] = parameters['sort']
  }
  if (parameters['skip'] !== undefined) {
    queryParameters['skip'] = parameters['skip']
  }
  if (parameters['limit'] !== undefined) {
    queryParameters['limit'] = parameters['limit']
  }
  if (parameters['query'] !== undefined) {
    queryParameters['query'] = parameters['query']
  }
  if (parameters['populate'] !== undefined) {
    queryParameters['populate'] = parameters['populate']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const getBibref_RAW_URL = function() {
  return '/bibref'
}
export const getBibref_TYPE = function() {
  return 'get'
}
export const getBibrefURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/bibref'
  if (parameters['sort'] !== undefined) {
    queryParameters['sort'] = parameters['sort']
  }
  if (parameters['skip'] !== undefined) {
    queryParameters['skip'] = parameters['skip']
  }
  if (parameters['limit'] !== undefined) {
    queryParameters['limit'] = parameters['limit']
  }
  if (parameters['query'] !== undefined) {
    queryParameters['query'] = parameters['query']
  }
  if (parameters['populate'] !== undefined) {
    queryParameters['populate'] = parameters['populate']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Creates a new instance of bibref
 * request: postBibref
 * url: postBibrefURL
 * method: postBibref_TYPE
 * raw_url: postBibref_RAW_URL
 * @param bibref -
 */
export const postBibref = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/bibref'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['bibref'] !== undefined) {
    body = parameters['bibref']
  }
  if (parameters['bibref'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: bibref'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const postBibref_RAW_URL = function() {
  return '/bibref'
}
export const postBibref_TYPE = function() {
  return 'post'
}
export const postBibrefURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/bibref'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Deletes the entire contents of collection bibref
 * request: deleteBibref
 * url: deleteBibrefURL
 * method: deleteBibref_TYPE
 * raw_url: deleteBibref_RAW_URL
 */
export const deleteBibref = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/bibref'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('delete', domain + path, body, queryParameters, form, config)
}
export const deleteBibref_RAW_URL = function() {
  return '/bibref'
}
export const deleteBibref_TYPE = function() {
  return 'delete'
}
export const deleteBibrefURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/bibref'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Returns a List of bibrefs
 * request: getBibrefById
 * url: getBibrefByIdURL
 * method: getBibrefById_TYPE
 * raw_url: getBibrefById_RAW_URL
 * @param id - MongoDB document _id
 */
export const getBibrefById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/bibref/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const getBibrefById_RAW_URL = function() {
  return '/bibref/{id}'
}
export const getBibrefById_TYPE = function() {
  return 'get'
}
export const getBibrefByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/bibref/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Updates the document with the given ID
 * request: postBibrefById
 * url: postBibrefByIdURL
 * method: postBibrefById_TYPE
 * raw_url: postBibrefById_RAW_URL
 * @param id - MongoDB document _id
 * @param bibref -
 */
export const postBibrefById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/bibref/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters['bibref'] !== undefined) {
    body = parameters['bibref']
  }
  if (parameters['bibref'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: bibref'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const postBibrefById_RAW_URL = function() {
  return '/bibref/{id}'
}
export const postBibrefById_TYPE = function() {
  return 'post'
}
export const postBibrefByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/bibref/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Deletes the document with the given ID
 * request: deleteBibrefById
 * url: deleteBibrefByIdURL
 * method: deleteBibrefById_TYPE
 * raw_url: deleteBibrefById_RAW_URL
 * @param id - MongoDB document _id
 */
export const deleteBibrefById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/bibref/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('delete', domain + path, body, queryParameters, form, config)
}
export const deleteBibrefById_RAW_URL = function() {
  return '/bibref/{id}'
}
export const deleteBibrefById_TYPE = function() {
  return 'delete'
}
export const deleteBibrefByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/bibref/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Returns the number of documents of type collect
 * request: getCollectCount
 * url: getCollectCountURL
 * method: getCollectCount_TYPE
 * raw_url: getCollectCount_RAW_URL
 */
export const getCollectCount = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/collect/count'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const getCollectCount_RAW_URL = function() {
  return '/collect/count'
}
export const getCollectCount_TYPE = function() {
  return 'get'
}
export const getCollectCountURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/collect/count'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Returns a List of collects
 * request: getCollect
 * url: getCollectURL
 * method: getCollect_TYPE
 * raw_url: getCollect_RAW_URL
 * @param sort - Key Name to Sort by, preceded by '-' for descending, default: _id
 * @param skip - Number of records to skip from start, default: 0
 * @param limit - Number of records to return, default: 10
 * @param query - MongoDB Query as a well formed JSON String, ie {"name":"Bob"}
 * @param populate - Path to a MongoDB reference to populate, ie [{"path":"customer"},{"path":"products"}]
 */
export const getCollect = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/collect'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['sort'] !== undefined) {
    queryParameters['sort'] = parameters['sort']
  }
  if (parameters['skip'] !== undefined) {
    queryParameters['skip'] = parameters['skip']
  }
  if (parameters['limit'] !== undefined) {
    queryParameters['limit'] = parameters['limit']
  }
  if (parameters['query'] !== undefined) {
    queryParameters['query'] = parameters['query']
  }
  if (parameters['populate'] !== undefined) {
    queryParameters['populate'] = parameters['populate']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const getCollect_RAW_URL = function() {
  return '/collect'
}
export const getCollect_TYPE = function() {
  return 'get'
}
export const getCollectURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/collect'
  if (parameters['sort'] !== undefined) {
    queryParameters['sort'] = parameters['sort']
  }
  if (parameters['skip'] !== undefined) {
    queryParameters['skip'] = parameters['skip']
  }
  if (parameters['limit'] !== undefined) {
    queryParameters['limit'] = parameters['limit']
  }
  if (parameters['query'] !== undefined) {
    queryParameters['query'] = parameters['query']
  }
  if (parameters['populate'] !== undefined) {
    queryParameters['populate'] = parameters['populate']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Creates a new instance of collect
 * request: postCollect
 * url: postCollectURL
 * method: postCollect_TYPE
 * raw_url: postCollect_RAW_URL
 * @param collect -
 */
export const postCollect = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/collect'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['collect'] !== undefined) {
    body = parameters['collect']
  }
  if (parameters['collect'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: collect'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const postCollect_RAW_URL = function() {
  return '/collect'
}
export const postCollect_TYPE = function() {
  return 'post'
}
export const postCollectURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/collect'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Deletes the entire contents of collection collect
 * request: deleteCollect
 * url: deleteCollectURL
 * method: deleteCollect_TYPE
 * raw_url: deleteCollect_RAW_URL
 */
export const deleteCollect = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/collect'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('delete', domain + path, body, queryParameters, form, config)
}
export const deleteCollect_RAW_URL = function() {
  return '/collect'
}
export const deleteCollect_TYPE = function() {
  return 'delete'
}
export const deleteCollectURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/collect'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Returns a List of collects
 * request: getCollectById
 * url: getCollectByIdURL
 * method: getCollectById_TYPE
 * raw_url: getCollectById_RAW_URL
 * @param id - MongoDB document _id
 */
export const getCollectById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/collect/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const getCollectById_RAW_URL = function() {
  return '/collect/{id}'
}
export const getCollectById_TYPE = function() {
  return 'get'
}
export const getCollectByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/collect/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Updates the document with the given ID
 * request: postCollectById
 * url: postCollectByIdURL
 * method: postCollectById_TYPE
 * raw_url: postCollectById_RAW_URL
 * @param id - MongoDB document _id
 * @param collect -
 */
export const postCollectById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/collect/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters['collect'] !== undefined) {
    body = parameters['collect']
  }
  if (parameters['collect'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: collect'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const postCollectById_RAW_URL = function() {
  return '/collect/{id}'
}
export const postCollectById_TYPE = function() {
  return 'post'
}
export const postCollectByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/collect/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Deletes the document with the given ID
 * request: deleteCollectById
 * url: deleteCollectByIdURL
 * method: deleteCollectById_TYPE
 * raw_url: deleteCollectById_RAW_URL
 * @param id - MongoDB document _id
 */
export const deleteCollectById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/collect/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('delete', domain + path, body, queryParameters, form, config)
}
export const deleteCollectById_RAW_URL = function() {
  return '/collect/{id}'
}
export const deleteCollectById_TYPE = function() {
  return 'delete'
}
export const deleteCollectByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/collect/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Returns the number of documents of type corporation
 * request: getCorporationCount
 * url: getCorporationCountURL
 * method: getCorporationCount_TYPE
 * raw_url: getCorporationCount_RAW_URL
 */
export const getCorporationCount = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/corporation/count'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const getCorporationCount_RAW_URL = function() {
  return '/corporation/count'
}
export const getCorporationCount_TYPE = function() {
  return 'get'
}
export const getCorporationCountURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/corporation/count'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Returns a List of corporations
 * request: getCorporation
 * url: getCorporationURL
 * method: getCorporation_TYPE
 * raw_url: getCorporation_RAW_URL
 * @param sort - Key Name to Sort by, preceded by '-' for descending, default: _id
 * @param skip - Number of records to skip from start, default: 0
 * @param limit - Number of records to return, default: 10
 * @param query - MongoDB Query as a well formed JSON String, ie {"name":"Bob"}
 * @param populate - Path to a MongoDB reference to populate, ie [{"path":"customer"},{"path":"products"}]
 */
export const getCorporation = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/corporation'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['sort'] !== undefined) {
    queryParameters['sort'] = parameters['sort']
  }
  if (parameters['skip'] !== undefined) {
    queryParameters['skip'] = parameters['skip']
  }
  if (parameters['limit'] !== undefined) {
    queryParameters['limit'] = parameters['limit']
  }
  if (parameters['query'] !== undefined) {
    queryParameters['query'] = parameters['query']
  }
  if (parameters['populate'] !== undefined) {
    queryParameters['populate'] = parameters['populate']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const getCorporation_RAW_URL = function() {
  return '/corporation'
}
export const getCorporation_TYPE = function() {
  return 'get'
}
export const getCorporationURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/corporation'
  if (parameters['sort'] !== undefined) {
    queryParameters['sort'] = parameters['sort']
  }
  if (parameters['skip'] !== undefined) {
    queryParameters['skip'] = parameters['skip']
  }
  if (parameters['limit'] !== undefined) {
    queryParameters['limit'] = parameters['limit']
  }
  if (parameters['query'] !== undefined) {
    queryParameters['query'] = parameters['query']
  }
  if (parameters['populate'] !== undefined) {
    queryParameters['populate'] = parameters['populate']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Creates a new instance of corporation
 * request: postCorporation
 * url: postCorporationURL
 * method: postCorporation_TYPE
 * raw_url: postCorporation_RAW_URL
 * @param corporation -
 */
export const postCorporation = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/corporation'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['corporation'] !== undefined) {
    body = parameters['corporation']
  }
  if (parameters['corporation'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: corporation'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const postCorporation_RAW_URL = function() {
  return '/corporation'
}
export const postCorporation_TYPE = function() {
  return 'post'
}
export const postCorporationURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/corporation'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Deletes the entire contents of collection corporation
 * request: deleteCorporation
 * url: deleteCorporationURL
 * method: deleteCorporation_TYPE
 * raw_url: deleteCorporation_RAW_URL
 */
export const deleteCorporation = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/corporation'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('delete', domain + path, body, queryParameters, form, config)
}
export const deleteCorporation_RAW_URL = function() {
  return '/corporation'
}
export const deleteCorporation_TYPE = function() {
  return 'delete'
}
export const deleteCorporationURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/corporation'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Returns a List of corporations
 * request: getCorporationById
 * url: getCorporationByIdURL
 * method: getCorporationById_TYPE
 * raw_url: getCorporationById_RAW_URL
 * @param id - MongoDB document _id
 */
export const getCorporationById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/corporation/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const getCorporationById_RAW_URL = function() {
  return '/corporation/{id}'
}
export const getCorporationById_TYPE = function() {
  return 'get'
}
export const getCorporationByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/corporation/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Updates the document with the given ID
 * request: postCorporationById
 * url: postCorporationByIdURL
 * method: postCorporationById_TYPE
 * raw_url: postCorporationById_RAW_URL
 * @param id - MongoDB document _id
 * @param corporation -
 */
export const postCorporationById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/corporation/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters['corporation'] !== undefined) {
    body = parameters['corporation']
  }
  if (parameters['corporation'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: corporation'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const postCorporationById_RAW_URL = function() {
  return '/corporation/{id}'
}
export const postCorporationById_TYPE = function() {
  return 'post'
}
export const postCorporationByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/corporation/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Deletes the document with the given ID
 * request: deleteCorporationById
 * url: deleteCorporationByIdURL
 * method: deleteCorporationById_TYPE
 * raw_url: deleteCorporationById_RAW_URL
 * @param id - MongoDB document _id
 */
export const deleteCorporationById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/corporation/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('delete', domain + path, body, queryParameters, form, config)
}
export const deleteCorporationById_RAW_URL = function() {
  return '/corporation/{id}'
}
export const deleteCorporationById_TYPE = function() {
  return 'delete'
}
export const deleteCorporationByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/corporation/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Returns the number of documents of type currency
 * request: getCurrencyCount
 * url: getCurrencyCountURL
 * method: getCurrencyCount_TYPE
 * raw_url: getCurrencyCount_RAW_URL
 */
export const getCurrencyCount = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/currency/count'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const getCurrencyCount_RAW_URL = function() {
  return '/currency/count'
}
export const getCurrencyCount_TYPE = function() {
  return 'get'
}
export const getCurrencyCountURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/currency/count'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Returns a List of currencys
 * request: getCurrency
 * url: getCurrencyURL
 * method: getCurrency_TYPE
 * raw_url: getCurrency_RAW_URL
 * @param sort - Key Name to Sort by, preceded by '-' for descending, default: _id
 * @param skip - Number of records to skip from start, default: 0
 * @param limit - Number of records to return, default: 10
 * @param query - MongoDB Query as a well formed JSON String, ie {"name":"Bob"}
 * @param populate - Path to a MongoDB reference to populate, ie [{"path":"customer"},{"path":"products"}]
 */
export const getCurrency = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/currency'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['sort'] !== undefined) {
    queryParameters['sort'] = parameters['sort']
  }
  if (parameters['skip'] !== undefined) {
    queryParameters['skip'] = parameters['skip']
  }
  if (parameters['limit'] !== undefined) {
    queryParameters['limit'] = parameters['limit']
  }
  if (parameters['query'] !== undefined) {
    queryParameters['query'] = parameters['query']
  }
  if (parameters['populate'] !== undefined) {
    queryParameters['populate'] = parameters['populate']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const getCurrency_RAW_URL = function() {
  return '/currency'
}
export const getCurrency_TYPE = function() {
  return 'get'
}
export const getCurrencyURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/currency'
  if (parameters['sort'] !== undefined) {
    queryParameters['sort'] = parameters['sort']
  }
  if (parameters['skip'] !== undefined) {
    queryParameters['skip'] = parameters['skip']
  }
  if (parameters['limit'] !== undefined) {
    queryParameters['limit'] = parameters['limit']
  }
  if (parameters['query'] !== undefined) {
    queryParameters['query'] = parameters['query']
  }
  if (parameters['populate'] !== undefined) {
    queryParameters['populate'] = parameters['populate']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Creates a new instance of currency
 * request: postCurrency
 * url: postCurrencyURL
 * method: postCurrency_TYPE
 * raw_url: postCurrency_RAW_URL
 * @param currency -
 */
export const postCurrency = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/currency'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['currency'] !== undefined) {
    body = parameters['currency']
  }
  if (parameters['currency'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: currency'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const postCurrency_RAW_URL = function() {
  return '/currency'
}
export const postCurrency_TYPE = function() {
  return 'post'
}
export const postCurrencyURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/currency'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Deletes the entire contents of collection currency
 * request: deleteCurrency
 * url: deleteCurrencyURL
 * method: deleteCurrency_TYPE
 * raw_url: deleteCurrency_RAW_URL
 */
export const deleteCurrency = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/currency'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('delete', domain + path, body, queryParameters, form, config)
}
export const deleteCurrency_RAW_URL = function() {
  return '/currency'
}
export const deleteCurrency_TYPE = function() {
  return 'delete'
}
export const deleteCurrencyURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/currency'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Returns a List of currencys
 * request: getCurrencyById
 * url: getCurrencyByIdURL
 * method: getCurrencyById_TYPE
 * raw_url: getCurrencyById_RAW_URL
 * @param id - MongoDB document _id
 */
export const getCurrencyById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/currency/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const getCurrencyById_RAW_URL = function() {
  return '/currency/{id}'
}
export const getCurrencyById_TYPE = function() {
  return 'get'
}
export const getCurrencyByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/currency/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Updates the document with the given ID
 * request: postCurrencyById
 * url: postCurrencyByIdURL
 * method: postCurrencyById_TYPE
 * raw_url: postCurrencyById_RAW_URL
 * @param id - MongoDB document _id
 * @param currency -
 */
export const postCurrencyById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/currency/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters['currency'] !== undefined) {
    body = parameters['currency']
  }
  if (parameters['currency'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: currency'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const postCurrencyById_RAW_URL = function() {
  return '/currency/{id}'
}
export const postCurrencyById_TYPE = function() {
  return 'post'
}
export const postCurrencyByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/currency/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Deletes the document with the given ID
 * request: deleteCurrencyById
 * url: deleteCurrencyByIdURL
 * method: deleteCurrencyById_TYPE
 * raw_url: deleteCurrencyById_RAW_URL
 * @param id - MongoDB document _id
 */
export const deleteCurrencyById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/currency/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('delete', domain + path, body, queryParameters, form, config)
}
export const deleteCurrencyById_RAW_URL = function() {
  return '/currency/{id}'
}
export const deleteCurrencyById_TYPE = function() {
  return 'delete'
}
export const deleteCurrencyByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/currency/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Returns the number of documents of type descriptor
 * request: getDescriptorCount
 * url: getDescriptorCountURL
 * method: getDescriptorCount_TYPE
 * raw_url: getDescriptorCount_RAW_URL
 */
export const getDescriptorCount = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/descriptor/count'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const getDescriptorCount_RAW_URL = function() {
  return '/descriptor/count'
}
export const getDescriptorCount_TYPE = function() {
  return 'get'
}
export const getDescriptorCountURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/descriptor/count'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Returns a List of descriptors
 * request: getDescriptor
 * url: getDescriptorURL
 * method: getDescriptor_TYPE
 * raw_url: getDescriptor_RAW_URL
 * @param sort - Key Name to Sort by, preceded by '-' for descending, default: _id
 * @param skip - Number of records to skip from start, default: 0
 * @param limit - Number of records to return, default: 10
 * @param query - MongoDB Query as a well formed JSON String, ie {"name":"Bob"}
 * @param populate - Path to a MongoDB reference to populate, ie [{"path":"customer"},{"path":"products"}]
 */
export const getDescriptor = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/descriptor'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['sort'] !== undefined) {
    queryParameters['sort'] = parameters['sort']
  }
  if (parameters['skip'] !== undefined) {
    queryParameters['skip'] = parameters['skip']
  }
  if (parameters['limit'] !== undefined) {
    queryParameters['limit'] = parameters['limit']
  }
  if (parameters['query'] !== undefined) {
    queryParameters['query'] = parameters['query']
  }
  if (parameters['populate'] !== undefined) {
    queryParameters['populate'] = parameters['populate']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const getDescriptor_RAW_URL = function() {
  return '/descriptor'
}
export const getDescriptor_TYPE = function() {
  return 'get'
}
export const getDescriptorURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/descriptor'
  if (parameters['sort'] !== undefined) {
    queryParameters['sort'] = parameters['sort']
  }
  if (parameters['skip'] !== undefined) {
    queryParameters['skip'] = parameters['skip']
  }
  if (parameters['limit'] !== undefined) {
    queryParameters['limit'] = parameters['limit']
  }
  if (parameters['query'] !== undefined) {
    queryParameters['query'] = parameters['query']
  }
  if (parameters['populate'] !== undefined) {
    queryParameters['populate'] = parameters['populate']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Creates a new instance of descriptor
 * request: postDescriptor
 * url: postDescriptorURL
 * method: postDescriptor_TYPE
 * raw_url: postDescriptor_RAW_URL
 * @param descriptor -
 */
export const postDescriptor = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/descriptor'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['descriptor'] !== undefined) {
    body = parameters['descriptor']
  }
  if (parameters['descriptor'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: descriptor'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const postDescriptor_RAW_URL = function() {
  return '/descriptor'
}
export const postDescriptor_TYPE = function() {
  return 'post'
}
export const postDescriptorURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/descriptor'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Deletes the entire contents of collection descriptor
 * request: deleteDescriptor
 * url: deleteDescriptorURL
 * method: deleteDescriptor_TYPE
 * raw_url: deleteDescriptor_RAW_URL
 */
export const deleteDescriptor = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/descriptor'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('delete', domain + path, body, queryParameters, form, config)
}
export const deleteDescriptor_RAW_URL = function() {
  return '/descriptor'
}
export const deleteDescriptor_TYPE = function() {
  return 'delete'
}
export const deleteDescriptorURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/descriptor'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Returns a List of descriptors
 * request: getDescriptorById
 * url: getDescriptorByIdURL
 * method: getDescriptorById_TYPE
 * raw_url: getDescriptorById_RAW_URL
 * @param id - MongoDB document _id
 */
export const getDescriptorById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/descriptor/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const getDescriptorById_RAW_URL = function() {
  return '/descriptor/{id}'
}
export const getDescriptorById_TYPE = function() {
  return 'get'
}
export const getDescriptorByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/descriptor/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Updates the document with the given ID
 * request: postDescriptorById
 * url: postDescriptorByIdURL
 * method: postDescriptorById_TYPE
 * raw_url: postDescriptorById_RAW_URL
 * @param id - MongoDB document _id
 * @param descriptor -
 */
export const postDescriptorById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/descriptor/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters['descriptor'] !== undefined) {
    body = parameters['descriptor']
  }
  if (parameters['descriptor'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: descriptor'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const postDescriptorById_RAW_URL = function() {
  return '/descriptor/{id}'
}
export const postDescriptorById_TYPE = function() {
  return 'post'
}
export const postDescriptorByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/descriptor/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Deletes the document with the given ID
 * request: deleteDescriptorById
 * url: deleteDescriptorByIdURL
 * method: deleteDescriptorById_TYPE
 * raw_url: deleteDescriptorById_RAW_URL
 * @param id - MongoDB document _id
 */
export const deleteDescriptorById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/descriptor/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('delete', domain + path, body, queryParameters, form, config)
}
export const deleteDescriptorById_RAW_URL = function() {
  return '/descriptor/{id}'
}
export const deleteDescriptorById_TYPE = function() {
  return 'delete'
}
export const deleteDescriptorByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/descriptor/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Returns the number of documents of type entry
 * request: getEntryCount
 * url: getEntryCountURL
 * method: getEntryCount_TYPE
 * raw_url: getEntryCount_RAW_URL
 */
export const getEntryCount = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/entry/count'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const getEntryCount_RAW_URL = function() {
  return '/entry/count'
}
export const getEntryCount_TYPE = function() {
  return 'get'
}
export const getEntryCountURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/entry/count'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Returns a List of entrys
 * request: getEntry
 * url: getEntryURL
 * method: getEntry_TYPE
 * raw_url: getEntry_RAW_URL
 * @param sort - Key Name to Sort by, preceded by '-' for descending, default: _id
 * @param skip - Number of records to skip from start, default: 0
 * @param limit - Number of records to return, default: 10
 * @param query - MongoDB Query as a well formed JSON String, ie {"name":"Bob"}
 * @param populate - Path to a MongoDB reference to populate, ie [{"path":"customer"},{"path":"products"}]
 */
export const getEntry = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/entry'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['sort'] !== undefined) {
    queryParameters['sort'] = parameters['sort']
  }
  if (parameters['skip'] !== undefined) {
    queryParameters['skip'] = parameters['skip']
  }
  if (parameters['limit'] !== undefined) {
    queryParameters['limit'] = parameters['limit']
  }
  if (parameters['query'] !== undefined) {
    queryParameters['query'] = parameters['query']
  }
  if (parameters['populate'] !== undefined) {
    queryParameters['populate'] = parameters['populate']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const getEntry_RAW_URL = function() {
  return '/entry'
}
export const getEntry_TYPE = function() {
  return 'get'
}
export const getEntryURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/entry'
  if (parameters['sort'] !== undefined) {
    queryParameters['sort'] = parameters['sort']
  }
  if (parameters['skip'] !== undefined) {
    queryParameters['skip'] = parameters['skip']
  }
  if (parameters['limit'] !== undefined) {
    queryParameters['limit'] = parameters['limit']
  }
  if (parameters['query'] !== undefined) {
    queryParameters['query'] = parameters['query']
  }
  if (parameters['populate'] !== undefined) {
    queryParameters['populate'] = parameters['populate']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Creates a new instance of entry
 * request: postEntry
 * url: postEntryURL
 * method: postEntry_TYPE
 * raw_url: postEntry_RAW_URL
 * @param entry -
 */
export const postEntry = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/entry'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['entry'] !== undefined) {
    body = parameters['entry']
  }
  if (parameters['entry'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: entry'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const postEntry_RAW_URL = function() {
  return '/entry'
}
export const postEntry_TYPE = function() {
  return 'post'
}
export const postEntryURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/entry'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Deletes the entire contents of collection entry
 * request: deleteEntry
 * url: deleteEntryURL
 * method: deleteEntry_TYPE
 * raw_url: deleteEntry_RAW_URL
 */
export const deleteEntry = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/entry'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('delete', domain + path, body, queryParameters, form, config)
}
export const deleteEntry_RAW_URL = function() {
  return '/entry'
}
export const deleteEntry_TYPE = function() {
  return 'delete'
}
export const deleteEntryURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/entry'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Returns a List of entrys
 * request: getEntryById
 * url: getEntryByIdURL
 * method: getEntryById_TYPE
 * raw_url: getEntryById_RAW_URL
 * @param id - MongoDB document _id
 */
export const getEntryById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/entry/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const getEntryById_RAW_URL = function() {
  return '/entry/{id}'
}
export const getEntryById_TYPE = function() {
  return 'get'
}
export const getEntryByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/entry/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Updates the document with the given ID
 * request: postEntryById
 * url: postEntryByIdURL
 * method: postEntryById_TYPE
 * raw_url: postEntryById_RAW_URL
 * @param id - MongoDB document _id
 * @param entry -
 */
export const postEntryById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/entry/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters['entry'] !== undefined) {
    body = parameters['entry']
  }
  if (parameters['entry'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: entry'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const postEntryById_RAW_URL = function() {
  return '/entry/{id}'
}
export const postEntryById_TYPE = function() {
  return 'post'
}
export const postEntryByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/entry/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Deletes the document with the given ID
 * request: deleteEntryById
 * url: deleteEntryByIdURL
 * method: deleteEntryById_TYPE
 * raw_url: deleteEntryById_RAW_URL
 * @param id - MongoDB document _id
 */
export const deleteEntryById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/entry/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('delete', domain + path, body, queryParameters, form, config)
}
export const deleteEntryById_RAW_URL = function() {
  return '/entry/{id}'
}
export const deleteEntryById_TYPE = function() {
  return 'delete'
}
export const deleteEntryByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/entry/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Returns the number of documents of type institution
 * request: getInstitutionCount
 * url: getInstitutionCountURL
 * method: getInstitutionCount_TYPE
 * raw_url: getInstitutionCount_RAW_URL
 */
export const getInstitutionCount = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/institution/count'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const getInstitutionCount_RAW_URL = function() {
  return '/institution/count'
}
export const getInstitutionCount_TYPE = function() {
  return 'get'
}
export const getInstitutionCountURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/institution/count'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Returns a List of institutions
 * request: getInstitution
 * url: getInstitutionURL
 * method: getInstitution_TYPE
 * raw_url: getInstitution_RAW_URL
 * @param sort - Key Name to Sort by, preceded by '-' for descending, default: _id
 * @param skip - Number of records to skip from start, default: 0
 * @param limit - Number of records to return, default: 10
 * @param query - MongoDB Query as a well formed JSON String, ie {"name":"Bob"}
 * @param populate - Path to a MongoDB reference to populate, ie [{"path":"customer"},{"path":"products"}]
 */
export const getInstitution = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/institution'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['sort'] !== undefined) {
    queryParameters['sort'] = parameters['sort']
  }
  if (parameters['skip'] !== undefined) {
    queryParameters['skip'] = parameters['skip']
  }
  if (parameters['limit'] !== undefined) {
    queryParameters['limit'] = parameters['limit']
  }
  if (parameters['query'] !== undefined) {
    queryParameters['query'] = parameters['query']
  }
  if (parameters['populate'] !== undefined) {
    queryParameters['populate'] = parameters['populate']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const getInstitution_RAW_URL = function() {
  return '/institution'
}
export const getInstitution_TYPE = function() {
  return 'get'
}
export const getInstitutionURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/institution'
  if (parameters['sort'] !== undefined) {
    queryParameters['sort'] = parameters['sort']
  }
  if (parameters['skip'] !== undefined) {
    queryParameters['skip'] = parameters['skip']
  }
  if (parameters['limit'] !== undefined) {
    queryParameters['limit'] = parameters['limit']
  }
  if (parameters['query'] !== undefined) {
    queryParameters['query'] = parameters['query']
  }
  if (parameters['populate'] !== undefined) {
    queryParameters['populate'] = parameters['populate']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Creates a new instance of institution
 * request: postInstitution
 * url: postInstitutionURL
 * method: postInstitution_TYPE
 * raw_url: postInstitution_RAW_URL
 * @param institution -
 */
export const postInstitution = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/institution'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['institution'] !== undefined) {
    body = parameters['institution']
  }
  if (parameters['institution'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: institution'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const postInstitution_RAW_URL = function() {
  return '/institution'
}
export const postInstitution_TYPE = function() {
  return 'post'
}
export const postInstitutionURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/institution'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Deletes the entire contents of collection institution
 * request: deleteInstitution
 * url: deleteInstitutionURL
 * method: deleteInstitution_TYPE
 * raw_url: deleteInstitution_RAW_URL
 */
export const deleteInstitution = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/institution'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('delete', domain + path, body, queryParameters, form, config)
}
export const deleteInstitution_RAW_URL = function() {
  return '/institution'
}
export const deleteInstitution_TYPE = function() {
  return 'delete'
}
export const deleteInstitutionURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/institution'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Returns a List of institutions
 * request: getInstitutionById
 * url: getInstitutionByIdURL
 * method: getInstitutionById_TYPE
 * raw_url: getInstitutionById_RAW_URL
 * @param id - MongoDB document _id
 */
export const getInstitutionById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/institution/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const getInstitutionById_RAW_URL = function() {
  return '/institution/{id}'
}
export const getInstitutionById_TYPE = function() {
  return 'get'
}
export const getInstitutionByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/institution/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Updates the document with the given ID
 * request: postInstitutionById
 * url: postInstitutionByIdURL
 * method: postInstitutionById_TYPE
 * raw_url: postInstitutionById_RAW_URL
 * @param id - MongoDB document _id
 * @param institution -
 */
export const postInstitutionById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/institution/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters['institution'] !== undefined) {
    body = parameters['institution']
  }
  if (parameters['institution'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: institution'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const postInstitutionById_RAW_URL = function() {
  return '/institution/{id}'
}
export const postInstitutionById_TYPE = function() {
  return 'post'
}
export const postInstitutionByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/institution/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Deletes the document with the given ID
 * request: deleteInstitutionById
 * url: deleteInstitutionByIdURL
 * method: deleteInstitutionById_TYPE
 * raw_url: deleteInstitutionById_RAW_URL
 * @param id - MongoDB document _id
 */
export const deleteInstitutionById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/institution/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('delete', domain + path, body, queryParameters, form, config)
}
export const deleteInstitutionById_RAW_URL = function() {
  return '/institution/{id}'
}
export const deleteInstitutionById_TYPE = function() {
  return 'delete'
}
export const deleteInstitutionByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/institution/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Returns the number of documents of type inventory
 * request: getInventoryCount
 * url: getInventoryCountURL
 * method: getInventoryCount_TYPE
 * raw_url: getInventoryCount_RAW_URL
 */
export const getInventoryCount = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/inventory/count'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const getInventoryCount_RAW_URL = function() {
  return '/inventory/count'
}
export const getInventoryCount_TYPE = function() {
  return 'get'
}
export const getInventoryCountURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/inventory/count'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Returns a List of inventorys
 * request: getInventory
 * url: getInventoryURL
 * method: getInventory_TYPE
 * raw_url: getInventory_RAW_URL
 * @param sort - Key Name to Sort by, preceded by '-' for descending, default: _id
 * @param skip - Number of records to skip from start, default: 0
 * @param limit - Number of records to return, default: 10
 * @param query - MongoDB Query as a well formed JSON String, ie {"name":"Bob"}
 * @param populate - Path to a MongoDB reference to populate, ie [{"path":"customer"},{"path":"products"}]
 */
export const getInventory = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/inventory'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['sort'] !== undefined) {
    queryParameters['sort'] = parameters['sort']
  }
  if (parameters['skip'] !== undefined) {
    queryParameters['skip'] = parameters['skip']
  }
  if (parameters['limit'] !== undefined) {
    queryParameters['limit'] = parameters['limit']
  }
  if (parameters['query'] !== undefined) {
    queryParameters['query'] = parameters['query']
  }
  if (parameters['populate'] !== undefined) {
    queryParameters['populate'] = parameters['populate']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const getInventory_RAW_URL = function() {
  return '/inventory'
}
export const getInventory_TYPE = function() {
  return 'get'
}
export const getInventoryURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/inventory'
  if (parameters['sort'] !== undefined) {
    queryParameters['sort'] = parameters['sort']
  }
  if (parameters['skip'] !== undefined) {
    queryParameters['skip'] = parameters['skip']
  }
  if (parameters['limit'] !== undefined) {
    queryParameters['limit'] = parameters['limit']
  }
  if (parameters['query'] !== undefined) {
    queryParameters['query'] = parameters['query']
  }
  if (parameters['populate'] !== undefined) {
    queryParameters['populate'] = parameters['populate']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Creates a new instance of inventory
 * request: postInventory
 * url: postInventoryURL
 * method: postInventory_TYPE
 * raw_url: postInventory_RAW_URL
 * @param inventory -
 */
export const postInventory = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/inventory'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['inventory'] !== undefined) {
    body = parameters['inventory']
  }
  if (parameters['inventory'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: inventory'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const postInventory_RAW_URL = function() {
  return '/inventory'
}
export const postInventory_TYPE = function() {
  return 'post'
}
export const postInventoryURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/inventory'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Deletes the entire contents of collection inventory
 * request: deleteInventory
 * url: deleteInventoryURL
 * method: deleteInventory_TYPE
 * raw_url: deleteInventory_RAW_URL
 */
export const deleteInventory = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/inventory'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('delete', domain + path, body, queryParameters, form, config)
}
export const deleteInventory_RAW_URL = function() {
  return '/inventory'
}
export const deleteInventory_TYPE = function() {
  return 'delete'
}
export const deleteInventoryURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/inventory'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Returns a List of inventorys
 * request: getInventoryById
 * url: getInventoryByIdURL
 * method: getInventoryById_TYPE
 * raw_url: getInventoryById_RAW_URL
 * @param id - MongoDB document _id
 */
export const getInventoryById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/inventory/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const getInventoryById_RAW_URL = function() {
  return '/inventory/{id}'
}
export const getInventoryById_TYPE = function() {
  return 'get'
}
export const getInventoryByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/inventory/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Updates the document with the given ID
 * request: postInventoryById
 * url: postInventoryByIdURL
 * method: postInventoryById_TYPE
 * raw_url: postInventoryById_RAW_URL
 * @param id - MongoDB document _id
 * @param inventory -
 */
export const postInventoryById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/inventory/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters['inventory'] !== undefined) {
    body = parameters['inventory']
  }
  if (parameters['inventory'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: inventory'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const postInventoryById_RAW_URL = function() {
  return '/inventory/{id}'
}
export const postInventoryById_TYPE = function() {
  return 'post'
}
export const postInventoryByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/inventory/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Deletes the document with the given ID
 * request: deleteInventoryById
 * url: deleteInventoryByIdURL
 * method: deleteInventoryById_TYPE
 * raw_url: deleteInventoryById_RAW_URL
 * @param id - MongoDB document _id
 */
export const deleteInventoryById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/inventory/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('delete', domain + path, body, queryParameters, form, config)
}
export const deleteInventoryById_RAW_URL = function() {
  return '/inventory/{id}'
}
export const deleteInventoryById_TYPE = function() {
  return 'delete'
}
export const deleteInventoryByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/inventory/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Returns the number of documents of type object
 * request: getObjectCount
 * url: getObjectCountURL
 * method: getObjectCount_TYPE
 * raw_url: getObjectCount_RAW_URL
 */
export const getObjectCount = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/object/count'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const getObjectCount_RAW_URL = function() {
  return '/object/count'
}
export const getObjectCount_TYPE = function() {
  return 'get'
}
export const getObjectCountURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/object/count'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Returns a List of objects
 * request: getObject
 * url: getObjectURL
 * method: getObject_TYPE
 * raw_url: getObject_RAW_URL
 * @param sort - Key Name to Sort by, preceded by '-' for descending, default: _id
 * @param skip - Number of records to skip from start, default: 0
 * @param limit - Number of records to return, default: 10
 * @param query - MongoDB Query as a well formed JSON String, ie {"name":"Bob"}
 * @param populate - Path to a MongoDB reference to populate, ie [{"path":"customer"},{"path":"products"}]
 */
export const getObject = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/object'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['sort'] !== undefined) {
    queryParameters['sort'] = parameters['sort']
  }
  if (parameters['skip'] !== undefined) {
    queryParameters['skip'] = parameters['skip']
  }
  if (parameters['limit'] !== undefined) {
    queryParameters['limit'] = parameters['limit']
  }
  if (parameters['query'] !== undefined) {
    queryParameters['query'] = parameters['query']
  }
  if (parameters['populate'] !== undefined) {
    queryParameters['populate'] = parameters['populate']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const getObject_RAW_URL = function() {
  return '/object'
}
export const getObject_TYPE = function() {
  return 'get'
}
export const getObjectURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/object'
  if (parameters['sort'] !== undefined) {
    queryParameters['sort'] = parameters['sort']
  }
  if (parameters['skip'] !== undefined) {
    queryParameters['skip'] = parameters['skip']
  }
  if (parameters['limit'] !== undefined) {
    queryParameters['limit'] = parameters['limit']
  }
  if (parameters['query'] !== undefined) {
    queryParameters['query'] = parameters['query']
  }
  if (parameters['populate'] !== undefined) {
    queryParameters['populate'] = parameters['populate']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Creates a new instance of object
 * request: postObject
 * url: postObjectURL
 * method: postObject_TYPE
 * raw_url: postObject_RAW_URL
 * @param object -
 */
export const postObject = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/object'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['object'] !== undefined) {
    body = parameters['object']
  }
  if (parameters['object'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: object'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const postObject_RAW_URL = function() {
  return '/object'
}
export const postObject_TYPE = function() {
  return 'post'
}
export const postObjectURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/object'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Deletes the entire contents of collection object
 * request: deleteObject
 * url: deleteObjectURL
 * method: deleteObject_TYPE
 * raw_url: deleteObject_RAW_URL
 */
export const deleteObject = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/object'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('delete', domain + path, body, queryParameters, form, config)
}
export const deleteObject_RAW_URL = function() {
  return '/object'
}
export const deleteObject_TYPE = function() {
  return 'delete'
}
export const deleteObjectURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/object'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Returns a List of objects
 * request: getObjectById
 * url: getObjectByIdURL
 * method: getObjectById_TYPE
 * raw_url: getObjectById_RAW_URL
 * @param id - MongoDB document _id
 */
export const getObjectById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/object/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const getObjectById_RAW_URL = function() {
  return '/object/{id}'
}
export const getObjectById_TYPE = function() {
  return 'get'
}
export const getObjectByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/object/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Updates the document with the given ID
 * request: postObjectById
 * url: postObjectByIdURL
 * method: postObjectById_TYPE
 * raw_url: postObjectById_RAW_URL
 * @param id - MongoDB document _id
 * @param object -
 */
export const postObjectById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/object/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters['object'] !== undefined) {
    body = parameters['object']
  }
  if (parameters['object'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: object'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const postObjectById_RAW_URL = function() {
  return '/object/{id}'
}
export const postObjectById_TYPE = function() {
  return 'post'
}
export const postObjectByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/object/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Deletes the document with the given ID
 * request: deleteObjectById
 * url: deleteObjectByIdURL
 * method: deleteObjectById_TYPE
 * raw_url: deleteObjectById_RAW_URL
 * @param id - MongoDB document _id
 */
export const deleteObjectById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/object/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('delete', domain + path, body, queryParameters, form, config)
}
export const deleteObjectById_RAW_URL = function() {
  return '/object/{id}'
}
export const deleteObjectById_TYPE = function() {
  return 'delete'
}
export const deleteObjectByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/object/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Returns the number of documents of type person
 * request: getPersonCount
 * url: getPersonCountURL
 * method: getPersonCount_TYPE
 * raw_url: getPersonCount_RAW_URL
 */
export const getPersonCount = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/person/count'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const getPersonCount_RAW_URL = function() {
  return '/person/count'
}
export const getPersonCount_TYPE = function() {
  return 'get'
}
export const getPersonCountURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/person/count'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Returns a List of persons
 * request: getPerson
 * url: getPersonURL
 * method: getPerson_TYPE
 * raw_url: getPerson_RAW_URL
 * @param sort - Key Name to Sort by, preceded by '-' for descending, default: _id
 * @param skip - Number of records to skip from start, default: 0
 * @param limit - Number of records to return, default: 10
 * @param query - MongoDB Query as a well formed JSON String, ie {"name":"Bob"}
 * @param populate - Path to a MongoDB reference to populate, ie [{"path":"customer"},{"path":"products"}]
 */
export const getPerson = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/person'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['sort'] !== undefined) {
    queryParameters['sort'] = parameters['sort']
  }
  if (parameters['skip'] !== undefined) {
    queryParameters['skip'] = parameters['skip']
  }
  if (parameters['limit'] !== undefined) {
    queryParameters['limit'] = parameters['limit']
  }
  if (parameters['query'] !== undefined) {
    queryParameters['query'] = parameters['query']
  }
  if (parameters['populate'] !== undefined) {
    queryParameters['populate'] = parameters['populate']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const getPerson_RAW_URL = function() {
  return '/person'
}
export const getPerson_TYPE = function() {
  return 'get'
}
export const getPersonURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/person'
  if (parameters['sort'] !== undefined) {
    queryParameters['sort'] = parameters['sort']
  }
  if (parameters['skip'] !== undefined) {
    queryParameters['skip'] = parameters['skip']
  }
  if (parameters['limit'] !== undefined) {
    queryParameters['limit'] = parameters['limit']
  }
  if (parameters['query'] !== undefined) {
    queryParameters['query'] = parameters['query']
  }
  if (parameters['populate'] !== undefined) {
    queryParameters['populate'] = parameters['populate']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Creates a new instance of person
 * request: postPerson
 * url: postPersonURL
 * method: postPerson_TYPE
 * raw_url: postPerson_RAW_URL
 * @param person -
 */
export const postPerson = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/person'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['person'] !== undefined) {
    body = parameters['person']
  }
  if (parameters['person'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: person'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const postPerson_RAW_URL = function() {
  return '/person'
}
export const postPerson_TYPE = function() {
  return 'post'
}
export const postPersonURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/person'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Deletes the entire contents of collection person
 * request: deletePerson
 * url: deletePersonURL
 * method: deletePerson_TYPE
 * raw_url: deletePerson_RAW_URL
 */
export const deletePerson = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/person'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('delete', domain + path, body, queryParameters, form, config)
}
export const deletePerson_RAW_URL = function() {
  return '/person'
}
export const deletePerson_TYPE = function() {
  return 'delete'
}
export const deletePersonURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/person'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Returns a List of persons
 * request: getPersonById
 * url: getPersonByIdURL
 * method: getPersonById_TYPE
 * raw_url: getPersonById_RAW_URL
 * @param id - MongoDB document _id
 */
export const getPersonById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/person/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const getPersonById_RAW_URL = function() {
  return '/person/{id}'
}
export const getPersonById_TYPE = function() {
  return 'get'
}
export const getPersonByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/person/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Updates the document with the given ID
 * request: postPersonById
 * url: postPersonByIdURL
 * method: postPersonById_TYPE
 * raw_url: postPersonById_RAW_URL
 * @param id - MongoDB document _id
 * @param person -
 */
export const postPersonById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/person/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters['person'] !== undefined) {
    body = parameters['person']
  }
  if (parameters['person'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: person'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const postPersonById_RAW_URL = function() {
  return '/person/{id}'
}
export const postPersonById_TYPE = function() {
  return 'post'
}
export const postPersonByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/person/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Deletes the document with the given ID
 * request: deletePersonById
 * url: deletePersonByIdURL
 * method: deletePersonById_TYPE
 * raw_url: deletePersonById_RAW_URL
 * @param id - MongoDB document _id
 */
export const deletePersonById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/person/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('delete', domain + path, body, queryParameters, form, config)
}
export const deletePersonById_RAW_URL = function() {
  return '/person/{id}'
}
export const deletePersonById_TYPE = function() {
  return 'delete'
}
export const deletePersonByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/person/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Returns the number of documents of type place
 * request: getPlaceCount
 * url: getPlaceCountURL
 * method: getPlaceCount_TYPE
 * raw_url: getPlaceCount_RAW_URL
 */
export const getPlaceCount = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/place/count'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const getPlaceCount_RAW_URL = function() {
  return '/place/count'
}
export const getPlaceCount_TYPE = function() {
  return 'get'
}
export const getPlaceCountURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/place/count'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Returns a List of places
 * request: getPlace
 * url: getPlaceURL
 * method: getPlace_TYPE
 * raw_url: getPlace_RAW_URL
 * @param sort - Key Name to Sort by, preceded by '-' for descending, default: _id
 * @param skip - Number of records to skip from start, default: 0
 * @param limit - Number of records to return, default: 10
 * @param query - MongoDB Query as a well formed JSON String, ie {"name":"Bob"}
 * @param populate - Path to a MongoDB reference to populate, ie [{"path":"customer"},{"path":"products"}]
 */
export const getPlace = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/place'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['sort'] !== undefined) {
    queryParameters['sort'] = parameters['sort']
  }
  if (parameters['skip'] !== undefined) {
    queryParameters['skip'] = parameters['skip']
  }
  if (parameters['limit'] !== undefined) {
    queryParameters['limit'] = parameters['limit']
  }
  if (parameters['query'] !== undefined) {
    queryParameters['query'] = parameters['query']
  }
  if (parameters['populate'] !== undefined) {
    queryParameters['populate'] = parameters['populate']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const getPlace_RAW_URL = function() {
  return '/place'
}
export const getPlace_TYPE = function() {
  return 'get'
}
export const getPlaceURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/place'
  if (parameters['sort'] !== undefined) {
    queryParameters['sort'] = parameters['sort']
  }
  if (parameters['skip'] !== undefined) {
    queryParameters['skip'] = parameters['skip']
  }
  if (parameters['limit'] !== undefined) {
    queryParameters['limit'] = parameters['limit']
  }
  if (parameters['query'] !== undefined) {
    queryParameters['query'] = parameters['query']
  }
  if (parameters['populate'] !== undefined) {
    queryParameters['populate'] = parameters['populate']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Creates a new instance of place
 * request: postPlace
 * url: postPlaceURL
 * method: postPlace_TYPE
 * raw_url: postPlace_RAW_URL
 * @param place -
 */
export const postPlace = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/place'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['place'] !== undefined) {
    body = parameters['place']
  }
  if (parameters['place'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: place'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const postPlace_RAW_URL = function() {
  return '/place'
}
export const postPlace_TYPE = function() {
  return 'post'
}
export const postPlaceURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/place'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Deletes the entire contents of collection place
 * request: deletePlace
 * url: deletePlaceURL
 * method: deletePlace_TYPE
 * raw_url: deletePlace_RAW_URL
 */
export const deletePlace = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/place'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('delete', domain + path, body, queryParameters, form, config)
}
export const deletePlace_RAW_URL = function() {
  return '/place'
}
export const deletePlace_TYPE = function() {
  return 'delete'
}
export const deletePlaceURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/place'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Returns a List of places
 * request: getPlaceById
 * url: getPlaceByIdURL
 * method: getPlaceById_TYPE
 * raw_url: getPlaceById_RAW_URL
 * @param id - MongoDB document _id
 */
export const getPlaceById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/place/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const getPlaceById_RAW_URL = function() {
  return '/place/{id}'
}
export const getPlaceById_TYPE = function() {
  return 'get'
}
export const getPlaceByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/place/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Updates the document with the given ID
 * request: postPlaceById
 * url: postPlaceByIdURL
 * method: postPlaceById_TYPE
 * raw_url: postPlaceById_RAW_URL
 * @param id - MongoDB document _id
 * @param place -
 */
export const postPlaceById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/place/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters['place'] !== undefined) {
    body = parameters['place']
  }
  if (parameters['place'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: place'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const postPlaceById_RAW_URL = function() {
  return '/place/{id}'
}
export const postPlaceById_TYPE = function() {
  return 'post'
}
export const postPlaceByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/place/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Deletes the document with the given ID
 * request: deletePlaceById
 * url: deletePlaceByIdURL
 * method: deletePlaceById_TYPE
 * raw_url: deletePlaceById_RAW_URL
 * @param id - MongoDB document _id
 */
export const deletePlaceById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/place/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('delete', domain + path, body, queryParameters, form, config)
}
export const deletePlaceById_RAW_URL = function() {
  return '/place/{id}'
}
export const deletePlaceById_TYPE = function() {
  return 'delete'
}
export const deletePlaceByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/place/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Returns the number of documents of type proplabel
 * request: getProplabelCount
 * url: getProplabelCountURL
 * method: getProplabelCount_TYPE
 * raw_url: getProplabelCount_RAW_URL
 */
export const getProplabelCount = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/proplabel/count'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const getProplabelCount_RAW_URL = function() {
  return '/proplabel/count'
}
export const getProplabelCount_TYPE = function() {
  return 'get'
}
export const getProplabelCountURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/proplabel/count'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Returns a List of proplabels
 * request: getProplabel
 * url: getProplabelURL
 * method: getProplabel_TYPE
 * raw_url: getProplabel_RAW_URL
 * @param sort - Key Name to Sort by, preceded by '-' for descending, default: _id
 * @param skip - Number of records to skip from start, default: 0
 * @param limit - Number of records to return, default: 10
 * @param query - MongoDB Query as a well formed JSON String, ie {"name":"Bob"}
 * @param populate - Path to a MongoDB reference to populate, ie [{"path":"customer"},{"path":"products"}]
 */
export const getProplabel = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/proplabel'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['sort'] !== undefined) {
    queryParameters['sort'] = parameters['sort']
  }
  if (parameters['skip'] !== undefined) {
    queryParameters['skip'] = parameters['skip']
  }
  if (parameters['limit'] !== undefined) {
    queryParameters['limit'] = parameters['limit']
  }
  if (parameters['query'] !== undefined) {
    queryParameters['query'] = parameters['query']
  }
  if (parameters['populate'] !== undefined) {
    queryParameters['populate'] = parameters['populate']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const getProplabel_RAW_URL = function() {
  return '/proplabel'
}
export const getProplabel_TYPE = function() {
  return 'get'
}
export const getProplabelURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/proplabel'
  if (parameters['sort'] !== undefined) {
    queryParameters['sort'] = parameters['sort']
  }
  if (parameters['skip'] !== undefined) {
    queryParameters['skip'] = parameters['skip']
  }
  if (parameters['limit'] !== undefined) {
    queryParameters['limit'] = parameters['limit']
  }
  if (parameters['query'] !== undefined) {
    queryParameters['query'] = parameters['query']
  }
  if (parameters['populate'] !== undefined) {
    queryParameters['populate'] = parameters['populate']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Creates a new instance of proplabel
 * request: postProplabel
 * url: postProplabelURL
 * method: postProplabel_TYPE
 * raw_url: postProplabel_RAW_URL
 * @param proplabel -
 */
export const postProplabel = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/proplabel'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['proplabel'] !== undefined) {
    body = parameters['proplabel']
  }
  if (parameters['proplabel'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: proplabel'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const postProplabel_RAW_URL = function() {
  return '/proplabel'
}
export const postProplabel_TYPE = function() {
  return 'post'
}
export const postProplabelURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/proplabel'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Deletes the entire contents of collection proplabel
 * request: deleteProplabel
 * url: deleteProplabelURL
 * method: deleteProplabel_TYPE
 * raw_url: deleteProplabel_RAW_URL
 */
export const deleteProplabel = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/proplabel'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('delete', domain + path, body, queryParameters, form, config)
}
export const deleteProplabel_RAW_URL = function() {
  return '/proplabel'
}
export const deleteProplabel_TYPE = function() {
  return 'delete'
}
export const deleteProplabelURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/proplabel'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Returns a List of proplabels
 * request: getProplabelById
 * url: getProplabelByIdURL
 * method: getProplabelById_TYPE
 * raw_url: getProplabelById_RAW_URL
 * @param id - MongoDB document _id
 */
export const getProplabelById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/proplabel/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const getProplabelById_RAW_URL = function() {
  return '/proplabel/{id}'
}
export const getProplabelById_TYPE = function() {
  return 'get'
}
export const getProplabelByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/proplabel/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Updates the document with the given ID
 * request: postProplabelById
 * url: postProplabelByIdURL
 * method: postProplabelById_TYPE
 * raw_url: postProplabelById_RAW_URL
 * @param id - MongoDB document _id
 * @param proplabel -
 */
export const postProplabelById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/proplabel/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters['proplabel'] !== undefined) {
    body = parameters['proplabel']
  }
  if (parameters['proplabel'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: proplabel'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const postProplabelById_RAW_URL = function() {
  return '/proplabel/{id}'
}
export const postProplabelById_TYPE = function() {
  return 'post'
}
export const postProplabelByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/proplabel/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Deletes the document with the given ID
 * request: deleteProplabelById
 * url: deleteProplabelByIdURL
 * method: deleteProplabelById_TYPE
 * raw_url: deleteProplabelById_RAW_URL
 * @param id - MongoDB document _id
 */
export const deleteProplabelById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/proplabel/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('delete', domain + path, body, queryParameters, form, config)
}
export const deleteProplabelById_RAW_URL = function() {
  return '/proplabel/{id}'
}
export const deleteProplabelById_TYPE = function() {
  return 'delete'
}
export const deleteProplabelByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/proplabel/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Returns the number of documents of type transaction
 * request: getTransactionCount
 * url: getTransactionCountURL
 * method: getTransactionCount_TYPE
 * raw_url: getTransactionCount_RAW_URL
 */
export const getTransactionCount = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/transaction/count'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const getTransactionCount_RAW_URL = function() {
  return '/transaction/count'
}
export const getTransactionCount_TYPE = function() {
  return 'get'
}
export const getTransactionCountURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/transaction/count'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Returns a List of transactions
 * request: getTransaction
 * url: getTransactionURL
 * method: getTransaction_TYPE
 * raw_url: getTransaction_RAW_URL
 * @param sort - Key Name to Sort by, preceded by '-' for descending, default: _id
 * @param skip - Number of records to skip from start, default: 0
 * @param limit - Number of records to return, default: 10
 * @param query - MongoDB Query as a well formed JSON String, ie {"name":"Bob"}
 * @param populate - Path to a MongoDB reference to populate, ie [{"path":"customer"},{"path":"products"}]
 */
export const getTransaction = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/transaction'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['sort'] !== undefined) {
    queryParameters['sort'] = parameters['sort']
  }
  if (parameters['skip'] !== undefined) {
    queryParameters['skip'] = parameters['skip']
  }
  if (parameters['limit'] !== undefined) {
    queryParameters['limit'] = parameters['limit']
  }
  if (parameters['query'] !== undefined) {
    queryParameters['query'] = parameters['query']
  }
  if (parameters['populate'] !== undefined) {
    queryParameters['populate'] = parameters['populate']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const getTransaction_RAW_URL = function() {
  return '/transaction'
}
export const getTransaction_TYPE = function() {
  return 'get'
}
export const getTransactionURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/transaction'
  if (parameters['sort'] !== undefined) {
    queryParameters['sort'] = parameters['sort']
  }
  if (parameters['skip'] !== undefined) {
    queryParameters['skip'] = parameters['skip']
  }
  if (parameters['limit'] !== undefined) {
    queryParameters['limit'] = parameters['limit']
  }
  if (parameters['query'] !== undefined) {
    queryParameters['query'] = parameters['query']
  }
  if (parameters['populate'] !== undefined) {
    queryParameters['populate'] = parameters['populate']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Creates a new instance of transaction
 * request: postTransaction
 * url: postTransactionURL
 * method: postTransaction_TYPE
 * raw_url: postTransaction_RAW_URL
 * @param transaction -
 */
export const postTransaction = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/transaction'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['transaction'] !== undefined) {
    body = parameters['transaction']
  }
  if (parameters['transaction'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: transaction'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const postTransaction_RAW_URL = function() {
  return '/transaction'
}
export const postTransaction_TYPE = function() {
  return 'post'
}
export const postTransactionURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/transaction'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Deletes the entire contents of collection transaction
 * request: deleteTransaction
 * url: deleteTransactionURL
 * method: deleteTransaction_TYPE
 * raw_url: deleteTransaction_RAW_URL
 */
export const deleteTransaction = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/transaction'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('delete', domain + path, body, queryParameters, form, config)
}
export const deleteTransaction_RAW_URL = function() {
  return '/transaction'
}
export const deleteTransaction_TYPE = function() {
  return 'delete'
}
export const deleteTransactionURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/transaction'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Returns a List of transactions
 * request: getTransactionById
 * url: getTransactionByIdURL
 * method: getTransactionById_TYPE
 * raw_url: getTransactionById_RAW_URL
 * @param id - MongoDB document _id
 */
export const getTransactionById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/transaction/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const getTransactionById_RAW_URL = function() {
  return '/transaction/{id}'
}
export const getTransactionById_TYPE = function() {
  return 'get'
}
export const getTransactionByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/transaction/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Updates the document with the given ID
 * request: postTransactionById
 * url: postTransactionByIdURL
 * method: postTransactionById_TYPE
 * raw_url: postTransactionById_RAW_URL
 * @param id - MongoDB document _id
 * @param transaction -
 */
export const postTransactionById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/transaction/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters['transaction'] !== undefined) {
    body = parameters['transaction']
  }
  if (parameters['transaction'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: transaction'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const postTransactionById_RAW_URL = function() {
  return '/transaction/{id}'
}
export const postTransactionById_TYPE = function() {
  return 'post'
}
export const postTransactionByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/transaction/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Deletes the document with the given ID
 * request: deleteTransactionById
 * url: deleteTransactionByIdURL
 * method: deleteTransactionById_TYPE
 * raw_url: deleteTransactionById_RAW_URL
 * @param id - MongoDB document _id
 */
export const deleteTransactionById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/transaction/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('delete', domain + path, body, queryParameters, form, config)
}
export const deleteTransactionById_RAW_URL = function() {
  return '/transaction/{id}'
}
export const deleteTransactionById_TYPE = function() {
  return 'delete'
}
export const deleteTransactionByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/transaction/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Returns the number of documents of type unit
 * request: getUnitCount
 * url: getUnitCountURL
 * method: getUnitCount_TYPE
 * raw_url: getUnitCount_RAW_URL
 */
export const getUnitCount = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/unit/count'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const getUnitCount_RAW_URL = function() {
  return '/unit/count'
}
export const getUnitCount_TYPE = function() {
  return 'get'
}
export const getUnitCountURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/unit/count'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Returns a List of units
 * request: getUnit
 * url: getUnitURL
 * method: getUnit_TYPE
 * raw_url: getUnit_RAW_URL
 * @param sort - Key Name to Sort by, preceded by '-' for descending, default: _id
 * @param skip - Number of records to skip from start, default: 0
 * @param limit - Number of records to return, default: 10
 * @param query - MongoDB Query as a well formed JSON String, ie {"name":"Bob"}
 * @param populate - Path to a MongoDB reference to populate, ie [{"path":"customer"},{"path":"products"}]
 */
export const getUnit = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/unit'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['sort'] !== undefined) {
    queryParameters['sort'] = parameters['sort']
  }
  if (parameters['skip'] !== undefined) {
    queryParameters['skip'] = parameters['skip']
  }
  if (parameters['limit'] !== undefined) {
    queryParameters['limit'] = parameters['limit']
  }
  if (parameters['query'] !== undefined) {
    queryParameters['query'] = parameters['query']
  }
  if (parameters['populate'] !== undefined) {
    queryParameters['populate'] = parameters['populate']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const getUnit_RAW_URL = function() {
  return '/unit'
}
export const getUnit_TYPE = function() {
  return 'get'
}
export const getUnitURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/unit'
  if (parameters['sort'] !== undefined) {
    queryParameters['sort'] = parameters['sort']
  }
  if (parameters['skip'] !== undefined) {
    queryParameters['skip'] = parameters['skip']
  }
  if (parameters['limit'] !== undefined) {
    queryParameters['limit'] = parameters['limit']
  }
  if (parameters['query'] !== undefined) {
    queryParameters['query'] = parameters['query']
  }
  if (parameters['populate'] !== undefined) {
    queryParameters['populate'] = parameters['populate']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Creates a new instance of unit
 * request: postUnit
 * url: postUnitURL
 * method: postUnit_TYPE
 * raw_url: postUnit_RAW_URL
 * @param unit -
 */
export const postUnit = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/unit'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['unit'] !== undefined) {
    body = parameters['unit']
  }
  if (parameters['unit'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: unit'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const postUnit_RAW_URL = function() {
  return '/unit'
}
export const postUnit_TYPE = function() {
  return 'post'
}
export const postUnitURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/unit'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Deletes the entire contents of collection unit
 * request: deleteUnit
 * url: deleteUnitURL
 * method: deleteUnit_TYPE
 * raw_url: deleteUnit_RAW_URL
 */
export const deleteUnit = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/unit'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('delete', domain + path, body, queryParameters, form, config)
}
export const deleteUnit_RAW_URL = function() {
  return '/unit'
}
export const deleteUnit_TYPE = function() {
  return 'delete'
}
export const deleteUnitURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/unit'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Returns a List of units
 * request: getUnitById
 * url: getUnitByIdURL
 * method: getUnitById_TYPE
 * raw_url: getUnitById_RAW_URL
 * @param id - MongoDB document _id
 */
export const getUnitById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/unit/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const getUnitById_RAW_URL = function() {
  return '/unit/{id}'
}
export const getUnitById_TYPE = function() {
  return 'get'
}
export const getUnitByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/unit/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Updates the document with the given ID
 * request: postUnitById
 * url: postUnitByIdURL
 * method: postUnitById_TYPE
 * raw_url: postUnitById_RAW_URL
 * @param id - MongoDB document _id
 * @param unit -
 */
export const postUnitById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/unit/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters['unit'] !== undefined) {
    body = parameters['unit']
  }
  if (parameters['unit'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: unit'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const postUnitById_RAW_URL = function() {
  return '/unit/{id}'
}
export const postUnitById_TYPE = function() {
  return 'post'
}
export const postUnitByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/unit/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * Deletes the document with the given ID
 * request: deleteUnitById
 * url: deleteUnitByIdURL
 * method: deleteUnitById_TYPE
 * raw_url: deleteUnitById_RAW_URL
 * @param id - MongoDB document _id
 */
export const deleteUnitById = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config
  let path = '/unit/{id}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('delete', domain + path, body, queryParameters, form, config)
}
export const deleteUnitById_RAW_URL = function() {
  return '/unit/{id}'
}
export const deleteUnitById_TYPE = function() {
  return 'delete'
}
export const deleteUnitByIdURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/unit/{id}'
  path = path.replace('{id}', `${parameters['id']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
