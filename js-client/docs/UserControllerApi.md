# Swagger.UserControllerApi

All URIs are relative to *http://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**checkAuth**](UserControllerApi.md#checkAuth) | **GET** /user/parse | 
[**testSwagger**](UserControllerApi.md#testSwagger) | **GET** /user/hello | 测试Swagger3注解方法Get
[**userLogin**](UserControllerApi.md#userLogin) | **POST** /user/login | 



## checkAuth

> Number checkAuth()



### Example

```javascript
import Swagger from '_swagger';

let apiInstance = new Swagger.UserControllerApi();
apiInstance.checkAuth((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

**Number**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## testSwagger

> String testSwagger()

测试Swagger3注解方法Get

### Example

```javascript
import Swagger from '_swagger';

let apiInstance = new Swagger.UserControllerApi();
apiInstance.testSwagger((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## userLogin

> Boolean userLogin(userDTO)



### Example

```javascript
import Swagger from '_swagger';

let apiInstance = new Swagger.UserControllerApi();
let userDTO = new Swagger.UserDTO(); // UserDTO | 
apiInstance.userLogin(userDTO, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userDTO** | [**UserDTO**](UserDTO.md)|  | 

### Return type

**Boolean**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*

