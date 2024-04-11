import { Note } from './note'

export interface Folder {
    id: number
    name: string
    description?: string
    createdAt: string
    updatedAt?: string
    deletedAt?: string
    notes: Note[]
}
