/**
 * 时间管理系统-swagger接口测试工具
 * SpringBoot3 集成 Swagger3接口文档
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import Task from '../model/Task';
import TaskDTO from '../model/TaskDTO';
import TaskVO from '../model/TaskVO';

/**
* TaskController service.
* @module api/TaskControllerApi
* @version v1
*/
export default class TaskControllerApi {

    /**
    * Constructs a new TaskControllerApi. 
    * @alias module:api/TaskControllerApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the addTask operation.
     * @callback module:api/TaskControllerApi~addTaskCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:model/TaskDTO} taskDTO 
     * @param {module:api/TaskControllerApi~addTaskCallback} callback The callback function, accepting three arguments: error, data, response
     */
    addTask(taskDTO, callback) {
      let postBody = taskDTO;
      // verify the required parameter 'taskDTO' is set
      if (taskDTO === undefined || taskDTO === null) {
        throw new Error("Missing the required parameter 'taskDTO' when calling addTask");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/task', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteTask operation.
     * @callback module:api/TaskControllerApi~deleteTaskCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} taskId 
     * @param {module:api/TaskControllerApi~deleteTaskCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteTask(taskId, callback) {
      let postBody = null;
      // verify the required parameter 'taskId' is set
      if (taskId === undefined || taskId === null) {
        throw new Error("Missing the required parameter 'taskId' when calling deleteTask");
      }

      let pathParams = {
        'taskId': taskId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/task/{taskId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getTasksById operation.
     * @callback module:api/TaskControllerApi~getTasksByIdCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/TaskVO>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:api/TaskControllerApi~getTasksByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/TaskVO>}
     */
    getTasksById(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['*/*'];
      let returnType = [TaskVO];
      return this.apiClient.callApi(
        '/task', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the modifyTask operation.
     * @callback module:api/TaskControllerApi~modifyTaskCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:model/Task} task 
     * @param {module:api/TaskControllerApi~modifyTaskCallback} callback The callback function, accepting three arguments: error, data, response
     */
    modifyTask(task, callback) {
      let postBody = task;
      // verify the required parameter 'task' is set
      if (task === undefined || task === null) {
        throw new Error("Missing the required parameter 'task' when calling modifyTask");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/task', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
