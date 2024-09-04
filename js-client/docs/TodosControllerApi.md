# Swagger.TodosControllerApi

All URIs are relative to *http://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addTodo**](TodosControllerApi.md#addTodo) | **PUT** /todos/addTodo | 
[**getTodosById**](TodosControllerApi.md#getTodosById) | **GET** /todos/{id} | getTodosById
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
 **todoDTO** | [**TodoDTO**](.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getTodosById

> [TodoVO] getTodosById(id)

getTodosById

### Example

```javascript
import Swagger from '_swagger';

let apiInstance = new Swagger.TodosControllerApi();
let id = 789; // Number | 
apiInstance.getTodosById(id, (error, data, response) => {
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
 **id** | **Number**|  | 

### Return type

[**[TodoVO]**](TodoVO.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## removeTodo

> removeTodo(todoIds)



### Example

```javascript
import Swagger from '_swagger';

let apiInstance = new Swagger.TodosControllerApi();
let todoIds = [null]; // [Number] | 
apiInstance.removeTodo(todoIds, (error, data, response) => {
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
 **todoIds** | [**[Number]**](Number.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

