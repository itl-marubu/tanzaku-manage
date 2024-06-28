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

export const createUser = async (
  loginToken: string,
  email: string,
  password: string,
) => {
  const response = await client.POST('/admin/new', {
    params: {},
    body: {
      email,
      password,
    },
    headers: {
      Authorization: `Bearer ${loginToken}`,
    },
  })

  return response.data
}

export const getAllProjects = async (token: string) => {
  const response = await client.GET('/projects', {
    params: {},
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  return response.data
}

export const getEachProject = async (id: string) => {
  const response = await client
    .GET('/pub/{projectId}', {
      params: {
        path: {
          projectId: id,
        },
      },
    })
    .then(
      (res) => {
        return res.data
      },
      (e) => {
        console.error(e)
        new Error(`error: ${e}`)
        return
      },
    )
  return response
}

export const updateProject = async (
  token: string,
  id: string,
  name: string,
  description?: string,
  noticeLarge?: string,
  noticeQR?: string,
) => {
  const response = await client
    .PATCH('/projects/{projectId}', {
      params: {
        path: {
          projectId: id,
        },
      },
      body: {
        name,
        description,
        noticeLarge,
        noticeQR,
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then(
      (res) => {
        return res.data
      },
      (e) => {
        new Error(`error: ${e}`)
        return
      },
    )
    .catch((e) => {
      new Error(`error: ${e}`)
      return
    })
  return response
}

export const createProject = async (
  token: string,
  name: string,
  description?: string,
  noticeLarge?: string,
  noticeQR?: string,
) => {
  const response = await client.POST('/projects', {
    params: {},
    body: {
      name,
      description,
      noticeLarge,
      noticeQR,
    },
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  return response.data
}

export const getAllTanzakus = async (token: string, projId: string) => {
  const response = await client
    .GET('/projects/{projectId}', {
      params: {
        path: {
          projectId: projId,
        },
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .catch((e) => {
      new Error(`error: ${e}`)
      return
    })
  return response.data
}

type tanzaku = {
  textLine1: string
  textLine2?: string
  nameLine: string
}

export const createTanzaku = async (projId: string, tanzaku: tanzaku) => {
  const response = await client.POST('/tanzaku/{id}', {
    params: {
      path: {
        id: projId,
      },
    },
    body: tanzaku,
  })
  if (response.error) {
    throw new Error(response.error)
  }
  return response.data
}

export const removeTanzaku = async (token: string, id: string) => {
  const response = await client.DELETE('/tanzaku/{id}', {
    params: {
      path: {
        id,
      },
    },
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  return response.data
}

export const reviveTanzaku = async (token: string, id: string) => {
  const response = await client
    .PATCH('/tanzaku/{id}', {
      params: {
        path: {
          id,
        },
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .catch((e) => {
      new Error(`error: ${e}`)
      return
    })
    .then((res) => {
      return res?.data
    })
  return response
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
