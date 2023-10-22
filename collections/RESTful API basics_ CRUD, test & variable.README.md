### RESTful API basics: CRUD, test & variable

- GET Get data `{{base_url}}/info?id=1`

<details>
<summary>Description</summary>

This is a GET request and it is used to "get" data from an endpoint. There is no request body for a GET request, but you can use query parameters to help specify the resource you want data on (e.g., in this request, we have `id=1`).

A successful GET response will have a `200 OK` status, and should include some kind of response body - for example, HTML web content or JSON data.

</details>
 
 ---
  - POST Post data `{{base_url}}/info`

_Body_ (JSON):

```json
{
	"name": "Add your name in the body"
}
```

<details>
<summary>Description</summary>

This is a POST request, submitting data to an API via the request body. This request submits JSON data, and the data is reflected in the response.

A successful POST request typically returns a `200 OK` or `201 Created` response code.

</details>
 
 ---
  - PUT Update data `{{base_url}}/info?id=1`

_Body_:

    - name: Add your name in urlencode (text)

<details>
<summary>Description</summary>

This is a PUT request and it is used to overwrite an existing piece of data. For instance, after you create an entity with a POST request, you may want to modify that later. You can do that using a PUT request. You typically identify the entity being updated by including an identifier in the URL (eg. `id=1`).

A successful PUT request typically returns a `200 OK`, `201 Created`, or `204 No Content` response code.

</details>
 
 ---
  - DELETE Delete data `{{base_url}}/info?id=1`

_Body_:

    - name: Add your name in form-data (text)

<details>
<summary>Description</summary>

This is a DELETE request, and it is used to delete data that was previously created via a POST request. You typically identify the entity being updated by including an identifier in the URL (eg. `id=1`).

A successful DELETE request typically returns a `200 OK`, `202 Accepted`, or `204 No Content` response code.

</details>
 
 ---
