import { Request, Response, NextFunction } from 'express'
import { Project } from '../models/Project'

export async function getAllProjects(req: Request, res: Response, next: NextFunction) {
  try {
    const filter: Record<string, unknown> = {}
    if (req.query['featured'] === 'true') filter['featured'] = true
    if (req.query['category']) filter['category'] = req.query['category']

    const projects = await Project.find(filter).sort({ order: 1, createdAt: -1 })
    res.json({ success: true, data: projects })
  } catch (err) {
    next(err)
  }
}

export async function getProjectById(req: Request, res: Response, next: NextFunction) {
  try {
    const project = await Project.findById(req.params['id'])
    if (!project) {
      res.status(404).json({ success: false, message: 'Project not found' })
      return
    }
    res.json({ success: true, data: project })
  } catch (err) {
    next(err)
  }
}

export async function createProject(req: Request, res: Response, next: NextFunction) {
  try {
    const project = await Project.create(req.body)
    res.status(201).json({ success: true, data: project })
  } catch (err) {
    next(err)
  }
}

export async function updateProject(req: Request, res: Response, next: NextFunction) {
  try {
    const project = await Project.findByIdAndUpdate(req.params['id'], req.body, {
      new: true,
      runValidators: true,
    })
    if (!project) {
      res.status(404).json({ success: false, message: 'Project not found' })
      return
    }
    res.json({ success: true, data: project })
  } catch (err) {
    next(err)
  }
}

export async function deleteProject(req: Request, res: Response, next: NextFunction) {
  try {
    const project = await Project.findByIdAndDelete(req.params['id'])
    if (!project) {
      res.status(404).json({ success: false, message: 'Project not found' })
      return
    }
    res.json({ success: true, message: 'Project deleted' })
  } catch (err) {
    next(err)
  }
}
