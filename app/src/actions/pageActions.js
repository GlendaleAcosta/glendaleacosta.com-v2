export function increment(){
    return {
        type: 'INCREMENT'
    }
}

export function fetchPage(){
    return {
        type: 'FETCHING_PAGE'
    }
}

export function pageLoaded(){
    return {
        type: 'PAGE_LOADED'
    }
}
