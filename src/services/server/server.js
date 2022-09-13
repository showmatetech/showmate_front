const axios = require('axios')

const EVENTS_URL = 'http://localhost:8000/events'
const LOCALSTORAGE_KEYS = {
    accessToken: 'spotify_access_token'
}

const LOCALSTORAGE_VALUES = {
    accessToken: window.localStorage.getItem(LOCALSTORAGE_KEYS.accessToken),
}

const startAI = async () => {
    try {
        const { data } = await axios.get(`${EVENTS_URL}/start?access_token=${LOCALSTORAGE_VALUES.accessToken}`)
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

const getUserInfo = async () => {
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

const setUserSelection = async (selection) => {
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

const createUser = async (email) => {
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

module.exports = { startAI, getUserInfo, setUserSelection, createUser }