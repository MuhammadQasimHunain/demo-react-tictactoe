import React from 'react'
export class Header extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {textCounter: 1};
    }
    static getDerivedStateFromProps(newProps,prevProps)
    {
        console.log('Get Derived State From Props.');
        return null;
    }

    handleFunction = () => {
        this.setState({textCounter: this.state.textCounter + 1})
    }

    static  shouldComponentUpdate()
    {
        console.log('Should Component Update')
    }

    static getSnapShotBeforeUpdate()
    {
        console.log('Get Snapshot before update.');
    }

    static componentDidUpdate()
    {
        console.log('Component Did Update.');
    }
    static componentWillUnmount()
    {
        console.log('Component Will Unmount');
    }
    render()
    {
          return (
                <h1>
                    Header Component
                    {this.state.textCounter}
                </h1>
            );
    }
}

export const Content = (props) => {
    return (<p>{props.text}</p>);
}

export const ContentFunctional = ({text}) => {
    return (<p>{text}</p>);
}

