### Postman API
   - API
  - v10
  - Schema
  - POST Create a schema `https://api.getpostman.com/apis/{{apiId}}/schemas`

  
  *Body*:
  ```json
{
    "type": "{{schemaType}}",
    "files": [
        {
            "path": "{{filePath1}}",
            "content": "{{content1}}"
        },
         {
            "path": "{{filePath2}}",
            "content": "{{content2}}"
        },
         {
            "path": "{{filePath3}}",
            "content": "{{content3}}"
        },
         {
            "path": "{{filePath4}}",
            "content": "{{content4}}"
        }
    ]
}
  ```
  
<details>
<summary>Description</summary>

Creates a schema for an API. The request body must contain the following:

- `type` — A **string** value that contains the API schema's type. One of:
    - `openapi:3_1`
    - `openapi:3`
    - `openapi:2`
    - `openapi:1`
    - `raml:0_8`
    - `raml:1`
    - `wsdl:1`
    - `wsdl:2`
    - `graphql`
    - `proto:2`
    - `proto:3`
    - `asyncapi:2`
- `files` — An **array** of schema files that contains the following:
    - `path` — A **string** value that contains the schema file's path.
    - `content` — A **string** value that contains the schema file's stringified contents.

</details>
 
 ---
  - PUT Create or update a schema file `https://api.getpostman.com/apis/{{apiId}}/schemas/{{schemaId}}/files/{{filePath}}`

  
  *Body*:
  ```json
{
    "content": "{{fileContent}}"
}
  ```
  
<details>
<summary>Description</summary>

Creates or updates an API schema file. The request body must contain the following properties:

- `content` — A **string** value that contains the file's contents.
    

**Note:**

- If the provided file path exists, the file will be updated with the new contents.
- If the provided file path does **not** exist, then a new schema file will be created.
- If the file path contains a `/` (forward slash) character, then a folder is created. For example, if the file path is the `dir/schema.json` value, then a `dir` folder is created with the `schema.json` file inside.

</details>
 
 ---
  - GET Get a schema `https://api.getpostman.com/apis/{{apiId}}/schemas/{{schemaId}}`

  
<details>
<summary>Description</summary>

Gets information about API schema. You can use the `versionId` query parameter to get a schema published in an API version.

You can use this API to do the following:

- Get a schema's metadata.
- Get all the files in a schema. This only returns the first file in the schema. The endpoint response contains a link to the next set of response results.
- Get a schema's contents in multi-file or bundled format.
    

**Note:**

The `versionId` query parameter is a **required** parameter for API viewers.

</details>
 
 ---
  - GET Get schema files `https://api.getpostman.com/apis/{{apiId}}/schemas/{{schemaId}}/files`

  
<details>
<summary>Description</summary>

Gets the files in an API schema. You can use the `versionId` query parameter to get schema files published in an API version.

**Note:**

The `versionId` query parameter is a **required** parameter for API viewers.

</details>
 
 ---
  - GET Get schema file contents `https://api.getpostman.com/apis/{{apiId}}/schemas/{{schemaId}}/files/{{filePath}}`

  
<details>
<summary>Description</summary>

Gets an API schema file contents at the defined path. You can use the `versionId` query parameter to get schema file contents published in an API version.

**Note:**

The `versionId` query parameter is a **required** parameter for API viewers.

</details>
 
 ---
  - DELETE Delete a schema file `https://api.getpostman.com/apis/{{apiId}}/schemas/{{schemaId}}/files/{{filePath}}`

  
<details>
<summary>Description</summary>

Deletes a file in an API schema.

</details>
 
 ---
  - Version
  - POST Create a version `https://api.getpostman.com/apis/{{apiId}}/versions`

  
  *Body*:
  ```json
{
    "name": "{{apiReleaseName}}",
    "releaseNotes": "{{apiReleaseDescription}}",
    "collections": [
        {
            "id": "{{collectionId}}"
        }
    ],
    "schemas": [
        {
            "id": "{{schemaId}}" 
        }
    ]
}
  ```
  
<details>
<summary>Description</summary>

Creates a new API version asynchronously and immediately returns an HTTP `202 Accepted` response. The response contains a polling link to the task status API in the `Location` header.

This endpoint is equivalent to publishing a version in Postman app, which is the snapshot of API collections and schema at a given point in time.

Include the following properties in the request body:

- `name` — A **string** value that contains the version name.
- `collections` — An **array** containing all the collections to publish.
- `schemas` — An **array** containing the schema to publish.
- `branch` — A **string** value that contains the name of the repository branch. This property is required only for Git-linked APIs.
    

You can include the following optional properties:

- `releaseNotes` — A **string** value that contains the Markdown-supported version summary.

</details>
 
 ---
  - GET Get all versions `https://api.getpostman.com/apis/{{apiId}}/versions`

  
<details>
<summary>Description</summary>

Gets all the published versions of an API.

</details>
 
 ---
  - GET Get a version `https://api.getpostman.com/apis/{{apiId}}/versions/{{versionId}}`

  
<details>
<summary>Description</summary>

Gets information about an API version.

**Note:**

- For API editors, this endpoint returns an HTTP `302 Found` status code when the version status is pending. It also returns the `/apis/{apiId}/tasks/{taskId}` task status response header.
- For API viewers, this endpoint returns an HTTP `404 Not Found` when the version status is pending.

</details>
 
 ---
  - PUT Update a version `https://api.getpostman.com/apis/{{apiId}}/versions/{{apiVersionId}}`

  
  *Body*:
  ```json
{
    "name": "{{apiVersionName}}",
    "releaseNotes": "{{releaseNotes}}"
}
  ```
  
<details>
<summary>Description</summary>

Updates an API version. Include at least one of the following properties in the request body:

- `name` — A **string** value that contains the version name.
- `releaseNotes` — A **string** value that contains the Markdown-supported release notes.
    

**Note:**

This endpoint returns an HTTP `404 Not Found` response when an API version is pending publication.

</details>
 
 ---
  - DELETE Delete a version `https://api.getpostman.com/apis/{{apiId}}/versions/{{versionId}}`

  
<details>
<summary>Description</summary>

Deletes an API version.

**Note:**

This endpoint returns an HTTP `404 Not Found` response when an API version is pending publication.

</details>
 
 ---
  - Collections
  - GET Get a collection `https://api.getpostman.com/apis/{{apiId}}/collections/{{collectionId}}`

  
<details>
<summary>Description</summary>

Gets a collection attached to an API. You can use the `versionId` query parameter to get a collection published in a version.

**Note:**

The `versionId` query parameter is a **required** parameter for API viewers.

</details>
 
 ---
  - POST Add a collection `https://api.getpostman.com/apis/{{apiId}}/collections`

  
  *Body*:
  ```json
{
    "operationType": "{{operationType}}"
}
  ```
  
<details>
<summary>Description</summary>

Adds a collection to an API. To do this, use the following `operationType` values:

- `COPY_COLLECTION` — Copies a collection from the workspace and adds it to an API.
- `CREATE_NEW` — Creates a new collection by providing the new collection's content.
- `GENERATE_FROM_SCHEMA` — Generates the collection from an API schema.
    - `options` — An **object** that contains advanced creation options and their values. You can find a complete list of properties and their values in Postman's [OpenAPI 3.0 to Postman Collection v2.1.0 Converter OPTIONS documentation](https://github.com/postmanlabs/openapi-to-postman/blob/develop/OPTIONS.md). **These properties are case-sensitive.**

For examples of each method, see the collection's response examples.

</details>
 
 ---
  - PUT Sync collection with schema `https://api.getpostman.com/apis/{{apiId}}/collections/{{collectionId}}/sync-with-schema-tasks`

  
<details>
<summary>Description</summary>

Syncs a collection attached to an API with the API schema.

This is an asynchronous endpoint that returns an HTTP `202 Accepted` response. The response contains a polling link to the `/apis/{apiId}/tasks/{taskId}` endpoint in the Location header.

**Note:**

This endpoint only supports the OpenAPI 3 schema type.

</details>
 
 ---
  - Tags
  - GET Get an API's tags `https://api.getpostman.com/apis/{{apiUid}}/tags`

  
<details>
<summary>Description</summary>

Gets all the tags associated with an API.

</details>
 
 ---
  - PUT Update an API's tags `https://api.getpostman.com/apis/{{apiUid}}/tags`

  
  *Body*:
  ```json
{
    "tags": [
        {
            "slug": "{{tagName}}"
        }
    ]
}
  ```
  
<details>
<summary>Description</summary>

Gets all the tags associated with an API. This endpoint replaces all existing tags with those you pass in the request body.

**Note:**

- You can only add a maximum of five tags to an API.
- Tags must be between `2` and `64` characters long.
- Tags must follow the `^[a-z][a-z0-9-]\\\\*[a-z0-9]+$` pattern.

</details>
 
 ---
  - POST Create an API `https://api.getpostman.com/apis?workspaceId={{workspaceId}}`

  
  *Body*:
  ```json
{
    "name": "{{apiName}}",
    "summary": "{{apiSummary}}",
    "description": "{{apiDescription}}"
}
  ```
  
<details>
<summary>Description</summary>

Creates an API. Include the following properties in the request body:

- `name` — A **string** value that contains the API's name.
    

You can include the following optional properties:

- `summary` — A **string** value that contains a summary of the API.
- `description` — A **string** value that contains the description of the API.

</details>
 
 ---
  - PUT Update an API `https://api.getpostman.com/apis/{{apiId}}`

  
  *Body*:
  ```json
{
    "name": "{{apiName}}",
    "summary": "{{apiSummary}}",
    "description": "{{apiDescription}}"
}
  ```
  
<details>
<summary>Description</summary>

Updates an API. Include at least one of the following properties in the request body:

- `name` — A **string** value that contains the API's name.
- `summary` — A **string** value that contains a summary of the API.
- `description` — A **string** value that contains the description of the API. This supports Markdown formatting.

