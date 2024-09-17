# Swagger.InsightsControllerApi

All URIs are relative to *http://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCompletionXAxis**](InsightsControllerApi.md#getCompletionXAxis) | **POST** /insight/compXAxis | 
[**getPList**](InsightsControllerApi.md#getPList) | **POST** /insight/p | 
[**getTagList**](InsightsControllerApi.md#getTagList) | **POST** /insight/tags | 
[**getTaskCompletion**](InsightsControllerApi.md#getTaskCompletion) | **POST** /insight/getTaskCompletion | 
[**getTaskDistribution**](InsightsControllerApi.md#getTaskDistribution) | **POST** /insight/getTaskDistribution | 
[**getTaskTimeSpent**](InsightsControllerApi.md#getTaskTimeSpent) | **POST** /insight/getTaskTimeSpent | 
[**getTaskTrend**](InsightsControllerApi.md#getTaskTrend) | **POST** /insight/getTaskTrend | 



## getCompletionXAxis

> [String] getCompletionXAxis(durationDTO)



### Example

```javascript
import Swagger from '_swagger';

let apiInstance = new Swagger.InsightsControllerApi();
let durationDTO = new Swagger.DurationDTO(); // DurationDTO | 
apiInstance.getCompletionXAxis(durationDTO, (error, data, response) => {
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
 **durationDTO** | [**DurationDTO**](DurationDTO.md)|  | 

### Return type

**[String]**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*


## getPList

> [String] getPList(durationDTO)



### Example

```javascript
import Swagger from '_swagger';

let apiInstance = new Swagger.InsightsControllerApi();
let durationDTO = new Swagger.DurationDTO(); // DurationDTO | 
apiInstance.getPList(durationDTO, (error, data, response) => {
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
 **durationDTO** | [**DurationDTO**](DurationDTO.md)|  | 

### Return type

**[String]**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*


## getTagList

> [String] getTagList(durationDTO)



### Example

```javascript
import Swagger from '_swagger';

let apiInstance = new Swagger.InsightsControllerApi();
let durationDTO = new Swagger.DurationDTO(); // DurationDTO | 
apiInstance.getTagList(durationDTO, (error, data, response) => {
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
 **durationDTO** | [**DurationDTO**](DurationDTO.md)|  | 

### Return type

**[String]**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*


## getTaskCompletion

> String getTaskCompletion(durationDTO)



### Example

```javascript
import Swagger from '_swagger';

let apiInstance = new Swagger.InsightsControllerApi();
let durationDTO = new Swagger.DurationDTO(); // DurationDTO | 
apiInstance.getTaskCompletion(durationDTO, (error, data, response) => {
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
 **durationDTO** | [**DurationDTO**](DurationDTO.md)|  | 

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*


## getTaskDistribution

> String getTaskDistribution(durationDTO)



### Example

```javascript
import Swagger from '_swagger';

let apiInstance = new Swagger.InsightsControllerApi();
let durationDTO = new Swagger.DurationDTO(); // DurationDTO | 
apiInstance.getTaskDistribution(durationDTO, (error, data, response) => {
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
 **durationDTO** | [**DurationDTO**](DurationDTO.md)|  | 

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*


## getTaskTimeSpent

> String getTaskTimeSpent(durationDTO)



### Example

```javascript
import Swagger from '_swagger';

let apiInstance = new Swagger.InsightsControllerApi();
let durationDTO = new Swagger.DurationDTO(); // DurationDTO | 
apiInstance.getTaskTimeSpent(durationDTO, (error, data, response) => {
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
 **durationDTO** | [**DurationDTO**](DurationDTO.md)|  | 

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*


## getTaskTrend

> String getTaskTrend(durationDTO)



### Example

```javascript
import Swagger from '_swagger';

let apiInstance = new Swagger.InsightsControllerApi();
let durationDTO = new Swagger.DurationDTO(); // DurationDTO | 
apiInstance.getTaskTrend(durationDTO, (error, data, response) => {
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
 **durationDTO** | [**DurationDTO**](DurationDTO.md)|  | 

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*

