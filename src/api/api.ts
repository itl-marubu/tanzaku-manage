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

  return response.data.token
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

export const createTanzaku = async (
  token: string,
  projId: string,
  tanzaku: tanzaku,
) => {
  const response = await client.POST('/tanzaku/{projectId}/new', {
    params: {
      path: {
        projectId: projId,
      },
    },
    body: tanzaku,

    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  return response.data
}
