import React from 'react';

const NameContext = React.createContext();
const ProContext = React.createContext();

const Coder2 = () => {
    return (
        <>
            <br />
            <br />
            <div>Coder2---</div>
            <NameContext.Consumer>
                {
                    (data) => {
                        return (
                            <ProContext.Consumer>
                                {
                                    (data) => {
                                        return (
                                            <>
                                                Hello {data.name}
                                                <br />
                                                Pro: {data.pro}
                                            </>
                                        )
                                    }
                                }
                            </ProContext.Consumer>
                        )
                    }
                }
            </NameContext.Consumer>
        </>
    );
}

class Coder1 extends React.Component {
    static contextType = NameContext
    static contextType = ProContext
    render() {
        return (
            <div>
                <div>Coder1---</div>
                Name: {this.context.name} <br />
                Pro: {this.context.pro}

                <Coder2 />
            </div>
        );
    }
}

const nameData = {
    name: 'Numan',
}
const proData = {
    pro: 'MERN',
}


const App = () => {
    return (
        <>
            <NameContext.Provider value={nameData}>
                <ProContext.Provider value={proData}>
                    <br />
                    <Coder1 />
                </ProContext.Provider>
            </NameContext.Provider>
        </>
    );
}

export default App;