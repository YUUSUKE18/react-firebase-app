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
    switch(action.type) {
        case 'CREATE_PROJECT':
            console.log('created project', action.project);
            break;

        default:
            console.log("hello world");
    }
    return state;
}

export default projectReducer