# Swagger.TodosControllerApi

All URIs are relative to *http://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addTodo**](TodosControllerApi.md#addTodo) | **PUT** /todos/addTodo | 
[**changeStatus**](TodosControllerApi.md#changeStatus) | **POST** /todos/ch | 
[**getTodosById**](TodosControllerApi.md#getTodosById) | **GET** /todos | getTodosById
[**removeTodo**](TodosControllerApi.md#removeTodo) | **DELETE** /todos/remove | 



## addTodo

> addTodo(todoDTO)



### Example

```javascript
import Swagger from '_swagger';

let apiInstance = new Swagger.TodosControllerApi();
let todoDTO = new Swagger.TodoDTO(); // TodoDTO | 
apiInstance.addTodo(todoDTO, (error, data, response) => {
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
 **todoDTO** | [**TodoDTO**](TodoDTO.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## changeStatus

> changeStatus(body)



### Example

```javascript
import Swagger from '_swagger';

let apiInstance = new Swagger.TodosControllerApi();
let body = 789; // Number | 
apiInstance.changeStatus(body, (error, data, response) => {
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
 **body** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## getTodosById

> [TodoVO] getTodosById()

getTodosById

### Example

```javascript
import Swagger from '_swagger';

let apiInstance = new Swagger.TodosControllerApi();
apiInstance.getTodosById((error, data, response) => {
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

[**[TodoVO]**](TodoVO.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## removeTodo

> removeTodo(requestBody)



### Example

```javascript
import Swagger from '_swagger';

let apiInstance = new Swagger.TodosControllerApi();
let requestBody = [null]; // [Number] | 
apiInstance.removeTodo(requestBody, (error, data, response) => {
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
 **requestBody** | [**[Number]**](Number.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

