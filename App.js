// const heading = React.createElement('h1',{id : "heading"},'Hello, World !!');

// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(heading);

const heading = React.createElement('div',{id:'parent'},[
    React.createElement('div',{id:'Child1'},[
        React.createElement('h1',{id:'h1'},'Child1 is printed'),
        React.createElement('h1',{id:'h1'},'Child1 is printed')
    ]),
    React.createElement('div',{id:'Child2'},[
        React.createElement('h1',{id:'h1'},'Child2 is printed'),
        React.createElement('h1',{id:'h1'},'Child2 is printed')
    ]),
]);


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(heading);