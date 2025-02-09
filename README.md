# Camunda 8 Tasklist API client for Node.js


[![NPM](https://nodei.co/npm/camunda-tasklist-client.png)](https://npmjs.org/package/camunda-tasklist-client) 

![Community Extension](https://img.shields.io/badge/Community%20Extension-An%20open%20source%20community%20maintained%20project-FF4700)

![Lifecycle](https://img.shields.io/badge/Lifecycle-Stable-brightgreen)

[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

A Camunda 8 Tasklist API client for Node.js. Uses [camunda-saas-oauth-nodejs](https://github.com/camunda-community-hub/camunda-saas-oauth-nodejs) to use client credentials from the environment for authentication.

## Installation

```
npm i camunda-tasklist-client
```

## Usage

Set the credential for Camunda SaaS in the environment, then: 

```typescript
import { TasklistApiClient, SaasAuthProvider } from 'camunda-tasklist-client'

const authProvider = new SaasAuthProvider()
const tasklist = new TasklistApiClient(authProvider)

async function main() {
    const { tasks } = await tasklist.getTasks({state: TaskState.CREATED})
    const task = tasks[0]
    console.log('Task', JSON.stringify(task, null, 0))
    const taskid = task.id
    const task = await tasklist.claimTask(taskid,"jwulf")
}

main()
```

## Custom Your Own Auth Provider

You can implement your own auth provider by implementing the `TasklistAuthProvider` abstract class.

```typescript
import { TasklistAuthProvider } from 'camunda-tasklist-client'

export class MyAuthProvider extends TasklistAuthProvider {
    abstract getBaseUrl(): string {
        // return the base URL of the Camunda SaaS instance
    }

    async getHeaders(): Promise<string> {
        // return the access token
    }
}
```

## API Documentation
Full API documentation available [here](https://camunda-community-hub.github.io/tasklist-client-node-js/).