</details>
 
 ---
  - GET Get all APIs `https://api.getpostman.com/apis?workspaceId={{workspaceId}}`

  
<details>
<summary>Description</summary>

Gets information about all APIs in a workspace.

**Note:**

This endpoint only returns APIs created or migrated in Postman v10 and higher.

</details>
 
 ---
  - GET Get an API `https://api.getpostman.com/apis/{{apiId}}`

  
<details>
<summary>Description</summary>

Gets information about an API.

**Note:**

- Git-connected APIs will **only** return the `versions` and `gitInfo` query responses. This is because schema and collection information is stored in the connected Git repository. The `gitInfo` object only lists the repository and folder locations of the files.
- API viewers can only use the `versions` option in the `include` query parameter.

</details>
 
 ---
  - DELETE Delete an API `https://api.getpostman.com/apis/{{apiId}}`

  
<details>
<summary>Description</summary>

Deletes an API.

</details>
 
 ---
  - GET Get status of an asynchronous task `https://api.getpostman.com/apis/{{apiId}}/tasks/{{taskId}}`

  
<details>
<summary>Description</summary>

Gets the status of an asynchronous task.

</details>
 
 ---
  - v9
  - API Version
  - GET Get all API versions `https://api.getpostman.com/apis/{{apiId}}/versions`

  
<details>
<summary>Description</summary>

Gets information about an API's versions.

**In Postman v9 and earlier:**

When you create an API, the system creates a single, default API version. You can use this version’s ID with any endpoints that require an API version ID.

</details>
 
 ---
  - POST Create an API version `https://api.getpostman.com/apis/{{apiId}}/versions`

  
  *Body*:
  ```json
{
	"version": {
		"name": "{{apiVersionName}}",
		"source": {
			"id": "{{apiVersionId}}",
			"schema": {{boolean}},
			"relations": {
				"monitor": {{boolean}},
				"mock": {{boolean}},
				"documentation": {{boolean}},
                "test": {{boolean}},
                "environment": {{boolean}}
			}
		}
	}
}
  ```
  
<details>
<summary>Description</summary>

**This endpoint is deprecated in Postman v10 and higher.**

Creates a new API version. Include the following request body properties in the `version` object:

- `name` — Required. A **string** that contains the API version's name.
- `source` — An **object** that contains the following properties:
    - `id` — A **string** that contains an API version's ID to copy to the created API version.
    - `schema` — A **boolean** value. If true, copy the API definition to the new API version.
    - `relations` — An **object** that contains the relation types to copy to the new API version. Each property is a **boolean** value that, if true, copies to the new API version. If you do **not** include any the following properties, the system does **not** copy them over (defaults to the `false` value):
        - `monitor`
        - `mock`
        - `documentation`
        - `test`
        - `environment`

</details>
 
 ---
  - GET Get an API version `https://api.getpostman.com/apis/{{apiId}}/versions/{{apiVersionId}}`

  
<details>
<summary>Description</summary>

Gets information about an API version.

**In Postman v9 and earlier:**

When you create an API, the system creates a single, default API version. You can use this version’s ID with any endpoints that require an API version ID.

</details>
 
 ---
  - PUT Update an API version `https://api.getpostman.com/apis/{{apiId}}/versions/{{apiVersionId}}`

  
  *Body*:
  ```json
{
	"version": {
		"name": "{{apiVersionName}}"
	}
}
  ```
  
<details>
<summary>Description</summary>

**This endpoint is deprecated in Postman v10 and higher.**

Updates an API version. Include the following request body properties in the `version` object:

- `name` — A **string** that contains the API version's name.

</details>
 
 ---
  - DELETE Delete an API version `https://api.getpostman.com/apis/{{apiId}}/versions/{{apiVersionId}}`

  
<details>
<summary>Description</summary>

**This endpoint is deprecated in Postman v10 and higher.**

Deletes an API version.

</details>
 
 ---
  - Relations
  - GET Get unclassified relations `https://api.getpostman.com/apis/{{apiId}}/versions/{{apiVersionId}}/unclassified`

  
<details>
<summary>Description</summary>

**This endpoint is for Postman v10 and higher.**

Gets all of an API version's unclassified relations.

Unclassified relations are used for documentation and testing. This is the default relation type.

</details>
 
 ---
  - GET Get monitor relations `https://api.getpostman.com/apis/{{apiId}}/versions/{{apiVersionId}}/monitor`

  
<details>
<summary>Description</summary>

**This endpoint is deprecated in Postman v10 and higher.**

Gets an API version's monitor relations.

</details>
 
 ---
  - GET Get  documentation relations `https://api.getpostman.com/apis/{{apiId}}/versions/{{apiVersionId}}/documentation`

  
<details>
<summary>Description</summary>

**This endpoint is deprecated in Postman v10 and higher.**

Gets an API version's documentation relations.

</details>
 
 ---
  - GET Get integration test relations `https://api.getpostman.com/apis/{{apiId}}/versions/{{apiVersionId}}/integrationtest`

  
<details>
<summary>Description</summary>

**This endpoint is deprecated.**

</details>
 
 ---
  - GET Get test suite relations `https://api.getpostman.com/apis/{{apiId}}/versions/{{apiVersionId}}/testsuite`

  
<details>
<summary>Description</summary>

**This endpoint is deprecated.**

</details>
 
 ---
  - GET Get all linked relations `https://api.getpostman.com/apis/{{apiId}}/versions/{{apiVersionId}}/relations`

  
<details>
<summary>Description</summary>

Gets all of an API version's relations.

**Note:**

In Postman v10 and higher, this endpoint returns the following:

- The `unclassified` relation is for documentation and testing. This is the default relation type.
- The `apiDefinition` relation is the relation used for API definitions.

</details>
 
 ---
  - GET Get all test relations `https://api.getpostman.com/apis/{{apiId}}/versions/{{apiVersionId}}/test`

  
<details>
<summary>Description</summary>

**This endpoint is deprecated in Postman v10 and higher.**

Gets all of an API version's test relations.

</details>
 
 ---
  - PUT Sync API relations with definition `https://api.getpostman.com/apis/{{apiId}}/versions/{{apiVersionId}}/:relationType/:entityId/syncWithSchema`

  
<details>
<summary>Description</summary>

Syncs an API version's relation with the API's definition.

</details>
 
 ---
  - GET Get environment relations `https://api.getpostman.com/apis/{{apiId}}/versions/{{apiVersionId}}/environment`

  
<details>
<summary>Description</summary>

**This endpoint is deprecated in Postman v10 and higher.**

Gets an API version's environment relations.

</details>
 
 ---
  - GET Get contract test relations `https://api.getpostman.com/apis/{{apiId}}/versions/{{apiVersionId}}/contracttest`

  
<details>
<summary>Description</summary>

**This endpoint is deprecated.**

</details>
 
 ---
  - POST Create relations `https://api.getpostman.com/apis/{{apiId}}/versions/{{apiVersionId}}/relations`

  
  *Body*:
  ```json
{
    "{{relationType}}": [
        "{{entityId}}"
    ]
}
  ```
  
<details>
<summary>Description</summary>

Creates a new relation for an API version. Include the following in the request body:

- `relationType` — An **array** that contains entity relations. The key value for this array must be the `unclassified` value.
    

You must include the following properties in the `relationType` array:

- `entityId` — The collection's UID value.
    

**Note:**

The following is **deprecated** in Postman API v10 and higher:

| **`relationType`** | **`entityId`** |
| --- | --- |
| `documentation` and `test` | A collection UID value. |
| `environment` | An environment UID value. |
| `mock` | A mock ID value. |
| `monitor` | A monitor ID value. |

The endpoint accepts multiple `relationType` arrays in a single call. For an example, see the example response documentation.

The `documentation` and `test` values returned in the response are the relation ID values, **not** the collection ID values.

</details>
 
 ---
  - Schema
  - GET Get a schema `https://api.getpostman.com/apis/{{apiId}}/versions/{{apiVersionId}}/schemas/{{schemaId}}`

  
<details>
<summary>Description</summary>

**This endpoint is deprecated in Postman v10 and higher.**

Gets information about an API's definition.

</details>
 
 ---
  - POST Create a schema `https://api.getpostman.com/apis/{{apiId}}/versions/{{apiVersionId}}/schemas`

  
  *Body*:
  ```json
{
	"schema": {
		"language": "{{apiDefinitionLanguage}}",
		"schema": "{{apiDefinition}}",
		"type": "{{apiDefinitionType}}"
	}
}
  ```
  
<details>
<summary>Description</summary>

**This endpoint is deprecated in Postman v10 and higher.**

Creates an API definition. The request body must contain a `schema` object with the following properties:

- `type` — A **string** value that contains the API definition's type. One of:
    - `openapi3_1`
    - `openapi3`
    - `openapi2`
    - `openapi1`
    - `raml`
    - `raml1`
    - `wsdl1`
    - `wsdl2`
    - `graphql`
    - `proto2`
    - `graphql`
    - `proto3`
- `language` — A **string** value that contains the API definition's language. One of:
    - OpenAPI and RAML — `json` or `yaml`
    - GraphQL — `graphql`
    - WSDL — `xml`
    - Protobuf — `proto`
- `schema` — A **string** value that contains the API definition's contents.

</details>
 
 ---
  - POST Create a collection from a schema `https://api.getpostman.com/apis/{{apiId}}/versions/{{apiVersionId}}/schemas/{{schemaId}}/collections`

  
  *Body*:
  ```json
{
	"name": "{{collectionName}}",
	"relations": [
		{
			"type": "{{relationType}}"
		}	
	],
    "options": {
        "{{optionName}}": "{{optionValue}}"
    }
}
  ```
  
<details>
<summary>Description</summary>

**This endpoint is deprecated in Postman v10 and higher.**

Creates a collection and links it to an API as one or multiple relations.

