## **项目构思：**

我想做一个好用的时间管理软件。市面上好像并没有一款功能比较全面比较综合的时间安排软件，经常是一个软件有我很想用的功能，但其它功能很鸡肋，或者是点哪都充值类型的软件。这次不做网站，打算做成应用程序。

**功能：**

1. **用户信息**

2. 整洁的**`Todo List`**

3. 任务记录 **Task**

4. 清晰的**calendar**/time table

5. **Time Insights**（“时间洞察” -> 数据分析功能）

6. 用户激励（`AIGC`生成**周报**）

## **技术栈：**

1. 前端：`react `+ `electron `+ `Material-UI` + `antd` + `full calendar`
   - 想上线了就把react项目打包，放到electron项目里
   - [React + Electron封装并打包成桌面应用](https://blog.csdn.net/qq_25881261/article/details/81559794)
2. 后端：`java `+`springboot`+ `mysql `+ `mybatisPlus`+`jwt`

## 具体功能设计

### 前端

#### `Navbar`

**作用：**导航栏

- 缩进
- 展示组件内容

#### `Todo List`

随想随记，输入回车键保存该待办事项。

**组件库：**`MUI`

#### 功能点

1. 增加待办事项
2. 勾选（待办事项 -> 已办事项）
3. 删除事项
   - 删除所有已办事项
   - 单独删除
4. 点击可将待办事项升级为长期任务（后面再做）

#### `Time Table`

**组件库：**full calendar

参考项目地址：[full calendar-examples/react at main  (`github.com`)](https://github.com/fullcalendar/fullcalendar-examples/tree/main/react)

**Component：**

做一个**新增/修改弹出栏**，需要让用户填写

- 任务内容
- 起始时间
- 结束时间
- 优先级
- 标签
- .......

#### 功能点

1. 新增Task操作
   - 入口：点击新增按钮
   - 默认展示当天任务
   - 通过按钮/点击日历栏新增
   - 任务条增加勾选框，勾选即完成
   - 点击任务可以选择删除或返回
2. 改变任务状态
   - 入口：单击已存在任务

3. 删除/修改Task
   - 入口：双击已存在的任务
   - 弹出Task组件

4. `Todo`升级Task（先不做）

#### `Time Insights`

**组件库：** **`ECharts`**、`Ant Design`

预计做四个图

#### 功能

提供数据分析功能，帮助用户清晰直观地了解自己的时间花费和效果

#### 指标

**筛选项：**优先级、标签

1. 任务数量分布
   - 图表类型: 饼图

2. 任务完成数量/完成率（月、周、日）
   - 图表类型：柱形图 + 折线图

3. 任务时间花费占比（月、周、日）
   - 图表类型：柱形图 + 折线图

4. 时间趋势分析
   - 任务创建时间趋势
     - 图表类型: 线图
     - 描述: 显示任务创建的时间趋势，帮助用户了解任务创建的活跃度变化。
   - 任务完成时间趋势
     - 图表类型: 线图
     - 描述: 显示任务完成的时间趋势，帮助用户了解任务完成的活跃度变化。

### 后端

#### `JWT` 用户信息



## 库表设计

- 待办事项表（`Todo`）

  - 我觉得不用把每个用户对的表单独拉出来，数据量不是很大放在一起好像也没什么问题

  - | 字段名        | 描述             | 类型      |
    | ------------- | ---------------- | --------- |
    | **`todo_id`** | 主键，待办事项id | Long      |
    | user_id       | 用户Id           | Long      |
    | text          | 任务内容         | `varchar` |
    | create_time   | 创建时间         | Long      |
    | done          | 该任务是否完成   | boolean   |
    
  - ```sql
    CREATE TABLE todos (
        todo_id BIGINT PRIMARY KEY,      -- 主键，待办事项id，类型为BIGINT
        user_id BIGINT NOT NULL,         -- 用户Id，类型为BIGINT，非空
        text VARCHAR(50) NOT NULL,      -- 任务内容
        create_time BIGINT NOT NULL,     -- 创建时间，类型为BIGINT，非空
        done BOOLEAN NOT NULL            -- 是否完成，类型为BOOLEAN，非空
    );
    ```
  
- 用户表（`User`）

  - | 字段名      | 描述   | 类型    |
    | ----------- | ------ | ------- |
    | **user_id** | 用户id | Long    |
    | username    | 用户名 | varchar |
    | password    | 密码   | varchar |
    | avatar      | 头像   | varchar |

  - ```sql
    CREATE TABLE users (
        user_id BIGINT PRIMARY KEY AUTO_INCREMENT, -- 用户id，主键，自增
        username VARCHAR(20) NOT NULL,            -- 用户名，类型为VARCHAR
        password VARCHAR(20) NOT NULL,            -- 密码，类型为VARCHAR
        avatar VARCHAR(255)                        -- 头像，类型为VARCHAR
    );
    ```
  
- 任务表（`Task`）

  - | 字段名      | 描述         | 类型    |
    | ----------- | ------------ | ------- |
    | **task_id** | 任务id       | Long    |
    | user_id     | 用户id       | Long    |
    | text        | 任务内容     | varchar |
    | p           | 优先级       | INT     |
    | tag         | 标签         | varchar |
    | description | 任务描述     | varchar |
    | done        | 是否完成     | boolean |
    | start_time  | 任务开始时间 | Long    |
    | end_time    | 任务结束时间 | Long    |
    | create_time | 创建时间     | Long    |

  - ```sql
    CREATE TABLE task (
        task_id BIGINT PRIMARY KEY AUTO_INCREMENT,  -- 任务ID，主键，自增
        user_id BIGINT NOT NULL,                    -- 用户ID，不能为NULL
        text VARCHAR(20) NOT NULL,                  -- 任务内容
        p INT DEFAULT 0,                            -- 任务优先级，默认值为0
        description VARCHAR(50) DEFAULT '',			-- 任务描述，默认值为空
        done BOOLEAN DEFAULT False,                      -- 任务完成状态
        start_time BIGINT NOT NULL,                 -- 任务开始时间
        end_time BIGINT NOT NULL,                   -- 任务结束时间
        create_time BIGINT NOT NULL,                -- 任务创建时间
        tag VARCHAR(30),                            -- 任务标签（例如：bug，feature，maintenance）
        background_color VARCHAR(7) DEFAULT '#0000FF'  -- 任务背景颜色，默认为蓝色
    );
    ```
    
  - 注意，用时间戳的格式需要在前端重新转换，full calendar只能读`YYYY-MM-DD`格式的日期

- 


## 类的设计

​	跟表的设计差不多，不同的地方应该就是会多一些请求类和响应类。

## Fake Data

**User表**

```sql
INSERT INTO users (username, password, avatar) VALUES
('Alice', 'password123', 'avatar1.png'),
('Bob', 'password456', 'avatar2.png'),
('Charlie', 'password789', 'avatar3.png');
```

**`Todo`表**

```sql
INSERT INTO todos (user_id, text, create_time, done) VALUES
(1, '吃饭', 1693459200, FALSE),
(1, '睡觉', 1693545600, FALSE),
(2, '学习', 1693632000, TRUE),
(2, '健身', 1693718400, FALSE),
(3, '购物', 1693804800, TRUE);
```

**Task表**

```sql
INSERT INTO task (user_id, text, p, description, done, start_time, end_time, create_time, tag)
VALUES
(1, '完成作业', 3, '数学作业', FALSE, 1693600000, 1693680000, 1693510000, '学习'),
(2, '阅读书籍', 2, '小说《三体》', TRUE, 1694200000, 1694290000, 1694205000, '娱乐'),
(3, '跑步锻炼', 1, '每天晨跑', FALSE, 1694100000, 1694190000, 1694085000, '健康'),
(4, '写博客', 4, '完成技术博客', TRUE, 1694300000, 1694390000, 1694250000, '工作'),
(5, '整理笔记', 2, '编程笔记整理', FALSE, 1694000000, 1694100000, 1693990000, '学习'),
(6, '团队会议', 5, '项目进展汇报', TRUE, 1694500000, 1694580000, 1694400000, '工作'),
(7, '学习新技术', 3, '学习React框架', FALSE, 1694600000, 1694690000, 1694605000, '学习'),
(8, '健身', 1, '进行力量训练', TRUE, 1693750000, 1693830000, 1693730000, '健康'),
(9, '项目开发', 4, '新功能模块开发', FALSE, 1693680000, 1693760000, 1693655000, '工作'),
(10, '休闲时光', 0, '看电影', TRUE, 1694200000, 1694290000, 1694175000, '娱乐');
```

## 联调

#### 后端swagger接口文档地址

`http://localhost:8080/swagger-ui/index.html`

#### **使用 `OpenAPI `Generator 生成 JavaScript 客户端代码s**

1. **安装 `OpenAPI Generator CLI`**

   - **通过 `npm `安装：**

   ```
   npm install @openapitools/openapi-generator-cli -g
   ```

2. **生成 JavaScript 客户端代码**

   - 使用` OpenAPI Generator `生成 JavaScript 客户端代码的命令如下：


   ```bash
   // 通过yaml
   openapi-generator-cli generate -i your-api-docs.yaml -g javascript -o ./generated-js-client
   // 通过http请求
   openapi-generator-cli generate -i http://localhost:8080/v3/api-docs -g javascript -o ./js-client
   ```

   - ``-i` 参数指定输入的 `OpenAPI `规范文件（通常是 `.yaml` 或 `.json` 格式）。
   - `-g` 参数指定生成目标语言，这里使用 `javascript`。
   - `-o` 参数指定生成的客户端代码的输出目录。

## 其它

### 名字

1. **`TimeMaster`** - 强调对时间的掌控和管理。

2. **`FocusFlow`** - 突出专注和流畅的时间管理。

3. <div style='font-weight:bold;background-color:#FFA'> TaskZen - 强调任务管理的简洁和舒适感。</div>

4. **`ChronoTrack`** - 结合时间（`Chrono`）和跟踪（`Track`）。

5. **`TempoHub`** - 强调时间的节奏和中心管理。

### 优化思考

1. `Todo`可以作为`Task`的一个属性`List<Todo>`，在“待办”中可切换`Task`
