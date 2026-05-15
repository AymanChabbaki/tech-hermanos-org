export interface IContact {
  _id: string
  name: string
  email: string
  company?: string
  phone?: string
  message: string
  status: 'new' | 'read' | 'replied'
  createdAt: Date
  updatedAt: Date
}

let contacts: IContact[] = []

export const Contact = {
  create: async (data: any) => {
    const newContact = {
      ...data,
      _id: Math.random().toString(36).substr(2, 9),
      status: 'new',
      createdAt: new Date(),
      updatedAt: new Date(),
    }
    contacts.push(newContact)
    return newContact
  },
  find: () => ({
    sort: () => contacts,
  }),
  findByIdAndUpdate: async (id: string, update: any) => {
    const index = contacts.findIndex(c => c._id === id)
    if (index === -1) return null
    contacts[index] = { ...contacts[index], ...update, updatedAt: new Date() }
    return contacts[index]
  }
} as any