Include the following properties in the request body:

- `name` — A **string** that contains the name of the collection.
    

You can also include the following additional properties in the request body:

- `relations` — An **array** that contains a list of relations to create:
    - `contracttest` — **Deprecated.**
    - `integrationtest` — **Deprecated.**
    - `testsuite` — **Deprecated.**
    - `documentation`
- `options` — An **object** that contains advanced creation options and their values. You can find a complete list of properties and their values in Postman's [OpenAPI 3.0 to Postman Collection v2.1.0 Converter OPTIONS documentation](https://github.com/postmanlabs/openapi-to-postman/blob/develop/OPTIONS.md). **These properties are case-sensitive.**

</details>
 
 ---
  - PUT Update a schema `https://api.getpostman.com/apis/{{apiId}}/versions/{{apiVersionId}}/schemas/{{schemaId}}`

  
  *Body*:
  ```json
{
	"schema": {
		"language": "{{apiDefinitionLanguage}}",
        "schema": "{{apiDefinition}}",
		"type": "{{apiDefinitionType}}"
	}
}
  ```
  
<details>
<summary>Description</summary>

**This endpoint is deprecated in Postman v10 and higher.**

Updates an API definition. The request body must contain a `schema` object with the following properties:

- `type` — A **string** value that contains the API definition's type. One of:
    - `openapi3_1`
    - `openapi3`
    - `openapi2`
    - `openapi1`
    - `raml`
    - `raml1`
    - `wsdl1`
    - `wsdl2`
    - `graphql`
    - `proto2`
    - `graphql`
    - `proto3`
- `language` — A **string** value that contains the API definition's language. One of:
    - OpenAPI and RAML — `json` or `yaml`
    - GraphQL — `graphql`
    - WSDL — `xml`
    - Protobuf — `proto`
- `schema` — Optional. A **string** value that contains the API definition's contents.

</details>
 
 ---
  - Release
  - GET Get an API release `https://api.getpostman.com/apis/{{apiId}}/versions/{{apiVersionId}}/releases/{{apiReleaseId}}`

  
<details>
<summary>Description</summary>

**This endpoint is deprecated in Postman v10 and higher.**

Gets information about an API version's release.

</details>
 
 ---
  - GET Get all API releases `https://api.getpostman.com/apis/{{apiId}}/versions/{{apiVersionId}}/releases`

  
<details>
<summary>Description</summary>

**This endpoint is deprecated in Postman v10 and higher.**

Gets information about all of an API version's releases.

</details>
 
 ---
  - POST Create an API release `https://api.getpostman.com/apis/{{apiId}}/versions/{{apiVersionId}}/releases`

  
  *Body*:
  ```json
{
    "release": {
        "name": "{{apiReleaseName}}",
        "summary": "{{apiReleaseSummary}}",
        "description": "{{apiReleaseDescription}}",
        "visibility": "{{apiReleaseVisibility}}",
        "gitTag": "{{apiReleaseGitTag}}"
    }
}
  ```
  
<details>
<summary>Description</summary>

**This endpoint is deprecated in Postman v10 and higher.**

Creates a new API version release. Include the following properties in the `release` object:

- `name` — A **string** value that contains the release name.
- `visibility` — A **string** value that contains the release's visibility. One of:
    - `private` — The release is private.
    - `public` — The release is public.

You can include the following optional properties:

