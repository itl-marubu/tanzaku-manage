import createClient from 'openapi-fetch'
import type { paths } from './client'

const client = createClient<paths>({
  baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL,
})

export const login = async (email: string, password: string) => {
  const response = await client.POST('/admin/login', {
    params: {},
    body: {
      email,
      password,
    },
  })

  return response.data?.token
}

export const createUser = async (email: string, password: string) => {
  const response = await client.POST('/admin/new', {
    params: {},
    body: {
      email,
      password,
    },
  })

  return response.data
}

export const getAllProjects = async (token: string) => {
  const response = await client.GET('/projects/list', {
    params: {},
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  return response.data
}

export const createProject = async (
  token: string,
  name: string,
  description?: string,
) => {
  const response = await client.POST('/projects/add', {
    params: {},
    body: {
      name,
      description,
    },
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  return response.data
}

export const getAllTanzakus = async (token: string, projId: string) => {
  const response = await client.GET('/projects/{projectId}/list', {
    params: {
      path: {
        projectId: projId,
      },
    },
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  return response.data
}

type tanzaku = {
  textLine1: string
  textLine2?: string
  nameLine: string
}

export const createTanzaku = async (projId: string, tanzaku: tanzaku) => {
  const response = await client.POST('/tanzaku/{projectId}/new', {
    params: {
      path: {
        projectId: projId,
      },
    },
    body: tanzaku,
  })
  return response.data
}

export const removeTanzaku = async (token: string, tanzakuId: string) => {
  const response = await client.DELETE('/tanzaku/del/{tanzakuId}', {
    params: {
      path: {
        tanzakuId,
      },
    },
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  return response.data
}

export const removeProject = async (token: string, projectId: string) => {
  const response = await client.DELETE('/projects/{projectId}', {
    params: {
      path: {
        projectId,
      },
    },
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  return response.data
}
