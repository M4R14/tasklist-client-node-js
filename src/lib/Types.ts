import { literal } from "gotql";
import { LiteralObject } from "gotql/dist/types/Literal";

class TTaskState {
    COMPLETED = literal`COMPLETED` 
    CREATED = literal`CREATED`
    CANCELED = literal`CANCELED`
}

export const TaskState = new TTaskState()


export interface Variable {
    id: string
    name: string
    value: string
    previewValue: string
    isValueTruncated: boolean
}

export interface TaskQuery {
    state: LiteralObject
    assigned: boolean
    assignee: string
    candidateGroup: string
    pageSize: number
    taskDefinitionId: string
    searchAfter: string[]
    searchAfterOrEqual: string[]
    searchBefore: string[]
    searchBeforeOrEqual: string[]
  }

export interface Task {
    id: string
    name: string
    taskDefinitionId: string
    processName: string
    creationTime: string
    completionTime: string
    assignee: string
    variables: Variable[]
    taskState: 'COMPLETED' | 'CREATED' | 'CANCELED'
    sortValues: [string]
    isFirst: boolean
    formKey: string
    processDefinitionId: string
    candidateGroups: string[]
}

export type TaskFields = Partial<keyof Task>[]

export interface GraphQLTasksQuery {
    operation: {
        name: 'tasks',
        args: {
            query: Partial<TaskQuery>
        },
        fields: TaskFields
    } 
}

export interface GraphQLTaskQuery {
    operation: {
        name: 'task',
        args: {
            query: { id: string }
        },
        fields: TaskFields
    } 
}

export interface VariableInput {
    name: string
    value: string
}

export interface User {
    userId: string
    displayName: string
    permissions: string[]
    roles: string[]
    salesPlanType: string
}

export interface Form {
    id: string
    processDefinitionId: string
    schema: string
  }