- `summary` — A **string** value that contains the release's summary.
- `description` — A **string** value that contains the release's description.
- `gitTag` — A **string** value that contains a valid [Git tag](https://docs.github.com/en/rest/git/tags) ID. The tag must exist in the API's connected Git repository.

</details>
 
 ---
  - PATCH Update an API release `https://api.getpostman.com/apis/{{apiId}}/versions/{{apiVersionId}}/releases/{{apiReleaseId}}`

  
  *Body*:
  ```json
{
    "release": {
        "name": "{{apiReleaseName}}",
        "summary": "{{apiReleaseSummary}}",
        "description": "{{apiReleaseDescription}}",
        "visibility": "{{apiReleaseVisibility}}",
        "gitTag": "{{apiReleaseGitTag}}"
    }
}
  ```
  
<details>
<summary>Description</summary>

**This endpoint is deprecated in Postman v10 and higher.**

Updates an API version's release. Include at least one of the following properties in the `release` object:

- `name` — A **string** value that contains the release name.
- `visibility` — A **string** value that contains the release's visibility. One of:
    - `private` — The release is private.
    - `public` — The release is public.
- `summary` — A **string** value that contains the release's summary.
- `description` — A **string** value that contains the release's description.
- `gitTag` — A **string** value that contains a valid [Git tag](https://docs.github.com/en/rest/git/tags) ID. The tag must exist in the API's connected Git repository.

</details>
 
 ---
  - DELETE Delete an API release `https://api.getpostman.com/apis/{{apiId}}/versions/{{apiVersionId}}/releases/{{apiReleaseId}}`

  
<details>
<summary>Description</summary>

**This endpoint is deprecated in Postman v10 and higher.**

Deletes an API version's release.

</details>
 
 ---
  - GET Get all APIs `https://api.getpostman.com/apis`

  
<details>
<summary>Description</summary>

Gets information about all APIs.

</details>
 
 ---
  - POST Create an API `https://api.getpostman.com/apis`

  
  *Body*:
  ```json
{
    "api": {
        "name": "{{apiName}}",
        "summary": "{{apiSummary}}",
        "description": "{{apiDescription}}"
    }
}
  ```
  
<details>
<summary>Description</summary>

Creates an API. Include the following properties in the `api` object:

*   `name` — A **string** value that contains the API's name.
    

You can include the following optional properties:

*   `summary` — A **string** value that contains a summary of the API.
*   `description` — A **string** value that contains the description of the API.

</details>
 
 ---
  - GET Get an API `https://api.getpostman.com/apis/{{apiId}}`

  
<details>
<summary>Description</summary>

Gets information about an API.

</details>
 
 ---
  - PUT Update an API `https://api.getpostman.com/apis/{{apiId}}`

  
  *Body*:
  ```json
{
	"api": {
		"name": "{{apiName}}",
        "summary": "{{apiSummary}}",
		"description": "{{apiDescription}}"
	}
}
  ```
  
<details>
<summary>Description</summary>

Updates an API. Include at least one of the following properties in the `api` object:

*   `name` — A **string** value that contains the API's name.
*   `summary` — A **string** value that contains a summary of the API.
*   `description` — A **string** value that contains the description of the API.

</details>
 
 ---
  - DELETE Delete an API `https://api.getpostman.com/apis/{{apiId}}`

  
<details>
<summary>Description</summary>

Deletes an API.

</details>
 
 ---
  - Collections
  - Items
  - Folders
  - GET Get a folder `https://api.getpostman.com/collections/{{collectionId}}/folders/{{folderId}}`

  
<details>
<summary>Description</summary>

Gets information about a folder in a collection.

</details>
 
 ---
  - POST Create a folder `https://api.getpostman.com/collections/{{collectionId}}/folders`

  
  *Body*:
  ```json
{
    "name": "{{folderName}}"
}
  ```
  
<details>
<summary>Description</summary>

Creates a folder in a collection. For a complete list of properties, refer to "Folder" in the [collection.json schema file](https://schema.postman.com/collection/json/v2.1.0/draft-07/collection.json).

You can use this endpoint to to import requests and responses into a newly-created folder. To do this, include the `requests` field and the list of request objects in the request body. For more information, see the provided examples.

**Note:**

It is recommended that you pass the `name` property in the request body. If you do not, the system uses a null value. As a result, this creates a folder with a blank name.

</details>
 
 ---
  - PUT Update a folder `https://api.getpostman.com/collections/{{collectionId}}/folders/{{folderId}}`

  
  *Body*:
  ```json
{
    "name": "{{folderName}}",
    "description": "{{folderDescription}}"
}
  ```
  
<details>
<summary>Description</summary>

Updates a folder in a collection. For a complete list of properties, refer to "Folder" in the [collection.json schema file](https://schema.postman.com/collection/json/v2.1.0/draft-07/collection.json).

**Note:**

This endpoint acts like a PATCH method. It only updates the values that you pass in the request body (for example, the `name` property). The endpoint does **not** update the entire resource.

</details>
 
 ---
  - DELETE Delete a folder `https://api.getpostman.com/collections/{{collectionId}}/folders/{{folderId}}`

  
<details>
<summary>Description</summary>

Deletes a folder in a collection.

</details>
 
 ---
  - Requests
  - GET Get a request `https://api.getpostman.com/collections/{{collectionId}}/requests/{{requestId}}`

  
<details>
<summary>Description</summary>

Gets information about a request in a collection.

</details>
 
 ---
  - POST Create a request `https://api.getpostman.com/collections/{{collectionId}}/requests`

  
  *Body*:
  ```json
{
    "name": "{{requestName}}"
}
  ```
  
<details>
<summary>Description</summary>

Creates a request in a collection. For a complete list of properties, see the [Collection Format Request documentation](https://learning.postman.com/collection-format/reference/request/).

**Note:**

It is recommended that you pass the `name` property in the request body. If you do not, the system uses a null value. As a result, this creates a request with a blank name.

</details>
 
 ---
  - PUT Update a request `https://api.getpostman.com/collections/{{collectionId}}/requests/{{requestId}}`

  
  *Body*:
  ```json
{
    "name": "{{requestName}}",
    "method": "{{requestMethod}}"
}
  ```
  
<details>
<summary>Description</summary>

Updates a request in a collection. For a complete list of properties, see the [Collection Format Request documentation](https://learning.postman.com/collection-format/reference/request/).

**Note:**

- You must pass a collection ID (`12ece9e1-2abf-4edc-8e34-de66e74114d2`), not a collection UID (`12345678-12ece9e1-2abf-4edc-8e34-de66e74114d2`), in this endpoint.
- This endpoint acts like a PATCH method. It only updates the values that you pass in the request body (for example, the `name` property). The endpoint does **not** update the entire resource.
- This endpoint does not support changing the folder of a request.

</details>
 
 ---
  - DELETE Delete a request `https://api.getpostman.com/collections/{{collectionId}}/requests/{{requestId}}`

  
<details>
<summary>Description</summary>

Deletes a request in a collection.

</details>
 
 ---
  - Responses
  - GET Get a response `https://api.getpostman.com/collections/{{collectionId}}/responses/{{responseId}}`

  
<details>
<summary>Description</summary>

Gets information about a response in a collection.

</details>
 
 ---
  - POST Create a response `https://api.getpostman.com/collections/{{collectionId}}/responses?request={{requestId}}`

  
  *Body*:
  ```json
{
    "name": "{{responseName}}"
}
  ```
  
<details>
<summary>Description</summary>

Creates a request response in a collection. For a complete list of properties, see the [Collection Format Response documentation](https://learning.postman.com/collection-format/reference/response/#reference-diagram).

**Note:**

It is recommended that you pass the `name` property in the request body. If you do not, the system uses a null value. As a result, this creates a response with a blank name.

</details>
 
 ---
  - PUT Update a response `https://api.getpostman.com/collections/{{collectionId}}/responses/{{responseId}}`

  
  *Body*:
  ```json
{
    "name": "{{responseName}}",
    "responseCode": {
        "code": {{responseHTTPcode}},
        "name": "{{responseCodeName}}"
    }
}
  ```
  
<details>
<summary>Description</summary>

Updates a response in a collection. For a complete list of properties, see the [Collection Format Response documentation](https://learning.postman.com/collection-format/reference/response/#reference-diagram).

**Note:**

- You must pass a collection ID (`12ece9e1-2abf-4edc-8e34-de66e74114d2`), not a collection UID (`12345678-12ece9e1-2abf-4edc-8e34-de66e74114d2`), in this endpoint.
- This endpoint acts like a PATCH method. It only updates the values that you pass in the request body (for example, the `name` property). The endpoint does **not** update the entire resource.

</details>
 
 ---
  - DELETE Delete a response `https://api.getpostman.com/collections/{{collectionId}}/responses/{{responseId}}`

  
<details>
<summary>Description</summary>

Deletes a response in a collection.

</details>
 
 ---
  - Tags
  - GET Get a collection's tags `https://api.getpostman.com/collections/{{collectionUid}}/tags`

  
<details>
<summary>Description</summary>

Gets all the tags associated with a collection.

</details>
 
 ---
  - PUT Update a collection's tags `https://api.getpostman.com/collections/{{collectionUid}}/tags`

  
  *Body*:
  ```json
{
    "tags": [
        {
            "slug": "{{tagName}}"
        }
    ]
}
  ```
  
<details>
<summary>Description</summary>

Updates a collection's associated tags. This endpoint replaces all existing tags with those you pass in the request body.

**Note:**

- You can only add a maximum of five tags to a collection.
    
- Tags must be between `2` and `64` characters long.
- Tags must follow the `^[a-z][a-z0-9-]\\\\*[a-z0-9]+$` pattern.

</details>
 
 ---
  - Forks
  - POST Create a fork `https://api.getpostman.com/collections/fork/{{collectionId}}?workspace={{workspaceId}}`

  
  *Body*:
  ```json
{
	"label": "{{collectionForkName}}"
}
  ```
  
<details>
<summary>Description</summary>

Creates a [fork](https://learning.postman.com/docs/collaborating-in-postman/version-control/#creating-a-fork) from an existing collection into a workspace. Include the following required request body properties:

*   `label` — The fork's label.

</details>
 
 ---
  - POST Merge a fork `https://api.getpostman.com/collections/merge`

  
  *Body*:
  ```json
{
    "strategy": "{{mergeStrategy}}",
    "source": "{{forkCollectionId}}",
    "destination": "{{destinationCollectionId}}"
}
  ```
  
<details>
<summary>Description</summary>

Merges a forked collection back into its destination collection. Include the following required properties in the request body:

*   `source` — The forked collection's ID.
*   `destination` — The destination collection's ID.
    

You can also include the following optional properties in the request body:

*   `strategy` — The fork's merge strategy. One of:
    *   `deleteSource` — The system **deletes** the forked collection after a successful merge into the destination collection.
    *   `updateSourceWithDestination` — **Default.** The system only merges the forked collection into the destination collection.

</details>
 
 ---
  - Transformations
  - GET Transform collection to OpenAPI `https://api.getpostman.com/collections/{{collectionId}}/transformations`

  
<details>
<summary>Description</summary>

Transforms an existing Postman Collection into a stringified OpenAPI definition.

**Note:**

This does **not** create an API.

</details>
 
 ---
  - POST Create a collection `https://api.getpostman.com/collections`

  
  *Body*:
  ```json
{
    "collection": {
        "info": {
            "name": "{{collectionName}}",
            "schema": "{{collectionSchemaUrl}}"
        },
        "item": [
            {
                "request": {}
            }
        ]
    }
}
  ```
  
<details>
<summary>Description</summary>

Creates a collection using the [Postman Collection v2 schema format](https://schema.postman.com/json/collection/v2.1.0/docs/index.html). Include a `collection` object in the request body that contains the following required properties:

- `info` — An **object** that contains the following properties:
    - `name` — A **string** value that contains the collection's name.
    - `schema` — A **string** that contains a URL to the collection's schema. For example, the `https://schema.getpostman.com/collection/v1` URL.
- `item` — An **object** that contains the HTTP request and response information.
    - `request` — An **object** that contains the collection's request information. For a complete list of values, refer to the `definitions.request` entry in the [collection.json schema file](https://schema.postman.com/json/collection/v2.1.0/collection.json). If you pass an empty object for this value, the system defaults to an untitled GET request.

For more information about the Collection Format, see the [Postman Collection Format documentation](https://learning.postman.com/collection-format/getting-started/overview/).

**Note:**

- For a complete list of available property values for this endpoint, use the following references available in the [collection.json schema file](https://schema.postman.com/json/collection/v2.1.0/collection.json):
    - `info` object — Use the `definitions.info` entry.
    - `item` object — Use the `definitions.items` entry.
- For all other possible values, refer to the [collection.json schema file](https://schema.postman.com/json/collection/v2.1.0/collection.json).

</details>
 
 ---
  - GET Get a collection `https://api.getpostman.com/collections/{{collectionId}}`

  
<details>
<summary>Description</summary>

Gets information about a collection. For a complete list of this endpoint's possible values, use the [collection.json schema file](https://schema.postman.com/json/collection/v2.1.0/collection.json).

</details>
 
 ---
  - DELETE Delete a collection `https://api.getpostman.com/collections/{{collectionId}}`

  
<details>
<summary>Description</summary>

Deletes a collection.

</details>
 
 ---
  - PUT Replace a collection's data `https://api.getpostman.com/collections/{{collectionId}}`

  
  *Body*:
  ```json
{
    "collection": {
        "info": {
            "name": "{{collectionName}}",
            "schema": "{{collectionSchemaUrl}}"
        },
        "item": [
            { 
                // Refer to the collection.json schema file (https://schema.postman.com/json/collection/v2.1.0/collection.json).
            }
        ]
    }
}
  ```
  
<details>
<summary>Description</summary>

Replaces the contents of a collection using the [Postman Collection v2 schema format](https://schema.postman.com/json/collection/v2.1.0/docs/index.html). Include the collection's ID values in the request body. If you do not, the endpoint removes the existing items and creates new items.

Include a `collection` object in the request body that contains the following required properties:

- `info` — An **object** that contains the following properties:
    - `name` — A **string** value that contains the collection's name.
    - `schema` — A **string** that contains a URL to the collection's schema. For example, the `https://schema.getpostman.com/collection/v1` URL.
- `item` — An **object** that contains the collection's information.
    

For a complete list of available property values for this endpoint, use the following references available in the [collection.json schema file](https://schema.postman.com/json/collection/v2.1.0/collection.json):

- `info` object — Use `"#/definitions/info"`.
- `item` object — Use `"#/definitions/item"`.
    

For all other possible values, refer to the [collection.json schema file](https://schema.postman.com/json/collection/v2.1.0/collection.json). For more information about the Collection Format, see the [Postman Collection Format documentation](https://learning.postman.com/collection-format/getting-started/overview/).

**Note:**

To copy another collection's contents to the given collection, **remove** all ID values before you pass it in this endpoint. If you do not, this endpoint returns an error. These values include the `id`, `uid`, and `postman_id` values.

</details>
 
 ---
  - PATCH Update part of a collection `https://api.getpostman.com/collections/{{collectionId}}`

  
  *Body*:
  ```json
{
    "collection": {
        "info": {
            "name": "{{collectionName}}",
            "description": "{{collectionDescription}}"
        },
        "variables": [
            // Refer to "#/definitions/variable" in the collection.json schema file (https://schema.postman.com/json/collection/v2.1.0/collection.json).
        ],
        "auth": {
            // Refer to "#/definitions/auth-attribute" in the collection.json schema file (https://schema.postman.com/json/collection/v2.1.0/collection.json).
        },
        "events": [
            // Refer to "#/definitions/event" in the collection.json schema file (https://schema.postman.com/json/collection/v2.1.0/collection.json).
        ]
    }
}
  ```
  
<details>
<summary>Description</summary>

Updates specific collection information, such as its name, events, or its variables. For more information about the `auth`, `variables`, and `events` properties, refer to the [collection.json schema file](https://schema.postman.com/json/collection/v2.1.0/collection.json):

- For `variables`, refer to `"#/definitions/variable"`.
- For `auth`, refer to `"#/definitions/auth-attribute"`.
- For `events`, refer to `"#/definitions/event"`.
    

For more information about the Collection Format, see the [Postman Collection Format documentation](https://learning.postman.com/collection-format/getting-started/overview/).

</details>
 
 ---
  - GET Get all collections `https://api.getpostman.com/collections`

  
<details>
<summary>Description</summary>

Gets all of your [collections](https://www.getpostman.com/docs/collections). The response includes all of your subscribed collections.

</details>
 
 ---
  - Environments
  - GET Get an environment `https://api.getpostman.com/environments/{{environmentId}}`

  
<details>
<summary>Description</summary>

Gets information about an environment.

</details>
 
 ---
  - DELETE Delete an environment `https://api.getpostman.com/environments/{{environmentId}}`

  
<details>
<summary>Description</summary>

Deletes an environment.

</details>
 
 ---
  - POST Create an environment `https://api.getpostman.com/environments`

  
  *Body*:
  ```json
{
    "environment": {
        "name": "{{environmentName}}",
        "values": [
            {
                "key": "{{environmentVariableName}}",
                "value": "{{environmentVariableValue}}",
                "enabled": "{{boolean}}",
                "type": "{{environmentType}}"
            }
        ]
    }
}
  ```
  
<details>
<summary>Description</summary>

Creates an environment. Include the following properties in the request body:

* `name` — A **string** that contains the environment's name.

You can also include the following properties:

* `values` — An array of objects that contains the following:
    * `key` — The variable's name.
    * `value` — The variable's value.
    * `enabled` — If true, enable the variable.
    * `type` — The variable's type. One of: `secret`, `default`, or `any`.

</details>
 
 ---
  - PUT Update an environment `https://api.getpostman.com/environments/{{environmentId}}`

  
  *Body*:
  ```json
{
    "environment": {
        "name": "{{environmentName}}",
        "values": [
            {
                "key": "{{environmentVariableName}}",
                "value": "{{environmentVariableValue}}",
                "enabled": "{{boolean}}",
                "type": "{{environmentType}}"
            }
        ]
    }
}
  ```
  
<details>
<summary>Description</summary>

Updates an environment. Include the following properties in the request body:

* `name` — A **string** that contains the environment's name.

You can also include the following optional properties:

* `values` — An array of objects that contains the following:
    * `key` — The variable's name.
    * `value` — The variable's value.
    * `enabled` — If true, enable the variable.
    * `type` — The variable's type. One of: `secret`, `default`, or `any`.

</details>
 
 ---
  - GET Get all environments `https://api.getpostman.com/environments`

  
<details>
<summary>Description</summary>

Gets information about all of your [environments](https://learning.postman.com/docs/sending-requests/managing-environments/).

</details>
 
 ---
  - Import
  - POST Import an OpenAPI definition `https://api.getpostman.com/import/openapi`

  
  *Body*:
  ```json
{
    "type": "{{APIspecificationType}}",
    "input": {{APIspecification}},
    "options": {
        "{{optionName}}": "{{optionvalue}}"
    }
}
  ```
  
<details>
<summary>Description</summary>

Imports an OpenAPI definition into Postman as a new [Postman Collection](https://learning.postman.com/docs/getting-started/creating-the-first-collection/).

Include the following properties in the request body:

- `type` — A **string** that contains the definition's type. One of:
    - `string`
    - `json`
    - `file`
- `input` — The OpenAPI definition, based on the `type` value:
    - For `string`, the definition's stringified JSON object.
    - For `json`, the definition's JSON object.
    - For `file`, a definition file. To import a file, the request body **must** be a `form-data` request and include the `type` key with the `file` value.

You can include the following additional properties in the request body:

- `options` — An **object** that contains advanced creation options and their values. You can find a complete list of properties and their values in Postman's [OpenAPI 3.0 to Postman Collection v2.1.0 Converter OPTIONS documentation](https://github.com/postmanlabs/openapi-to-postman/blob/develop/OPTIONS.md). **These properties are case-sensitive.**
    

For more information, refer to the collection's examples.

**Note:**

If you import with the `file` input method, you **must** use the Postman desktop app. The Postman web app does not support this method type.

</details>
 
 ---
  - POST Import an exported Postman data dump file `https://api.getpostman.com/import/exported`

  
  *Body*:
  
    - type: file (text)
  
    - input: undefined (file)
  
<details>
<summary>Description</summary>

Imports exported Postman data. This endpoint **only** accepts [export data dump files](https://postman.postman.co/me/export).

For more information, read our [Exporting data dumps](https://learning.postman.com/docs/getting-started/importing-and-exporting-data/#exporting-data-dumps) documentation.

## Important

This endpoint is **deprecated**.

</details>
 
 ---
  - Mocks
  - Call Logs
  - GET Get a mock server's call logs `https://api.getpostman.com/mocks/{{mockId}}/call-logs`

  
<details>
<summary>Description</summary>

Gets a mock server's call logs. You can get a maximum of 6.5MB of call logs **or** a total of 100 call logs, whichever limit is met first in one API call.

Call logs contain exchanged request and response data made to mock servers. The logs provide visibility into how the mock servers are being used. You can log data to debug, test, analyze, and more, depending upon the use case.

</details>
 
 ---
  - Server Responses
  - GET Get a server response `https://api.getpostman.com/mocks/{{mockId}}/server-responses/{{serverResponseId}}`

  
<details>
<summary>Description</summary>

Gets information about a server response.

</details>
 
 ---
  - GET Get all server responses `https://api.getpostman.com/mocks/{{mockId}}/server-responses`

  
<details>
<summary>Description</summary>

Gets all of a mock server's server responses.

</details>
 
 ---
  - POST Create a server response `https://api.getpostman.com/mocks/{{mockId}}/server-responses`

  
  *Body*:
  ```json
{
    "serverResponse": {
        "name": "{{serverStubName}}",
        "statusCode": {{statusCode}},
        "headers": [
            {
                "key": "{{headerKey}}",
                "value": "{{headerValue}}"
            }
        ],
        "body": "{{serverStubBody}}"
    }
}
  ```
  
<details>
<summary>Description</summary>

Creates a server response. Server responses let you simulate 5xx server-level responses, such as 500 or 503.

Server-level responses are agnostic to application-level logic. Server responses let you simulate this behavior on a mock server. You do not need to define each error for all exposed paths on the mock server.

If you set a server response as active, then all the calls to the mock server return with that active server response.

**Note:**

You can create multiple server responses for a mock server, but only one mock server can be set as active.

You must include the following properties in the request body:

- `name` — A **string** that contains the server response's name.
- `statusCode` — An **integer** that contains the server stub's 5xx response code. This property **only** accepts [5xx values](https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml).
    

You can also include the following optional properties:

- `headers` — An **array of objects** that contains the server stub's headers:
    - `key` — A **string** that contains the header's key.
    - `value` — A **string** that contains the header key's value. This value defines the corresponding value for the header key.
- `body` — A **string** that contains a response body that returns when you call the mock server.

</details>
 
 ---
  - PUT Update a server response `https://api.getpostman.com/mocks/{{mockId}}/server-responses/{{serverResponseId}}`

  
  *Body*:
  ```json
{
    "serverResponse": {
        "name": "{{serverStubName}}",
        "statusCode": "{{statusCode}}",
        "headers": [
            {
                "key": "{{headerKey}}",
                "value": "{{headerValue}}"
            }
        ],
        "body": "{{serverStubBody}}"
    }
}
  ```
  
<details>
<summary>Description</summary>

Updates a mock server's server response. Include at least one of the following properties in the request body:

- `name` — A **string** that contains the server response's name.
- `statusCode` — A **string** that contains the server stub's response code. This property only accepts [5xx values](https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml).
- `headers` — An **array of objects** that contains the server stub's headers:
    - `key` — A **string** that contains the header's key.
    - `value` — A **string** that contains the header key's value. This value defines the corresponding value for the header key.
- `body` — A **string** that contains a response body that returns when you call the mock server.

</details>
 
 ---
  - DELETE Delete a server response `https://api.getpostman.com/mocks/{{mockId}}/server-responses/{{serverResponseId}}`

  
<details>
<summary>Description</summary>

Deletes a mock server's server response.

</details>
 
 ---
  - GET Get a mock server `https://api.getpostman.com/mocks/{{mockId}}`

  
<details>
<summary>Description</summary>

Gets information about a mock server.

</details>
 
 ---
  - POST Create a mock server `https://api.getpostman.com/mocks`

  
  *Body*:
  ```json
{
	"mock": {
        "name": "{{mockName}}",
		"collection": "{{collectionId}}",
		"environment": "{{environmentId}}",
        "private": {{boolean}}
	}
}
  ```
  
<details>
<summary>Description</summary>

**In Postman v10 and higher you cannot create mocks for collections added to an API definition.**

Creates a mock server in a collection. Include a `mock` object in the request body that contains following properties:

- `collection` — A **string** that contains the collection ID.
    

You can include the following optional properties in the request body:

- `environment` — A **string** that contains the environment ID to associate with the mock server.
- `name` — A **string** that contains the the mock server's name.
- `private` — A **boolean** value that, if true, sets the mock server as private. By default, mock servers are public and can receive requests from anyone and anywhere.

</details>
 
 ---
  - GET Get all mock servers `https://api.getpostman.com/mocks`

  
<details>
<summary>Description</summary>

Gets all mock servers. By default, this endpoint returns only mock servers you created across all workspaces.

**Note:**

If you pass both the `teamId` and `workspace` query parameters, this endpoint only accepts the `workspace` query.

</details>
 
 ---
  - DELETE Delete a mock server `https://api.getpostman.com/mocks/{{mockId}}`

  
<details>
<summary>Description</summary>

Deletes a mock server.

</details>
 
 ---
  - DELETE Unpublish a mock server `https://api.getpostman.com/mocks/{{mockId}}/unpublish`

  
<details>
<summary>Description</summary>

Unpublishes a mock server. Unpublishing a mock server sets its **Access Control** configuration setting to private.

</details>
 
 ---
  - POST Publish a mock server `https://api.getpostman.com/mocks/{{mockId}}/publish`

  
<details>
<summary>Description</summary>

Publishes a mock server. Publishing a mock server sets its **Access Control** configuration setting to public.

</details>
 
 ---
  - PUT Update a mock server `https://api.getpostman.com/mocks/{{mockId}}`

  
  *Body*:
  ```json
{
    "mock": {
        "name": "{{mockName}}",
        "environment": "{{environmentUid}}",
        "private": {{boolean}},
        "versionTag": "{{apiVersionTagId}}",
        "config": {
          "serverResponseId": "{{serverResponseId}}"
        }
    }
}
  ```
  
<details>
<summary>Description</summary>

Updates a mock server. Include the `mock` object in the request body with one or more of the following properties:

- `name` — A **string** that contains the mock server's name.
- `environment` — A **string** that contains the environment UID.
- `private` — A **boolean** value that, if true, sets the mock server as private. By default, mock servers are public and can receive requests from anyone and anywhere.
- `versionTag` — A **string** that contains the API's version tag ID.
- `config` — An **object** that contains the following properties:
    - `serverResponseId` — A **string** that contains the server response ID. This sets the given server response as the default response for each request.

</details>
 
 ---
  - Monitors
  - POST Create a monitor `https://api.getpostman.com/monitors`

  
  *Body*:
  ```json
{
  "monitor": {
    "name": "{{monitorName}}",
    "schedule": {
      "cron": "{{cronFrequencyPattern}}",
      "timezone": "{{monitorTimezone}}"
    },
    "collection": "{{collectionUid}}",
    "environment": "{{environmentUid}}"
  }
}
  ```
  
<details>
<summary>Description</summary>

**In Postman v10 and higher you cannot create monitors for collections added to an API definition.**

Creates a monitor. Include the following properties in the request body:

- `name` — A **string** value that contains the monitor's name.
- `schedule` — An **object** that contains the following properties:
    - `cron` — A **string** value the monitor's run frequency. At this time you can only create monitors with limited schedules. For information about the available schedules, see our [Postman Monitors](https://monitor.getpostman.com) collection. See the table below for cron patterns.
    - `timezone` — A string value that contains the monitor's [timezone](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones).
- `collection` — A **string** value that contains the monitor's associated collection unique ID.
- `environment` — A **string** value that contains the monitor's associated environment unique ID.
    

### Cron patterns

| Frequency | Cron Pattern |
| --- | --- |
| Every 5 minutes | `\\\*/5 \\\* \\\* \\\* \\\*` |
| Every 30 minutes | `\\\*/30 \\\* \\\* \\\* \\\*` |
| Every Hour | `0 \\\*/1 \\\* \\\* \\\*` |
| Every 6 Hours | `0 \\\*/6 \\\* \\\* \\\*` |
| Every day at 5pm | `0 17 \\\* \\\* \\\*` |
| Every Monday at 12pm | `0 12 \\\* \\\* MON` |
| Every weekday (Monday - Friday) at 6am | `0 6 \\\* \\\* MON-FRI` |

</details>
 
 ---
  - POST Run a monitor `https://api.getpostman.com/monitors/{{monitorId}}/run`

  
<details>
<summary>Description</summary>

Runs a monitor and returns its run results.

</details>
 
 ---
  - DELETE Delete a monitor `https://api.getpostman.com/monitors/{{monitorId}}`

  
<details>
<summary>Description</summary>

Deletes a monitor.

</details>
 
 ---
  - GET Get all monitors `https://api.getpostman.com/monitors`

  
<details>
<summary>Description</summary>

Gets all monitors.

</details>
 
 ---
  - GET Get a monitor `https://api.getpostman.com/monitors/{{monitorId}}`

  
<details>
<summary>Description</summary>

Gets information about a monitor.

</details>
 
 ---
  - PUT Update a monitor `https://api.getpostman.com/monitors/{{monitorId}}`

  
  *Body*:
  ```json
{
	"monitor": {
		"name": "{{monitorName}}",
		"schedule": {
			"cron": "{{cronFrequencyPattern}}",
            "timezone": "{{monitorTimezone}}"
		}
	}
}
  ```
  
<details>
<summary>Description</summary>

Updates a monitor. Include the following properties in the request body:

- `name` — A **string** value that contains the monitor's name.
- `schedule` — An **object** that contains the following properties:
    - `cron` — A **string** value the monitor's run frequency. At this time you can only create monitors with limited schedules. For information about the available schedules, see our [Postman Monitors](https://monitor.getpostman.com) collection. See the table below for cron patterns.
    - `timezone` — A string value that contains the monitor's [timezone](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones).

### Cron patterns

| Frequency | Cron Pattern |
| --- | --- |
| Every 5 minutes | `\\*/5 \\* \\* \\* \\*` |
| Every 30 minutes | `\\*/30 \\* \\* \\* \\*` |
| Every Hour | `0 \\*/1 \\* \\* \\*` |
| Every 6 Hours | `0 \\*/6 \\* \\* \\*` |
| Every day at 5pm | `0 17 \\* \\* \\*` |
| Every Monday at 12pm | `0 12 \\* \\* MON` |
| Every weekday (Monday - Friday) at 6am | `0 6 \\* \\* MON-FRI` |

</details>
 
 ---
  - Private API Network
  - Element Requests
  - PUT Respond to an element add request `https://api.getpostman.com/network/private/network-entity/request/:id`

  
  *Body*:
  ```json
{
    "response": {
        "message": {{responderMessage}}
    },
    "status": {{responseStatus}}
}
  ```
  
<details>
<summary>Description</summary>

Responds to a user's request to add an element to the [Private API Network](https://learning.postman.com/docs/collaborating-in-postman/adding-private-network/). Include the following in the request body:

- `message` — A **string** value in a `response` object that contains a message that details why the user's request was denied.
- `status` — A **string** value that contains the request's status. One of:
    - `denied`
    - `approved`

</details>
 
 ---
  - GET Get all element add requests `https://api.getpostman.com/network/private/network-entity/request/all`

  
<details>
<summary>Description</summary>

Gets a list requests to add elements to the [Private API Network](https://learning.postman.com/docs/collaborating-in-postman/adding-private-network/).

</details>
 
 ---
  - GET Get all elements and folders `https://api.getpostman.com/network/private`

  
<details>
<summary>Description</summary>

Gets information about the folders and elements added to your [Private API Network](https://learning.postman.com/docs/collaborating-in-postman/adding-private-network/). Elements are APIs, collections, and workspaces.

**Note:**

The `limit` and `offset` parameters are separately applied to elements and folders. For example, if you query a `limit` value of `10` and an `offset` value `0`, the endpoint returns 10 elements and 10 folders for a total of 20 items. The `totalCount` property in the `meta` response is the total count of **both** elements and folders.

</details>
 
 ---
  - POST Add an element or folder `https://api.getpostman.com/network/private`

  
  *Body*:
  ```json
{
    "{{elementType}}": {
        "id": "{{elementId}}",
        "parentFolderId": {{parentFolderId}}
    }
}
  ```
  
<details>
<summary>Description</summary>

Publishes a element or creates a folder in your [Private API Network](https://learning.postman.com/docs/collaborating-in-postman/adding-private-network/). An element is a Postman API, collection, or workspace.

Include the following in the request body object:

- `elementType` — The Private API Network element type. One of:
    - `api`
    - `folder`
    - `collection`
    - `workspace`

In the `elementType` object, include the following values:

**For APIs and Workspaces:**

- `id` — A **string** value that contains the element's ID.
- `parentFolderId` — An **integer** value that contains the element's parent folder ID.
    

**For Collections:**

- `id` — A **string** value that contains the collection's UID (`userId`\-`collectionId`).
- `summary` — A **string** value that contains the collection's summary.
- `parentFolderId` — An **integer** value that contains the collection's parent folder ID.
    

**For Private API Network Folders:**

- `name` — A **string** value that contains the folder's name.
- `description` — A **string** value that contains the folder's description.
- `parentFolderId` — An **integer** value that contains the folder's parent folder ID.

</details>
 
 ---
  - PUT Update an element or folder `https://api.getpostman.com/network/private/{{elementType}}/{{elementId}}`

  
  *Body*:
  ```json
{
    "{{elementType}}": {
        "parentFolderId": {{parentFolderId}}
    }
}
  ```
  
<details>
<summary>Description</summary>

Updates an element or folder in your [Private API Network](https://learning.postman.com/docs/collaborating-in-postman/adding-private-network/). When you call this endpoint, the `elementType` property must be the `api`, `folder`, `collection`, or `workspace` value.

The `elementId` value is the `api`, `folder`, or `workspace` element's ID. For `collection`, this value is the collection's UID (`userId`\-`collectionId`).

Include the following in the request body object:

- `elementType` — The Private API Network element type. One of:
    - `api`
    - `folder`
    - `collection`
    - `workspace`

In the `elementType` object, include the following values:

- `parentFolderId` — The element's new Private API Network folder ID.
    

**For Collections:**

- `summary` — A **string** value that contains the collection's new summary.
    

**For Private API Network Folders:**

You can include the following optional properties:

- `description` — A **string** value that contains the folder's new description.
- `name` — A **string** value that contains the folder's new name.

</details>
 
 ---
  - DELETE Remove an element or folder `https://api.getpostman.com/network/private/{{elementType}}/{{elementId}}`

  
<details>
<summary>Description</summary>

Removes an element or delete a folder from your [Private API Network](https://learning.postman.com/docs/collaborating-in-postman/adding-private-network/).

**Note:**

Removing an API, collection, or workspace element does **not** delete it. It only removes it from the Private API Network folder.

</details>
 
 ---
  - Workspaces
  - Tags
  - GET Get a workspace's tags `https://api.getpostman.com/workspaces/{{workspaceId}}/tags`

  
<details>
<summary>Description</summary>

Gets all the tags associated with a workspace.

</details>
 
 ---
  - PUT Update a workspace's tags `https://api.getpostman.com/workspaces/{{workspaceId}}/tags`

  
  *Body*:
  ```json
{
    "tags": [
        {
            "slug": "{{tagName}}"
        }
    ]
}
  ```
  
<details>
<summary>Description</summary>

Updates a workspace's associated tags. This endpoint replaces all existing tags with those you pass in the request body.

**Note:**

- You can only add a maximum of five tags to an API.
    
- Tags must be between `2` and `64` characters long.
    
- Tags must follow the `^[a-z][a-z0-9-]\\\\*[a-z0-9]+$` pattern.

</details>
 
 ---
  - Global Variables
  - GET Get global variables `https://api.getpostman.com/workspaces/{{workspaceId}}/global-variables`

  
<details>
<summary>Description</summary>

Gets a workspace's global [variables](https://learning.postman.com/docs/sending-requests/variables/#variable-scopes).

</details>
 
 ---
  - PUT Update global variables `https://api.getpostman.com/workspaces/{{workspaceId}}/global-variables`

  
  *Body*:
  ```json
{
  "values": [
    {
      "key": "{{keyName}}",
      "type": "{{keyType}}",
      "value": "{{keyValue}}",
      "enabled": {{boolean}}
    }
  ]
}
  ```
  
<details>
<summary>Description</summary>

Updates and replaces a workspace's global [variables](https://learning.postman.com/docs/sending-requests/variables/#variable-scopes). This endpoint replaces all existing global variables with the variables you pass in the request body:

- `key` — A **string** that contains the variable's name.
- `type` — A **string** that contains the [type](https://learning.postman.com/docs/sending-requests/variables/#variable-types) of variable. Accepts `default` or `secret`.
- `value` — A **string** that contains the variable's value.
- `enabled` — A **boolean** that, if true, enables the variable.

</details>
 
 ---
  - PUT Update a workspace `https://api.getpostman.com/workspaces/{{workspaceId}}`

  
  *Body*:
  ```json
{
    "workspace": {
        "name": "{{workspaceName}}",
        "type": "{{workspaceType}}",
        "description": "{{workspaceDescription}}"
    }
}
  ```
  
<details>
<summary>Description</summary>

Updates a workspace. Use the following request body properties to update the workspace:

- `name` — A **string** that contains the workspace's new name.
- `description` — A **string** that contains the new workspace description.
- `type` — A **string** that contains the new workspace visibility [type](https://learning.postman.com/docs/collaborating-in-postman/using-workspaces/managing-workspaces/#changing-workspace-visibility). This property does <u>not</u> support the following workspace visibility changes:
    - `private` to `public`
    - `public` to `private`
    - `private` to `personal`
    - `team` to `personal`
    - `public` to `personal` for a team user

### **Important**

We **deprecated** linking collections or environments between workspaces. We do **not** recommend that you do this.

If you have a linked collection or environment, note the following:

- The endpoint does **not** create a clone of a collection or environment.
- Any changes you make to a linked collection or environment changes them in **all** workspaces.
- If you delete a collection or environment linked between workspaces, the system deletes it in **all** the workspaces.

</details>
 
 ---
  - POST Create a workspace `https://api.getpostman.com/workspaces`

  
  *Body*:
  ```json
{
    "workspace": {
        "name": "{{workspaceName}}",
        "type": "{{workspaceType}}",
        "description": "{{workspaceDescription}}"
    }
}
  ```
  
<details>
<summary>Description</summary>

Creates a new [workspace](https://learning.postman.com/docs/collaborating-in-postman/using-workspaces/creating-workspaces/). Include the following properties in the request body:

- `name` — A **string** that contains the workspace's name.
- `type` — A **string** that contains the workspace type:
    - `personal`
    - `private` — Private workspaces are available on Postman [Professional and Enterprise plans](https://www.postman.com/pricing).
    - `public`
    - `team`
    - `partner` — [Partner Workspaces](https://learning.postman.com/docs/collaborating-in-postman/using-workspaces/partner-workspaces/) are available on Postman [Enterprise Ultimate plans](https://www.postman.com/pricing).
- `description` — Optional. A **string** that contains a description of the workspace.
    

### Important

We **deprecated** linking collections or environments between workspaces. We do **not** recommend that you do this.

If you have a linked collection or environment, note the following:

- The endpoint does **not** create a clone of a collection or environment.
- Any changes you make to a linked collection or environment changes them in **all** workspaces.
- If you delete a collection or environment linked between workspaces, the system deletes it in **all** the workspaces.

</details>
 
 ---
  - GET Get a workspace `https://api.getpostman.com/workspaces/{{workspaceId}}`

  
<details>
<summary>Description</summary>

Gets information about a workspace.

**Note:**

This endpoint's response also contains the `visibility` field. [Visibility](https://learning.postman.com/docs/collaborating-in-postman/using-workspaces/managing-workspaces/#changing-workspace-visibility) determines who can access the workspace:

- `personal` — Only you can access the workspace.
- `team` — All team members can access the workspace.
- `private` — Only invited team members can access the workspace ([Professional and Enterprise plans only](https://www.postman.com/pricing)).
- `public` — Everyone can access the workspace.
- `partner` — Only invited team members and [partners](https://learning.postman.com/docs/collaborating-in-postman/using-workspaces/partner-workspaces/) can access the workspace ([Enterprise Ultimate plans](https://www.postman.com/pricing) only).
    

### Important

We have **deprecated** the `name` and `uid` responses in the following array of objects:

- `collections`
- `environments`
- `mocks`
- `monitors`
- `apis`

</details>
 
 ---
  - DELETE Delete a workspace `https://api.getpostman.com/workspaces/{{workspaceId}}`

  
<details>
<summary>Description</summary>

Deletes an existing workspace.

### **Important:**

If you delete a workspace that has a linked collection or environment with another workspace, this will delete the collection and environment in **all** workspaces.

</details>
 
 ---
  - GET Get all workspaces `https://api.getpostman.com/workspaces`

  
<details>
<summary>Description</summary>

Gets all [workspaces](https://learning.postman.com/docs/collaborating-in-postman/using-workspaces/creating-workspaces/). The response includes your workspaces and any workspaces that you have access to.

**Note:**

This endpoint's response contains the `visibility` field. [Visibility](https://learning.postman.com/docs/collaborating-in-postman/using-workspaces/managing-workspaces/#changing-workspace-visibility) determines who can access the workspace:

- `personal` — Only you can access the workspace.
- `team` — All team members can access the workspace.
- `private` — Only invited team members can access the workspace ([Professional and Enterprise plans only](https://www.postman.com/pricing)).
- `public` — Everyone can access the workspace.
- `partner` — Only invited team members and [partners](https://learning.postman.com/docs/collaborating-in-postman/using-workspaces/partner-workspaces/) can access the workspace ([Enterprise Ultimate plans](https://www.postman.com/pricing) only).

</details>
 
 ---
  - Tags
  - GET Get elements by tag `https://api.getpostman.com/tags/:slug/entities`

  
<details>
<summary>Description</summary>

Gets Postman elements (entities) by a given tag. Tags enable you to organize and search [workspaces](https://learning.postman.com/docs/collaborating-in-postman/using-workspaces/managing-workspaces/#tagging-a-workspace), [APIs](https://learning.postman.com/docs/designing-and-developing-your-api/managing-apis/#tagging-apis), and [collections](https://learning.postman.com/docs/collections/using-collections/#tagging-a-collection) that contain shared tags.

**Note:**

Tagging is available on [Postman Enterprise plans](https://www.postman.com/pricing/).

</details>
 
 ---
  - Secret Scanner
  - Detected Secrets
  - PUT Update detected secret resolution status `https://api.getpostman.com/detected-secrets/{{secretId}}`

  
  *Body*:
  ```json
{
    "resolution": "{{secretResolutionStatus}}",
    "workspaceId": "{{workspaceId}}"
}
  ```
  
<details>
<summary>Description</summary>

Updates the resolution status of a secret detected in a workspace.

Include the following in the request body:

- `resolution` — The secret's updated resolution status:
    
    - `FALSE_POSITIVE` — The discovered secret is not an actual secret.
        
    - `REVOKED` — The secret is valid, but the user rotated their key to resolve the issue.
        
    - `ACCEPTED_RISK` — The Secret Scanner found the secret, but user accepts the risk of publishing it.
        
- `workspaceId` — The ID of the workspace that contains the secret.

</details>
 
 ---
  - GET Get detected secrets locations `https://api.getpostman.com/detected-secrets/{{secretId}}/locations?workspaceId={{workspaceId}}`

  
<details>
<summary>Description</summary>

Gets the locations of secrets detected by Postman's [Secret Scanner](https://learning.postman.com/docs/administration/secret-scanner/).

</details>
 
 ---
  - POST Search detected secrets `https://api.getpostman.com/detected-secrets-queries`

  
  *Body*:
  ```json
{
    "secretTypes": [
        "{{secretTypeIds}}"
    ],
    "resolved": {{boolean}},
    "statuses": [
        "{{secretStatuses}}"
    ],
    "workspaceIds": [
        "{{workspaceIds}}"
    ],
    "workspaceVisiblities": [
        "{{workspaceVisibility}}"
    ]
}
  ```
  
<details>
<summary>Description</summary>

Returns all secrets detected by Postman's [Secret Scanner](https://learning.postman.com/docs/administration/secret-scanner/), grouped by workspace. If you pass an empty request body, this endpoint returns all results.

You can include the following properties in the request body:

- `secretTypes` — A list of secrets types to query. For a list of valid IDs, use the GET `/secret-types` endpoint.
    
- `resolved` — If true, return secrets with a `resolved` status.
- `statuses` — The secret resolution status type:
    - `FALSE_POSITIVE` — The discovered secret is not an actual secret.
    - `REVOKED` — The secret is valid, but the user rotated their key to resolve the issue.
    - `ACCEPTED_RISK` — The Secret Scanner found the secret, but user accepts the risk of publishing it.
- `workspaceIds` — A list of workspaces IDs to query.
- `workspaceVisibilities` — A list of workspace [visibility settings](https://learning.postman.com/docs/collaborating-in-postman/using-workspaces/managing-workspaces/#changing-workspace-visibility) to query. This currently supports the `team` and `public` settings.

</details>
 
 ---
  - GET Get secret types `https://api.getpostman.com/secret-types`

  
<details>
<summary>Description</summary>

Gets the metadata of the secret types supported by Postman's [Secret Scanner](https://learning.postman.com/docs/administration/secret-scanner/). You can use a secret type's ID in the response to query data with the POST `/detected-secrets/{secretId}` endpoint.

</details>
 
 ---
  - User
  - GET Get authenticated user `https://api.getpostman.com/me`

  
<details>
<summary>Description</summary>

Gets information about the authenticated user.

**Note:**

This API returns a different response for users with the [Guest role](https://learning.postman.com/docs/collaborating-in-postman/roles-and-permissions/#team-roles).

</details>
 
 ---
  - Webhooks
  - POST Create a webhook `https://api.getpostman.com/webhooks`

  
  *Body*:
  ```json
{
    "webhook":{
        "name": "{{webhookName}}",
        "collection": "{{collectionUid}}"
    }
}
  ```
  
<details>
<summary>Description</summary>

Creates a webhook that triggers a collection with a custom payload. You can get the webhook's URL from the `webhookUrl` property in the endpoint's response.

Include the following properties in a `webhook` object in the request body:

*   `name` — The webhook's name. On success, the system creates a new monitor with this name in the **Monitors** tab.
*   `collection` — The collection UID to trigger when calling this webhook.

</details>
 
 ---
  - SCIM 2.0 - Identity
  - User Provisioning
  - GET Get a user resource `https://api.getpostman.com/scim/v2/Users/{{userId}}`

  
<details>
<summary>Description</summary>

Gets information about a Postman team member.

</details>
 
 ---
  - PUT Update a user `https://api.getpostman.com/scim/v2/Users/{{userId}}`

  
  *Body*:
  ```json
{
    "schemas": [
        "urn:ietf:params:scim:schemas:core:2.0:User"
        ],
    "userName": "{{userName}}",
    "name": {
        "givenName": "{{firstName}}",
        "familyName": "{{lastName}}"
    },
    "externalId": "{{externalId}}",
    "locale": "{{locale}}",
    "groups": [
        "{{groupId}}"
    ],
    "active": {{boolean}}
}
  ```
  
<details>
<summary>Description</summary>

Updates a user's first and last name in Postman.

**Note:**

This endpoint only updates a user's first and last name and pushes it to Postman. You cannot update any other user attributes with the SCIM API.

</details>
 
 ---
  - POST Create a user `https://api.getpostman.com/scim/v2/Users`

  
  *Body*:
  ```json
{
    "schemas": [
        "urn:ietf:params:scim:schemas:core:2.0:User"
    ],
    "userName": "{{userEmail}}",
    "name": {
        "givenName": "{{firstName}}",
        "familyName": "{{lastName}}"
    },
    "locale": "{{locale}}",
    "groups": [
        "{{groupId}}"
    ],
    "active": {{boolean}}
}
  ```
  
<details>
<summary>Description</summary>

Creates a new user account in Postman and adds the user to your organization's Postman team. If the account does not already exist, this also activates the user so they can authenticate in to your Postman team.

If the account already exists, the system sends the user an [email invite](https://learning.postman.com/docs/administration/managing-your-team/managing-your-team/#inviting-users) to join the Postman team. The user joins the team once they accept the invite.

By default, the system assigns new users the developer role. You can [update user roles in Postman](https://learning.postman.com/docs/administration/managing-your-team/managing-your-team/#managing-team-roles).

</details>
 
 ---
  - GET Get all user resources `https://api.getpostman.com/scim/v2/Users`

  
<details>
<summary>Description</summary>

Gets information about all Postman team members.

</details>
 
 ---
  - PATCH Update a user's state `https://api.getpostman.com/scim/v2/Users/{{userId}}`

  
  *Body*:
  ```json
{
    "schemas": [
        "urn:ietf:params:scim:api:messages:2.0:PatchOp"
    ],
    "Operations": [
        {
            "op": "replace",
            "value": {
                "active": {{boolean}}
            }
        }
    ]
}
  ```
  
<details>
<summary>Description</summary>

Updates a user's active state in Postman. Set the `active` property in the request body to one of the following values:

- `true` — Activates the user. This lets them authenticate in to your Postman team.
- `false` — Removes the user from your Postman team and deactivates the account. This blocks the user from authenticating in to Postman.
    

### Reactivating users

By setting the `active` property from `false` to `true`, this reactivates an account. This allows the account to authenticate in to Postman and adds the account back on to your Postman team.

</details>
 
 ---
  - Group Provisioning
  - GET Get all group resources `https://api.getpostman.com/scim/v2/Groups`

  
<details>
<summary>Description</summary>

Gets all Postman groups within the team.

</details>
 
 ---
  - PATCH Update a group `https://api.getpostman.com/scim/v2/Groups/{{groupId}}`

  
  *Body*:
  ```json
{
    "schemas": [
        "urn:ietf:params:scim:api:messages:2.0:PutOp"
    ],
    "Operations": [
        {
            "op": "{{operation}}",
            "value": {
                "id": "{{groupId}}",
                "displayName": "{{userGroupName}}"
            }
        }
    ]
}
  ```
  
<details>
<summary>Description</summary>

Updates a group's information. Using this endpoint you can:

- Update a group's name.
- Add or remove members from a Postman group.
    

Include the following properties in the request body:

- `Operations` — An **object** that contains the following properties:
    - `op` — The operation to perform. One of:
        - `add`
        - `remove`
        - `replace`
    - `value` — An **object** that contains the following properties:
        - `id` — The group's ID.
        - `displayName` — The group's display name.

</details>
 
 ---
  - GET Get a group resource `https://api.getpostman.com/scim/v2/Groups/{{groupId}}`

  
<details>
<summary>Description</summary>

Gets information about a Postman group within the team.

</details>
 
 ---
  - POST Create a group `https://api.getpostman.com/scim/v2/Groups`

  
  *Body*:
  ```json
{
    "schemas": ["urn:ietf:params:scim:schemas:core:2.0:Group"],
    "displayName": {{ userGroup }},
    "members": []
}
  ```
  
<details>
<summary>Description</summary>

Creates a new user group in Postman and creates a new account for each group member.

Each account is added to your Postman team and authentication is activated for each user. If an existing Postman account uses an email that matches a group member's email ID, an [email invite](https://postman.postman.co/docs/administration/managing-your-team/managing-your-team/#invites) to join your Postman team is sent to that user. Once the user accepts the invite, they'll be added to your team.

By default, the system assigns new users the developer role. You can [update user roles in Postman](https://learning.postman.com/docs/administration/managing-your-team/managing-your-team/#managing-team-roles).

</details>
 
 ---
  - DELETE Delete a group `https://api.getpostman.com/scim/v2/Groups/{{groupId}}`

  
<details>
<summary>Description</summary>

Deletes a group in Postman.

User accounts that were in the deleted group are deactivated in Postman if the app is assigned to the user only with the deleted group.

User accounts and the data corresponding to them are **not** deleted. To permanently delete user accounts and their data, [contact Postman support](https://www.postman.com/support/).

</details>
 
 ---
  - GET Get resource types `https://api.getpostman.com/scim/v2/ResourceTypes`

  
<details>
<summary>Description</summary>

Gets all the resource types supported by Postman's SCIM API.

</details>
 
 ---
  - GET Get service provider configuration `https://api.getpostman.com/scim/v2/ServiceProviderConfig`

  
<details>
<summary>Description</summary>

Gets the Postman SCIM API configuration information. This includes a list of supported operations.

</details>
 
 ---
  - API Security
  - POST API definition security validation `https://api.getpostman.com/security/api-validation`

  
  *Body*:
  ```json
{
    "schema": {
        "type": "{{schemaType}}",
        "language": "{{schemaLanguage}}",
        "schema": "{{schemaBody}}"
    }
}
  ```
  
<details>
<summary>Description</summary>

Performs an analysis on the given definition and returns any issues based on your [predefined rulesets](https://learning.postman.com/docs/api-governance/configurable-rules/configurable-rules-overview/). This endpoint can help you understand the violations' impact and offers solutions to help you resolve any errors. You can include this endpoint to your CI/CD process to automate schema validation.

For more information, see our [Rule violations in the API definition](https://learning.postman.com/docs/api-governance/api-definition/api-definition-warnings/) documentation.

Include the following properties in the request body:

- `type` — A **string** value that contains the API definition's type. One of:
    - `openapi3`
    - `openapi2`
- `language` — A **string** value that contains the API definition's language. One of:
    - `json`
    - `yaml`
- `schema` — A **string** value that contains the API definition's contents.
    

**Note:**

- The maximum allowed size of the definition is 10 MB.
- You must [import and enable](https://learning.postman.com/docs/api-governance/configurable-rules/configuring-api-security-rules/) [OWASP security rules](https://postman.postman.co/api-governance/libraries/postman_owasp/view) in Postman for this endpoint to return any security rule violations.

</details>
 
 ---
  - Audit Logs
  - GET Get team audit logs `https://api.getpostman.com/audit/logs`

  
<details>
<summary>Description</summary>

Gets a list of your team's generated audit events. For a complete list of all audit events, read our [Utilizing audit logs](https://learning.postman.com/docs/administration/audit-logs/) documentation.

</details>
 
 ---