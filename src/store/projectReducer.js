const initState = {
    projects: [
        {id: 1, title: 'Hello React', content: "blah blah blah"},     
        {id: 2, title: 'Hello React', content: "blah blah blah"},
        {id: 3, title: 'Hello React', content: "blah blah blah"},     
        {id: 4, title: 'Hello React', content: "blah blah blah"},
        {id: 5, title: 'Hello React', content: "blah blah blah"},     
        {id: 6, title: 'Hello React', content: "blah blah blah"},
    ]
    
}

const projectReducer = (state = initState, action) => {
    return state;
}

export default projectReducer