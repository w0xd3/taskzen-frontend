# Swagger.TaskControllerApi

All URIs are relative to *http://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addTask**](TaskControllerApi.md#addTask) | **PUT** /task | 
[**deleteTask**](TaskControllerApi.md#deleteTask) | **DELETE** /task/{taskId} | 
[**getTasksById**](TaskControllerApi.md#getTasksById) | **GET** /task/{userId} | 
[**modifyTask**](TaskControllerApi.md#modifyTask) | **POST** /task | 



## addTask

> addTask(task)



### Example

```javascript
import Swagger from '_swagger';

let apiInstance = new Swagger.TaskControllerApi();
let task = new Swagger.Task(); // Task | 
apiInstance.addTask(task, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **task** | [**Task**](Task.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## deleteTask

> deleteTask(taskId)



### Example

```javascript
import Swagger from '_swagger';

let apiInstance = new Swagger.TaskControllerApi();
let taskId = 789; // Number | 
apiInstance.deleteTask(taskId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **taskId** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getTasksById

> [TaskVO] getTasksById(userId)



### Example

```javascript
import Swagger from '_swagger';

let apiInstance = new Swagger.TaskControllerApi();
let userId = 789; // Number | 
apiInstance.getTasksById(userId, (error, data, response) => {
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
 **userId** | **Number**|  | 

### Return type

[**[TaskVO]**](TaskVO.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## modifyTask

> modifyTask(task)



### Example

```javascript
import Swagger from '_swagger';

let apiInstance = new Swagger.TaskControllerApi();
let task = new Swagger.Task(); // Task | 
apiInstance.modifyTask(task, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **task** | [**Task**](.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

