const axios = require('axios')

const EVENTS_URL = process.env.REACT_APP_EVENTS_URL
const LOCALSTORAGE_KEYS = {
    accessToken: 'spotify_access_token'
}

const LOCALSTORAGE_VALUES = {
    accessToken: window.localStorage.getItem(LOCALSTORAGE_KEYS.accessToken),
}

export const startAI = async () => {
    try {
        const { data } = await axios.get(`${EVENTS_URL}/start?access_token=${LOCALSTORAGE_VALUES.accessToken}`)
        if (data.status === 200) {
            console.log(data)
            return { success: true }
        } else {
            return { success: false }
        }
    } catch (err) {
        return { success: false }
    }
}

export const setLocation = async (latLong) => {
    try {
        const { data } = await axios.post(`${EVENTS_URL}/location?access_token=${LOCALSTORAGE_VALUES.accessToken}`,
        {
            lat: latLong.lat,
            long: latLong.long
        })
        if (data.status === 200) {
            console.log(data)
            return { success: true, data: data }
        } else {
            return { success: false }
        }
    } catch (err) {
        return { success: false }
    }
}

export const setUserSelection = async (selection) => {
    try {
        const { data } = await axios.post(`${EVENTS_URL}/selection?access_token=${LOCALSTORAGE_VALUES.accessToken}`,
            {
                likedItems: selection.likedItems,
                discardedItems: selection.discardedItems
            })
        if (data.status === 200) {
            console.log(data)
            return { success: true, data: data }
        } else {
            return { success: false }
        }
    } catch (err) {
        return { success: false }
    }
}

export const createUser = async (email) => {
    try {
        const { data } = await axios.post(`${EVENTS_URL}/user/create`,
            {
                email: email
            })
        if (data.status === 200) {
            console.log(data)
            return { success: true, data: data }
        } else {
            return { success: false }
        }
    } catch (err) {
        return { success: false }
    }
}

export const getUserInfo = async () => {
    try {
        const { data } = await axios.get(`${EVENTS_URL}/user?access_token=${LOCALSTORAGE_VALUES.accessToken}`)
        if (data.status === 200) {
            console.log(data)
            return { success: true, data: data.userInfo }
        } else {
            return { success: false }
        }
    } catch (err) {
        return { success: false }
    }
}

export const getEventsStatusURL = () => {
    return `${EVENTS_URL}/status?access_token=${LOCALSTORAGE_VALUES.accessToken}`
}
