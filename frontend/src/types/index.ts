export interface NavLink {
  label: string
  href: string
}

export interface StatItem {
  value: string
  label: string
}

export interface Feature {
  id: string
  icon: string
  title: string
  description: string
}

export interface Project {
  id: string
  title: string
  category: string
  description: string
  imageUrl: string
  tags: string[]
  link?: string
}

export interface Testimonial {
  id: string
  quote: string
  author: string
  role: string
  company: string
  avatarUrl?: string
}

export interface ContactFormData {
  name: string
  email: string
  company?: string
  phone?: string
  message: string
}

export interface ApiResponse<T> {
  success: boolean
  data: T
  message?: string
}
