export const increment = (nodeId) => ({
  type: 'INCREMENT',
  nodeId
})

let nextIdCount = 0
export const createNode = () => ({
  type: 'CREATE_NODE',
  nodeId: `new_${nextIdCount++}`
})

export const deleteNode = (nodeId) => ({
  type: 'DELETE_NODE',
  nodeId
})

export const addChild = (nodeId, childId) => ({
  type: 'ADD_CHILD',
  nodeId,
  childId
})

export const removeChild = (nodeId, childId) => ({
  type: 'REMOVE_CHILD',
  nodeId,
  childId
})
