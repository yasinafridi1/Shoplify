export const auth = (data) => {
    return {
        type: 'user-info',
        payload: data
    }
}