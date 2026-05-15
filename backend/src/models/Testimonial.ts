export interface ITestimonial {
  _id: string
  quote: string
  author: string
  role: string
  company: string
  avatarUrl?: string
  rating: number
  featured: boolean
  createdAt: Date
  updatedAt: Date
}

let testimonials: ITestimonial[] = []

export const Testimonial = {
  find: (filter: any = {}) => ({
    sort: () => {
      let filtered = testimonials
      if (filter.featured !== undefined) filtered = filtered.filter(t => t.featured === filter.featured)
      return filtered
    }
  }),
  create: async (data: any) => {
    const newTestimonial = {
      ...data,
      _id: Math.random().toString(36).substr(2, 9),
      createdAt: new Date(),
      updatedAt: new Date(),
    }
    testimonials.push(newTestimonial)
    return newTestimonial
  },
  findByIdAndDelete: async (id: string) => {
    const index = testimonials.findIndex(t => t._id === id)
    if (index === -1) return null
    const deleted = testimonials[index]
    testimonials.splice(index, 1)
    return deleted
  }
} as any
