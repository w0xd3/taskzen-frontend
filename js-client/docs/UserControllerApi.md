# Swagger.UserControllerApi

All URIs are relative to *http://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**testSwagger**](UserControllerApi.md#testSwagger) | **GET** /user/hello | 测试Swagger3注解方法Get



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

