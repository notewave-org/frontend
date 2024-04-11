export interface Note {
    id: number
    title: string
    createdAt: string
    updatedAt?: string
    deletedAt?: string
}

export interface NoteDetails extends Note {
    content: string
}