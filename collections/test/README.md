### Postman API
   > API
  >>> v10
  >>>>> Schema
  >>>>>>> ![POST](https://img.shields.io/badge/POST-yellow) Create a schema `https://api.getpostman.com/apis/{{apiId}}/schemas`

  
  
  


  >>>>>>> ![PUT](https://img.shields.io/badge/PUT-blue) Create or update a schema file `https://api.getpostman.com/apis/{{apiId}}/schemas/{{schemaId}}/files/{{filePath}}`

  
  
  


  >>>>>>> ![GET](https://img.shields.io/badge/GET-green) Get a schema `https://api.getpostman.com/apis/{{apiId}}/schemas/{{schemaId}}`

  


  >>>>>>> ![GET](https://img.shields.io/badge/GET-green) Get schema files `https://api.getpostman.com/apis/{{apiId}}/schemas/{{schemaId}}/files`

  


  >>>>>>> ![GET](https://img.shields.io/badge/GET-green) Get schema file contents `https://api.getpostman.com/apis/{{apiId}}/schemas/{{schemaId}}/files/{{filePath}}`

  


  >>>>>>> ![DELETE](https://img.shields.io/badge/DELETE-red) Delete a schema file `https://api.getpostman.com/apis/{{apiId}}/schemas/{{schemaId}}/files/{{filePath}}`

  

 
 ---
  >>>>> Version
  >>>>>>> ![POST](https://img.shields.io/badge/POST-yellow) Create a version `https://api.getpostman.com/apis/{{apiId}}/versions`

  
  
  


  >>>>>>> ![GET](https://img.shields.io/badge/GET-green) Get all versions `https://api.getpostman.com/apis/{{apiId}}/versions`

  


  >>>>>>> ![GET](https://img.shields.io/badge/GET-green) Get a version `https://api.getpostman.com/apis/{{apiId}}/versions/{{versionId}}`

  


  >>>>>>> ![PUT](https://img.shields.io/badge/PUT-blue) Update a version `https://api.getpostman.com/apis/{{apiId}}/versions/{{apiVersionId}}`

  
  
  


  >>>>>>> ![DELETE](https://img.shields.io/badge/DELETE-red) Delete a version `https://api.getpostman.com/apis/{{apiId}}/versions/{{versionId}}`

  

 
 ---
  >>>>> Collections
  >>>>>>> ![GET](https://img.shields.io/badge/GET-green) Get a collection `https://api.getpostman.com/apis/{{apiId}}/collections/{{collectionId}}`

  


  >>>>>>> ![POST](https://img.shields.io/badge/POST-yellow) Add a collection `https://api.getpostman.com/apis/{{apiId}}/collections`

  
  
  


  >>>>>>> ![PUT](https://img.shields.io/badge/PUT-blue) Sync collection with schema `https://api.getpostman.com/apis/{{apiId}}/collections/{{collectionId}}/sync-with-schema-tasks`

  

 
 ---
  >>>>> Tags
  >>>>>>> ![GET](https://img.shields.io/badge/GET-green) Get an API's tags `https://api.getpostman.com/apis/{{apiUid}}/tags`

  


  >>>>>>> ![PUT](https://img.shields.io/badge/PUT-blue) Update an API's tags `https://api.getpostman.com/apis/{{apiUid}}/tags`

  
  
  

 
 ---
  >>>>> ![POST](https://img.shields.io/badge/POST-yellow) Create an API `https://api.getpostman.com/apis?workspaceId={{workspaceId}}`

  
  
  


  >>>>> ![PUT](https://img.shields.io/badge/PUT-blue) Update an API `https://api.getpostman.com/apis/{{apiId}}`

  
  
  


  >>>>> ![GET](https://img.shields.io/badge/GET-green) Get all APIs `https://api.getpostman.com/apis?workspaceId={{workspaceId}}`

  


  >>>>> ![GET](https://img.shields.io/badge/GET-green) Get an API `https://api.getpostman.com/apis/{{apiId}}`

  


  >>>>> ![DELETE](https://img.shields.io/badge/DELETE-red) Delete an API `https://api.getpostman.com/apis/{{apiId}}`

  


  >>>>> ![GET](https://img.shields.io/badge/GET-green) Get status of an asynchronous task `https://api.getpostman.com/apis/{{apiId}}/tasks/{{taskId}}`

  

 
 ---
  >>> v9
  >>>>> API Version
  >>>>>>> ![GET](https://img.shields.io/badge/GET-green) Get all API versions `https://api.getpostman.com/apis/{{apiId}}/versions`

  


  >>>>>>> ![POST](https://img.shields.io/badge/POST-yellow) Create an API version `https://api.getpostman.com/apis/{{apiId}}/versions`

  
  
  


  >>>>>>> ![GET](https://img.shields.io/badge/GET-green) Get an API version `https://api.getpostman.com/apis/{{apiId}}/versions/{{apiVersionId}}`

  


  >>>>>>> ![PUT](https://img.shields.io/badge/PUT-blue) Update an API version `https://api.getpostman.com/apis/{{apiId}}/versions/{{apiVersionId}}`

  
  
  


  >>>>>>> ![DELETE](https://img.shields.io/badge/DELETE-red) Delete an API version `https://api.getpostman.com/apis/{{apiId}}/versions/{{apiVersionId}}`

  

 
 ---
  >>>>> Relations
  >>>>>>> ![GET](https://img.shields.io/badge/GET-green) Get unclassified relations `https://api.getpostman.com/apis/{{apiId}}/versions/{{apiVersionId}}/unclassified`

  


  >>>>>>> ![GET](https://img.shields.io/badge/GET-green) Get monitor relations `https://api.getpostman.com/apis/{{apiId}}/versions/{{apiVersionId}}/monitor`

  


  >>>>>>> ![GET](https://img.shields.io/badge/GET-green) Get  documentation relations `https://api.getpostman.com/apis/{{apiId}}/versions/{{apiVersionId}}/documentation`

  


  >>>>>>> ![GET](https://img.shields.io/badge/GET-green) Get integration test relations `https://api.getpostman.com/apis/{{apiId}}/versions/{{apiVersionId}}/integrationtest`

  


  >>>>>>> ![GET](https://img.shields.io/badge/GET-green) Get test suite relations `https://api.getpostman.com/apis/{{apiId}}/versions/{{apiVersionId}}/testsuite`

  


  >>>>>>> ![GET](https://img.shields.io/badge/GET-green) Get all linked relations `https://api.getpostman.com/apis/{{apiId}}/versions/{{apiVersionId}}/relations`

  


  >>>>>>> ![GET](https://img.shields.io/badge/GET-green) Get all test relations `https://api.getpostman.com/apis/{{apiId}}/versions/{{apiVersionId}}/test`

  


  >>>>>>> ![PUT](https://img.shields.io/badge/PUT-blue) Sync API relations with definition `https://api.getpostman.com/apis/{{apiId}}/versions/{{apiVersionId}}/:relationType/:entityId/syncWithSchema`

  


  >>>>>>> ![GET](https://img.shields.io/badge/GET-green) Get environment relations `https://api.getpostman.com/apis/{{apiId}}/versions/{{apiVersionId}}/environment`

  


  >>>>>>> ![GET](https://img.shields.io/badge/GET-green) Get contract test relations `https://api.getpostman.com/apis/{{apiId}}/versions/{{apiVersionId}}/contracttest`

  


  >>>>>>> ![POST](https://img.shields.io/badge/POST-yellow) Create relations `https://api.getpostman.com/apis/{{apiId}}/versions/{{apiVersionId}}/relations`

  
  
  

 
 ---
  >>>>> Schema
  >>>>>>> ![GET](https://img.shields.io/badge/GET-green) Get a schema `https://api.getpostman.com/apis/{{apiId}}/versions/{{apiVersionId}}/schemas/{{schemaId}}`

  


  >>>>>>> ![POST](https://img.shields.io/badge/POST-yellow) Create a schema `https://api.getpostman.com/apis/{{apiId}}/versions/{{apiVersionId}}/schemas`

  
  
  


  >>>>>>> ![POST](https://img.shields.io/badge/POST-yellow) Create a collection from a schema `https://api.getpostman.com/apis/{{apiId}}/versions/{{apiVersionId}}/schemas/{{schemaId}}/collections`

  
  
  


  >>>>>>> ![PUT](https://img.shields.io/badge/PUT-blue) Update a schema `https://api.getpostman.com/apis/{{apiId}}/versions/{{apiVersionId}}/schemas/{{schemaId}}`

  
  
  

 
 ---
  >>>>> Release
  >>>>>>> ![GET](https://img.shields.io/badge/GET-green) Get an API release `https://api.getpostman.com/apis/{{apiId}}/versions/{{apiVersionId}}/releases/{{apiReleaseId}}`

  


  >>>>>>> ![GET](https://img.shields.io/badge/GET-green) Get all API releases `https://api.getpostman.com/apis/{{apiId}}/versions/{{apiVersionId}}/releases`

  


  >>>>>>> ![POST](https://img.shields.io/badge/POST-yellow) Create an API release `https://api.getpostman.com/apis/{{apiId}}/versions/{{apiVersionId}}/releases`

  
  
  


  >>>>>>>  Update an API release `https://api.getpostman.com/apis/{{apiId}}/versions/{{apiVersionId}}/releases/{{apiReleaseId}}`

  
  
  


  >>>>>>> ![DELETE](https://img.shields.io/badge/DELETE-red) Delete an API release `https://api.getpostman.com/apis/{{apiId}}/versions/{{apiVersionId}}/releases/{{apiReleaseId}}`

  

 
 ---
  >>>>> ![GET](https://img.shields.io/badge/GET-green) Get all APIs `https://api.getpostman.com/apis`

  


  >>>>> ![POST](https://img.shields.io/badge/POST-yellow) Create an API `https://api.getpostman.com/apis`

  
  
  


  >>>>> ![GET](https://img.shields.io/badge/GET-green) Get an API `https://api.getpostman.com/apis/{{apiId}}`

  


  >>>>> ![PUT](https://img.shields.io/badge/PUT-blue) Update an API `https://api.getpostman.com/apis/{{apiId}}`

  
  
  


  >>>>> ![DELETE](https://img.shields.io/badge/DELETE-red) Delete an API `https://api.getpostman.com/apis/{{apiId}}`

  

 
 --- 
 ---
  > Collections
  >>> Items
  >>>>> Folders
  >>>>>>> ![GET](https://img.shields.io/badge/GET-green) Get a folder `https://api.getpostman.com/collections/{{collectionId}}/folders/{{folderId}}`

  


  >>>>>>> ![POST](https://img.shields.io/badge/POST-yellow) Create a folder `https://api.getpostman.com/collections/{{collectionId}}/folders`

  
  
  


  >>>>>>> ![PUT](https://img.shields.io/badge/PUT-blue) Update a folder `https://api.getpostman.com/collections/{{collectionId}}/folders/{{folderId}}`

  
  
  


  >>>>>>> ![DELETE](https://img.shields.io/badge/DELETE-red) Delete a folder `https://api.getpostman.com/collections/{{collectionId}}/folders/{{folderId}}`

  

 
 ---
  >>>>> Requests
  >>>>>>> ![GET](https://img.shields.io/badge/GET-green) Get a request `https://api.getpostman.com/collections/{{collectionId}}/requests/{{requestId}}`

  


  >>>>>>> ![POST](https://img.shields.io/badge/POST-yellow) Create a request `https://api.getpostman.com/collections/{{collectionId}}/requests`

  
  
  


  >>>>>>> ![PUT](https://img.shields.io/badge/PUT-blue) Update a request `https://api.getpostman.com/collections/{{collectionId}}/requests/{{requestId}}`

  
  
  


  >>>>>>> ![DELETE](https://img.shields.io/badge/DELETE-red) Delete a request `https://api.getpostman.com/collections/{{collectionId}}/requests/{{requestId}}`

  

 
 ---
  >>>>> Responses
  >>>>>>> ![GET](https://img.shields.io/badge/GET-green) Get a response `https://api.getpostman.com/collections/{{collectionId}}/responses/{{responseId}}`

  


  >>>>>>> ![POST](https://img.shields.io/badge/POST-yellow) Create a response `https://api.getpostman.com/collections/{{collectionId}}/responses?request={{requestId}}`

  
  
  


  >>>>>>> ![PUT](https://img.shields.io/badge/PUT-blue) Update a response `https://api.getpostman.com/collections/{{collectionId}}/responses/{{responseId}}`

  
  
  


  >>>>>>> ![DELETE](https://img.shields.io/badge/DELETE-red) Delete a response `https://api.getpostman.com/collections/{{collectionId}}/responses/{{responseId}}`

  

 
 --- 
 ---
  >>> Tags
  >>>>> ![GET](https://img.shields.io/badge/GET-green) Get a collection's tags `https://api.getpostman.com/collections/{{collectionUid}}/tags`

  


  >>>>> ![PUT](https://img.shields.io/badge/PUT-blue) Update a collection's tags `https://api.getpostman.com/collections/{{collectionUid}}/tags`

  
  
  

 
 ---
  >>> Forks
  >>>>> ![POST](https://img.shields.io/badge/POST-yellow) Create a fork `https://api.getpostman.com/collections/fork/{{collectionId}}?workspace={{workspaceId}}`

  
  
  


  >>>>> ![POST](https://img.shields.io/badge/POST-yellow) Merge a fork `https://api.getpostman.com/collections/merge`

  
  
  

 
 ---
  >>> Transformations
  >>>>> ![GET](https://img.shields.io/badge/GET-green) Transform collection to OpenAPI `https://api.getpostman.com/collections/{{collectionId}}/transformations`

  

 
 ---
  >>> ![POST](https://img.shields.io/badge/POST-yellow) Create a collection `https://api.getpostman.com/collections`

  
  
  


  >>> ![GET](https://img.shields.io/badge/GET-green) Get a collection `https://api.getpostman.com/collections/{{collectionId}}`

  


  >>> ![DELETE](https://img.shields.io/badge/DELETE-red) Delete a collection `https://api.getpostman.com/collections/{{collectionId}}`

  


  >>> ![PUT](https://img.shields.io/badge/PUT-blue) Replace a collection's data `https://api.getpostman.com/collections/{{collectionId}}`

  
  
  


  >>>  Update part of a collection `https://api.getpostman.com/collections/{{collectionId}}`

  
  
  


  >>> ![GET](https://img.shields.io/badge/GET-green) Get all collections `https://api.getpostman.com/collections`

  

 
 ---
  > Environments
  >>> ![GET](https://img.shields.io/badge/GET-green) Get an environment `https://api.getpostman.com/environments/{{environmentId}}`

  


  >>> ![DELETE](https://img.shields.io/badge/DELETE-red) Delete an environment `https://api.getpostman.com/environments/{{environmentId}}`

  


  >>> ![POST](https://img.shields.io/badge/POST-yellow) Create an environment `https://api.getpostman.com/environments`

  
  
  


  >>> ![PUT](https://img.shields.io/badge/PUT-blue) Update an environment `https://api.getpostman.com/environments/{{environmentId}}`

  
  
  


  >>> ![GET](https://img.shields.io/badge/GET-green) Get all environments `https://api.getpostman.com/environments`

  

 
 ---
  > Import
  >>> ![POST](https://img.shields.io/badge/POST-yellow) Import an OpenAPI definition `https://api.getpostman.com/import/openapi`

  
  
  


  >>> ![POST](https://img.shields.io/badge/POST-yellow) Import an exported Postman data dump file `https://api.getpostman.com/import/exported`

  
  *Body*:
  
    - type: file (text)
  
    - input: undefined (file)
  

 
 ---
  > Mocks
  >>> Call Logs
  >>>>> ![GET](https://img.shields.io/badge/GET-green) Get a mock server's call logs `https://api.getpostman.com/mocks/{{mockId}}/call-logs`

  

 
 ---
  >>> Server Responses
  >>>>> ![GET](https://img.shields.io/badge/GET-green) Get a server response `https://api.getpostman.com/mocks/{{mockId}}/server-responses/{{serverResponseId}}`

  


  >>>>> ![GET](https://img.shields.io/badge/GET-green) Get all server responses `https://api.getpostman.com/mocks/{{mockId}}/server-responses`

  


  >>>>> ![POST](https://img.shields.io/badge/POST-yellow) Create a server response `https://api.getpostman.com/mocks/{{mockId}}/server-responses`

  
  
  


  >>>>> ![PUT](https://img.shields.io/badge/PUT-blue) Update a server response `https://api.getpostman.com/mocks/{{mockId}}/server-responses/{{serverResponseId}}`

  
  
  


  >>>>> ![DELETE](https://img.shields.io/badge/DELETE-red) Delete a server response `https://api.getpostman.com/mocks/{{mockId}}/server-responses/{{serverResponseId}}`

  

 
 ---
  >>> ![GET](https://img.shields.io/badge/GET-green) Get a mock server `https://api.getpostman.com/mocks/{{mockId}}`

  


  >>> ![POST](https://img.shields.io/badge/POST-yellow) Create a mock server `https://api.getpostman.com/mocks`

  
  
  


  >>> ![GET](https://img.shields.io/badge/GET-green) Get all mock servers `https://api.getpostman.com/mocks`

  


  >>> ![DELETE](https://img.shields.io/badge/DELETE-red) Delete a mock server `https://api.getpostman.com/mocks/{{mockId}}`

  


  >>> ![DELETE](https://img.shields.io/badge/DELETE-red) Unpublish a mock server `https://api.getpostman.com/mocks/{{mockId}}/unpublish`

  


  >>> ![POST](https://img.shields.io/badge/POST-yellow) Publish a mock server `https://api.getpostman.com/mocks/{{mockId}}/publish`

  


  >>> ![PUT](https://img.shields.io/badge/PUT-blue) Update a mock server `https://api.getpostman.com/mocks/{{mockId}}`

  
  
  

 
 ---
  > Monitors
  >>> ![POST](https://img.shields.io/badge/POST-yellow) Create a monitor `https://api.getpostman.com/monitors`

  
  
  


  >>> ![POST](https://img.shields.io/badge/POST-yellow) Run a monitor `https://api.getpostman.com/monitors/{{monitorId}}/run`

  


  >>> ![DELETE](https://img.shields.io/badge/DELETE-red) Delete a monitor `https://api.getpostman.com/monitors/{{monitorId}}`

  


  >>> ![GET](https://img.shields.io/badge/GET-green) Get all monitors `https://api.getpostman.com/monitors`

  


  >>> ![GET](https://img.shields.io/badge/GET-green) Get a monitor `https://api.getpostman.com/monitors/{{monitorId}}`

  


  >>> ![PUT](https://img.shields.io/badge/PUT-blue) Update a monitor `https://api.getpostman.com/monitors/{{monitorId}}`

  
  
  

 
 ---
  > Private API Network
  >>> Element Requests
  >>>>> ![PUT](https://img.shields.io/badge/PUT-blue) Respond to an element add request `https://api.getpostman.com/network/private/network-entity/request/:id`

  
  
  


  >>>>> ![GET](https://img.shields.io/badge/GET-green) Get all element add requests `https://api.getpostman.com/network/private/network-entity/request/all`

  

 
 ---
  >>> ![GET](https://img.shields.io/badge/GET-green) Get all elements and folders `https://api.getpostman.com/network/private`

  


  >>> ![POST](https://img.shields.io/badge/POST-yellow) Add an element or folder `https://api.getpostman.com/network/private`

  
  
  


  >>> ![PUT](https://img.shields.io/badge/PUT-blue) Update an element or folder `https://api.getpostman.com/network/private/{{elementType}}/{{elementId}}`

  
  
  


  >>> ![DELETE](https://img.shields.io/badge/DELETE-red) Remove an element or folder `https://api.getpostman.com/network/private/{{elementType}}/{{elementId}}`

  

 
 ---
  > Workspaces
  >>> Tags
  >>>>> ![GET](https://img.shields.io/badge/GET-green) Get a workspace's tags `https://api.getpostman.com/workspaces/{{workspaceId}}/tags`

  


  >>>>> ![PUT](https://img.shields.io/badge/PUT-blue) Update a workspace's tags `https://api.getpostman.com/workspaces/{{workspaceId}}/tags`

  
  
  

 
 ---
  >>> Global Variables
  >>>>> ![GET](https://img.shields.io/badge/GET-green) Get global variables `https://api.getpostman.com/workspaces/{{workspaceId}}/global-variables`

  


  >>>>> ![PUT](https://img.shields.io/badge/PUT-blue) Update global variables `https://api.getpostman.com/workspaces/{{workspaceId}}/global-variables`

  
  
  

 
 ---
  >>> ![PUT](https://img.shields.io/badge/PUT-blue) Update a workspace `https://api.getpostman.com/workspaces/{{workspaceId}}`

  
  
  


  >>> ![POST](https://img.shields.io/badge/POST-yellow) Create a workspace `https://api.getpostman.com/workspaces`

  
  
  


  >>> ![GET](https://img.shields.io/badge/GET-green) Get a workspace `https://api.getpostman.com/workspaces/{{workspaceId}}`

  


  >>> ![DELETE](https://img.shields.io/badge/DELETE-red) Delete a workspace `https://api.getpostman.com/workspaces/{{workspaceId}}`

  


  >>> ![GET](https://img.shields.io/badge/GET-green) Get all workspaces `https://api.getpostman.com/workspaces`

  

 
 ---
  > Tags
  >>> ![GET](https://img.shields.io/badge/GET-green) Get elements by tag `https://api.getpostman.com/tags/:slug/entities`

  

 
 ---
  > Secret Scanner
  >>> Detected Secrets
  >>>>> ![PUT](https://img.shields.io/badge/PUT-blue) Update detected secret resolution status `https://api.getpostman.com/detected-secrets/{{secretId}}`

  
  
  


  >>>>> ![GET](https://img.shields.io/badge/GET-green) Get detected secrets locations `https://api.getpostman.com/detected-secrets/{{secretId}}/locations?workspaceId={{workspaceId}}`

  


  >>>>> ![POST](https://img.shields.io/badge/POST-yellow) Search detected secrets `https://api.getpostman.com/detected-secrets-queries`

  
  
  

 
 ---
  >>> ![GET](https://img.shields.io/badge/GET-green) Get secret types `https://api.getpostman.com/secret-types`

  

 
 ---
  > User
  >>> ![GET](https://img.shields.io/badge/GET-green) Get authenticated user `https://api.getpostman.com/me`

  

 
 ---
  > Webhooks
  >>> ![POST](https://img.shields.io/badge/POST-yellow) Create a webhook `https://api.getpostman.com/webhooks`

  
  
  

 
 ---
  > SCIM 2.0 - Identity
  >>> User Provisioning
  >>>>> ![GET](https://img.shields.io/badge/GET-green) Get a user resource `https://api.getpostman.com/scim/v2/Users/{{userId}}`

  


  >>>>> ![PUT](https://img.shields.io/badge/PUT-blue) Update a user `https://api.getpostman.com/scim/v2/Users/{{userId}}`

  
  
  


  >>>>> ![POST](https://img.shields.io/badge/POST-yellow) Create a user `https://api.getpostman.com/scim/v2/Users`

  
  
  


  >>>>> ![GET](https://img.shields.io/badge/GET-green) Get all user resources `https://api.getpostman.com/scim/v2/Users`

  


  >>>>>  Update a user's state `https://api.getpostman.com/scim/v2/Users/{{userId}}`

  
  
  

 
 ---
  >>> Group Provisioning
  >>>>> ![GET](https://img.shields.io/badge/GET-green) Get all group resources `https://api.getpostman.com/scim/v2/Groups`

  


  >>>>>  Update a group `https://api.getpostman.com/scim/v2/Groups/{{groupId}}`

  
  
  


  >>>>> ![GET](https://img.shields.io/badge/GET-green) Get a group resource `https://api.getpostman.com/scim/v2/Groups/{{groupId}}`

  


  >>>>> ![POST](https://img.shields.io/badge/POST-yellow) Create a group `https://api.getpostman.com/scim/v2/Groups`

  
  
  


  >>>>> ![DELETE](https://img.shields.io/badge/DELETE-red) Delete a group `https://api.getpostman.com/scim/v2/Groups/{{groupId}}`

  

 
 ---
  >>> ![GET](https://img.shields.io/badge/GET-green) Get resource types `https://api.getpostman.com/scim/v2/ResourceTypes`

  


  >>> ![GET](https://img.shields.io/badge/GET-green) Get service provider configuration `https://api.getpostman.com/scim/v2/ServiceProviderConfig`

  

 
 ---
  > API Security
  >>> ![POST](https://img.shields.io/badge/POST-yellow) API definition security validation `https://api.getpostman.com/security/api-validation`

  
  
  

 
 ---
  > Audit Logs
  >>> ![GET](https://img.shields.io/badge/GET-green) Get team audit logs `https://api.getpostman.com/audit/logs`

  

 
 ---