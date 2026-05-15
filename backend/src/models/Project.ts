export interface IProject {
  _id: string
  title: string
  category: string
  description: string
  imageUrl: string
  tags: string[]
  link?: string
  featured: boolean
  order: number
  createdAt: Date
  updatedAt: Date
}

let projects: IProject[] = []

export const Project = {
  find: (filter: any = {}) => ({
    sort: () => {
      let filtered = projects
      if (filter.featured !== undefined) filtered = filtered.filter(p => p.featured === filter.featured)
      if (filter.category) filtered = filtered.filter(p => p.category === filter.category)
      return filtered
    }
  }),
  findById: async (id: string) => projects.find(p => p._id === id) || null,
  create: async (data: any) => {
    const newProject = {
      ...data,
      _id: Math.random().toString(36).substr(2, 9),
      createdAt: new Date(),
      updatedAt: new Date(),
    }
    projects.push(newProject)
    return newProject
  },
  findByIdAndUpdate: async (id: string, update: any) => {
    const index = projects.findIndex(p => p._id === id)
    if (index === -1) return null
    projects[index] = { ...projects[index], ...update, updatedAt: new Date() }
    return projects[index]
  },
  findByIdAndDelete: async (id: string) => {
    const index = projects.findIndex(p => p._id === id)
    if (index === -1) return null
    const deleted = projects[index]
    projects.splice(index, 1)
    return deleted
  }
} as any
