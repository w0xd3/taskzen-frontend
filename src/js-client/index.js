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


import ApiClient from './ApiClient';
import Task from './model/Task';
import TaskVO from './model/TaskVO';
import TodoDTO from './model/TodoDTO';
import TodoVO from './model/TodoVO';
import TaskControllerApi from './api/TaskControllerApi';
import TodosControllerApi from './api/TodosControllerApi';
import UserControllerApi from './api/UserControllerApi';


/**
* SpringBoot3 集成 Swagger3接口文档.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var Swagger = require('index'); // See note below*.
* var xxxSvc = new Swagger.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new Swagger.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new Swagger.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new Swagger.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version v1
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The Task model constructor.
     * @property {module:model/Task}
     */
    Task,

    /**
     * The TaskVO model constructor.
     * @property {module:model/TaskVO}
     */
    TaskVO,

    /**
     * The TodoDTO model constructor.
     * @property {module:model/TodoDTO}
     */
    TodoDTO,

    /**
     * The TodoVO model constructor.
     * @property {module:model/TodoVO}
     */
    TodoVO,

    /**
    * The TaskControllerApi service constructor.
    * @property {module:api/TaskControllerApi}
    */
    TaskControllerApi,

    /**
    * The TodosControllerApi service constructor.
    * @property {module:api/TodosControllerApi}
    */
    TodosControllerApi,

    /**
    * The UserControllerApi service constructor.
    * @property {module:api/UserControllerApi}
    */
    UserControllerApi
};
